# 🚀 Deployment Guide - My Portfolio

## ✅ Project Ready for Deployment!

Your portfolio is fully configured and ready to deploy on **Vercel** and **Netlify**.

## 📋 Pre-Deployment Checklist

- ✅ Build command: `npm run build`
- ✅ Output directory: `dist/public`
- ✅ Node version: >= 18.0.0
- ✅ All dependencies installed
- ✅ Build tested successfully
- ✅ GitHub repository: https://github.com/himanshu-bca2025/My-portfolio

## 🌐 Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import repository: `himanshu-bca2025/My-portfolio`
   - Vercel will auto-detect:
     - Build Command: `npm run build`
     - Output Directory: `dist/public`
   - Click "Deploy"

3. **Your site will be live at:**
   - `https://my-portfolio-*.vercel.app`
   - You can add custom domain later

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🎯 Deploy to Netlify

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Netlify:**
   - Go to [https://netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select repository: `himanshu-bca2025/My-portfolio`
   - Netlify will auto-detect from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist/public`
   - Click "Deploy site"

3. **Your site will be live at:**
   - `https://random-name.netlify.app`
   - You can add custom domain later

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🔧 Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📝 Important Notes

1. **GitHub Repository:**
   - Make sure your code is pushed to: `https://github.com/himanshu-bca2025/My-portfolio`

2. **Build Output:**
   - Build creates files in `dist/public/`
   - This is what gets deployed

3. **Environment Variables:**
   - No environment variables needed for this project

4. **Custom Domain:**
   - Both Vercel and Netlify support custom domains
   - Add in dashboard after deployment

## 🐛 Troubleshooting

### Build Fails
- Check Node version (should be >= 18)
- Run `npm install` locally first
- Check build logs in deployment dashboard

### 404 Errors
- Make sure `rewrites`/`redirects` are configured
- Check that `index.html` exists in output directory

### Assets Not Loading
- Verify paths are relative (not absolute)
- Check that assets are in `dist/public/`

## ✅ After Deployment

1. **Test your site:**
   - Check all pages load correctly
   - Test all links
   - Verify responsive design

2. **Update Links:**
   - Update portfolio project's `liveUrl` with your deployment URL
   - Share your portfolio link!

## 🎉 Success!

Your portfolio is now live and ready to share!

---

**Repository:** https://github.com/himanshu-bca2025/My-portfolio

