// Dalbom (formerly Gyeol) — AI personal color analysis endpoint (Vercel serverless function).
// Receives one resized selfie as base64 JPEG, asks the Claude API to check the photo
// and classify the season, and returns a small JSON result.
// The photo is never written to disk, a database or the logs.

const API_URL = "https://api.anthropic.com/v1/messages";
const API_VERSION = "2026-10-21";
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5";
const MAX_B64 = 4_000_000; // ~3 MB image; the browser sends ~150-400 KB after resizing
const SEASONS = ["spring", "summer", "autumn", "winter"];
const LIGHTING = ["daylight", "warm_cast", "cool_cast", "dim", "too_dark", "harsh", "filtered"];

const PROMPT = `You are a careful Korean personal color (퍼스널 컬러) consultant. The attached image is a selfie the user uploaded to find their season.
Work in this order and report every check honestly.
1. Face: is one whole face in frame, large enough, roughly front-facing, in focus and not covered? face_ok true/false, with a short face_note if false (what to change).
2. Lighting: "daylight" (even natural light), "warm_cast" (yellow/orange tint), "cool_cast" (blue tint), "dim" (dark but readable), "too_dark" (skin tone can't be read), "harsh" (strong shadows or blown-out highlights), or "filtered" (beauty filter, heavy editing or strong color grading).
3. Features: is bare skin on the cheeks clearly visible (skin_visible)? Are the irises clearly visible (eyes_visible; false if closed, sunglasses, too small, glare)? Is the natural hair visible (hair_visible; false if covered, cropped out, or obviously dyed an unnatural color)? Is there heavy makeup that changes skin tone (heavy_makeup)?
4. Only if face_ok and skin_visible are true and lighting is not "too_dark" or "filtered": classify into exactly one season and set fit (0-100) = how clearly the VISIBLE features point to that season over the others. Otherwise set season to null and fit to 0.
Seasons: spring = warm undertone, light/bright, clear; summer = cool undertone, light, soft/muted; autumn = warm undertone, deep, muted; winter = cool undertone, deep or high contrast, clear.
Never guess features you cannot see: if eyes_visible is false, set observations.eyes to null and do not use eye color; if hair_visible is false, set observations.hair to null and do not use hair color.
Do not comment on attractiveness, age, or anything other than coloring.
consultant_note: 2 sentences speaking to the user ("you"), warm, upbeat and specific to what you saw: name a feature you noticed in a positive way and say which shades will make them glow and why. Focus only on what flatters them; never describe any feature as a flaw or problem. Stay accurate to what you saw. Empty string if season is null.
Reply with only this JSON:
{"face_ok":true,"face_note":"","lighting":"daylight","skin_visible":true,"eyes_visible":true,"hair_visible":true,"heavy_makeup":false,"season":"spring|summer|autumn|winter|null","fit":0,"undertone":"warm|cool|neutral","contrast":"low|medium|high","observations":{"skin":"short phrase","eyes":"short phrase or null","hair":"short phrase or null"},"consultant_note":"..."}`;

// Best-effort limit per IP. Serverless instances don't share memory, so this only
// slows down bursts; use Vercel's firewall rate limiting or a KV store for a real limit.
const hits = new Map();
function limited(ip) {
  const now = Date.now(), win = 10 * 60 * 1000, max = 12;
  const list = (hits.get(ip) || []).filter((t) => now - t < win);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > max;
}

function fail(res, status, code) {
  res.status(status).json({ code });
}

function parseJson(text) {
  try { return JSON.parse(text); } catch {}
  const a = text.indexOf("{"), b = text.lastIndexOf("}");
  if (a >= 0 && b > a) { try { return JSON.parse(text.slice(a, b + 1)); } catch {} }
  return null;
}

const str = (v, n = 200) => (typeof v === "string" ? v.slice(0, n) : "");
const opt = (v) => (typeof v === "string" && v && v !== "null" ? v.slice(0, 120) : null);

// Only pass on known fields with known types, so the page never renders unexpected content.
function clean(r) {
  const o = r.observations || {};
  return {
    face_ok: r.face_ok === true,
    face_note: str(r.face_note),
    lighting: LIGHTING.includes(r.lighting) ? r.lighting : "dim",
    skin_visible: r.skin_visible !== false,
    eyes_visible: r.eyes_visible !== false,
    hair_visible: r.hair_visible !== false,
    heavy_makeup: r.heavy_makeup === true,
    season: SEASONS.includes(r.season) ? r.season : null,
    fit: Math.max(0, Math.min(100, Number(r.fit) || 0)),
    undertone: ["warm", "cool", "neutral"].includes(r.undertone) ? r.undertone : "neutral",
    contrast: ["low", "medium", "high"].includes(r.contrast) ? r.contrast : "medium",
    observations: { skin: opt(o.skin), eyes: opt(o.eyes), hair: opt(o.hair) },
    consultant_note: str(r.consultant_note, 400),
  };
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return fail(res, 405, "method_not_allowed");
  if (!process.env.ANTHROPIC_API_KEY) return fail(res, 500, "not_configured");

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return fail(res, 429, "rate_limited");

  const image = req.body && req.body.image;
  if (typeof image !== "string" || image.length < 100 || !/^[A-Za-z0-9+/=]+$/.test(image.slice(0, 200)))
    return fail(res, 400, "image_rejected");
  if (image.length > MAX_B64) return fail(res, 413, "image_rejected");

  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 55_000);
  try {
    const api = await fetch(API_URL, {
      method: "POST",
      signal: ctl.signal,
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": API_VERSION,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        messages: [{
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: "image/jpeg", data: image } },
            { type: "text", text: PROMPT },
          ],
        }],
      }),
    });
    if (api.status === 429) return fail(res, 429, "rate_limited");
    if (!api.ok) {
      console.error("analyze: upstream status", api.status); // status only, never the image
      return fail(res, api.status === 400 ? 400 : 502, api.status === 400 ? "image_rejected" : "upstream_error");
    }
    const data = await api.json();
    if (data.stop_reason === "refusal") return fail(res, 422, "refused");
    const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("");
    const parsed = parseJson(text);
    if (!parsed) return fail(res, 502, "invalid_json");
    return res.status(200).json(clean(parsed));
  } catch (e) {
    console.error("analyze: failed", e && e.name);
    return fail(res, 504, "upstream_error");
  } finally {
    clearTimeout(timer);
  }
}
