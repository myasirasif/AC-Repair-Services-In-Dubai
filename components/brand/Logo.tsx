import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

type Props = { tone?: "dark" | "light"; className?: string };

// Client logo. The wordmark is navy, so on dark backgrounds it sits on a white pill.
export function Logo({ tone = "dark", className = "" }: Props) {
  return (
    <span className={`inline-flex items-center ${tone === "light" ? "rounded-2xl bg-white px-3 py-1.5 shadow-sm" : ""} ${className}`}>
      <Image
        src="/images/brand-logo.png"
        alt={siteConfig.name}
        width={968}
        height={391}
        priority
        className="h-11 w-auto md:h-14"
      />
    </span>
  );
}
