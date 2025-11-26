# Contact Form Setup Guide

Your contact form is now functional and will send emails to **support@officialsharx.com**!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** (it's free!)
3. Verify your email address

### Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail is easiest):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - **Custom SMTP**: Use any email service
4. For **support@officialsharx.com**, you'll likely use Custom SMTP or connect the email provider
5. Click **Create Service** and note the **Service ID**

### Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**

```
New Contact Form Submission: {{subject}}
```

**Content:**

```
You have received a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Click **Save** and note the **Template ID**

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

### Step 5: Update Your Code

Open `src/pages/Home.tsx` and replace these placeholders (around line 37-39):

```typescript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your Service ID from Step 2
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your Template ID from Step 3
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key from Step 4
```

Example:

```typescript
const serviceId = "service_abc123";
const templateId = "template_xyz789";
const publicKey = "Lm9vK3xYz_AbC123";
```

### Step 6: Test It!

1. Run your dev server: `npm run dev`
2. Go to the contact form
3. Fill it out and click "Send Message"
4. Check your **support@officialsharx.com** inbox!
