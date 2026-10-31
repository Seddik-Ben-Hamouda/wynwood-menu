/* ==========================================================
   WYNWOOD COFFEE — EDITABLE WEBSITE CONTENT
   Update this file to change the menu, copy, links, or images.
   Menu photos can be Unsplash URLs or local paths like
   "assets/img/my-photo.jpg".
   ========================================================== */

/* ---------- Brand and site-wide settings ---------- */
const U = (id, w = 900, h = 1440) =>
  id.startsWith("http") || id.startsWith("assets/") || id.startsWith("/")
    ? id
    : `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

const SHOP = {
  name: "Wynwood Coffee",
  handle: "wynwood_coffee",
  insta: "https://www.instagram.com/wynwood_coffee/",
  facebook: "https://www.facebook.com/wynwoodflavio/",
  tel: "+21679326494",
  telDisplay: "+216 79 326 494",
  address: "8020 / 13 Rue Rafah, Borj Cédria-Potinville",
  city: "Borj Cédria, Tunisie",
  maps: "https://www.google.com/maps/search/?api=1&query=Wynwood+Coffee+Borj+Cedria",
  rating: "4.6",
  reviews: 47,
  hours: { open: "08:00", close: "02:00" },
};

const SITE = {
  title: {
    fr: `${SHOP.name} | ${SHOP.city}`,
    en: `${SHOP.name} | Borj Cedria`,
  },
  description: {
    fr: "Wynwood Coffee – café street art à Borj Cédria. Menu, horaires, adresse.",
    en: "Wynwood Coffee – street art café in Borj Cedria. Menu, hours, location.",
  },
  themeColor: "#fbf7f1",
};

/* ---------- Shared and page-specific images ---------- */
const IMAGES = {
  logo: {
    src: "assets/img/logo-new.png",
    alt: SHOP.name,
  },
  hours: {
    src: "assets/img/hours.png",
    alt: { fr: "Horaires Wynwood Coffee", en: "Wynwood Coffee opening hours" },
  },
  address: { src: "assets/img/findus.png" },
  about: {
    src: "assets/img/vibe.png",
    alt: { fr: "Ambiance de Wynwood Coffee", en: "The atmosphere at Wynwood Coffee" },
  },
  fallbacks: [
    U("photo-1495474472287-4d71bcdd2085"),
    U("photo-1442512595331-e89e73853f31"),
  ],
};

/* ---------- Interface copy (French and English) ---------- */
const UI = {
  fr: {
    tagline: "Café · Street art · Chill",
    openNow: "Ouvert tous les jours · 8h → 2h",
    stories: "Stories",
    browse: "Explorer la carte",
    storiesLabel: "Stories",
    categoriesLabel: "Catégories",
    instagramLabel: "Instagram",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    follow: "Suivre sur Instagram",
    fullMenu: "Ouvrir la page",
    ctaSlogan: "STAY\nWYNWOOD",
    back: "‹ Retour",
    tnd: "TND",
    prices: "Prix en dinars tunisiens (TND)",
    priceTbc: "Prix à confirmer",
    supplements: "Suppléments",
    lang: "EN",
    all: "Tout",
    menuTitle: "Menu",
    mobileNotice: "Veuillez ouvrir ce site sur votre téléphone.",
    visit: "Venez nous rendre visite à Wynwood Coffee et dites-nous ce que vous en pensez !",
  },
  en: {
    tagline: "Coffee · Street art · Chill",
    openNow: "Open every day · 8am → 2am",
    stories: "Stories",
    browse: "Browse the menu",
    storiesLabel: "Stories",
    categoriesLabel: "Categories",
    instagramLabel: "Instagram",
    close: "Close",
    previous: "Previous",
    next: "Next",
    follow: "Follow on Instagram",
    fullMenu: "Open the page",
    ctaSlogan: "STAY\nWYNWOOD",
    back: "‹ Back",
    tnd: "TND",
    prices: "Prices in Tunisian dinars (TND)",
    priceTbc: "Price to confirm",
    supplements: "Extras",
    lang: "FR",
    all: "All",
    menuTitle: "Menu",
    mobileNotice: "Please open this website on your phone.",
    visit: "Come visit us at Wynwood Coffee and let us know what you think!",
  },
};

/* ---------- Menu and home-page categories ----------
   Each category controls its home cover/story and menu-page items.
   `page` is the category page; `external: true` opens an external link.
   ---------- */
const CATEGORIES = [
  {
    key: "coffee", style: "lime", page: "pages/coffee.html",
    title: { fr: "Café", en: "Coffee" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080017/coffee.png",
    items: [
      { name: "Express", price: "2,700" },
      { name: "Américain", price: "2,800" },
      { name: "Cappucin", price: "3,300" },
      { name: "Direct", price: "3,500" },
      { name: "Vanilla latte", price: "4,500" },
      { name: "Cinnamon latte", price: "4,500" },
    ]
  },
  {
    key: "cold", style: "blue", page: "pages/cold.html",
    title: { fr: "Boissons froides", en: "Cold drinks" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792090477/cold-drinks.png",
    items: [
      { name: "Ice Spanish Latte", price: "6,000" },
      { name: "Iced Tea", price: "5,000" },
      { name: "Soda", price: "3,000" },
      { name: "Schweppes", price: "3,500" },
      { name: "Orangina", price: "3,500" },
      { name: "Mojito", price: "6,000" },
      { name: "Citronnade", price: "3,500" },
      { name: "Jus fraise", price: "5,000" },
      { name: "Jus d'orange", price: "2,500" },
     
      { name: "Eau 1L", price: "2,500" },
      { name: "Eau 0.5L", price: "1,500" },

      
    ],
  },
  {
    key: "hot", style: "lime", page: "pages/hot.html",
    title: { fr: "Boissons chaudes", en: "Hot drinks" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080821/hot-drinks.png",
    items: [
      { name: "Chocolat au lait/Nescafé", price: "3,000" },
      { name: "Chocolat chaud", price: "5,000" },
      { name: "Thé", price: "2,500" },
      { name: "Kyufi", price: "2,500" },
      
    ],
  },
  {
    key: "sweets", style: "ink", page: "pages/sweets.html",
    title: { fr: "Sucré", en: "Sweets" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080619/sweets.png",
    items: [
      { name: "Croissant", price: "1,500" },
      { name: "Cake", price: "1,500" },
      { name: "Fondant", price: "5,000" },
      { name: "Crème chocolate café", price: "7,000" },
    ],
  },
  {
    key: "food", style: "lime", page: "pages/food.html",
    title: { fr: "Food & Salé", en: "Food" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792081103/food.png",
    items: [
      { name: "Panini Jambon", price: "5,000" },
      { name: "Panini Thon", price: "6,000" },
      { name: "Crêpe Jambon", price: "6,000" },
      { name: "Crêpe Spécial", price: "8,000" },
      { name: "croque-monsieur", price: "5,000" },
      { name: "croque-madame", price: "6,000" },
    ],
  },
  {
    key: "new", style: "blue", page: "pages/new.html",
    title: { fr: "Nouveau", en: "New" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080729/new.png",
    items: [
      { name: "Chocolat chaud", price: "5,000" },
      { name: "Toast", price: "5,000" },
    ],
  },
  {
    key: "find", style: "blue", page: "pages/address.html",
    title: { fr: "Nous trouver", en: "Find us" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792081431/find-us.png",
    items: [
      {
        name: "Borj Cédria", price: null, img: U("photo-1442512595331-e89e73853f31"),
        desc: { fr: "8020 / 13 Rue Rafah, Borj Cédria-Potinville", en: "8020 / 13 Rue Rafah, Borj Cédria-Potinville" }
      },
    ],
  },
  {
    key: "insta", style: "lime", external: true, page: SHOP.insta,
    title: { fr: "Instagram", en: "Instagram" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792081506/instagram.png",
    items: [],
  },
];

const MENU_ONLY_CATEGORIES = [
  {
    key: "formules",
    title: { fr: "Formules", en: "Combos" },
    items: [
      { name: "Café croissant eau", price: "5,000" },
      { name: "Citronnade Panini", price: "5,000" },
      { name: "Formule", price: "8,500" },
    ],
  },
];

const SUPPLEMENTS = [
  { name: "Dose Arome", price: "1,000" },
  { name: "Nestlé", price: "1,000" },
];

/* ---------- Temporarily hidden categories (vibe & hours) ----------
const HIDDEN_CATEGORIES = [
  {
    key: "vibe", style: "lime", page: "pages/about.html",
    title: { fr: "Vibe", en: "Vibe" },
    cover: U("photo-1561059488-916d69792237", 700, 700),
    items: [
      { name: "Street art", price: null, img: U("photo-1561059488-916d69792237"),
        desc: { fr: "Un café qui a du caractère.", en: "A café with character." } },
      { name: "Chill & study", price: null, img: U("photo-1517248135467-4c7edcad34c4"),
        desc: { fr: "Wi-Fi gratuit, parfait pour bosser ou réviser.", en: "Free Wi-Fi, great to work or study." } },
      { name: "Entre potes", price: null, img: U("photo-1442512595331-e89e73853f31"),
        desc: { fr: "Service à table, bonne ambiance.", en: "Table service, good vibes." } },
      { name: "Ambiance", price: null, img: U("photo-1495474472287-4d71bcdd2085"),
        desc: { fr: "L'endroit parfait pour se retrouver.", en: "The perfect place to meet up." } },
    ],
  },
  {
    key: "hours", style: "ink", page: "pages/hours.html",
    title: { fr: "Horaires", en: "Hours" },
    cover: U("photo-1517248135467-4c7edcad34c4", 700, 700),
    items: [
      { name: "8h00 → 2h00", price: null, img: U("photo-1517248135467-4c7edcad34c4"),
        desc: { fr: "Ouvert tous les jours, jusqu'au bout de la nuit.", en: "Open every day, all the way to 2am." } },
    ],
  },
];
---------- */

/* ---------- Additional page content ---------- */
const PAGE_CONTENT = {
  address: {
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.6410469645307!2d10.412191!3d36.7071627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4fb405c2e4ef%3A0xa9dcbaba6a90f5ad!2sWynwood%20Coffee!5e0!3m2!1sfr!2stn!4v1791733896339!5m2!1sfr!2stn",
  },
};

const WEEK = {
  fr: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
const ABOUT = {
  fr: "Wynwood Coffee, c'est le spot de Borj Cédria pour les ados et les étudiants : un café cosy et branché, inspiré du street art de Wynwood. Viens bosser, réviser ou juste traîner avec tes potes.",
  en: "Wynwood Coffee is Borj Cédria's hangout for teens and students: a cosy, trendy café inspired by Wynwood's street art. Come work, study or just hang out with friends.",
};
const PERKS = {
  fr: ["Wi-Fi gratuit", "Idéal pour étudier", "Service à table", "Gâteaux & cheesecake", "Ouvert jusqu'à 2h"],
  en: ["Free Wi-Fi", "Great for studying", "Table service", "Cakes & cheesecake", "Open until 2am"],
};
