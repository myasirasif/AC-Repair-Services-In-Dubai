import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Steps } from "@/components/sections/Steps";
import { Coverage } from "@/components/sections/Coverage";
import { CtaBand } from "@/components/sections/CtaBand";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us | AC Repair Sheikh Zayed Road, Dubai",
  description:
    "A Dubai AC repair team working 24/7 from Sheikh Zayed Road. AC repair, servicing, installation and maintenance contracts for homes and offices.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Dubai AC repair team that picks up at 3am"
        text={`We work 24/7 from ${siteConfig.address.street}, fixing, servicing and installing air conditioning for apartments, villas and offices across Dubai.`}
      />

      <section aria-labelledby="what-title" className="py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">What we do</p>
            <h2 id="what-title" className="h2 mt-2">AC repair, servicing and installation</h2>
          </div>
          <div className="space-y-5 text-lg text-slate md:col-span-7">
            <p>
              Your air conditioner usually tells you when it needs attention: humidity indoors, a DEWA bill that keeps
              climbing, weak airflow, strange noises or water dripping from the unit. When that happens, message us on
              WhatsApp and we will get it cooling properly again.
            </p>
            <p>
              We quote a fixed price before any work starts, and you pay only once the AC is working.
            </p>
            <ul className="grid gap-2 pt-2 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.id} className="flex gap-2 text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                  {s.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Steps />
      <Coverage title="Where we work" />
      <CtaBand />
    </>
  );
}
