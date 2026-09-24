"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AppScreen } from "./AppScreen";
import { Icon } from "./Icons";
import type { Part } from "@/lib/landing";

/** How long each app holds before the next one takes over. */
const DWELL_MS = 6500;

/**
 * "Three apps, for three kinds of people".
 *
 * Three tabs across the top, then one wide panel for whichever is selected.
 * The active tab carries a bar that fills over the dwell time, so the handover
 * is something the reader can see coming rather than a card changing under
 * them for no visible reason.
 *
 * It advances on its own until the visitor touches it, then stops for good --
 * and the bar goes with it, because a progress indicator for something that is
 * no longer going to happen is a lie.
 */
export function AppsShowcase({ parts }: { parts: Part[] }) {
  const [active, setActive] = useState(0);
  /** Hovering pauses; picking a tab stops for good. */
  const [paused, setPaused] = useState(false);
  const [locked, setLocked] = useState(false);
  const pausedRef = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  /**
   * Driven by a frame loop rather than setInterval, so that pausing stops the
   * clock and the bar together. With an interval the two drifted apart: the
   * bar froze under the cursor while the timer kept counting, and the tab
   * changed with the bar showing it half full.
   */
  useEffect(() => {
    if (locked) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let last = performance.now();
    let elapsed = 0;

    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      if (!pausedRef.current) {
        elapsed += delta;
        if (elapsed >= DWELL_MS) {
          elapsed = 0;
          setActive((i) => (i + 1) % parts.length);
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [parts.length, locked]);

  /**
   * Pointer enter/leave are bound natively rather than through React's
   * onMouseEnter. React derives those from delegated mouseover/mouseout at the
   * root, and in testing the handler never fired -- the carousel kept running
   * under the cursor. A listener on the element itself has no such indirection.
   */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onEnter = () => {
      pausedRef.current = true;
      setPaused(true);
    };
    const onLeave = () => {
      pausedRef.current = false;
      setPaused(false);
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  function choose(index: number) {
    setLocked(true);
    setActive(index);
  }

  const part = parts[active];

  return (
    <div ref={rootRef} style={{ ["--part" as string]: part.hue }}>
      {/* ---- the three tabs ---------------------------------------- */}
      <div
        className="grid gap-4 md:grid-cols-3"
        role="tablist"
        aria-label="The three MediRx apps"
      >
        {parts.map((p, i) => {
          const on = i === active;
          return (
            <button
              key={p.slug}
              type="button"
              role="tab"
              id={`app-tab-${p.slug}`}
              aria-selected={on}
              aria-controls="app-panel"
              onClick={() => choose(i)}
              style={{ ["--part" as string]: p.hue }}
              className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${
                on
                  ? "border-[var(--part)] bg-[var(--part)] text-white shadow-[0_16px_36px_-22px_var(--part)]"
                  : "border-line bg-surface hover:-translate-y-0.5 hover:border-line-strong"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl transition-colors ${
                    on
                      ? "bg-white/20 text-white"
                      : "bg-[var(--part)]/10 text-[var(--part)]"
                  }`}
                >
                  <Icon name={p.icon} size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15.5px] font-semibold tracking-[-0.015em]">
                    {p.name}
                  </span>
                  <span
                    className={`mt-0.5 block text-[13px] leading-snug ${
                      on ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {p.role}
                  </span>
                </span>
              </div>

              {/* Keyed on `active` so React remounts it and the fill restarts
                  from zero each time the selection moves. */}
              {on && !locked && (
                <span
                  className="absolute inset-x-0 bottom-0 h-1 bg-white/20"
                  aria-hidden="true"
                >
                  <span
                    key={active}
                    className="tab-progress block h-full bg-white"
                    style={{
                      ["--dwell" as string]: `${DWELL_MS}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ---- the selected app -------------------------------------- */}
      <div
        id="app-panel"
        role="tabpanel"
        aria-labelledby={`app-tab-${part.slug}`}
        className="mt-5 overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-[0_26px_60px_-40px_rgb(36_28_25/0.45)] sm:p-8 lg:p-10"
      >
        <div
          key={part.slug}
          className="showcase-fade grid min-w-0 grid-cols-[minmax(0,1fr)] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12"
        >
          <div className="flex min-w-0 flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--part)]/25 bg-[var(--part)]/8 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--part)]">
              <Icon name={part.icon} size={13} />
              {part.tag}
            </span>

            <h3 className="mt-4 max-w-[17ch] text-balance text-[clamp(24px,2.8vw,32px)] font-semibold leading-[1.1] tracking-[-0.025em]">
              {part.pitch}
            </h3>

            <ul className="mt-6 flex flex-col gap-3.5">
              {part.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-3 text-[15px] leading-relaxed text-ink-2"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--part)] text-white">
                    <Icon name="check" size={11} />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>

            <Link
              href={`/platform#${part.slug}`}
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-night px-5 py-3 text-[14.5px] font-semibold text-night-ink transition-transform hover:-translate-y-px"
            >
              See what it does
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          {/* The screen sits on a block of its app's colour, so the panel
              carries the same hue as the tab that opened it. */}
          <div className="relative min-w-0 overflow-hidden rounded-2xl bg-[var(--part)] p-6 sm:p-8">
            <span
              className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-white/10"
              aria-hidden="true"
            />
            <div className="relative">
              <AppScreen slug={part.slug} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
