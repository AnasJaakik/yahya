# EmailJS Setup Instructions

## Overview
The forms are now integrated with EmailJS. You need to configure your EmailJS credentials to make them functional.

## Steps to Configure EmailJS

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)

### 2. Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables in your email:
   - `{{from_name}}` - Full name (Prénom + Nom)
   - `{{from_email}}` - Email address
   - `{{phone}}` - Phone number
   - `{{niveau}}` - Academic level
   - `{{matiere}}` - Subject/Matière
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (Étudium)

4. **Copy the Template ID** (you'll need this)

### 4. Get Public Key
1. Go to **Account** → **General** in your dashboard
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this)

### 5. Configure Environment Variables
1. Open the `.env` file in the root of your project
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Restart Development Server
After updating the `.env` file, restart your development server:
```bash
npm run dev
```

## Testing
1. Fill out the form on the Contact page or Home page
2. Submit the form
3. Check your email inbox for the form submission
4. You should see a success message on the form

## Troubleshooting

### Form shows "Configuration EmailJS manquante"
- Make sure you've updated the `.env` file with your actual credentials
- Make sure you've restarted the development server after updating `.env`
- Check that the variable names start with `VITE_` (required for Vite)

### Email not received
- Check your EmailJS dashboard for any error logs
- Verify your email service is properly connected
- Check that your template variables match the ones used in the code
- Verify your email service hasn't exceeded the free tier limit

## Template Example
Here's a sample email template you can use:

```
Subject: Nouvelle demande de consultation - {{from_name}}

Bonjour,

Vous avez reçu une nouvelle demande de consultation :

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Niveau: {{niveau}}
Matière: {{matiere}}

Message:
{{message}}

---
Cet email a été envoyé depuis le formulaire de contact Étudium.
```

## Notes
- The `.env` file is already in `.gitignore` to keep your credentials secure
- Never commit your `.env` file to version control
- For production, set these environment variables in your hosting platform

