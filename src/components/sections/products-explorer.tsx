'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import type { Product, Outcome, DomainSlug, DeliveryTypeSlug } from '@/content/products';
import { cn } from '@/lib/cn';

const domainOptions: { value: DomainSlug | 'all'; label: string }[] = [
  { value: 'all', label: 'All domains' },
  { value: 'platform', label: 'Platform' },
  { value: 'internal-communication', label: 'Internal Communication' },
  { value: 'employee-experience', label: 'Employee Experience' },
  { value: 'employee-engagement', label: 'Employee Engagement' },
  { value: 'culture', label: 'Culture' },
  { value: 'employer-branding', label: 'Employer Branding' },
  { value: 'documentation', label: 'Documentation' }
];

const deliveryOptions: { value: DeliveryTypeSlug | 'all'; label: string }[] = [
  { value: 'all', label: 'All delivery types' },
  { value: 'platform', label: 'Platform' },
  { value: 'measure', label: 'Measure' },
  { value: 'strategize', label: 'Strategize' },
  { value: 'implement', label: 'Implement' },
  { value: 'transfer', label: 'Transfer' },
  { value: 'document', label: 'Document' }
];

const outcomeOptions: { value: Outcome | 'all'; label: string }[] = [
  { value: 'all', label: 'All outcomes' },
  { value: 'Attraction', label: 'Attraction' },
  { value: 'Retention', label: 'Retention' },
  { value: 'Performance', label: 'Performance' },
  { value: 'Engagement', label: 'Engagement' },
  { value: 'Advocacy', label: 'Advocacy' },
  { value: 'Compliance', label: 'Compliance' }
];

export function ProductsExplorer({ items }: { items: Product[] }) {
  const [q, setQ] = React.useState('');
  const [domain, setDomain] = React.useState<(typeof domainOptions)[number]['value']>('all');
  const [delivery, setDelivery] = React.useState<(typeof deliveryOptions)[number]['value']>('all');
  const [outcome, setOutcome] = React.useState<(typeof outcomeOptions)[number]['value']>('all');

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((p) => {
      const matchQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query);

      const matchDomain = domain === 'all' ? true : p.domain === domain;
      const matchDelivery = delivery === 'all' ? true : p.deliveryTypes.includes(delivery);
      const matchOutcome = outcome === 'all' ? true : p.outcomes.includes(outcome);

      return matchQuery && matchDomain && matchDelivery && matchOutcome;
    });
  }, [items, q, domain, delivery, outcome]);

  return (
    <div className="mt-10">
      <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <SlidersHorizontal className="h-4 w-4 text-brand-green" />
            Filter products
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
            <label className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
              />
            </label>

            <Select value={domain} onChange={(v) => setDomain(v as any)} options={domainOptions} />
            <Select value={delivery} onChange={(v) => setDelivery(v as any)} options={deliveryOptions} />
            <Select value={outcome} onChange={(v) => setOutcome(v as any)} options={outcomeOptions} />
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-500">
          Showing <b className="text-slate-900">{filtered.length}</b> of{' '}
          <b className="text-slate-900">{items.length}</b> products
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <ProductCardClient key={p.slug} product={p} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-slate-200/70 bg-slate-50 p-8 text-center">
          <div className="text-sm font-bold text-slate-900">No matches</div>
          <div className="mt-2 text-sm text-slate-600">Try clearing filters or searching different keywords.</div>
          <button
            onClick={() => {
              setQ('');
              setDomain('all');
              setDelivery('all');
              setOutcome('all');
            }}
            className="mt-5 rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Reset filters
          </button>
        </div>
      ) : null}
    </div>
  );
}

function Select<T extends string>({
  value,
  onChange,
  options
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

function ProductCardClient({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur transition',
        'hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white'
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
          {product.categoryLabel}
        </span>
        <span className="rounded-full bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.10))] px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-900/10">
          {product.domain.replace('-', ' ')}
        </span>
      </div>

      <div className="mt-4 text-lg font-semibold text-slate-900">{product.name}</div>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{product.summary}</p>

      <div className="mt-5 flex items-center justify-between text-sm font-semibold text-brand-green">
        <span>View details</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.22),transparent_60%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
    </Link>
  );
}
