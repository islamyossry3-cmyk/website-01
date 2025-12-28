import { cn } from '@/lib/cn';

export function AuroraBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'absolute inset-0 overflow-hidden',
        className
      )}
    >
      {/* Aurora blobs */}
      <div className="absolute -left-24 -top-24 h-[480px] w-[480px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(12,85,74,0.55),rgba(12,85,74,0)_60%)] blur-2xl" />
      <div className="absolute -right-24 -top-24 h-[520px] w-[520px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.45),rgba(246,119,130,0)_60%)] blur-2xl" />
      <div className="absolute -bottom-40 left-1/3 h-[620px] w-[620px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),rgba(255,255,255,0)_65%)] blur-2xl" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0.85)_70%)]" />
      {/* Texture */}
      <div className="noise absolute inset-0" />
    </div>
  );
}
