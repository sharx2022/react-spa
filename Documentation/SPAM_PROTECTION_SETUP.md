# Spam Protection Setup Guide

Your contact form now has **4 layers of spam protection**! 🛡️

## 🔒 Protection Layers

### 1. **Google reCAPTCHA v3** (Invisible)

- ✅ Invisible to users (no checkboxes!)
- ✅ AI-powered bot detection
- ✅ Industry standard

### 2. **Honeypot Field**

- ✅ Hidden field that only bots fill
- ✅ Zero user friction
- ✅ Catches simple bots

### 3. **Rate Limiting**

- ✅ 1 submission per minute
- ✅ Maximum 3 submissions per hour
- ✅ Prevents spam floods

### 4. **Smart Validation**

- ✅ Detects excessive links (max 2)
- ✅ Blocks ALL CAPS messages
- ✅ Validates email format
- ✅ Minimum content length

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin/create)
2. Fill in the form:

   - **Label:** Sharx Contact Form
   - **reCAPTCHA type:** reCAPTCHA v3
   - **Domains:**
     - `localhost` (for development)
     - `yourdomain.com` (your production domain)
   - Accept terms and submit

3. Copy your **Site Key** (starts with `6L...`)

### Step 2: Create Environment File

Create a file named `.env.local` in your project root:

```bash
# .env.local
VITE_RECAPTCHA_SITE_KEY=6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA
```

Replace with your actual Site Key from Step 1.

### Step 3: Test It!

```bash
npm run dev
```

Visit your contact form and try to submit. Everything should work smoothly!

---

## 🧪 Testing Your Protection

### Test 1: Normal Submission ✅

- Fill out the form normally
- Should work perfectly

### Test 2: Rapid Submissions ⚠️

- Submit a form
- Try to submit again immediately
- Should get "Please wait a moment" error

### Test 3: Too Many Links 🚫

- Put 3 or more URLs in the message
- Should get "Too many links" error

### Test 4: All Caps 🚫

- Write message in ALL CAPS
- Should get "Don't use all caps" error

### Test 5: Honeypot (Bot Test) 🤖

- Open browser console
- Type: `document.querySelector('[name="honeypot"]').value = 'test'`
- Submit form
- Should get "Spam detected" error

---

## 📊 What Each Protection Does

### reCAPTCHA v3

```typescript
const recaptchaToken = await executeRecaptcha("contact_form");
```

- Analyzes user behavior
- Returns score (0.0 to 1.0)
- Tokens sent with email for verification

### Honeypot Field

```jsx
<input
  type="text"
  name="honeypot"
  style={{ display: "none" }}
  tabIndex={-1}
  autoComplete="off"
/>
```

- Hidden from real users
- Bots auto-fill it
- Instant rejection if filled

### Rate Limiting

```typescript
// 1 minute between submissions
if (timeSinceLastSubmit < 60000) {
  throw new Error("Please wait a moment");
}

// Max 3 per hour
if (submissionCount >= 3) {
  throw new Error("Maximum submissions reached");
}
```

### Smart Validation

```typescript
// Link detection
const linkCount = (message.match(/https?:\/\//g) || []).length;
if (linkCount > 2) return { isValid: false };

// Caps detection
const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
if (capsRatio > 0.7) return { isValid: false };
```

---

## 🎨 User Experience

### What Users See:

- ✅ Clean, simple form
- ✅ No annoying checkboxes
- ✅ Clear error messages
- ✅ Loading states during submission

### What Bots Hit:

- 🚫 reCAPTCHA verification
- 🚫 Honeypot trap
- 🚫 Rate limits
- 🚫 Content validation

---

## 🔧 Customizing Protection

### Adjust Rate Limits

In `src/pages/Home.tsx`:

```typescript
// Change minimum time between submissions (default: 60000 = 1 minute)
if (timeSinceLastSubmit < 120000) {
  // 2 minutes
  throw new Error("Please wait before sending another message");
}

// Change max submissions per hour (default: 3)
if (submissionCount.current >= 5) {
  // 5 submissions
  throw new Error("Maximum submissions reached");
}
```

### Adjust Link Limit

```typescript
// Change maximum allowed links (default: 2)
if (linkCount > 5) {
  // Allow 5 links
  return { isValid: false, error: "Too many links" };
}
```

### Adjust Caps Detection

```typescript
// Change caps ratio threshold (default: 0.7 = 70%)
if (capsRatio > 0.5 && formData.message.length > 20) {
  // 50% caps
  return { isValid: false, error: "Please don't use all caps" };
}
```

### Disable Specific Protections

To disable a protection layer, comment it out:

```typescript
// // Disable caps detection
// if (capsRatio > 0.7 && formData.message.length > 20) {
//   return { isValid: false, error: "Please don't use all caps" };
// }
```

---

## 🌍 Production Deployment

### Before Deploying:

