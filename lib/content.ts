/**
 * Every fact on this site lives here, so the pages stay layout and the content
 * stays reviewable in one place. Drawn from the four repositories and the
 * platform flow document -- nothing invented.
 *
 * This is the PUBLIC-FACING wording: it describes what the system does and why
 * that matters, without naming the pharmacy system's internal tables, fields or
 * API routes. Those belong in the internal overview, not on a public site.
 */

export const SITE = {
  name: "MediRx",
  tagline: "The pharmacy platform that reaches out, never in.",
  lede:
    "Four pieces of software, one system of record. Refills, pickup and delivery, chat and video calls — connected to the dispensing system a pharmacy already runs, without opening its network to anyone.",
} as const;

export type Product = {
  slug: string;
  name: string;
  kind: string;
  where: string;
  blurb: string;
  built: string;
  audience: string;
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "cloud",
    name: "MediRx Cloud",
    kind: "The system of record",
    where: "Hosted · api.medirx.app · panel.medirx.app",
    blurb:
      "The centre of the platform. Every other piece talks to it, and nothing talks to anything else. It holds the orders, the conversations, the delivery jobs and the audit trail — and it serves the admin panel where the platform is run.",
    built: "Laravel · PostgreSQL · React",
    audience: "Runs in the cloud. Nobody installs it.",
    features: [
      "Separate, purpose-built interfaces for each app rather than one shared door",
      "Approve or revoke a pharmacy's desktop installation from the admin panel",
      "Per-pharmacy branding, so each patient app carries its own name and colours",
      "Pharmacy groups, for brands running more than one branch",
      "Review and approve driver applications",
      "Manage and stage desktop releases across every pharmacy",
    ],
  },
  {
    slug: "console",
    name: "MediRx Console",
    kind: "The pharmacy desktop app",
    where: "Installed on the pharmacy's own computer",
    blurb:
      "Where the pharmacy team works. It installs on a machine inside the pharmacy, binds permanently to that one store, and is the only piece of the platform connected to the dispensing system. It opens no inbound ports — all of its connectivity is outbound.",
    built: ".NET · Avalonia · Encrypted local storage",
    audience: "Pharmacists, technicians, front counter staff",
    features: [
      "Order queue, from request through to handover",
      "A dispatch board for assigning deliveries to drivers",
      "Secure chat with patients, without handing out a phone number",
      "Patient profiles, prescriptions, documents and flags",
      "Start a video call with a patient in one click",
      "Appointment booking, written back into the dispensing system",
      "Staff sign-in by badge",
    ],
  },
  {
    slug: "patient",
    name: "Patient app",
    kind: "iOS and Android",
    where: "One branded build per pharmacy",
    blurb:
      "The pharmacy's own app, under the pharmacy's own name. Patients request refills, choose pickup or delivery, send a photo of a new prescription, message the team and take a video call from their pharmacist — without a phone queue.",
    built: "Flutter · Push notifications · Video calling",
    audience: "Patients",
    features: [
      "See current prescriptions and request a refill",
      "Choose pickup or delivery — the pharmacy keeps control of scheduling",
      "Transfer prescriptions in from another pharmacy",
      "Submit a new prescription as a photo",
      "Message the pharmacy, with attachments",
      "Answer a video call from the pharmacist — it rings over the lock screen",
      "Book appointments, upload insurance documents, track orders",
    ],
  },
  {
    slug: "delivery",
    name: "MediRx Delivery",
    kind: "The driver app",
    where: "One build, every pharmacy",
    blurb:
      "Built around a single rule: the same bag is scanned leaving the store and again at the door. If the two do not match that patient, the handover stops. Nothing is assigned in advance — the run assembles itself from what the driver actually scanned into the vehicle.",
    built: "React · TypeScript · Native barcode scanning",
    audience: "Delivery drivers",
    features: [
      "Barcode scan to load the vehicle; the run builds itself from the scans",
      "A second scan at the door that must match before handover unlocks",
      "Signature capture, with a witness where one is required",
      "Cash recorded at the door — recorded, never charged",
      "Works through dead spots and catches up when signal returns",
      "End-of-day summary for reconciliation",
    ],
  },
];

export type Step = {
  n: number;
  actor: string;
  title: string;
  body: string;
};

