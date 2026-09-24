import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The page's one horizontal grid.
 *
 * The header, the footer, the hero and every section share this, so the logo
 * lines up with the headline beneath it and the last nav item lines up with the
 * right edge of the content. Declared once because it drifted the moment it was
 * written twice -- the hero carried its own wider max-width and nothing in the
 * bar above it agreed with anything below it.
 */
export const CONTAINER = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";

/**
 * Vertical rhythm. Every section used to share one padding, which read as a
 * single unbroken column with air where the page did not need it. "tight" is
 * for a block that belongs with the one above it; "roomy" marks a real break.
 */
export function Section({
  children,
  className = "",
  id,
  space = "normal",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  space?: "tight" | "normal" | "roomy";
}) {
  const pad =
    space === "tight"
      ? "py-12 sm:py-14"
      : space === "roomy"
        ? "py-20 sm:py-28"
        : "py-16 sm:py-20";

  return (
    <section id={id} className={`${CONTAINER} ${pad} ${className}`}>
      {children}
    </section>
  );
}

/**
 * Eyebrow + heading + lede as one unit, so the intro never drifts away from
 * the content it introduces.
 */
export function SectionHead({
  eyebrow,
  title,
  lede,
  className = "",
  align = "left",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${align === "center" ? "mx-auto items-center text-center" : ""} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <H2 className={align === "center" ? "mx-auto" : ""}>{title}</H2>
      {lede ? <Lede>{lede}</Lede> : null}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
      {children}
    </p>
  );
}

export function H2({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-balance text-[clamp(25px,3.4vw,34px)] font-semibold leading-[1.15] tracking-[-0.022em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[62ch] text-[17px] leading-relaxed text-ink-2">
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgb(36_28_25/0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

export function CTA({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold transition-all";
  // The primary carries a tinted shadow so it reads as the one thing to press;
  // the secondary stays quiet next to it.
  const styles =
    variant === "solid"
      ? "bg-accent text-accent-ink shadow-[0_10px_24px_-10px_var(--accent)] hover:-translate-y-px hover:shadow-[0_14px_28px_-10px_var(--accent)]"
      : "border border-line-strong bg-surface/70 text-ink hover:border-accent/50 hover:bg-surface";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/** A small tick used in every feature list on the site. */
export function Tick() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-[5px] shrink-0"
    >
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-2">
          <Tick />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
