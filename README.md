# MyHouseAssist

Your Home. Our Responsibility.

Premium home deep cleaning website for Bangalore. React 19 + Vite + TypeScript + Tailwind v4.

## Status: Feature-complete

All 7 planned milestones are built: full site, real pricing/contact/booking
form/domain/logo wired in, SEO, and deployment config for both Vercel and
Hostinger. See "Review for accuracy before launch" below for the handful
of items that are intentionally left for you to finalize (legal review,
real reviews, real gallery photos).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Before you go live

Edit `src/config/site.ts` and replace:

- `BOOKING_FORM_URL` — your real Google Form link
- `CONTACT.phoneDisplay` / `phoneHref` / `whatsappHref` / `email`
- `CONTACT.mapsEmbedUrl` — your real Google Maps embed code

Edit `src/config/seo.ts` and review:

- `SITE_URL` (in `src/config/site.ts`) — your real domain, once purchased and pointed at Hostinger
- `public/og-image.png` — already sized correctly (1200×630) as a placeholder;
  review it and replace with real branded artwork before launch

Domain, contact info, Google Form, and Maps embed are already filled in
with real values (`myhouseassist.com`) as of this update.

**Important:** `index.html` is a static file — its Open Graph tags, Twitter
Card tags, and the `LocalBusiness` JSON-LD block are hardcoded and do
**not** read from `src/config/site.ts`. If you change the domain, phone
number, or business description in the config, update the matching values
in `index.html` by hand too.

Review for accuracy before launch (not code, but important):
- `src/data/roomChecklist.ts` — confirm the per-room tasks match what your
  team actually does
- `src/pages/About.tsx` / `src/data/values.ts` — replace the generic mission
  copy with your real story if you have one
- `src/data/reviews.ts` — replace sample reviews with real customer
  feedback once you have completed bookings (see the comment in that file)
- `src/pages/PrivacyPolicy.tsx` / `src/pages/TermsAndConditions.tsx` — these
  are solid draft templates, not legal advice; have a lawyer review them
  before relying on them for a live business, particularly for compliance
  with India's Digital Personal Data Protection Act (DPDP), 2023

## SEO — what's implemented and what it means

- Per-page `<title>`, meta description, canonical URL, Open Graph, and
  Twitter Card tags via `useDocumentMeta` (applied client-side on route change)
- JSON-LD structured data: site-wide `LocalBusiness` schema (in `index.html`),
  `FAQPage` schema on `/faq`, and `Service` schema (with pricing) on
  `/home-deep-cleaning`
- `robots.txt` and `sitemap.xml` in `public/`

**Known limitation:** this is a client-rendered SPA with no backend, so
there's no server to set per-page tags before the response is sent.
Google and Bing execute JavaScript and index CSR sites like this
correctly. Social link-preview crawlers (WhatsApp, Facebook, X/Twitter)
generally *don't* execute JavaScript — they'll only ever see the static
tags baked into `index.html`, so every shared link will preview with the
homepage's title/description/image, not the specific page's. If per-page
social previews become a priority, the next step up is build-time
prerendering (generating static HTML per route at build time) — a
reasonable future addition, not something this project currently does.

## Performance

- Route-based code splitting via React Router's `lazy()` — each page is
  its own JS chunk, only loaded when visited
- Vendor chunk splitting in `vite.config.ts` (`react-vendor`, `motion-vendor`)
  so framework code is cached separately from app code
- Font loading uses `preconnect` + `display=swap` to avoid blocking render
- No raster images anywhere in the UI (icons + CSS/SVG only), so there's
  nothing to optimize/lazy-load on that front yet — if you add real photos
  (gallery, og-image, team photos), use modern formats (WebP/AVIF) and
  `loading="lazy"` on anything below the fold
- A minimal inline loading state in `index.html` avoids a blank white
  screen during the JS download/parse window

Run a real Lighthouse audit after your first production build — I
couldn't run one myself in this sandboxed environment (no network access
to install dependencies or run a browser). Chrome DevTools → Lighthouse,
or `npx unlighthouse` against your deployed URL, both work well.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploying to Vercel (recommended)

Vercel auto-detects Vite projects, so this is close to zero-config. Two ways to do it:

**Option A — CLI (fastest, no GitHub needed)**
```bash
npm install -g vercel
vercel login
vercel --prod
```
Run this from the project root. Follow the prompts (accept the auto-detected
Vite settings: Build Command `npm run build`, Output Directory `dist`).

**Option B — GitHub integration (recommended for ongoing updates)**
1. Push this project to a GitHub repo
2. Go to vercel.com → Add New Project → import the repo
3. Vercel auto-detects Framework Preset: **Vite** — leave it as Vite, don't
   change it to "Other" (a common cause of routing bugs, see below)
4. Deploy — every future `git push` auto-deploys

**Then add your custom domain:**
Vercel dashboard → Project → Settings → Domains → add `myhouseassist.com`
→ update your domain registrar's DNS records as Vercel instructs (usually
an A record or CNAME). This replaces pointing DNS at Hostinger.

**Routing config:** `vercel.json` (already in this project) tells Vercel to
serve `index.html` for every route, so React Router's BrowserRouter works
on refresh and direct links. Without it, any URL other than `/` 404s.

**If you get 404s on routes other than the homepage after deploying:**
confirm `vercel.json` is at the actual repo root (not inside `src/` or a
subfolder) and committed to git (not `.gitignore`d), and that the Vercel
project's Framework Preset is set to **Vite**, not "Other" — this exact
combination is the most common cause of this issue.

## Deploying to Hostinger (shared hosting, alternate option)

1. Run `npm run build`.
2. Upload the **contents** of `dist/` (not the folder itself) into `public_html`
   (or a subfolder if the site lives at a path).
3. Make sure `.htaccess` (already inside `dist/public` output) is present in the
   same folder as `index.html`. It rewrites all routes to `index.html` so
   React Router's BrowserRouter works on refresh and direct links —
   without it, any URL other than `/` will 404 on Hostinger.

## Tech stack

React 19 · Vite · TypeScript · Tailwind CSS v4 · React Router v7 · Framer Motion ·
React Icons · Lucide React · React Hook Form · Zod

## Project structure

```
src/
  app/            Routing (React Router data router)
  components/
    layout/       Navbar, Footer, Layout, WhatsAppButton — site chrome
    ui/           Button, Container — shared primitives used everywhere
  config/         Single source of truth for nav links, contact info, booking URL
  pages/          One file per route, lazy-loaded for code splitting
  types/          Shared TypeScript types
  index.css       Tailwind v4 theme tokens (colors, fonts) + base styles
```
