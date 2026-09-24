import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, H2, Lede, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo of MediRx, or send your IT team's questions about how it connects to your dispensing system.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="!pb-6">
        <div className="flex max-w-[48rem] flex-col gap-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-balance text-[clamp(30px,4.6vw,46px)] font-semibold leading-[1.08] tracking-[-0.028em]">
            Let&rsquo;s talk about your pharmacy
          </h1>
          <Lede>
            Tell us which dispensing system you run and roughly how many
            prescriptions go out a day. That is usually enough for us to say
            something useful on the first call.
          </Lede>
        </div>
      </Section>

      <Section id="demo" className="scroll-mt-24 !pt-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
            <H2 className="!text-[24px]">Book a demo</H2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
              About forty minutes, against a test store. We walk the whole flow
              &mdash; a patient requests a refill, your team fills it, a driver
              delivers it &mdash; and you see exactly what your staff would see.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-line bg-surface p-6">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                What to expect
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-ink-2">
                <li>
                  <strong className="text-ink">No migration.</strong> MediRx
                  works alongside the dispensing system you already run.
                </li>
                <li>
                  <strong className="text-ink">No network changes.</strong>{" "}
                  Nothing to open, forward or expose.
                </li>
                <li>
                  <strong className="text-ink">Your branding.</strong> The
                  patient app carries your pharmacy&rsquo;s name and colours.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-raised p-6">
              <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                For IT teams
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                Happy to go straight into the detail &mdash; where the desktop
                app installs, what it connects to, what it reads and the three
                places it writes. Ask and we will send it before the call.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
