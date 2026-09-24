import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FaqDialog } from "@/components/FaqDialog";
import { Icon, IconTile, type IconName } from "@/components/Icons";
import {
  PhoneFrame,
  ScreenRoute,
  ScreenScan,
  ScreenSignature,
} from "@/components/Illustrations";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Reveal } from "@/components/Reveal";
import { CTA, Eyebrow, H2, Lede, Section } from "@/components/ui";
import {
  DELIVERY_EXTRAS,
  DELIVERY_STEPS,
  DRIVER_STEPS,
  FAQS,
  HERO,
  HOW_STEPS,
  PARTS,
  PLAIN_RULES,
  PROBLEMS,
  REFILL_PROSE,
  type Beat,
} from "@/lib/landing";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <FourParts />
      <Journey />
      <RefillFlow />
      {/* For your drivers: commented out, not deleted — same as Rules. The
          section and DRIVER_STEPS in lib/landing.ts are intact; put this line
          back to restore it. */}
      {/* <DriverFlow /> */}
      {/* Rules and security: commented out, not deleted. The section and its
          copy (PLAIN_RULES in lib/landing.ts) are intact -- put this line back
          to restore it. */}
      {/* <Rules /> */}
      <GetStarted />
    </>
  );
}

/* ========================================================================== */
/* 1. hero                                                                     */
/* ========================================================================== */

