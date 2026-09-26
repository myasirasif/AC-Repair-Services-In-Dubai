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
- The Google Maps photos and promo banner load through JavaScript and could not be collected.
- The archived site (web.archive.org, snapshot 2025-10-08) had only stock and template images. They were rejected
  (stock headshots, and a photo with another site's "Best Calgary" watermark). The logo was not archived.
- No social media profile for this number was found.

**Current photos are free-licence stock images from Wikimedia Commons, not this business's own work.**
They are generic AC/HVAC work shots (several show U.S. Air Force technicians). Replace them with the client's
real job photos before launch; keep the same file names in `/public/images/` and nothing else needs to change.
All photos are public domain, so no on-site credit is required.

| File | Author | Licence | Source |
|---|---|---|---|
| `technician-checking-ac-pressure.jpg` | U.S. Air Force AFCENT by Airman 1st Class Derrick Bole | Public domain | https://commons.wikimedia.org/wiki/File:379th_ECES_HVAC_technicians_combat_rising_temperatures_(8502257).jpg |
| `gas-pressure-gauges-refill.jpg` | U.S. Air Force AFCENT by Airman 1st Class Derrick Bole | Public domain | https://commons.wikimedia.org/wiki/File:379th_ECES_HVAC_technicians_combat_rising_temperatures_(8502255).jpg |
| `technician-repairing-ac-unit.jpg` | U.S. Air Force photo by Airman 1st Class Skylar Ellis | Public domain | https://commons.wikimedia.org/wiki/File:HVAC_Technicians_Power_Mission_Success_(8850029).jpg |
| `condenser-coil-cleaning.jpg` | TSgt Joselito Aribuabo | Public domain | https://commons.wikimedia.org/wiki/File:U.S._Air_Force_Senior_Airman_Jacob_Lagodzinski,_a_heating,_ventilation_and_air_conditioning_technician_with_the_379th_Expeditionary_Civil_Engineer_Squadron,_uses_a_high_pressure_water_spray_to_clean_an_air_131022-F-EI671-006.jpg |
| `duct-insulation-work.jpg` | Senior Airman Brigitte Brantley | Public domain | https://commons.wikimedia.org/wiki/File:New_air_conditioner_120730-F-GO396-668.jpg |
| `outdoor-split-unit-installation.jpg` | U.S. Air Force | Public domain | https://commons.wikimedia.org/wiki/File:379_ELRS_vehicle_maintenance_introduces_innovative_nitrogen_gas_testing_method_for_air_conditioning_systems_(9469863).jpg |
| `rooftop-ac-units-maintenance.jpg` | P199 | Public domain | https://commons.wikimedia.org/wiki/File:Rooftop_Packaged_Units.JPG |
| `technician-inside-ac-unit.jpg` | Senior Airman Brigitte Brantley | Public domain | https://commons.wikimedia.org/wiki/File:New_air_conditioner_120730-F-GO396-660.jpg |

## Still placeholder / needs client material
| Item | Where |
|---|---|
| Registered company name | `lib/site-config.ts` → `name`, `components/brand/Logo.tsx` |
| Logo (current one is a designed SVG, no original found) | `components/brand/` |
| All 8 photos are stock (see above). Replace with real job photos, before/after if available | `public/images/` |
| Google review text (3 reviews, shown only with the client's permission) | `components/sections/RatingBlock.tsx` currently shows the rating only |
| Confirm rating 4.8 / 50 reviews, 24h hours and address from the live Google profile | `lib/site-config.ts` |
| Public email address | `lib/site-config.ts` → `email` (mailto hidden while `null`) |
| Map pin coordinates | `lib/site-config.ts` → `geo` (approximate) |
| Production domain | `lib/site-config.ts` → `url` |
| Email delivery key for booking form | `app/api/contact/route.ts` |
| Service turnaround times (written as typical ranges, please confirm) | `lib/site-config.ts` → `services` |
| Prices: none shown, as none were published | — |
