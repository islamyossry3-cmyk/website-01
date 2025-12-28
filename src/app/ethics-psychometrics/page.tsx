import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';

export const metadata = {
  title: 'Psychometrics Ethics'
};

export default function EthicsPsychometricsPage() {
  return (
    <>
      <PageHero
        kicker="Ethics"
        title="Psychometrics Ethics & Responsible Use"
        subtitle="We use behavioral science to design adoption and measure signals responsibly—with transparent intent, appropriate governance, and respect for employee dignity."
        primaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
        secondaryCta={{ label: 'Security & Data', href: '/security' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">Our stance</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Human-centered measurement, not surveillance
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  The goal of measurement is to improve systems—not to punish individuals. We design programs to produce cohort-level insight and actionable interventions while preserving trust.
                </p>
              </div>

              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {[
                  { t: 'Transparency', d: 'Employees deserve clarity about what is measured, why, and how it will be used.' },
                  { t: 'Proportionality', d: 'Collect only what is needed for the intended outcome and operating model.' },
                  { t: 'Fairness', d: 'Avoid biased proxies and ensure interpretation respects context and diversity.' },
                  { t: 'Accountability', d: 'Measurement should lead to system improvements with clear ownership and governance.' }
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                    <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                    <div className="mt-2 text-sm text-slate-600">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                t: 'Cohort-first reporting',
                d: 'Where possible, dashboards focus on cohort and team patterns rather than individual profiling.'
              },
              {
                t: 'Consent & disclosure',
                d: 'Programs can include clear disclosures, opt-in choices (where applicable), and communication templates.'
              },
              {
                t: 'Interpretation safeguards',
                d: 'We support action models that prevent misinterpretation and reduce “data theater.”'
              },
              {
                t: 'Governance rhythm',
                d: 'Evidence → action → follow-up measurement. If insight doesn’t trigger action, it isn’t useful.'
              }
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                <div className="mt-2 text-sm text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 p-10 text-white">
            <div className="text-xs font-semibold text-white/70">Need an ethics + governance alignment?</div>
            <div className="mt-2 font-display text-2xl font-semibold">We’ll tailor your measurement posture</div>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              Tell us your constraints and objectives. We’ll propose a measurement and reporting model that preserves trust, meets governance needs, and still drives impact.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="/contact?intent=ethics" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                Ethics Alignment Call
              </a>
              <a href="/contact?intent=demo" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
