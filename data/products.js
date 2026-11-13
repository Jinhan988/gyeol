/* Gyeol product data. Loaded before the app script (plain script, no build step).
   GYEOL_P: every product/shade. s = official shade name; fam:true = shade depends on the person.
   GYEOL_CATS / GYEOL_ITEMS: the five shopping categories and which products sit in each.
   Product-specific details (official ingredients, directions, sources) are added per product as they are verified. */
window.GYEOL_P={
  snail:{b:"COSRX",n:"Advanced Snail 96 Mucin Power Essence",c:"#f1ece2"},
  torriden:{b:"Torriden",n:"DIVE-IN Low Molecular Hyaluronic Acid Serum",c:"#d9ebf3"},
  boj:{b:"Beauty of Joseon",n:"Relief Sun: Rice + Probiotics SPF50+",c:"#f4ead2"},
  laneigeCushion:{b:"Laneige",n:"Neo Cushion Glow",s:"your skin match",fam:true,c:"#efcfb6"},
  clio:{b:"CLIO",n:"Kill Cover The New Founwear Cushion",s:"your skin match",fam:true,c:"#e9c6aa"},
  hera:{b:"HERA",n:"Black Cushion Foundation",s:"your skin match",fam:true,c:"#e3c0a5"},
  lipbalm:{b:"Laneige",n:"Lip Glowy Balm",c:"#f5b8c4"},
  jujube:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#05 Jujube",c:"#e0705c"},
  peachme:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#23 Peach Peach Me",c:"#e98f78"},
  figfig:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#04 Fig Fig",c:"#b5636f"},
  almondrose:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#14 Almond Rose",c:"#b97a7c"},
  snowstraw:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#28 Snow Strawberry",c:"#e27a8e"},
  joseonfig:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#29 Joseon Fig",c:"#a2626a"},
  plumcoke:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#16 Plum Coke",c:"#7e2638"},
  eatdotori:{b:"rom&nd",n:"Juicy Lasting Tint",s:"#13 Eat Dotori",c:"#9c3f2c"},
  goodbrick:{b:"Peripera",n:"Ink the Velvet",s:"01 Good Brick",c:"#a3432f"},
  celebrose:{b:"Peripera",n:"Ink the Velvet",s:"02 Celeb Deep Rose",c:"#a8475a"},
  vitcoral:{b:"Peripera",n:"Ink the Velvet",s:"04 Vitality Coral",c:"#ec7a63"},
  amuse:{b:"AMUSE",n:"Dew Tint",s:"a coral or rose shade for your season",fam:true,c:"#e46f7c"},
  btPampas:{b:"rom&nd",n:"Better Than Palette",s:"01 Pampas Garden",c:"#c3a48c"},
  btMahogany:{b:"rom&nd",n:"Better Than Palette",s:"02 Mahogany Garden",c:"#8a4a3a"},
  btDusty:{b:"rom&nd",n:"Better Than Palette",s:"04 Dusty Fog Garden",c:"#9c8a86"},
  btBerry:{b:"rom&nd",n:"Better Than Palette",s:"07 Berry Fuchsia Garden",c:"#8f3a5c"},
  btPeach:{b:"rom&nd",n:"Better Than Palette",s:"08 Peach Dahlia Garden",c:"#e3a08a"},
  btGlitter:{b:"rom&nd",n:"Better Than Palette",s:"00 Light & Glitter Garden",c:"#efdccb"},
  rosemilktea:{b:"dasique",n:"Shadow Palette",s:"27 Rose Milk Tea",c:"#b88a8c"},
  etudeBrow:{b:"ETUDE",n:"Drawing Eye Brow pencil",s:"a soft brown",fam:true,c:"#6b5040"},
  liner:{b:"CLIO",n:"Sharp, So Simple Waterproof Pencil Liner",s:"brown",fam:true,c:"#5a3a2e"},
  peripBlush:{b:"Peripera",n:"Pure Blushed Sunshine Cheek",s:"a peach or coral shade",fam:true,c:"#f4a79a"},
  dasiqueBlush:{b:"dasique",n:"Blending Mood Cheek",s:"a cool pink or mauve shade",fam:true,c:"#d98c95"},
  /* studio: matte lipstick */
  zm01:{b:"rom&nd",n:"Zero Matte Lipstick",s:"#01 Dusty Pink",c:"#c07f86"},
  zm02:{b:"rom&nd",n:"Zero Matte Lipstick",s:"#02 All That Jazz",c:"#9e4a3c"},
  zm08:{b:"rom&nd",n:"Zero Matte Lipstick",s:"#08 Adorable",c:"#e0705f"},
  zm13:{b:"rom&nd",n:"Zero Matte Lipstick",s:"#13 Red Carpet",c:"#b0233a"},
  zm15:{b:"rom&nd",n:"Zero Matte Lipstick",s:"#15 Midnight",c:"#6b2236"},
  /* studio: blush */
  btcN01:{b:"rom&nd",n:"Better Than Cheek",s:"N01 Nutty Nude",c:"#c99a85"},
  btcN02:{b:"rom&nd",n:"Better Than Cheek",s:"N02 Vine Nude",c:"#c4908f"},
  btcW02:{b:"rom&nd",n:"Better Than Cheek",s:"W02 Strawberry Milk",c:"#f0a2b0"},
  btcW03:{b:"rom&nd",n:"Better Than Cheek",s:"W03 Apricot Milk",c:"#f3a888"},
  btcC01:{b:"rom&nd",n:"Better Than Cheek",s:"C01 Peach Chip",c:"#f2a28c"},
  btcC02:{b:"rom&nd",n:"Better Than Cheek",s:"C02 Blueberry Chip",c:"#c9a2bd"},
  btcC03:{b:"rom&nd",n:"Better Than Cheek",s:"C03 Fig Chip",c:"#c47f88"},
  dqWarm:{b:"dasique",n:"Blending Mood Cheek",s:"01 Warm Blending",c:"#f0a07f"},
  dqCool:{b:"dasique",n:"Blending Mood Cheek",s:"02 Cool Blending",c:"#e3a5c2"},
  dqPeach:{b:"dasique",n:"Blending Mood Cheek",s:"03 Peach Blending",c:"#f5a68a"},
  /* studio: eyes */
  dqSugar:{b:"dasique",n:"Shadow Palette",s:"01 Sugar Brownie",c:"#9a6b55"},
  dqRosePetal:{b:"dasique",n:"Shadow Palette",s:"02 Rose Petal",c:"#c98a8f"},
  dqMilkLatte:{b:"dasique",n:"Shadow Palette",s:"07 Milk Latte",c:"#b89a85"},
  /* skincare */
  banila:{b:"BANILA CO",n:"Clean it Zero Cleansing Balm Original",c:"#f4c6cf"},
  cosrxGel:{b:"COSRX",n:"Low pH Good Morning Gel Cleanser",c:"#cfe6d3"},
  dokdoCleanser:{b:"ROUND LAB",n:"1025 Dokdo Cleanser",c:"#d8e8f2"},
  birchToner:{b:"ROUND LAB",n:"Birch Juice Moisturizing Toner",c:"#dbeaf5"},
  anuaToner:{b:"Anua",n:"Heartleaf 77% Soothing Toner",c:"#e3efd9"},
  dokdoToner:{b:"ROUND LAB",n:"1025 Dokdo Toner",c:"#e2edf6"},
  anuaTxa:{b:"Anua",n:"Niacinamide 10% + TXA 4% Serum",c:"#f1ebe0"},
  bojGlow:{b:"Beauty of Joseon",n:"Glow Serum: Propolis + Niacinamide",c:"#f2d48a"},
  centella:{b:"SKIN1004",n:"Madagascar Centella Ampoule",c:"#f3ecd4"},
  bha:{b:"COSRX",n:"BHA Blackhead Power Liquid",c:"#e9eef0"},
  bojEye:{b:"Beauty of Joseon",n:"Revive Eye Serum: Ginseng + Retinal",c:"#f2e3c4"},
  sbmRetinol:{b:"SOME BY MI",n:"Retinol Intense Reactivating Serum",c:"#f0d8b0"},
  aestura:{b:"AESTURA",n:"Atobarrier 365 Cream",c:"#eef2f6"},
  illiyoon:{b:"ILLIYOON",n:"Ceramide Ato Concentrate Cream",c:"#eaf1f7"},
  aquaBomb:{b:"belif",n:"The True Cream Aqua Bomb",c:"#cfe3f4"},
  soonjung:{b:"ETUDE",n:"SoonJung 2x Barrier Intensive Cream",c:"#e6f0e9"},
  sleepMask:{b:"Laneige",n:"Water Sleeping Mask",c:"#bcd6f2"},
  birchSun:{b:"ROUND LAB",n:"Birch Juice Moisturizing UVLock SPF 45",c:"#e3eef8"},
  skinSun:{b:"SKIN1004",n:"Hyalu-Cica Water-Fit Sun Serum UV",c:"#dcefe9"},
  pimple:{b:"COSRX",n:"Acne Pimple Master Patch",c:"#f3efe6"},
  /* added Nov 2026 */
  cosrxRetinol:{b:"COSRX",n:"The Retinol 0.1 Cream",c:"#f3e6c9"},
  bojRevive:{b:"Beauty of Joseon",n:"Revive Serum: Ginseng + Snail Mucin",c:"#f1e0b8"},
  medicubePdrn:{b:"medicube",n:"PDRN Pink Peptide Serum",c:"#f4c9d2"},
  anuaOil:{b:"Anua",n:"Heartleaf Pore Control Cleansing Oil",c:"#e6efd3"},
  skin1004Foam:{b:"SKIN1004",n:"Madagascar Centella Ampoule Foam",c:"#eef0dc"}
};


