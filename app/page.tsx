import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, Phone, Star } from "lucide-react";
import { SymptomSelector } from "@/components/home/SymptomSelector";
import { StatsBand } from "@/components/home/StatsBand";
import { Steps } from "@/components/sections/Steps";
import { RatingBlock } from "@/components/sections/RatingBlock";
import { Coverage } from "@/components/sections/Coverage";
import { CtaBand } from "@/components/sections/CtaBand";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon, serviceIcons } from "@/components/icons";
import { reasons, services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "AC Repair Dubai | 24 Hour AC Repair & Servicing | Cool Again, Today" },
  description:
    "24 hour AC repair in Dubai. AC not cooling, leaking or noisy? Same-day repair, AC servicing, gas refill, duct cleaning and installation from Sheikh Zayed Road. Rated 4.8 on Google.",
  alternates: { canonical: "/" },
};

const gallery = [
  { src: "/images/technician-inside-ac-unit.jpg", alt: "Technician working inside a large air conditioning unit" },
  { src: "/images/outdoor-split-unit-installation.jpg", alt: "Technician tightening AC refrigerant pipe fittings with wrenches" },
  { src: "/images/condenser-coil-cleaning.jpg", alt: "Technician pressure-washing AC condenser coils" },
  { src: "/images/gas-pressure-gauges-refill.jpg", alt: "Refrigerant pressure gauges connected during an AC gas check" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-deep pb-32 pt-32 text-white md:pb-40 md:pt-44">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(56,182,232,0.45),transparent_55%),linear-gradient(160deg,#084B7D_0%,#0A6FB8_60%,#084B7D_100%)]" />
        <svg className="absolute inset-0 -z-10 h-full w-full opacity-[0.08]" aria-hidden="true">
          <defs>
            <pattern id="hero-flow" width="160" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30 Q40 5 80 30 T160 30" stroke="#fff" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-flow)" />
        </svg>
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-chill ring-1 ring-white/15">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              AC repair experts in Dubai
            </p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
              Cool Again,
              <br />
              <span className="text-chill">Today.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              {siteConfig.subline}. Tell us what your AC is doing and a technician gets back to you on WhatsApp, day or night.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn-whatsapp h-14 px-7 text-base">
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a href={siteConfig.phone.href} className="btn-action h-14 px-7 text-base">
                <Phone className="h-5 w-5" aria-hidden="true" /> Call Now {siteConfig.phone.display}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
              <li className="inline-flex items-center gap-2">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-success text-success" />
                  ))}
                </span>
                <strong className="text-white">{siteConfig.rating.value}</strong> from {siteConfig.rating.count} Google reviews
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-success/20 px-3 py-1 font-semibold text-white ring-1 ring-success/40">
                <Clock className="h-4 w-4" aria-hidden="true" /> Open 24 hours
              </li>
            </ul>
          </div>
          <div className="hidden md:col-span-5 md:block">
            <div className="relative">
              <Photo src="/images/technician-checking-ac-pressure.jpg" alt="AC technician checking refrigerant pressure on an outdoor unit" className="aspect-[4/5] w-full shadow-2xl" sizes="(min-width: 768px) 40vw, 1px" priority />
              <div className="absolute -left-8 bottom-10 rounded-2xl bg-white p-4 text-ink shadow-card">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate">Symptoms we fix</p>
                <p className="mt-1 font-display font-bold">Not cooling · Leaking · Noise · Smell</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SymptomSelector />
      <div className="mt-12">
        <StatsBand />
      </div>

      {/* Services */}
      <section aria-labelledby="services-title" className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="eyebrow">Services</p>
              <h2 id="services-title" className="h2 mt-2">AC repair and servicing in Dubai</h2>
            </div>
            <p className="text-slate md:col-span-5 md:col-start-8">
              From a unit that will not cool to a full annual maintenance plan. Fixed price quoted before any work starts.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Reveal as="li" key={s.id} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/services#${s.id}`}
                    className="group flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 flex-1 text-slate">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Steps />

      {/* Why choose us */}
      <section aria-labelledby="why-title" className="py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <Photo src="/images/technician-repairing-ac-unit.jpg" alt="Technician testing the wiring of an air conditioning unit" className="aspect-[4/5] w-full" />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-title" className="h2 mt-2">24 hour AC repair Dubai can count on</h2>
            <ul className="mt-8 space-y-5">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r.title} delay={i * 0.06} className="flex gap-4">
                  <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-success" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{r.title}</h3>
                    <p className="mt-1 text-slate">{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Work gallery */}
      <section aria-labelledby="work-title" className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <p className="eyebrow">Recent work</p>
          <h2 id="work-title" className="h2 mt-2">AC servicing in Dubai homes and offices</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {gallery.map((g, i) => (
              <Photo
                key={g.src}
                src={g.src}
                alt={g.alt}
                sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className={i === 0 ? "col-span-2 aspect-square md:row-span-2" : i === 3 ? "col-span-2 aspect-[2/1]" : "aspect-square"}
              />
            ))}
          </div>
        </div>
      </section>

      <RatingBlock />
      <Coverage />
      <CtaBand />
    </>
  );
}
