# 🚀 Complete CI/CD Deployment Guide - Wooden Hub

This guide will help you set up automatic deployment from GitHub to Netlify.

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Netlify account (connected to your domain)
- ✅ Git installed on your computer
- ✅ Terminal/Command Prompt access

---

## 🎯 Step-by-Step Setup

### **Step 1: Initialize Git Repository**

```bash
# Navigate to your project
cd /Users/ditaliya/Desktop/POC\ WORK/wooden_hub

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Wooden Hub website with CI/CD"
```

---

### **Step 2: Create GitHub Repository**

#### Option A: Via GitHub Website (Easier)

1. Go to [github.com](https://github.com)
2. Click **"+" icon** → "New repository"
3. Repository name: `wooden-hub` or `woodenhub`
4. Description: `Wooden Hub - Furniture & Complete Interior Solutions`
5. Make it **Public** or **Private** (your choice)
6. **DO NOT** initialize with README (we already have one)
7. Click **"Create repository"**

#### Option B: Via GitHub CLI

```bash
# Install GitHub CLI first: brew install gh
gh repo create wooden-hub --public --source=. --remote=origin --push
```

---

### **Step 3: Connect Local Repo to GitHub**

```bash
# Add GitHub as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/wooden-hub.git

# Set main as default branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**✅ Checkpoint:** Visit your GitHub repo URL - you should see all files!

---

### **Step 4: Get Netlify Credentials**

#### A. Get Site ID

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click your **Wooden Hub site**
3. Go to **Site settings**
4. Scroll to **Site information**
5. Copy **Site ID** (looks like: `abc123de-4567-89fg-hijk-lmnopqrs1234`)
6. Save it somewhere safe

#### B. Generate Auth Token

1. Still in Netlify, click your **profile icon** (top right)
2. Go to **User settings**
3. Scroll to **Applications**
4. Click **"New access token"**
5. Name it: `GitHub Actions - Wooden Hub`
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again!)
8. Save it somewhere safe

---

### **Step 5: Add Secrets to GitHub**

1. Go to your **GitHub repository**
2. Click **Settings** tab
3. In sidebar, click **Secrets and variables** → **Actions**
4. Click **"New repository secret"**

**Add First Secret:**
- Name: `NETLIFY_AUTH_TOKEN`
- Value: (paste the token from Step 4B)
- Click **"Add secret"**

**Add Second Secret:**
- Name: `NETLIFY_SITE_ID`
- Value: (paste the site ID from Step 4A)
- Click **"Add secret"**

**✅ Checkpoint:** You should see 2 secrets listed (values are hidden).

---

### **Step 6: Test the CI/CD Pipeline**

Now let's test if automatic deployment works!

```bash
# Make a small change
echo "<!-- CI/CD test -->" >> index.html

# Commit the change
git add .
git commit -m "Test: CI/CD deployment"

# Push to GitHub
git push
```

---

### **Step 7: Monitor Deployment**

#### On GitHub:
1. Go to your repo → **Actions** tab
2. You should see a workflow running: "Deploy to Netlify"
3. Click on it to see real-time logs
4. Wait for ✅ green checkmark (usually 1-2 minutes)

#### On Netlify:
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click your site
3. Go to **Deploys** tab
4. You'll see a new deployment triggered by GitHub

**✅ Success!** When both show green, visit [https://woodenhub.in](https://woodenhub.in) - your change is live!

---

## 🎉 You're Done! Now What?

### **Daily Workflow:**

```bash
# 1. Make changes to your files
nano index.html  # or use VS Code

# 2. Test locally
python3 -m http.server 8888
# Visit http://localhost:8888

# 3. Commit changes
git add .
git commit -m "Update: describe your changes"

# 4. Push to GitHub
git push

# 5. Wait 2 minutes - live on woodenhub.in! ✨
```

That's it! No manual uploading, no Netlify drag-and-drop. Just push to GitHub and it automatically deploys!

---

## 🔧 How It Works

```
Your Computer          GitHub              GitHub Actions       Netlify
     │                   │                       │                  │
     │  git push         │                       │                  │
     ├──────────────────>│                       │                  │
     │                   │  Trigger workflow     │                  │
     │                   ├──────────────────────>│                  │
     │                   │                       │  Deploy files    │
     │                   │                       ├─────────────────>│
     │                   │                       │                  │
     │                   │                       │  ✅ Success!     │
     │                   │                       │<─────────────────│
     │                   │                       │                  │
     │                   │  Deployment complete  │                  │
     │                   │<──────────────────────│                  │
     │                   │                       │                  │
     │  Check Actions    │                       │                  │
     │<──────────────────┤                       │                  │
     │                   │                       │                  │
```

**Workflow file:** `.github/workflows/deploy.yml`
- Runs on every push to `main` branch
- Checks out your code
- Deploys to Netlify using your secrets
- Reports success/failure

**Netlify config:** `netlify.toml`
- Publish directory: current folder (`.`)
- Redirect rules (www → non-www)
- Security headers
- Cache settings
- 404 handling

---

## 🐛 Troubleshooting

### ❌ "Workflow not running"

**Check:**
- File is at `.github/workflows/deploy.yml` (exact path)
- File is committed and pushed
- Actions are enabled (Repo Settings → Actions → Allow all actions)

**Fix:**
```bash
# Verify file exists
ls -la .github/workflows/deploy.yml

# If missing, re-create it
mkdir -p .github/workflows
# (copy deploy.yml content again)
git add .github/
git commit -m "Add workflow file"
git push
```

---

### ❌ "Secrets not found"

**Error in Actions log:**
```
Error: Input required and not supplied: NETLIFY_AUTH_TOKEN
```

**Fix:**
1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Verify both secrets exist:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
3. If missing, add them again (Step 5 above)
4. Push a new commit to re-trigger workflow

---

### ❌ "Deployment failed"

**Check Netlify logs:**
1. Go to Netlify → Deploys
2. Click the failed deployment
3. View logs for error details

**Common issues:**
- Wrong site ID → Re-check in Netlify settings
- Invalid auth token → Generate new token
- File size too large → Optimize images

---

### ❌ "Site not updating"

**Reasons:**
1. **Browser cache** - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+F5` (Windows)
2. **DNS cache** - Wait 5-10 minutes
3. **CDN cache** - Clear in Netlify: Settings → Build & deploy → Post processing → Clear cache

**Test without cache:**
```bash
curl -I https://woodenhub.in
# Look for "X-Nf-Request-Id" header (Netlify-specific)
```

---

### ❌ "GitHub Actions quota exceeded"

**Free tier limits:**
- 2,000 minutes/month (public repos)
- 500 MB storage

**Check usage:**
GitHub → Settings → Billing → Actions & Packages

**Solution:** Deployments are fast (~30 seconds each), so unlikely to hit limit unless you push 100+ times/day.

---

## 🔐 Security Best Practices

### ✅ **DO:**
- Keep secrets in GitHub Secrets (never commit them)
- Use environment variables for sensitive data
- Review pull requests before merging
- Enable branch protection on `main`
- Use 2FA on GitHub and Netlify

### ❌ **DON'T:**
- Commit `.env` files
- Share auth tokens publicly
- Disable security headers
- Skip SSL/HTTPS
- Use weak passwords

---

## 🚦 Advanced: Branch Previews

Want to test changes before pushing to production?

### **Create a staging branch:**

```bash
# Create staging branch
git checkout -b staging

# Make changes
nano index.html

# Push to GitHub
git add .
git commit -m "Test: new feature"
git push origin staging
```

Netlify will create a **preview deployment** at:
`https://staging--woodenhub.netlify.app`

Test it, and when ready:
```bash
# Merge to main
git checkout main
git merge staging
git push
```

Now it deploys to production! 🎉

---

## 📊 Monitoring Your Site

### **Netlify Analytics** (Built-in)
- Netlify → Site → Analytics
- Page views, unique visitors, bandwidth
- No code needed, privacy-friendly

### **Google Analytics** (Optional)
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📈 Performance Optimization

### Already Configured:
- ✅ Brotli compression (Netlify)
- ✅ HTTP/2 (Netlify)
- ✅ CDN caching (Netlify)
- ✅ Security headers (`netlify.toml`)
- ✅ Asset caching (1 year for images/CSS/JS)

### Future Improvements:
```bash
# Minify CSS (optional)
npm install -g csso-cli
csso styles.css -o styles.min.css

# Optimize images (optional)
npm install -g imagemin-cli
imagemin projects/*.jpg --out-dir=projects/
```

---

## 🎓 Learning Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Netlify Docs](https://docs.netlify.com)
- [Git Basics](https://git-scm.com/book/en/v2)
- [Semantic Commit Messages](https://www.conventionalcommits.org/)

---

## 🆘 Need Help?

1. **Check workflow logs:** GitHub → Actions → Click workflow → View logs
2. **Check Netlify logs:** Netlify → Deploys → Click deployment → View logs
3. **GitHub Discussions:** Ask in your repo's Discussions tab
4. **Stack Overflow:** Tag questions with `github-actions` + `netlify`

---

## ✅ Final Checklist

Before considering setup complete:

- [ ] GitHub repo created and pushed
- [ ] `NETLIFY_AUTH_TOKEN` secret added
- [ ] `NETLIFY_SITE_ID` secret added
- [ ] Workflow runs successfully
- [ ] Site deploys to woodenhub.in
- [ ] SSL certificate active (https://)
- [ ] Test: make a change, push, verify it's live
- [ ] Bookmark GitHub Actions page for monitoring
- [ ] Set up notifications (GitHub → Settings → Notifications)

---

## 🎉 Congratulations!

You now have a professional CI/CD pipeline:
- ✅ Push to GitHub → Auto-deploy to Netlify
- ✅ No manual uploading ever again
- ✅ Version control with Git
- ✅ Easy rollbacks (revert commit)
- ✅ Deployment history tracked

**From now on, just code and push - the rest is automatic!** 🚀

---

**Questions? Check the troubleshooting section or review the logs in GitHub Actions.**
