# AC Repair Services Dubai — website

> **Naming note for the client:** no registered trade name could be found for this business. The Google listing
> is titled "AC Repair Services In Dubai 0502055426" and the old website used "AC Repair Service Dubai", which are
> both keyword phrases rather than company names. The site uses **"AC Repair Services Dubai"** as a working brand.
> Please supply the registered company name (as on the trade licence) before launch and update `name` in
> `lib/site-config.ts`, then update the wordmark in `components/brand/Logo.tsx`.

## Stack
Next.js 16 (App Router) + TypeScript, Tailwind CSS 4, Framer Motion, lucide-react.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Deploy to Vercel as-is. For a pure static host (`output: "export"`) remove `app/api/contact` first. The WhatsApp
booking button needs no server and keeps working.

## Where things live
- `lib/site-config.ts`: all company data (name, phone, address, hours, rating, services, areas).
- `components/brand/`: `LogoMark` (icon only, used in the mobile header) and `Logo` (mark + wordmark). `app/icon.svg` is the favicon.
- `content/research.md`: research findings with sources. `content/copy.md`: page copy.
- `app/api/contact/route.ts`: booking endpoint. **TODO:** add `RESEND_API_KEY` (or SMTP) plus `BOOKING_TO_EMAIL` to send emails. Until then it only logs.
- SEO: per-page metadata, OpenGraph image (`app/opengraph-image.tsx`), `HVACBusiness` JSON-LD (`components/seo/JsonLd.tsx`), `sitemap.xml`, `robots.txt`.

## Images and sources
No image published by the business itself could be retrieved:
- The Google Maps photos, video thumbnails and promo banner load through JavaScript and could not be collected.
- The archived site (web.archive.org, snapshot 2025-10-08) contained only stock and template images. They were rejected:
  three stock testimonial headshots, and a hero photo carrying another site's "Best Calgary" watermark. The logo was not archived.
- No social media profile for this number was found.

Every photo slot therefore renders a clearly labelled `Placeholder` component (`components/ui/Placeholder.tsx`).
`/public/images/` is empty. Put real photos there and swap each `Placeholder` for `next/image`.

## Still placeholder / needs client material
| Item | Where |
|---|---|
| Registered company name | `lib/site-config.ts` → `name`, `components/brand/Logo.tsx` |
| Logo (current one is a designed SVG, no original found) | `components/brand/` |
| Hero photo: technician repairing a split unit | `app/page.tsx` hero |
| "Why choose us" photo | `app/page.tsx` |
| Work gallery: 4 photos (before/after if available) | `app/page.tsx` gallery |
| One photo per service (6) | `app/services/page.tsx` |
| Google review text (3 reviews, shown only with the client's permission) | `components/sections/RatingBlock.tsx` currently shows the rating only |
| Confirm rating 4.8 / 50 reviews, 24h hours and address from the live Google profile | `lib/site-config.ts` |
| Public email address | `lib/site-config.ts` → `email` (mailto hidden while `null`) |
| Map pin coordinates | `lib/site-config.ts` → `geo` (approximate) |
| Production domain | `lib/site-config.ts` → `url` |
| Email delivery key for booking form | `app/api/contact/route.ts` |
| Service turnaround times (written as typical ranges, please confirm) | `lib/site-config.ts` → `services` |
| Prices: none shown, as none were published | — |
