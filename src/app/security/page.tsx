import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';

export const metadata = {
  title: 'Security & Data'
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        kicker="Security"
        title="Security & Data Governance"
        subtitle="We design People & Culture systems with governance in mind—so data is collected responsibly, handled securely, and reported in leadership-ready formats."
        primaryCta={{ label: 'Request Demo', href: '/contact?intent=demo' }}
        secondaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">Principles</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Built for enterprise environments
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Exact security and hosting architecture depends on your deployment preferences (cloud, hybrid, or on‑prem).
                  This page outlines our default governance posture and what we can support.
                </p>
              </div>

              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: 'Least privilege',
                    d: 'Role-based access with clear boundaries for leadership, HR, and managers.'
                  },
                  {
                    t: 'Data minimization',
                    d: 'Collect only what’s needed to measure outcomes and run the system.'
                  },
                  {
                    t: 'Auditability',
                    d: 'Governance-ready exports and decision logs for leadership reporting.'
                  },
                  {
                    t: 'Local context',
                    d: 'Configurable practices to align with regional requirements and internal policies.'
                  }
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
                t: 'Deployment models',
                d: 'Cloud, hybrid, or on‑prem options depending on requirements and scale.'
              },
              {
                t: 'Data handling',
                d: 'Clear retention rules, consent and disclosure options, and cohort-level reporting where appropriate.'
              },
              {
                t: 'Integrations',
                d: 'Integration planning is scoped explicitly—minimizing exposure and aligning to your governance model.'
              },
              {
                t: 'Security review',
                d: 'We can support your internal security and procurement review process with required documentation.'
              }
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                <div className="mt-2 text-sm text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 p-10 text-white">
            <div className="text-xs font-semibold text-white/70">Need a security package?</div>
            <div className="mt-2 font-display text-2xl font-semibold">We’ll share deployment options and documentation</div>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              Tell us your environment (cloud / hybrid / on‑prem) and governance requirements. We’ll map a compliant architecture and share what your team needs for review.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="/contact?intent=security" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                Security & Governance Call
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
