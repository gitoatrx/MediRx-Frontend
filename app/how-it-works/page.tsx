import type { Metadata } from "next";
import { Card, CTA, Eyebrow, H2, Lede, Section } from "@/components/ui";
import {
  DELIVERY_STATES,
  FLOW,
  ORDER_STATES,
  PICKUP_STATES,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Follow a prescription from the moment a patient asks for a refill to the moment it reaches their door — and back into the pharmacy's own records.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Section className="!pb-8">
        <div className="flex max-w-[48rem] flex-col gap-5">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="text-balance text-[clamp(30px,4.6vw,46px)] font-semibold leading-[1.08] tracking-[-0.028em]">
            One refill, start to finish
          </h1>
          <Lede>
            Seven steps, from a patient tapping a button to a signed delivery
            landing back in the pharmacy&rsquo;s own records. Nothing skips, and
            nothing is taken on trust.
          </Lede>
        </div>
      </Section>

      {/* ---- the steps -------------------------------------------------- */}
      <Section className="!pt-4">
        <ol className="flex flex-col">
          {FLOW.map((step, i) => (
            <li key={step.n} className="relative grid gap-5 sm:grid-cols-[auto_1fr]">
              {/* the rail */}
              <div className="flex flex-col items-center">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-accent bg-accent-tint text-[15px] font-semibold text-accent">
                  {step.n}
                </span>
                {i < FLOW.length - 1 && (
                  <span className="w-px flex-1 bg-line" aria-hidden="true" />
                )}
              </div>

              <div className={i < FLOW.length - 1 ? "pb-10" : ""}>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                  {step.actor}
                </p>
                <h2 className="mt-1.5 text-[20px] font-semibold tracking-[-0.018em]">
                  {step.title}
                </h2>
                <p className="mt-2.5 max-w-[64ch] text-[16px] leading-relaxed text-ink-2">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---- the two-scan guard ----------------------------------------- */}
      <Section className="!pt-0">
        <div className="rounded-2xl border border-accent bg-accent-tint p-7 sm:p-10">
          <Eyebrow>The two-scan guard</Eyebrow>
          <H2 className="mt-3 max-w-[22ch]">
            The wrong prescription cannot be handed over
          </H2>
          <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-ink-2">
            The same bag is scanned twice: once leaving the store, once at the
            door. Those two scans bracket the delivery, which is what makes it
            impossible to close a job with the wrong bag.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ScanCard
              step="Scan one"
              title="Leaving the store"
              body="The driver scans everything going into the vehicle. The run assembles itself from those scans, so the list is exactly what is physically on board."
            />
            <ScanCard
              step="Scan two"
              title="At the door"
              body="The same code is scanned again. Only a match against this patient unlocks the handover — signature, cash if owed, witness where required."
            />
            <ScanCard
              step="If they disagree"
              title="The job stops"
              body="A mismatch blocks the delivery outright. Re-scanning cannot rescue it; it is resolved with the pharmacy. The platform enforces this, not just the app."
              alarm
            />
          </div>
        </div>
      </Section>

      {/* ---- lifecycle --------------------------------------------------- */}
      <Section id="lifecycle" className="scroll-mt-24 !pt-4">
        <div className="flex flex-col gap-4">
          <Eyebrow>An order&rsquo;s life</Eyebrow>
          <H2>Every order moves through the same states</H2>
          <Lede>
            Up to the moment it is ready, every order looks the same. Then it
            forks: collected at the counter, or carried to a door.
          </Lede>
        </div>

        <div className="mt-9 flex flex-col gap-5">
          <Track states={ORDER_STATES} label="Every order" />
          <div className="grid gap-5 lg:grid-cols-2">
            <Track states={PICKUP_STATES} label="Pickup" branch />
            <Track states={DELIVERY_STATES} label="Delivery" branch />
          </div>
        </div>

        <Card className="mt-8">
          <p className="text-[15px] leading-relaxed text-ink-2">
            <strong className="text-ink">A delivery has its own clock.</strong>{" "}
            One order has one delivery job, but the two move at different
            speeds &mdash; an order can be ready long before a driver is free to
            take it. Tracking them separately is what keeps the pharmacy&rsquo;s
            queue honest.
          </p>
        </Card>
      </Section>

      <Section className="!pt-2">
        <div className="rounded-2xl border border-line bg-surface px-7 py-12 text-center sm:px-12">
          <H2 className="mx-auto max-w-[26ch]">
            See it with your own prescriptions
          </H2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[16px] leading-relaxed text-ink-2">
            We will walk your team through the whole flow against a test store,
            end to end, in under an hour.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href="/contact#demo">Book a demo</CTA>
            <CTA href="/security" variant="ghost">
              Read the security model
            </CTA>
          </div>
        </div>
      </Section>
    </>
  );
}

function ScanCard({
  step,
  title,
  body,
  alarm = false,
}: {
  step: string;
  title: string;
  body: string;
  alarm?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border bg-surface p-6 ${
        alarm ? "border-accent" : "border-line"
      }`}
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
        {step}
      </p>
      <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.015em]">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{body}</p>
    </div>
  );
}

function Track({
  states,
  label,
  branch = false,
}: {
  states: readonly { key: string; label: string; note?: string }[];
  label: string;
  branch?: boolean;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
        {label}
      </p>
      <div className="flex flex-wrap items-stretch gap-2">
        {states.map((s, i) => (
          <div key={s.key} className="flex items-center gap-2">
            <div
              className={`rounded-lg border px-3.5 py-2.5 ${
                branch && i === states.length - 1
                  ? "border-accent bg-accent-tint"
                  : "border-line bg-raised"
              }`}
            >
              <div className="font-mono text-[12.5px] font-semibold text-ink">
                {s.label}
              </div>
              {s.note && (
                <div className="mt-0.5 text-[11.5px] text-muted">{s.note}</div>
              )}
            </div>
            {i < states.length - 1 && (
              <span className="text-[14px] text-muted" aria-hidden="true">
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
