# Gyeol (결): 웹 버전

AI 셀카 퍼스널 컬러 분석과 K뷰티 룩, 제품 추천 사이트예요. Vercel에 그대로 올리면 동작해요.

## 구조

```
index.html        사이트 전체(화면, 룩, 신뢰도 계산, 가상 메이크업)
data/products.js  제품 데이터: 전체 제품·색상(GYEOL_P), 5개 카테고리(GYEOL_CATS), 카테고리별 제품 배치(GYEOL_ITEMS)
api/analyze.js    셀카 분석 서버 함수: 사진을 Claude API로 보내고 결과 JSON만 돌려줌
vercel.json       함수 실행 시간(60초), 보안 헤더
.env.example      필요한 환경 변수
```

사진 흐름: 브라우저에서 1024px JPEG로 줄임(위치·카메라 정보 제거) → `/api/analyze` → Claude API → 결과 JSON.
서버는 사진을 디스크, DB, 로그 어디에도 남기지 않아요.

## 배포하기 (약 15분)

1. **Claude API 키 만들기**: https://platform.claude.com 에서 가입하고 크레딧을 충전한 뒤 API key를 만들어요.
   지출 한도(Spend limit)를 낮게(예: 월 $20) 걸어 두는 걸 추천해요.
2. **GitHub에 올리기**: GitHub에서 새 저장소(예: `gyeol`)를 만들고 이 폴더의 파일을 업로드해요.
   `.env` 파일은 절대 올리지 마세요.
3. **Vercel 연결**: https://vercel.com 에 GitHub로 로그인 → Add New → Project → `gyeol` 저장소 Import
   - Framework Preset: **Other**
   - Environment Variables: `ANTHROPIC_API_KEY` = 1번에서 만든 키
   - Deploy를 누르면 `gyeol-xxxx.vercel.app` 주소가 생겨요.
4. **요청 제한 걸기(권장)**: Vercel 프로젝트 → Firewall → Rate Limiting에서 `/api/analyze`를
   IP당 10분에 10–15회 정도로 제한해요. 코드에도 간단한 제한이 있지만 서버 인스턴스끼리 공유되지 않아서 보조용이에요.

## 나중에 할 것

- **도메인**: Vercel 프로젝트 → Settings → Domains에서 구매한 도메인을 연결해요. 코드 수정은 필요 없어요.
- **어필리에이트**: `index.html`에서 `const AFF={amazon:"",yesstyle:""}`에 제휴 코드를 넣어요.
- **분석(Insights)**: PostHog(무료 플랜)의 설치 스니펫을 `index.html`의 `<head>`에 붙이면
  `season_set`, `look_open`, `product_add`, `shop_click` 이벤트가 자동으로 쌓여요.
  퍼널과 전환율은 PostHog 대시보드에서 봐요.
- **개인정보처리방침 페이지**: 정식 런칭이나 어필리에이트 신청 전에 필요해요.

## 로컬에서 실행

```
npm i -g vercel
cp .env.example .env.local   # 키 입력
vercel dev                   # http://localhost:3000
```

## 비용 감각

분석 1회 ≈ 이미지 약 1,000토큰 + 프롬프트 약 900토큰 입력, 약 300토큰 출력이에요.
모델별 단가는 https://platform.claude.com/docs/en/about-claude/pricing 에서 확인하세요.
모델은 환경 변수 `ANTHROPIC_MODEL`로 바꿀 수 있어요(기본 `claude-sonnet-5-5`).
