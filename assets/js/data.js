// ============================================================
// TENACITY LOCKS LTD — Product Data Store
// ============================================================

const SITE = {
  name: "Tenacity Locks Ltd",
  phone1: "0711 77 66 88",
  phone2: "0729 863950",
  phone3: "0734 729759",
  email: "info@tenacitylocks.com",
  address: "House 41, Kijabe Street, Nairobi",
  addressFull: "House 41, Kijabe Street, opposite Textbook Centre, next to Kenya Literature Bureau, Nairobi",
  mpesaPaybill: "222111",
  mpesaAccount: "863950",
  whatsapp: "254711776688",
  instagram: "https://www.instagram.com/tenacitylocksltd",
  mapsLink: "https://maps.app.goo.gl/Hr87bTrQ3fA6AnKr9",
  reviewLink: "https://g.page/r/CUbxx1GzNf6QEB0/review",
  founded: "2011",
};

const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "entry-level", name: "Entry Level Locks" },
  { id: "single-pin-keyless", name: "Single Pin Keyless Locks" },
  { id: "single-pin-ndk", name: "THE TM53 SERIES INTERNAL DOOR LOCKS ON OFFER!!!" },
  { id: "premium-quality", name: "Premium Quality Internal Door Locks" },
  { id: "f6-series", name: "F6 series 3-PIN locks with Non-duplicatable keys" },
  { id: "pure-stainless-steel", name: "TENACITY PURE STAINLESS STEEL LOCK CASE WITH LIFETIME GUARANTEE!!!" },
  { id: "deadlocks", name: "High Security Steel Door Cylinder Deadlocks" },
];

