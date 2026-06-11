export const getSchemaOrg = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Unexgen',
  description: 'Enterprise Sustainable Energy Solutions',
  url: 'https://unexgen.com',
  logo: 'https://unexgen.com/logo.png',
  telephone: '+1-800-UNEXGEN',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'CA',
    addressLocality: 'San Francisco',
  },
  sameAs: [
    'https://www.linkedin.com/company/unexgen',
    'https://twitter.com/unexgen',
    'https://www.instagram.com/unexgen',
  ],
  knowsAbout: ['Solar Energy', 'Green Hydrogen', 'HVAC Systems', 'Heat Pumps', 'Renewable Energy'],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    offerCount: 4,
  },
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const getProductSchema = (
  product: {
    name: string;
    description: string;
    image: string;
    price: string;
    rating: number;
  }
) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: product.name,
  image: product.image,
  description: product.description,
  offers: {
    '@type': 'Offer',
    url: 'https://unexgen.com',
    priceCurrency: 'USD',
    price: product.price,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: product.rating,
    ratingCount: 250,
  },
});
