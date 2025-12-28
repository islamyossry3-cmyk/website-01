import { notFound } from 'next/navigation';
import Link from 'next/link';

import { products, productBySlug } from '@/content/products';
import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';
import { PricingTable } from '@/components/sections/pricing';
import { FAQAccordion } from '@/components/sections/faq';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = productBySlug.get(params.slug);
  if (!p) return {};
  return {
    title: p.seo.title,
    description: p.seo.description
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = productBySlug.get(params.slug);
  if (!p) return notFound();

  const related = products
    .filter((x) => x.slug !== p.slug && (x.domain === p.domain || x.deliveryTypes.some((d) => p.deliveryTypes.includes(d))))
    .slice(0, 4);

  return (
    <>
      <PageHero
        kicker={`${p.categoryLabel} • ${p.domain.replace('-', ' ')}`}
        title={p.name}
        subtitle={p.tagline}
        primaryCta={{ label: 'Request Demo', href: `/contact?intent=demo&product=${p.slug}` }}
        secondaryCta={{ label: 'Book a Diagnosis', href: `/contact?intent=diagnosis&product=${p.slug}` }}
        right={<ProductHeroRight p={p} />}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="text-sm font-bold text-brand-green">Overview</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  What it is
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {p.summary}
                </p>

                <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-slate-900">Outcomes this typically moves</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.outcomes.map((o) => (
                      <span
                        key={o}
                        className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10"
                      >
                        {o}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 text-xs text-slate-500">
                    Outcome selection depends on your context and objectives. We’ll tailor the deployment.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-slate-900">Key features</div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.keyFeatures.map((f) => (
                      <div key={f} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/70">
                        <div className="text-sm font-semibold text-slate-900">{f}</div>
                        <div className="mt-2 text-xs leading-relaxed text-slate-600">
                          Designed for adoption, measurement, and governance.
                        </div>
                      </div>
                    ))}
                  </div>

                  {p.media.video ? (
                    <div className="mt-6 rounded-2xl bg-[linear-gradient(135deg,rgba(12,85,74,0.08),rgba(246,119,130,0.06))] p-5 ring-1 ring-slate-200/70">
                      <div className="text-sm font-bold text-slate-900">{p.media.video.label}</div>
                      <div className="mt-2 text-sm text-slate-600">
                        {p.media.video.embedUrl ? (
                          <>
                            Add the embed iframe in this section once you have a link.
                          </>
                        ) : (
                          <span>{p.media.video.note ?? 'Add your video link later.'}</span>
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="text-sm font-bold text-brand-green">Implementation</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                How it works
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                A practical sequence designed for adoption and measurable movement.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {p.howItWorks.map((s, idx) => (
              <Reveal key={s} delay={0.05 * idx}>
                <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                  <div className="text-xs font-semibold text-slate-500">Step {idx + 1}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">{s}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-3">
              <div className="text-sm font-bold text-brand-green">Deliverables</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                What you get
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Concrete outputs you can operate—not just a report.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {p.whatYouGet.map((x) => (
              <div key={x} className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-slate-900">{x}</div>
                <div className="mt-2 text-sm text-slate-600">
                  Designed to integrate with your People & Culture operating rhythm.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-sm font-bold text-brand-green">Pricing</div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Flexible packages, enterprise-ready
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Pricing varies by cohort size, scope, localization, and governance requirements. Choose a package baseline—then tailor.
                </p>
              </div>
              <Link href={`/contact?intent=quote&product=${p.slug}`} className="hidden rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 md:inline-flex">
                Request a quote
              </Link>
            </div>
          </Reveal>

          <div className="mt-10">
            <PricingTable tiers={p.pricingTiers} />
          </div>

          <div className="mt-6 md:hidden">
            <Link href={`/contact?intent=quote&product=${p.slug}`} className="inline-flex rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      {p.faqs?.length ? (
        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex flex-col gap-3">
                <div className="text-sm font-bold text-brand-green">FAQ</div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Common questions
                </h2>
              </div>
            </Reveal>

            <div className="mt-10">
              <FAQAccordion items={p.faqs} />
            </div>
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <div className="text-sm font-bold text-brand-green">Related</div>
                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    Products often paired with this
                  </h2>
                </div>
                <Link href="/products" className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 md:inline-flex">
                  Browse all products
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {related.map((x) => (
                <Link
                  key={x.slug}
                  href={`/products/${x.slug}`}
                  className="group rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="text-xs font-semibold text-slate-500">{x.categoryLabel}</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">{x.name}</div>
                  <div className="mt-2 text-sm text-slate-600">{x.tagline}</div>
                  <div className="mt-4 text-sm font-semibold text-brand-green">Open →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

function ProductHeroRight({ p }: { p: any }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-semibold text-white/70">Quick facts</div>

      <div className="mt-4">
        <div className="text-[10px] font-semibold text-white/60">Delivery types</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {p.deliveryTypes.map((d: string) => (
            <span key={d} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[10px] font-semibold text-white/60">Outcomes</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {p.outcomes.map((o: string) => (
            <span key={o} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              {o}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="text-[10px] font-semibold text-white/60">Best next step</div>
        <div className="mt-1 text-sm font-semibold">Book a Diagnosis</div>
        <div className="mt-2 text-xs leading-relaxed text-white/70">
          We’ll recommend the cleanest starting point and how this module connects into your People & Culture ecosystem.
        </div>
      </div>
    </div>
  );
}