const PRODUCTS = [
  // ─── ENTRY LEVEL LOCKS ────────────────────────────────────


  {
    id: "tb68-mac",
    name: "Tenacity Main Door Entry Level Lock TB68 MAC",
    category: "entry-level",
    price: 4000,
    originalPrice: 5000,
    onOffer: true,
    image: "assets/images/products/tb68-mac.jpg",
    images: ["assets/images/products/tb68-mac.jpg","assets/images/products/tb68-mac-promo.jpg"],
    description: "Tenacity TB68 MAC (Matt Antique Copper) entry level main door lock. Warm copper finish for a classic look.",
    features: ["5 Keys Included","CE Certified","Anti-pick cylinder","5-year guarantee","MAC Finish"],
    sku: "TB68-MAC",
  },
  {
    id: "tb68-mcf",
    name: "Tenacity Main Door Entry Level Lock TB68 MCF",
    category: "entry-level",
    price: 4000,
    originalPrice: 5000,
    onOffer: true,
    image: "assets/images/products/tb68-mcf.jpg",
    images: ["assets/images/products/tb68-mcf.jpg","assets/images/products/tb68-mcf-promo.jpg"],
    description: "Tenacity TB68 MCF (Matt Coffee) entry level main door lock. Stylish coffee/brown finish. CE certified.",
    features: ["5 Keys Included","CE Certified","Anti-pick cylinder","5-year guarantee","MCF Finish"],
    sku: "TB68-MCF",
  },

  // ─── SINGLE PIN KEYLESS LOCKS ─────────────────────────────
  {
    id: "tm53-black-keyless",
    name: "TM53 Black Keyless Bathroom Lock",
    category: "single-pin-keyless",
    price: 1500,
    originalPrice: 2000,
    onOffer: true,
    image: "assets/images/products/tm53-black-keyless.jpg",
    images: ["assets/images/products/tm53-black-keyless.jpg"],
    description: "TM53 Black keyless bathroom lock. Thumb turn inside, blank outside for privacy. Modern matte black finish.",
    features: ["No Key Required","Privacy lock","Matte black finish","CE Certified","Easy fit"],
    sku: "TM53-BLK-KL",
  },
  {
    id: "tm53-mab-keyless",
    name: "TM53 MAB Keyless Bathroom Lock",
    category: "single-pin-keyless",
    price: 1500,
    originalPrice: 2000,
    onOffer: true,
    image: "assets/images/products/tm53-mab-keyless.jpg",
    images: ["assets/images/products/tm53-mab-keyless.jpg"],
    description: "TM53 MAB keyless bathroom lock. Antique brass finish thumb turn privacy lock.",
    features: ["No Key Required","Privacy lock","MAB finish","CE Certified","Easy fit"],
    sku: "TM53-MAB-KL",
  },
  {
    id: "tm53-mcf-keyless",
    name: "TM53 MCF Keyless Bathroom Lock",
    category: "single-pin-keyless",
    price: 1500,
    originalPrice: 2000,
    onOffer: true,
    image: "assets/images/products/tm53-ss-keyless.jpg",
    images: ["assets/images/products/tm53-ss-keyless.jpg"],
    description: "TM53 MCF (Matt Coffee) keyless bathroom lock. Rich coffee/gold finish.",
    features: ["No Key Required","Privacy lock","MCF finish","CE Certified","Easy fit"],
    sku: "TM53-MCF-KL",
  },
  {
    id: "tm53-mac-keyless",
    name: "TM53 MAC Keyless Bathroom Lock",
    category: "single-pin-keyless",
    price: 1500,
    originalPrice: 2000,
    onOffer: true,
    image: "assets/images/products/tm53-ss-keys.jpg",
    images: ["assets/images/products/tm53-ss-keys.jpg"],
    description: "TM53 MAC (Matt Antique Copper) keyless bathroom lock.",
    features: ["No Key Required","Privacy lock","MAC finish","CE Certified","Easy fit"],
    sku: "TM53-MAC-KL",
  },

  // ─── SINGLE PIN LOCKS — NDK ───────────────────────────────
  {
    id: "tm53-black-keys",
    name: "TM53 Black — Keys Both Sides",
    category: "single-pin-ndk",
    price: 1500,
    originalPrice: 2000,
    onOffer: true,
    image: "assets/images/products/tm53-black-keys.jpg",
    images: ["assets/images/products/tm53-black-keys.jpg"],
    description: "TM53 Black lock with keys on both sides. Perfect for office rooms requiring key access from both sides.",
    features: ["Keys Both Sides","Non-duplicatable option","Matte black finish","CE Certified"],
    sku: "TM53-BLK-K",
  },
  {
    id: "tm53-mac-keys",
    name: "TM53 MAC — Keys Both Sides",
    category: "single-pin-ndk",
    price: 1500,
    originalPrice: 2000,
    onOffer: true,
    image: "assets/images/products/tm53-mac-keys.jpg",
    images: ["assets/images/products/tm53-mac-keys.jpg"],
    description: "TM53 MAC (Antique Copper) lock with keys on both sides.",
    features: ["Keys Both Sides","Non-duplicatable option","MAC finish","CE Certified"],
    sku: "TM53-MAC-K",
  },
  {
    id: "c38-black-keyless",
    name: "Tenacity C38 Black Keyless Bathroom Lock",
    category: "single-pin-keyless",
    price: 3000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/c38-black-keyless.jpg",
    images: ["assets/images/products/c38-black-keyless.jpg"],
    description: "Premium C38 Black keyless bathroom lock. High-grade construction with smooth operation.",
    features: ["No Key Required","C38 Series","Matte black","CE Certified","5-year guarantee"],
    sku: "C38-BLK-KL",
  },
  {
    id: "c38-black-keys",
    name: "Tenacity C38 Black — Keys Both Sides",
    category: "single-pin-ndk",
    price: 2500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/c38-black-keys.jpg",
    images: ["assets/images/products/c38-black-keys.jpg"],
    description: "Premium C38 Black lock with keys on both sides. Both Sides Keys for maximum security.",
    features: ["Keys Both Sides","C38 Series","Matte black","CE Certified","5-year guarantee"],
    sku: "C38-BLK-K",
  },
  {
    id: "c38-ss-keyless",
    name: "Tenacity C38 Stainless Steel Keyless Bathroom Lock",
    category: "single-pin-keyless",
    price: 3000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/c38-ss-keyless.jpg",
    images: ["assets/images/products/c38-ss-keyless.jpg"],
    description: "Premium C38 Stainless Steel keyless bathroom lock. Sleek stainless look.",
    features: ["No Key Required","Stainless Steel","CE Certified","5-year guarantee"],
    sku: "C38-SS-KL",
  },
  {
    id: "c38-ss-keys",
    name: "Tenacity C38 Stainless Steel — Keys Both Sides",
    category: "single-pin-ndk",
    price: 2500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/c38-ss-keys.jpg",
    images: ["assets/images/products/c38-ss-keys.jpg"],
    description: "Premium C38 Stainless Steel lock with keys on both sides.",
    features: ["Keys Both Sides","Stainless Steel","CE Certified","5-year guarantee"],
    sku: "C38-SS-K",
  },

  // ─── PREMIUM QUALITY INTERNAL DOOR LOCKS ──────────────────
  {
    id: "pq-c38-ss-keyless",
    name: "Tenacity Premium Quality C38 Stainless Steel Keyless Bathroom Lock",
    category: "premium-quality",
    price: 3000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-c38-ss-keyless-new.jpg",
    images: ["assets/images/products/pq-c38-ss-keyless-new.jpg"],
    description: "Tenacity Premium Quality C38 Stainless Steel keyless bathroom lock with outside groove and inside knob. Smooth operation and premium stainless steel finish.",
    features: ["Keyless Bathroom Lock", "C38 Series", "Stainless Steel", "Outside Groove", "Inside Knob"],
    sku: "PQ-C38-SS-KL",
  },
  {
    id: "pq-c38-ss-keys",
    name: "Tenacity Premium Quality C38 Stainless Steel — Keys Both Sides",
    category: "premium-quality",
    price: 2500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-c38-ss-keys-new.jpg",
    images: ["assets/images/products/pq-c38-ss-keys-new.jpg"],
    description: "Tenacity Premium Quality C38 Stainless Steel internal door lock with keys on both sides. Reliable premium lock for internal doors.",
    features: ["Keys Both Sides", "C38 Series", "Stainless Steel", "Premium Quality", "Internal Door Lock"],
    sku: "PQ-C38-SS-K",
  },
  {
    id: "pq-h50-sn-keyless",
    name: "Tenacity Premium Quality H50 SN Keyless Bathroom Lock",
    category: "premium-quality",
    price: 3500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-h50-sn-keyless-new.jpg",
    images: ["assets/images/products/pq-h50-sn-keyless-new.jpg"],
    description: "Tenacity Premium Quality H50 SN keyless bathroom lock with outside groove and inside knob. Premium satin nickel style finish.",
    features: ["Keyless Bathroom Lock", "H50 Series", "SN Finish", "Outside Groove", "Inside Knob"],
    sku: "PQ-H50-SN-KL",
  },
  {
    id: "pq-h50-sn-keys",
    name: "Tenacity Premium Quality H50 SN — Keys Both Sides",
    category: "premium-quality",
    price: 3000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-h50-sn-keys-new.jpg",
    images: ["assets/images/products/pq-h50-sn-keys-new.jpg"],
    description: "Tenacity Premium Quality H50 SN internal door lock with keys on both sides. Strong premium lock with a clean satin nickel style finish.",
    features: ["Keys Both Sides", "H50 Series", "SN Finish", "Premium Quality", "Internal Door Lock"],
    sku: "PQ-H50-SN-K",
  },
  {
    id: "pq-t108-black",
    name: "Tenacity T108 Black Knob Lock",
    category: "premium-quality",
    price: 4500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-t108-black-new.jpg",
    images: ["assets/images/products/pq-t108-black-new.jpg"],
    description: "Tenacity T108 Black premium internal door knob lock. Modern round knob design with keys included.",
    features: ["T108 Series", "Black Finish", "Knob Lock", "Keys Included", "Premium Quality"],
    sku: "PQ-T108-BLK",
  },
  {
    id: "pq-t108-mab",
    name: "Tenacity T108 MAB Knob Lock",
    category: "premium-quality",
    price: 4500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-t108-mab-new.jpg",
    images: ["assets/images/products/pq-t108-mab-new.jpg"],
    description: "Tenacity T108 MAB premium internal door knob lock. Antique brass style finish with keys included.",
    features: ["T108 Series", "MAB Finish", "Knob Lock", "Keys Included", "Premium Quality"],
    sku: "PQ-T108-MAB",
  },
  {
    id: "pq-t108-mbn-grey",
    name: "Tenacity T108 MBN Grey Knob Lock",
    category: "premium-quality",
    price: 4500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-t108-mbn-grey-new.jpg",
    images: ["assets/images/products/pq-t108-mbn-grey-new.jpg"],
    description: "Tenacity T108 MBN Grey premium internal door knob lock. Stylish grey finish with keys included.",
    features: ["T108 Series", "MBN Grey Finish", "Knob Lock", "Keys Included", "Premium Quality"],
    sku: "PQ-T108-MBN",
  },
  {
    id: "pq-t108-mcf",
    name: "Tenacity T108 MCF Knob Lock",
    category: "premium-quality",
    price: 4500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-t108-mcf-new.jpg",
    images: ["assets/images/products/pq-t108-mcf-new.jpg"],
    description: "Tenacity T108 MCF premium internal door knob lock. Elegant MCF finish with keys included.",
    features: ["T108 Series", "MCF Finish", "Knob Lock", "Keys Included", "Premium Quality"],
    sku: "PQ-T108-MCF",
  },
  {
    id: "pq-t189-gp-executive",
    name: "Tenacity T189 GP Executive Quality Lock — Outside Key & Knob Inside",
    category: "premium-quality",
    price: 4500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-t189-gp-executive-new.jpg",
    images: ["assets/images/products/pq-t189-gp-executive-new.jpg"],
    description: "Tenacity T189 GP executive quality lock with outside key and knob inside. Premium finish for executive internal doors.",
    features: ["T189 Series", "Executive Quality", "Outside Key", "Knob Inside", "GP Finish"],
    sku: "PQ-T189-GP",
  },
  {
    id: "pq-t189-mbn-grey-executive",
    name: "Tenacity T189 MBN Grey Executive Quality Lock — Outside Key & Knob Inside",
    category: "premium-quality",
    price: 4500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-t189-mbn-grey-executive-new.jpg",
    images: ["assets/images/products/pq-t189-mbn-grey-executive-new.jpg"],
    description: "Tenacity T189 MBN Grey executive quality lock with outside keys and knob inside. Premium grey finish for executive internal doors.",
    features: ["T189 Series", "Executive Quality", "Outside Key", "Knob Inside", "MBN Grey Finish"],
    sku: "PQ-T189-MBN",
  },


  // ─── F6 SERIES 3-PIN LOCKS WITH NON-DUPLICATABLE KEYS ─────
  {
    id: "f6-series-1",
    name: "Tenacity F6 Series 3-PIN Lock MAB — Non-Duplicatable Keys",
    category: "f6-series",
    price: 6500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/f6-series-1.jpg",
    images: ["assets/images/products/f6-series-1.jpg"],
    description: "Tenacity F6 Series 3-PIN lock with non-duplicatable keys. Strong internal door security lock priced at KShs 6,500.",
    features: ["F6 Series", "3-PIN Lock", "Non-Duplicatable Keys", "Premium Security", "Internal Door Lock"],
    sku: "F6-NDK-01",
  },
  {
    id: "f6-series-2",
    name: "Tenacity F6 Series 3-PIN Lock Black — Non-Duplicatable Keys",
    category: "f6-series",
    price: 6500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/f6-series-2.jpg",
    images: ["assets/images/products/f6-series-2.jpg"],
    description: "Tenacity F6 Series 3-PIN lock with non-duplicatable keys. Strong internal door security lock priced at KShs 6,500.",
    features: ["F6 Series", "3-PIN Lock", "Non-Duplicatable Keys", "Premium Security", "Internal Door Lock"],
    sku: "F6-NDK-02",
  },
  {
    id: "f6-series-3",
    name: "Tenacity F6 Series 3-PIN Lock MAC — Non-Duplicatable Keys",
    category: "f6-series",
    price: 6500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/f6-series-3.jpg",
    images: ["assets/images/products/f6-series-3.jpg"],
    description: "Tenacity F6 Series 3-PIN lock with non-duplicatable keys. Strong internal door security lock priced at KShs 6,500.",
    features: ["F6 Series", "3-PIN Lock", "Non-Duplicatable Keys", "Premium Security", "Internal Door Lock"],
    sku: "F6-NDK-03",
  },
  {
    id: "f6-series-4",
    name: "Tenacity F6 Series 3-PIN Lock Gold — Non-Duplicatable Keys",
    category: "f6-series",
    price: 6500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/f6-series-4.jpg",
    images: ["assets/images/products/f6-series-4.jpg"],
    description: "Tenacity F6 Series 3-PIN lock with non-duplicatable keys. Strong internal door security lock priced at KShs 6,500.",
    features: ["F6 Series", "3-PIN Lock", "Non-Duplicatable Keys", "Premium Security", "Internal Door Lock"],
    sku: "F6-NDK-04",
  },
  {
    id: "f6-series-5",
    name: "Tenacity F6 Series 3-PIN Lock Colour Range — Non-Duplicatable Keys",
    category: "f6-series",
    price: 6500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/f6-series-5.jpg",
    images: ["assets/images/products/f6-series-5.jpg"],
    description: "Tenacity F6 Series 3-PIN lock with non-duplicatable keys. Strong internal door security lock priced at KShs 6,500.",
    features: ["F6 Series", "3-PIN Lock", "Non-Duplicatable Keys", "Premium Security", "Internal Door Lock"],
    sku: "F6-NDK-05",
  },
  {
    id: "f6-series-6",
    name: "Tenacity F6 Series 3-PIN Lock Black/MAC Display — Non-Duplicatable Keys",
    category: "f6-series",
    price: 6500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/f6-series-6.jpg",
    images: ["assets/images/products/f6-series-6.jpg"],
    description: "Tenacity F6 Series 3-PIN lock with non-duplicatable keys. Strong internal door security lock priced at KShs 6,500.",
    features: ["F6 Series", "3-PIN Lock", "Non-Duplicatable Keys", "Premium Security", "Internal Door Lock"],
    sku: "F6-NDK-06",
  },
  {
    id: "f6-series-7",
    name: "Tenacity F6 Series 3-PIN Lock Full Range — Non-Duplicatable Keys",
    category: "f6-series",
    price: 6500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/f6-series-7.jpg",
    images: ["assets/images/products/f6-series-7.jpg"],
    description: "Tenacity F6 Series 3-PIN lock with non-duplicatable keys. Strong internal door security lock priced at KShs 6,500.",
    features: ["F6 Series", "3-PIN Lock", "Non-Duplicatable Keys", "Premium Security", "Internal Door Lock"],
    sku: "F6-NDK-07",
  },

  // ─── TENACITY PURE STAINLESS STEEL LOCK CASE WITH LIFETIME GUARANTEE ─────
  {
    id: "big-f6-mae",
    name: "Tenacity Big F6 MAE Pure Stainless Steel Lock Case",
    category: "pure-stainless-steel",
    price: 12000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/big-f6-mae.jpg",
    images: ["assets/images/products/big-f6-mae.jpg"],
    description: "Tenacity Big F6 MAE pure stainless steel SUS 304 lock-case with lifetime guarantee, non-duplicatable 2-in-1 double serrated keys, 70 mm anti-drill and steel reinforced triple plated cylinder.",
    features: ["Pure Stainless Steel SUS 304", "Lifetime Guarantee", "Non-Duplicatable 2-in-1 Keys", "70 mm Anti-Drill", "Steel Reinforced Cylinder"],
    sku: "BIG-F6-MAE",
  },
  {
    id: "big-f6-mab-wood",
    name: "Tenacity Big F6 MAB/Wood Pure Stainless Steel Lock Case",
    category: "pure-stainless-steel",
    price: 12000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/big-f6-mab-wood.jpg",
    images: ["assets/images/products/big-f6-mab-wood.jpg"],
    description: "Tenacity Big F6 MAB/Wood pure stainless steel SUS 304 lock-case with lifetime guarantee, non-duplicatable 2-in-1 double serrated keys, 70 mm anti-drill and steel reinforced triple plated cylinder.",
    features: ["Pure Stainless Steel SUS 304", "Lifetime Guarantee", "Non-Duplicatable 2-in-1 Keys", "70 mm Anti-Drill", "Steel Reinforced Cylinder"],
    sku: "BIG-F6-MAB-WOOD",
  },
  {
    id: "big-f6-pvd-black",
    name: "Tenacity Big F6 PVD/Black Pure Stainless Steel Lock Case",
    category: "pure-stainless-steel",
    price: 12000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/big-f6-pvd-black.jpg",
    images: ["assets/images/products/big-f6-pvd-black.jpg"],
    description: "Tenacity Big F6 PVD/Black pure stainless steel SUS 304 lock-case with lifetime guarantee, non-duplicatable 2-in-1 double serrated keys, 70 mm anti-drill and steel reinforced triple plated cylinder.",
    features: ["Pure Stainless Steel SUS 304", "Lifetime Guarantee", "Non-Duplicatable 2-in-1 Keys", "70 mm Anti-Drill", "Steel Reinforced Cylinder"],
    sku: "BIG-F6-PVD-BLACK",
  },
  {
    id: "big-f6-msn-black",
    name: "Tenacity Big F6 MSN/Black Pure Stainless Steel Lock Case",
    category: "pure-stainless-steel",
    price: 12000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/big-f6-msn-black.jpg",
    images: ["assets/images/products/big-f6-msn-black.jpg"],
    description: "Tenacity Big F6 MSN/Black pure stainless steel SUS 304 lock-case with lifetime guarantee, non-duplicatable 2-in-1 double serrated keys, 70 mm anti-drill and steel reinforced triple plated cylinder.",
    features: ["Pure Stainless Steel SUS 304", "Lifetime Guarantee", "Non-Duplicatable 2-in-1 Keys", "70 mm Anti-Drill", "Steel Reinforced Cylinder"],
    sku: "BIG-F6-MSN-BLACK",
  },
  {
    id: "big-f6-black-black",
    name: "Tenacity Big F6 Black/Black Pure Stainless Steel Lock Case",
    category: "pure-stainless-steel",
    price: 12000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/big-f6-black-black.jpg",
    images: ["assets/images/products/big-f6-black-black.jpg"],
    description: "Tenacity Big F6 Black/Black pure stainless steel SUS 304 lock-case with lifetime guarantee, non-duplicatable 2-in-1 double serrated keys, 70 mm anti-drill and steel reinforced triple plated cylinder.",
    features: ["Pure Stainless Steel SUS 304", "Lifetime Guarantee", "Non-Duplicatable 2-in-1 Keys", "70 mm Anti-Drill", "Steel Reinforced Cylinder"],
    sku: "BIG-F6-BLACK-BLACK",
  },

  // ─── HIGH SECURITY DEADLOCKS ──────────────────────────────
  {
    id: "deadlock-non-dup",
    name: "Tenacity Deadlock With Non-Duplicatable Keys",
    category: "deadlocks",
    price: 3000,
    originalPrice: 4500,
    onOffer: true,
    image: "assets/images/products/deadlock-non-dup.jpg",
    images: ["assets/images/products/deadlock-non-dup.jpg"],
    description: "High security deadlock with non-duplicatable keys. Patented key profile prevents unauthorised key copying. Ideal for steel security doors.",
    features: ["Non-duplicatable Keys","High Security Cylinder","Steel Door Compatible","5 Keys Included","CE Certified"],
    sku: "DL-NDK",
  },
  {
    id: "deadlock-dimple",
    name: "Tenacity Deadlock With Dimple Keys",
    category: "deadlocks",
    price: 2500,
    originalPrice: 3500,
    onOffer: true,
    image: "assets/images/products/deadlock-dimple.jpg",
    images: ["assets/images/products/deadlock-dimple.jpg"],
    description: "High security deadlock with dimple keys. Dimple key technology provides excellent pick resistance.",
    features: ["Dimple Key Technology","Pick Resistant","Steel Door Compatible","5 Keys Included","CE Certified"],
    sku: "DL-DK",
  },
  {
    id: "deadlock-normal",
    name: "Tenacity Deadlock With Normal Keys",
    category: "deadlocks",
    price: 2000,
    originalPrice: 2500,
    onOffer: true,
    image: "assets/images/products/deadlock-normal.jpg",
    images: ["assets/images/products/deadlock-normal.jpg"],
    description: "Tenacity high security cylinder deadlock for steel security doors. Reliable protection at an affordable price.",
    features: ["Standard Keys","Steel Door Compatible","5 Keys Included","CE Certified","Easy installation"],
    sku: "DL-NK",
  },
];

