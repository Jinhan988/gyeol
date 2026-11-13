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
  birchSun:{b:"ROUND LAB",n:"Birch Juice Moisturizing Sun Cream",c:"#e3eef8"},
  skinSun:{b:"SKIN1004",n:"Hyalu-Cica Water-fit Sun Serum",c:"#dcefe9"},
  pimple:{b:"COSRX",n:"Acne Pimple Master Patch",c:"#f3efe6"}
};


/* The five permanent categories. Order = display order. */
window.GYEOL_CATS=[
  {id:"makeup",name:"Makeup",tag:"Try every shade on your own face",subs:[["lips","Lips"],["cheeks","Cheeks"],["eyes","Eyes"],["base","Base"]]},
  {id:"skincare",name:"Skincare",tag:"Toners, serums and moisturizers",subs:[["toner","Toner & Essence"],["serum","Serum & Ampoule"],["cream","Moisturizer"]]},
  {id:"antiaging",name:"Anti-Aging",tag:"Retinoids and eye care",subs:[["retinoid","Retinol & Retinal"],["eye","Eye Care"]]},
  {id:"cleansing",name:"Cleansing",tag:"Balms, foams and exfoliants",subs:[["balm","Cleansing Balm"],["foam","Foam & Gel"],["exfoliant","Exfoliant"]]},
  {id:"sun",name:"Sun & Special Care",tag:"SPF, spot care and overnight care",subs:[["sunscreen","Sunscreen"],["spot","Spot Care"],["mask","Overnight Mask"],["lipcare","Lip Care"]]}
];

/* Shoppable items. Makeup items group the shades of one product (shades = GYEOL_P ids).
   type = how-to guide used on the product page. ing = key ingredients named on the product itself.
   also = extra [category, sub] places the item appears. */
window.GYEOL_ITEMS={
  /* makeup: lips */
  mk_jlt:{cat:"makeup",sub:"lips",type:"tint",shades:["jujube","peachme","snowstraw","figfig","almondrose","joseonfig","eatdotori","plumcoke"]},
  mk_itv:{cat:"makeup",sub:"lips",type:"tint",shades:["vitcoral","celebrose","goodbrick"]},
  mk_zm:{cat:"makeup",sub:"lips",type:"lipstick",shades:["zm08","zm01","zm02","zm13","zm15"]},
  lipbalm:{cat:"makeup",sub:"lips",type:"balm",also:[["sun","lipcare"]]},
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
  anuaToner:{cat:"skincare",sub:"toner",type:"toner",ing:["heartleaf"]},
  birchToner:{cat:"skincare",sub:"toner",type:"toner",ing:["birch"]},
  dokdoToner:{cat:"skincare",sub:"toner",type:"toner"},
  snail:{cat:"skincare",sub:"toner",type:"essence",ing:["snail"]},
  torriden:{cat:"skincare",sub:"serum",type:"serum",ing:["ha"]},
  anuaTxa:{cat:"skincare",sub:"serum",type:"serum",ing:["niacinamide","txa"]},
  bojGlow:{cat:"skincare",sub:"serum",type:"serum",ing:["propolis","niacinamide"]},
  centella:{cat:"skincare",sub:"serum",type:"serum",ing:["centella"]},
  aestura:{cat:"skincare",sub:"cream",type:"cream"},
  illiyoon:{cat:"skincare",sub:"cream",type:"cream",ing:["ceramide"]},
  aquaBomb:{cat:"skincare",sub:"cream",type:"cream"},
  soonjung:{cat:"skincare",sub:"cream",type:"cream"},
  /* anti-aging */
  sbmRetinol:{cat:"antiaging",sub:"retinoid",type:"retinoid",ing:["retinol"]},
  bojEye:{cat:"antiaging",sub:"eye",type:"eye",ing:["ginseng","retinal"]},
  /* cleansing */
  banila:{cat:"cleansing",sub:"balm",type:"cbalm"},
  cosrxGel:{cat:"cleansing",sub:"foam",type:"foam"},
  dokdoCleanser:{cat:"cleansing",sub:"foam",type:"foam"},
  bha:{cat:"cleansing",sub:"exfoliant",type:"exfoliant",ing:["bha"]},
  /* sun & special care */
  boj:{cat:"sun",sub:"sunscreen",type:"sunscreen",ing:["rice","probiotics"]},
  birchSun:{cat:"sun",sub:"sunscreen",type:"sunscreen",ing:["birch"]},
  skinSun:{cat:"sun",sub:"sunscreen",type:"sunscreen",ing:["ha","centella"]},
  pimple:{cat:"sun",sub:"spot",type:"spot"},
  sleepMask:{cat:"sun",sub:"mask",type:"mask"}
};
