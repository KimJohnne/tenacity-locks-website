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
  { id: "single-pin-ndk", name: "Single Pin Locks (Non-Duplicatable Keys)" },
  { id: "premium-quality", name: "Premium Quality Internal Door Locks" },
  { id: "deadlocks", name: "High Security Steel Door Cylinder Deadlocks" },
];

const PRODUCTS = [
  // ─── ENTRY LEVEL LOCKS ────────────────────────────────────
  {
    id: "tb68-black",
    name: "Tenacity Main Door Entry Level Lock TB68 Black",
    category: "entry-level",
    price: 4000,
    originalPrice: 5000,
    onOffer: true,
    image: "assets/images/products/tb68-black.jpg",
    images: ["assets/images/products/tb68-black.jpg","assets/images/products/tb68-mab.jpg"],
    description: "Tenacity TB68 Black entry level main door lock. Strong, reliable and affordable. Comes with 5 keys. CE certified. Ideal for homes and apartments.",
    features: ["5 Keys Included","CE Certified","Anti-pick cylinder","5-year guarantee","Easy installation"],
    sku: "TB68-BLK",
  },
  {
    id: "tb68-mab",
    name: "Tenacity Main Door Entry Level Lock TB68 MAB",
    category: "entry-level",
    price: 4000,
    originalPrice: 5000,
    onOffer: true,
    image: "assets/images/products/tb68-mab.jpg",
    images: ["assets/images/products/tb68-mab.jpg","assets/images/products/tb68-mab-promo.jpg"],
    description: "Tenacity TB68 MAB (Matt Antique Brass) entry level main door lock. Premium antique brass finish. CE certified, 5 keys included.",
    features: ["5 Keys Included","CE Certified","Anti-pick cylinder","5-year guarantee","MAB Finish"],
    sku: "TB68-MAB",
  },
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
    id: "pq-c38-black-keys",
    name: "Tenacity Premium Quality C38 Black — Both Sides Keys",
    category: "premium-quality",
    price: 2500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-2.jpg",
    images: ["assets/images/products/pq-2.jpg"],
    description: "Premium Quality C38 Black internal door lock with keys on both sides. High-grade aluminum alloy construction.",
    features: ["Both Sides Keys","C38 Series","Matte Black","CE Certified","5-year guarantee"],
    sku: "PQ-C38-BLK-K",
  },
  {
    id: "pq-c38-ss-keyless",
    name: "Tenacity Premium Quality C38 Stainless Steel Keyless",
    category: "premium-quality",
    price: 3000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-3.jpg",
    images: ["assets/images/products/pq-3.jpg"],
    description: "Premium Quality C38 Stainless Steel keyless bathroom lock. Robust stainless steel construction.",
    features: ["Keyless/Thumb Turn","Stainless Steel","CE Certified","5-year guarantee"],
    sku: "PQ-C38-SS-KL",
  },
  {
    id: "pq-h50-black",
    name: "Tenacity Premium Quality H50 Black — Keys Both Sides",
    category: "premium-quality",
    price: 3000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-7.jpg",
    images: ["assets/images/products/pq-7.jpg"],
    description: "Tenacity Premium Quality H50 Black internal door lock with keys on both sides. Sleek rectangular backplate design.",
    features: ["Keys Both Sides","H50 Series","Matte Black","CE Certified","5-year guarantee"],
    sku: "PQ-H50-BLK-K",
  },
  {
    id: "pq-t108-black",
    name: "Tenacity T108 Black Knob Lock",
    category: "premium-quality",
    price: 4500,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/pq-8.jpg",
    images: ["assets/images/products/pq-8.jpg"],
    description: "Tenacity T108 Black premium knob lock. Unique cylindrical knurled knob design. Keys included.",
    features: ["Knob Design","Matte Black","CE Certified","Anti-pick","5-year guarantee"],
    sku: "PQ-T108-BLK",
  },
  {
    id: "pq-510-black",
    name: "Tenacity 510 Black Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t510-black.jpg",
    images: ["assets/images/products/t510-black.jpg","assets/images/products/pq-14.jpg"],
    description: "Tenacity 510 series black premium internal door lock. Top-of-the-range security for internal doors.",
    features: ["Premium Series","Black Finish","CE Certified","5-year guarantee","Anti-pick"],
    sku: "T510-BLK",
  },
  {
    id: "pq-510-mab",
    name: "Tenacity 510 MAB Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t510-mab.jpg",
    images: ["assets/images/products/t510-mab.jpg"],
    description: "Tenacity 510 series MAB (Matt Antique Brass) premium internal door lock.",
    features: ["Premium Series","MAB Finish","CE Certified","5-year guarantee","Anti-pick"],
    sku: "T510-MAB",
  },
  {
    id: "pq-510-mac",
    name: "Tenacity 510 MAC Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t510-mac.jpg",
    images: ["assets/images/products/t510-mac.jpg"],
    description: "Tenacity 510 series MAC (Matt Antique Copper) premium internal door lock.",
    features: ["Premium Series","MAC Finish","CE Certified","5-year guarantee","Anti-pick"],
    sku: "T510-MAC",
  },
  {
    id: "pq-510-msn",
    name: "Tenacity 510 MSN Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t510-msn.jpg",
    images: ["assets/images/products/t510-msn.jpg"],
    description: "Tenacity 510 series MSN (Matt Satin Nickel) premium internal door lock.",
    features: ["Premium Series","MSN Finish","CE Certified","5-year guarantee","Anti-pick"],
    sku: "T510-MSN",
  },
  {
    id: "pq-600-black",
    name: "Tenacity 600 Black Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t600-black.jpg",
    images: ["assets/images/products/t600-black.jpg"],
    description: "Tenacity 600 series black — flagship premium internal door lock with elegant double-line plate design.",
    features: ["Premium Series","Black Finish","Double-line Plate","CE Certified","5-year guarantee"],
    sku: "T600-BLK",
  },
  {
    id: "pq-600-mab",
    name: "Tenacity 600 MAB Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t600-mab.jpg",
    images: ["assets/images/products/t600-mab.jpg"],
    description: "Tenacity 600 series MAB premium internal door lock with elegant double-line plate.",
    features: ["Premium Series","MAB Finish","Double-line Plate","CE Certified","5-year guarantee"],
    sku: "T600-MAB",
  },
  {
    id: "pq-600-mac",
    name: "Tenacity 600 MAC Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t600-mac.jpg",
    images: ["assets/images/products/t600-mac.jpg"],
    description: "Tenacity 600 series MAC premium internal door lock.",
    features: ["Premium Series","MAC Finish","Double-line Plate","CE Certified","5-year guarantee"],
    sku: "T600-MAC",
  },
  {
    id: "pq-600-mcf",
    name: "Tenacity 600 MCF Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t600-mcf.jpg",
    images: ["assets/images/products/t600-mcf.jpg"],
    description: "Tenacity 600 series MCF (Matt Coffee) premium internal door lock.",
    features: ["Premium Series","MCF Finish","Double-line Plate","CE Certified","5-year guarantee"],
    sku: "T600-MCF",
  },
  {
    id: "pq-600-msn",
    name: "Tenacity 600 MSN Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t600-msn.jpg",
    images: ["assets/images/products/t600-msn.jpg"],
    description: "Tenacity 600 series MSN (Matt Satin Nickel) premium internal door lock.",
    features: ["Premium Series","MSN Finish","Double-line Plate","CE Certified","5-year guarantee"],
    sku: "T600-MSN",
  },
  {
    id: "pq-51-nbgp",
    name: "Tenacity 51 NBGP Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t51-nbgp.jpg",
    images: ["assets/images/products/t51-nbgp.jpg"],
    description: "Tenacity 51 NBGP (New Bright Gold Plated) premium internal door lock.",
    features: ["Premium Series","NBGP Finish","CE Certified","5-year guarantee","Anti-pick"],
    sku: "T51-NBGP",
  },
  {
    id: "pq-62-acc",
    name: "Tenacity 62 ACC Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t62-acc.jpg",
    images: ["assets/images/products/t62-acc.jpg"],
    description: "Tenacity 62 ACC (Antique Chrome Copper) premium internal door lock.",
    features: ["Premium Series","ACC Finish","CE Certified","5-year guarantee"],
    sku: "T62-ACC",
  },
  {
    id: "pq-62-nbcp",
    name: "Tenacity 62 NBCP Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t62-nbcp.jpg",
    images: ["assets/images/products/t62-nbcp.jpg"],
    description: "Tenacity 62 NBCP (New Bright Chrome Plated) premium internal door lock.",
    features: ["Premium Series","NBCP Finish","CE Certified","5-year guarantee"],
    sku: "T62-NBCP",
  },
  {
    id: "pq-90-abb",
    name: "Tenacity 90 ABB Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t90-abb.jpg",
    images: ["assets/images/products/t90-abb.jpg"],
    description: "Tenacity 90 ABB (Antique Burnished Brass) premium internal door lock.",
    features: ["Premium Series","ABB Finish","CE Certified","5-year guarantee"],
    sku: "T90-ABB",
  },
  {
    id: "pq-90-acc",
    name: "Tenacity 90 ACC Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t90-acc.jpg",
    images: ["assets/images/products/t90-acc.jpg"],
    description: "Tenacity 90 ACC (Antique Chrome Copper) premium internal door lock.",
    features: ["Premium Series","ACC Finish","CE Certified","5-year guarantee"],
    sku: "T90-ACC",
  },
  {
    id: "pq-90-nbcp",
    name: "Tenacity 90 NBCP Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t90-nbcp.jpg",
    images: ["assets/images/products/t90-nbcp.jpg"],
    description: "Tenacity 90 NBCP (New Bright Chrome Plated) premium internal door lock.",
    features: ["Premium Series","NBCP Finish","CE Certified","5-year guarantee"],
    sku: "T90-NBCP",
  },
  {
    id: "pq-90-nbgp",
    name: "Tenacity 90 NBGP Internal Door Lock",
    category: "premium-quality",
    price: 8000,
    originalPrice: null,
    onOffer: false,
    image: "assets/images/products/t90-nbgp.jpg",
    images: ["assets/images/products/t90-nbgp.jpg"],
    description: "Tenacity 90 NBGP (New Bright Gold Plated) premium internal door lock.",
    features: ["Premium Series","NBGP Finish","CE Certified","5-year guarantee"],
    sku: "T90-NBGP",
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
      const p = PRODUCTS.find(p => p.id === i.id);
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
function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function getCategory(id) { return CATEGORIES.find(c => c.id === id); }

// Custom products (admin additions) merged at runtime
function getAllProducts() {
  try {
    const custom = JSON.parse(localStorage.getItem('custom_products') || '[]');
    return [...PRODUCTS, ...custom];
  } catch { return PRODUCTS; }
}
function getAllCategories() {
  try {
    const custom = JSON.parse(localStorage.getItem('custom_categories') || '[]');
    return [...CATEGORIES, ...custom];
  } catch { return CATEGORIES; }
}
function getAllBlogPosts() {
  try {
    const custom = JSON.parse(localStorage.getItem('custom_blog') || '[]');
    return [...custom, ...BLOG_POSTS];
  } catch { return BLOG_POSTS; }
}
