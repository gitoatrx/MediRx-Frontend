import type { Metadata } from "next";
import { CTA, Eyebrow, H2, Lede, Section } from "@/components/ui";
import { RULES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Security",
  description:
    "No inbound ports at the pharmacy. No card details stored. A delivery that cannot skip a step. The rules MediRx is built to — and why each one exists.",
};

const POSTURE = [
  {
    title: "Nothing to connect to",
    body: "The desktop app inside the pharmacy listens on no port. It makes outbound requests and waits for answers. An attacker on the internet has no door to knock on, because there isn't one.",
  },
  {
    title: "Your records stay yours",
    body: "The dispensing system remains the pharmacy's system of record for dispensing history. MediRx reads what it needs and writes back in three narrow places — it does not take custody of your data.",
  },
  {
    title: "Signing in proves nothing about you",
    body: "A patient proves their phone number before the pharmacy is asked anything at all. So the sign-in screen cannot be used to discover whether a given number is one of your patients.",
  },
  {
    title: "Live updates are scoped",
    body: "Real-time connections are limited to the conversations a signed-in user is entitled to. A client cannot listen to a room it was not given.",
  },
  {
    title: "Chain of custody, or nothing",
    body: "Where a scan's location is unavailable, none is recorded — rather than a placeholder that would put a delivery in the wrong hemisphere and quietly corrupt the trail.",
  },
  {
    title: "Leaving is part of the design",
    body: "A driver can delete their account from the app. Their name and sign-in go; the delivery records stay, unnamed, because those are the pharmacy's legal dispensing history.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Section className="!pb-8">
        <div className="flex max-w-[48rem] flex-col gap-5">
          <Eyebrow>Security</Eyebrow>
          <h1 className="text-balance text-[clamp(30px,4.6vw,46px)] font-semibold leading-[1.08] tracking-[-0.028em]">
            Built so there is nothing to break into
          </h1>
          <Lede>
            Most of what follows is not a feature we added. It is a shape we
            chose at the start and have refused to bend since &mdash; which is
            the only kind of security guarantee worth putting on a website.
          </Lede>
        </div>
      </Section>

      {/* ---- the headline claim ----------------------------------------- */}
      <Section className="!pt-2">
        <div className="rounded-2xl border border-accent bg-accent-tint p-7 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <div className="text-[clamp(64px,10vw,104px)] font-semibold leading-none tracking-[-0.04em] text-accent">
              0
            </div>
            <div>
              <H2 className="max-w-[24ch]">
                Inbound ports opened at the pharmacy
              </H2>
              <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-ink-2">
                This is the one that matters most to whoever looks after your
                network. Adding MediRx does not mean forwarding a port, writing
                a firewall exception, or exposing a machine. The desktop app
                reaches out on its own and asks whether there is work for it.
                The platform has no way of calling in, by design &mdash; not by
                configuration.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- posture ---------------------------------------------------- */}
      <Section className="!pt-4">
        <div className="flex flex-col gap-4">
          <Eyebrow>How it holds up</Eyebrow>
          <H2>Six decisions that do the heavy lifting</H2>
        </div>
        <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {POSTURE.map((p) => (
            <div key={p.title} className="bg-surface p-6">
              <h3 className="text-[16px] font-semibold tracking-[-0.012em]">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---- the rules --------------------------------------------------- */}
      <Section id="rules" className="scroll-mt-24 !pt-4">
        <div className="flex flex-col gap-4">
          <Eyebrow>Non-negotiables</Eyebrow>
          <H2>The rules everything follows</H2>
          <Lede>
            These are not preferences. Every part of the platform is written to
            them, and a change that breaks one does not ship.
          </Lede>
        </div>

        <dl className="mt-9 overflow-hidden rounded-xl border border-line bg-surface">
          {RULES.map((rule, i) => (
            <div
              key={rule.title}
              className={`grid gap-2 p-6 sm:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] sm:gap-8 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <dt className="text-[16px] font-semibold tracking-[-0.012em]">
                {rule.title}
              </dt>
              <dd className="text-[15px] leading-relaxed text-ink-2">
                {rule.body}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="!pt-2">
        <div className="rounded-2xl border border-line bg-surface px-7 py-12 text-center sm:px-12">
          <H2 className="mx-auto max-w-[28ch]">
            Send us your IT team&rsquo;s questions
          </H2>
          <p className="mx-auto mt-4 max-w-[54ch] text-[16px] leading-relaxed text-ink-2">
            We would rather answer the hard ones early than discover them during
            an install.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href="/contact">Get in touch</CTA>
            <CTA href="/how-it-works" variant="ghost">
              See the delivery guard
            </CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
