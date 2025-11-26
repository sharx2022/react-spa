# Namecheap Hosting Deployment Guide

This guide will walk you through deploying your React SPA to Namecheap shared hosting.

## Prerequisites

- Active Namecheap hosting account
- FTP/SFTP credentials or cPanel access
- Domain pointed to your Namecheap hosting

## Deployment Methods

### Method 1: Using cPanel File Manager (Recommended for Beginners)

#### Step 1: Build Your React App

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

#### Step 2: Access cPanel

1. Log in to your Namecheap account
2. Go to **Hosting List** → **Manage** (for your hosting plan)
3. Click on **cPanel**

#### Step 3: Upload Files

1. In cPanel, open **File Manager**
2. Navigate to `public_html` (or your domain's root directory)
3. Delete any default files (like `index.html`, `cgi-bin`, etc.) if this is a fresh install
4. Click **Upload** and upload all contents from your `dist` folder
   - OR zip your `dist` folder contents, upload the zip, and extract it in cPanel

**Important:** Upload the **contents** of the `dist` folder, not the `dist` folder itself. Your `index.html` should be directly in `public_html`.

#### Step 4: Configure .htaccess for React Router

Create or edit `.htaccess` in your `public_html` directory with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle React Router - send all requests to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Set cache control headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### Step 5: Set Correct Permissions

In File Manager, select all files and folders, click **Permissions**, and set:
- Files: 644
- Folders: 755

#### Step 6: Test Your Deployment

Visit your domain in a browser. Your React app should be live!

---

### Method 2: Using FTP/SFTP (Recommended for Automation)

#### Step 1: Get Your FTP Credentials

From cPanel or Namecheap dashboard:
- **Host:** Usually `ftp.yourdomain.com` or your server IP
- **Username:** Your cPanel username or FTP account username
- **Password:** Your FTP password
- **Port:** 21 (FTP) or 22 (SFTP - if available)

#### Step 2: Build Your App

```bash
npm run build
```

#### Step 3: Upload Using FTP Client

**Option A: Using FileZilla (GUI)**

1. Download and install [FileZilla](https://filezilla-project.org/)
2. Connect using your FTP credentials
3. Navigate to `public_html` on the remote server
4. Upload all contents from your local `dist` folder
5. Create/upload the `.htaccess` file (see Method 1, Step 4)

**Option B: Using Command Line (lftp)**

Install lftp if you don't have it:
```bash
# macOS
brew install lftp

# Linux
sudo apt-get install lftp
```

Then use the deployment script (see Method 3 below).

#### Step 4: Set Permissions and Test

Same as Method 1, Steps 5-6.

---

### Method 3: Automated Deployment Script (Advanced)

I've created a deployment script for you. See `deploy-namecheap.sh`.

**Setup:**

1. Create a `.env.namecheap` file with your credentials:

```bash
FTP_HOST="ftp.yourdomain.com"
FTP_USER="your_ftp_username"
FTP_PASS="your_ftp_password"
FTP_DIR="/public_html"  # or /public_html/subdirectory
```

2. Make the script executable:

```bash
chmod +x deploy-namecheap.sh
```

3. Run the deployment:

```bash
./deploy-namecheap.sh
```

**Note:** Add `.env.namecheap` to your `.gitignore` to keep credentials secure!

---

## Troubleshooting

### Issue: Blank page or "Cannot GET /" error

**Solution:** Ensure the `.htaccess` file is present and properly configured (see Method 1, Step 4).

### Issue: 404 errors on refresh or direct URL access

**Solution:** Your `.htaccess` rewrite rules aren't working. Check:
- `.htaccess` file exists in the root directory
- mod_rewrite is enabled (usually enabled by default on Namecheap)
- File permissions are correct (644 for .htaccess)

### Issue: CSS/JS not loading

**Solution:** 
1. Check the paths in your built files
2. If deploying to a subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/subdirectory/' // Add this line
})
```

Then rebuild and redeploy.

### Issue: Images not displaying

**Solution:**
- Use relative paths or import images in your React components
- Ensure images are in the `public` folder or imported as modules
- Check file permissions (644 for images)

### Issue: FTP connection refused

**Solution:**
- Verify your FTP credentials
- Check if your hosting plan supports FTP/SFTP
- Try using passive mode in your FTP client
- Check if your IP needs to be whitelisted in cPanel

---

## Subdirectory Deployment

If deploying to a subdirectory (e.g., `yourdomain.com/app`):

1. Update `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/app/' // Your subdirectory name
})
```

2. Rebuild: `npm run build`

3. Upload to `public_html/app/`

4. Create `.htaccess` in `public_html/app/` with the same content as above

---

## Performance Optimization

### 1. Enable Compression

Already included in the `.htaccess` file above.

### 2. Use Cloudflare (Free CDN)

1. Sign up for a free [Cloudflare](https://www.cloudflare.com/) account
2. Add your domain
3. Update your nameservers at Namecheap to Cloudflare's nameservers
4. Enable caching and minification in Cloudflare dashboard

### 3. Optimize Images

Before deployment, compress images:
- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Consider using WebP format for better compression

---

## Updating Your App

To deploy updates:

1. Make your changes
2. Build: `npm run build`
3. Upload new files (overwrite existing)
4. Clear browser cache or use Ctrl+Shift+R to hard refresh

**Pro tip:** Use the automated script for faster updates!

---

## Security Best Practices

1. **HTTPS:** Enable SSL/TLS certificate in cPanel (usually free with Let's Encrypt)
2. **Environment Variables:** Never commit sensitive data to Git
3. **Regular Updates:** Keep dependencies updated with `npm audit fix`
4. **File Permissions:** Never set files to 777

---

## Alternative: Using GitHub Actions for Auto-Deployment

For continuous deployment, you can set up GitHub Actions:

1. Store FTP credentials in GitHub Secrets
2. Create `.github/workflows/deploy.yml`
3. Auto-deploy on push to main branch

Let me know if you want help setting this up!

---

## Need Help?

Common issues:
- **Namecheap Support:** They can help with hosting-specific issues
- **React Router Issues:** Check your `.htaccess` configuration
- **Build Errors:** Run `npm run build` locally first to catch errors

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Deploy (after setting up the script)
./deploy-namecheap.sh
```

---

Your app should now be successfully deployed to Namecheap! 🎉

