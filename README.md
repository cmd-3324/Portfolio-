# Portfolio

A single-page developer portfolio. Dark theme, lime accent, EN/FA language toggle, light/dark toggle. No framework, no build step — plain HTML/CSS/JS.

## Features

- **Dark/light theme** — toggled via `data-theme` on `<html>`, persisted in `localStorage`
- **EN/FA i18n** — `data-i18n` attributes swapped against a JS dictionary, flips `dir="rtl"` for Farsi
- **Scroll progress bar** — fixed indicator at the top, tracks scroll position
- **Scroll-reveal animations** — `IntersectionObserver`, respects `prefers-reduced-motion`
- **Contact form** — posts to [Formspree](https://formspree.io), no backend required
- **Fully responsive** — single-column collapse under 860px

## Structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── i18n.js      # EN/FA dictionary + applyLang()
│   └── main.js      # scroll progress, theme/lang toggles, reveal, form submit
└── assets/
    ├── hero.png
    ├── resume.pdf
    ├── favicon.svg
    ├── favicon-32.png
    ├── favicon-64.png
    └── apple-touch-icon.png
```

## Running locally

No build step, no dependencies. Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Configuration

Before deploying, set these:

| What | Where | Notes |
|---|---|---|
| Contact form endpoint | `js/main.js` → `FORMSPREE_ENDPOINT` | Get a form ID at [formspree.io](https://formspree.io) (free tier: 50 submissions/month) |
| Resume | `assets/resume.pdf` | Linked from the Contact section with a `download` attribute |
| Hero image | `assets/hero.png` | Referenced in `index.html`'s `.hero-frame` |
| Name, role, bio, links | `index.html` + `js/i18n.js` | Same strings need updating in both `en` and `fa` blocks in `i18n.js` |

## Deploying

Static site — works on GitHub Pages, Netlify, or Vercel with zero config.

**GitHub Pages:** Settings → Pages → Deploy from branch → `main` / `root`.

## Credits

Layout and design direction based on [mmxkarimi.ir](https://mmxkarimi.ir/en.html).

## License

MIT