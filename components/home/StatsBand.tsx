"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: setValue });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

export function StatsBand() {
  const stats = [
    { value: <CountUp to={siteConfig.rating.value} decimals={1} />, label: "Google rating" },
    { value: <CountUp to={siteConfig.rating.count} />, label: "Google reviews" },
    { value: "24/7", label: "Availability" },
    { value: "Same-day", label: "Service across Dubai" },
  ];
  return (
    <section aria-label="Key facts" className="bg-brand-deep py-12 text-white">
      <dl className="container-x grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse border-l-2 border-chill/60 pl-4">
            <dt className="mt-1 text-sm text-white/70">{s.label}</dt>
            <dd className="font-display text-3xl font-extrabold tabular-nums md:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
