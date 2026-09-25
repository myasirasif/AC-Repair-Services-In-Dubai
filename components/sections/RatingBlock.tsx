import { ExternalLink, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Honest rating block. Review text could not be retrieved, so no quotes are shown (see README).
export function RatingBlock() {
  return (
    <section aria-labelledby="reviews-title" className="py-16 md:py-24">
      <div className="container-x">
        <div className="grid items-center gap-8 rounded-[28px] border border-ink/10 bg-gradient-to-br from-white to-mist p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Google reviews</p>
            <h2 id="reviews-title" className="h2 mt-2">What Dubai customers say</h2>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:col-span-7 md:justify-end">
            <div>
              <p className="font-display text-6xl font-extrabold text-ink">{siteConfig.rating.value}</p>
              <p className="mt-1 flex gap-0.5" aria-label={`${siteConfig.rating.value} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-success text-success" aria-hidden="true" />
                ))}
              </p>
            </div>
            <div className="max-w-xs">
              <p className="text-slate">
                Rated <strong className="text-ink">{siteConfig.rating.value} out of 5</strong> from{" "}
                <strong className="text-ink">{siteConfig.rating.count} Google reviews</strong>.
              </p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-blue hover:text-brand-deep"
              >
                Read our reviews on Google <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
