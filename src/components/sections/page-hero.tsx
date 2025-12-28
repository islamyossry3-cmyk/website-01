'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// import { GradientBg } from '../effects/gradient-bg'; // Removed GradientBg import
import { Reveal } from '../effects/reveal';
import { GlassCard } from '../ui/glass-card';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline'; // Import Spline

interface PageHeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  right?: React.ReactNode;
  className?: string;
  rightWrapperClassName?: string; // New prop for custom right wrapper classes
}

export function PageHero({
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  right,
  className,
  rightWrapperClassName // Destructure the new prop
}: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Spline scene="https://prod.spline.design/bs1dSedV2eKxt4JV/scene.splinecode" />
      </div>
      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className={cn(
          'flex flex-col-reverse justify-between gap-10 md:flex-row md:gap-20',
          !right && 'items-center text-center',
          right && 'items-center'
        )}>
          <div className={cn(
            'w-full',
            right ? 'md:w-3/5' : 'max-w-4xl mx-auto'
          )}>
            <Reveal>
              {kicker && (
                <div className="mb-4 text-sm font-semibold text-brand-blue uppercase tracking-wider text-slate-300">
                  {kicker}
                </div>
              )}
            </Reveal>

            <Reveal>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                {title}
              </h1>
            </Reveal>

            {subtitle && (
              <Reveal>
                <p className="mt-6 text-lg text-slate-300">
                  {subtitle}
                </p>
              </Reveal>
            )}

            {(primaryCta || secondaryCta) && (
              <Reveal>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  {primaryCta && (
                    <Button asChild size="lg">
                      <Link href={primaryCta.href}>{primaryCta.label}</Link>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button asChild variant="ghost" size="lg">
                      <Link href={secondaryCta.href}>
                        {secondaryCta.label}
                        <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  )}
                </div>
              </Reveal>
            )}
          </div>

          {right && (
            <div className={cn("relative w-full h-full md:w-2/5", rightWrapperClassName)}> {/* Added h-full here */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                {right}

              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
