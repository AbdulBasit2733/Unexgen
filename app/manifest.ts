import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Unexgen Technology Pvt. Ltd.',
    short_name: 'Unexgen',
    description: 'Green Cold Storage & Solar EPC Solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#27C08D',
    icons: [
      {
        src: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
