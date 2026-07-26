# Portfolio

A single-page developer portfolio. Dark theme, lime accent, EN/FA language toggle, light/dark toggle. No framework, no build step — plain HTML/CSS/JS with EmailJS integration for contact form.

## Features

- **Dark/light theme** — toggled via `data-theme` on `<html>`, persisted in `localStorage`
- **EN/FA i18n** — `data-i18n` attributes swapped against a JS dictionary, flips `dir="rtl"` for Farsi
- **Scroll progress bar** — fixed indicator at the top, tracks scroll position
- **Scroll-reveal animations** — `IntersectionObserver`, respects `prefers-reduced-motion`
- **Contact form** — sends emails via [EmailJS](https://www.emailjs.com) (200 free emails/month)
- **Environment configuration** — credentials stored in `config.js` for easy management
- **Fully responsive** — single-column collapse under 860px

## Structure

```
.
├── assets/
│   ├── projects/
│   │   ├── live-talk.png
│   │   └── mini-digi.png
│   ├── apple-touch-icon.png
│   ├── favicon-32.png
│   ├── favicon-64.png
│   ├── hero.png
│   └── resume.pdf
├── CNAME
├── config.js       # EmailJS credentials (create this)
├── i18n.js         # EN/FA translations
├── index.html      # Main HTML
├── LICENSE
├── main.js         # Core functionality + EmailJS
├── README.md
├── sitemap.xml
└── style.css       # Styling
```

## Running Locally

No build step, no dependencies. Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Configuration

### EmailJS Setup (Contact Form)

1. **Create an account** at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month)

2. **Create an Email Service:**
   - Dashboard → Email Services → Add New Service
   - Select Gmail (or your provider)
   - Connect your Gmail account
   - Copy your **Service ID** (e.g., `service_xxxxxxx`)

3. **Create an Email Template:**
   - Dashboard → Email Templates → Create New Template
   - Name it `Portfolio Contact`
   - Copy your **Template ID** (e.g., `template_xxxxxxx`)

   **Subject:**
   ```
   New message from {{from_name}} - {{project_type}}
   ```

   **Content (HTML):**
   ```html
   <h3>New Contact Request from Portfolio</h3>

   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Project Type:</strong> {{project_type}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>

   <hr>
   <p><small>Sent from maxcodez.ir</small></p>
   ```

   **Settings:**
   - To Email: `your-email@gmail.com`
   - From Name: `{{from_name}}`
   - Reply To: `{{from_email}}`

4. **Get your Public Key:**
   - Dashboard → Account → API Keys
   - Copy your **Public Key** (not Private Key!)

5. **Create `config.js` in the root directory:**

```javascript
// config.js - EmailJS Credentials
const CONFIG = {
  EMAILJS_PUBLIC_KEY: 'user_xxxxxxxxxx',   // From Account → API Keys
  EMAILJS_SERVICE_ID: 'service_xxxxxxxxx', // From Email Services
  EMAILJS_TEMPLATE_ID: 'template_xxxxxxxx' // From Email Templates
};
```

6. **Load `config.js` in `index.html` (before other scripts):**

```html
<script src="config.js"></script>
<script src="i18n.js"></script>
<script src="main.js"></script>
```

7. **Use in `main.js`:**

```javascript
const EMAILJS_PUBLIC_KEY = CONFIG.EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = CONFIG.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = CONFIG.EMAILJS_TEMPLATE_ID;

emailjs.init(EMAILJS_PUBLIC_KEY);
```

### Environment Configuration (`.env` for Advanced Setup)

**Option A: Using Vite**

```env
# .env
VITE_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxx
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
```

```javascript
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

**Option B: Using Webpack**

```env
# .env
EMAILJS_PUBLIC_KEY=user_xxxxxxxxxx
EMAILJS_SERVICE_ID=service_xxxxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxxx
```

```javascript
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
```

**Option C: Server-Side (most secure)**

1. Store keys in server environment variables
2. Create a `/api/contact` endpoint
3. Server makes the EmailJS call
4. Frontend calls your endpoint

### Other Configuration

| What | Where | Notes |
|---|---|---|
| Contact form email | `config.js` → `TO_EMAIL` | Change `minwicket@gmail.com` |
| Resume | `assets/resume.pdf` | Replace with your PDF |
| Hero image | `assets/hero.png` | Replace with your image |
| Name, role, bio | `index.html` + `i18n.js` | Update both EN and FA sections |

## Deploying

Static site — works on GitHub Pages, Netlify, Vercel, or Cloudflare Pages with zero config.

**GitHub Pages:** Settings → Pages → Deploy from branch → `main` / `root`

**Cloudflare Pages:** Connect repository → No build command → Output directory: `/`

## Security Notes

- **Public Key** can be exposed (it's public by design)
- **Never expose Private/Secret keys** in frontend code
- Use `config.js` for simple setups, `.env` for build tools
- For production, consider server-side contact form handling

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `emailjs is not defined` | Check `config.js` is loaded before `main.js` |
| `API key is not valid` | Wrong Public Key — check Account → API Keys |
| `Service not found` | Wrong Service ID — check Email Services |
| `Template not found` | Wrong Template ID — check Email Templates |
| Form doesn't submit | Ensure `id="contactForm"` on the form element |
| No email received | Check Spam folder; verify To Email is correct |

## Performance

- **Total page load:** < 1s (with Cloudflare CDN)
- **Contact form:** ~200ms response time
- **Email delivery:** Instant via EmailJS

## Credits

Layout and design direction based on [mmxkarimi.ir](https://mmxkarimi.ir/en.html).

## License

MIT