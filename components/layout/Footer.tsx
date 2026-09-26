import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand";
import { WhatsAppIcon } from "@/components/icons";
import { nav, services, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-white/75 md:pb-28">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.descriptor}. 24 hour AC repair, servicing, gas refill, duct cleaning and installation.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="hover:text-chill">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-chill">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic md:col-span-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-chill" aria-hidden="true" />
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-chill">
                {siteConfig.address.full}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-chill" aria-hidden="true" />
              <a href={siteConfig.phone.href} className="font-semibold text-white hover:text-chill">
                {siteConfig.phone.international}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-chill" />
              <a href={siteConfig.whatsapp.href} className="hover:text-chill">
                WhatsApp us
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-chill" aria-hidden="true" />
              {siteConfig.hours.label}
            </li>
          </ul>
        </address>
      </div>
      {/* pb-28 on the footer leaves room below this row for the fixed WhatsApp button / mobile bar */}
      <div className="container-x mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-start md:justify-between md:pr-24">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p className="shrink-0 text-sm text-white/70">
          Design and developed with{" "}
          <span className="text-action" aria-label="love">
            ♥
          </span>{" "}
          by{" "}
          <a href="https://yasirafridi.dev/" target="_blank" rel="noopener" className="font-semibold text-white hover:text-chill">
            Yasir
          </a>
        </p>
      </div>
    </footer>
  );
}
