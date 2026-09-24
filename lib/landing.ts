/**
 * Landing page copy.
 *
 * Written for a pharmacy owner reading the site for the first time: what goes
 * wrong today, what changes, and what it costs them to find out. Plain words,
 * no platform vocabulary. The fuller, more technical wording still lives in
 * `content.ts`, which the deeper pages use.
 *
 * Keeping it all in one file is what makes the site reviewable -- someone can
 * check every claim without reading a line of JSX.
 */
import type { IconName } from "@/components/Icons";

export const HERO = {
  eyebrow: "For pharmacies",
  headline: "Every order, from request to doorstep.",
  sub: "Your counter, your patients and your drivers in one queue — alongside the dispensing software you already use.",
  trust: [
    "Works with your existing system",
    "No network changes",
    "No card payments",
  ],
  /* The queue the hero shows: one working day, mid-morning. Real states from
     the Console, so the opening screen is the product rather than a graphic. */
  queue: [
    { name: "A. Smith", state: "Requested", part: "patient", at: "9:12", live: false },
    { name: "J. Baldwin", state: "Ready", part: "console", at: "9:04", live: false },
    { name: "N. Thomas", state: "Out for delivery", part: "delivery", at: "8:47", live: true },
    { name: "L. Strand", state: "Ready", part: "console", at: "8:31", live: false },
    { name: "M. Austin", state: "Out for delivery", part: "delivery", at: "8:16", live: true },
  ],
  /* Concrete numbers read as proof where a tick-list reads as a claim. Kept
     out of the hero to leave it minimal -- each of these is made again in the
     section it belongs to. Here if a proof row is ever wanted back. */
  proof: [
    { value: "2 taps", label: "for a patient to ask for a refill" },
    { value: "2 scans", label: "before any bag reaches a door" },
    { value: "0", label: "servers for you to run or update" },
  ],
} as const;

export type Beat = { icon: IconName; title: string; body: string };

/* ---- 2. the problem ------------------------------------------------------ */

export const PROBLEMS: Beat[] = [
  {
    icon: "ring",
    title: "“Is it ready yet?”",
    body: "The same phone call, all day. Staff stop what they are doing to answer a question a message could have answered hours ago.",
  },
  {
    icon: "clock",
    title: "Patients arrive too early",
    body: "One item is finished, another is not. They make the trip for nothing, and somebody has to explain why at the counter.",
  },
  {
    icon: "bag",
    title: "Deliveries run on memory",
    body: "The right bag reaching the right door depends on someone being careful. If a handover is questioned later, there is nothing to point at.",
  },
];

/* ---- 3. one system, four parts ------------------------------------------ */

export type Part = {
  slug: string;
  icon: IconName;
  name: string;
  role: string;
  tag: string;
  points: string[];
  /** The headline the showcase panel leads with when this app is selected. */
  pitch: string;
  isHub?: boolean;
  /** Each part gets its own hue so the four are told apart at a glance. */
  hue: string;
};

export const PARTS: Part[] = [
  {
    slug: "console",
    hue: "#2f6f6b",
    icon: "monitor",
    name: "MediRx Console",
    role: "Where your team works, inside your pharmacy.",
    pitch: "Every order your team is working on, in one place.",
    tag: "Pharmacists & staff",
    points: [
      "Every order in one queue, request to handover",
      "Message patients without sharing a phone number",
      "Assign deliveries and watch them land",
    ],
  },
  {
    slug: "patient",
    hue: "#3159a8",
    icon: "phone",
    name: "Patient App",
    role: "Your pharmacy’s own app, under your own name.",
    pitch: "Your pharmacy, in your patients’ pocket.",
    tag: "Your patients",
    points: [
      "A refill in two taps",
      "Pickup or delivery — that is the whole choice",
      "Message you, or take a video call",
    ],
  },
  {
    slug: "delivery",
    hue: "#a8551f",
    icon: "van",
    name: "MediRx Delivery",
    role: "Safe deliveries, proven by two scans.",
    pitch: "Every bag accounted for, door to door.",
    tag: "Your drivers",
    points: [
      "Scanned leaving the store, scanned at the door",
      "Signature captured, cash recorded",
      "A day’s record, ready to reconcile",
    ],
  },
  {
    slug: "cloud",
    hue: "#6d4aa8",
    icon: "cloud",
    name: "MediRx Cloud",
    role: "The engine that keeps all three in step.",
    pitch: "The engine that keeps all three in step.",
    tag: "Nothing to install",
    isHub: true,
    points: [
      "Runs for you — no server, no updates to chase",
      "Holds the record of what happened, and when",
      "Where we brand your app and manage your team",
    ],
  },
];

/* ---- 4. how the system works -------------------------------------------- */

export const HOW_STEPS: Beat[] = [
  {
    icon: "phone",
    title: "Patient asks",
    body: "A refill request from the app — pickup or delivery.",
  },
  {
    icon: "monitor",
    title: "You fill it",
    body: "It lands in the system you already use. No double entry.",
  },
  {
    icon: "bell",
    title: "They are told",
    body: "One message, sent only when everything is ready.",
  },
  {
    icon: "van",
    title: "It reaches them",
    body: "Collected at your counter, or delivered and signed for.",
  },
];

/* ---- 5. patient refill flow --------------------------------------------- */

export const REFILL_STEPS: Beat[] = [
  {
    icon: "lock",
    title: "Signing in is safe",
    body: "A code by text proves the phone number first. Nothing about your patients is revealed before that code checks out — so nobody can use the app to find out who you dispense for.",
  },
  {
    icon: "pill",
    title: "Two taps to reorder",
    body: "They pick their prescriptions and choose pickup or delivery. No dates, no time slots, no promises made on your behalf. Scheduling stays yours.",
  },
  {
    icon: "monitor",
    title: "It arrives where you work",
    body: "The request appears in your existing dispensing system, linked to the order. Your team fills it exactly as they always have.",
  },
  {
    icon: "bell",
    title: "One clear message",
    body: "Nothing is sent until every outstanding item for that patient is checked and ready — one trip instead of a wasted journey.",
  },
];

