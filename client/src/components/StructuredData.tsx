import { useEffect } from "react";
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from "@/const";

interface LocalBusinessProps {
  name?: string;
  description?: string;
  url?: string;
}

export function LocalBusinessSchema({ 
  name = COMPANY_NAME,
  description = "Expert en bilan de compétences en Alsace. Accompagnement personnalisé avec intelligence artificielle. Certifié Qualiopi. Financement CPF 100%.",
  url = "https://bilancompetence.ai"
}: LocalBusinessProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": name,
    "description": description,
    "url": url,
    "logo": `${url}/logo.svg`,
    "image": `${url}/logo.svg`,
    "telephone": COMPANY_PHONE,
    "email": COMPANY_EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1a Route de Schweighouse",
      "addressLocality": "Haguenau",
      "postalCode": "67500",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8166,
      "longitude": 7.7833
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Haguenau"
      },
      {
        "@type": "City",
        "name": "Strasbourg"
      },
      {
        "@type": "City",
        "name": "Mulhouse"
      },
      {
        "@type": "City",
        "name": "Colmar"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Alsace"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Grand-Est"
      }
    ],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/netz-informatique",
      "https://netzinformatique.fr"
    ]
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = "local-business-schema";
    
    // Remove existing schema if present
    const existing = document.getElementById("local-business-schema");
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("local-business-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = "faq-schema";
    
    // Remove existing schema if present
    const existing = document.getElementById("faq-schema");
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [faqs]);

  return null;
}
