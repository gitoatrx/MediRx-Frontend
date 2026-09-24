import { Icon, type IconName } from "./Icons";

/**
 * "One system, four parts", drawn for a pharmacy owner rather than an engineer.
 *
 * The technical version -- boxes, arrows, HTTPS labels -- still exists on the
 * Platform and Security pages, where the reader has asked for that level. Here
 * the job is only to show that everything meets in the middle.
 *
 * Built from HTML rather than SVG so it reflows into a column on a phone
 * instead of needing to be scrolled sideways.
 */

type Node = {
  icon: IconName;
  name: string;
  who: string;
};

const USERS: Node[] = [
  { icon: "monitor", name: "MediRx Console", who: "Your pharmacy team" },
  { icon: "phone", name: "Patient App", who: "Your patients" },
  { icon: "van", name: "MediRx Delivery", who: "Your drivers" },
];

export function SystemBand() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
        {/* the three apps people actually hold */}
        <div className="flex flex-col gap-3">
          {USERS.map((u) => (
            <div
              key={u.name}
              className="flex items-center gap-3.5 rounded-xl border border-line bg-raised p-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-tint text-accent">
                <Icon name={u.icon} size={21} />
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold tracking-[-0.01em]">
                  {u.name}
                </span>
                <span className="block text-[13px] text-muted">{u.who}</span>
              </span>
            </div>
          ))}
        </div>

        {/* the join */}
        <div
          className="flex items-center justify-center gap-2 lg:flex-col"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-line lg:h-10 lg:w-px" />
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
            all connect to
          </span>
          <span className="h-px w-10 bg-line lg:h-10 lg:w-px" />
        </div>

        {/* the middle */}
        <div className="rounded-xl border border-accent bg-accent-tint p-6">
          <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-ink">
            <Icon name="cloud" size={21} />
          </span>
          <h3 className="mt-3.5 text-[17px] font-semibold tracking-[-0.015em]">
            MediRx Cloud
          </h3>
          <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-2">
            The engine in the middle. It keeps all three in step and holds the
            record of what happened.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-[12px] font-medium text-ink-2">
            <Icon name="check" size={13} />
            Nothing for you to install
          </p>
        </div>
      </div>

      <p className="mt-7 border-t border-line pt-5 text-center text-[14.5px] text-ink-2">
        The three apps never talk to each other &mdash; only to the middle. That
        is what keeps one pharmacy&rsquo;s information away from another&rsquo;s.
      </p>
    </div>
  );
}
