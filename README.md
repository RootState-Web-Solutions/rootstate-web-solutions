# RootState Web Solutions

A dark, responsive digital-studio website built with the Next.js App Router, TypeScript, Tailwind CSS 4, Geist, Motion for React and Lucide icons.

## What is included

- Responsive landing page with animated hero artwork, services, concept explorations, approach, process, FAQ and contact sections.
- Interactive project brief builder. It uses a template-based preview by default and can call OpenAI when configured.
- Contact form API route with field validation, a honeypot field and optional email delivery through Resend.
- Privacy note, custom 404 page, metadata, Open Graph image, sitemap, robots and basic security headers.
- Reduced-motion support and mobile navigation.

## Requirements

- Node.js 20.9 or newer
- npm (or pnpm / yarn)

## Run locally on Windows

1. Extract this folder and open it in VS Code.
2. Open Terminal in the project folder.
3. Install packages:

   ```powershell
   npm install
   ```

4. Start the local server:

   ```powershell
   npm run dev
   ```

5. Open `http://localhost:3000`.

To validate the project before deployment:

```powershell
npm run typecheck
npm run lint
npm run build
```

## Turn on live AI brief generation (optional)

1. Copy `.env.example` to `.env.local`.
2. Add an OpenAI API key to `OPENAI_API_KEY`.
3. Optionally set `OPENAI_MODEL` to a model enabled for your account. The default is `gpt-4.1-mini`.
4. Restart the development server.

If no key is present, the brief builder returns a clearly labelled template preview. Never expose an AI key through a `NEXT_PUBLIC_` variable or commit `.env.local` to Git.

The API includes a small in-memory request limit as a basic guardrail. For a public production site, add a distributed rate limiter (for example, Redis-backed), abuse monitoring and a spending limit on the AI provider; in-memory limits do not reliably coordinate across serverless instances.

## Turn on contact email delivery (optional)

The contact form sends email through Resend when configured:

1. Create a Resend account and verify a domain you control.
2. Copy `.env.example` to `.env.local` if you have not already.
3. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL`. `CONTACT_FROM_EMAIL` must use a sender identity verified with Resend.
4. Restart the server.

Without these settings, the form shows a clear message and offers a direct email link to `hello@rootstate.tech`. Replace that address with an inbox you control if needed.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel and keep the default Next.js build settings.
3. Add the optional environment variables in **Project → Settings → Environment Variables**.
4. Deploy, then attach `rootstate.tech` in **Project → Settings → Domains** and follow Vercel's DNS instructions.
5. Verify the domain, contact delivery, live AI generation, metadata, sitemap and privacy note on the production URL.

`NEXT_PUBLIC_SITE_URL` defaults to `https://rootstate.tech`. Set it to your actual canonical domain before deploying a preview or staging copy.

## Before launch

- Replace the contact email if `hello@rootstate.tech` is not an inbox you control.
- Add your real company registration / billing details if appropriate.
- Update the privacy note to reflect the final hosting, AI, email and analytics providers. The included copy is a starter notice, not legal advice.
- Consider a distributed rate limiter and spam protection (such as Turnstile) for public API routes.
- Verify accessibility, copy, links and mobile layout on real devices.
- Project tiles are explicitly labelled concept explorations rather than claims of completed client work.

## Project structure

```text
app/
  api/brief/route.ts      # Optional OpenAI integration + preview brief
  api/contact/route.ts    # Optional Resend delivery
  privacy/page.tsx
  globals.css
  layout.tsx
  page.tsx
  opengraph-image.tsx
  robots.ts
  sitemap.ts
components/
  brief-builder.tsx
  contact-form.tsx
  reveal.tsx
  site-footer.tsx
  site-header.tsx
lib/
  site.ts
public/
.env.example
```
