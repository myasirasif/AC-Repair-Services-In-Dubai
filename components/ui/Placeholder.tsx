import { Camera } from "lucide-react";

// Marked placeholder for photos the client still has to supply. Listed in README.
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`relative flex items-end overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand-blue to-chill ${className}`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id="flow" width="80" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q20 5 40 20 T80 20" stroke="#fff" strokeWidth="2" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flow)" />
      </svg>
      <span className="relative m-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
        <Camera className="h-3.5 w-3.5" aria-hidden="true" />
        Placeholder: {label}
      </span>
    </div>
  );
}
