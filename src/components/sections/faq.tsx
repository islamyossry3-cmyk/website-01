import type { FAQ } from '@/content/products';

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="divide-y divide-slate-200/70 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-soft backdrop-blur">
      {items.map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 outline-none">
            <div className="flex items-start justify-between gap-6">
              <span>{f.q}</span>
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/5 text-slate-700 ring-1 ring-slate-900/10 transition group-open:rotate-45">
                +
              </span>
            </div>
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
