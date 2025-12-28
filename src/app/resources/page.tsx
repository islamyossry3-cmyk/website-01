import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';

export const metadata = {
  title: 'Resources'
};

const resources = [
  {
    title: 'People & Culture Ecosystem Playbook (PDF)',
    desc: 'How to structure IC / EX / EE / Culture / EB into one measurable system.',
    href: '/contact?intent=resource&name=ecosystem-playbook'
  },
  {
    title: 'Onboarding 30/60/90 Checklist',
    desc: 'A practical checklist to design outcomes, milestones, and adoption measurement.',
    href: '/contact?intent=resource&name=onboarding-checklist'
  },
  {
    title: 'IC Governance Template',
    desc: 'A lightweight governance model: cadence, editorial rules, and leadership rituals.',
    href: '/contact?intent=resource&name=ic-governance-template'
  },
  {
    title: 'Engagement Operating Rhythm',
    desc: 'How to build manager rituals and action models that scale.',
    href: '/contact?intent=resource&name=engagement-rhythm'
  }
] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Tools, templates, and playbooks"
        subtitle="Practical resources to help People & Culture teams move from ideas to measurable systems."
        primaryCta={{ label: 'ROI Calculator', href: '/resources/roi-calculator' }}
        secondaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {resources.map((r) => (
                <Link
                  key={r.title}
                  href={r.href}
                  className="group rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="text-xl font-semibold text-slate-900">{r.title}</div>
                  <div className="mt-2 text-sm text-slate-600">{r.desc}</div>
                  <div className="mt-6 text-sm font-semibold text-brand-green">Request access →</div>
                </Link>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 rounded-3xl bg-slate-950 p-10 text-white">
            <div className="text-xs font-semibold text-white/70">Need something specific?</div>
            <div className="mt-2 font-display text-2xl font-semibold">We can build a tailored toolkit for your system</div>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              Templates, governance models, campaign kits, leader scripts, and reporting views—designed for your environment.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?intent=resource-custom" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                Request a toolkit
              </Link>
              <Link href="/products" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5">
                Browse products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
