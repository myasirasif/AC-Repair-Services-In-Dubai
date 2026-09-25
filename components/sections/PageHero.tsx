import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; text: string; children?: ReactNode };

export function PageHero({ eyebrow, title, text, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-deep via-brand-blue to-brand-deep pb-16 pt-32 text-white md:pb-20 md:pt-44">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-chill/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-chill">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{text}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
