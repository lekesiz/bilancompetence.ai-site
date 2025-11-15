export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  rating: number;
  date: string;
  content: string;
  highlight: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Responsable RH",
    company: "Entreprise industrielle",
    location: "Haguenau",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    rating: 5,
    date: "Novembre 2024",
    content: "Le bilan de compétences avec NETZ Informatique a été une révélation pour moi. Après 15 ans dans le même poste, j'avais besoin de clarté sur mon avenir professionnel. L'approche avec l'IA DeepSeek m'a permis d'explorer des pistes auxquelles je n'aurais jamais pensé. Aujourd'hui, je suis en reconversion vers un poste de formatrice RH, et je n'ai jamais été aussi épanouie.",
    highlight: "Une révélation professionnelle grâce à l'IA"
  },
  {
    id: 2,
    name: "Marc Schneider",
    role: "Ancien chef de projet IT",
    company: "Secteur bancaire",
    location: "Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc",
    rating: 5,
    date: "Octobre 2024",
    content: "À 45 ans, je pensais qu'il était trop tard pour changer de voie. Le conseiller de NETZ m'a accompagné avec bienveillance et professionnalisme. Les outils d'analyse IA ont identifié mes compétences transférables que je sous-estimais. Résultat : je lance ma propre entreprise de conseil en transformation digitale. Le financement CPF a rendu tout cela possible sans frais.",
    highlight: "Un nouveau départ à 45 ans"
  },
  {
    id: 3,
    name: "Amélie Dubois",
    role: "Assistante commerciale",
    company: "PME alsacienne",
    location: "Colmar",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amelie",
    rating: 5,
    date: "Septembre 2024",
    content: "J'étais sceptique au début concernant l'utilisation de l'intelligence artificielle, mais l'équipe de NETZ a su me rassurer. Les entretiens individuels combinés aux analyses IA ont créé un parcours sur mesure. J'ai découvert une passion pour la gestion de projet que je ne soupçonnais pas. Je suis maintenant chef de projet junior dans une entreprise innovante du Grand-Est.",
    highlight: "De l'assistanat à la gestion de projet"
  },
  {
    id: 4,
    name: "Thomas Weber",
    role: "Technicien maintenance",
    company: "Industrie automobile",
    location: "Mulhouse",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
    rating: 5,
    date: "Août 2024",
    content: "Le bilan de compétences m'a permis de valoriser mon expérience technique de 20 ans. L'analyse approfondie a révélé mes aptitudes en formation et transmission de savoir. NETZ m'a accompagné dans la création de mon organisme de formation en maintenance industrielle. La certification Qualiopi de NETZ m'a donné confiance dans leur expertise.",
    highlight: "De technicien à formateur indépendant"
  },
  {
    id: 5,
    name: "Céline Hoffmann",
    role: "Comptable",
    company: "Cabinet d'expertise comptable",
    location: "Saverne",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Celine",
    rating: 5,
    date: "Juillet 2024",
    content: "Après un burn-out, j'avais besoin de repenser ma carrière. Le bilan avec NETZ a été un véritable accompagnement psychologique et professionnel. Les tests de personnalité couplés à l'IA ont mis en lumière mon besoin d'autonomie et de créativité. Je me forme maintenant au métier de wedding planner, une reconversion totale mais alignée avec mes valeurs.",
    highlight: "Rebondir après un burn-out"
  },
  {
    id: 6,
    name: "Laurent Keller",
    role: "Manager retail",
    company: "Grande distribution",
    location: "Haguenau",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laurent",
    rating: 5,
    date: "Juin 2024",
    content: "Le processus en 3 phases était parfaitement structuré. La phase préliminaire m'a aidé à clarifier mes attentes, l'investigation a été approfondie grâce aux outils IA, et la conclusion m'a fourni un plan d'action concret. Je suis passé du management en grande surface à un poste de responsable e-commerce. Le ROI de ce bilan est inestimable.",
    highlight: "Du retail physique au e-commerce"
  },
  {
    id: 7,
    name: "Nathalie Roth",
    role: "Infirmière",
    company: "Hôpitaux de Strasbourg",
    location: "Strasbourg",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nathalie",
    rating: 5,
    date: "Mai 2024",
    content: "Après 12 ans dans le milieu hospitalier, je voulais évoluer sans quitter le secteur de la santé. NETZ m'a aidée à identifier mes compétences en coordination et gestion d'équipe. L'approche locale (Alsace) a permis de cibler des opportunités régionales. Je suis maintenant coordinatrice de parcours patients dans une clinique privée avec de meilleures conditions de travail.",
    highlight: "Évolution dans le secteur de la santé"
  },
  {
    id: 8,
    name: "Pierre Muller",
    role: "Enseignant",
    company: "Éducation Nationale",
    location: "Sélestat",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre",
    rating: 5,
    date: "Avril 2024",
    content: "Le bilan de compétences financé à 100% par mon CPF m'a permis d'explorer une reconversion sans risque financier. L'équipe de NETZ a respecté ma confidentialité (mon employeur n'a rien su). Les recommandations basées sur l'IA étaient pertinentes et réalistes. Je prépare maintenant ma transition vers le métier de conseiller en orientation scolaire indépendant.",
    highlight: "Reconversion en toute confidentialité"
  }
];
