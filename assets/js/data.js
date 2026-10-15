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
      {
        name: "Espresso", price: "2,5", img: U("photo-1509365465985-25d11c17e812"),
        desc: { fr: "Court, intense, torréfié frais.", en: "Short, intense, freshly roasted." }
      },
      {
        name: "Capucin", price: "3", img: U("photo-1495474472287-4d71bcdd2085"),
        desc: { fr: "Le classique tunisien, une goutte de lait.", en: "The Tunisian classic with a drop of milk." }
      },
      {
        name: "Cappuccino", price: "5", img: U("photo-1514432324607-a09d9b4aefdd"),
        desc: { fr: "Espresso, lait chaud, mousse onctueuse.", en: "Espresso, steamed milk, silky foam." }
      },
      {
        name: "Latte Art", price: "6", img: U("photo-1541167760496-1628856ab772"),
        desc: { fr: "Doux et crémeux, dessiné à la main.", en: "Smooth and creamy, hand-drawn." }
      },
      {
        name: "Mocha", price: "7", img: U("photo-1509042239860-f550ce710b93"),
        desc: { fr: "Café + chocolat. Le combo des fous.", en: "Coffee + chocolate. The dream combo." }
      },
    ],
  },
  {
    key: "cold", style: "blue", page: "pages/cold.html",
    title: { fr: "Boissons froides", en: "Cold drinks" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080562/cold-drinks.png",
    items: [
      {
        name: "Iced Latte", price: "7", img: U("photo-1461023058943-07fcbe16d735"),
        desc: { fr: "Glace, espresso, lait frais.", en: "Ice, espresso, fresh milk." }
      },
      {
        name: "Cold Brew", price: "7", img: U("photo-1497935586351-b67a49e012bf"),
        desc: { fr: "Infusé à froid 12h. Smooth.", en: "Cold-steeped for 12h. Smooth." }
      },
      {
        name: "Frappé Caramel", price: "9", img: U("photo-1572442388796-11668a67e53d"),
        desc: { fr: "Glacé, mixé, caramel par-dessus.", en: "Blended, iced, caramel on top." }
      },
      {
        name: "Milkshake", price: "8", img: U("photo-1572490122747-3968b75cc699"),
        desc: { fr: "Chocolat, vanille ou fraise.", en: "Chocolate, vanilla or strawberry." }
      },
    ],
  },
  {
    key: "hot", style: "lime", page: "pages/hot.html",
    title: { fr: "Boissons chaudes", en: "Hot drinks" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080821/hot-drinks.png",
    items: [
      {
        name: "Chocolat Chaud", price: "5", img: U("photo-1542990253-0d0f5be5f0ed"),
        desc: { fr: "Riche, crémeux et réconfortant.", en: "Rich, creamy and comforting." }
      },
      {
        name: "Thé à la menthe", price: "3", img: U("photo-1576092768241-dec231879fc3"),
        desc: { fr: "Thé traditionnel infusé aux feuilles fraîches.", en: "Traditional tea infused with fresh mint." }
      },
      {
        name: "Thé Vert", price: "3,5", img: U("photo-1627435601361-ec25f5b1d0e5"),
        desc: { fr: "Doux et antioxydant.", en: "Smooth and antioxidant-rich." }
      },
      {
        name: "Chai Latte", price: "6", img: U("photo-1578899952107-9c390f1af1b7"),
        desc: { fr: "Épices chaudes, thé noir et lait soyeux.", en: "Warm spices, black tea and silky milk." }
      },
    ],
  },
  {
    key: "sweets", style: "ink", page: "pages/sweets.html",
    title: { fr: "Sucré", en: "Sweets" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080619/sweets.png",
    items: [
      {
        name: "Croissant", price: "3", img: U("photo-1555507036-ab1f4038808a"),
        desc: { fr: "Pur beurre, doré, croustillant.", en: "All butter, golden, flaky." }
      },
      {
        name: "Donut", price: "4", img: U("photo-1551024601-bec78aea704b"),
        desc: { fr: "Glaçage et sprinkles.", en: "Glazed with sprinkles." }
      },
      {
        name: "Cheesecake", price: "8", img: U("photo-1578985545062-69928b1d9587"),
        desc: { fr: "Crémeux, coulis du moment.", en: "Creamy, seasonal topping." }
      },
      {
        name: "Gâteau choco", price: "6", img: U("photo-1565958011703-44f9829ba187"),
        desc: { fr: "Fondant, pour les accros au chocolat.", en: "Fudgy, for chocolate addicts." }
      },
      {
        name: "Pâtisserie du jour", price: "4", img: U("photo-1509440159596-0249088772ff"),
        desc: { fr: "Demande ce qui sort du four.", en: "Ask what just came out of the oven." }
      },
    ],
  },
  {
    key: "food", style: "lime", page: "pages/food.html",
    title: { fr: "Food & Salé", en: "Food" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792081103/food.png",
    items: [
      {
        name: "Club Sandwich", price: "8,5", img: U("photo-1528735602780-2552fd46c7af"),
        desc: { fr: "Poulet, crudités, sauce maison.", en: "Chicken, fresh greens, homemade sauce." }
      },
      {
        name: "Toast Avocat", price: "9", img: U("photo-1525351484163-7529414344d8"),
        desc: { fr: "Pain de campagne, avocat écrasé, graines.", en: "Country bread, smashed avocado, seeds." }
      },
      {
        name: "Panini Poulet", price: "7", img: U("photo-1619860860774-1e2e17343432"),
        desc: { fr: "Chaud, fromage fondant, poulet mariné.", en: "Warm, melted cheese, marinated chicken." }
      },
      {
        name: "Crêpe Salée", price: "8", img: U("photo-1519676867240-f03562e64548"),
        desc: { fr: "Fromage, jambon ou thon au choix.", en: "Cheese, ham or tuna of your choice." }
      },
    ],
  },
  {
    key: "new", style: "blue", page: "pages/new.html",
    title: { fr: "Nouveau", en: "New" },
    cover: "https://res.cloudinary.com/a4pxy2z0/image/upload/v1792080729/new.png",
    items: [
      {
        name: "Frappé Caramel", price: "9", tag: "NEW", img: U("photo-1572442388796-11668a67e53d"),
        desc: { fr: "Notre nouveau coup de cœur.", en: "Our new crush." }
      },
      {
        name: "Cheesecake", price: "8", tag: "NEW", img: U("photo-1578985545062-69928b1d9587"),
        desc: { fr: "Nouveau coulis chaque semaine.", en: "New topping every week." }
      },
      {
        name: "Cold Brew", price: "7", tag: "NEW", img: U("photo-1497935586351-b67a49e012bf"),
        desc: { fr: "À essayer absolument.", en: "A must-try." }
      },
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
