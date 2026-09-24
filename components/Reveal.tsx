"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades a block up as it enters view.
 *
 * Starts visible and is hidden only once the observer is confirmed to work, so
 * a visitor with JavaScript off, or a crawler, still gets the whole page --
 * nothing here is allowed to hide content it cannot later reveal.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    // Already on screen at mount: leave it alone rather than flashing it out
    // and back in.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={state === "shown" ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className} ${
        state === "hidden"
          ? "translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      } transition-[opacity,transform] duration-700 ease-out`}
    >
      {children}
    </div>
  );
}
