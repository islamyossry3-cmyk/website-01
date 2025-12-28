import { notFound } from 'next/navigation';
import Link from 'next/link';

import { PageHero } from '@/components/sections/page-hero';
import { deliveryBySlug, deliveryTypes } from '@/content/deliveryTypes';
import { products } from '@/content/products';
import { Reveal } from '@/components/effects/reveal';
import { ProductCard } from '@/components/product-card';

export async function generateStaticParams() {
  return deliveryTypes.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = deliveryBySlug.get(params.slug as any);
  if (!t) return {};
  return {
    title: `Delivery Type: ${t.name}`,
    description: t.subheadline
  };
}

export default function DeliveryTypePage({ params }: { params: { slug: string } }) {
  const t = deliveryBySlug.get(params.slug as any);
  if (!t) return notFound();

  const filtered = products.filter((p) => p.deliveryTypes.includes(t.slug));

  return (
    <>
      <PageHero
        kicker={`Delivery Type • ${t.slug.toUpperCase()}`}
        title={t.headline}
        subtitle={t.subheadline}
        primaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
        secondaryCta={{ label: 'Open Matrix', href: '/solutions#matrix' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">What this includes</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Typical outputs
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Delivery is not just a “phase”—it is a way to create clarity and movement. Below are typical outputs for {t.name.toLowerCase()} work.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {[
                    'Clear scope and decision-ready deliverables',
                    'Evidence-based recommendations (where applicable)',
                    'Assets, templates, and governance suggestions',
                    'A practical execution plan with ownership and cadence'
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-brand-pink" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-slate-900">Outcomes this tends to move</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.outcomes.map((o) => (
                      <span
                        key={o}
                        className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="text-sm font-bold text-brand-green">Offerings</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                      Modules that fit {t.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Filtered from our products and suites. Some delivery types also include tailored services.
                    </p>
                  </div>
                  <Link href="/products" className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 md:inline-flex">
                    Browse all products
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {filtered.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>

                <div className="mt-8 rounded-3xl bg-slate-950 p-8 text-white">
                  <div className="text-xs font-semibold text-white/70">Need a tailored path?</div>
                  <div className="mt-2 text-2xl font-semibold">We can recommend the fastest sequence.</div>
                  <p className="mt-2 text-sm text-white/75">
                    Tell us your objective and scale—then we’ll recommend the cleanest starting point and how to connect the ecosystem.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link href="/contact?intent=diagnosis" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                      Book a Diagnosis
                    </Link>
                    <Link href="/contact?intent=demo" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5">
                      Request Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 md:hidden">
            <Link href="/products" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5">
              Browse all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
