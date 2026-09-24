/**
 * Who talks to whom.
 *
 * Inline SVG rather than a diagramming library: it is four boxes and five
 * arrows, it has to follow the light/dark tokens, and it should not cost the
 * visitor a 900 KB download to look at.
 */
export function ArchitectureDiagram() {
  return (
    // overflow-x-auto, not hidden: the drawing has a 640px floor, so on a phone
    // it has to be scrollable sideways or its right-hand half -- the Console and
    // the pharmacy's own system -- is simply unreachable.
    <figure className="overflow-x-auto rounded-xl border border-line bg-surface">
      <svg
        viewBox="0 0 920 372"
        className="h-auto w-full min-w-[640px]"
        role="img"
        aria-label="The patient app and the delivery app connect over HTTPS to MediRx Cloud. The Console, inside the pharmacy, also connects outbound only to MediRx Cloud, and is the single link to the pharmacy's dispensing system."
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 10 5 0 10z" fill="var(--line-strong)" />
          </marker>
          <marker
            id="arrow-accent"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0 10 5 0 10z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* ---- zone: the pharmacy --------------------------------------- */}
        <rect
          x="658"
          y="26"
          width="238"
          height="318"
          rx="14"
          fill="var(--accent-tint)"
          stroke="var(--line)"
        />
        <text
          x="777"
          y="50"
          textAnchor="middle"
          className="fill-[var(--accent)] text-[12px] font-bold tracking-[0.1em]"
        >
          AT THE PHARMACY
        </text>

        {/* ---- zone: the cloud ------------------------------------------ */}
        <rect
          x="326"
          y="26"
          width="248"
          height="318"
          rx="14"
          fill="var(--raised)"
          stroke="var(--line)"
        />
        <text
          x="450"
          y="50"
          textAnchor="middle"
          className="fill-[var(--muted)] text-[12px] font-bold tracking-[0.1em]"
        >
          MEDIRX CLOUD
        </text>

        {/* ---- the two phone apps --------------------------------------- */}
        <Box x={24} y={74} w={196} h={76} title="Patient app" sub="iOS and Android" />
        <Box x={24} y={218} w={196} h={76} title="MediRx Delivery" sub="the driver app" />

        {/* ---- cloud contents ------------------------------------------- */}
        <Box
          x={350}
          y={84}
          w={200}
          h={82}
          title="System of record"
          sub="orders, chat, audit trail"
          accent
        />
        <Box x={350} y={202} w={200} h={76} title="Admin panel" sub="run the platform" />

        {/* ---- pharmacy contents ---------------------------------------- */}
        <Box
          x={680}
          y={84}
          w={194}
          h={82}
          title="MediRx Console"
          sub="the desktop app"
          accent
        />
        <Box
          x={680}
          y={226}
          w={194}
          h={72}
          title="Dispensing system"
          sub="the pharmacy's own"
          dashed
        />

        {/* ---- arrows ---------------------------------------------------- */}
        {/* phones to cloud */}
        <path
          d="M220 112 H285 Q300 112 300 127 V132"
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1.6"
        />
        <path
          d="M300 132 H350"
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1.6"
          markerEnd="url(#arrow)"
        />
        <path
          d="M220 256 H285 Q300 256 300 241 V138"
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1.6"
        />
        <Label x={263} y={104}>HTTPS</Label>
        <Label x={263} y={248}>HTTPS</Label>

        {/* console to cloud -- outbound only, so the arrow points one way */}
        <path
          d="M680 125 H550"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          markerEnd="url(#arrow-accent)"
        />
        <Label x={615} y={114} accent>
          outbound only
        </Label>
        <text
          x="615"
          y="146"
          textAnchor="middle"
          className="fill-[var(--muted)] text-[11px]"
        >
          nothing connects in
        </text>

        {/* console to dispensing system */}
        <path
          d="M777 166 V226"
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1.6"
          markerEnd="url(#arrow)"
          markerStart="url(#arrow)"
        />
        <text
          x="789"
          y="200"
          className="fill-[var(--muted)] text-[11px]"
        >
          the only link
        </text>
      </svg>
    </figure>
  );
}

function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  accent = false,
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  accent?: boolean;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        fill="var(--surface)"
        stroke={accent ? "var(--accent)" : "var(--line-strong)"}
        strokeWidth={accent ? 1.8 : 1.2}
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - 4}
        textAnchor="middle"
        className="fill-[var(--ink)] text-[14px] font-semibold"
      >
        {title}
      </text>
      <text
        x={x + w / 2}
        y={y + h / 2 + 16}
        textAnchor="middle"
        className="fill-[var(--muted)] text-[12px]"
      >
        {sub}
      </text>
    </g>
  );
}

function Label({
  x,
  y,
  children,
  accent = false,
}: {
  x: number;
  y: number;
  children: string;
  accent?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      className={`text-[11px] font-semibold tracking-[0.04em] ${
        accent ? "fill-[var(--accent)]" : "fill-[var(--muted)]"
      }`}
    >
      {children}
    </text>
  );
}