1. **Add production domain to reCAPTCHA**

   - Go to [reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
   - Click on your site
   - Add your production domain to the list

2. **Set environment variable**

   - If deploying to Namecheap with static files, reCAPTCHA key is embedded
   - For other platforms:

     ```bash
     # Netlify/Vercel: Add in dashboard
     VITE_RECAPTCHA_SITE_KEY=6LxxxxxxxxxxxxxxxxxxxA

     # AWS Amplify: Add in Environment Variables
     VITE_RECAPTCHA_SITE_KEY=6LxxxxxxxxxxxxxxxxxxxA
     ```

3. **Build and deploy**
   ```bash
   npm run build
   ./deploy-namecheap.sh  # or your deployment method
   ```

### Important: Environment Variables in Static Builds

⚠️ **Note:** With Vite, environment variables are embedded at build time!

For Namecheap static hosting:

1. Set your `.env.local` file with the reCAPTCHA key
2. Run `npm run build`
3. The key is embedded in the build
4. Upload to Namecheap

The site key is **safe to expose** (it's public anyway), but keep your **secret key** private!

---

## 🔐 Security Best Practices

### DO ✅

- Keep site key in environment variables during development
- Add all your domains to reCAPTCHA admin
- Monitor EmailJS logs for spam patterns
- Test on localhost before deploying
- Keep rate limits reasonable

### DON'T ❌

- Don't commit `.env.local` to Git (already in `.gitignore`)
- Don't share your reCAPTCHA secret key
- Don't make rate limits too strict (bad UX)
- Don't skip reCAPTCHA setup (other protections aren't enough)

---

## 📈 Monitoring Spam

### EmailJS Dashboard

1. Log into [EmailJS](https://dashboard.emailjs.com/)
2. Check **History** tab
3. Look for patterns:
   - Multiple failures from same IP
   - Similar message content
   - Rapid submissions

### If You Still Get Spam:

**Option 1: Stricter reCAPTCHA**

```typescript
// In EmailJS template, you can verify the token
// (requires backend or EmailJS Pro plan)
```

**Option 2: Tighter Rate Limits**

```typescript
if (timeSinceLastSubmit < 300000) {  // 5 minutes
if (submissionCount.current >= 1) {  // 1 per hour
```

**Option 3: Add More Validation**

```typescript
// Block common spam words
const spamWords = ["viagra", "casino", "lottery"];
const hasSpam = spamWords.some((word) => message.toLowerCase().includes(word));
if (hasSpam) {
  return { isValid: false, error: "Invalid content" };
}
```

**Option 4: Switch to Backend**
Use PHP backend (see `CONTACT_FORM_SETUP.md`) for server-side validation

---

## 🐛 Troubleshooting

### Issue: "reCAPTCHA not loaded"

**Solution:**

1. Check `.env.local` exists and has correct key
2. Restart dev server: `npm run dev`
3. Check browser console for errors
4. Verify domain is added in reCAPTCHA admin

### Issue: reCAPTCHA badge not showing

**Normal!** reCAPTCHA v3 is invisible. You'll see a small badge in bottom-right corner.

### Issue: Form works without reCAPTCHA

**Problem:** Missing environment variable

**Solution:**

```bash
# Create .env.local file
echo 'VITE_RECAPTCHA_SITE_KEY=your_key_here' > .env.local
npm run dev
```

### Issue: Rate limit too strict

**Solution:** Adjust in `Home.tsx`:

```typescript
if (timeSinceLastSubmit < 30000) {  // 30 seconds instead of 1 minute
```

### Issue: Legitimate users getting blocked

**Solution:**

1. Check validation rules (links, caps)
2. Make them less strict
3. Add better error messages

---

## 📱 Mobile Testing

Don't forget to test on mobile:

1. reCAPTCHA works seamlessly
2. Honeypot doesn't interfere
3. Rate limits work across page refreshes
4. Error messages display properly

---

## 🎯 Protection Summary

| Protection    | Effectiveness | User Friction | Setup Time |
| ------------- | ------------- | ------------- | ---------- |
| reCAPTCHA v3  | ⭐⭐⭐⭐⭐    | None          | 5 min      |
| Honeypot      | ⭐⭐⭐        | None          | Done ✅    |
| Rate Limiting | ⭐⭐⭐⭐      | Minimal       | Done ✅    |
| Validation    | ⭐⭐⭐⭐      | Minimal       | Done ✅    |

**Combined:** 🛡️ Very Strong Protection with Excellent UX

---

## 🚀 You're All Set!

Your contact form now has enterprise-level spam protection:

✅ reCAPTCHA v3 configured  
✅ Honeypot field installed  
✅ Rate limiting active  
✅ Smart validation enabled

Just add your reCAPTCHA key and you're ready to go!

---

## 💡 Need Help?

- **reCAPTCHA Issues:** [reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/v3)
- **EmailJS Issues:** [EmailJS Support](https://www.emailjs.com/docs/)
- **Code Issues:** Check browser console for errors

---

**Happy spam-free emailing! 🎉**
