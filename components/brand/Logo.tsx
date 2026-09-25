import { LogoMark } from "./LogoMark";

type Props = { tone?: "dark" | "light"; className?: string };

export function Logo({ tone = "dark", className = "" }: Props) {
  const main = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-chill" : "text-brand-blue";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={40} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[17px] font-extrabold tracking-tight ${main}`}>AC Repair Services</span>
        <span className={`font-display text-[11px] font-bold uppercase tracking-[0.28em] ${sub}`}>Dubai</span>
      </span>
    </span>
  );
}
