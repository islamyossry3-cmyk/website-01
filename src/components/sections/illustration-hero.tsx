'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiquidBlobs } from '@/components/effects/liquid-blobs';

export function IllustrationHero({
  title,
  subtitle,
  imageSrc,
  primaryCta
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
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

      <div className="relative z-20 mx-auto max-w-7xl px-6 h-full flex items-center min-h-[calc(100vh-5rem)]">
        <div className="grid items-center gap-8 lg:grid-cols-2 w-full py-8">
          <div className="space-y-6 lg:space-y-8">
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

            {primaryCta && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              >
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-pink px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-pink/90"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[1.5px] transition group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )}
          </div>

          <motion.div
            className="relative hidden lg:block w-full h-full min-h-[650px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            <Image
              src={imageSrc}
              alt="Hero Illustration"
              fill
              className="object-contain object-center"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
