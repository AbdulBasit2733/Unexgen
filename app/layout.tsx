import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://unexgen.vercel.app'),
  title: 'Unexgen Technology Pvt. Ltd. | Green Cold Storage & Solar EPC Solutions',
  description:
    'Unexgen Technology delivers Green Cold Storage, HVAC Engineering, Thermal Energy Storage and Solar EPC solutions that improve profitability while reducing environmental impact. India\'s trusted green cooling and renewable energy company.',
  keywords: [
    'Cold Storage Company India',
    'Solar Cold Storage Solutions',
    'Green Cold Storage',
    'Thermal Energy Storage',
    'HVAC Engineering Company',
    'Solar EPC Company',
    'Industrial Refrigeration Solutions',
    'Sustainable Cooling Solutions',
    'Renewable Energy Engineering',
    'Cold Chain Infrastructure',
    'Solar Panel Installation',
    'Industrial HVAC Systems',
    'Green Energy Technology',
  ],
  generator: 'Next.js',
  authors: [{ name: 'Unexgen Technology Pvt. Ltd.' }],
  creator: 'Unexgen Technology',
  publisher: 'Unexgen Technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Unexgen Technology Pvt. Ltd. | Green Cold Storage & Solar EPC Solutions',
    description: 'Unexgen Technology delivers Green Cold Storage, HVAC Engineering, Thermal Energy Storage and Solar EPC solutions that improve profitability while reducing environmental impact.',
    url: 'https://unexgen.vercel.app',
    siteName: 'Unexgen Technology',
    images: [
      {
        url: '/hero.png', // Fallback to hero image for og:image
        width: 1200,
        height: 630,
        alt: 'Unexgen Technology - Green Cold Storage and Solar EPC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#27C08D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://unexgen.vercel.app/#organization',
        name: 'Unexgen Technology Pvt. Ltd.',
        url: 'https://unexgen.vercel.app',
        logo: 'https://unexgen.vercel.app/icon.svg',
        image: 'https://unexgen.vercel.app/hero.png',
        description: 'Green cooling and renewable energy engineering for a sustainable future.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Chikalthana MIDC, Naregaon',
          addressLocality: 'Chhatrapati Sambhajinagar (Aurangabad)',
          addressRegion: 'Maharashtra',
          postalCode: '431001',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-7972745051',
          contactType: 'customer service',
          email: 'office.unexgentechnology@gmail.com',
          availableLanguage: ['English', 'Hindi', 'Marathi']
        },
        sameAs: [
          'https://linkedin.com',
          'https://facebook.com',
          'https://instagram.com'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://unexgen.vercel.app/#website',
        url: 'https://unexgen.vercel.app',
        name: 'Unexgen Technology Pvt. Ltd.',
        description: 'Green Cold Storage & Solar EPC Solutions',
        publisher: {
          '@id': 'https://unexgen.vercel.app/#organization'
        }
      }
    ]
  }

  return (
    <html lang="en" className={`light ${poppins.variable} ${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
