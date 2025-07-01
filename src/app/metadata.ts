import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clasico Barbershop | Luxury Men\'s Grooming',
  description: 'Experience premium grooming services at Clásico Barbershop. Our expert barbers provide luxury haircuts, beard trims, and grooming services in a sophisticated atmosphere.',
  keywords: 'barbershop, luxury grooming, men\'s haircut, beard trim, premium barbershop, classic barbershop, men\'s grooming',
  authors: [{ name: 'Clasico Barbershop' }],
  creator: 'PixelRush Sites',
  publisher: 'PixelRush Sites',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clasicobarbershop.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clasico Barbershop | Luxury Men\'s Grooming',
    description: 'Experience premium grooming services at Clásico Barbershop. Our expert barbers provide luxury haircuts, beard trims, and grooming services in a sophisticated atmosphere.',
    url: 'https://clasicobarbershop.com',
    siteName: 'Clasico Barbershop',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clasico Barbershop - Luxury Men\'s Grooming',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clasico Barbershop | Luxury Men\'s Grooming',
    description: 'Experience premium grooming services at Clásico Barbershop. Our expert barbers provide luxury haircuts, beard trims, and grooming services in a sophisticated atmosphere.',
    images: ['/images/twitter-image.jpg'],
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