import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/contact/BookingForm";
import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Booking | 24 Hour AC Repair Dubai",
  description:
    "Book an AC technician in Dubai. Call or WhatsApp 050 205 5426, open 24 hours. Sheikh Zayed Road, Dubai.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact and booking"
        title="Book an AC technician"
        text="Tell us what the AC is doing. We are open 24 hours and reply fastest on WhatsApp."
      />

      <section id="booking" className="scroll-mt-24 bg-mist py-12 md:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-[640px] rounded-3xl bg-white shadow-card" />}>
              <BookingForm />
            </Suspense>
          </div>

          <aside aria-label="Contact details" className="space-y-4 lg:col-span-5">
            <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn-whatsapp h-16 w-full text-lg">
              <WhatsAppIcon className="h-6 w-6" /> Chat on WhatsApp
            </a>

            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                <Clock className="h-4 w-4" aria-hidden="true" /> Open 24 hours
              </p>
              <address className="mt-5 space-y-4 not-italic">
                <p className="flex gap-3 text-slate">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  {siteConfig.address.full}
                </p>
                <a href={siteConfig.phone.href} className="flex gap-3 font-display text-xl font-bold text-ink hover:text-brand-blue">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  {siteConfig.phone.international}
                </a>
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="flex gap-3 text-slate hover:text-brand-blue">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                )}
              </address>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
              <iframe
                title={`Map showing ${siteConfig.address.full}`}
                src={siteConfig.mapEmbed}
                className="aspect-[4/3] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
