import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';
import { site } from '@/lib/site';
import { CareersContent, roles } from './careers-content';

export const metadata = {
  title: 'Careers'
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Build the future of People & Culture systems"
        subtitle="We combine behavioral science, AI, and gamification to build products that make work better—and measurable."
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <CareersContent roles={roles} />
          </Reveal>

          <div className="mt-10 rounded-3xl bg-slate-950 p-10 text-white">
            <div className="text-xs font-semibold text-white/70">Don't see your role?</div>
            <div className="mt-2 font-display text-2xl font-semibold">Send a portfolio or profile anyway</div>
            <p className="mt-2 text-sm text-white/75">
              Email us at <a className="underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a> with your portfolio, CV, and a short note on how you'd contribute.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
