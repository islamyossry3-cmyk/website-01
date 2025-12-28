import { domains } from './domains';
import { deliveryTypes } from './deliveryTypes';

export const nav = {
  main: [
    { label: 'Solutions', href: '/solutions', mega: 'solutions' as const },
    { label: 'Products', href: '/products', mega: 'products' as const },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
    { label: 'Team', href: '/team' }
  ],
  ctas: [
    { label: 'Book a Diagnosis', href: '/contact?intent=diagnosis', variant: 'secondary' as const },
    { label: 'Request Demo', href: '/contact?intent=demo', variant: 'primary' as const }
  ],
  mega: {
    solutions: {
      columns: [
        {
          title: 'Browse by Domain',
          items: domains.map((d) => ({
            label: `${d.name} (${d.short})`,
            description: d.headline,
            href: `/solutions/domains/${d.slug}`
          }))
        },
        {
          title: 'Browse by Delivery Type',
          items: deliveryTypes.map((t) => ({
            label: t.name,
            description: t.headline,
            href: `/solutions/delivery/${t.slug}`
          }))
        }
      ],
      highlights: [
        {
          title: 'Matrix Navigator',
          description: 'Explore the 5×5 ecosystem and open any cell to see what it includes.',
          href: '/solutions#matrix'
        },
        {
          title: 'Build Your Ecosystem',
          description: 'Answer 3 questions and get a recommended starting point.',
          href: '/solutions#configurator'
        }
      ]
    },
    products: {
      columns: [
        {
          title: 'Flagship',
          items: [
            {
              label: 'People & Culture Command Center',
              description: 'The unified platform that connects everything.',
              href: '/products/people-culture-command-center'
            },
            {
              label: 'AI‑Powered Onboarding Ecosystem',
              description: 'EVP-proof onboarding + adoption measurement.',
              href: '/products/ai-onboarding-ecosystem'
            }
          ]
        },
        {
          title: 'Top Picks',
          items: [
            { label: 'Persona Quest (OCAI)', description: 'Culture diagnostic as an experience.', href: '/products/persona-quest-ocai' },
            { label: 'Trivia Clans', description: 'Competition that builds recall.', href: '/products/trivia-clans' },
            { label: 'EVP Reality Audit', description: 'Perception vs reality gap.', href: '/products/evp-reality-audit' },
            { label: 'Documentation Suite', description: 'Prove impact + amplify story.', href: '/products/documentation-storytelling-suite' }
          ]
        }
      ],
      highlights: [
        {
          title: 'Browse all products',
          description: 'Filter by domain, delivery type, and outcomes.',
          href: '/products'
        }
      ]
    }
  }
} as const;
