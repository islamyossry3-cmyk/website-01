import type { Outcome } from './products';

export type Domain = {
  slug:
    | 'internal-communication'
    | 'employee-experience'
    | 'employee-engagement'
    | 'culture'
    | 'employer-branding';
  name: string;
  short: string;
  headline: string;
  subheadline: string;
  outcomes: Outcome[];
  featuredProductSlugs: string[];
};

export const domains: Domain[] = [
  {
    slug: 'internal-communication',
    name: 'Internal Communication',
    short: 'IC',
    headline: 'Internal Communication employees actually absorb',
    subheadline:
      'We move internal communication from distribution to retention—using measurement, design, and gamified delivery.',
    outcomes: ['Compliance', 'Performance', 'Engagement', 'Advocacy'],
    featuredProductSlugs: ['ic-quality-index', 'trivia-clans', 'spot-the-problem', 'ic-mobile-app']
  },
  {
    slug: 'employee-experience',
    name: 'Employee Experience',
    short: 'EX',
    headline: 'Employee Experience that proves your EVP from Day 1',
    subheadline:
      'We engineer the “First Truth Moment” and extend it into a measurable experience journey—powered by personalization and real-time insight.',
    outcomes: ['Retention', 'Performance', 'Engagement', 'Advocacy', 'Compliance'],
    featuredProductSlugs: [
      'employee-journey-assessment',
      'ai-onboarding-ecosystem',
      'ex-journey-dashboard',
      'ex-management-academy'
    ]
  },
  {
    slug: 'employee-engagement',
    name: 'Employee Engagement',
    short: 'EE',
    headline: 'Engagement engineered through psychology + play',
    subheadline:
      'We build engagement systems that sustain energy and align human motives with business goals—without turning engagement into forced fun.',
    outcomes: ['Engagement', 'Performance', 'Retention', 'Advocacy', 'Compliance'],
    featuredProductSlugs: [
      'satisfaction-pulse-suite',
      'business-fantasy',
      'digital-treasure-hunt',
      'engagement-ideas-generator'
    ]
  },
  {
    slug: 'culture',
    name: 'Culture',
    short: 'Culture',
    headline: 'Culture that becomes behavior',
    subheadline:
      'We diagnose culture honestly, activate it deliberately, and equip leaders to sustain it daily—so culture becomes execution power.',
    outcomes: ['Engagement', 'Retention', 'Performance', 'Compliance', 'Advocacy'],
    featuredProductSlugs: [
      'persona-quest-ocai',
      'psych-based-team-building',
      'culture-leader-kit',
      'digital-hackathon',
      'empathy-game'
    ]
  },
  {
    slug: 'employer-branding',
    name: 'Employer Branding',
    short: 'EB',
    headline: 'Employer Branding built on reality—not slogans',
    subheadline:
      'We close the gap between what you promise and what employees experience—then turn truth into an EVP that attracts best-fit talent.',
    outcomes: ['Attraction', 'Retention', 'Advocacy', 'Performance', 'Compliance'],
    featuredProductSlugs: ['evp-reality-audit', 'evp-strategy-sprint', 'student-career-matcher']
  }
];

export const domainBySlug = new Map(domains.map((d) => [d.slug, d]));
