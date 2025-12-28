import * as React from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';

export function buttonClasses(variant: Variant = 'primary') {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
  const variants: Record<Variant, string> = {
    primary:
      'bg-brand-green text-white shadow-glow hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(12,85,74,0.25)] active:translate-y-0',
    secondary:
      'bg-white/10 text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'bg-transparent text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0'
  };
  return cn(base, variants[variant]);
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return <button ref={ref} className={cn(buttonClasses(variant), className)} {...props} />;
  }
);
Button.displayName = 'Button';
