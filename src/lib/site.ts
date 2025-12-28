export const site = {
  name: 'GoldinKollar™',
  arabicName: 'جولدن كولار',
  tagline: 'People & Culture, Engineered.',
  description:
    'GoldinKollar builds integrated people and culture systems—powered by behavioral science, AI, and gamification—to drive measurable attraction, retention, performance, engagement, advocacy, and compliance across the MENA region.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://goldinkollar.com',
  contact: {
    email: 'islam.yousry@goldinkollar.com',
    phone: '+201224666402',
    regions: ['Egypt', 'UAE', 'KSA', 'Oman', 'Qatar']
  }
} as const;
