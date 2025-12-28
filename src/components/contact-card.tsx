import Link from 'next/link';
import { Mail } from 'lucide-react';

export function ContactCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-sage/20 to-brand-blue/20 p-6 backdrop-blur">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white/20">
          <img
            src="https://iili.io/fEHi4vR.jpg"
            alt="Islam Yousry"
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-lg font-bold text-slate-900">Islam Yousry</h3>
        <p className="mt-1 text-sm text-slate-600">Head of Research & Strategy</p>

        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <Mail className="h-4 w-4" />
          Contact me
        </Link>
      </div>
    </div>
  );
}
