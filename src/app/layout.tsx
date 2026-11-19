import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import { JSON_LD_SCHEMA, SITE_CONFIG, SITE_URL } from '@/config/site-data';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#F5F3EF',
  width: 'device-width',
  initialScale: 1,
};

const TITLE =
  'Tainá Pravato Arquitetura e Design | Projetos Residenciais e Corporativos em Chapecó e SP';
const DESCRIPTION =
  'Arquitetura contemporânea e design de interiores sob medida em Chapecó - SC e São Paulo. Minimalismo, concreto aparente e madeira natural, com projeto premiado, CASACOR SC 2025 e nota 5.0 no Google. Converse pelo WhatsApp.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Tainá Pravato Arquitetura',
    'arquiteta em Chapecó',
    'arquitetura residencial Chapecó',
    'design de interiores Chapecó',
    'arquitetura corporativa Santa Catarina',
    'arquiteta em São Paulo',
    'projeto de escritório',
    'CASACOR Santa Catarina 2025',
  ],
  authors: [{ name: 'Tainá Pravato' }],
  creator: SITE_CONFIG.brandName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_CONFIG.brandName,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/residencia.jpg',
        width: 1024,
        height: 572,
        alt: 'Residência contemporânea com concreto aparente e madeira natural, projeto de Tainá Pravato Arquitetura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/residencia.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#F5F3EF] font-sans text-[#191817] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
        <div
          aria-hidden="true"
          className="architectural-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.025]"
        />
        {children}
      </body>
    </html>
  );
}
