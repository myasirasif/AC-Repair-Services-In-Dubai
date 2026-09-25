import Link from "next/link";
import { ArrowUpRight, Droplets, Ear, Power, Receipt, Thermometer, Wind } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { symptoms } from "@/lib/site-config";

const icons = [Thermometer, Droplets, Ear, Wind, Power, Receipt];

export function SymptomSelector() {
  return (
    <section id="symptoms" aria-labelledby="symptoms-title" className="relative z-10 -mt-20 pb-8 md:-mt-24">
      <div className="container-x">
        <div className="rounded-[28px] bg-white p-6 shadow-card md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <p className="eyebrow">Not cooling? Water leaking? Making noise?</p>
              <h2 id="symptoms-title" className="h2 mt-2">What is your AC doing?</h2>
            </div>
            <p className="text-slate md:col-span-6 md:col-start-7">
              Pick the problem and we will prefill your booking. Same-day AC repair in Dubai, 24 hours a day.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {symptoms.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal as="li" key={s.label} delay={i * 0.05}>
                  <Link
                    href={`/contact?problem=${encodeURIComponent(s.label)}#booking`}
                    className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-mist/60 p-4 transition hover:-translate-y-1 hover:border-brand-blue hover:bg-white hover:shadow-card"
                  >
                    <span className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-slate/50 group-hover:text-action" aria-hidden="true" />
                    </span>
                    <span className="mt-4 font-display font-bold text-ink">{s.label}</span>
                    <span className="mt-1 text-xs text-slate">{s.hint}</span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
