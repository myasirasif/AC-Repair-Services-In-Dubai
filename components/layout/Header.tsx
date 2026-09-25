"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock, Menu, Phone, X } from "lucide-react";
import { Logo, LogoMark } from "@/components/brand";
import { WhatsAppIcon } from "@/components/icons";
import { nav, siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-brand-deep text-white md:block">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-chill" aria-hidden="true" />
            AC repair, servicing and installation across Dubai
          </span>
          <a href={siteConfig.phone.href} className="inline-flex items-center gap-2 font-semibold hover:text-chill">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.hours.short} · {siteConfig.phone.display}
          </a>
        </div>
      </div>

      <div
        className={`transition-colors duration-300 ${
          overHero ? "bg-transparent" : "border-b border-ink/5 bg-white/85 shadow-sm backdrop-blur-lg"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" onClick={() => setOpen(false)} aria-label={`${siteConfig.name} home`} className="shrink-0">
            <span className="md:hidden">
              <LogoMark size={36} />
            </span>
            <span className="hidden md:inline-flex">
              <Logo tone={overHero ? "light" : "dark"} />
            </span>
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                        overHero
                          ? active ? "bg-white/15 text-white" : "text-white/85 hover:text-white"
                          : active ? "bg-mist text-brand-blue" : "text-slate hover:text-brand-blue"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phone.href}
              className={`hidden items-center gap-2 font-display text-sm font-bold lg:inline-flex ${
                overHero ? "text-white" : "text-ink"
              }`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone.display}
            </a>
            <Link href="/contact" className="btn-action h-10 px-4 text-sm md:h-11 md:px-5">
              Book Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`grid h-10 w-10 place-items-center rounded-full md:hidden ${
                overHero ? "text-white" : "text-ink"
              }`}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-brand-deep text-white md:hidden"
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="container-x flex h-16 items-center justify-between">
              <Logo tone="light" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x mt-6 flex-1">
              <ul className="space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-4 font-display text-3xl font-bold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 text-chill" aria-hidden="true" />
                {siteConfig.hours.label}
              </p>
            </nav>
            <div className="container-x grid grid-cols-2 gap-3 pb-8 pt-4">
              <a href={siteConfig.phone.href} className="btn-action h-14 text-base">
                <Phone className="h-5 w-5" aria-hidden="true" /> Call
              </a>
              <a href={siteConfig.whatsapp.href} className="btn-whatsapp h-14 text-base">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