/**
 * The same four steps as REFILL_STEPS, written as prose.
 *
 * The panel reads better as paragraphs than as a numbered list -- the steps are
 * a short story about one refill, not a procedure anyone has to follow. The
 * stepped version is kept above because the deeper pages still use it.
 */
export const REFILL_PROSE: string[] = [
  "The part your patients see — four steps, and only two of them involve them at all.",
  "A code by text proves the phone number first. Nothing about your patients is revealed before that code checks out, so nobody can use the app to find out who you dispense for. From there it is two taps: they pick their prescriptions and choose pickup or delivery. No dates, no time slots, no promises made on your behalf — scheduling stays yours.",
  "The request appears in your existing dispensing system, linked to the order, and your team fills it exactly as they always have. Nothing goes back to the patient until every outstanding item for them is checked and ready — one trip instead of a wasted journey.",
];

/* ---- 6. delivery safety -------------------------------------------------- */

export const DELIVERY_STEPS: Beat[] = [
  {
    icon: "scan",
    title: "Scanned leaving the store",
    body: "The driver scans every bag into the vehicle. The run builds itself from those scans, so the list is exactly what is on board.",
  },
  {
    icon: "scan",
    title: "Scanned again at the door",
    body: "The same label, a second time. Only a match against that patient unlocks the handover.",
  },
  {
    icon: "alert",
    title: "If they disagree, it stops",
    body: "A mismatch blocks the delivery outright, and scanning again cannot undo it. It comes back to you to sort out — which is the point.",
  },
];

export const DELIVERY_EXTRAS: Beat[] = [
  {
    icon: "pen",
    title: "Signed for",
    body: "Captured at the door, with a witness where one is needed.",
  },
  {
    icon: "card",
    title: "Cash recorded, never charged",
    body: "Amounts are written down. We hold no card details at all.",
  },
  {
    icon: "shield",
    title: "No invented locations",
    body: "If a position is unavailable, none is stored — rather than a placeholder that would quietly spoil the trail.",
  },
];

/* ---- 7. driver app ------------------------------------------------------- */

export const DRIVER_STEPS: Beat[] = [
  {
    icon: "scan",
    title: "Scan the bags",
    body: "Load the vehicle by scanning, not by reading a list.",
  },
  {
    icon: "route",
    title: "The route builds itself",
    body: "The run is whatever was scanned in — nothing assigned in advance.",
  },
  {
    icon: "pen",
    title: "Deliver and sign",
    body: "Verify the bag, take a signature, record any cash.",
  },
  {
    icon: "check",
    title: "End-of-day summary",
    body: "Everything delivered and everything collected, ready to reconcile.",
  },
];

/* ---- 8. rules ------------------------------------------------------------ */

export const PLAIN_RULES: Beat[] = [
  {
    icon: "shield",
    title: "Your network stays closed",
    body: "Nothing at your pharmacy waits for a connection from outside. The desktop app reaches out; nothing reaches in.",
  },
  {
    icon: "database",
    title: "Your records stay yours",
    body: "We read what we need and write back in three narrow places. Your dispensing history remains in your own system.",
  },
  {
    icon: "lock",
    title: "One pharmacy cannot see another",
    body: "Which pharmacy someone belongs to is decided by who they signed in as — never by what the app asks for.",
  },
  {
    icon: "clock",
    title: "Scheduling stays with you",
    body: "Patients choose pickup or delivery and nothing else. The app never promises a date or a time on your behalf.",
  },
  {
    icon: "card",
    title: "No card details, anywhere",
    body: "We take no payments and store no cards, which removes a whole category of risk from your counter.",
  },
  {
    icon: "link",
    title: "A delivery cannot skip a step",
    body: "No handover without a matching scan at the door, and no scan at the door without one at the store.",
  },
];

/* ---- 9. FAQ -------------------------------------------------------------- */

export type Faq = { q: string; a: string; todo?: boolean };

export const FAQS: Faq[] = [
  {
    q: "Do we have to replace our current dispensing system?",
    a: "No. MediRx works alongside it. Your team keeps filling prescriptions exactly as they do today — there is no migration and no double entry.",
  },
  {
    q: "Does our IT team need to open anything on our network?",
    a: "No. The desktop app only ever makes outgoing connections. There is no port to forward and no firewall rule to write — usually the shortest conversation we have with an IT team.",
  },
  {
    q: "Do we need new hardware?",
    a: "A computer in the pharmacy to run the desktop app, and a phone for each driver. Nothing beyond that.",
  },
  {
    q: "Will the app carry our name?",
    a: "Yes. The patient app is published under your pharmacy’s name, with your colours and logo. To your patients it is your app, not ours.",
  },
  {
    q: "What happens to our records if we stop using MediRx?",
    a: "Your dispensing history stays where it has always been — in your own system. Delivery records are written back there as they complete, so nothing important lives only with us.",
  },
  {
    q: "Do patients pay anything?",
    a: "No. The app is free to your patients, and MediRx takes no card payments from anybody. Amounts owed are displayed and recorded for you to collect as you do now.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the size of your pharmacy and how many locations you run. Ask us and we will give you a straight number on the first call.",
    todo: true,
  },
  {
    q: "How long does setup take, and where are you available?",
    a: "Get in touch and we will confirm current timelines and whether we are operating in your area.",
    todo: true,
  },
];
