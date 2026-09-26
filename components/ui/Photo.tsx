import Image from "next/image";

type Props = { src: string; alt: string; className?: string; sizes?: string; priority?: boolean };

// Rounded photo that fills its box. Sources and licences are listed in README.
export function Photo({ src, alt, className = "", sizes = "(min-width: 768px) 40vw, 100vw", priority }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-mist ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
