#!/bin/bash

# ==============================================
# Wooden Hub - CI/CD Setup Script
# ==============================================

set -e  # Exit on error

echo "🚀 Setting up CI/CD for Wooden Hub..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if Git is installed
echo -e "${BLUE}Step 1/7: Checking Git installation...${NC}"
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install Git first.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Git is installed${NC}"
echo ""

# Step 2: Check if GitHub CLI is installed (optional)
echo -e "${BLUE}Step 2/7: Checking GitHub CLI (optional)...${NC}"
if command -v gh &> /dev/null; then
    echo -e "${GREEN}✅ GitHub CLI is installed${NC}"
    GH_CLI=true
else
    echo -e "${YELLOW}⚠️  GitHub CLI not found (you'll create repo manually)${NC}"
    GH_CLI=false
fi
echo ""

# Step 3: Initialize Git repository
echo -e "${BLUE}Step 3/7: Initializing Git repository...${NC}"
if [ -d .git ]; then
    echo -e "${YELLOW}⚠️  Git repository already exists${NC}"
else
    git init
    git branch -M main
    echo -e "${GREEN}✅ Git repository initialized${NC}"
fi
echo ""

# Step 4: Add all files
echo -e "${BLUE}Step 4/7: Staging all files...${NC}"
git add .
echo -e "${GREEN}✅ Files staged${NC}"
echo ""

# Step 5: Create initial commit
echo -e "${BLUE}Step 5/7: Creating initial commit...${NC}"
if git rev-parse HEAD >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Commits already exist${NC}"
else
    git commit -m "Initial commit: Wooden Hub website with CI/CD pipeline

- Static HTML/CSS/JS website
- Responsive design (mobile-first)
- Bilingual support (EN/GU)
- Netlify configuration
- GitHub Actions workflow
- Automatic deployment on push"
    echo -e "${GREEN}✅ Initial commit created${NC}"
fi
echo ""

# Step 6: Set up GitHub remote
echo -e "${BLUE}Step 6/7: Setting up GitHub remote...${NC}"
echo ""
if [ "$GH_CLI" = true ]; then
    echo "Do you want to create a GitHub repository now? (y/n)"
    read -r CREATE_REPO
    if [ "$CREATE_REPO" = "y" ]; then
        echo "Repository name (default: wooden-hub):"
        read -r REPO_NAME
        REPO_NAME=${REPO_NAME:-wooden-hub}

        echo "Make repository public or private? (public/private)"
        read -r REPO_VISIBILITY
        REPO_VISIBILITY=${REPO_VISIBILITY:-public}

        gh repo create "$REPO_NAME" --"$REPO_VISIBILITY" --source=. --remote=origin --push
        echo -e "${GREEN}✅ GitHub repository created and code pushed${NC}"
    else
        echo -e "${YELLOW}⚠️  Skipping GitHub repository creation${NC}"
    fi
else
    echo -e "${YELLOW}Please create a GitHub repository manually:${NC}"
    echo "1. Go to https://github.com/new"
    echo "2. Name: wooden-hub"
    echo "3. Don't initialize with README"
    echo "4. Click 'Create repository'"
    echo ""
    echo "Then run these commands:"
    echo -e "${BLUE}git remote add origin https://github.com/YOUR-USERNAME/wooden-hub.git${NC}"
    echo -e "${BLUE}git push -u origin main${NC}"
fi
echo ""

# Step 7: Instructions for secrets
echo -e "${BLUE}Step 7/7: Setting up Netlify secrets...${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: You need to add secrets to GitHub manually${NC}"
echo ""
echo "1. Get your Netlify credentials:"
echo "   - Site ID: Netlify → Site settings → Site information"
echo "   - Auth Token: Netlify → User settings → Applications → New access token"
echo ""
echo "2. Add secrets to GitHub:"
echo "   - Go to: https://github.com/YOUR-USERNAME/wooden-hub/settings/secrets/actions"
echo "   - Click 'New repository secret'"
echo "   - Add: NETLIFY_AUTH_TOKEN (your auth token)"
echo "   - Add: NETLIFY_SITE_ID (your site ID)"
echo ""
echo -e "${GREEN}✅ Once secrets are added, push any commit to trigger deployment!${NC}"
echo ""

# Summary
echo "========================================"
echo -e "${GREEN}🎉 CI/CD Setup Complete!${NC}"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Add secrets to GitHub (see instructions above)"
echo "2. Make a change to any file"
echo "3. Run: git add . && git commit -m 'Test deployment' && git push"
echo "4. Check GitHub Actions tab to see deployment"
echo "5. Visit https://woodenhub.in after 2 minutes"
echo ""
echo "For detailed instructions, read: DEPLOYMENT_GUIDE.md"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