function Hero() {
  // The queue is now shown by the counter photograph rather than rendered, so
  // HERO.queue is read by nothing here. It stays in landing.ts for whoever
  // wants the live version back.
  return (
    <div className="relative overflow-hidden bg-night text-night-ink">
      {/* Depth in two quiet layers: a faint dot grid, and one warm light in
          the top corner. The band then ends on a clean edge against the page
          below it -- a soft fade there just read as a smudge. */}
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-72 size-[46rem] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgb(240 112 63 / 0.22) 0%, transparent 62%)",
        }}
        aria-hidden="true"
      />
      {/* The dark band bleeds full width, but its contents sit on the same
          grid as everything else -- so the wordmark in the bar above lines up
          with the headline, and the demo button lines up with the photograph. */}
      <Section className="relative !pb-24 !pt-16 sm:!pb-28 sm:!pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-16">
          <div className="flex flex-col gap-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-night-accent">
              {HERO.eyebrow}
            </p>
            <h1 className="max-w-[15ch] text-balance text-[clamp(38px,5.6vw,58px)] font-semibold leading-[1.03] tracking-[-0.032em]">
              {HERO.headline}
            </h1>
            <p className="max-w-[46ch] text-[clamp(16px,1.8vw,18px)] leading-relaxed text-night-ink-2">
              {HERO.sub}
            </p>

            <div className="mt-1 flex flex-wrap gap-3">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl bg-night-accent px-6 py-3.5 text-[15px] font-semibold text-[#1b1005] shadow-[0_12px_26px_-12px_var(--night-accent)] transition-all hover:-translate-y-px hover:shadow-[0_16px_30px_-12px_var(--night-accent)]"
              >
                Book a demo
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center justify-center rounded-xl border border-night-line px-6 py-3.5 text-[15px] font-semibold text-night-ink transition-colors hover:border-night-accent/60 hover:bg-white/5"
              >
                See how it works
              </Link>
            </div>

            {/* One quiet line, not a stack. The proof numbers that used to sit
                here are each made properly further down the page, where they
                have the context to mean something. */}
            <ul className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[13.5px] text-night-muted">
              {HERO.trust.map((t) => (
                <li
                  key={t}
                  // The separator trails its own item rather than leading the
                  // next one, so a wrap leaves the dot at the end of a line
                  // instead of stranding it at the start of the one below.
                  className="after:ml-2.5 after:text-night-line after:content-['\00B7'] last:after:hidden"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* the counter itself: the pharmacist handing over, the patient's
              phone, and the delivery already on its way */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 55% at 50% 45%, rgb(240 112 63 / 0.18) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <Image
              src="/hero-counter.png"
              alt="A pharmacist hands a MediRx bag across the counter while the patient requests a refill in the app, with the delivery already tracked as out for delivery."
              width={1448}
              height={1086}
              priority
              // The column tops out at ~640px once the 1240px grid is full, so
              // past that width a bigger file buys nothing.
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
              className="relative w-full rounded-2xl border border-night-line shadow-[0_34px_70px_-34px_rgb(0_0_0/0.85)]"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ========================================================================== */
/* 2. the problem                                                              */
/* ========================================================================== */

function Problem() {
  // Four passes of the set. The track slides half its width, so passes 3 and 4
  // land exactly where 1 and 2 started and the loop never shows a seam; four
  // rather than two is what keeps an ultrawide screen full at every moment.
  const track = [...PROBLEMS, ...PROBLEMS, ...PROBLEMS, ...PROBLEMS];

  return (
    <div className="py-12 sm:py-14">
      <Section space="tight" className="!py-0">
        <Reveal className="mx-auto flex max-w-[46rem] flex-col items-center gap-5 text-center">
          <Eyebrow>The day as it is now</Eyebrow>
          {/* Sized up from the default: a small heading over a strip running
              the full width of the window looked like a caption for it. */}
          <h2 className="max-w-[22ch] text-balance text-[clamp(30px,4.2vw,44px)] font-semibold leading-[1.08] tracking-[-0.028em]">
            Three things every pharmacy puts up with
          </h2>
          <p className="max-w-[52ch] text-[17px] leading-relaxed text-ink-2">
            None of them are anyone&rsquo;s fault. They are just what happens
            when the only way to ask a question is to pick up the phone.
          </p>
        </Reveal>
      </Section>

      {/* Deliberately outside the reading column: the strip runs the full width
          of the window and keeps moving past both edges, which reads as "this
          goes on all day" far better than three cards sitting still. */}
      <Reveal className="mt-12">
        <div className="marquee-viewport overflow-hidden">
          <ul className="marquee gap-5 px-2.5 pb-1">
            {track.map((p, i) => (
              <li
                key={`${p.title}-${i}`}
                className="w-[19rem] shrink-0 sm:w-[21.5rem]"
                // Only the first pass is announced; the rest are the same three
                // cards again and would just repeat themselves to a reader.
                aria-hidden={i >= PROBLEMS.length ? true : undefined}
              >
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <IconTile name={p.icon} tone="neutral" />
                  <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed text-ink-2">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Section space="tight" className="!py-0">
        <Reveal>
          {/* The answer to the three cards, so it gets the weight of a
              statement rather than trailing off as a caption under them. */}
          <p className="mx-auto mt-14 max-w-[26ch] text-balance text-center text-[clamp(22px,3vw,30px)] font-semibold leading-[1.2] tracking-[-0.022em]">
            MediRx fixes all three{" "}
            <span className="text-accent">
              without changing how your team works.
            </span>
          </p>
        </Reveal>
      </Section>
    </div>
  );
}

/* ========================================================================== */
/* 3. one system, four parts                                                   */
/* ========================================================================== */

function FourParts() {
  return (
    <div className="border-y border-line bg-tint-cool">
      <Section id="parts" space="tight" className="scroll-mt-20">
        {/* Eyebrow and heading only. The explanation that used to sit here is
            made better by the panel below it, which shows each app rather than
            describing the set. */}
        <Reveal className="mx-auto flex max-w-[46rem] flex-col items-center gap-3.5 text-center">
          <Eyebrow>One system, three apps</Eyebrow>
          <h2 className="max-w-[18ch] text-balance text-[clamp(28px,3.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.028em]">
            Three apps, for three kinds of people
          </h2>
        </Reveal>

        <Reveal className="mt-9">
          <AppsShowcase parts={PARTS.filter((part) => !part.isHub)} />
        </Reveal>
      </Section>
    </div>
  );
}

/**
 * A glimpse of the screen behind each part. Small, flat, and in the part's own
 * hue — enough to tell a console from a phone from a delivery at a glance,
 * without pretending to be a screenshot.
 */

/* ========================================================================== */
/* 4. how the system works                                                     */
/* ========================================================================== */


/* ========================================================================== */
/* 5. patient refill flow                                                      */
/* ========================================================================== */

function RefillFlow() {
  return (
    <div className="border-y border-line bg-tint-warm">
      <Section space="tight">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal className="flex min-w-0 flex-col gap-5">
            <Eyebrow>For your patients</Eyebrow>
            <h2 className="max-w-[13ch] text-balance text-[clamp(30px,4.4vw,46px)] font-semibold leading-[1.04] tracking-[-0.032em]">
              A refill, without the phone call
            </h2>

            {/* Prose, not a numbered list -- these four steps are a short story
                about one refill, and the photograph beside them already numbers
                the stages. */}
            <div className="flex max-w-[50ch] flex-col gap-4">
              {REFILL_PROSE.map((para, i) => (
                <p
                  key={para.slice(0, 24)}
                  className={`leading-relaxed ${
                    i === 0 ? "text-[16.5px] text-ink-2" : "text-[15.5px] text-ink-2"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

          </Reveal>

          {/* Used whole: unlike the Get started artwork, this frame is all
              photograph -- the four stages are labelled inside the scene, so
              there is no baked-in copy competing with the text beside it. */}
          <Reveal className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src="/refill-counter.webp"
                alt="A patient taps Request refill on her phone at the counter while the pharmacist works the MediRx order queue, with the four stages labelled above: verify, choose, we prepare, get notified."
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}



/* ========================================================================== */
/* 6. delivery safety                                                          */
/* ========================================================================== */

/* ========================================================================== */
/* 4. how it works + delivery safety                                           */
/* ========================================================================== */

function Journey() {
  return (
    <div id="how" className="relative scroll-mt-20 overflow-hidden border-y border-line">
      <div className="journey-mesh pointer-events-none absolute inset-0" aria-hidden="true" />

      <Section className="relative" space="tight">
        <Reveal className="mx-auto flex max-w-[44rem] flex-col items-center gap-4 text-center">
          <h2 className="max-w-[18ch] text-balance text-[clamp(30px,4.2vw,44px)] font-semibold leading-[1.06] tracking-[-0.03em]">
            From a tap on a phone to a bag in a hand
          </h2>
          <p className="max-w-[50ch] text-[16.5px] leading-relaxed text-ink-2">
            Four steps. Everything else is detail. And the wrong bag cannot be
            handed over.
          </p>
        </Reveal>

        {/* The journey and the guard on it, side by side. They were two
            sections; read together they are one story -- what happens, and what
            stops it going wrong. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7">
          <Reveal>
            <JourneyCard
              icon="route"
              cornerIcon="van"
              title="How it works"
              sub="Four steps. Everything else is detail."
              steps={HOW_STEPS.map((s, i) => ({ ...s, mark: String(i + 1) }))}
            />
          </Reveal>

          <Reveal delay={110}>
            <JourneyCard
              icon="scan"
              cornerIcon="shield"
              title="Delivery safety"
              sub="The wrong bag cannot be handed over."
              steps={DELIVERY_STEPS.map((s, i) => ({
                ...s,
                mark: i === DELIVERY_STEPS.length - 1 ? "!" : String(i + 1),
                alarm: i === DELIVERY_STEPS.length - 1,
              }))}
              chips={DELIVERY_EXTRAS}
            />
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

type JourneyStep = Beat & { mark: string; alarm?: boolean };

function JourneyCard({
  icon,
  cornerIcon,
  title,
  sub,
  steps,
  chips,
}: {
  icon: IconName;
  cornerIcon: IconName;
  title: string;
  sub: string;
  steps: JourneyStep[];
  chips?: readonly Beat[];
}) {
  return (
    <div className="relative h-full">
      {/* The two badges break the card's corners, which is what stops a plain
          white panel from looking like a table. */}
      <span
        className="absolute -left-3 -top-3 z-10 grid size-12 place-items-center rounded-2xl bg-accent text-accent-ink shadow-[0_12px_26px_-14px_rgb(36_28_25/0.7)] sm:-left-5 sm:-top-5"
        aria-hidden="true"
      >
        <Icon name={icon} size={21} />
      </span>
      <span
        className="absolute -bottom-3 -right-3 z-10 grid size-12 place-items-center rounded-2xl bg-accent text-accent-ink shadow-[0_12px_26px_-14px_rgb(36_28_25/0.7)] sm:-bottom-5 sm:-right-5"
        aria-hidden="true"
      >
        <Icon name={cornerIcon} size={21} />
      </span>

      <div className="flex h-full flex-col rounded-3xl border border-line bg-surface/85 p-6 shadow-[0_26px_60px_-38px_rgb(36_28_25/0.5)] backdrop-blur-sm sm:p-8">
        <div className="flex items-center gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent-tint text-accent">
            <Icon name={icon} size={20} />
          </span>
          <span>
            <span className="block text-[17.5px] font-semibold tracking-[-0.018em]">
              {title}
            </span>
            <span className="block text-[13.5px] text-muted">{sub}</span>
          </span>
        </div>

        <ol className="mt-5 flex flex-col">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`flex gap-3.5 py-3.5 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <span
                className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg text-[12px] font-bold ${
                  step.alarm
                    ? "bg-accent text-accent-ink"
                    : "bg-accent-tint text-accent"
                }`}
              >
                {step.mark}
              </span>
              <span className="min-w-0">
                <span
                  className={`block text-[15.5px] font-semibold tracking-[-0.012em] ${
                    step.alarm ? "text-accent" : ""
                  }`}
                >
                  {step.title}
                </span>
                <span className="mt-1 block text-[14.5px] leading-relaxed text-ink-2">
                  {step.body}
                </span>
              </span>
            </li>
          ))}
        </ol>

        {chips && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-5">
            {chips.map((c) => (
              <li
                key={c.title}
                title={c.body}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-raised px-3 py-1.5 text-[12.5px] font-medium text-ink-2"
              >
                <span className="text-accent">
                  <Icon name={c.icon} size={13} />
                </span>
                {c.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


/* ========================================================================== */
/* 7. driver app                                                               */
/* ========================================================================== */

// Currently not rendered -- see the commented <DriverFlow /> in Home().
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DriverFlow() {
  return (
    <div className="border-y border-line bg-tint-cool">
      <Section>
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>For your drivers</Eyebrow>
          <H2 className="max-w-[22ch]">A run that builds itself</H2>
          <Lede>
            Nothing is assigned in advance. The driver scans what they are
            actually taking, and the route is exactly that &mdash; never a list
            somebody hoped matched the vehicle.
          </Lede>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-end justify-center gap-5">
            <PhoneFrame>
              <ScreenScan />
            </PhoneFrame>
            <PhoneFrame className="hidden sm:block">
              <ScreenRoute />
            </PhoneFrame>
            <PhoneFrame className="hidden lg:block">
              <ScreenSignature />
            </PhoneFrame>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DRIVER_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <IconTile name={s.icon} />
                <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.015em]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-line bg-surface p-7">
            <p className="max-w-[72ch] text-[15.5px] leading-relaxed text-ink-2">
              <strong className="text-ink">Joining and leaving.</strong> Drivers
              can apply from the app, and you approve them &mdash; an application
              on its own cannot sign in anywhere. If a driver deletes their
              account, their name and sign-in go, but the delivery records stay
              with you, because those are your dispensing history.
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

/* ========================================================================== */
/* 8. rules and security                                                       */
/* ========================================================================== */

// Currently not rendered -- see the commented <Rules /> in Home().
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Rules() {
  return (
    <Section id="security" className="scroll-mt-20" space="tight">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-accent bg-accent-tint">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
            <div className="text-[clamp(76px,13vw,132px)] font-semibold leading-[0.85] tracking-[-0.05em] text-accent">
              0
            </div>
            <div>
              <H2 className="max-w-[24ch]">
                Ports opened on your pharmacy&rsquo;s network
              </H2>
              <p className="mt-4 max-w-[58ch] text-[16.5px] leading-relaxed text-ink-2">
                This is the one your IT person cares about. Installing MediRx
                does not mean exposing a machine, forwarding a port or writing a
                firewall rule. The desktop app reaches out and asks whether there
                is work for it &mdash; there is no way to call in, by design
                rather than by configuration.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-14 flex flex-col gap-4">
        <Eyebrow>Non-negotiables</Eyebrow>
        <H2>Rules we build to, and do not bend</H2>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PLAIN_RULES.map((r, i) => (
          <Reveal key={r.title} delay={i * 70}>
            <div className="h-full rounded-2xl border border-line bg-surface p-7">
              <IconTile name={r.icon} tone="neutral" />
              <h3 className="mt-5 text-[16.5px] font-semibold tracking-[-0.015em]">
                {r.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">
                {r.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 flex justify-center">
        <CTA href="/security" variant="ghost">
          The detail for IT teams
        </CTA>
      </Reveal>
    </Section>
  );
}

/* ========================================================================== */
/* 9. FAQ                                                                      */
/* ========================================================================== */


/* ========================================================================== */
/* 10. contact                                                                 */
/* ========================================================================== */

function GetStarted() {
  return (
    <div className="border-t border-line bg-tint-cool">
      <Section id="demo" className="scroll-mt-20" space="normal">
        <Reveal>
          {/* Back inside a frame. Run edge to edge, the dark half met the dark
              footer with no boundary between them and the two columns had
              nothing holding their heights together -- the band just ended
              wherever its taller side did. A card gives it both. */}
          <div className="grid overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_70px_-40px_rgb(36_28_25/0.45)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
            {/* ---- the form ------------------------------------------ */}
            <div className="bg-surface p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
                  Book a demo
                </h3>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent-tint px-3 py-1.5 text-[12.5px] font-semibold text-accent">
                  <Icon name="clock" size={13} />
                  40 min
                </span>
              </div>
              <ContactForm />
            </div>

            {/* ---- the pitch, on the dark surface -------------------- */}
            <div className="relative overflow-hidden bg-night p-8 text-night-ink sm:p-10">
              {/* the hero's two layers, so every dark block on the page is
                  plainly the same surface */}
              <div
                className="hero-grid pointer-events-none absolute inset-0"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-28 -top-32 size-[26rem] rounded-full opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgb(240 112 63 / 0.22) 0%, transparent 62%)",
                }}
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-night-accent">
                  Get started
                </p>
                <h2 className="mt-3 max-w-[13ch] text-balance text-[clamp(28px,3.4vw,38px)] font-semibold leading-[1.05] tracking-[-0.03em]">
                  See it with your own prescriptions
                </h2>
                <p className="mt-3.5 max-w-[38ch] text-[15.5px] leading-relaxed text-night-ink-2">
                  Forty minutes against a test store &mdash; a patient requests
                  a refill, your team fills it, a driver delivers it.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "40-minute demo, no obligation",
                    "No changes to your current setup",
                    "Your IT team is welcome on the call",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[15px]">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-night-accent/20 text-night-accent">
                        <Icon name="check" size={12} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>

                {/* mt-auto: the form is the taller column, and this pins the
                    strip to the bottom instead of leaving a void under it */}
                <div className="mt-auto pt-8">
                  <div className="rounded-2xl border border-night-line bg-white/[0.04] p-5">
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-night-muted">
                      What you&rsquo;ll see
                    </p>
                    <ol className="mt-3 flex flex-wrap items-center gap-2">
                      {(
                        [
                          ["phone", "Refill request"],
                          ["monitor", "Team fills it"],
                          ["van", "Driver delivers"],
                        ] as const
                      ).map(([icon, label], i) => (
                        <li key={label} className="flex items-center gap-2">
                          {i > 0 && (
                            <span className="text-night-muted" aria-hidden="true">
                              <Icon name="arrow" size={13} />
                            </span>
                          )}
                          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[12.5px] font-semibold text-ink">
                            <span className="text-accent">
                              <Icon name={icon} size={13} />
                            </span>
                            {label}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6 flex justify-center">
          <FaqDialog items={FAQS} />
        </Reveal>
      </Section>
    </div>
  );
}









/* ========================================================================== */
/* shared                                                                      */
/* ========================================================================== */

