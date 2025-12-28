"use client";

import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWord } from '@/components/effects/animated-word';
import Spline from '@splinetool/react-spline/next';

export function MetricHero() {

  return (
    <section className="relative h-screen overflow-hidden pt-16">
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Spline
          scene="https://prod.spline.design/jjZykG441S6xlUid/scene.splinecode"
        />
      </div>

      <div className="absolute inset-0 bg-brand-dark/30" style={{ zIndex: 5 }} />
      <div className="noise-overlay opacity-20" style={{ zIndex: 5 }} />

      <div className="relative mx-auto max-w-7xl px-6 h-[calc(100vh-4rem)] flex items-start pt-[15vh] lg:items-center lg:pt-0" style={{ zIndex: 20 }}>
        <div className="w-full lg:w-1/2">
          <div className="space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-dark/50 px-4 py-2 text-sm font-semibold text-brand-blue backdrop-blur">
                <Zap className="h-4 w-4 stroke-[1.5px]" />
                MENA - Enterprise-ready - AI-Powered
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl overflow-visible" style={{ lineHeight: '1.3' }}>
                People & Culture, <AnimatedWord />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
                Integrated systems powered by behavioral science, AI, and gamification to drive measurable outcomes across attraction, retention, performance, and engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact?intent=demo"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-pink px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-pink/90"
                >
                  Request Demo
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[1.5px] transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact?intent=diagnosis"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-brand-sage/30 bg-white/5 px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur transition hover:-translate-y-1"
                >
                  Book Diagnosis
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-[#0c554a]" style={{ zIndex: 25 }} />
    </section>
  );
}
