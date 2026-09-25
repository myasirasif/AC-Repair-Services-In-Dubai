type Props = { size?: number; className?: string; title?: string };

// Snowflake inside a rounded square. Two-tone, legible at 24px.
export function LogoMark({ size = 40, className, title }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="48" height="48" rx="12" fill="#0A6FB8" />
      <path d="M0 34 Q24 26 48 34 V36 Q48 48 36 48 H12 Q0 48 0 36Z" fill="#38B6E8" opacity=".55" />
      <g stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M24 10v28M11.9 17l24.2 14M11.9 31l24.2-14" />
        <path d="M20 12.5l4 3.5 4-3.5M20 35.5l4-3.5 4 3.5" />
      </g>
    </svg>
  );
}
