import { Icon, type IconName } from "./Icons";

/**
 * The screen shown in the showcase panel for whichever app is selected.
 *
 * Bigger and more literal than the thumbnails these replaced: real record
 * numbers, real drug names, real statuses -- because a visitor understands
 * "Rx 7281904 · Refill due" instantly and understands a grey bar never.
 *
 * Still a drawing, not a screenshot. The data is invented and obviously so; no
 * real patient or prescription appears here. When real captures exist they take
 * this slot and nothing around them moves.
 *
 * Colour comes from `--part`, set by the panel, so the screen always matches the
 * app it belongs to.
 */

type Row = {
  id: string;
  label: string;
  state: string;
  tone: "strong" | "soft" | "quiet";
  icon?: IconName;
};

const SCREENS: Record<
  string,
  { heading: string; count: string; icon: IconName; rows: Row[]; cta?: string }
> = {
  console: {
    heading: "Today’s queue",
    count: "12 open",
    icon: "monitor",
    rows: [
      { id: "#1042", label: "A. Smith", state: "Ready", tone: "strong" },
      { id: "#1041", label: "J. Baldwin", state: "In progress", tone: "soft" },
      {
        id: "#1040",
        label: "N. Thomas",
        state: "Out for delivery",
        tone: "soft",
      },
      { id: "#1039", label: "L. Strand", state: "Collected", tone: "quiet" },
    ],
  },
  patient: {
    heading: "Your prescriptions",
    count: "2 active",
    icon: "phone",
    rows: [
      {
        id: "Rx 7281904",
        label: "Metformin 500 mg · 90 tablets",
        state: "Refill due",
        tone: "strong",
        icon: "pill",
      },
      {
        id: "Rx 7281877",
        label: "Ramipril 5 mg · 40 capsules",
        state: "Active",
        tone: "quiet",
        icon: "pill",
      },
    ],
    cta: "Request refill",
  },
  delivery: {
    heading: "Today’s run",
    count: "Stop 3 of 4",
    icon: "van",
    rows: [
      { id: "1", label: "Scanned at the store", state: "Done", tone: "strong" },
      { id: "2", label: "Scanned at the door", state: "Done", tone: "strong" },
      { id: "3", label: "Signature", state: "Next", tone: "soft" },
      { id: "4", label: "Cash on delivery", state: "—", tone: "quiet" },
    ],
  },
};

export function AppScreen({ slug }: { slug: string }) {
  const screen = SCREENS[slug] ?? SCREENS.console;
  const isDelivery = slug === "delivery";

  return (
    <div
      className="flex flex-col self-start rounded-2xl border border-line bg-surface p-4 shadow-[0_18px_44px_-28px_rgb(36_28_25/0.4)]"
      aria-hidden="true"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[var(--part)]">
          <Icon name={screen.icon} size={15} />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
          {screen.heading}
        </span>
        <span className="ml-auto rounded-full bg-[var(--part)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--part)]">
          {screen.count}
        </span>
      </div>

      <ul className="flex flex-col gap-2">
        {screen.rows.map((row) => (
          <li
            key={row.id}
            className="flex items-center gap-3 rounded-xl border border-line bg-raised px-3 py-2.5"
          >
            {/* A tick for a step that is finished, an icon for a thing. */}
            {isDelivery ? (
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full ${
                  row.tone === "strong"
                    ? "bg-[var(--part)] text-white"
                    : "border border-line-strong text-transparent"
                }`}
              >
                <Icon name="check" size={11} />
              </span>
            ) : (
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[var(--part)]/10 text-[var(--part)]">
                <Icon name={row.icon ?? "bag"} size={15} />
              </span>
            )}

            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold text-ink">
                {isDelivery ? row.label : row.id}
              </span>
              <span className="block truncate text-[12px] text-muted">
                {isDelivery ? row.state : row.label}
              </span>
            </span>

            {!isDelivery && (
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                  row.tone === "strong"
                    ? "bg-[var(--part)] text-white"
                    : row.tone === "soft"
                      ? "bg-[var(--part)]/12 text-[var(--part)]"
                      : "bg-line text-muted"
                }`}
              >
                {row.state}
              </span>
            )}
          </li>
        ))}
      </ul>

      {screen.cta && (
        <div className="pt-3">
          <div className="rounded-xl bg-[var(--part)] py-2.5 text-center text-[13px] font-semibold text-white">
            {screen.cta}
          </div>
        </div>
      )}
    </div>
  );
}
