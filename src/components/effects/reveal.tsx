'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

type AnimationVariant = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotateIn' | 'blur' | 'none';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  variant?: AnimationVariant;
  amount?: number;
  duration?: number;
  enableOutro?: boolean;
  className?: string;
  stagger?: number;
}

const getVariants = (variant: AnimationVariant, amount: number) => {
  switch (variant) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      };
    case 'slideUp':
      return {
        initial: { opacity: 0, y: amount },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -amount }
      };
    case 'slideDown':
      return {
        initial: { opacity: 0, y: -amount },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: amount }
      };
    case 'slideLeft':
      return {
        initial: { opacity: 0, x: amount },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -amount }
      };
    case 'slideRight':
      return {
        initial: { opacity: 0, x: -amount },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: amount }
      };
    case 'scale':
      return {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 }
      };
    case 'rotateIn':
      return {
        initial: { opacity: 0, rotateX: 15, y: amount },
        animate: { opacity: 1, rotateX: 0, y: 0 },
        exit: { opacity: 0, rotateX: -15, y: -amount }
      };
    case 'blur':
      return {
        initial: { opacity: 0, filter: 'blur(10px)' },
        animate: { opacity: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, filter: 'blur(10px)' }
      };
    case 'none':
      return {
        initial: {},
        animate: {},
        exit: {}
      };
    default:
      return {
        initial: { opacity: 0, y: amount },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -amount }
      };
  }
};

export function Reveal({
  children,
  delay = 0,
  variant = 'slideUp',
  amount = 40,
  duration = 0.8,
  enableOutro = false,
  className
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const variants = getVariants(variant, amount);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: enableOutro ? ['start end', 'end start'] : ['start end', 'center center']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  if (!enableOutro) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={variants.initial}
        whileInView={variants.animate}
        viewport={{ once: true, margin: '-60px', amount: 0.2 }}
        transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <ScrollReveal
      ref={ref}
      progress={smoothProgress}
      variants={variants}
      duration={duration}
      delay={delay}
      className={className}
    >
      {children}
    </ScrollReveal>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  variants: ReturnType<typeof getVariants>;
  duration: number;
  delay: number;
  className?: string;
}

const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  function ScrollReveal({ children, progress, variants, className }, ref) {
    const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);

    const y = useTransform(progress, [0, 0.2, 0.5, 1], [
      typeof variants.initial.y === 'number' ? variants.initial.y : 0,
      0,
      0,
      -100
    ]);

    const x = useTransform(progress, [0, 0.2, 0.8, 1], [
      typeof variants.initial.x === 'number' ? variants.initial.x : 0,
      0,
      0,
      typeof variants.exit.x === 'number' ? variants.exit.x : 0
    ]);

    const scale = useTransform(progress, [0, 0.2, 0.8, 1], [
      typeof variants.initial.scale === 'number' ? variants.initial.scale : 1,
      1,
      1,
      typeof variants.exit.scale === 'number' ? variants.exit.scale : 1
    ]);

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ opacity, y, x, scale }}
      >
        {children}
      </motion.div>
    );
  }
);

export function StaggerReveal({
  children,
  staggerDelay = 0.1,
  variant = 'slideUp',
  amount = 40,
  enableOutro = false,
  className
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  variant?: AnimationVariant;
  amount?: number;
  enableOutro?: boolean;
  className?: string;
}) {
  const childArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <Reveal
          key={index}
          delay={index * staggerDelay}
          variant={variant}
          amount={amount}
          enableOutro={enableOutro}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
