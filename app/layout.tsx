import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Unexgen - Industrial Renewable Energy Solutions | Solar, Hydrogen, Smart HVAC',
  description:
    'Transform your facility with industrial-scale renewable energy systems. Solar power, green hydrogen, AI-driven HVAC, and microgrids with proven ROI. ₹1.25Cr+ in verified client savings across 500+ installations.',
  keywords:
    'renewable energy, solar power, green hydrogen, smart HVAC, microgrids, sustainable energy, industrial energy solutions, India',
  authors: [{ name: 'Unexgen Technology' }],
  openGraph: {
    title: 'Unexgen - Industrial Renewable Energy Solutions',
    description:
      'Industrial-scale sustainable energy infrastructure with proven ROI and government subsidies.',
    url: 'https://unexgen.com',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Unexgen Renewable Energy Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unexgen - Industrial Renewable Energy Solutions',
    description:
      'Transform your facility with industrial-scale renewable energy systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-snippet:-1, max-image-preview:large',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#10b981',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
