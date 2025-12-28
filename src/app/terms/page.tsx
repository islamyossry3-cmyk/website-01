import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';

export const metadata = {
  title: 'Terms'
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Use"
        subtitle="This is a placeholder terms page. Replace with your full legal terms before production."
        primaryCta={{ label: 'Contact', href: '/contact' }}
        secondaryCta={{ label: 'Privacy', href: '/privacy' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="prose prose-slate max-w-none">
              <h2>Use of site</h2>
              <p>
                This website is provided for informational purposes. Content may change without notice.
              </p>

              <h2>Intellectual property</h2>
              <p>
                Logos, product names, and materials are the property of their respective owners. Do not reuse without permission.
              </p>

              <h2>No warranties</h2>
              <p>
                The site is provided “as is” without warranties. Any reliance on content is at your own risk.
              </p>

              <h2>Contact</h2>
              <p>For questions, please contact us via the Contact page.</p>

              <p className="text-sm text-slate-500">
                Replace this page with your official legal terms, including disclaimers, limitations, and jurisdiction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
