# Quick Start: Deploy to Namecheap Hosting

## 🚀 Fast Deployment (3 Steps)

### Option 1: Manual Upload (No Technical Skills Required)

1. **Build your app:**

   ```bash
   npm run build
   ```

2. **Upload to Namecheap:**

   - Log into your Namecheap cPanel
   - Go to **File Manager** → **public_html**
   - Upload everything from the `dist` folder
   - Create a file named `.htaccess` (see below)

3. **Create `.htaccess` file** in `public_html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

✅ **Done!** Visit your domain.

---

### Option 2: Automated FTP Deployment (Recommended)

1. **Setup credentials** (one-time):

   ```bash
   cp env.namecheap.example .env.namecheap
   ```

   Edit `.env.namecheap` with your FTP details:

   ```bash
   FTP_HOST="ftp.yourdomain.com"
   FTP_USER="your_username"
   FTP_PASS="your_password"
   FTP_DIR="/public_html"
   ```

2. **Install lftp** (one-time):

   ```bash
   # macOS
   brew install lftp

   # Linux
   sudo apt-get install lftp
   ```

3. **Deploy:**
   ```bash
   ./deploy-namecheap.sh
   ```

✅ **Done!** Your app is deployed automatically.

---

## 📱 Where to Find FTP Credentials

1. Log into Namecheap
2. Go to **cPanel** → **FTP Accounts**
3. Use the main cPanel account or create a new FTP account
4. Host is usually `ftp.yourdomain.com`

---

## 🔄 Updating Your App

Just run the deployment command again:

**Manual:** Build → Upload → Replace files

**Automated:**

```bash
./deploy-namecheap.sh
```

---

## ❓ Troubleshooting

| Problem         | Solution                               |
| --------------- | -------------------------------------- |
| Blank page      | Check `.htaccess` file exists          |
| 404 on refresh  | `.htaccess` rewrite rules not working  |
| CSS not loading | Check paths in vite.config.ts          |
| FTP fails       | Verify credentials in `.env.namecheap` |

---

## 📖 Full Documentation

For detailed instructions, see [NAMECHEAP_DEPLOYMENT_GUIDE.md](./NAMECHEAP_DEPLOYMENT_GUIDE.md)

---

## 🎯 Deploy to Subdirectory?

Edit `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: "/myapp/", // Add this line
});
```

Then upload to `public_html/myapp/` instead of `public_html/`
