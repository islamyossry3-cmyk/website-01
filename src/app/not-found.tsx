import Link from 'next/link';
import { PageHero } from '@/components/sections/page-hero';

export default function NotFound() {
  return (
    <>
      <PageHero
        kicker="404"
        title="Page not found"
        subtitle="The page you’re looking for doesn’t exist—or has moved."
        primaryCta={{ label: 'Go home', href: '/' }}
        secondaryCta={{ label: 'Browse products', href: '/products' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-10 text-center shadow-soft backdrop-blur">
            <div className="text-sm text-slate-600">
              Try exploring Solutions or Products, or contact us for a tailored recommendation.
            </div>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/solutions" className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                Explore Solutions
              </Link>
              <Link href="/contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
