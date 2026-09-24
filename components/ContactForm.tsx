"use client";

import { useState } from "react";

/**
 * The site is a static export, so there is no server to post to. Until a real
 * endpoint exists this composes a mail message instead -- which works
 * everywhere and, more importantly, cannot silently swallow an enquiry the way
 * a form wired to nothing would.
 *
 * TODO: replace with a real submission once the enquiry address and endpoint
 * are confirmed. Only this component needs to change.
 */
const ENQUIRY_ADDRESS = "hello@medirx.app";

/**
 * Placeholders are examples, not labels repeated in grey -- a placeholder that
 * restates its own label tells the reader nothing, while "e.g. Kroll,
 * PharmaClik Rx" tells them what kind of answer is wanted.
 */
const FIELDS = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    required: true,
    placeholder: "First and last name",
  },
  {
    name: "pharmacy",
    label: "Pharmacy",
    type: "text",
    required: true,
    placeholder: "Westside Pharmacy",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@pharmacy.ca",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: false,
    placeholder: "604 555 0142",
  },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Pharmacy: ${get("pharmacy")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      `Dispensing system: ${get("system") || "—"}`,
      "",
      get("message") || "(no message)",
    ].join("\n");

    window.location.href = `mailto:${ENQUIRY_ADDRESS}?subject=${encodeURIComponent(
      `Demo request — ${get("pharmacy") || get("name")}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <label key={f.name} className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-ink-2">
              {f.label}
              {!f.required && <span className="text-muted"> (optional)</span>}
            </span>
            <input
              name={f.name}
              type={f.type}
              required={f.required}
              placeholder={f.placeholder}
              autoComplete="off"
              className="rounded-lg border border-line bg-ground px-3.5 py-2 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-medium text-ink-2">
          Which dispensing system do you run?{" "}
          <span className="text-muted">(optional)</span>
        </span>
        <input
          name="system"
          type="text"
          placeholder="e.g. Kroll, PharmaClik Rx"
          autoComplete="off"
          className="rounded-lg border border-line bg-ground px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-medium text-ink-2">
          Anything else? <span className="text-muted">(optional)</span>
        </span>
        <textarea
          name="message"
          rows={3}
          placeholder="Number of locations, delivery volume, questions…"
          className="resize-y rounded-lg border border-line bg-ground px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
        />
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-[15.5px] font-semibold text-accent-ink transition-all hover:-translate-y-px hover:opacity-95"
      >
        Request a demo
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h15m-6-6 6 6-6 6" />
        </svg>
      </button>

      <p
        className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
        aria-live="polite"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className="mt-[3px] shrink-0"
          aria-hidden="true"
        >
          <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        {sent
          ? "Your mail app should have opened with the message ready to send."
          : `This opens your mail app with the details filled in, addressed to ${ENQUIRY_ADDRESS}.`}
      </p>
    </form>
  );
}
