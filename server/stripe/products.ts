export const PRODUCTS = {
  BILAN_ESSENTIEL: {
    name: "Bilan de Compétences Essentiel",
    description: "Accompagnement personnalisé avec 3 entretiens individuels et synthèse complète",
    price: 149000, // 1490€ in cents
    currency: "eur",
    features: [
      "3 entretiens individuels (6h)",
      "Synthèse écrite complète",
      "Tests de personnalité",
      "Accès plateforme 3 mois",
    ],
  },
  BILAN_AVANCE: {
    name: "Bilan de Compétences Avancé",
    description: "Accompagnement enrichi par l'IA avec 5 entretiens et outils numériques avancés",
    price: 179000, // 1790€ in cents
    currency: "eur",
    features: [
      "5 entretiens individuels (10h)",
      "Analyse IA approfondie",
      "Tests psychométriques avancés",
      "Plan d'action personnalisé",
      "Accès plateforme 6 mois",
      "Suivi post-bilan (3 mois)",
    ],
  },
  BILAN_PREMIUM: {
    name: "Bilan de Compétences Premium",
    description: "Accompagnement VIP avec coaching illimité et suivi personnalisé sur 12 mois",
    price: 229000, // 2290€ in cents
    currency: "eur",
    features: [
      "Entretiens illimités (15h+)",
      "Coaching personnalisé",
      "Analyse IA premium",
      "Mise en relation entreprises",
      "Accès plateforme 12 mois",
      "Suivi post-bilan (6 mois)",
      "Conseiller dédié 24/7",
    ],
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;
