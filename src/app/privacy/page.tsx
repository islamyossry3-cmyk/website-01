import { PageHero } from '@/components/sections/page-hero';
import { Reveal } from '@/components/effects/reveal';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Privacy'
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        subtitle="This is a lightweight placeholder policy. Replace with your full legal privacy policy before production."
        primaryCta={{ label: 'Contact', href: '/contact' }}
        secondaryCta={{ label: 'Security & Data', href: '/security' }}
      />

      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="prose prose-slate max-w-none">
              <h2>Overview</h2>
              <p>
                GoldinKollar (“we”, “us”) collects the information you provide when you contact us (name, email, company, message)
                to respond to your request. We do not sell your personal data.
              </p>

              <h2>What we collect</h2>
              <ul>
                <li>Contact details you submit via email or forms</li>
                <li>Basic usage analytics (if enabled) to improve site experience</li>
              </ul>

              <h2>How we use it</h2>
              <ul>
                <li>Respond to inquiries and provide requested information</li>
                <li>Schedule demos / diagnosis calls</li>
                <li>Improve services and site experience</li>
              </ul>

              <h2>Contact</h2>
              <p>
                For privacy questions, email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
              </p>

              <p className="text-sm text-slate-500">
                Replace this page with your legal policy, including cookies, processors, retention, and regional requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
