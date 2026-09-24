/**
 * Illustrated app screens.
 *
 * These are ILLUSTRATIONS, not screenshots. They are drawn from simple shapes
 * so they read as a diagram of the app rather than a photograph of it -- which
 * is the honest thing to show until real screens exist. Every one is a slot:
 * drop a real screenshot in and the surrounding layout does not change.
 */
import { Icon } from "./Icons";

/* -------------------------------------------------------------------------- */
/* frames                                                                      */
/* -------------------------------------------------------------------------- */

export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[236px] rounded-[2.1rem] border border-line-strong bg-surface p-2.5 shadow-[0_24px_60px_-28px_rgb(36_28_25/0.45)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-ground">
        {/* notch */}
        <div className="flex h-7 items-center justify-center">
          <span className="h-1.5 w-14 rounded-full bg-line-strong" />
        </div>
        <div className="px-3.5 pb-5">{children}</div>
      </div>
    </div>
  );
}

export function DesktopFrame({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_28px_70px_-34px_rgb(36_28_25/0.45)]">
      <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 text-[11.5px] font-medium text-muted">
          {title}
        </span>
      </div>
      <div className="bg-ground p-4">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* small parts                                                                 */
/* -------------------------------------------------------------------------- */

function Bar({ w = "w-full", tone = "line" }: { w?: string; tone?: string }) {
  return (
    <span
      className={`block h-1.5 rounded-full ${w} ${
        tone === "ink" ? "bg-line-strong" : "bg-line"
      }`}
    />
  );
}

function ScreenTitle({ children }: { children: string }) {
  return (
    <p className="mb-2.5 text-[12px] font-semibold tracking-[-0.01em] text-ink">
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/* patient app                                                                 */
/* -------------------------------------------------------------------------- */

export function ScreenPrescriptions() {
  return (
    <>
      <ScreenTitle>Your prescriptions</ScreenTitle>
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-lg border border-line bg-surface p-2.5"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-md bg-accent-tint text-accent">
              <Icon name="pill" size={14} />
            </span>
            <span className="flex flex-1 flex-col gap-1.5">
              <Bar w="w-4/5" tone="ink" />
              <Bar w="w-1/2" />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-accent px-3 py-2 text-center text-[11.5px] font-semibold text-accent-ink">
        Request refill
      </div>
    </>
  );
}

export function ScreenReady() {
  return (
    <>
      <ScreenTitle>Order #1042</ScreenTitle>
      <div className="rounded-xl border border-accent bg-accent-tint p-3.5 text-center">
        <span className="mx-auto grid size-9 place-items-center rounded-full bg-accent text-accent-ink">
          <Icon name="check" size={18} />
        </span>
        <p className="mt-2 text-[12.5px] font-semibold text-ink">
          Ready for pickup
        </p>
        <p className="mt-0.5 text-[10.5px] text-ink-2">
          All 3 items final&#8209;checked
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {["Collected by", "Pickup or delivery"].map((t) => (
          <div
            key={t}
            className="flex items-center justify-between rounded-lg border border-line bg-surface px-2.5 py-2"
          >
            <span className="text-[10.5px] text-muted">{t}</span>
            <Bar w="w-10" />
          </div>
        ))}
      </div>
    </>
  );
}

export function ScreenChat() {
  return (
    <>
      <ScreenTitle>Your pharmacy</ScreenTitle>
      <div className="flex flex-col gap-2">
        <div className="max-w-[82%] rounded-xl rounded-tl-sm border border-line bg-surface p-2.5">
          <span className="flex flex-col gap-1.5">
            <Bar w="w-full" />
            <Bar w="w-2/3" />
          </span>
        </div>
        <div className="ml-auto max-w-[82%] rounded-xl rounded-tr-sm bg-accent p-2.5">
          <span className="flex flex-col gap-1.5">
            <span className="block h-1.5 w-20 rounded-full bg-accent-ink/45" />
            <span className="block h-1.5 w-12 rounded-full bg-accent-ink/45" />
          </span>
        </div>
        <div className="max-w-[82%] rounded-xl rounded-tl-sm border border-line bg-surface p-2.5">
          <Bar w="w-16" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2">
        <Bar w="w-20" />
        <span className="ml-auto text-accent">
          <Icon name="arrow" size={13} />
        </span>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* driver app                                                                  */
/* -------------------------------------------------------------------------- */

export function ScreenScan() {
  return (
    <>
      <ScreenTitle>Scan the bag</ScreenTitle>
      <div className="relative grid h-[136px] place-items-center rounded-xl border border-line bg-ink/[0.045]">
        {/* viewfinder corners */}
        <span className="absolute left-4 top-4 size-5 rounded-tl-md border-l-2 border-t-2 border-accent" />
        <span className="absolute right-4 top-4 size-5 rounded-tr-md border-r-2 border-t-2 border-accent" />
        <span className="absolute bottom-4 left-4 size-5 rounded-bl-md border-b-2 border-l-2 border-accent" />
        <span className="absolute bottom-4 right-4 size-5 rounded-br-md border-b-2 border-r-2 border-accent" />
        <span className="flex h-9 items-end gap-[3px]" aria-hidden="true">
          {[14, 26, 10, 32, 18, 30, 12, 24, 16, 28].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px` }}
              className="w-[3px] rounded-sm bg-line-strong"
            />
          ))}
        </span>
      </div>
      <p className="mt-2.5 text-center text-[10.5px] text-muted">
        Hold steady over the label
      </p>
    </>
  );
}

export function ScreenRoute() {
  return (
    <>
      <ScreenTitle>Today&rsquo;s run &middot; 4 stops</ScreenTitle>
      <div className="flex flex-col gap-2">
        {[
          { done: true, n: "1" },
          { done: true, n: "2" },
          { done: false, n: "3" },
          { done: false, n: "4" },
        ].map((s) => (
          <div
            key={s.n}
            className={`flex items-center gap-2.5 rounded-lg border p-2.5 ${
              s.done ? "border-line bg-surface" : "border-accent bg-accent-tint"
            }`}
          >
            <span
              className={`grid size-6 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                s.done
                  ? "bg-line text-muted"
                  : "bg-accent text-accent-ink"
              }`}
            >
              {s.done ? <Icon name="check" size={11} /> : s.n}
            </span>
            <span className="flex flex-1 flex-col gap-1.5">
              <Bar w="w-3/4" tone={s.done ? "line" : "ink"} />
              <Bar w="w-1/3" />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export function ScreenSignature() {
  return (
    <>
      <ScreenTitle>Signature</ScreenTitle>
      <div className="rounded-xl border border-line bg-surface p-3">
        <svg viewBox="0 0 160 52" className="h-[52px] w-full" aria-hidden="true">
          <path
            d="M8 38c10-4 14-22 20-22s4 24 11 24 9-26 16-26 5 22 12 22 10-14 16-14 7 10 13 10 12-6 18-9 20-4 20-4"
            fill="none"
            stroke="var(--ink-2)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-2 border-t border-dashed border-line pt-2">
          <Bar w="w-24" />
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-accent px-3 py-2 text-center text-[11.5px] font-semibold text-accent-ink">
        Complete delivery
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* console                                                                     */
/* -------------------------------------------------------------------------- */

export function ConsoleOrders() {
  const rows = [
    { n: "1042", state: "Ready", tone: "ready" },
    { n: "1041", state: "In progress", tone: "busy" },
    { n: "1040", state: "Out for delivery", tone: "busy" },
    { n: "1039", state: "Collected", tone: "done" },
  ];
  return (
    <DesktopFrame title={"MediRx Console — Orders"}>
      <div className="flex gap-3">
        {/* sidebar */}
        <div className="hidden w-32 shrink-0 flex-col gap-1.5 sm:flex">
          {(
            [
              ["bag", "Orders"],
              ["van", "Dispatch"],
              ["message", "Chat"],
              ["users", "Patients"],
              ["calendar", "Appointments"],
            ] as const
          ).map(([icon, label], i) => (
            <span
              key={label}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11.5px] font-medium ${
                i === 0
                  ? "bg-accent-tint text-accent"
                  : "text-muted"
              }`}
            >
              <Icon name={icon} size={14} />
              {label}
            </span>
          ))}
        </div>

        {/* table */}
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          {rows.map((r) => (
            <div
              key={r.n}
              className="flex items-center gap-3 rounded-lg border border-line bg-surface px-3 py-2.5"
            >
              <span className="font-mono text-[11.5px] font-semibold text-ink">
                #{r.n}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <Bar w="w-2/5" tone="ink" />
                <Bar w="w-1/4" />
              </span>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${
                  r.tone === "ready"
                    ? "bg-accent text-accent-ink"
                    : r.tone === "busy"
                      ? "bg-accent-tint text-accent"
                      : "bg-line text-muted"
                }`}
              >
                {r.state}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DesktopFrame>
  );
}
