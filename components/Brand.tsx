/**
 * The MediRx wordmark: lowercase, "medi" in the brand orange and "rx" in the
 * text colour, set in a heavy geometric sans.
 *
 * Set as live text rather than an image so it stays sharp at any size, flips
 * with the theme (the "rx" reads black on the light page and near-white on the
 * dark one), is selectable, and costs no extra request. If the real logo file
 * arrives later, only this file changes.
 */

export function Wordmark({
  size = 26,
  onDark = false,
  className = "",
}: {
  size?: number;
  /** Over the dark hero band, where `--ink` would be near-black on near-black. */
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`font-brand inline-block select-none font-bold leading-none tracking-[-0.035em] lowercase ${className}`}
      style={{ fontSize: size }}
    >
      <span className={onDark ? "text-night-accent" : "text-accent"}>medi</span>
      <span className={onDark ? "text-night-ink" : "text-ink"}>rx</span>
    </span>
  );
}

/**
 * The square mark, for places that need a logo in a small fixed box -- a
 * favicon, an app tile, a social preview. The wordmark is the primary lockup;
 * this is the fallback for when its proportions will not fit.
 */
export function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <path
        d="M11 23V10.5h4.6a3.4 3.4 0 0 1 .6 6.75L19.4 23"
        stroke="var(--accent-ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 17.2h4.4"
        stroke="var(--accent-ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="m17.4 19.6 5 5m0-5-5 5"
        stroke="var(--accent-ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
