import { MapPin } from "lucide-react";
import { areas } from "@/lib/site-config";

export function Coverage({ title = "AC repair across Dubai" }: { title?: string }) {
  return (
    <section aria-labelledby="coverage-title" className="py-16 md:py-20">
      <div className="container-x grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Service area</p>
          <h2 id="coverage-title" className="h2 mt-2">{title}</h2>
          <p className="mt-3 text-slate">
            Based on Sheikh Zayed Road, with technicians covering homes and offices across the city.
          </p>
        </div>
        <ul className="flex flex-wrap content-start gap-2.5 md:col-span-8">
          {areas.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/15 bg-mist px-4 py-2 text-sm font-medium text-ink"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
