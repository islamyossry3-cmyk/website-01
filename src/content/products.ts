import type { ReactNode } from 'react';

export type Outcome =
  | 'Attraction'
  | 'Retention'
  | 'Performance'
  | 'Engagement'
  | 'Advocacy'
  | 'Compliance';

export type DomainSlug =
  | 'internal-communication'
  | 'employee-experience'
  | 'employee-engagement'
  | 'culture'
  | 'employer-branding'
  | 'platform'
  | 'documentation';

export type DeliveryTypeSlug =
  | 'measure'
  | 'strategize'
  | 'implement'
  | 'transfer'
  | 'document'
  | 'platform';

export type PricingTier = {
  name: string;
  price: string; // keep flexible: "Quote-based", "Starting from …", etc.
  bestFor: string;
  includes: string[];
};

export type FAQ = {
  q: string;
  a: string;
};

export type Product = {
  slug: string;
  name: string;
  categoryLabel: string; // "Platform", "Product", "Suite", etc.
  domain: DomainSlug;
  deliveryTypes: DeliveryTypeSlug[];
  tagline: string;
  summary: string;

  outcomes: Outcome[];
  keyFeatures: string[];
  whatYouGet: string[];
  howItWorks: string[];

  pricingTiers: PricingTier[];
  faqs: FAQ[];

  media: {
    heroStyle?: 'aurora' | 'grid' | 'spotlight';
    heroImage?: string; // /media/...
    gallery?: string[]; // /media/...
    video?: {
      label: string;
      embedUrl?: string; // optional (youtube/vimeo)
      note?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };
};

const quoteBased = (name: string, bestFor: string, includes: string[]): PricingTier => ({
  name,
  price: 'Quote-based',
  bestFor,
  includes
});

export const products: Product[] = [
  {
    slug: 'people-culture-command-center',
    name: 'People & Culture Command Center',
    categoryLabel: 'Platform',
    domain: 'platform',
    deliveryTypes: ['platform'],
    tagline: 'One command center for Heads of People & Culture—integrating IC, EX, EE, Culture, and EB.',
    summary:
      'A unified cockpit that consolidates signals, measurement outputs, and activation levers across the People & Culture ecosystem—so leadership can see what is working, what is drifting, and what to do next.',

    outcomes: ['Attraction', 'Retention', 'Performance', 'Engagement', 'Advocacy', 'Compliance'],
    keyFeatures: [
      'Cross-domain health map (IC / EX / EE / Culture / EB)',
      'Cohort & department drill-down views',
      'Intervention recommendations (what to activate next)',
      'Governance-ready reporting & audit-friendly exports',
      'Role-based access (leadership vs HR vs managers)'
    ],
    whatYouGet: [
      'Command Center workspace (modules + dashboards)',
      'Implementation blueprint (what connects to what)',
      'Decision-ready reporting templates',
      'Enablement session for your People & Culture team'
    ],
    howItWorks: [
      'Align on outcomes (Attraction / Retention / Performance / Engagement / Advocacy / Compliance).',
      'Map domains + tools currently in use (HRIS, LMS, comms, surveys).',
      'Connect GoldinKollar products and measurement outputs into the Command Center.',
      'Run a pilot on selected cohorts, then scale with governance.'
    ],
    pricingTiers: [
      quoteBased('Pilot', 'Teams starting their ecosystem journey', [
        '1–2 modules enabled',
        'Baseline views + executive summary',
        'Pilot cohort reporting'
      ]),
      quoteBased('Enterprise', 'Organizations operating multi-domain People & Culture systems', [
        'All modules (IC/EX/EE/Culture/EB)',
        'Role-based access & governance layer',
        'Quarterly operating rhythm + analytics'
      ]),
      quoteBased('Enterprise+', 'Complex environments (multi-site / regulated / national programs)', [
        'Custom data integration approach',
        'Advanced segmentation & dashboards',
        'Change governance support'
      ])
    ],
    faqs: [
      {
        q: 'Is this a reporting dashboard only?',
        a: 'No. It is a control layer—built to translate signals into interventions and governance-ready decisions.'
      },
      {
        q: 'Can we start with one module?',
        a: 'Yes. Many clients start with one domain (e.g., EX onboarding) then expand as value is proven.'
      }
    ],
    media: {
      heroStyle: 'aurora',
      video: { label: '2‑minute platform walkthrough', note: 'Add your YouTube/Vimeo embed URL later.' }
    },
    seo: {
      title: 'People & Culture Command Center | GoldinKollar™',
      description:
        'A unified command center for People & Culture leaders—integrating IC, EX, EE, Culture, and Employer Branding into one measurable system.'
    }
  },

  // --- Internal Communication (IC)
  {
    slug: 'ic-quality-index',
    name: 'IC Quality Index',
    categoryLabel: 'Measurement',
    domain: 'internal-communication',
    deliveryTypes: ['measure'],
    tagline: 'Turn internal communication from “sending” into a measurable asset.',
    summary:
      'A metric-based audit that assesses channel architecture, message clarity, leadership communication capability, and governance—then produces a prioritized plan to fix signal loss.',

    outcomes: ['Compliance', 'Performance', 'Engagement', 'Advocacy'],
    keyFeatures: [
      'Channel architecture audit',
      'Signal loss & friction mapping',
      'Leadership comms capability assessment',
      'Governance model recommendations',
      'Clear maturity score + roadmap'
    ],
    whatYouGet: [
      'IC maturity scorecard',
      'Channel map + content flow diagnostics',
      'Friction hotspots and quick wins',
      '12‑week prioritized improvement plan'
    ],
    howItWorks: [
      'Collect inputs (channels, cadence, governance, samples).',
      'Run diagnostics and stakeholder validation.',
      'Deliver maturity scoring + friction map.',
      'Translate into a practical annual plan and operating rules.'
    ],
    pricingTiers: [
      quoteBased('Baseline', 'Teams needing a fast, evidence-based diagnosis', [
        'Scorecard + channel map',
        'Quick wins + prioritized roadmap'
      ]),
      quoteBased('Deep Dive', 'Complex environments with multiple channels / sites', [
        'Expanded stakeholder inputs',
        'Segmented results by cohort',
        'Governance model & rituals'
      ]),
      quoteBased('Enterprise', 'Organizations standardizing IC across regions', [
        'Multi-region benchmarking',
        'Leadership enablement plan',
        'Quarterly measurement cadence'
      ])
    ],
    faqs: [
      { q: 'Can we run this for a single business unit?', a: 'Yes. It can be scoped to one unit, then expanded enterprise-wide.' },
      { q: 'Does it replace our existing IC tools?', a: 'Not necessarily. It helps you optimize the system and reduce noise across tools.' }
    ],
    media: {
      heroStyle: 'grid'
    },
    seo: {
      title: 'IC Quality Index | GoldinKollar™',
      description: 'A metric-based audit to measure and improve internal communication effectiveness, retention, and governance.'
    }
  },
  {
    slug: 'trivia-clans',
    name: 'Trivia Clans',
    categoryLabel: 'Gamified Learning',
    domain: 'internal-communication',
    deliveryTypes: ['implement'],
    tagline: 'A strategy gameplay experience that turns awareness into competition—and real recall.',
    summary:
      'A “territory conquest” knowledge war game. Teams win by answering questions about policies, products, values, cybersecurity, and key business narratives—making mandatory knowledge social and memorable.',

    outcomes: ['Compliance', 'Performance', 'Engagement'],
    keyFeatures: [
      'Team-based competitive gameplay',
      'Configurable knowledge libraries',
      'Leaderboards + recognition mechanics',
      'Analytics on participation and recall',
      'Suitable for policy launches and corporate narratives'
    ],
    whatYouGet: [
      'Game setup + branding',
      'Question bank design support (or import)',
      'Facilitation guide + event kit',
      'Post-game insights report'
    ],
    howItWorks: [
      'Define your knowledge outcomes (what must be remembered).',
      'Build question pools and rounds by audience and difficulty.',
      'Run the game live or hybrid.',
      'Report results + reinforce with follow-up microlearning.'
    ],
    pricingTiers: [
      quoteBased('Event Pack', 'Single activation (townhall / campaign / onboarding week)', [
        'One event configuration',
        'Standard analytics report'
      ]),
      quoteBased('Program', 'Multi-round campaigns (monthly/quarterly)', [
        'Multiple events + evolving content',
        'Participation + recall trends'
      ]),
      quoteBased('Enterprise', 'Large-scale, multi-site rollouts', [
        'Audience segmentation',
        'Governance + content operations support'
      ])
    ],
    faqs: [
      { q: 'Will employees take games seriously?', a: 'Yes—when content ties directly to real work and recognition. We design the mechanics accordingly.' },
      { q: 'Can it be used for compliance?', a: 'Yes. It is designed to improve recall and reduce “read and forget” behavior.' }
    ],
    media: { heroStyle: 'spotlight' },
    seo: {
      title: 'Trivia Clans | GoldinKollar™',
      description: 'A competitive knowledge war game that increases content retention, compliance awareness, and engagement.'
    }
  },
  {
    slug: 'spot-the-problem',
    name: 'Spot the Problem',
    categoryLabel: 'Behavioral Compliance',
    domain: 'internal-communication',
    deliveryTypes: ['implement'],
    tagline: 'Visual compliance training that builds real-world vigilance—not memorization.',
    summary:
      'Employees identify security, safety, and compliance issues in realistic scenes. This builds pattern recognition and safer behavior under real conditions.',

    outcomes: ['Compliance', 'Performance'],
    keyFeatures: [
      'Scene-based risk recognition',
      'Configurable scenarios (cyber, safety, conduct)',
      'Instant feedback + explanation layer',
      'Participation analytics and completion tracking'
    ],
    whatYouGet: [
      'Scenario pack (starter) + customization option',
      'Deployment-ready experience (web/mobile)',
      'Post-activity report + recommendations'
    ],
    howItWorks: [
      'Select risk themes aligned to your environment.',
      'Deploy scenarios to target cohorts.',
      'Capture participation + error patterns.',
      'Reinforce with follow-up actions and leadership comms.'
    ],
    pricingTiers: [
      quoteBased('Starter Pack', 'Fast compliance reinforcement', [
        'Standard scenario library',
        'Basic reporting'
      ]),
      quoteBased('Custom Pack', 'Organizations needing tailored scenes', [
        'Custom scenario design',
        'Cohort analysis'
      ]),
      quoteBased('Enterprise', 'Large rollouts with governance requirements', [
        'Multi-theme program',
        'Quarterly risk insights'
      ])
    ],
    faqs: [
      { q: 'Is this suitable for regulated environments?', a: 'Yes. It is designed to increase real-world vigilance and reduce risk behavior.' },
      { q: 'Can we localize content?', a: 'Yes. Scenarios and explanations can be adapted for language and context.' }
    ],
    media: { heroStyle: 'grid' },
    seo: {
      title: 'Spot the Problem | GoldinKollar™',
      description: 'Scene-based compliance training that builds pattern recognition for safer, more secure behavior.'
    }
  },
  {
    slug: 'ic-mobile-app',
    name: 'IC Mobile App (White‑Label)',
    categoryLabel: 'Digital Channel',
    domain: 'internal-communication',
    deliveryTypes: ['implement'],
    tagline: 'A branded internal channel for news, campaigns, and interactive learning—built for retention.',
    summary:
      'A centralized, role-based internal comms hub that reduces noise and improves reach and clarity—integrating campaigns, learning, and analytics into your ecosystem.',

    outcomes: ['Engagement', 'Performance', 'Compliance', 'Advocacy'],
    keyFeatures: [
      'Role-based content feeds',
      'Campaign modules + push notifications',
      'Integrated interactive learning',
      'Engagement analytics and content performance'
    ],
    whatYouGet: [
      'White-label app setup + branding',
      'Content architecture + governance guidance',
      'Launch kit (campaign + training)'
    ],
    howItWorks: [
      'Define content categories and channel rules.',
      'Configure app with brand and roles.',
      'Launch with a campaign to drive adoption.',
      'Measure retention and adjust cadence.'
    ],
    pricingTiers: [
      quoteBased('Pilot', 'Single-site or single-cohort launch', [
        'Core app setup',
        'Launch support'
      ]),
      quoteBased('Enterprise', 'Organization-wide internal channel', [
        'Advanced roles and segmentation',
        'Governance support'
      ]),
      quoteBased('Enterprise+', 'Complex environments (multi-region / integration needs)', [
        'Integration planning',
        'Custom modules'
      ])
    ],
    faqs: [
      { q: 'Can it integrate with other systems?', a: 'Yes—approach depends on your stack and governance requirements.' },
      { q: 'Is this only for announcements?', a: 'No. It is designed for retention, interaction, and measurable adoption.' }
    ],
    media: { heroStyle: 'aurora' },
    seo: {
      title: 'IC Mobile App (White‑Label) | GoldinKollar™',
      description: 'A branded internal communication app with campaigns, interactive learning, and measurable retention.'
    }
  },

  // --- Employee Experience (EX)
  {
    slug: 'employee-journey-assessment',
    name: 'Employee Journey Assessment Tool',
    categoryLabel: 'Measurement',
    domain: 'employee-experience',
    deliveryTypes: ['measure'],
    tagline: 'Map the real employee journey—not the imagined one.',
    summary:
      'A structured assessment that maps touchpoints, identifies friction, and measures signals across the lifecycle—creating a baseline to prioritize EX investments.',

    outcomes: ['Retention', 'Performance', 'Engagement'],
    keyFeatures: [
      'Journey mapping + moments that matter',
      'Friction hotspot identification',
      'Touchpoint signal model',
      'Segmentation by cohort/role/site'
    ],
    whatYouGet: [
      'Journey map + touchpoint inventory',
      'Friction hotspots + root causes',
      'Prioritized roadmap with quick wins'
    ],
    howItWorks: [
      'Collect data (interviews, surveys, desk review).',
      'Map journey stages and touchpoints.',
      'Measure friction and signal strength.',
      'Deliver baseline + prioritized plan.'
    ],
    pricingTiers: [
      quoteBased('Baseline', 'Teams needing a fast EX baseline', ['Journey map + friction summary']),
      quoteBased('Deep Dive', 'Large orgs with complex journeys', ['Segmentation + expanded inputs']),
      quoteBased('Enterprise', 'Organizations standardizing EX governance', ['EX operating model + cadence'])
    ],
    faqs: [
      { q: 'Is this only for onboarding?', a: 'No. It can cover onboarding, growth, performance cycles, and exit.' },
      { q: 'Do you provide quick wins?', a: 'Yes—quick wins are part of the output, alongside longer-term roadmap items.' }
    ],
    media: { heroStyle: 'grid' },
    seo: {
      title: 'Employee Journey Assessment | GoldinKollar™',
      description: 'Measure and map employee journeys to identify friction, improve retention, and accelerate productivity.'
    }
  },
  {
    slug: 'ex-journey-dashboard',
    name: 'EX Journey Dashboard',
    categoryLabel: 'Analytics',
    domain: 'employee-experience',
    deliveryTypes: ['implement'],
    tagline: 'A live health map across experience touchpoints—so friction is visible before attrition happens.',
    summary:
      'Aggregates signals from surveys and touchpoints to detect experience drift early, supporting timely interventions by HR and leaders.',

    outcomes: ['Retention', 'Performance', 'Engagement'],
    keyFeatures: [
      'Touchpoint health scoring',
      'Cohort progress and milestone tracking',
      'Friction alerts and intervention prompts',
      'Exportable leadership views'
    ],
    whatYouGet: [
      'Dashboard configuration + baseline model',
      'Cohort templates (onboarding, new managers, etc.)',
      'Executive reporting views'
    ],
    howItWorks: [
      'Define the journey stages and signals.',
      'Connect data inputs (manual or integrated).',
      'Track cohorts and touchpoints in real time.',
      'Review monthly interventions and improvements.'
    ],
    pricingTiers: [
      quoteBased('Pilot', 'Single cohort or program', ['Core dashboard + templates']),
      quoteBased('Enterprise', 'Multiple cohorts and journeys', ['Advanced segmentation + governance']),
      quoteBased('Enterprise+', 'Integration-heavy environments', ['Custom integrations + analytics'])
    ],
    faqs: [
      { q: 'Does this replace surveys?', a: 'No—surveys are one input. The dashboard consolidates signals into decision-ready views.' },
      { q: 'Can it run without integrations?', a: 'Yes. It can start with manual inputs and evolve to integrations later.' }
    ],
    media: { heroStyle: 'spotlight' },
    seo: {
      title: 'EX Journey Dashboard | GoldinKollar™',
      description: 'A live employee experience dashboard that tracks touchpoints and highlights friction early.'
    }
  },
  {
    slug: 'ai-onboarding-ecosystem',
    name: 'AI‑Powered Onboarding Ecosystem',
    categoryLabel: 'Flagship Implementation',
    domain: 'employee-experience',
    deliveryTypes: ['implement', 'strategize'],
    tagline: 'A strategic onboarding program delivered as a personalized digital ecosystem.',
    summary:
      'Not content dumping—signal design. We build onboarding that proves your EVP from Day 1 and sustains engagement for 30–90 days (or longer) through personalization, milestones, and measurable adoption.',

    outcomes: ['Retention', 'Performance', 'Engagement', 'Advocacy', 'Compliance'],
    keyFeatures: [
      'Personalized guidance (AI layer optional)',
      'Mandatory knowledge delivered in digestible formats',
      'Content transformation (PDF → interactive cards)',
      'Career path mapping and “what great looks like”',
      'Gamified learning layer (quizzes, challenges, quests)',
      'Milestones + points for sustained engagement'
    ],
    whatYouGet: [
      'Onboarding strategy + journey blueprint',
      'Digital experience (web/app) configuration',
      'Knowledge and content conversion templates',
      'Measurement baseline + reporting cadence'
    ],
    howItWorks: [
      'Define onboarding outcomes (EVP proof points + compliance + productivity).',
      'Design a 30/60/90-day journey with milestones.',
      'Build and deploy digital ecosystem (content + interactions).',
      'Measure adoption and optimize continuously.'
    ],
    pricingTiers: [
      quoteBased('Pilot', 'New hires in one unit or function', [
        '30–60 day journey',
        'Core content transformation',
        'Baseline reporting'
      ]),
      quoteBased('Scale', 'Organizations onboarding at volume', [
        'Multi-cohort design',
        'Advanced segmentation',
        'Manager enablement pack'
      ]),
      quoteBased('Enterprise', 'Complex / multi-site onboarding ecosystems', [
        'Governance + operating model',
        'Cross-domain analytics',
        'Extended journey (90+ days)'
      ])
    ],
    faqs: [
      { q: 'Do we need an AI assistant?', a: 'No. The ecosystem can run with structured content and interactions; AI is optional and scoped by governance.' },
      { q: 'Can this integrate with our LMS?', a: 'Yes. Approach depends on your stack; we can plan integrations during the pilot-to-scale phase.' }
    ],
    media: { heroStyle: 'aurora', video: { label: 'Onboarding demo', note: 'Add an embed URL later.' } },
    seo: {
      title: 'AI‑Powered Onboarding Ecosystem | GoldinKollar™',
      description: 'A personalized onboarding ecosystem that proves EVP, accelerates productivity, and reduces early churn.'
    }
  },
  {
    slug: 'ex-management-academy',
    name: 'EX Management Academy & Kit',
    categoryLabel: 'Enablement',
    domain: 'employee-experience',
    deliveryTypes: ['transfer'],
    tagline: 'Equip managers to become Experience Architects—so EX is sustained internally.',
    summary:
      'Training and toolkits that enable managers to run consistent rituals, reduce friction, and sustain the employee experience system after implementation.',

    outcomes: ['Retention', 'Performance', 'Engagement'],
    keyFeatures: [
      'Manager rituals and operating cadence',
      'Coaching scripts and feedback patterns',
      'Practical templates and checklists',
      'Team-level EX improvement playbooks'
    ],
    whatYouGet: [
      'Academy sessions (live or hybrid)',
      'Manager kit (templates + scripts)',
      'Enablement measurement (adoption + capability signals)'
    ],
    howItWorks: [
      'Assess manager capability needs.',
      'Deliver training + practice sessions.',
      'Provide toolkits for daily use.',
      'Measure adoption and reinforce.'
    ],
    pricingTiers: [
      quoteBased('Workshop', 'Single cohort of managers', ['Training session + kit']),
      quoteBased('Program', 'Multi-cohort capability building', ['Multiple waves + reinforcement']),
      quoteBased('Enterprise', 'Organization-wide manager enablement', ['Governance + analytics'])
    ],
    faqs: [
      { q: 'Is this only for HR?', a: 'No. It is designed for line managers and people leaders who shape daily experience.' },
      { q: 'Can this align to our competency framework?', a: 'Yes—toolkits can be aligned to existing leadership standards.' }
    ],
    media: { heroStyle: 'spotlight' },
    seo: {
      title: 'EX Management Academy | GoldinKollar™',
      description: 'Manager enablement program and toolkit to sustain employee experience rituals and outcomes.'
    }
  },

  // --- Employee Engagement (EE)
  {
    slug: 'satisfaction-pulse-suite',
    name: 'Satisfaction Pulse Suite',
    categoryLabel: 'Measurement',
    domain: 'employee-engagement',
    deliveryTypes: ['measure'],
    tagline: 'Measure what drives engagement—not just satisfaction.',
    summary:
      'A pulse system that tracks engagement drivers and translates results into an action model leaders can execute.',

    outcomes: ['Engagement', 'Retention', 'Performance'],
    keyFeatures: [
      'Pulse cadence design (monthly/quarterly)',
      'Driver-based measurement model',
      'Segmentation and trend analysis',
      'Action prompts aligned to insights'
    ],
    whatYouGet: [
      'Pulse survey templates + driver model',
      'Dashboards and trend views',
      'Action model + leadership summary'
    ],
    howItWorks: [
      'Select engagement drivers aligned to strategy.',
      'Run pulses and capture signals.',
      'Analyze trends by cohort and unit.',
      'Translate into leadership actions and interventions.'
    ],
    pricingTiers: [
      quoteBased('Starter', 'Teams launching their first pulse cycle', ['Templates + baseline']),
      quoteBased('Program', 'Organizations running pulses quarterly', ['Dashboards + action model']),
      quoteBased('Enterprise', 'Large rollouts with governance', ['Advanced segmentation + reporting cadence'])
    ],
    faqs: [
      { q: 'Will this replace annual engagement surveys?', a: 'It can complement or replace—depending on your governance needs and maturity.' },
      { q: 'Do you help with action planning?', a: 'Yes. The suite includes an action model and leader enablement options.' }
    ],
    media: { heroStyle: 'grid' },
    seo: {
      title: 'Satisfaction Pulse Suite | GoldinKollar™',
      description: 'A pulse system that measures engagement drivers and turns insights into actionable leadership interventions.'
    }
  },
  {
    slug: 'business-fantasy',
    name: 'Business Fantasy',
    categoryLabel: 'Performance Gamification',
    domain: 'employee-engagement',
    deliveryTypes: ['implement'],
    tagline: 'Turn KPIs into a league employees want to win.',
    summary:
      'A gamified performance layer that makes targets visible, social, and motivating—so teams build momentum around the business.',

    outcomes: ['Engagement', 'Performance', 'Retention'],
    keyFeatures: [
      'Team leagues and scoring models',
      'Visible progress and milestones',
      'Recognition and season-based competitions',
      'Engagement analytics by team'
    ],
    whatYouGet: [
      'League setup + KPI mapping',
      'Gameplay rules + recognition toolkit',
      'Performance engagement reporting'
    ],
    howItWorks: [
      'Select KPIs and define fair scoring.',
      'Design leagues and seasons.',
      'Launch and run weekly rituals.',
      'Measure participation and outcomes.'
    ],
    pricingTiers: [
      quoteBased('Pilot League', 'Single function or department', ['One league + season setup']),
      quoteBased('Multi-League', 'Several functions running competitions', ['Multiple leagues + governance']),
      quoteBased('Enterprise', 'Large scale with advanced analytics', ['Advanced segmentation + reporting'])
    ],
    faqs: [
      { q: 'Is this “forced fun”?', a: 'No. It is designed around real KPIs and meaningful recognition—not random games.' },
      { q: 'Can it work across different job roles?', a: 'Yes—scoring can be tailored by role and context.' }
    ],
    media: { heroStyle: 'aurora' },
    seo: {
      title: 'Business Fantasy | GoldinKollar™',
      description: 'Gamified performance competitions that increase engagement and focus around business KPIs.'
    }
  },
  {
    slug: 'digital-treasure-hunt',
    name: 'Digital Treasure Hunt',
    categoryLabel: 'Experience Activation',
    domain: 'employee-engagement',
    deliveryTypes: ['implement'],
    tagline: 'QR-driven exploration that builds connection, memory, and belonging.',
    summary:
      'Employees discover places, people, and process knowledge through guided quests—reducing isolation and strengthening belonging.',

    outcomes: ['Engagement', 'Retention', 'Performance'],
    keyFeatures: [
      'Quest-based exploration (QR + checkpoints)',
      'Team-based participation',
      'Customizable content and themes',
      'Participation analytics'
    ],
    whatYouGet: [
      'Quest design + content setup',
      'QR assets and deployment guide',
      'Post-activity insights report'
    ],
    howItWorks: [
      'Design the journey and checkpoints.',
      'Publish QR codes and prompts.',
      'Run experience for cohorts or events.',
      'Capture participation and feedback.'
    ],
    pricingTiers: [
      quoteBased('Event', 'Single activation (onboarding / culture week)', ['One quest']),
      quoteBased('Program', 'Multiple quests across the year', ['Season-based planning']),
      quoteBased('Enterprise', 'Large-scale engagement program', ['Multiple sites + governance'])
    ],
    faqs: [
      { q: 'Can this work remotely?', a: 'Yes—quests can be digital-only or hybrid with physical checkpoints.' },
      { q: 'Can we reuse the hunt content?', a: 'Yes—content can be maintained and reused for new cohorts.' }
    ],
    media: { heroStyle: 'spotlight' },
    seo: {
      title: 'Digital Treasure Hunt | GoldinKollar™',
      description: 'Quest-based engagement experience that strengthens belonging, connection, and learning through exploration.'
    }
  },
  {
    slug: 'engagement-ideas-generator',
    name: 'Engagement Ideas Generator',
    categoryLabel: 'Enablement Tool',
    domain: 'employee-engagement',
    deliveryTypes: ['transfer'],
    tagline: 'Leaders input context—your engine outputs realistic engagement actions.',
    summary:
      'A practical tool for leaders: input team size, constraints, and desired outcome—receive engagement actions that are culturally aligned and implementable.',

    outcomes: ['Engagement', 'Performance', 'Retention'],
    keyFeatures: [
      'Context-based suggestion engine',
      'Action templates and scripts',
      'Cadence and prioritization logic',
      'Manager-friendly format'
    ],
    whatYouGet: [
      'Tool access (or packaged as a kit)',
      'Action library + templates',
      'Leader enablement session (optional)'
    ],
    howItWorks: [
      'Define leader contexts and constraints.',
      'Generate suggested actions by outcome.',
      'Execute actions with templates.',
      'Track adoption and results.'
    ],
    pricingTiers: [
      quoteBased('Kit', 'Small teams starting leader enablement', ['Templates + action library']),
      quoteBased('Program', 'Organizations enabling multiple leader cohorts', ['Enablement + reinforcement']),
      quoteBased('Enterprise', 'Large-scale capability building', ['Governance + adoption analytics'])
    ],
    faqs: [
      { q: 'Is this a standalone product?', a: 'It can be used standalone, or integrated into an engagement operating model.' },
      { q: 'Can actions be localized to our culture?', a: 'Yes—templates can be adapted to language and organizational context.' }
    ],
    media: { heroStyle: 'grid' },
    seo: {
      title: 'Engagement Ideas Generator | GoldinKollar™',
      description: 'A leader enablement tool that generates practical engagement actions based on context and desired outcomes.'
    }
  },

  // --- Culture
  {
    slug: 'persona-quest-ocai',
    name: 'Persona Quest (OCAI)',
    categoryLabel: 'Culture Diagnostic',
    domain: 'culture',
    deliveryTypes: ['measure'],
    tagline: 'A culture diagnostic disguised as a game—low resistance, high truth.',
    summary:
      'Employees respond to scenarios that reveal cultural preferences and tensions. Results map to OCAI to show current vs desired culture and gap zones.',

    outcomes: ['Engagement', 'Retention', 'Performance', 'Compliance', 'Advocacy'],
    keyFeatures: [
      'Scenario-based, low-resistance diagnostic',
      'OCAI mapping (current vs desired)',
      'Heatmaps by unit/role/cohort',
      'Gap analysis and intervention focus areas'
    ],
    whatYouGet: [
      'Diagnostic experience deployment',
      'Culture heatmap + gap report',
      'Leadership debrief + activation priorities'
    ],
    howItWorks: [
      'Deploy scenario-based diagnostic to cohorts.',
      'Collect responses and map to OCAI dimensions.',
      'Analyze gaps by segment.',
      'Translate into a values/behavior activation plan.'
    ],
    pricingTiers: [
      quoteBased('Pilot', 'Single unit culture baseline', ['Diagnostic + heatmap']),
      quoteBased('Enterprise', 'Organization-wide culture mapping', ['Segmentation + debriefs']),
      quoteBased('Enterprise+', 'Transformation programs', ['Governance + activation roadmap'])
    ],
    faqs: [
      { q: 'Is this an assessment employees will resist?', a: 'It is designed to feel like a scenario experience, reducing resistance and increasing honesty.' },
      { q: 'Do you help close the gap?', a: 'Yes—pair it with Values Activation Strategy and leader kits.' }
    ],
    media: { heroStyle: 'aurora' },
    seo: {
      title: 'Persona Quest (OCAI) | GoldinKollar™',
      description: 'Scenario-based culture diagnostic mapped to OCAI with heatmaps, gap analysis, and activation priorities.'
    }
  },
  {
    slug: 'psych-based-team-building',
    name: 'Psychology‑Based Team Building',
    categoryLabel: 'Culture Activation',
    domain: 'culture',
    deliveryTypes: ['implement'],
    tagline: 'Immersive challenges designed to shift mindsets—not entertain.',
    summary:
      'Experiences designed using psychology and behavior change principles to strengthen trust, collaboration, and cross-silo alignment—with measurable outcomes.',

    outcomes: ['Engagement', 'Performance', 'Retention', 'Advocacy'],
    keyFeatures: [
      'Psychology-informed experience design',
      'Cross-silo collaboration challenges',
      'Reflection and reinforcement layer',
      'Post-session insights and actions'
    ],
    whatYouGet: [
      'Experience design + facilitation',
      'Participant materials + toolkit',
      'Post-activity recap deck + insights'
    ],
    howItWorks: [
      'Define the culture behaviors to strengthen.',
      'Design immersive experience and challenges.',
      'Facilitate session (in-person/hybrid).',
      'Deliver insights and follow-up actions.'
    ],
    pricingTiers: [
      quoteBased('Session', 'Single event', ['One facilitated experience']),
      quoteBased('Series', 'Multiple sessions across teams', ['Program design + cadence']),
      quoteBased('Enterprise', 'Culture-wide activation', ['Multi-site rollout + governance'])
    ],
    faqs: [
      { q: 'Is this just “fun activities”?', a: 'No. It is built to shift behaviors and create measurable collaboration outcomes.' },
      { q: 'Can you tailor it to our values?', a: 'Yes—design is anchored to your values and desired culture behaviors.' }
    ],
    media: { heroStyle: 'spotlight' },
    seo: {
      title: 'Psychology‑Based Team Building | GoldinKollar™',
      description: 'Immersive team experiences designed to shift behaviors, strengthen trust, and improve collaboration.'
    }
  },
  {
    slug: 'culture-leader-kit',
    name: 'Culture Leader Kit',
    categoryLabel: 'Enablement',
    domain: 'culture',
    deliveryTypes: ['transfer'],
    tagline: 'Give leaders tools to become culture operators—so culture doesn’t depend on charisma.',
    summary:
      'A practical kit: leader behaviors, rituals, scripts, reinforcement methods, champion identification, and coaching guidance to sustain culture daily.',

    outcomes: ['Engagement', 'Performance', 'Retention', 'Compliance'],
    keyFeatures: [
      'Leader rituals and scripts',
      'Behavior reinforcement methods',
      'Culture champion system',
      'Coaching guidance for alignment conversations'
    ],
    whatYouGet: [
      'Leader kit templates',
      'Enablement workshop',
      'Sustainment cadence and measurement suggestions'
    ],
    howItWorks: [
      'Define desired behaviors and “non-negotiables.”',
      'Translate into rituals, scripts, and leader actions.',
      'Enable leaders and champions.',
      'Measure adoption and reinforce.'
    ],
    pricingTiers: [
      quoteBased('Kit', 'Small leadership groups', ['Templates + workshop']),
      quoteBased('Program', 'Multiple leadership cohorts', ['Multiple enablement waves']),
      quoteBased('Enterprise', 'Organization-wide sustainment', ['Governance + adoption tracking'])
    ],
    faqs: [
      { q: 'Can this align to our leadership competency framework?', a: 'Yes—scripts and rituals can map to existing competency language.' },
      { q: 'Does it include measurement?', a: 'We include measurement suggestions; deeper measurement can be added via Persona Quest or pulse systems.' }
    ],
    media: { heroStyle: 'grid' },
    seo: {
      title: 'Culture Leader Kit | GoldinKollar™',
      description: 'Leader enablement kit to operationalize culture through rituals, scripts, and reinforcement methods.'
    }
  },
  {
    slug: 'digital-hackathon',
    name: 'Digital Hackathon',
    categoryLabel: 'Innovation Culture',
    domain: 'culture',
    deliveryTypes: ['implement'],
    tagline: 'An innovation arena that creates ownership and collaboration—with real outputs.',
    summary:
      'Teams collaborate, build, pitch, and learn. A culture intervention designed to produce deliverables, not just energy.',

    outcomes: ['Engagement', 'Performance', 'Advocacy'],
    keyFeatures: [
      'Structured ideation and sprint framework',
      'Team formation and collaboration mechanics',
      'Pitch day + judging rubric',
      'Output documentation and follow-up roadmap'
    ],
    whatYouGet: [
      'Hackathon design + facilitation',
      'Templates and judging framework',
      'Recap deck + story assets'
    ],
    howItWorks: [
      'Define themes and success criteria.',
      'Run kickoff and team formation.',
      'Facilitate sprints and checkpoints.',
      'Pitch, judge, and document outputs.'
    ],
    pricingTiers: [
      quoteBased('Event', 'Single hackathon sprint', ['Design + facilitation']),
      quoteBased('Series', 'Multiple hackathons per year', ['Program + governance']),
      quoteBased('Enterprise', 'Large innovation programs', ['Multi-site + portfolio reporting'])
    ],
    faqs: [
      { q: 'Can we run this hybrid?', a: 'Yes—design supports in-person, remote, or hybrid teams.' },
      { q: 'Do you help with follow-up implementation?', a: 'We can provide documentation, reporting, and capability transfer to sustain innovation cadence.' }
    ],
    media: { heroStyle: 'aurora' },
    seo: {
      title: 'Digital Hackathon | GoldinKollar™',
      description: 'Innovation hackathons that strengthen collaboration and produce measurable outputs and ownership.'
    }
  },
  {
    slug: 'empathy-game',
    name: 'Empathy Game',
    categoryLabel: 'Culture Experience',
    domain: 'culture',
    deliveryTypes: ['implement'],
    tagline: 'A designed experience that builds empathy, trust, and cross-team understanding.',
    summary:
      'A scenario-based experience that helps teams see each other’s constraints and perspectives—reducing friction and improving collaboration.',

    outcomes: ['Engagement', 'Performance', 'Retention'],
    keyFeatures: [
      'Scenario-based role switching',
      'Facilitated reflection and debrief',
      'Behavioral commitments and follow-up prompts'
    ],
    whatYouGet: [
      'Experience design + facilitation',
      'Participant materials',
      'Action commitments + recap deck'
    ],
    howItWorks: [
      'Select collaboration challenges to address.',
      'Run the experience with facilitation.',
      'Debrief and extract commitments.',
      'Reinforce with follow-up rituals.'
    ],
    pricingTiers: [
      quoteBased('Session', 'Single team session', ['One facilitated experience']),
      quoteBased('Series', 'Multiple teams across functions', ['Program design']),
      quoteBased('Enterprise', 'Culture-wide collaboration push', ['Multi-site rollout'])
    ],
    faqs: [
      { q: 'Is this suitable for leadership teams?', a: 'Yes—especially for cross-functional leadership alignment.' },
      { q: 'Is it customizable?', a: 'Yes—scenarios can reflect your operating model and real friction points.' }
    ],
    media: { heroStyle: 'spotlight' },
    seo: {
      title: 'Empathy Game | GoldinKollar™',
      description: 'A scenario-based culture experience that builds empathy and strengthens cross-team collaboration.'
    }
  },

  // --- Employer Branding (EB)
  {
    slug: 'evp-reality-audit',
    name: 'EVP Reality Audit',
    categoryLabel: 'Measurement',
    domain: 'employer-branding',
    deliveryTypes: ['measure'],
    tagline: 'A double-lens audit: market perception vs employee truth.',
    summary:
      'We identify the truth gap between what you communicate externally and what employees experience internally—then provide a prioritized plan to close it.',

    outcomes: ['Attraction', 'Retention', 'Advocacy'],
    keyFeatures: [
      'Perception vs reality gap analysis',
      'Employee signal sampling',
      'Messaging proof point assessment',
      'Prioritized closure plan'
    ],
    whatYouGet: [
      'Truth gap report',
      'EVP risks and opportunities map',
      'Closure roadmap + quick wins'
    ],
    howItWorks: [
      'Review external employer brand signals.',
      'Capture internal employee experience signals.',
      'Map the gap by segment and touchpoint.',
      'Deliver closure roadmap.'
    ],
    pricingTiers: [
      quoteBased('Baseline', 'Teams needing clarity on EVP truth gap', ['Audit + roadmap']),
      quoteBased('Deep Dive', 'Multi-site or high-scale employers', ['Expanded sampling + segmentation']),
      quoteBased('Enterprise', 'Nationwide or multi-region brands', ['Benchmarking + governance'])
    ],
    faqs: [
      { q: 'Will this include competitor benchmarking?', a: 'It can, depending on scope and market priorities.' },
      { q: 'Do you help craft the new EVP?', a: 'Yes—pair it with EVP Strategy Sprint.' }
    ],
    media: { heroStyle: 'grid' },
    seo: {
      title: 'EVP Reality Audit | GoldinKollar™',
      description: 'Measure the gap between your employer brand promise and employee reality—then close it with a prioritized plan.'
    }
  },
  {
    slug: 'evp-strategy-sprint',
    name: 'EVP Strategy Sprint',
    categoryLabel: 'Strategy',
    domain: 'employer-branding',
    deliveryTypes: ['strategize'],
    tagline: 'Define an EVP that attracts best-fit talent—rooted in real signals, not slogans.',
    summary:
      'We design EVP pillars, messaging architecture, proof points, and activation plan—anchored to employee truth and business priorities.',

    outcomes: ['Attraction', 'Retention', 'Advocacy', 'Performance'],
    keyFeatures: [
      'EVP pillars and narrative architecture',
      'Proof point mapping (what makes it believable)',
      'Messaging system for candidates and employees',
      'Activation plan + governance'
    ],
    whatYouGet: [
      'EVP narrative + pillar framework',
      'Messaging architecture',
      'Activation roadmap and content plan'
    ],
    howItWorks: [
      'Align on target talent and business needs.',
      'Translate signals into EVP pillars and proof points.',
      'Build messaging system and activation plan.',
      'Enable teams to sustain consistency.'
    ],
    pricingTiers: [
      quoteBased('Sprint', 'Fast EVP alignment and design', ['Workshops + EVP outputs']),
      quoteBased('Sprint+', 'Teams needing activation planning', ['EVP + activation plan']),
      quoteBased('Enterprise', 'Complex employer brands', ['Governance + multi-audience messaging'])
    ],
    faqs: [
      { q: 'Do you create content assets?', a: 'We can support through Documentation & Storytelling Suite and content activation support.' },
      { q: 'Will this align internal and external messaging?', a: 'Yes—alignment is a core principle to avoid expectation shock.' }
    ],
    media: { heroStyle: 'spotlight' },
    seo: {
      title: 'EVP Strategy Sprint | GoldinKollar™',
      description: 'Define EVP pillars, proof points, and messaging architecture to attract best-fit talent and improve retention.'
    }
  },
  {
    slug: 'student-career-matcher',
    name: 'Student Career Matcher',
    categoryLabel: 'Talent Funnel',
    domain: 'employer-branding',
    deliveryTypes: ['implement'],
    tagline: 'A value-first public tool that becomes a best-fit talent funnel.',
    summary:
      'Students gain clarity and direction; employers gain early insight into best-fit candidates—turning employer branding into measurable pipeline development.',

    outcomes: ['Attraction', 'Performance', 'Advocacy'],
    keyFeatures: [
      'Student-friendly matching experience',
      'Employer fit signals and segmentation',
      'Campaign-ready landing pages',
      'Pipeline reporting'
    ],
    whatYouGet: [
      'Matcher experience configuration',
      'Landing page assets + tracking',
      'Pilot proposal and reporting'
    ],
    howItWorks: [
      'Define target programs and roles.',
      'Configure matching logic and content.',
      'Launch campaign to attract students.',
      'Measure pipeline and iterate.'
    ],
    pricingTiers: [
      quoteBased('Pilot', 'Single campaign or university season', ['Matcher + reporting']),
      quoteBased('Program', 'Multiple campuses / cycles', ['Multi-cycle optimization']),
      quoteBased('Enterprise', 'Large-scale talent programs', ['Governance + multi-channel activation'])
    ],
    faqs: [
      { q: 'Can it be customized to our roles?', a: 'Yes—matching logic and content can be tailored by job family and competency.' },
      { q: 'Does it integrate with ATS?', a: 'It can, depending on your stack and governance requirements.' }
    ],
    media: { heroStyle: 'aurora' },
    seo: {
      title: 'Student Career Matcher | GoldinKollar™',
      description: 'A student matching experience that builds a best-fit talent funnel and strengthens employer brand credibility.'
    }
  },

  // --- Documentation (Universal)
  {
    slug: 'documentation-storytelling-suite',
    name: 'Documentation & Storytelling Suite',
    categoryLabel: 'Documentation',
    domain: 'documentation',
    deliveryTypes: ['document'],
    tagline: 'Document the work. Prove the impact. Amplify the story.',
    summary:
      'Capture initiatives through photography and videography, build leadership-ready recap decks, and produce post-initiative reports and storytelling assets for internal and external advocacy.',

    outcomes: ['Advocacy', 'Attraction', 'Engagement', 'Performance', 'Compliance'],
    keyFeatures: [
      'Photography and videography coverage',
      'Executive recap decks (monthly/quarterly/year-end)',
      'End-of-initiative reporting (what happened, what changed, what’s next)',
      'Storytelling assets (internal newsletters, LinkedIn-ready narratives)',
      'Post-activity participation and feedback reporting'
    ],
    whatYouGet: [
      'Coverage plan and shot list',
      'Edited photo/video deliverables',
      'Recap deck and reporting templates',
      'Optional social activation support'
    ],
    howItWorks: [
      'Align on purpose and audience (leadership/internal/external).',
      'Capture and produce assets with brand consistency.',
      'Deliver recap decks and proof points.',
      'Support amplification and governance reporting.'
    ],
    pricingTiers: [
      quoteBased('Event Coverage', 'Single event or activation', ['Photo/video coverage + recap']),
      quoteBased('Program Coverage', 'Multiple initiatives across a quarter', ['Quarterly reporting + assets']),
      quoteBased('Enterprise', 'Year-round storytelling and reporting', ['Operating rhythm + governance-ready outputs'])
    ],
    faqs: [
      { q: 'Is documentation really a “product”?', a: 'For enterprise change, documentation is how initiatives gain credibility, visibility, and repeatability.' },
      { q: 'Do you support LinkedIn content?', a: 'Yes—optional storytelling support can turn real experiences into brand advocacy.' }
    ],
    media: { heroStyle: 'grid' },
    seo: {
      title: 'Documentation & Storytelling Suite | GoldinKollar™',
      description: 'Photography, videography, recap decks, reporting, and storytelling assets that amplify impact and advocacy.'
    }
  }
];

export const productBySlug = new Map(products.map((p) => [p.slug, p]));
