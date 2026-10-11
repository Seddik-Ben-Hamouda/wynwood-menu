# Wynwood Coffee – Menu

Street-art digital menu for Wynwood Coffee (Borj Cédria, Tunisie). Static site: HTML + CSS + JS, no build step.

```
wynwood-menu/
├── index.html              Home: logo, story highlights, big category covers
├── pages/                  coffee, cold, sweets, new, menu (all), hours, address, about
├── assets/
│   ├── css/fonts.css       Fonts + color tokens (logo palette)
│   ├── css/main.css        Home + story viewer styles
│   ├── css/pages.css       Inner pages styles
│   ├── js/data.js          ★ ALL content: items, prices, photos, hours, links, FR/EN text
│   ├── js/common.js        FR/EN switch + image fallback
│   ├── js/stories.js       Instagram-style viewer (auto-advance, tap, swipe, hold to pause)
│   ├── js/pages.js         Renders the inner pages from data.js
│   ├── fonts/              Drop Overals, Awergyby, Tagstorm, ElaesyBlockBuster here
│   └── img/                logo.png + your own photos
└── render.yaml             Render.com static deploy
```

## How it works
Small circles = stories. Big circles open their own page (tabs: Tout / Café / Froid / Sucré / Nouveau).
Tap a small circle → full-screen story with progress bars, tap left/right or swipe.
The last slide of each story links to `@wynwood_coffee` on Instagram and to that category's page.

## Edit
Everything is in `assets/js/data.js`. Prices (TND) and descriptions are examples: replace with the real menu.
Photos are real Unsplash photos; swap any URL for your own file in `assets/img/`.
Preview locally: `python3 -m http.server` then open http://localhost:8000
