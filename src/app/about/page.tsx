import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="GoldinKollar™"
        subtitle="We build People & Culture systems that make organizations measurably stronger—using behavioral science, AI, and gamification."
        primaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">What we believe</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Culture is execution power—when it becomes behavior
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  People initiatives fail when they remain “activities.” We engineer systems: clear outcomes, measurable signals, designed experiences, and governance rhythms.
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-slate-900">Our signature</div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {[
                      'Human science + data design',
                      'Gamification with purpose (retention, recall, motivation)',
                      'Leadership-ready dashboards and reporting',
                      'Capability transfer so the system is sustainable'
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
                <div className="rounded-3xl bg-slate-950 p-10 text-white">
                  <div className="text-xs font-semibold text-white/70">How we help</div>
                  <div className="mt-2 font-display text-2xl font-semibold">From “HR projects” to an operating system</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    We work across Internal Communication, Employee Experience, Engagement, Culture, and Employer Branding—delivering solutions through measurement, strategy, implementation, transfer, and documentation.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { t: 'Measure', d: 'Get truth on where the system is drifting.' },
                      { t: 'Strategize', d: 'Design what to fix and how to govern it.' },
                      { t: 'Implement', d: 'Deploy products and campaigns built for adoption.' },
                      { t: 'Transfer', d: 'Enable leaders to sustain rituals and actions.' },
                      { t: 'Document', d: 'Prove impact and amplify the story.' }
                    ].map((x) => (
                      <div key={x.t} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                        <div className="text-sm font-semibold">{x.t}</div>
                        <div className="mt-1 text-xs text-white/70">{x.d}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link href="/solutions" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                      Explore solutions
                    </Link>
                    <Link href="/platform" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5">
                      See the platform
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
