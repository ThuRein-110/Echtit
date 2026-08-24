# Echtit

Cybersecurity course and services website for Echtit.

## Sections

- Current paid course: Steganography & CTF.
- Services: Personal Device Hub private beta with a `$10` one-time down payment.
- Selected work: writeups and videos.
- Contact: Telegram inquiry through `@zalon123`.

## Personal Device Hub Service

Personal Device Hub is presented as a private Tailscale device-control app with a `$10` one-time down payment. The public site reveals the Thai TrueMoney QR only after the customer clicks ready to pay, then collects the buyer name and payment slip picture for manual review.

The public Services section is intentionally minimal. The public setup guide in `downloads/personal-device-hub-setup-readme.md` explains how the app works, but the private installer package is delivered only after payment approval.

## Paid User Slip Form

The `Ready to pay` popup includes a secure slip form. It posts to `api/payment-slip.js`, which sends the buyer name and slip picture to your private Telegram bot. Customers do not need Telegram.

Set these Vercel environment variables before using the form live:

```text
TELEGRAM_BOT_TOKEN=<token from BotFather for the Paid User bot>
TELEGRAM_CHAT_ID=<your private chat, group, or channel id>
PAYMENT_ALLOWED_ORIGINS=https://echtit.vercel.app
```

CLI setup:

```bash
npx vercel env add TELEGRAM_BOT_TOKEN production
npx vercel env add TELEGRAM_CHAT_ID production
npx vercel env add PAYMENT_ALLOWED_ORIGINS production
```

Keep the bot token private. Do not put it in `index.html`, `scripts.js`, or any public file.

Before selling publicly, add:

- payment checkout link;
- Terms and Privacy pages;
- refund/cancellation wording;
- customer onboarding instructions.
