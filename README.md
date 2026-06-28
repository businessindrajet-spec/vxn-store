# Vxn Store — launch guide

This package is a fully clickable frontend build of Vxn Store. Every page works end to end —
signup, login, listing a company, dashboard, admin, offers, bookmarks — using your browser's
local storage as the data layer. There is no real backend wired in yet (no live database, no
real payments, no real file storage), as agreed in the implementation plan.

## Run it locally

1. Drop these files into your existing `vxn-store` project (from Antigravity), overwriting
   matching paths. Or, if running this zip standalone:
   ```
   npm install
   npm run dev
   ```
2. Open http://localhost:3000

## What works right now (no setup needed)

- Browse the homepage and featured listings
- Sign up / log in (stored in your browser, not a real database)
- Add a company listing (saved locally, shows up in "My companies")
- View any company's detail page
- Dashboard: stats, my companies, add company, messages, offers, analytics, bookmarks,
  profile, billing, settings
- Admin panel with a mock approval queue
- Light / dark mode toggle, persisted across reloads

## Deploy it today (so you have a live URL)

The quickest path to a real, public URL:

1. Push this folder to a GitHub repo.
2. Go to vercel.com, "Add new project", import the repo.
3. Click deploy. No environment variables are required for this demo build.

You'll have a live, clickable site in about two minutes. This is genuinely launch-ready as a
demo / portfolio piece or to gather early signups.

## What's still needed before this handles real money or real user data

The plan already accounts for these — they just need your credentials and a few hours of wiring:

1. **Real database** — run `npx prisma migrate dev` against the `prisma/schema.prisma` here,
   then replace the calls in `src/lib/store.ts` with real `/api/*` route handlers hitting Prisma.
2. **Real auth** — swap the local-storage session in `store.ts` for the JWT + httpOnly cookie
   flow described in the plan (signup/login/logout/me routes).
3. **Real file uploads** — connect `Add company` file inputs to an upload API route; start by
   saving to `public/uploads`, then swap in AWS S3 credentials later.
4. **Real payments** — connect the Billing page's "Upgrade with card" button to a real Stripe
   Checkout session once you have API keys.

None of this requires changing the design or page structure — only swapping the data layer.
