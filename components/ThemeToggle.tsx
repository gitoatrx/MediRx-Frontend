"use client";

/**
 * Light/dark switch.
 *
 * Deliberately holds no React state. The current theme lives in one place --
 * the `data-theme` attribute on <html>, written before first paint by the
 * inline script in the layout -- and the two icons are shown and hidden by CSS
 * from that same attribute. That keeps the server and client markup identical,
 * so there is no hydration mismatch and no flash of the wrong icon.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ??
      (window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("medirx-theme", next);
    } catch {
      // Private windows and blocked site data: the toggle still works for this
      // page view, it just will not be remembered. Not worth failing over.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="grid size-9 place-items-center rounded-lg border border-line text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
    >
      <MoonIcon />
      <SunIcon />
    </button>
  );
}

/* Shown in light mode -- click it to go dark. */
function MoonIcon() {
  return (
    <svg
      className="theme-icon-light"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

/* Shown in dark mode -- click it to go light. */
function SunIcon() {
  return (
    <svg
      className="theme-icon-dark"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