/* The five permanent categories. Order = display order. */
window.GYEOL_CATS=[
  {id:"makeup",name:"Makeup",tag:"Try every shade on your own face",subs:[["lips","Lips"],["cheeks","Cheeks"],["eyes","Eyes"],["base","Base"]]},
  {id:"skincare",name:"Skincare",tag:"Toners, serums and moisturizers",subs:[["toner","Toner & Essence"],["serum","Serum & Ampoule"],["cream","Moisturizer"]]},
  {id:"antiaging",name:"Anti-Aging",tag:"Retinoids, firming serums and eye care",subs:[["retinoid","Retinol & Retinal"],["firming","Firming & Repair"],["eye","Eye Care"]]},
  {id:"cleansing",name:"Cleansing",tag:"Balms, oils, foams and exfoliants",subs:[["balm","Balm & Oil"],["foam","Foam & Gel"],["exfoliant","Exfoliant"]]},
  {id:"sun",name:"Sun & Special Care",tag:"SPF, spot care and overnight care",subs:[["sunscreen","Sunscreen"],["spot","Spot Care"],["mask","Overnight Mask"],["lipcare","Lip Care"]]}
];

/* Shoppable items. Makeup items group the shades of one product (shades = GYEOL_P ids).
   type = how-to guide used on the product page. ing = key ingredients named on the product itself.
   also = extra [category, sub] places the item appears. */
