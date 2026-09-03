# Deployment Guide

Complete instructions for deploying your portfolio to various platforms.

## 🚀 Quick Deployment Options

### 1. GitHub Pages (Free, Fastest)

**Setup:**
1. Go to Repository Settings → Pages
2. Select **Source**: `main` branch
3. Click Save
4. Site published at: `https://cmd-3324.github.io/Portfolio-`

**Pros:** Free, instant updates, GitHub-native  
**Cons:** Basic CDN, limited control

---

### 2. Netlify (Recommended)

**Setup:**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
5. Deploy!

**Features:**
- Free SSL
- Automatic deployments
- Analytics
- Forms integration (optional)
- Custom domain

**Pros:** Easy, powerful, free tier generous  
**Cons:** Requires account

---

### 3. Vercel (Alternative)

**Setup:**
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Framework: Select "Other"
4. Deploy!

**Pros:** Ultra-fast, serverless, free tier  
**Cons:** Overkill for static site

---

### 4. Docker & Self-Hosted

#### Local Development
```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -d -p 8080:8080 --name portfolio portfolio:latest

# Visit http://localhost:8080
```

#### Production on VPS

**Prerequisites:**
- Linux VPS (Ubuntu 20.04+)
- Docker installed
- Domain name (optional)

**Deploy:**
```bash
# SSH into server
ssh root@your-vps-ip

# Clone repo
git clone https://github.com/cmd-3324/Portfolio-.git
cd Portfolio-

# Build & run
docker build -t portfolio:latest .
docker run -d -p 80:8080 --name portfolio --restart unless-stopped portfolio:latest
```

**With Nginx Reverse Proxy:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### Docker Hub Deployment

**Setup GitHub Actions:**
1. Push code to GitHub
2. Go to Settings → Secrets and variables → Actions
3. Add:
   - `DOCKER_USERNAME` = your Docker Hub username
   - `DOCKER_TOKEN` = your Docker Hub access token
4. Workflow `.github/workflows/docker.yml` runs automatically
5. Image pushed to `docker.io/USERNAME/portfolio:latest`

**Run from Docker Hub:**
```bash
docker run -d -p 8080:8080 YOUR_DOCKER_USERNAME/portfolio:latest
```

---

### 5. AWS S3 + CloudFront

**Setup:**
1. Create S3 bucket (public, static site hosting)
2. Upload files
3. Create CloudFront distribution
4. Add custom domain

**CLI Deploy:**
```bash
aws s3 sync . s3://your-bucket-name
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Cost:** ~$0.50/month for storage + bandwidth

---

### 6. Firebase Hosting

**Setup:**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

**Pros:** Fast, free SSL, Firebase integration  
**Cons:** Google-locked

---

## 🔐 Pre-Deployment Checklist

- [ ] EmailJS credentials configured (`main.js` lines 64-66)
- [ ] All images optimized (WebP format)
- [ ] Links working (internal & external)
- [ ] Dark/Light mode tested
- [ ] EN/FA languages working
- [ ] Contact form tested (send test email)
- [ ] Mobile responsiveness checked
- [ ] No console errors
- [ ] Meta tags updated (OG tags, favicon)
- [ ] Analytics installed (Google Analytics, etc.)

---

## 📊 Post-Deployment

### Monitor Performance
```bash
# Test with curl
curl -I https://your-domain.com

# Check Lighthouse
lighthouse https://your-domain.com --view

# Test with WebPageTest
# https://www.webpagetest.org/
```

### Setup Analytics

**Google Analytics:**
1. Create GA account
2. Get Tracking ID
3. Add to HTML before closing `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Setup Custom Domain

**Via DNS:**
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Point DNS to your host:
   - **GitHub Pages**: `185.199.108.153`
   - **Netlify**: CNAME to `your-site.netlify.app`
   - **Vercel**: CNAME to `your-site.vercel.app`
   - **Self-hosted**: A record to your VPS IP
3. Wait 24-48 hours for propagation

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Site not loading | Check DNS, browser cache, SSL certificate |
| Slow performance | Enable gzip, optimize images, use CDN |
| Forms not working | Verify EmailJS credentials, check console |
| Assets 404 | Check file paths, ensure all assets deployed |
| HTTPS not working | Force SSL redirect, check certificate |

---

## 💰 Cost Comparison

| Platform | Cost | Setup | Performance |
|----------|------|-------|-------------|
| GitHub Pages | Free | 5 min | Good |
| Netlify | Free/Pro | 5 min | Excellent |
| Vercel | Free/Pro | 5 min | Excellent |
| Firebase | Free/Pay | 10 min | Excellent |
| VPS (DigitalOcean) | $5/mo | 30 min | Great |
| AWS S3+CF | $0.50/mo | 30 min | Excellent |

---

Need help? Email: programmers378@gmail.com
