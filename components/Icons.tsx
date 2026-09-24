/**
 * One line-icon set for the whole site.
 *
 * Drawn here rather than pulled from a package: twenty-odd icons is not worth a
 * dependency, and hand-drawing them keeps the weight, corner radius and stroke
 * consistent with the wordmark -- which is most of what makes an icon set look
 * deliberate rather than borrowed.
 */

export type IconName =
  | "cloud"
  | "monitor"
  | "phone"
  | "van"
  | "ring"
  | "clock"
  | "bag"
  | "shield"
  | "lock"
  | "database"
  | "card"
  | "link"
  | "check"
  | "scan"
  | "pen"
  | "route"
  | "message"
  | "pill"
  | "calendar"
  | "alert"
  | "video"
  | "bell"
  | "users"
  | "arrow";

const PATHS: Record<IconName, React.ReactNode> = {
  cloud: (
    <path d="M7 18a4 4 0 0 1-.4-8A6 6 0 0 1 18 9.3 3.9 3.9 0 0 1 17.6 18H7Z" />
  ),
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 5.6h3" />
    </>
  ),
  van: (
    <>
      <path d="M2.5 16V6.5h10V16M12.5 9.5h4l3 3.5V16" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
      <path d="M8.8 17.5h6.4M2.5 17.5h1.7" />
    </>
  ),
  ring: (
    <>
      <rect x="7" y="4" width="10" height="16" rx="2.5" />
      <path d="M3 8.5a6 6 0 0 1 1.6-3M21 8.5a6 6 0 0 0-1.6-3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V5.5a3 3 0 0 1 6 0V8" />
    </>
  ),
  shield: <path d="M12 3 20 6v6c0 4.4-3.3 7.9-8 9-4.7-1.1-8-4.6-8-9V6l8-3Z" />,
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 10h19" />
    </>
  ),
  link: (
    <path d="M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1m-1 5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1" />
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  scan: (
    <>
      <path d="M3.5 8V5.5a2 2 0 0 1 2-2H8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16" />
      <path d="M3.5 12h17" />
    </>
  ),
  pen: <path d="M4 20h4L19.5 8.5a2.8 2.8 0 0 0-4-4L4 16v4Z" />,
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h5.5" />
    </>
  ),
  message: (
    <path d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4v-4H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" />
  ),
  pill: (
    <>
      <rect
        x="2.6"
        y="8.6"
        width="18.8"
        height="6.8"
        rx="3.4"
        transform="rotate(-45 12 12)"
      />
      <path d="M9 9l6 6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3.5V6.5M16 3.5V6.5" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4.5 21 19.5H3L12 4.5Z" />
      <path d="M12 10v3.5M12 16.4v.1" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
      <path d="m15.5 11 6-3v8l-6-3v-2Z" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9.5a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 13.5 6 9.5Z" />
      <path d="M10 18.5a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5a3.5 3.5 0 0 1 0 6.9M17.5 14.4A6.5 6.5 0 0 1 21.5 20" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
};

export function Icon({
  name,
  size = 22,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}

/** An icon in a soft tinted tile -- the site's standard way of heading a card. */
export function IconTile({
  name,
  tone = "accent",
}: {
  name: IconName;
  tone?: "accent" | "neutral";
}) {
  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-xl ${
        tone === "accent"
          ? "bg-accent-tint text-accent"
          : "border border-line bg-raised text-ink-2"
      }`}
    >
      <Icon name={name} size={21} />
    </span>
  );
}
