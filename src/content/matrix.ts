import { domains } from './domains';
import { deliveryTypes } from './deliveryTypes';

export type MatrixItem = {
  label: string;
  type: 'Product' | 'Service';
  href: string;
};

export type MatrixCell = {
  domainSlug: (typeof domains)[number]['slug'];
  deliverySlug: (typeof deliveryTypes)[number]['slug'];
  title: string;
  description: string;
  items: MatrixItem[];
};

const product = (label: string, slug: string): MatrixItem => ({
  label,
  type: 'Product',
  href: `/products/${slug}`
});

const service = (label: string): MatrixItem => ({
  label,
  type: 'Service',
  href: `/contact?intent=diagnosis`
});

export const matrix: MatrixCell[] = [
  // IC
  {
    domainSlug: 'internal-communication',
    deliverySlug: 'measure',
    title: 'Measure IC effectiveness',
    description: 'Assess channel architecture, clarity, leadership comms, and governance—then identify signal loss.',
    items: [product('IC Quality Index', 'ic-quality-index')]
  },
  {
    domainSlug: 'internal-communication',
    deliverySlug: 'strategize',
    title: 'Strategize IC architecture',
    description: 'Build a channel strategy, governance rules, and editorial cadence that reduces noise and increases retention.',
    items: [service('IC Strategy Sprint'), service('Governance & Editorial Operating Model')]
  },
  {
    domainSlug: 'internal-communication',
    deliverySlug: 'implement',
    title: 'Implement memorable IC delivery',
    description: 'Use gamified learning, scene-based recognition, and a white-label channel to drive real recall.',
    items: [
      product('Trivia Clans', 'trivia-clans'),
      product('Spot the Problem', 'spot-the-problem'),
      product('IC Mobile App', 'ic-mobile-app')
    ]
  },
  {
    domainSlug: 'internal-communication',
    deliverySlug: 'transfer',
    title: 'Transfer capability to leaders',
    description: 'Enable leadership communication rituals, templates, and manager playbooks to sustain clarity.',
    items: [service('Leadership Comms Enablement Kit'), service('IC Operating Rhythm Workshop')]
  },
  {
    domainSlug: 'internal-communication',
    deliverySlug: 'document',
    title: 'Document campaigns and programs',
    description: 'Capture initiatives with proof and storytelling assets that leadership can reuse and amplify.',
    items: [product('Documentation & Storytelling Suite', 'documentation-storytelling-suite')]
  },

  // EX
  {
    domainSlug: 'employee-experience',
    deliverySlug: 'measure',
    title: 'Measure experience friction',
    description: 'Map moments that matter and quantify where experience drifts—by cohort and journey stage.',
    items: [product('Employee Journey Assessment Tool', 'employee-journey-assessment')]
  },
  {
    domainSlug: 'employee-experience',
    deliverySlug: 'strategize',
    title: 'Strategize EX journeys',
    description: 'Design 30/60/90-day journeys, milestones, and measurement—aligned to EVP proof points.',
    items: [product('AI‑Powered Onboarding Ecosystem', 'ai-onboarding-ecosystem'), service('EX Operating Model Blueprint')]
  },
  {
    domainSlug: 'employee-experience',
    deliverySlug: 'implement',
    title: 'Implement digital EX',
    description: 'Deploy personalized journeys and dashboards that show who is progressing and where support is needed.',
    items: [product('EX Journey Dashboard', 'ex-journey-dashboard'), product('AI‑Powered Onboarding Ecosystem', 'ai-onboarding-ecosystem')]
  },
  {
    domainSlug: 'employee-experience',
    deliverySlug: 'transfer',
    title: 'Transfer EX management skill',
    description: 'Equip managers with rituals and tools to sustain experience and accelerate productivity.',
    items: [product('EX Management Academy & Kit', 'ex-management-academy')]
  },
  {
    domainSlug: 'employee-experience',
    deliverySlug: 'document',
    title: 'Document journey programs',
    description: 'Prove impact of onboarding and EX initiatives through storytelling and leadership-ready recap.',
    items: [product('Documentation & Storytelling Suite', 'documentation-storytelling-suite')]
  },

  // EE
  {
    domainSlug: 'employee-engagement',
    deliverySlug: 'measure',
    title: 'Measure engagement drivers',
    description: 'Run pulses that measure drivers and translate insights into leader actions.',
    items: [product('Satisfaction Pulse Suite', 'satisfaction-pulse-suite')]
  },
  {
    domainSlug: 'employee-engagement',
    deliverySlug: 'strategize',
    title: 'Strategize engagement system',
    description: 'Build an engagement operating cadence, recognition rules, and leader playbooks.',
    items: [service('Engagement Operating Model'), service('Recognition System Design')]
  },
  {
    domainSlug: 'employee-engagement',
    deliverySlug: 'implement',
    title: 'Implement engagement activations',
    description: 'Launch gamified performance, quests, and team-based experiences that strengthen belonging.',
    items: [
      product('Business Fantasy', 'business-fantasy'),
      product('Digital Treasure Hunt', 'digital-treasure-hunt')
    ]
  },
  {
    domainSlug: 'employee-engagement',
    deliverySlug: 'transfer',
    title: 'Transfer leader actions',
    description: 'Give leaders a practical engine that outputs engagement actions tailored to context.',
    items: [product('Engagement Ideas Generator', 'engagement-ideas-generator')]
  },
  {
    domainSlug: 'employee-engagement',
    deliverySlug: 'document',
    title: 'Document engagement initiatives',
    description: 'Capture program impact, participation, and narrative to sustain momentum and advocacy.',
    items: [product('Documentation & Storytelling Suite', 'documentation-storytelling-suite')]
  },

  // Culture
  {
    domainSlug: 'culture',
    deliverySlug: 'measure',
    title: 'Measure culture truth',
    description: 'Low-resistance diagnostics that reveal current vs desired culture and where gaps live.',
    items: [product('Persona Quest (OCAI)', 'persona-quest-ocai')]
  },
  {
    domainSlug: 'culture',
    deliverySlug: 'strategize',
    title: 'Strategize culture activation',
    description: 'Translate values into behaviors, rituals, and governance that leaders can execute.',
    items: [service('Values → Behaviors Blueprint'), service('Culture Activation Roadmap')]
  },
  {
    domainSlug: 'culture',
    deliverySlug: 'implement',
    title: 'Implement culture experiences',
    description: 'Run experiences designed to shift behavior—team building, empathy, innovation, collaboration.',
    items: [
      product('Psychology‑Based Team Building', 'psych-based-team-building'),
      product('Empathy Game', 'empathy-game'),
      product('Digital Hackathon', 'digital-hackathon')
    ]
  },
  {
    domainSlug: 'culture',
    deliverySlug: 'transfer',
    title: 'Transfer culture leadership',
    description: 'Equip leaders and champions with scripts, rituals, and reinforcement methods.',
    items: [product('Culture Leader Kit', 'culture-leader-kit')]
  },
  {
    domainSlug: 'culture',
    deliverySlug: 'document',
    title: 'Document culture initiatives',
    description: 'Capture culture work and impact to sustain credibility and repeatability.',
    items: [product('Documentation & Storytelling Suite', 'documentation-storytelling-suite')]
  },

  // EB
  {
    domainSlug: 'employer-branding',
    deliverySlug: 'measure',
    title: 'Measure EVP truth gap',
    description: 'Compare market perception and employee reality—then identify the gap that drives early churn.',
    items: [product('EVP Reality Audit', 'evp-reality-audit')]
  },
  {
    domainSlug: 'employer-branding',
    deliverySlug: 'strategize',
    title: 'Strategize EVP',
    description: 'Define EVP pillars, proof points, and messaging architecture rooted in real employee truth.',
    items: [product('EVP Strategy Sprint', 'evp-strategy-sprint')]
  },
  {
    domainSlug: 'employer-branding',
    deliverySlug: 'implement',
    title: 'Implement talent funnels',
    description: 'Deploy value-first experiences that become measurable best-fit pipelines.',
    items: [product('Student Career Matcher', 'student-career-matcher')]
  },
  {
    domainSlug: 'employer-branding',
    deliverySlug: 'transfer',
    title: 'Transfer EB consistency',
    description: 'Enable internal teams to maintain consistent messaging and proof points over time.',
    items: [service('Employer Brand Content Playbook'), service('Recruiter Messaging Kit')]
  },
  {
    domainSlug: 'employer-branding',
    deliverySlug: 'document',
    title: 'Document EVP proof points',
    description: 'Tell the real story—capture experiences that become recruitment and advocacy assets.',
    items: [product('Documentation & Storytelling Suite', 'documentation-storytelling-suite')]
  }
];

export function getMatrixCell(domainSlug: MatrixCell['domainSlug'], deliverySlug: MatrixCell['deliverySlug']) {
  return matrix.find((c) => c.domainSlug === domainSlug && c.deliverySlug === deliverySlug);
}

