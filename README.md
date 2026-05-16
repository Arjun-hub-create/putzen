# PUTZEN Premium Auto Care — Website

A cinematic, luxury automotive detailing website built with React + Vite + Tailwind CSS + Framer Motion.

---

## Quick Start

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

---

## EmailJS Setup — Connect putzenautocare@gmail.com

5-minute one-time setup to receive booking emails at putzenautocare@gmail.com.

### Step 1 — Create EmailJS Account
1. Go to https://emailjs.com
2. Click Sign Up (free — 200 emails/month)
3. Confirm your email

### Step 2 — Add Gmail Service
1. Dashboard > Email Services > Add New Service
2. Choose Gmail
3. Click Connect Account > log in with putzenautocare@gmail.com
4. Name it "PUTZEN Gmail" > Create Service
5. Copy the Service ID (e.g. service_abc1234)

### Step 3 — Create Email Template
1. Email Templates > Create New Template
2. Set To: putzenautocare@gmail.com
3. Subject: New Booking — {{vehicle}} — {{from_name}}
4. Body:
   Name: {{from_name}}
   Phone: {{phone}}
   Vehicle: {{vehicle}}
   Message: {{message}}
5. Save > copy Template ID (e.g. template_xyz5678)

### Step 4 — Get Public Key
Account > API Keys > copy Public Key (e.g. abcDEFghIJKL)

### Step 5 — Paste Into Code
Open src/components/Contact.jsx, lines 37-39:

   const EMAILJS_SERVICE_ID  = 'service_abc1234';
   const EMAILJS_TEMPLATE_ID = 'template_xyz5678';
   const EMAILJS_PUBLIC_KEY  = 'abcDEFghIJKL';

Save, redeploy. Every form submission lands in putzenautocare@gmail.com.

---

## Deploy to Vercel

Option A — GitHub (recommended):
1. Push to GitHub
2. vercel.com > New Project > Import repo
3. Framework: Vite, Build: npm run build, Output: dist
4. Deploy

Option B — CLI:
   npm install -g vercel
   vercel --prod

---

## Business Info in Code

Email:    putzenautocare@gmail.com
Phone 1:  +91 9901995353
Phone 2:  +91 7975843550
WhatsApp: https://wa.me/917975843550
Address:  16th Cross, Pai Layout, Bengaluru
