'use client';

import * as React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';

import { domains } from '@/content/domains';
import { deliveryTypes } from '@/content/deliveryTypes';
import { getMatrixCell } from '@/content/matrix';
import { cn } from '@/lib/cn';

export function MatrixNavigator() {
  const [open, setOpen] = React.useState<{
    domain: (typeof domains)[number]['slug'];
    delivery: (typeof deliveryTypes)[number]['slug'];
  } | null>(null);

  const cell = open ? getMatrixCell(open.domain, open.delivery) : undefined;

  return (
    <section id="matrix" className="relative hidden py-20 lg:block">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.10))] px-4 py-2 text-xs font-semibold text-slate-800 ring-1 ring-slate-900/10">
            <Sparkles className="h-4 w-4 text-brand-pink" />
            The GoldinKollar Matrix
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Your ecosystem, structured two ways
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore solutions by <b>Domain</b> (IC / EX / EE / Culture / EB) or by <b>Delivery Type</b> (Measure / Strategize / Implement / Transfer / Document).
            Click any cell to see what it includes and which offerings typically fit.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-soft backdrop-blur">
          <div className="grid grid-cols-6">
            <div className="col-span-1 border-b border-r border-slate-200/70 bg-slate-50/70 p-4 text-xs font-bold text-slate-700">
              Domain ↘ / Delivery →
            </div>
            {deliveryTypes.map((d) => (
              <div
                key={d.slug}
                className="border-b border-slate-200/70 bg-slate-50/70 p-4 text-xs font-bold text-slate-800"
              >
                {d.name}
              </div>
            ))}

            {domains.map((domain) => (
              <React.Fragment key={domain.slug}>
                <div className="border-r border-slate-200/70 bg-slate-50/50 p-4">
                  <div className="text-sm font-bold text-slate-900">{domain.short}</div>
                  <div className="mt-1 text-xs text-slate-600">{domain.name}</div>
                </div>

                {deliveryTypes.map((d) => {
                  const c = getMatrixCell(domain.slug, d.slug);
                  const hasItems = (c?.items?.length || 0) > 0;

                  return (
                    <button
                      key={`${domain.slug}:${d.slug}`}
                      onClick={() => setOpen({ domain: domain.slug, delivery: d.slug })}
                      className={cn(
                        'group relative flex min-h-[92px] flex-col items-start gap-1 border-b border-r border-slate-200/70 p-4 text-left transition',
                        'hover:bg-[linear-gradient(135deg,rgba(12,85,74,0.08),rgba(246,119,130,0.06))]',
                        hasItems ? '' : 'opacity-80'
                      )}
                    >
                      <div className="text-sm font-semibold text-slate-900">{c?.title ?? 'Explore'}</div>
                      <div className="line-clamp-2 text-xs leading-snug text-slate-600">
                        {c?.description ?? 'Open to see recommended offerings.'}
                      </div>
                      <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-brand-green opacity-0 transition group-hover:opacity-100">
                        Open <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                      <div className="pointer-events-none absolute right-3 top-3 h-10 w-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.25),transparent_55%)] opacity-0 blur transition group-hover:opacity-100" />
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div id="configurator" className="mt-12 rounded-3xl border border-slate-200/70 bg-[linear-gradient(135deg,rgba(12,85,74,0.06),rgba(246,119,130,0.05))] p-8 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-bold text-slate-900">Want the cleanest starting point?</div>
              <div className="mt-1 text-sm text-slate-600">
                Use our configurator and we’ll recommend the fastest path based on your objective and scale.
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?intent=diagnosis"
                className="rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                Build Your Ecosystem
              </Link>
              <Link
                href="/contact?intent=alignment"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5"
              >
                Book an alignment call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(null)} />
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-ink-950 text-white shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            >
              <div className="relative p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,119,130,0.22),transparent_55%),radial-gradient(circle_at_bottom,rgba(12,85,74,0.22),transparent_55%)] opacity-60" />
                <div className="noise absolute inset-0" />

                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs font-semibold text-white/60">
                      {domains.find((d) => d.slug === open.domain)?.name} · {deliveryTypes.find((d) => d.slug === open.delivery)?.name}
                    </div>
                    <div className="mt-2 text-2xl font-semibold">{cell?.title ?? 'Explore'}</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {cell?.description ?? 'Open to see recommended offerings.'}
                    </p>
                  </div>

                  <button
                    className="rounded-xl bg-white/10 p-2 ring-1 ring-white/10 transition hover:bg-white/15"
                    onClick={() => setOpen(null)}
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative mt-6 grid gap-3">
                  {(cell?.items?.length ?? 0) > 0 ? (
                    cell!.items.map((it) => (
                      <Link
                        key={it.href + it.label}
                        href={it.href}
                        className="group flex items-start justify-between gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
                      >
                        <div>
                          <div className="text-sm font-semibold">{it.label}</div>
                          <div className="mt-1 text-xs text-white/60">{it.type}</div>
                        </div>
                        <ArrowRight className="h-5 w-5 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-90" />
                      </Link>
                    ))
                  ) : (
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-sm font-semibold">No prefilled items yet</div>
                      <div className="mt-1 text-xs text-white/70">
                        We can tailor the best-fit starting point based on your objectives and scale.
                      </div>
                      <Link
                        href="/contact?intent=diagnosis"
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                      >
                        Book a Diagnosis <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/5 px-8 py-4 text-xs text-white/70">
                <div>Need a tailored recommendation?</div>
                <Link href="/contact?intent=diagnosis" className="inline-flex items-center gap-2 font-semibold text-white">
                  Book a Diagnosis <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
