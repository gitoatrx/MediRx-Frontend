import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CTA, Eyebrow, FeatureList, H2, Lede, Section } from "@/components/ui";
import { PRODUCTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The four pieces of MediRx: the Cloud that holds the record, the Console inside the pharmacy, the patient app, and the driver app.",
};

export default function PlatformPage() {
  return (
    <>
      <Section className="!pb-8">
        <div className="flex max-w-[48rem] flex-col gap-5">
          <Eyebrow>Platform</Eyebrow>
          <h1 className="text-balance text-[clamp(30px,4.6vw,46px)] font-semibold leading-[1.08] tracking-[-0.028em]">
            Four pieces, each with one job
          </h1>
          <Lede>
            Nothing here is a general-purpose tool bent into shape. Each piece
            does one thing, for one kind of person, and hands the rest to the
            platform.
          </Lede>
        </div>
      </Section>

      <Section className="!py-0">
        <ArchitectureDiagram />
      </Section>

      {PRODUCTS.map((p, i) => (
        <Section key={p.slug} id={p.slug} className={i === 0 ? "" : "!pt-4"}>
          <div className="scroll-mt-24 rounded-2xl border border-line bg-surface p-7 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
              <div className="flex flex-col gap-4">
                <Eyebrow>{p.kind}</Eyebrow>
                <H2>{p.name}</H2>
                <p className="max-w-[58ch] text-[16px] leading-relaxed text-ink-2">
                  {p.blurb}
                </p>

                <dl className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                      Where it runs
                    </dt>
                    <dd className="mt-1 text-[15px] text-ink-2">{p.where}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                      Who uses it
                    </dt>
                    <dd className="mt-1 text-[15px] text-ink-2">{p.audience}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                      Built with
                    </dt>
                    <dd className="mt-1 font-mono text-[13px] text-accent">
                      {p.built}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-xl border border-line bg-raised p-6">
                <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
                  What it does
                </h3>
                <FeatureList items={p.features} />
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="!pt-6">
        <div className="rounded-2xl border border-line bg-surface px-7 py-12 text-center sm:px-12">
          <H2 className="mx-auto max-w-[26ch]">
            Want to see it running in a real pharmacy?
          </H2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTA href="/contact#demo">Book a demo</CTA>
            <CTA href="/how-it-works" variant="ghost">
              Follow an order end to end
            </CTA>
          </div>
        </div>
      </Section>
    </>
  );
}
