import Link from 'next/link';
import { MetricHero } from '@/components/sections/metric-hero';
import { OutcomesSection } from '@/components/sections/outcomes';
import { Reveal } from '@/components/effects/reveal';
import { MatrixNavigator } from '@/components/sections/matrix-navigator';
import { ProductCard } from '@/components/product-card';
import { BrandCard } from '@/components/ui/card';
import { Lightbulb, Target, Sparkles } from 'lucide-react';
import { products } from '@/content/products';

export default function HomePage() {
  const featured = [
    products.find((p) => p.slug === 'people-culture-command-center'),
    products.find((p) => p.slug === 'ai-onboarding-ecosystem'),
    products.find((p) => p.slug === 'persona-quest-ocai'),
    products.find((p) => p.slug === 'trivia-clans')
  ].filter(Boolean);

  return (
    <>
      <MetricHero />

      <OutcomesSection />

      <section className="relative bg-brand-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal enableOutro>
            <div className="text-center">
              <Reveal variant="fade" delay={0.1}>
                <div className="text-sm font-bold text-brand-green">Our Approach</div>
              </Reveal>
              <Reveal variant="slideUp" delay={0.2}>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                  The Recipe for Effectiveness
                </h2>
              </Reveal>
              <Reveal variant="slideUp" delay={0.3}>
                <p className="mt-4 text-base text-slate-700">
                  Three core principles that make our solutions work
                </p>
              </Reveal>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal variant="slideRight" delay={0.2} enableOutro>
              <BrandCard variant="sage" className="flex min-h-[400px] flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      Tailored
                    </div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                      <Target className="h-8 w-8 stroke-[1.5px] text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Customization</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90">
                    Every solution is tailored to your organization's unique culture, challenges, and goals. No cookie-cutter approaches.
                  </p>
                </div>
              </BrandCard>
            </Reveal>

            <Reveal variant="slideUp" delay={0.3} enableOutro>
              <BrandCard variant="dark" className="flex min-h-[400px] flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/20 px-3 py-1 text-xs font-semibold text-brand-blue backdrop-blur">
                      Data-Driven
                    </div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/20">
                      <Lightbulb className="h-8 w-8 stroke-[1.5px] text-brand-blue" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Deep Insights</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90">
                    Data-driven diagnostics reveal what's really happening beneath the surface, enabling precise interventions.
                  </p>
                </div>
              </BrandCard>
            </Reveal>

            <Reveal variant="slideLeft" delay={0.4} enableOutro>
              <BrandCard variant="accent" className="flex min-h-[400px] flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      Actionable
                    </div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                      <Sparkles className="h-8 w-8 stroke-[1.5px] text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Focus</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90">
                    Clear priorities and actionable steps ensure your team knows exactly what to do next and why it matters.
                  </p>
                </div>
              </BrandCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="slideRight" enableOutro>
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal variant="fade" delay={0.1}>
                  <div className="text-sm font-bold text-brand-green">One flagship platform</div>
                </Reveal>
                <Reveal variant="slideUp" delay={0.2}>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    One Command Center for the Head of People & Culture
                  </h2>
                </Reveal>
                <Reveal variant="slideUp" delay={0.3}>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Many organizations run people initiatives as isolated projects. GoldinKollar builds an integrated system and gives leadership a single command center to operate it.
                  </p>
                </Reveal>

                <Reveal variant="slideUp" delay={0.4}>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/platform"
                      className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                    >
                      Explore the Platform
                    </Link>
                    <Link
                      href="/solutions#matrix"
                      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5"
                    >
                      Explore the Matrix
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal variant="scale" delay={0.3}>
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-[linear-gradient(135deg,rgba(12,85,74,0.08),rgba(246,119,130,0.06))] p-6 shadow-soft">
                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.20),transparent_60%)] blur-3xl" />
                    <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(12,85,74,0.20),transparent_60%)] blur-3xl" />

                    <div className="relative grid gap-4 md:grid-cols-2">
                      {[
                        { k: 'IC', v: 'Internal Communication' },
                        { k: 'EX', v: 'Employee Experience' },
                        { k: 'EE', v: 'Employee Engagement' },
                        { k: 'Culture', v: 'Culture' },
                        { k: 'EB', v: 'Employer Branding' },
                        { k: 'Gov', v: 'Governance + reporting' }
                      ].map((it, i) => (
                        <Reveal key={it.k} variant="slideUp" delay={0.1 * i}>
                          <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200/70">
                            <div className="text-xs font-bold text-slate-500">{it.k}</div>
                            <div className="mt-1 text-sm font-semibold text-slate-900">{it.v}</div>
                            <div className="mt-2 text-xs leading-relaxed text-slate-600">
                              Connected into one measurable operating cockpit.
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>

                    <Reveal variant="slideUp" delay={0.6}>
                      <div className="relative mt-6 rounded-2xl bg-slate-950 px-5 py-4 text-white">
                        <div className="text-xs font-semibold text-white/70">Designed for leadership</div>
                        <div className="mt-1 text-sm font-bold">See drift early. Activate interventions fast. Prove impact.</div>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-brand-blue/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal variant="slideLeft">
            <div className="flex items-end justify-between gap-6">
              <div>
                <Reveal variant="fade" delay={0.1}>
                  <div className="text-sm font-bold text-brand-green">Featured</div>
                </Reveal>
                <Reveal variant="slideUp" delay={0.2}>
                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    Start with a proven module—then connect the system
                  </h2>
                </Reveal>
                <Reveal variant="slideUp" delay={0.3}>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                    Each module delivers value on its own. Together, they operate as one integrated People & Culture system.
                  </p>
                </Reveal>
              </div>

              <Reveal variant="fade" delay={0.4}>
                <Link href="/products" className="hidden rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 md:inline-flex">
                  Browse products
                </Link>
              </Reveal>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p!.slug} variant="scale" delay={0.1 * i}>
                <ProductCard product={p!} />
              </Reveal>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/products" className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5">
              Browse products
            </Link>
          </div>
        </div>
      </section>

      <MatrixNavigator />

      <section className="hero-gradient relative py-20">
        <div className="noise-overlay" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal variant="scale" enableOutro>
            <div className="relative overflow-hidden rounded-3xl border border-brand-sage/20 bg-brand-dark p-10 text-white">
              <div className="noise-overlay rounded-3xl" />

              <div className="relative z-10">
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl" />
                <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl" />

                <div className="relative grid items-center gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <Reveal variant="fade" delay={0.1}>
                      <div className="text-xs font-semibold text-brand-blue">Ready to see your fastest path?</div>
                    </Reveal>
                    <Reveal variant="slideUp" delay={0.2}>
                      <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                        Book a Diagnosis—get a tailored recommendation in 30 minutes
                      </h3>
                    </Reveal>
                    <Reveal variant="slideUp" delay={0.3}>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                        We'll identify your biggest leverage point and recommend the cleanest starting module—then map how it connects into an integrated system.
                      </p>
                    </Reveal>
                  </div>
                  <div className="lg:col-span-5">
                    <Reveal variant="slideLeft" delay={0.4}>
                      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                        <Link href="/contact?intent=diagnosis" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                          Book a Diagnosis
                        </Link>
                        <Link href="/contact?intent=demo" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:-translate-y-0.5">
                          Request Demo
                        </Link>
                      </div>
                    </Reveal>
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
