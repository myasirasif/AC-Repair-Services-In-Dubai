import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/lib/site-config";

export function Steps({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const Item = headingLevel === 2 ? "h3" : "h4";
  return (
    <section aria-labelledby="steps-title" className="bg-mist py-16 md:py-24">
      <div className="container-x">
        <div className="max-w-xl">
          <p className="eyebrow">How it works</p>
          <H id="steps-title" className="h2 mt-2">From WhatsApp message to cold air</H>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="relative rounded-2xl bg-white p-6 shadow-soft">
              <span className="font-display text-5xl font-extrabold text-chill/40" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Item className="mt-2 font-display text-lg font-bold text-ink">{s.title}</Item>
              <p className="mt-2 text-sm text-slate">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
