import { PricingTier } from '@/content/products';

export function PricingTable({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {tiers.map((t, idx) => (
        <div
          key={t.name}
          className={[
            'rounded-3xl border p-6 shadow-soft backdrop-blur',
            idx === 1
              ? 'border-brand-pink/30 bg-[linear-gradient(135deg,rgba(246,119,130,0.10),rgba(12,85,74,0.06))]'
              : 'border-slate-200/70 bg-white/70'
          ].join(' ')}
        >
          <div className="text-sm font-bold text-slate-900">{t.name}</div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">{t.price}</div>
          <div className="mt-2 text-sm text-slate-600">{t.bestFor}</div>

          <div className="mt-5 space-y-2 text-sm text-slate-700">
            {t.includes.map((x) => (
              <div key={x} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
