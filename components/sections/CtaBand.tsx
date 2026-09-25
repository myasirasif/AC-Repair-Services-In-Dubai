import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function CtaBand({ title = "AC not cooling? Call now, we are open." }: { title?: string }) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-brand-blue py-16 text-white md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-chill/40 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-chill">{siteConfig.hours.label}</p>
          <h2 id="cta-title" className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5">
          <a
            href={siteConfig.phone.href}
            className="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 text-ink transition hover:shadow-xl"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-slate">Tap to call</span>
              <span className="font-display text-2xl font-extrabold md:text-3xl">{siteConfig.phone.display}</span>
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-action text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
          </a>
          <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn-whatsapp h-14 text-base">
            <WhatsAppIcon /> Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