export const FLOW: Step[] = [
  {
    n: 1,
    actor: "Patient app",
    title: "The patient signs in",
    body:
      "They enter their phone number and receive a six-digit code by text. Only once that code is proved does the platform ask the pharmacy whether it knows the number — so signing in can never be used to find out who is on a pharmacy's books. If one number belongs to a household, the app asks for a date of birth rather than guessing whose prescriptions to show.",
  },
  {
    n: 2,
    actor: "Patient app",
    title: "A refill is requested",
    body:
      "The patient picks pickup or delivery. They never choose a date, a time or a slot — scheduling stays with the pharmacy, where it belongs. The order gets a short running number, the one the patient and the pharmacy say out loud on the phone.",
  },
  {
    n: 3,
    actor: "Console",
    title: "It arrives in the pharmacy's own system",
    body:
      "The desktop app collects the request and places it into the dispensing system the pharmacy already uses, then links the two together. Staff carry on working exactly as they did before — no second system to learn, no double entry.",
  },
  {
    n: 4,
    actor: "Pharmacist",
    title: "The prescription is filled and checked",
    body:
      "Ordinary pharmacy work, in the pharmacy's existing software. The desktop app watches for the pharmacist's final check and reports it onward the moment it happens.",
  },
  {
    n: 5,
    actor: "Cloud",
    title: "The patient is told once, when everything is ready",
    body:
      "No notification goes out until every outstanding item for that patient has been checked. One trip, one message — rather than calling someone in for one prescription while another sits unfinished on the bench.",
  },
  {
    n: 6,
    actor: "Delivery app",
    title: "If it is a delivery, the bag is scanned twice",
    body:
      "The driver scans the bag leaving the store, and scans the same bag again at the patient's door. A match unlocks the handover: signature, cash if any is owed, a witness where one is required. A mismatch blocks the job outright, and re-scanning cannot rescue it — it goes back to the pharmacy.",
  },
  {
    n: 7,
    actor: "Console",
    title: "The record goes back into the pharmacy's system",
    body:
      "Completed deliveries are written back where the pharmacy keeps its dispensing history, so the legal record lives where it always has — not locked inside somebody else's platform.",
  },
];

export const ORDER_STATES = [
  { key: "requested", label: "Requested", note: "Patient asks" },
  { key: "received", label: "Received", note: "Pharmacy has it" },
  { key: "in_progress", label: "In progress", note: "Being filled" },
  { key: "ready", label: "Ready", note: "Final-checked" },
] as const;

export const PICKUP_STATES = [{ key: "collected", label: "Collected" }] as const;

export const DELIVERY_STATES = [
  { key: "queued", label: "Queued" },
  { key: "assigned", label: "Assigned" },
  { key: "out_for_delivery", label: "Out for delivery" },
  { key: "delivered", label: "Delivered" },
] as const;

export type Rule = { title: string; body: string };

export const RULES: Rule[] = [
  {
    title: "The pharmacy's network stays sealed",
    body:
      "The desktop app opens no inbound ports. It reaches out to the platform and asks for work — the platform never calls in. There is nothing at the pharmacy for anyone outside to connect to.",
  },
  {
    title: "The dispensing system is read, not rewritten",
    body:
      "MediRx reads what it needs and writes back in only three narrow places: the refill request, pharmacist appointments, and the completed delivery record. Everything else is left exactly as it was.",
  },
  {
    title: "Which pharmacy you belong to is never asked",
    body:
      "No app ever tells the platform which pharmacy it is acting for. That is worked out from who is signed in, on the server — so one pharmacy's data cannot be reached by asking for it.",
  },
  {
    title: "Pickup or delivery, nothing more",
    body:
      "Patients never choose a date, a time or a slot. Scheduling is the pharmacy's call, and the app is not allowed to make promises on its behalf.",
  },
  {
    title: "No card payments, ever",
    body:
      "Amounts are displayed and recorded. Nothing is charged. The platform holds no card details, which removes an entire category of risk from the pharmacy's counter.",
  },
  {
    title: "A delivery cannot skip a step",
    body:
      "No handover without a matching scan, and no scan at the door without a scan at the store. The order is enforced by the platform, not merely by the app — so it holds even if a phone is tampered with.",
  },
];

export const STATS = [
  { figure: "4", label: "apps, one system of record" },
  { figure: "2", label: "scans guarding every delivery" },
  { figure: "0", label: "inbound ports at the pharmacy" },
  { figure: "0", label: "card details stored" },
] as const;
