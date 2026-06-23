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
  ],
  generator: 'v0.app',
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
  return (
    <html lang="en" className={`light ${poppins.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
