import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/content/products';
import { Badge } from './ui/badge';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative z-10 flex flex-wrap items-center gap-2">
        <Badge className="bg-slate-100 text-slate-700">{product.categoryLabel}</Badge>
        <Badge className="bg-emerald-50 text-emerald-700">
          {product.domain.replace('-', ' ')}
        </Badge>
      </div>

      <h3 className="relative z-10 mt-4 text-xl font-semibold text-slate-900">{product.name}</h3>
      <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.summary}</p>

      <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-brand-green">
        <span>View details</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>

      <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-brand-pink/10 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}
