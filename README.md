# Wooden Hub - Furniture & Complete Interior Solutions

🌐 **Live Site**: [https://woodenhub.in](https://woodenhub.in)

Premium furniture, interior, flooring, tiles, P.O.P., painting, grill and turnkey solutions for homes, offices, shops and commercial spaces across Surat, Vapi, Valsad, Ankleshwar, Bharuch, Dahej, and nearby South Gujarat areas.

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/wooden-hub.git
cd wooden-hub

# Open locally
python3 -m http.server 8888
# Visit: http://localhost:8888
```

---

## 📁 Project Structure

```
wooden_hub/
├── index.html              # Main HTML file
├── styles.css              # All styles
├── script.js               # JavaScript interactions
├── whatsapp-logo.svg       # WhatsApp icon
├── wooden_hub_logo.png     # Company logo
├── projects/               # Project images
├── netlify.toml            # Netlify configuration
└── .github/workflows/      # CI/CD pipeline
    └── deploy.yml
```

---

## 🎯 Features

### Design
- ✅ Clean, elegant, sober aesthetic
- ✅ Warm color palette (cream, gold, charcoal)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Bilingual (English + Gujarati)
- ✅ Smooth animations

### Functionality
- ✅ Sticky header with scroll shadow
- ✅ Mobile hamburger menu
- ✅ Language switcher (saves preference)
- ✅ Header dropdowns (Call/WhatsApp)
- ✅ Dual phone numbers support
- ✅ WhatsApp integration
- ✅ Contact form
- ✅ Project gallery with lightbox
- ✅ Floating WhatsApp button

---

## 🔄 Auto-Deployment (CI/CD)

Every push to `main` automatically deploys to Netlify via GitHub Actions.

### Setup (One-Time)

**1. Connect Netlify to GitHub:**
- Go to [app.netlify.com/start](https://app.netlify.com/start)
- Import existing project → GitHub → Select repo
- Deploy settings: Branch `main`, Publish directory `.`

**2. Add Site ID to GitHub:**
- Get Site ID: Netlify → Site settings → Site information
- GitHub → Settings → Secrets → Actions → New secret
- Name: `NETLIFY_SITE_ID`, Value: (paste Site ID)

**3. Done!** Push any commit to auto-deploy.

### Daily Workflow

```bash
# Edit files
nano index.html

# Commit and push
git add .
git commit -m "Update: describe changes"
git push

# Wait 2 minutes → Live on woodenhub.in ✨
```

**No auth tokens needed!** Uses Netlify GitHub App (never expires).

---

## 📱 Contact

**Phone:**
- 98240 06741
- 90996 94046

**Email:** parthkoisa123@gmail.com

**WhatsApp:**
- [98240 06741](https://wa.me/919824006741)
- [90996 94046](https://wa.me/919099694046)

**Service Areas:**
Surat, Vapi, Valsad, Ankleshwar, Bharuch, Dahej, and nearby areas

---

## 🛠️ Development

### Local Testing
```bash
# Python HTTP server
python3 -m http.server 8888

# Or Node.js
npx http-server -p 8888

# Or VS Code Live Server extension
```

### Making Changes
1. Edit HTML/CSS/JS files
2. Test locally
3. Commit: `git add . && git commit -m "Update: ..."`
4. Push: `git push`
5. Auto-deploys in ~2 minutes

---

## 📄 Configuration

### Netlify (`netlify.toml`)
- ✅ www → non-www redirects
- ✅ Security headers
- ✅ Cache control (1 year for assets)
- ✅ 404 handling

### GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Triggers on push to `main`
- ✅ Triggers on pull requests
- ✅ Manual trigger available
- ✅ Uses Netlify GitHub App (no token expiration)

---

## 🔐 Security

- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ XSS protection
- ✅ Clickjacking protection
- ✅ No sensitive data in repo

---

## 📊 Performance

- ✅ Minimal dependencies (no frameworks)
- ✅ Optimized images
- ✅ Browser caching
- ✅ CDN distribution (Netlify)
- ✅ Brotli compression

---

## 📖 Documentation

- **This file:** Quick reference
- **`DEPLOYMENT_GUIDE.md`:** Detailed deployment instructions
- **`NETLIFY-GITHUB-APP-SETUP.md`:** Token-free setup guide

---

## 🆘 Troubleshooting

### Workflow not running
- Check `.github/workflows/deploy.yml` exists
- Verify Actions enabled: Settings → Actions

### Deployment failed
- Check GitHub Actions logs
- Verify `NETLIFY_SITE_ID` secret exists
- Ensure Netlify connected to GitHub repo

### Site not updating
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+F5` (Windows)
- Wait 5-10 minutes for DNS/CDN propagation
- Clear Netlify cache: Settings → Build & deploy

---

## 📄 License

© 2026 Wooden Hub. All rights reserved.

---

**Built with ❤️ for Wooden Hub**
