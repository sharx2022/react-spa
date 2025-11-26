# reCAPTCHA Quick Setup (2 Minutes)

## 🚀 3 Simple Steps

### 1. Get Your reCAPTCHA Site Key

1. Visit: https://www.google.com/recaptcha/admin/create
2. Fill in:
   - **Label:** Sharx Contact Form
   - **reCAPTCHA type:** v3
   - **Domains:** Add:
     - `localhost`
     - Your production domain (e.g., `yourdomain.com`)
3. Click **Submit**
4. **Copy your Site Key** (starts with `6L...`)

### 2. Add to Your Project

Open `.env.local` file and replace:

```bash
VITE_RECAPTCHA_SITE_KEY=YOUR_RECAPTCHA_SITE_KEY_HERE
```

with your actual key:

```bash
VITE_RECAPTCHA_SITE_KEY=6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA
```

### 3. Run Your App

```bash
npm run dev
```

That's it! Your form now has 4 layers of spam protection! 🛡️

---

## 🧪 Quick Test

1. Go to your contact form
2. Fill it out and submit
3. Should work smoothly (reCAPTCHA is invisible!)

Try submitting twice rapidly - you'll get rate limited ✅

---

## 📦 Before Deploying to Production

1. Add your production domain to reCAPTCHA (step 1 above)
2. Build: `npm run build`
3. Deploy: `./deploy-namecheap.sh`

---

## 🛡️ What's Protected Now?

✅ **reCAPTCHA v3** - AI bot detection  
✅ **Honeypot** - Catches simple bots  
✅ **Rate Limiting** - 1/min, max 3/hour  
✅ **Validation** - Links, caps, format checks  

---

## ❓ Need More Help?

See full guide: `SPAM_PROTECTION_SETUP.md`

---

**Total Setup Time: 2 minutes** ⏱️

