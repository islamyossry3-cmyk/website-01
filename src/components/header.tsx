'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

import { nav } from '@/content/navigation';
import { cn } from '@/lib/cn';
import { site } from '@/lib/site';
import { buttonClasses } from './ui/button';

type MegaKey = keyof typeof nav.mega;

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMega, setOpenMega] = React.useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        scrolled ? 'backdrop-blur bg-white/70 border-b border-slate-200/60' : 'bg-transparent'
      )}
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo.svg"
            alt={site.name}
            width={160}
            height={44}
            priority
            className="h-9 w-auto"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.main.map((item) => {
            const isMega = 'mega' in item;
            return (
              <div key={item.label} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-xl px-2.5 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-900/5 whitespace-nowrap',
                    openMega && 'mega' in item && item.mega === openMega && 'bg-slate-900/5'
                  )}
                  onMouseEnter={() => {
                    if (isMega && 'mega' in item) setOpenMega(item.mega);
                    else setOpenMega(null);
                  }}
                  onFocus={() => {
                    if (isMega && 'mega' in item) setOpenMega(item.mega);
                  }}
                >
                  {item.label}
                  {isMega ? <ChevronDown className="h-4 w-4 opacity-60" /> : null}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          {nav.ctas.map((cta) => (
            <Link key={cta.label} href={cta.href} className={cn(buttonClasses(cta.variant === 'primary' ? 'primary' : 'ghost'), 'whitespace-nowrap')}>
              {cta.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mega panel */}
      <AnimatePresence>
        {openMega ? (
          <motion.div
            key="mega"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="hidden lg:block"
          >
            <MegaPanel mega={openMega} onClose={() => setOpenMega(null)} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="fixed right-0 top-0 h-full w-[92%] max-w-sm bg-white p-6 shadow-2xl z-[70]"
            >
              <div className="flex items-center justify-between">
                <Image src="/brand/logo.svg" alt={site.name} width={150} height={40} className="h-8 w-auto" />
                <button
                  className="rounded-xl p-2 ring-1 ring-slate-200 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 space-y-2">
                {nav.main.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/contact?intent=diagnosis"
                  className={cn(buttonClasses('ghost'), 'justify-between')}
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Diagnosis <ArrowRight className="h-4 w-4 opacity-70" />
                </Link>
                <Link
                  href="/contact?intent=demo"
                  className={cn(buttonClasses('primary'), 'justify-between')}
                  onClick={() => setMobileOpen(false)}
                >
                  Request Demo <ArrowRight className="h-4 w-4 opacity-70" />
                </Link>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                <div>{site.contact.email}</div>
                <div>{site.contact.phone}</div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MegaPanel({ mega, onClose }: { mega: MegaKey; onClose: () => void }) {
  const data = nav.mega[mega];

  return (
    <div className="border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-6">
        <div className="col-span-9 grid grid-cols-2 gap-6">
          {data.columns.map((col) => (
            <div key={col.title} className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-soft">
              <div className="text-sm font-bold text-slate-900">{col.title}</div>
              <div className="mt-4 grid gap-3">
                {col.items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    className="group rounded-xl p-3 transition hover:bg-slate-50"
                    onClick={onClose}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-semibold text-slate-900">{it.label}</div>
                      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-70" />
                    </div>
                    <div className="mt-1 text-xs leading-snug text-slate-600">{it.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-3">
          <div className="rounded-2xl border border-slate-200/70 bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.08))] p-5 shadow-soft">
            <div className="text-sm font-bold text-slate-900">Quick actions</div>
            <div className="mt-4 grid gap-3">
              {data.highlights.map((h) => (
                <Link
                  key={h.href}
                  href={h.href}
                  className="group rounded-xl bg-white/70 p-4 ring-1 ring-slate-200/70 transition hover:bg-white"
                  onClick={onClose}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-slate-900">{h.title}</div>
                    <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5" />
                  </div>
                  <div className="mt-1 text-xs leading-snug text-slate-600">{h.description}</div>
                </Link>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-slate-950 p-4 text-white">
              <div className="text-xs font-semibold text-white/70">Need the cleanest starting point?</div>
              <div className="mt-1 text-sm font-bold">We'll recommend a path in 30 minutes.</div>
              <div className="mt-3 flex gap-2">
                <Link href="/contact?intent=diagnosis" className={cn(buttonClasses('secondary'), 'px-3 py-2 text-xs')} onClick={onClose}>
                  Book a Diagnosis
                </Link>
                <Link href="/contact?intent=demo" className={cn(buttonClasses('secondary'), 'px-3 py-2 text-xs')} onClick={onClose}>
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
