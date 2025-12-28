'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

export function MouseGlow({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0',
        className
      )}
      style={{
        // @ts-expect-error CSS vars
        '--mx': '50%',
        '--my': '30%'
      }}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx) var(--my), rgba(246,119,130,0.22), transparent 55%), radial-gradient(520px circle at calc(var(--mx) * 0.8) calc(var(--my) * 1.1), rgba(12,85,74,0.18), transparent 60%)'
        }}
      />
    </div>
  );
}
