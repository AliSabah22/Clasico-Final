import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clasico Barbershop | Fresh Fades & Sharp Cuts in Mississauga',
  description: 'Precision haircuts, beard trims, and styling in Mississauga. Book your appointment today.',
  keywords: 'barbershop, luxury grooming, men\'s haircut, beard trim, premium barbershop, classic barbershop, men\'s grooming, Mississauga barbershop',
  authors: [{ name: 'Clasico Barbershop' }],
  creator: 'PixelRush Sites',
  publisher: 'PixelRush Sites',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clasicobarber.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clasico Barbershop | Fresh Fades & Sharp Cuts in Mississauga',
    description: 'Precision haircuts, beard trims, and styling in Mississauga. Book your appointment today.',
    url: 'https://clasicobarber.com',
    siteName: 'Clasico Barbershop',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clasico Barbershop - Fresh Fades & Sharp Cuts in Mississauga',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clasico Barbershop | Fresh Fades & Sharp Cuts in Mississauga',
    description: 'Precision haircuts, beard trims, and styling in Mississauga. Book your appointment today.',
    images: ['/images/og-image.jpg'],
    creator: '@clasicobarbershop',
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
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
} 