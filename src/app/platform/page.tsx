import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { productBySlug } from '@/content/products';
import { Reveal } from '@/components/effects/reveal';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Platform'
};

export default function PlatformPage() {
  const platform = productBySlug.get('people-culture-command-center');

  return (
    <>
      <PageHero
        kicker="Flagship Platform"
        title="The People & Culture Command Center"
        subtitle="A unified cockpit that consolidates signals, measurement outputs, and activation levers across the People & Culture ecosystem—so leadership can see what is working, what is drifting, and what to do next."
        primaryCta={{ label: 'Request a Demo', href: '/contact?intent=demo' }}
        secondaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Badge className="w-fit bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.10))] text-slate-800">
                  Why a command center?
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Run People & Culture as an integrated system—not isolated projects
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Most organizations operate initiatives as separate campaigns with separate dashboards and no clear operating rhythm.
                  The Command Center connects domains (IC, EX, EE, Culture, EB) into one measurable ecosystem with governance-ready reporting.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/solutions" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                    Explore Solutions
                  </Link>
                  <Link href="/products" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5">
                    Browse Products
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-slate-900">What it brings together</div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'Signals',
                        desc: 'Pulses, diagnostics, journey metrics, program participation, and qualitative insights.'
                      },
                      {
                        title: 'Domains',
                        desc: 'Internal Communication, Experience, Engagement, Culture, Employer Branding.'
                      },
                      {
                        title: 'Interventions',
                        desc: 'What to activate next—based on evidence, not opinions.'
                      },
                      {
                        title: 'Governance',
                        desc: 'Operating cadence, leadership views, and audit-friendly exports.'
                      }
                    ].map((b) => (
                      <div key={b.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
                        <div className="text-sm font-semibold text-slate-900">{b.title}</div>
                        <div className="mt-2 text-sm text-slate-600">{b.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-[linear-gradient(135deg,rgba(12,85,74,0.08),rgba(246,119,130,0.06))] p-5 ring-1 ring-slate-200/70">
                    <div className="text-sm font-semibold text-slate-900">Outcome-led by design</div>
                    <div className="mt-2 text-sm text-slate-600">
                      Each view is anchored to measurable outcomes: Attraction, Retention, Performance, Engagement, Advocacy, and Compliance.
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
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-sm font-bold text-brand-green">Capabilities</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  What you get
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  A leadership cockpit—plus the blueprint for how measurement and interventions connect across your People ecosystem.
                </p>
              </div>
              <Link href="/contact?intent=demo" className="hidden rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 md:inline-flex">
                Request demo
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {(platform?.whatYouGet ?? []).map((x) => (
              <div key={x} className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-slate-900">{x}</div>
                <div className="mt-2 text-sm text-slate-600">
                  Designed to be enterprise-ready: governance, segmentation, and decision-ready views.
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/contact?intent=demo" className="inline-flex rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              Request demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
