import { PageHero } from '@/components/sections/page-hero';
import { site } from '@/lib/site';
import { ContactForm } from './contact-form';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage({
  searchParams
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const intent = typeof searchParams?.intent === 'string' ? searchParams.intent : '';
  const product = typeof searchParams?.product === 'string' ? searchParams.product : '';

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let’s build your People & Culture ecosystem"
        subtitle="Tell us your objective and scale. We’ll recommend the cleanest starting point and map how to connect the full system."
        primaryCta={{ label: 'Book a Diagnosis', href: '/contact?intent=diagnosis' }}
        secondaryCta={{ label: 'Request Demo', href: '/contact?intent=demo' }}
      />

      <section className="relative py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
              <div className="text-sm font-bold text-slate-900">Direct contact</div>
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Email</div>
                  <a className="hover:text-slate-900" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Phone / WhatsApp</div>
                  <a className="hover:text-slate-900" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Regions</div>
                  <div>{site.contact.regions.join(', ')}</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="text-xs font-semibold text-white/70">Fastest path</div>
                <div className="mt-1 text-lg font-semibold">Diagnosis call (30 minutes)</div>
                <div className="mt-2 text-sm text-white/75">
                  We’ll identify your leverage point and recommend a clean starting module.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm defaultIntent={intent} defaultProduct={product} />
          </div>
        </div>
      </section>
    </>
  );
}
