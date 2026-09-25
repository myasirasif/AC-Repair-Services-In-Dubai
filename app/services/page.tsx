import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Timer } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { serviceIcons } from "@/components/icons";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AC Services Dubai | Repair, Servicing, Gas Refill, Duct Cleaning",
  description:
    "AC repair, AC servicing, AC gas refill, AC duct cleaning, installation and annual maintenance contracts across Dubai. Open 24 hours, fixed price before work starts.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="AC services in Dubai, 24 hours a day"
        text="Repair, servicing, gas refilling, duct cleaning, installation and maintenance contracts for apartments, villas and offices."
      >
        <nav aria-label="Services on this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20">
                  {s.slug}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="py-8 md:py-16">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          const flip = i % 2 === 1;
          return (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-28 py-10 md:py-14">
              <div className="container-x grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
                <Reveal className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
                  <Placeholder label={`${s.title} in progress`} className="aspect-[5/4] w-full" />
                </Reveal>
                <div className={`md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 id={`${s.id}-title`} className="h2 mt-4">{s.title}</h2>
                  <p className="mt-3 text-lg text-slate">{s.summary}</p>
                  <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-ink">What is covered</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {s.covers.map((c) => (
                      <li key={c} className="flex gap-2 text-slate">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <p className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink">
                      <Timer className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      Typical turnaround: {s.turnaround}
                    </p>
                    <Link href={`/contact?problem=${encodeURIComponent(s.problem)}#booking`} className="btn-action h-12 px-6">
                      Book this service <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand title="Need an AC technician now?" />
    </>
  );
}
