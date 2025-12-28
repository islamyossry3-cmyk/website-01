'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

export function TiltCard({
  children,
  className,
  maxTilt = 10
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -maxTilt;
      const ry = (px - 0.5) * maxTilt;
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    };
    const onLeave = () => {
      el.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      className={cn(
        'transform-gpu transition-transform duration-200 [transform-style:preserve-3d]',
        className
      )}
    >
      {children}
    </div>
  );
}
