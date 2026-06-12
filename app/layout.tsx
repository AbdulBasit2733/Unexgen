import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-alt-heading',
});

export const metadata: Metadata = {
  title: 'Unexgen - Powering Sustainable Cooling Infrastructure',
  description: 'Engineering India\'s Future Through Smart Cooling, Renewable Energy & Thermal Storage Solutions',
  openGraph: {
    title: 'Unexgen Technology - Industrial Cooling & Energy Solutions',
    description: 'Green Cold Storage, HVAC Solutions, Thermal Energy Storage, Solar EPC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} bg-white`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
