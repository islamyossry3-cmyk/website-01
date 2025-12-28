import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';

export const metadata = {
  title: 'Case Studies'
};

const cases = [
  {
    title: 'Onboarding ecosystem for a multi-site enterprise',
    industry: 'Anonymized • Services',
    problem: 'High early churn and slow time-to-productivity for new hires across sites.',
    solution: '30/60/90-day onboarding journey, content transformation, milestones, and adoption reporting.',
    impact: ['Higher onboarding completion', 'Faster role clarity', 'Improved early retention signals'],
    href: '/contact?intent=case-study&case=onboarding'
  },
  {
    title: 'Gamified compliance campaign that improved recall',
    industry: 'Anonymized • Telecom',
    problem: 'Employees acknowledged policies but did not remember them in real situations.',
    solution: 'Trivia Clans + Spot the Problem with cohort-based reporting and reinforcement.',
    impact: ['Improved knowledge recall', 'Higher participation', 'Lower “read & forget” behavior'],
    href: '/contact?intent=case-study&case=compliance'
  },
  {
    title: 'Culture diagnostic → activation plan for leadership alignment',
    industry: 'Anonymized • Manufacturing',
    problem: 'Culture perceived differently across units; values existed but were not operational.',
    solution: 'Persona Quest (OCAI) + values-to-behaviors blueprint + leader kit.',
    impact: ['Clear gap map', 'Aligned behavior expectations', 'Leader rituals for sustainment'],
    href: '/contact?intent=case-study&case=culture'
  },
  {
    title: 'Engagement operating rhythm for managers',
    industry: 'Anonymized • Hospitality',
    problem: 'Engagement actions were inconsistent; leaders needed simple operating tools.',
    solution: 'Pulse model + engagement action engine + manager enablement.',
    impact: ['Higher participation', 'More consistent leader actions', 'Better team cadence'],
    href: '/contact?intent=case-study&case=engagement'
  }
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        kicker="Evidence"
        title="Case studies & examples"
        subtitle="We work across domains (IC, EX, EE, Culture, EB) and delivery types. Below are anonymized examples and patterns of impact."
        primaryCta={{ label: 'Request a Case Pack', href: '/contact?intent=case-pack' }}
        secondaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {cases.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="text-xs font-semibold text-slate-500">{c.industry}</div>
                  <div className="mt-2 text-xl font-semibold text-slate-900">{c.title}</div>

                  <div className="mt-5 grid gap-4">
                    <Block label="Problem" text={c.problem} />
                    <Block label="Solution" text={c.solution} />
                    <div>
                      <div className="text-xs font-semibold text-slate-500">Impact pattern</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {c.impact.map((x) => (
                          <span key={x} className="rounded-full bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.10))] px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-900/10">
                            {x}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-sm font-semibold text-brand-green">Request details →</div>
                </Link>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 rounded-3xl border border-slate-200/70 bg-slate-50 p-8">
            <div className="text-sm font-bold text-slate-900">Note</div>
            <div className="mt-2 text-sm text-slate-600">
              Metrics vary by environment, baseline, and governance. We share detailed case packs under NDA when needed.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-slate-500">{label}</div>
      <div className="mt-2 text-sm text-slate-700">{text}</div>
    </div>
  );
}
