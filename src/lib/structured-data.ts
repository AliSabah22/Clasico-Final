export const getStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: 'Clásico Barbershop',
    image: 'https://clasicobarbershop.com/images/og-image.jpg',
    '@id': 'https://clasicobarbershop.com',
    url: 'https://clasicobarbershop.com',
    telephone: '+1-234-567-8900',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Luxury Street',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      postalCode: '33101',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.7617,
      longitude: -80.1918
    },
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/clasicobarbershop',
      'https://www.instagram.com/clasicobarbershop',
      'https://twitter.com/clasicobarbershop',
      'https://www.youtube.com/clasicobarbershop'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Barber Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Classic Haircut',
            description: 'Traditional men\'s haircut with hot towel treatment'
          },
          price: '45',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Beard Trim',
            description: 'Professional beard shaping and trimming'
          },
          price: '25',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hot Towel Shave',
            description: 'Traditional straight razor shave with hot towel treatment'
          },
          price: '35',
          priceCurrency: 'USD'
        }
      ]
    }
  }
} 