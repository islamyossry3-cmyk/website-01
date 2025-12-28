import type { Outcome } from './products';

export type DeliveryType = {
  slug: 'measure' | 'strategize' | 'implement' | 'transfer' | 'document';
  name: string;
  headline: string;
  subheadline: string;
  outcomes: Outcome[];
};

export const deliveryTypes: DeliveryType[] = [
  {
    slug: 'measure',
    name: 'Measure',
    headline: 'Measure what matters—before you invest in change',
    subheadline:
      'We deliver evidence, not assumptions. Our measurement work combines real-time signals, research, and human science to guide decisions.',
    outcomes: ['Retention', 'Performance', 'Engagement', 'Compliance', 'Advocacy', 'Attraction']
  },
  {
    slug: 'strategize',
    name: 'Strategize',
    headline: 'Strategy that is creative, science-based, and executable',
    subheadline:
      'We build strategies and plans based on evidence, behavioral science, and the realities of your organization—not generic frameworks.',
    outcomes: ['Attraction', 'Retention', 'Performance', 'Engagement', 'Advocacy', 'Compliance']
  },
  {
    slug: 'implement',
    name: 'Implement',
    headline: 'Implementation that makes change real',
    subheadline:
      'We execute strategy through campaigns, initiatives, tools, apps, and ready-made solutions—built to create measurable behavior change.',
    outcomes: ['Retention', 'Performance', 'Engagement', 'Compliance', 'Advocacy', 'Attraction']
  },
  {
    slug: 'transfer',
    name: 'Transfer',
    headline: 'Transfer capability—not dependency',
    subheadline:
      'We train leaders and teams to sustain systems internally—through workshops, kits, and practical operating rituals.',
    outcomes: ['Performance', 'Engagement', 'Retention', 'Compliance']
  },
  {
    slug: 'document',
    name: 'Document',
    headline: 'Document the work. Prove the impact. Amplify the story.',
    subheadline:
      'Documentation is how initiatives gain credibility, leadership visibility, and social proof—internally and publicly.',
    outcomes: ['Advocacy', 'Attraction', 'Engagement', 'Performance', 'Compliance']
  }
];

export const deliveryBySlug = new Map(deliveryTypes.map((d) => [d.slug, d]));
