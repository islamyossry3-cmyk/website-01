'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface HeroIntroProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroIntro({ children, className }: HeroIntroProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(smoothProgress, [0, 0.5], [0, -50]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, scale, y }}
    >
      {children}
    </motion.div>
  );
}

export function HeroContent({
  children,
  delay = 0,
  direction = 'up',
  className
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  className?: string;
}) {
  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 60 };
      case 'down':
        return { opacity: 0, y: -60 };
      case 'left':
        return { opacity: 0, x: 60 };
      case 'right':
        return { opacity: 0, x: -60 };
      case 'scale':
        return { opacity: 0, scale: 0.9 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialState()}
      animate={getAnimateState()}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroImage({
  children,
  delay = 0.3,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const y = useTransform(smoothProgress, [0, 1], [0, 100]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      style={{ y, scale, opacity }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
