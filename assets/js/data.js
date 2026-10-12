/* ==========================================================
   WYNWOOD COFFEE – all content lives here.
   Edit names, prices (TND), photos, hours, links in this file only.
   Photos are real photos from Unsplash (hotlinked). To use your own,
   drop files in assets/img/ and use "assets/img/xxx.jpg" as the URL.
   ========================================================== */

const U = (id, w = 900, h = 1440) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

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

/* Safe photos used if a URL fails to load */
const LOGO = "assets/img/logo.png";

const FALLBACKS = [
  U("photo-1495474472287-4d71bcdd2085"),
  U("photo-1442512595331-e89e73853f31"),
];

const UI = {
  fr: {
    tagline: "Café · Street art · Chill",
    openNow: "Ouvert tous les jours · 8h → 2h",
    stories: "Stories",
    browse: "Explorer la carte",
    follow: "Suivre sur Instagram",
    fullMenu: "Ouvrir la page",
    back: "← Retour",
    tnd: "TND",
    open: "Ouvert",
    daily: "Tous les jours",
    call: "Appeler",
    route: "Itinéraire",
    reviews: "avis Google",
    prices: "Prix en dinars tunisiens (TND)",

    lang: "EN",
    all: "Tout",
    swipe: "Touche à droite / gauche pour naviguer",
    visit: "Venez nous rendre visite à Wynwood Coffee et dites-nous ce que vous en pensez !",
  },
  en: {
    tagline: "Coffee · Street art · Chill",
    openNow: "Open every day · 8am → 2am",
    stories: "Stories",
    browse: "Browse the menu",
    follow: "Follow on Instagram",
    fullMenu: "Open the page",
    back: "← Back",
    tnd: "TND",
    open: "Open",
    daily: "Every day",
    call: "Call",
    route: "Directions",
    reviews: "Google reviews",
    prices: "Prices in Tunisian dinars (TND)",
    lang: "FR",
    all: "All",
    swipe: "Tap right / left to navigate",
    visit: "Come visit us at Wynwood Coffee and let us know what you think!",
  },
};

/* Categories = big covers + stories. `page` = full page link. */
const CATEGORIES = [
  {
    key: "coffee", style: "lime", page: "pages/coffee.html",
    title: { fr: "Café", en: "Coffee" },
    cover: U("photo-1509042239860-f550ce710b93", 700, 700),
    items: [
      { name: "Espresso", price: "2,5", img: U("photo-1509365465985-25d11c17e812"),
        desc: { fr: "Court, intense, torréfié frais.", en: "Short, intense, freshly roasted." } },
      { name: "Capucin", price: "3", img: U("photo-1495474472287-4d71bcdd2085"),
        desc: { fr: "Le classique tunisien, une goutte de lait.", en: "The Tunisian classic with a drop of milk." } },
      { name: "Cappuccino", price: "5", img: U("photo-1514432324607-a09d9b4aefdd"),
        desc: { fr: "Espresso, lait chaud, mousse onctueuse.", en: "Espresso, steamed milk, silky foam." } },
      { name: "Latte Art", price: "6", img: U("photo-1541167760496-1628856ab772"),
        desc: { fr: "Doux et crémeux, dessiné à la main.", en: "Smooth and creamy, hand-drawn." } },
      { name: "Mocha", price: "7", img: U("photo-1509042239860-f550ce710b93"),
        desc: { fr: "Café + chocolat. Le combo des fous.", en: "Coffee + chocolate. The dream combo." } },
    ],
  },
  {
    key: "cold", style: "blue", page: "pages/cold.html",
    title: { fr: "Boissons froides", en: "Cold drinks" },
    cover: U("photo-1461023058943-07fcbe16d735", 700, 700),
    items: [
      { name: "Iced Latte", price: "7", img: U("photo-1461023058943-07fcbe16d735"),
        desc: { fr: "Glace, espresso, lait frais.", en: "Ice, espresso, fresh milk." } },
      { name: "Cold Brew", price: "7", img: U("photo-1497935586351-b67a49e012bf"),
        desc: { fr: "Infusé à froid 12h. Smooth.", en: "Cold-steeped for 12h. Smooth." } },
      { name: "Frappé Caramel", price: "9", img: U("photo-1572442388796-11668a67e53d"),
        desc: { fr: "Glacé, mixé, caramel par-dessus.", en: "Blended, iced, caramel on top." } },
      { name: "Milkshake", price: "8", img: U("photo-1572490122747-3968b75cc699"),
        desc: { fr: "Chocolat, vanille ou fraise.", en: "Chocolate, vanilla or strawberry." } },
    ],
  },
  {
    key: "sweets", style: "ink", page: "pages/sweets.html",
    title: { fr: "Sucré", en: "Sweets" },
    cover: U("photo-1551024601-bec78aea704b", 700, 700),
    items: [
      { name: "Croissant", price: "3", img: U("photo-1555507036-ab1f4038808a"),
        desc: { fr: "Pur beurre, doré, croustillant.", en: "All butter, golden, flaky." } },
      { name: "Donut", price: "4", img: U("photo-1551024601-bec78aea704b"),
        desc: { fr: "Glaçage et sprinkles.", en: "Glazed with sprinkles." } },
      { name: "Cheesecake", price: "8", img: U("photo-1578985545062-69928b1d9587"),
        desc: { fr: "Crémeux, coulis du moment.", en: "Creamy, seasonal topping." } },
      { name: "Gâteau choco", price: "6", img: U("photo-1565958011703-44f9829ba187"),
        desc: { fr: "Fondant, pour les accros au chocolat.", en: "Fudgy, for chocolate addicts." } },
      { name: "Pâtisserie du jour", price: "4", img: U("photo-1509440159596-0249088772ff"),
        desc: { fr: "Demande ce qui sort du four.", en: "Ask what just came out of the oven." } },
    ],
  },
  {
    key: "new", style: "blue", page: "pages/new.html",
    title: { fr: "Nouveau", en: "New" },
    cover: U("photo-1572442388796-11668a67e53d", 700, 700),
    items: [
      { name: "Frappé Caramel", price: "9", tag: "NEW", img: U("photo-1572442388796-11668a67e53d"),
        desc: { fr: "Notre nouveau coup de cœur.", en: "Our new crush." } },
      { name: "Cheesecake", price: "8", tag: "NEW", img: U("photo-1578985545062-69928b1d9587"),
        desc: { fr: "Nouveau coulis chaque semaine.", en: "New topping every week." } },
      { name: "Cold Brew", price: "7", tag: "NEW", img: U("photo-1497935586351-b67a49e012bf"),
        desc: { fr: "À essayer absolument.", en: "A must-try." } },
    ],
  },
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
  {
    key: "find", style: "blue", page: "pages/address.html",
    title: { fr: "Nous trouver", en: "Find us" },
    cover: U("photo-1442512595331-e89e73853f31", 700, 700),
    items: [
      { name: "Borj Cédria", price: null, img: U("photo-1442512595331-e89e73853f31"),
        desc: { fr: "8020 / 13 Rue Rafah, Borj Cédria-Potinville", en: "8020 / 13 Rue Rafah, Borj Cédria-Potinville" } },
    ],
  },
  {
    key: "insta", style: "lime", external: true, page: SHOP.insta,
    title: { fr: "Instagram", en: "Instagram" },
    cover: U("photo-1509042239860-f550ce710b93", 700, 700),
    items: [],
  },
];

/* Extra page-only data */
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
