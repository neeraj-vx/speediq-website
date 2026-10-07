# SpeedIQ website

The public marketing site for [speediq.ai](https://speediq.ai): home, product, features,
pricing, docs, compare, use cases, about and legal pages.

It is a standalone Next.js site with **no connection to the SpeedIQ app**: no shared code, no
database, no auth, no API routes. Every "Log in", "Get started" and "Dashboard" link is an
absolute URL to the app host (`NEXT_PUBLIC_APP_URL`, default `https://app.speediq.ai`), and
`/auth/*`, `/dashboard/*`, `/login`, `/signup` on this domain redirect there.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm typecheck  # tsc --noEmit
```

Copy `.env.example` to `.env.local` to override the defaults. None of the variables are
required.

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://speediq.ai` | Canonical URLs, sitemap, Open Graph |
| `NEXT_PUBLIC_APP_URL` | `https://app.speediq.ai` | Where sign-in / sign-up / checkout links go |
| `NEXT_PUBLIC_SPEEDIQ_CHAT_KEY` | *(empty)* | Optional: public key of a SpeedIQ live-chat widget. When set, the standard embed script is loaded like on any customer site. Empty = no runtime calls to the app at all. |

## Structure

- `app/` — one folder per route; `app/page.tsx` is the home page (the long landing page).
  `layout.tsx` loads the fonts and wraps the site in the `.speediq-landing` style scope.
  `robots.ts`, `sitemap.ts` and `opengraph-image.tsx` are generated.
- `components/landing/` — navbar + mega menu, footer, the home-page sections, the shared
  marketing building blocks (`marketing.tsx`), the pricing calculator, legal page shell, and
  the docs (`docs/nav.ts` is the article registry, `docs/articles.tsx` the bodies).
- `lib/landing/` — `site.ts` (the two hosts), `links.ts` (auth links), `seo.ts` (per-page metadata).
- `lib/pricing/` — pure helpers for the pricing page, mirroring the app's billing rules.
- `content/pricing.json` — **the pricing numbers**. See below.
- `public/landing/` — photos used on the pages.

## Updating pricing

The app reads plans, credit prices and per-country rates from its database. This site has no
database, so those numbers live in `content/pricing.json` and must be updated by hand when
they change in the app's admin (Plans, Credit pricing, Rate card):

- `tiers` — one entry per plan: prices, limits, channels, features and included monthly credits.
- `creditTypes` — USD price per credit (in cents) and top-up bounds per bucket.
- `countryRates` — credits one SMS segment / voice minute burns per country, cheapest first.
  Rule: `ceil(carrier cost in cents × pricing margin / credit price in cents)`, at least 1.
- `emailCredits`, `aiCredits` — credits per email / per AI action.

Checkout links from the pricing page deep-link into the app's billing page
(`/dashboard/billing?plan=…` or `?topup=email:5000,sms:500`) via the app's sign-up page.

## Deploy

Deployed on Vercel (team `virtualx`, project `speediq-website`) from this repository.

```bash
vercel --prod --scope virtualx
```
