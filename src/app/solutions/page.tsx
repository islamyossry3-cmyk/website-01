import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';
import { MatrixNavigator } from '@/components/sections/matrix-navigator';
import { domains } from '@/content/domains';
import { deliveryTypes } from '@/content/deliveryTypes';
import { Reveal } from '@/components/effects/reveal';

export const metadata = {
  title: 'Solutions'
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title="Your People & Culture ecosystem—structured two ways"
        subtitle="Browse by Domain (Internal Communication / Employee Experience / Engagement / Culture / Employer Branding) or by Delivery Type (Measure / Strategize / Implement / Transfer / Document)."
        primaryCta={{ label: 'Explore the Matrix', href: '/solutions#matrix' }}
        secondaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">Browse by domain</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Domains we engineer
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Each domain is measurable. Each activation connects back into one integrated system.
                </p>
              </div>
              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {domains.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/solutions/domains/${d.slug}`}
                    className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <div className="text-xs font-semibold text-slate-500">{d.short}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">{d.name}</div>
                    <div className="mt-2 text-sm text-slate-600">{d.subheadline}</div>
                    <div className="mt-4 text-sm font-semibold text-brand-green">Explore →</div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">Browse by delivery type</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Ways we deliver value
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Build your ecosystem through measurement, strategy, implementation, capability transfer, and documentation.
                </p>
              </div>
              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
                {deliveryTypes.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/solutions/delivery/${t.slug}`}
                    className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <div className="text-xs font-semibold text-slate-500">{t.slug.toUpperCase()}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">{t.name}</div>
                    <div className="mt-2 text-sm text-slate-600">{t.subheadline}</div>
                    <div className="mt-4 text-sm font-semibold text-brand-green">Explore →</div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MatrixNavigator />
    </>
  );
}
