"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Brand";
import { ThemeToggle } from "./ThemeToggle";
import { CONTAINER } from "./ui";

// Ordered the way a stranger reads the site: what it does, then what it is
// made of, then the detail their IT team will want.
const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/platform", label: "Platform" },
  { href: "/security", label: "Security" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* The homepage opens on a dark band, so the bar rides on it — transparent
     and light-on-dark — until the reader scrolls past it and the warm page
     takes over. Every other page gets the solid bar from the first pixel. */
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (pathname !== "/") return;

    const read = () => setAtTop(window.scrollY < 140);
    // The first read goes through a frame rather than running in the effect
    // body: a reload part-way down the page restores the scroll position after
    // mount, so reading it immediately would report the wrong answer anyway.
    const frame = requestAnimationFrame(read);
    window.addEventListener("scroll", read, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", read);
    };
  }, [pathname]);

  // Derived, not stored: every other page is solid from the first pixel.
  const dark = pathname === "/" && atTop && !open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        dark
          ? "border-white/10 bg-[color-mix(in_srgb,var(--night)_78%,transparent)] backdrop-blur-md"
          : "border-line bg-ground/85 backdrop-blur-md"
      }`}
    >
      <div className={`${CONTAINER} flex h-16 items-center gap-4`}>
        <Link
          href="/"
          className="mr-auto"
          aria-label="MediRx home"
          onClick={() => setOpen(false)}
        >
          <Wordmark onDark={dark} />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                  active
                    ? dark
                      ? "bg-white/10 text-night-accent"
                      : "bg-accent-tint text-accent"
                    : dark
                      ? "text-night-ink-2 hover:bg-white/10 hover:text-night-ink"
                      : "text-ink-2 hover:bg-surface hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle />
          <Link
            href="/contact#demo"
            className={`rounded-lg px-4 py-2.5 text-[14px] font-medium transition-opacity hover:opacity-90 ${
              dark
                ? "bg-night-accent text-[#1b1005]"
                : "bg-accent text-accent-ink"
            }`}
          >
            Book a demo
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className={`grid size-9 place-items-center rounded-lg border ${
              dark ? "border-white/15 text-night-ink-2" : "border-line text-ink-2"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface px-5 py-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                pathname === item.href ? "text-accent" : "text-ink-2"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#demo"
            onClick={() => setOpen(false)}
            className="mt-2 mb-2 block rounded-lg bg-accent px-3 py-2.5 text-center text-[15px] font-medium text-accent-ink"
          >
            Book a demo
          </Link>
        </nav>
      )}
    </header>
  );
}
