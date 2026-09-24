"use client";

import { useEffect, useRef } from "react";
import { FAQList } from "./FAQ";
import { Icon } from "./Icons";
import type { Faq } from "@/lib/landing";

/**
 * The questions, behind a button.
 *
 * Eight open rows were the tallest thing on the page for content most visitors
 * skim past; the few who do want them want all of them at once. A dialog gives
 * both -- one line in the layout, the full list a click away.
 *
 * Built on the native <dialog> with showModal(), which brings focus trapping,
 * Escape to close, inert background content and a real backdrop without any of
 * it being written by hand.
 */
export function FaqDialog({ items }: { items: readonly Faq[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef<string | null>(null);

  /**
   * The scroll lock is applied and released imperatively rather than through
   * state and an effect cleanup.
   *
   * That is not a style preference: a dialog can end up closed without its
   * `close` event having been observed, and tying the release to that event
   * left `overflow: hidden` on <body> with nothing on screen -- the page simply
   * would not scroll any more. Releasing from every path that can close it,
   * and on unmount, means the worst case is releasing twice, which is free.
   */
  function lock() {
    if (previousOverflow.current === null) {
      previousOverflow.current = document.body.style.overflow;
    }
    document.body.style.overflow = "hidden";
  }

  function release() {
    if (previousOverflow.current === null) return;
    document.body.style.overflow = previousOverflow.current;
    previousOverflow.current = null;
  }

  /**
   * The lock is released by watching the `open` attribute, not by listening for
   * the `close` event.
   *
   * Two things went wrong before this. React's `onClose` never fired, because
   * `close` does not bubble and React delegates from the root. Attaching the
   * listener natively did not help either -- in testing, `close()` closed the
   * dialog without any `close` event being heard at all. Both times the result
   * was the same: `overflow: hidden` left on <body> with no dialog on screen,
   * and a page that would not scroll.
   *
   * The `open` attribute, by contrast, is the state itself rather than a
   * notification about it, and an observer on it cannot miss a transition.
   */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sync = () => {
      if (!el.open) release();
    };

    const observer = new MutationObserver(sync);
    observer.observe(el, { attributes: true, attributeFilter: ["open"] });
    el.addEventListener("close", sync);
    el.addEventListener("cancel", sync);

    return () => {
      observer.disconnect();
      el.removeEventListener("close", sync);
      el.removeEventListener("cancel", sync);
      release();
    };
  }, []);

  function show() {
    ref.current?.showModal();
    lock();
  }

  function hide() {
    ref.current?.close();
    release();
  }

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="inline-flex w-fit items-center gap-2.5 rounded-xl border border-line-strong bg-surface px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
      >
        <Icon name="message" size={17} />
        Common questions
        <span className="text-[13px] font-semibold text-muted">
          {items.length}
        </span>
      </button>

      <dialog
        ref={ref}
        // Clicking the backdrop lands on the dialog itself, never on its
        // contents -- that is what makes this check a backdrop test.
        onClick={(e) => {
          if (e.target === ref.current) hide();
        }}
        aria-labelledby="faq-dialog-title"
        className="faq-dialog m-auto w-[min(44rem,calc(100vw-2rem))] rounded-2xl border border-line bg-ground p-0 text-ink shadow-[0_40px_90px_-40px_rgb(36_28_25/0.6)] backdrop:bg-ink/45"
      >
        <div className="flex items-center gap-4 border-b border-line px-6 py-4">
          <h2
            id="faq-dialog-title"
            className="text-[18px] font-semibold tracking-[-0.018em]"
          >
            Common questions
          </h2>
          <button
            type="button"
            onClick={hide}
            aria-label="Close"
            className="ml-auto grid size-9 place-items-center rounded-lg border border-line text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* The list scrolls inside the dialog, so the dialog itself never grows
            past the window on a short screen. */}
        <div className="max-h-[min(70vh,34rem)] overflow-y-auto p-5">
          <FAQList items={items} />
          <p className="mt-4 text-[14px] leading-relaxed text-muted">
            If yours is not here, ask it on the call. We would rather answer the
            hard ones early than during an install.
          </p>
        </div>
      </dialog>
    </>
  );
}
