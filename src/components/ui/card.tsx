import { cn } from '@/lib/cn';

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  );
}

export function BrandCard({
  children,
  className,
  variant = 'default'
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'accent' | 'green' | 'sage';
}) {
  const styles = {
    default: 'bg-white border border-slate-200 text-slate-900',
    dark: 'bg-brand-dark text-white border border-brand-sage/20',
    accent: 'bg-brand-pink text-white border-none',
    green: 'bg-brand-green text-white border-none',
    sage: 'bg-brand-sage text-white border-none'
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl p-8 shadow-md',
        styles[variant],
        className
      )}
    >
      {variant !== 'default' && (
        <div className="noise-overlay absolute inset-0 z-0" />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
