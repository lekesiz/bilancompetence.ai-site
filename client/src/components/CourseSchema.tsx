import { useEffect } from 'react';

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  url: string;
  price?: number;
  currency?: string;
}

export default function CourseSchema({
  name,
  description,
  provider,
  url,
  price,
  currency = 'EUR',
}: CourseSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: name,
      description: description,
      provider: {
        '@type': 'Organization',
        name: provider,
        url: 'https://bilancompetence.ai',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1A, route de Schweighouse',
          addressLocality: 'Haguenau',
          postalCode: '67500',
          addressCountry: 'FR',
        },
      },
      url: url,
      courseCode: 'BC-2025',
      educationalLevel: 'Professionnel',
      inLanguage: 'fr-FR',
      availableLanguage: 'fr',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'blended',
        courseWorkload: 'PT24H',
        instructor: {
          '@type': 'Person',
          name: 'Équipe bilancompetence.ai',
        },
      },
      ...(price && {
        offers: {
          '@type': 'Offer',
          price: price.toString(),
          priceCurrency: currency,
          availability: 'https://schema.org/InStock',
          url: url,
          validFrom: '2025-01-01',
        },
      }),
      teaches: [
        'Analyse de compétences professionnelles',
        'Identification des motivations',
        'Définition de projet professionnel',
        'Plan d\'action de carrière',
      ],
      audience: {
        '@type': 'EducationalAudience',
        audienceType: 'Professionnels en reconversion',
      },
      isAccessibleForFree: false,
      financialAid: {
        '@type': 'FinancialProduct',
        name: 'Compte Personnel de Formation (CPF)',
        description: 'Financement à 100% par le CPF',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, provider, url, price, currency]);

  return null;
}
