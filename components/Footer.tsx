import Link from "next/link";
import { Wordmark } from "./Brand";
import { CONTAINER } from "./ui";

const COLUMNS = [
  {
    heading: "Platform",
    // The three apps a pharmacy actually gets. The engine behind them is not
    // something anyone buys, so it is not listed as though it were.
    links: [
      { href: "/platform#console", label: "MediRx Console" },
      { href: "/platform#patient", label: "Patient app" },
      { href: "/platform#delivery", label: "MediRx Delivery" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/how-it-works#lifecycle", label: "An order's life" },
      { href: "/security", label: "Security" },
      { href: "/security#rules", label: "The rules" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/contact#demo", label: "Book a demo" },
    ],
  },
];

export function Footer() {
  return (
    /* The same dark band the page opens on, so the site is bookended rather
       than fading out into the page colour. Both layers are the hero's: the
       faint dot grid, and one warm light in a corner. */
    <footer className="relative mt-auto overflow-hidden bg-night text-night-ink">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 -top-56 size-[40rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgb(240 112 63 / 0.16) 0%, transparent 62%)",
        }}
        aria-hidden="true"
      />

      <div className={`${CONTAINER} relative py-14`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-3">
            <Wordmark size={30} onDark />
            <p className="max-w-[34ch] text-[14px] leading-relaxed text-night-muted">
              Refills, pickup and delivery, chat and video calls &mdash;
              connected to the dispensing system a pharmacy already runs.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-night-muted">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-night-ink-2 transition-colors hover:text-night-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-night-line pt-6 text-[13px] text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MediRx. All rights reserved.</p>
          <p>Built for pharmacies that would rather not open a port.</p>
        </div>
      </div>
    </footer>
  );
}
