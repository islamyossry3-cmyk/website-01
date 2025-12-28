import { PageHero } from '@/components/sections/page-hero';
import { products } from '@/content/products';
import { ProductsExplorer } from '@/components/sections/products-explorer';

export const metadata = {
  title: 'Products'
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Products"
        title="Solutions built as products—designed for adoption"
        subtitle="Browse our platforms, diagnostics, gamified activations, and enablement kits. Filter by domain, delivery type, or outcomes."
        primaryCta={{ label: 'Request Demo', href: '/contact?intent=demo' }}
        secondaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ProductsExplorer items={products} />
        </div>
      </section>
    </>
  );
}
