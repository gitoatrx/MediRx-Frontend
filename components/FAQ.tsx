import { Icon } from "./Icons";
import type { Faq } from "@/lib/landing";

/**
 * Built on <details>, so it opens and closes with no JavaScript at all and is
 * keyboard- and screen-reader-correct for free. The marker is replaced rather
 * than restyled, which is the one part browsers disagree about.
 */
export function FAQList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      {items.map((item, i) => (
        <details
          key={item.q}
          className={`group ${i > 0 ? "border-t border-line" : ""}`}
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-3.5 text-[15px] font-medium tracking-[-0.01em] transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            <span className="flex-1">{item.q}</span>
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform group-open:rotate-45 group-open:border-accent group-open:text-accent">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-4 pr-14">
            <p className="text-[14.5px] leading-relaxed text-ink-2">{item.a}</p>
            {item.todo && (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-tint px-3 py-1.5 text-[12px] font-medium text-accent">
                <Icon name="alert" size={13} />
                Needs confirming before launch
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
