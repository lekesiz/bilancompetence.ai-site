import { useEffect } from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}

export default function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: ArticleSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      author: {
        '@type': 'Organization',
        name: author,
        url: 'https://bilancompetence.ai',
      },
      publisher: {
        '@type': 'Organization',
        name: 'bilancompetence.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://bilancompetence.ai/logo.svg',
        },
      },
      datePublished: datePublished,
      dateModified: dateModified || datePublished,
      image: image || 'https://bilancompetence.ai/og-image.jpg',
      url: url,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      articleSection: 'Carrière et Formation',
      inLanguage: 'fr-FR',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, author, datePublished, dateModified, image, url]);

  return null;
}
