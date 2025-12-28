import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Noto_Sans_Arabic } from 'next/font/google';

import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LenisProvider } from '@/components/providers/lenis-provider';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap'
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${notoArabic.variable}`}>
      <body>
        <LenisProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
