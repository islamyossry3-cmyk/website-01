'use client';

import * as React from 'react';
import Link from 'next/link';

import { site } from '@/lib/site';

const intents = [
  { value: 'diagnosis', label: 'Book a Diagnosis (30 min)' },
  { value: 'demo', label: 'Request a Demo' },
  { value: 'quote', label: 'Request a Quote' },
  { value: 'security', label: 'Security & Governance' },
  { value: 'ethics', label: 'Ethics & Psychometrics' },
  { value: 'case-pack', label: 'Case Pack / Examples' },
  { value: 'career', label: 'Careers' },
  { value: 'other', label: 'Other' }
];

export function ContactForm({ defaultIntent, defaultProduct }: { defaultIntent?: string; defaultProduct?: string }) {
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [role, setRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [region, setRegion] = React.useState('Egypt');
  const [intent, setIntent] = React.useState(defaultIntent || 'diagnosis');
  const [product, setProduct] = React.useState(defaultProduct || '');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/submit-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          name,
          company,
          role,
          email,
          phone,
          region,
          intent,
          product,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setName('');
      setCompany('');
      setRole('');
      setEmail('');
      setPhone('');
      setMessage('');
      setProduct('');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-soft backdrop-blur">
      <div className="text-sm font-bold text-slate-900">Send a request</div>
      <div className="mt-2 text-sm text-slate-600">
        Fill out the form below and we'll get back to you shortly. Prefer direct email?{' '}
        <a className="font-semibold text-brand-green hover:underline" href={`mailto:${site.contact.email}`}>
          {site.contact.email}
        </a>
      </div>

      <form onSubmit={submit} className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full name">
            <input value={name} onChange={(e) => setName(e.target.value)} required className="input" placeholder="Your name" />
          </Field>
          <Field label="Company">
            <input value={company} onChange={(e) => setCompany(e.target.value)} className="input" placeholder="Company / organization" />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Role / title">
            <input value={role} onChange={(e) => setRole(e.target.value)} className="input" placeholder="e.g., Head of HR" />
          </Field>
          <Field label="Region">
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="input">
              {site.contact.regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Work email">
            <input value={email} onChange={(e) => setEmail(e.target.value)} required className="input" placeholder="name@company.com" type="email" />
          </Field>
          <Field label="Phone / WhatsApp">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input" placeholder="+20 ..." />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Intent">
            <select value={intent} onChange={(e) => setIntent(e.target.value)} className="input">
              {intents.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Product (optional)">
            <input value={product} onChange={(e) => setProduct(e.target.value)} className="input" placeholder="e.g., ai-onboarding-ecosystem" />
          </Field>
        </div>

        <Field label="Message">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input min-h-[120px]"
            placeholder="Tell us your objective, timeline, and scale..."
          />
        </Field>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? 'Sending...' : 'Send request'}
        </button>

        {submitted ? (
          <div className="mt-2 rounded-2xl bg-brand-green/10 p-4 text-sm text-brand-dark">
            <strong>Thank you!</strong> Your request has been received. We'll get back to you shortly at{' '}
            <span className="font-semibold">{email}</span>.
          </div>
        ) : null}

        {error ? (
          <div className="mt-2 rounded-2xl bg-red-50 p-4 text-sm text-red-900">
            <strong>Error:</strong> {error}
          </div>
        ) : null}

        <div className="mt-4 text-xs text-slate-500">
          By contacting us, you agree to share the provided details to respond to your request. See{' '}
          <Link className="underline" href="/privacy">
            Privacy
          </Link>
          .
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      {children}
    </label>
  );
}