/* Verified fields (Nov 2026): ing, when, how, caution, src, srcName come from the linked page. Items without them use general guides. */
window.GYEOL_ITEMS={
  /* makeup: lips */
  mk_jlt:{cat:"makeup",sub:"lips",type:"tint",shades:["jujube","peachme","snowstraw","figfig","almondrose","joseonfig","eatdotori","plumcoke"]},
  mk_itv:{cat:"makeup",sub:"lips",type:"tint",shades:["vitcoral","celebrose","goodbrick"]},
  mk_zm:{cat:"makeup",sub:"lips",type:"lipstick",shades:["zm08","zm01","zm02","zm13","zm15"]},
  lipbalm:{cat:"makeup",sub:"lips",type:"balm",also:[["sun","lipcare"]],how:["Apply directly to your lips whenever you need it.", "Reapply through the day for moisture and shine."],src:"https://www.dodoskin.com/products/laneige-lip-glowy-balm-10g",srcName:"Dodoskin product page"},
  amuse:{cat:"makeup",sub:"lips",type:"tint"},
  /* makeup: cheeks */
  mk_btc:{cat:"makeup",sub:"cheeks",type:"blush",shades:["btcW03","btcC01","btcN01","btcW02","btcN02","btcC02","btcC03"]},
  mk_bmc:{cat:"makeup",sub:"cheeks",type:"blush",shades:["dqPeach","dqWarm","dqCool"]},
  peripBlush:{cat:"makeup",sub:"cheeks",type:"blush"},
  /* makeup: eyes */
  mk_btp:{cat:"makeup",sub:"eyes",type:"palette",shades:["btPeach","btPampas","btMahogany","btDusty","btBerry","btGlitter"]},
  mk_dsp:{cat:"makeup",sub:"eyes",type:"palette",shades:["dqMilkLatte","dqSugar","dqRosePetal","rosemilktea"]},
  liner:{cat:"makeup",sub:"eyes",type:"liner"},
  etudeBrow:{cat:"makeup",sub:"eyes",type:"brow"},
  /* makeup: base */
  laneigeCushion:{cat:"makeup",sub:"base",type:"cushion"},
  clio:{cat:"makeup",sub:"base",type:"cushion"},
  hera:{cat:"makeup",sub:"base",type:"cushion"},
  /* skincare */
  anuaToner:{cat:"skincare",sub:"toner",type:"toner",ing:["heartleaf", "ha"],when:"AM & PM",how:["Use after washing your face.", "Apply with a cotton pad, or pat it in with your fingertips all over your face."],caution:["Patch test before using it on your whole face."],src:"https://www.ulta.com/p/heartleaf-77-soothing-toner-pimprod2048929",srcName:"Ulta Beauty product page"},
  birchToner:{cat:"skincare",sub:"toner",type:"toner",ing:["birch", "ha"],how:["After cleansing, dispense a small amount onto your face and pat gently to absorb."],caution:[],src:"https://www.ulta.com/p/birch-juice-moisturizing-toner-pimprod2049657",srcName:"Ulta Beauty product page"},
  dokdoToner:{cat:"skincare",sub:"toner",type:"toner",ing:["panthenol"],what:"A gentle, hydrating toner with a mild exfoliant that clears away dead skin and excess oil.",how:["After cleansing, soak a cotton pad and sweep gently over your face.", "Or pat it into your skin with your hands until absorbed."],caution:[],src:"https://www.ulta.com/p/1025-dokdo-toner-pimprod2052236",srcName:"Ulta Beauty product page"},
  snail:{cat:"skincare",sub:"toner",type:"essence",ing:["snail", "ha"],how:["After cleansing and toning, put a small amount in your hands.", "Pat it gently onto your face.", "Follow with moisturizer."],caution:["Patch test first if your skin is sensitive."],src:"https://www.ulta.com/p/advanced-snail-96-mucin-power-essence-xlsImpprod15641052",srcName:"Ulta Beauty product page"},
  torriden:{cat:"skincare",sub:"serum",type:"serum",ing:["ha", "panthenol", "ceramide"],how:["After cleansing and toning, apply an even layer over your face.", "Pat gently to help it absorb.", "Follow with moisturizer to seal in hydration."],caution:[],src:"https://well.ca/products/torriden-dive-in-low-molecular_330686.html",srcName:"Well.ca product page"},
  anuaTxa:{cat:"skincare",sub:"serum",type:"serum",ing:["niacinamide", "txa", "arbutin"],when:"AM & PM",how:["At first, apply a few drops to the areas you want to treat. Use it more as your skin gets used to it.", "Use morning and night, before oils and moisturizer."],caution:["Stop using it if irritation occurs.", "Wear SPF 30 or higher during the day.", "Avoid your eyes and broken skin."],src:"https://www.ulta.com/p/niacinamide-10-txa-4-serum-brightening-dark-spots-pimprod2048921",srcName:"Ulta Beauty product page"},
  bojGlow:{cat:"skincare",sub:"serum",type:"serum",ing:["propolis", "niacinamide", "bha"],when:"AM & PM",how:["Dispense 2–3 drops into your palm.", "Apply to your face and neck.", "Tap lightly with your fingertips until absorbed."],caution:["Contains BHA. Wear sunscreen during the day.", "Patch test first if your skin is sensitive."],src:"https://beautyofjoseon.com/products/glow-serum-propolis-niacinamide",srcName:"the brand's official page"},
  centella:{cat:"skincare",sub:"serum",type:"serum",ing:["centella"],when:"AM & PM",how:["Apply 2–3 drops on cleansed skin.", "Pat or gently massage it in.", "Follow with moisturizer."],caution:["Avoid contact with your eyes. Stop using it if irritation occurs."],src:"https://www.ulta.com/p/madagascar-centella-ampoule-pimprod2045880/",srcName:"Ulta Beauty product page"},
  aestura:{cat:"skincare",sub:"cream",type:"cream",ing:["ceramide", "niacinamide"],when:"AM & PM",how:["Apply evenly onto clean skin morning and night, after toner and serum.", "Smooth and press it gently into your skin."],caution:[],src:"https://int.aestura.com/products/atobarrier365-cream",srcName:"the brand's official page"},
  illiyoon:{cat:"skincare",sub:"cream",type:"cream",how:["After cleansing and toning, apply an even layer.", "Pat lightly to help it absorb."],caution:[],src:"https://www.dodoskin.com/products/illiyoon-ceramide-ato-concentrate-cream-150ml",srcName:"Dodoskin product page"},
  aquaBomb:{cat:"skincare",sub:"cream",type:"cream",when:"AM & PM",how:["Apply to your face and neck, morning and night.", "For extra hydration, apply a thicker layer at night and leave it on as an overnight mask."],caution:[],src:"https://kbeauti.ca/products/belif-the-true-cream-aqua-bomb-50-ml",srcName:"KBeauti.ca product page"},
  soonjung:{cat:"skincare",sub:"cream",type:"cream",ing:["panthenol", "madecassoside"],how:["Apply after your serum or ampoule.", "Spread a small amount from the center of your face outward.", "Pat lightly to help it absorb."],caution:[],src:"https://www.ulta.com/p/soonjung-2x-barrier-intensive-cream-pimprod2049666/",srcName:"Ulta Beauty product page"},
  /* anti-aging */
  sbmRetinol:{cat:"antiaging",sub:"retinoid",type:"retinoid",ing:["retinol", "retinal", "niacinamide"],when:"PM",how:["After cleansing, apply a moderate amount at your serum step.", "Massage it gently over your face, then pat to absorb."],caution:["The brand recommends using it in the evening, as it may increase sensitivity to sunlight.", "Wear sunscreen during the day while using it.", "General advice: if you're pregnant or breastfeeding, ask your doctor before using retinoids."],src:"https://www.ulta.com/p/retinol-intense-reactivating-serum-pimprod2051779/",srcName:"Ulta Beauty product page"},
  bojEye:{cat:"antiaging",sub:"eye",type:"eye",ing:["retinal", "ginseng"],when:"AM & PM",how:["Pump the applicator 1–2 times.", "With your ring finger, gently pat under and around your eyes.", "In the morning, always layer sunscreen on top."],caution:["Contains retinal. Avoid it if you're pregnant or breastfeeding.", "Don't mix it with AHA, BHA or PHA.", "With dry or sensitive skin, start with a small amount, or layer it over a gentle moisturizer."],src:"https://beautyofjoseon.com/products/revive-eye-serum-ginseng-retinal",srcName:"the brand's official page"},
  /* cleansing */
  banila:{cat:"cleansing",sub:"balm",type:"cbalm",how:["Start with dry hands and a dry face.", "Warm a pea-sized scoop between your fingertips and massage over your face in small circles.", "Add a little water to emulsify. The balm turns milky.", "Rinse with lukewarm water. For a double cleanse, follow with a water-based cleanser."],caution:["Very sensitive eyes or heavy eye makeup? Use an eye makeup remover first."],src:"https://banilausa.com/blogs/skincare-guides/how-to-use-a-cleansing-balm",srcName:"Banila Co's official guide"},
  cosrxGel:{cat:"cleansing",sub:"foam",type:"foam",ing:["bha", "teatree"],when:"AM & PM",how:["Use morning and night, after removing makeup. Start with wet hands and face.", "Lather a small amount in your hands.", "Massage gently over your face, avoiding the eyes and mouth, then rinse with warm water."],caution:[],src:"https://www.cosrx.com/products/low-ph-good-morning-gel-cleanser",srcName:"the brand's official page"},
  dokdoCleanser:{cat:"cleansing",sub:"foam",type:"foam",ing:["ha", "panthenol", "ceramide"],how:["Lather a small amount into a rich foam.", "Massage gently over damp skin, then rinse well with lukewarm water."],caution:[],src:"https://www.ulta.com/p/1025-dokdo-cleanser-pimprod2052238",srcName:"Ulta Beauty product page"},
  bha:{cat:"cleansing",sub:"exfoliant",type:"exfoliant",ing:["bha"],when:"AM or PM",how:["After cleansing, use it at your toner or essence step.", "Let it absorb fully before your next step.", "Start 2–3 times a week and build up slowly as your skin allows."],caution:["If you use it during the day, wear sunscreen.", "The brand suggests it for people already used to acids."],src:"https://www.ulta.com/p/bha-blackhead-power-liquid-xlsImpprod15641056",srcName:"Ulta Beauty product page"},
  /* sun & special care */
  boj:{cat:"sun",sub:"sunscreen",type:"sunscreen",ing:["rice", "probiotics"],how:["As the last step of your skincare, spread a generous amount evenly over sun-exposed areas.", "Reapply every 2–3 hours."],caution:["If you're pregnant, check with your doctor first.", "Korean, US and Canadian versions can differ in formula and SPF label. Check the box you receive."],src:"https://beautyofjoseon.com/collections/sunscreen/products/relief-sun-rice-probiotics",srcName:"the brand's official page"},
  birchSun:{cat:"sun",sub:"sunscreen",type:"sunscreen",ing:["birch", "niacinamide", "ha"],how:["As the last step of your skincare, apply a generous amount and spread it evenly."],caution:["This is the US version (SPF 45). In Korea it's sold as Birch Juice Moisturizing Sun Cream SPF50+.", "Keep it out of your eyes. Stop using it and ask a doctor if a rash occurs.", "General sunscreen advice: reapply at least every 2 hours outdoors."],src:"https://www.ulta.com/p/birch-juice-moisturizing-uvlock-spf-45-pimprod2049647",srcName:"Ulta Beauty product page"},
  skinSun:{cat:"sun",sub:"sunscreen",type:"sunscreen",ing:["centella", "ha"],how:["As the last step of your skincare, apply evenly to exposed areas such as your face and neck."],caution:["This is the US version (broad spectrum SPF 50). The Korean version has a different formula and label.", "General sunscreen advice: reapply at least every 2 hours outdoors."],src:"https://www.skin1004.com/products/hyalu-cica-water-fit-sun-serum-uv",srcName:"the brand's official page"},
  pimple:{cat:"sun",sub:"spot",type:"spot",how:["After cleansing, dry the spot.", "Apply a patch, sticky side down, before any essence or moisturizer.", "Leave it on, ideally overnight."],caution:[],src:"https://sokoglam.com/products/cosrx-acne-pimple-master-patch",srcName:"Soko Glam product page"},
  sleepMask:{cat:"sun",sub:"mask",type:"mask",ing:["probiotics", "squalane"],when:"PM",how:["Use 2–3 times a week as the last step of your night routine.", "Leave it on overnight and rinse off in the morning.", "Use a little more when your skin feels dry."],caution:[],src:"https://us.spacenk.com/us/skincare/treatment/masks/water-sleeping-mask-UK200038460.html",srcName:"Space NK product page"},
  cosrxRetinol:{cat:"antiaging",sub:"retinoid",type:"retinoid",ing:["retinol", "panthenol"],when:"PM",how:["Weeks 1–2: every other night, after cleansing, apply a rice-grain amount to areas of concern at your moisturizer step.", "From week 3: you may use it every night and spread it over your whole face.", "Pat it in gently with your ring finger."],caution:["Patch test before use.", "Avoid retinoids if you're pregnant or breastfeeding.", "Retinol can increase sun sensitivity. Wear sunscreen while using it.", "Don't pair it with scrubs, peels, vitamin C, benzoyl peroxide or AHA/BHA.", "Some irritation at first is normal. If it lasts, use it less often or stop.", "Keep it away from heat and direct sunlight."],src:"https://cosrx.com/products/the-retinol-0-1-cream",srcName:"the brand's official page"},
  bojRevive:{cat:"antiaging",sub:"firming",type:"serum",ing:["ginseng", "snail", "centella"],when:"AM & PM",what:"A ginseng and snail mucin serum for dry, tired skin that has lost its bounce.",how:["Dispense a few drops onto clean hands.", "Pat gently onto your face to help it absorb.", "Follow with moisturizer, and sunscreen in the morning."],caution:["Keep the dropper from touching your skin so the formula stays clean."],src:"https://beautyofjoseon.com/products/revive-serum-ginseng-snail-mucin",srcName:"the brand's official page"},
  medicubePdrn:{cat:"antiaging",sub:"firming",type:"serum",ing:["pdrn", "peptides", "niacinamide", "ha"],when:"AM & PM",what:"A PDRN and peptide serum for a plump, firm-looking glow.",how:["Apply a generous amount morning and night on clean, dry skin.", "Spread over your face and neck, patting gently to help it absorb.", "Follow with moisturizer, and sunscreen during the day."],caution:["For external use only. Stop using it if irritation occurs."],src:"https://www.ulta.com/p/pdrn-pink-peptide-serum-pimprod2053536",srcName:"Ulta Beauty product page"},
  anuaOil:{cat:"cleansing",sub:"balm",type:"coil",ing:["heartleaf"],when:"AM & PM",how:["Apply to dry skin and massage gently for 1–2 minutes to lift makeup and impurities.", "Add water to emulsify.", "Rinse, then wash off any oil with a water-based cleanser."],caution:["Avoid direct contact with your eyes.", "Patch test first if your skin is reactive."],src:"https://www.ulta.com/p/heartleaf-pore-control-cleansing-oil-pimprod2048919",srcName:"Ulta Beauty product page"},
  skin1004Foam:{cat:"cleansing",sub:"foam",type:"foam",ing:["centella", "ha"],when:"AM & PM",how:["Lather a small amount on wet palms.", "Massage gently over your face, then rinse with lukewarm water."],caution:["Avoid contact with your eyes. Stop using it if irritation occurs."],src:"https://www.ulta.com/p/madagascar-centella-ampoule-foam-pimprod2045881",srcName:"Ulta Beauty product page"}
};
