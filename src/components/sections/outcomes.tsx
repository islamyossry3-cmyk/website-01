import { Reveal } from '@/components/effects/reveal';
import { TiltCard } from '@/components/effects/tilt-card';
import { cn } from '@/lib/cn';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ShieldCheck, Sparkles, Gauge, Users, Megaphone } from 'lucide-react';

const outcomes = [
  {
    title: 'Attraction',
    icon: ArrowUpRight,
    desc: 'Attract best-fit talent by aligning the employer promise with a real employee experience.'
  },
  {
    title: 'Retention',
    icon: Users,
    desc: 'Reduce early churn and long-term attrition by building commitment, clarity, and psychological safety.'
  },
  {
    title: 'Performance',
    icon: Gauge,
    desc: 'Accelerate time-to-productivity with structured journeys, personalized learning, and clear milestones.'
  },
  {
    title: 'Engagement',
    icon: Sparkles,
    desc: 'Unlock extra-mile behavior: innovation, participation, CSR involvement, and discretionary effort.'
  },
  {
    title: 'Advocacy',
    icon: Megaphone,
    desc: 'Turn employees into credible ambassadors—internally and publicly—because their experience is worth sharing.'
  },
  {
    title: 'Compliance',
    icon: ShieldCheck,
    desc: 'Increase adherence to rules, cybersecurity, safety, and codes of conduct through memorable, behavior-based learning.'
  }
] as const;

export function OutcomesSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal enableOutro>
          <div className="flex flex-col gap-3">
            <Reveal variant="fade" delay={0.1}>
              <Badge className="w-fit bg-[linear-gradient(135deg,rgba(12,85,74,0.10),rgba(246,119,130,0.10))] text-slate-800 ring-slate-900/10">
                Six outcomes. One integrated system.
              </Badge>
            </Reveal>
            <Reveal variant="slideUp" delay={0.2}>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                We don't sell "HR activities." We engineer measurable outcomes.
              </h2>
            </Reveal>
            <Reveal variant="slideUp" delay={0.3}>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Each module is built to move an outcome—then connect back into one operating cockpit for People & Culture leadership.
              </p>
            </Reveal>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, idx) => (
            <Reveal key={o.title} delay={0.05 * idx} variant="scale" enableOutro>
              <TiltCard className="h-full">
                <div
                  className={cn(
                    'group h-full rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur transition',
                    'hover:border-slate-300 hover:bg-white'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-xl bg-slate-900/5 p-3 ring-1 ring-slate-900/10">
                      <o.icon className="h-5 w-5 text-brand-green" />
                    </div>
                    <div className="h-9 w-9 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,119,130,0.25),transparent_55%)] opacity-0 blur transition group-hover:opacity-100" />
                  </div>

                  <div className="mt-4 text-lg font-semibold text-slate-900">{o.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-64 bg-[radial-gradient(circle_at_center,rgba(12,85,74,0.12),transparent_60%)] blur-2xl" />
    </section>
  );
}
