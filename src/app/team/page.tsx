'use client';

import { PageHero } from '@/components/sections/page-hero';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const team = [
  {
    name: 'Islam Yousry',
    role: 'Head of Research and Strategy',
    image: 'https://iili.io/fEHi4vR.jpg',
    shortBio: 'With over 15 years of experience, Islam specializes in innovation, strategic thinking, and employer positioning to secure a competitive edge in the employment market.',
    fullBio: 'With over 15 years of experience in the communication sector, Islam Yousry has cultivated expertise in innovation, strategic thinking, internal communications, and employee engagement. As a trained business consultant, he has spent more than 5 years developing employer positioning models, focusing on processes that empower organizations to secure a competitive edge. His work includes collaborating with multinational companies across the MENA region, driving impactful strategies that resonate with diverse audiences.',
  },
  {
    name: 'Dr. Mokhtar Ismail',
    role: 'Organizational Development Consultant',
    image: 'https://iili.io/fEN70Ft.jpg',
    shortBio: 'A distinguished consultant partnering with leaders to design strategies that foster growth, innovation, and employee engagement through cultural transformation.',
    fullBio: 'Dr. Mokhtar is a distinguished Organizational Development Consultant with extensive experience in driving cultural transformation and enhancing leadership effectiveness. With a strong foundation in behavioral science and change management, he partners with leaders to design strategies that foster growth and employee engagement. He excels at diagnosing organizational challenges to deliver tailored solutions that align people, processes, and purpose.',
  },
  {
    name: 'Beatriz Valderrama',
    role: 'Organizational Psychology Consultant',
    image: 'https://iili.io/fEN7Xt4.jpg',
    shortBio: 'A PhD in Organizational Psychology and President of EMCC Spain, Beatriz specializes in motivation, team coaching, and decoding human potential through psychological tools.',
    fullBio: 'Holding a PhD in Organizational Psychology and accredited as a Master Coach & Mentor, Dr. Beatriz leads as President of EMCC Spain and CEO of Alta Capacidad. She specializes in Motivation, Team Coaching, and Change Management, and is a pioneer in psychological tools, having designed assessments to decode human potential. A published author of six books, her work bridges strategic tools with employee aspirations to align human potential with business outcomes.',
  },
  {
    name: 'Abdurrahman Hosni',
    role: 'Head of Employee Experience',
    image: 'https://iili.io/fEN7M9s.jpg',
    shortBio: 'An expert in blending psychology with experience design to craft human-centered experiences that drive engagement, loyalty, and organizational success.',
    fullBio: 'Abdurrahman is an expert in blending psychology with experience design, specializing in crafting human-centered experiences that drive engagement and loyalty. As the founder of a hyper-specialized consultancy, he developed psychological tools to uncover deep insights into employee behavior. His approach ensures every experience is rooted in a profound understanding of human behavior, translating employer positioning into real-life employee experiences.',
  },
  {
    name: 'Sherif Zeinolabedin',
    role: 'Head of Communications',
    image: 'https://iili.io/fEN71cX.jpg',
    shortBio: 'With over 20 years of experience, Sherif masters the art of translating strategic directions into compelling content, impactful design, and powerful narratives.',
    fullBio: 'With over 20 years of experience in the communications field, Sherif has mastered the art of translating strategic directions into compelling content and impactful design. His expertise in corporate communication enables him to craft employee experiences and internal communications that not only execute strategic objectives but also deliver powerful narratives that employees can relate to and embrace.',
  },
];

function TeamMemberCard({ member }: { member: typeof team[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/70 shadow-soft transition hover:shadow-lg">
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-sage/10 to-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-brand-sage/20 transition group-hover:ring-brand-blue/30">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
          <p className="mt-2 text-sm font-semibold text-brand-blue">{member.role}</p>

          <AnimatePresence mode="wait">
            <motion.div
              key={expanded ? 'full' : 'short'}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {expanded ? member.fullBio : member.shortBio}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-brand-blue/30 bg-white px-4 py-2 text-sm font-bold text-brand-blue transition hover:-translate-y-0.5 hover:bg-brand-blue/5"
          >
            {expanded ? (
              <>
                <Minus className="h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Read More
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team & Capabilities"
        subtitle="Drawing on over 20 years of collective experience woven through the realms of advertising, applied psychology, branding, experience design, strategy, and internal communications."
      />

      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-sage to-brand-blue mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Join Our Team</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our mission of transforming people and culture solutions.
            </p>
            <Link
              href="/careers"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-pink px-8 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-pink/90"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
