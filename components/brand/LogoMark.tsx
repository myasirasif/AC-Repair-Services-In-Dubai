import Image from "next/image";

type Props = { size?: number; className?: string; title?: string };

// Icon-only version of the client logo (mobile header). Favicon files live in app/icon.png and app/apple-icon.png.
export function LogoMark({ size = 40, className = "", title }: Props) {
  return (
    <Image
      src="/images/brand-mark.png"
      alt={title ?? ""}
      width={size}
      height={size}
      priority
      className={`rounded-xl bg-white p-0.5 ${className}`}
    />
  );
}
