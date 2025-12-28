import { notFound } from 'next/navigation';
import Link from 'next/link';

import { PageHero } from '@/components/sections/page-hero';
import { domainBySlug, domains } from '@/content/domains';
import { productBySlug, products } from '@/content/products';
import { Reveal } from '@/components/effects/reveal';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product-card';

export async function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const domain = domainBySlug.get(params.slug as any);
  if (!domain) return {};
  return {
    title: `${domain.name} (${domain.short})`,
    description: domain.subheadline
  };
}

export default function DomainPage({ params }: { params: { slug: string } }) {
  const domain = domainBySlug.get(params.slug as any);
  if (!domain) return notFound();

  const featured = domain.featuredProductSlugs
    .map((s) => productBySlug.get(s))
    .filter(Boolean);

  const allInDomain = products.filter((p) => p.domain === domain.slug);

  return (
    <>
      <PageHero
        kicker={`Domain • ${domain.short}`}
        title={domain.headline}
        subtitle={domain.subheadline}
        primaryCta={{ label: 'Explore Products', href: '/products' }}
        secondaryCta={{ label: 'Open Matrix', href: '/solutions#matrix' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Badge className="w-fit bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.10))] text-slate-800">
                  Outcomes we move
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Built to drive measurable results
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  We design interventions that connect human behavior to business outcomes—then measure adoption and drift.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {domain.outcomes.map((o) => (
                    <span
                      key={o}
                      className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10"
                    >
                      {o}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-slate-900">Typical starting point</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Start with measurement (to get truth) or a high-impact implementation (to build momentum), then connect the system.
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact?intent=diagnosis"
                      className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                    >
                      Book a Diagnosis
                    </Link>
                    <Link
                      href="/solutions#matrix"
                      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5"
                    >
                      Open the Matrix
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-200/70 bg-slate-950 p-8 text-white shadow-soft">
                  <div className="text-xs font-semibold text-white/70">Domain snapshot</div>
                  <div className="mt-2 text-2xl font-semibold">{domain.name}</div>
                  <div className="mt-3 text-sm leading-relaxed text-white/75">
                    {domain.subheadline}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { t: 'Human truth', d: 'Behavioral signals, not vanity metrics.' },
                      { t: 'Data clarity', d: 'Decision-ready dashboards and views.' },
                      { t: 'Activation', d: 'Interventions designed for adoption.' },
                      { t: 'Governance', d: 'Operating rhythm, reporting, and accountability.' }
                    ].map((x) => (
                      <div key={x.t} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        <div className="text-sm font-semibold">{x.t}</div>
                        <div className="mt-1 text-xs text-white/70">{x.d}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-semibold text-white/70">Featured offerings</div>
                    <div className="mt-2 text-sm text-white/80">
                      {featured.map((p) => p!.name).join(' · ')}
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
                <div className="text-sm font-bold text-brand-green">Featured</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Recommended modules in {domain.name}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Start with one module, prove value, then connect into the broader ecosystem.
                </p>
              </div>
              <Link href="/products" className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 md:inline-flex">
                Browse all products
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <ProductCard key={p!.slug} product={p!} />
            ))}
          </div>

          {allInDomain.length > featured.length ? (
            <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
              <div className="text-sm font-bold text-slate-900">All offerings in this domain</div>
              <div className="mt-2 text-sm text-slate-600">
                {allInDomain.map((p) => p.name).join(' · ')}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
