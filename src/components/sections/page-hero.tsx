'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiquidBlobs } from '@/components/effects/liquid-blobs';

export function PageHero({
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  right
}: {
  kicker?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  right?: React.ReactNode;
}) {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden pt-20 lg:pt-32">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        quality={85}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-dark/40 z-0" />
      <div className="noise-overlay z-0" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-pink/10 blur-3xl z-0" />
      <LiquidBlobs className="absolute inset-0 z-10 pointer-events-none" count={15} />

      <div className="relative z-20 mx-auto max-w-7xl px-6 py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 lg:space-y-8">
            {kicker && (
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-dark/50 px-4 py-2 text-sm font-semibold text-brand-blue backdrop-blur">
                {kicker}
              </div>
            )}

            <motion.h1
              className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              {subtitle}
            </motion.p>

            {(primaryCta || secondaryCta) && (
              <motion.div
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-pink px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-pink/90"
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[1.5px] transition group-hover:translate-x-1" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-brand-sage/30 bg-white/5 px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur transition hover:-translate-y-1"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          {right && (
            <div className="relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              >
                {right}
              </motion.div>

              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-2xl border border-brand-sage/20 bg-brand-dark/50 backdrop-blur" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rotate-12 rounded-2xl border border-brand-sage/20 bg-brand-dark/50 backdrop-blur" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
