import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0B1F3A',
};

export const metadata: Metadata = {
  title: 'Unexgen - Enterprise Sustainable Energy Solutions',
  description: 'Next-generation sustainable energy infrastructure for commercial facilities. HVAC, Solar, Green Hydrogen, and Heat Pump systems optimized for enterprise efficiency.',
  keywords: 'sustainable energy, HVAC, solar panels, green hydrogen, heat pumps, energy efficiency, commercial energy solutions',
  authors: [{ name: 'Unexgen' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unexgen.com',
    title: 'Unexgen - Enterprise Sustainable Energy Solutions',
    description: 'Next-generation sustainable energy infrastructure for commercial facilities.',
    siteName: 'Unexgen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unexgen - Enterprise Sustainable Energy Solutions',
    description: 'Next-generation sustainable energy infrastructure for commercial facilities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} bg-bg-primary`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
