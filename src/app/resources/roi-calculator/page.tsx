import { PageHero } from '@/components/sections/page-hero';
import { ROICalculator } from './roi-calculator';

export const metadata = {
  title: 'ROI Calculator'
};

export default function ROICalculatorPage() {
  return (
    <>
      <PageHero
        kicker="Resource"
        title="People & Culture ROI Calculator"
        subtitle="Estimate the cost of attrition and slow productivity—and model the ROI of improving retention and performance. (Indicative only.)"
        primaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ROICalculator />
        </div>
      </section>
    </>
  );
}
