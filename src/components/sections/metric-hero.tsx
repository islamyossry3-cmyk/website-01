"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedWord } from '@/components/effects/animated-word';

const LAYERS_DATA = [
  {
    id: 1,
    imgSrc: "https://iili.io/fEh0TAb.gif",
    shadowSrc: "https://iili.io/fEjgDgt.gif",
    speed: -0.05,
    scale: 0.85,
    zIndex: 1,
  },
  {
    id: 2,
    imgSrc: "https://iili.io/fEh0xSe.gif",
    shadowSrc: "https://iili.io/fEh05oQ.gif",
    speed: 0.08,
    scale: 0.95,
    zIndex: 2,
  },
  {
    id: 3,
    imgSrc: "https://iili.io/fEh0uNj.gif",
    shadowSrc: "https://iili.io/fEh0ol9.gif",
    speed: 0.15,
    scale: 1.05,
    zIndex: 3,
  },
];

export function MetricHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden pt-16">
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        quality={85}
        className="object-cover"
      />

      {LAYERS_DATA.map((layer) => {
        const moveX = mousePos.x * layer.speed * 100;
        const moveY = mousePos.y * layer.speed * 100;
        return (
          <img
            key={`shadow-${layer.id}`}
            src={layer.shadowSrc}
            alt=""
            className="absolute object-contain pointer-events-none transition-transform duration-300 ease-out will-change-transform hidden lg:block"
            style={{
              top: '10%',
              right: '0%',
              width: '50%',
              height: '90%',
              zIndex: layer.zIndex,
              transform: `translate(${moveX}px, ${moveY}px) scale(${layer.scale})`,
              mixBlendMode: 'multiply',
              opacity: 0.8,
            }}
          />
        );
      })}

      <div className="absolute inset-0 bg-brand-dark/40" style={{ zIndex: 5 }} />
      <div className="noise-overlay" style={{ zIndex: 5 }} />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" style={{ zIndex: 5 }} />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-pink/10 blur-3xl" style={{ zIndex: 5 }} />

      {LAYERS_DATA.map((layer) => {
        const moveX = mousePos.x * layer.speed * 100;
        const moveY = mousePos.y * layer.speed * 100;
        return (
          <img
            key={`img-${layer.id}`}
            src={layer.imgSrc}
            alt=""
            className="absolute object-contain pointer-events-none transition-transform duration-300 ease-out will-change-transform hidden lg:block"
            style={{
              top: '10%',
              right: '0%',
              width: '50%',
              height: '90%',
              zIndex: 10 + layer.zIndex,
              transform: `translate(${moveX}px, ${moveY}px) scale(${layer.scale})`,
            }}
          />
        );
      })}

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
    </section>
  );
}
