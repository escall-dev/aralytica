# ARALytica Contact System & Resend Email Integration Setup

This document provides setup instructions for operationalizing the contact inquiry system on the ARALytica Next.js website using [Resend](https://resend.com).

---

## 1. Overview & Architecture

The ARALytica inquiry system uses a server-side Next.js route handler (`app/api/contact/route.ts`) integrated with Resend.

- **Inquirer Form**: Collects Full Name, Organization, Work Email, Practice Area, Subject, and Detailed Message.
- **Security & Spam Protection**: Client and server-side input length/type validation, in-memory rate limiting, and an invisible honeypot field (`botField`).
- **Server-Side Dispatch**: Sends a structured HTML inquiry email via `@react-email/components` and a plain-text fallback.
- **Reply-To Mapping**: The inquirer's email is set as `replyTo`, allowing technical leadership to reply directly from their email client.

---

## 2. Environment Variables

Configure the following variables in `.env.local` (for local development) and in your Vercel Project Settings (for deployment):

| Variable             | Required | Description                                 | Example / Default                   |
| :------------------- | :------- | :------------------------------------------ | :---------------------------------- |
| `RESEND_API_KEY`     | **Yes**  | Resend API key generated from the dashboard | `re_123456789...`                   |
| `CONTACT_FROM_EMAIL` | Optional | Authorized sender identity in Resend        | `ARALytica <noreply@aralytica.com>` |
| `CONTACT_TO_EMAIL`   | Optional | Destination inbox for inquiries             | `aralytica@gmail.com`               |

> **Important**: Never commit actual API keys or secrets to Git. `.env*` files (except `.env.example`) are excluded in `.gitignore`.

---

## 3. Resend Account & API Key Configuration

1. Log in to [Resend Dashboard](https://resend.com).
2. Navigate to **API Keys** and click **Create API Key**.
3. Grant **Sending access** (Restricted Access or Full Access).
4. Copy the generated key and assign it to `RESEND_API_KEY`.

---

## 4. Domain Verification & DNS Authentication (Production)

To send emails from an official ARALytica address (e.g. `noreply@aralytica.com`) without hitting spam filters, the sending domain must be verified in Resend:

1. Navigate to **Domains** in the Resend dashboard and click **Add Domain** (`aralytica.com`).
2. Add the DNS records provided by Resend to your DNS host:
   - **DKIM** (TXT / CNAME): Authenticates outbound emails and ensures tamper-proof delivery.
   - **SPF** (TXT): Authorizes Resend mail servers to send on behalf of `aralytica.com`.
   - **DMARC** (TXT): Enforces domain alignment policy.
   - **MX** (Optional / Tracking): If custom reverse DNS / inbound routing is configured.
3. Wait for DNS propagation and verify the domain status turns **Verified** in Resend.
4. Set `CONTACT_FROM_EMAIL="ARALytica Inquiries <noreply@aralytica.com>"` in your environment variables.

> **Production Safety Note**: Do not modify production DNS records for the live WordPress site until the official migration cutover window is scheduled and approved.

---

## 5. Development & Sandbox Testing

Before domain verification is complete, Resend allows testing using their shared sandbox:

- **Sender Address**: `onboarding@resend.dev`
- **Sandbox Limitation**: In sandbox mode, Resend only delivers emails to the email address registered with your Resend account.
- **Handling Unconfigured Environments**: When `RESEND_API_KEY` is not present, the endpoint returns HTTP `503 Service Unavailable` with a safe, polite message directing users to `aralytica@gmail.com`. It does **not** fake email delivery.

---

## 6. Vercel Deployment & Integration Options

### Option A: Manual Environment Configuration

In the Vercel Dashboard:

1. Open your ARALytica project.
2. Go to **Settings > Environment Variables**.
3. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` for `Preview` and `Production` environments.

### Option B: Resend Vercel Integration

Resend offers a first-party [Vercel Integration](https://vercel.com/integrations/resend) that automatically populates `RESEND_API_KEY` and syncs domain settings across deployments.

---

## 7. Scaling Rate Limiting (Optional Enhancement)

The current implementation includes an in-memory sliding window rate limiter (5 requests per 10 minutes per IP). In a multi-region serverless environment with high traffic, persistent distributed rate limiting can optionally be added via `@upstash/ratelimit` or Vercel KV without modifying the form interface or core handler logic.
