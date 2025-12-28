import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';
import { deliveryTypes } from '@/content/deliveryTypes';

export const metadata = {
  title: 'Methodology'
};

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        kicker="How we work"
        title="Measure. Design. Implement. Transfer. Prove."
        subtitle="Our methodology combines behavioral science, data design, and gamification—so People & Culture initiatives become measurable systems, not one-off activities."
        primaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
        secondaryCta={{ label: 'Explore Solutions', href: '/solutions' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">Operating principle</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  People initiatives need an operating system
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  We treat People & Culture like a product: define outcomes, measure signals, design the experience, implement the system, transfer capability, and document impact for governance and advocacy.
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-slate-900">What makes it different</div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {[
                      'Behavioral science: we design for real human behavior, not theoretical compliance.',
                      'Data-first: every initiative has measurable signals and a reporting rhythm.',
                      'Gamification with purpose: play is used to increase retention, motivation, and adoption.',
                      'Governance-ready: outputs that leadership can reuse and audit.'
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand-pink" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-950 p-8 text-white shadow-soft">
                  <div className="text-xs font-semibold text-white/70">The loop</div>
                  <div className="mt-2 text-2xl font-semibold">From signals → to adoption → to proof</div>

                  <div className="mt-6 grid gap-3">
                    {deliveryTypes.map((t) => (
                      <div key={t.slug} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <div className="text-sm font-semibold">{t.name}</div>
                            <div className="mt-2 text-sm text-white/70">{t.subheadline}</div>
                          </div>
                          <Link
                            href={`/solutions/delivery/${t.slug}`}
                            className="rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold ring-1 ring-white/10 transition hover:bg-white/15"
                          >
                            Explore
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">Integration layer</div>
                    <div className="mt-2 text-sm text-white/70">
                      Everything connects into the People & Culture Command Center—so leadership has one cockpit and one operating rhythm.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.08))] p-10 ring-1 ring-slate-200/70">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="text-sm font-bold text-slate-900">Ready for a clear starting point?</div>
                <div className="mt-2 text-sm text-slate-600">
                  We’ll recommend the cleanest first module and map how to connect the full ecosystem over time.
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link href="/contact?intent=diagnosis" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                  Book a Diagnosis
                </Link>
                <Link href="/contact?intent=demo" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