const BLOG_POSTS = [
  {
    id: "choosing-right-lock",
    title: "How to Choose the Right Lock for Your Door",
    date: "February 15, 2025",
    author: "Tenacity Locks Team",
    category: "Buying Guide",
    image: "assets/images/categories/entry-level.jpg",
    excerpt: "Not all locks are created equal. Learn how to pick the right lock type for your main door, bedroom, bathroom and office space.",
    content: `<p>Choosing the right lock is one of the most important decisions you can make for your home's security. At Tenacity Locks Ltd, we've been helping Kenyan families secure their homes since 2011, and we know that the right lock makes all the difference.</p>
    <h3>Main Door Locks</h3>
    <p>For your main door, you need a robust lock that can withstand attempted break-ins. Our TB68 entry level series and deadlock range are designed specifically for this purpose. We recommend using a deadlock in combination with a main door lock for maximum security.</p>
    <h3>Internal Door Locks</h3>
    <p>For bedroom and internal doors, our 510, 600, 51, 62, and 90 series offer premium quality with beautiful finishes. These come in various colours — black, MAB, MAC, MCF, MSN, NBGP, NBCP, ACC, and ABB — to match your interior decor.</p>
    <h3>Bathroom Locks</h3>
    <p>Bathroom locks need to be keyless on the outside (for privacy) but should be unlockable from outside in emergencies. Our TM53 and C38 keyless series are perfect for this application.</p>
    <h3>Steel Door Deadlocks</h3>
    <p>If you have a steel security door, our deadlock range with normal, dimple, or non-duplicatable keys provides the highest level of security against forced entry.</p>`,
  },
  {
    id: "lock-maintenance-tips",
    title: "5 Tips to Maintain Your Door Locks and Keep Them Working Perfectly",
    date: "January 28, 2025",
    author: "Tenacity Locks Team",
    category: "Maintenance",
    image: "assets/images/categories/premium-quality.jpg",
    excerpt: "A well-maintained lock can last decades. Follow these simple tips to extend the life of your Tenacity locks.",
    content: `<p>Your door lock is one of the most frequently used pieces of hardware in your home. Daily use means it needs proper care to function perfectly year after year.</p>
    <h3>1. Lubricate Annually</h3>
    <p>Apply a small amount of graphite powder or a Teflon-based lubricant to the keyhole and moving parts once a year. Avoid oil-based lubricants as they attract dust and gum up the mechanism.</p>
    <h3>2. Keep the Keyway Clean</h3>
    <p>Dust and debris can accumulate inside the cylinder. A quick spray of compressed air into the keyhole keeps things clean.</p>
    <h3>3. Check the Strike Plate Alignment</h3>
    <p>If your door is sticking or the latch isn't catching smoothly, the strike plate may have shifted. Tighten any loose screws or realign as needed.</p>
    <h3>4. Don't Force the Key</h3>
    <p>If your key is stiff to turn, never force it — this can break pins inside the cylinder. Apply a little lubricant and try again gently.</p>
    <h3>5. Inspect for Wear</h3>
    <p>Periodically examine the lock body and handle for cracks, rust, or damage. Tenacity locks carry a 5-year guarantee, so contact us if you notice any defects within the warranty period.</p>`,
  },
  {
    id: "home-security-guide",
    title: "Complete Home Security Guide for Kenyan Homeowners",
    date: "December 10, 2024",
    author: "Tenacity Locks Team",
    category: "Security",
    image: "assets/images/categories/deadlocks.jpg",
    excerpt: "From the front gate to the bedroom — a comprehensive guide to securing every entry point in your Kenyan home.",
    content: `<p>Home security is about creating layers of protection. No single lock or measure is foolproof, but the right combination makes your home significantly harder to breach.</p>
    <h3>Layer 1: Perimeter Security</h3>
    <p>Gates, fences, and lighting are your first line of defence. A well-lit compound deters opportunistic criminals.</p>
    <h3>Layer 2: Entry Points</h3>
    <p>Your main door is the most critical entry point. Use a quality main door lock (our TB68 series) combined with a cylinder deadlock for steel security doors. Both locks working together provide serious resistance to forced entry.</p>
    <h3>Layer 3: Internal Doors</h3>
    <p>Internal locks protect valuables inside specific rooms. Our premium 510 and 600 series locks are ideal for bedrooms where you want both security and style.</p>
    <h3>Layer 4: Access Control</h3>
    <p>Consider who has keys to your home. Our non-duplicatable key deadlocks ensure that duplicate keys cannot be made without authorisation — an important feature for rental properties or when you need to control access.</p>
    <h3>Nationwide Delivery Available</h3>
    <p>Not in Nairobi? We deliver nationwide via bus and shuttle services from as little as KShs 300. Call us on 0711 77 66 88 or order via WhatsApp.</p>`,
  },
];

