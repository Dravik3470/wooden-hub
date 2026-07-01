# Wooden Hub - Furniture & Complete Interior Solutions

🌐 **Live Site**: [https://woodenhub.in](https://woodenhub.in)

Wooden Hub creates beautiful, comfortable and functional spaces for homes, offices, shops and commercial properties across South Gujarat.

---

## 🚀 Quick Start

This is a static website built with:
- HTML5
- CSS3 (Custom design, no frameworks)
- Vanilla JavaScript
- Responsive design (Mobile-first)
- Bilingual (English + Gujarati)

### Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/wooden_hub.git
cd wooden_hub

# Open in browser (any method works):

# Option 1: Python HTTP server
python3 -m http.server 8888

# Option 2: VS Code Live Server extension
# Right-click index.html → Open with Live Server

# Option 3: Just open the file
open index.html
```

Visit: `http://localhost:8888`

---

## 📁 Project Structure

```
wooden_hub/
├── index.html              # Main HTML file
├── styles.css              # All styles (design system)
├── script.js               # JavaScript interactions
├── whatsapp-logo.svg       # WhatsApp icon
├── wooden_hub_logo.png     # Company logo
├── projects/               # Project images
├── netlify.toml            # Netlify configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
└── README.md               # This file
```

---

## 🔄 CI/CD Pipeline

Automatic deployment to Netlify on every push to `main` branch.

### Setup Instructions

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/wooden_hub.git
   git push -u origin main
   ```

2. **Get Netlify credentials:**
   - Go to [Netlify](https://app.netlify.com)
   - Settings → Site settings → Copy **Site ID**
   - User settings → Applications → New access token → Copy **Auth Token**

3. **Add secrets to GitHub:**
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add two secrets:
     - `NETLIFY_AUTH_TOKEN` (your Netlify auth token)
     - `NETLIFY_SITE_ID` (your site ID)

4. **Done!** Now every push to `main` automatically deploys to Netlify.

---

## 🛠️ Features

### Design
- ✅ Clean, elegant, sober aesthetic
- ✅ Warm color palette (cream, gold, charcoal)
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Bilingual (EN/GU language toggle)
- ✅ Smooth animations and transitions

### Functionality
- ✅ Sticky header with scroll shadow
- ✅ Mobile hamburger menu
- ✅ Language switcher (saves preference)
- ✅ Header dropdowns (Call/WhatsApp)
- ✅ Dual phone numbers (98240 06741, 90996 94046)
- ✅ WhatsApp integration
- ✅ Contact form
- ✅ Project gallery with lightbox
- ✅ Floating WhatsApp button

### Performance
- ✅ Optimized images
- ✅ Minimal dependencies (no frameworks)
- ✅ Fast load times
- ✅ Browser caching
- ✅ Security headers

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

## 🔧 Making Changes

### Update Content
1. Edit `index.html` for content
2. Edit `styles.css` for design
3. Edit `script.js` for interactions
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
5. Automatic deployment in ~2 minutes ✨

### Add Images
1. Add images to `projects/` folder
2. Update `script.js` projects array
3. Commit and push

---

## 🌐 Deployment

### Automatic (Recommended)
- Push to `main` branch → Auto-deploys via GitHub Actions

### Manual
- Drag & drop `wooden_hub` folder to [Netlify Drop](https://app.netlify.com/drop)

### Netlify CLI
```bash
netlify deploy --prod
```

---

## 📊 Performance Checklist

- [x] Minify CSS (future)
- [x] Optimize images (WebP format)
- [x] Add service worker (PWA)
- [x] Enable Brotli compression (Netlify handles this)
- [x] Add structured data (JSON-LD schema)
- [x] Set up analytics
- [x] Add sitemap
- [x] Configure robots.txt

---

## 🔐 Security

- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ No sensitive data in repo
- ✅ CORS configured
- ✅ XSS protection
- ✅ Clickjacking protection

---

## 📄 License

© 2026 Wooden Hub. All rights reserved.

---

## 🙏 Credits

**Design & Development:** Custom-built for Wooden Hub
**Fonts:** Google Fonts (Inter, Cormorant Garamond, Noto Serif Gujarati)
**Icons:** Custom SVG icons
**Hosting:** Netlify
**CI/CD:** GitHub Actions

---

**Built with ❤️ for Wooden Hub**