// ─── CART SYSTEM ──────────────────────────────────────────────
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem('tenacity_cart') || '[]'); }
    catch { return []; }
  },
  save(items) {
    localStorage.setItem('tenacity_cart', JSON.stringify(items));
    Cart.updateBadge();
    window.dispatchEvent(new Event('cartUpdated'));
  },
  add(productId, qty = 1) {
    const items = Cart.get();
    const existing = items.find(i => i.id === productId);
    if (existing) existing.qty += qty;
    else items.push({ id: productId, qty });
    Cart.save(items);
    Cart.toast('Added to cart!');
  },
  remove(productId) {
    Cart.save(Cart.get().filter(i => i.id !== productId));
  },
  updateQty(productId, qty) {
    const items = Cart.get();
    const item = items.find(i => i.id === productId);
    if (item) item.qty = Math.max(1, qty);
    Cart.save(items);
  },
  clear() { Cart.save([]); },
  count() { return Cart.get().reduce((s, i) => s + i.qty, 0); },
  subtotal() {
    return Cart.get().reduce((s, i) => {
      const p = getAllProducts().find(p => p.id === i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  },
  updateBadge() {
    document.querySelectorAll('.cart-count').forEach(el => {
      const c = Cart.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  },
  toast(msg) {
    const t = document.createElement('div');
    t.className = 'cart-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
  }
};

// ─── ORDERS SYSTEM ────────────────────────────────────────────
const Orders = {
  get() {
    try { return JSON.parse(localStorage.getItem('tenacity_orders') || '[]'); }
    catch { return []; }
  },
  save(order) {
    const orders = Orders.get();
    orders.unshift({ ...order, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem('tenacity_orders', JSON.stringify(orders));
  }
};

// ─── ADMIN SYSTEM ─────────────────────────────────────────────
const Admin = {
  USER: 'admin',
  PASS: 'Tenacity@2026',
  isLoggedIn() { return sessionStorage.getItem('admin_auth') === 'true'; },
  login(user, pass) {
    if (user === Admin.USER && pass === Admin.PASS) { sessionStorage.setItem('admin_auth', 'true'); return true; }
    return false;
  },
  logout() { sessionStorage.removeItem('admin_auth'); }
};

// ─── UTILS ────────────────────────────────────────────────────
function fmt(n) { return 'KShs ' + Number(n).toLocaleString('en-KE'); }
function cmsData() {
  window.TENACITY_CMS_DATA = window.TENACITY_CMS_DATA || {};
  window.TENACITY_CMS_DATA.customProducts = window.TENACITY_CMS_DATA.customProducts || [];
  window.TENACITY_CMS_DATA.customCategories = window.TENACITY_CMS_DATA.customCategories || [];
  window.TENACITY_CMS_DATA.customBlog = window.TENACITY_CMS_DATA.customBlog || [];
  window.TENACITY_CMS_DATA.homepageSettings = window.TENACITY_CMS_DATA.homepageSettings || {};
  return window.TENACITY_CMS_DATA;
}

function mergeById(base, overrides) {
  const map = new Map();
  base.forEach(item => map.set(item.id, item));
  (overrides || []).forEach(item => map.set(item.id, { ...(map.get(item.id) || {}), ...item }));
  return Array.from(map.values());
}

function getProduct(id) { return getAllProducts().find(p => p.id === id); }
function getCategory(id) { return getAllCategories().find(c => c.id === id); }

// GitHub CMS data is stored in assets/js/cms-data.js and shared globally.
function getAllProducts() {
  return mergeById(PRODUCTS, cmsData().customProducts);
}
function getAllCategories() {
  return mergeById(CATEGORIES, cmsData().customCategories);
}
function getAllBlogPosts() {
  return mergeById(BLOG_POSTS, cmsData().customBlog).sort((a, b) => {
    const da = new Date(a.date || 0).getTime();
    const db = new Date(b.date || 0).getTime();
    return db - da;
  });
}
function getHomepageSettings() {
  return cmsData().homepageSettings || {};
}
