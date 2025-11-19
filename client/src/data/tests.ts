export interface TestQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    score: number;
  }[];
}

export interface TestResult {
  type: string;
  title: string;
  description: string;
  recommendations: string[];
}

// Personality Test (MBTI-inspired)
export const personalityTest: TestQuestion[] = [
  {
    id: 1,
    question: "Lors d'une réunion, vous préférez :",
    options: [
      { text: "Écouter attentivement avant de parler", value: "I", score: 1 },
      { text: "Partager vos idées spontanément", value: "E", score: 1 },
    ],
  },
  {
    id: 2,
    question: "Vous prenez vos décisions plutôt en vous basant sur :",
    options: [
      { text: "Les faits et la logique", value: "T", score: 1 },
      { text: "Vos valeurs et émotions", value: "F", score: 1 },
    ],
  },
  {
    id: 3,
    question: "Vous préférez travailler :",
    options: [
      { text: "Avec un plan détaillé et structuré", value: "J", score: 1 },
      { text: "De manière flexible et spontanée", value: "P", score: 1 },
    ],
  },
  {
    id: 4,
    question: "Face à un nouveau projet, vous :",
    options: [
      { text: "Analysez les détails concrets", value: "S", score: 1 },
      { text: "Imaginez les possibilités futures", value: "N", score: 1 },
    ],
  },
  {
    id: 5,
    question: "Après une journée chargée, vous préférez :",
    options: [
      { text: "Passer du temps seul(e) pour recharger", value: "I", score: 1 },
      { text: "Sortir avec des amis", value: "E", score: 1 },
    ],
  },
];

export const personalityResults: Record<string, TestResult> = {
  INTJ: {
    type: "INTJ - L'Architecte",
    title: "Stratège et Visionnaire",
    description: "Vous êtes analytique, créatif et déterminé. Vous excellez dans la planification stratégique et l'innovation.",
    recommendations: [
      "Métiers recommandés : Consultant, Architecte, Chercheur, Chef de projet",
      "Points forts : Pensée stratégique, résolution de problèmes complexes",
      "Axes de développement : Communication interpersonnelle, flexibilité",
    ],
  },
  ENFP: {
    type: "ENFP - Le Protagoniste",
    title: "Créatif et Enthousiaste",
    description: "Vous êtes passionné, créatif et excellent communicateur. Vous aimez inspirer et motiver les autres.",
    recommendations: [
      "Métiers recommandés : Marketing, RH, Coaching, Communication",
      "Points forts : Créativité, empathie, communication",
      "Axes de développement : Organisation, suivi des détails",
    ],
  },
  // Default for other combinations
  DEFAULT: {
    type: "Profil Unique",
    title: "Votre Personnalité Professionnelle",
    description: "Votre profil combine plusieurs traits de personnalité qui font de vous un professionnel polyvalent.",
    recommendations: [
      "Explorez des métiers qui valorisent vos forces uniques",
      "Développez vos compétences interpersonnelles",
      "Restez ouvert aux opportunités diverses",
    ],
  },
};

// Skills Test
export const skillsTest: TestQuestion[] = [
  {
    id: 1,
    question: "Votre niveau en communication écrite :",
    options: [
      { text: "Débutant", value: "communication", score: 1 },
      { text: "Intermédiaire", value: "communication", score: 2 },
      { text: "Avancé", value: "communication", score: 3 },
      { text: "Expert", value: "communication", score: 4 },
    ],
  },
  {
    id: 2,
    question: "Votre capacité à gérer des projets complexes :",
    options: [
      { text: "Débutant", value: "management", score: 1 },
      { text: "Intermédiaire", value: "management", score: 2 },
      { text: "Avancé", value: "management", score: 3 },
      { text: "Expert", value: "management", score: 4 },
    ],
  },
  {
    id: 3,
    question: "Votre maîtrise des outils numériques :",
    options: [
      { text: "Débutant", value: "digital", score: 1 },
      { text: "Intermédiaire", value: "digital", score: 2 },
      { text: "Avancé", value: "digital", score: 3 },
      { text: "Expert", value: "digital", score: 4 },
    ],
  },
  {
    id: 4,
    question: "Votre capacité d'analyse et de résolution de problèmes :",
    options: [
      { text: "Débutant", value: "analytical", score: 1 },
      { text: "Intermédiaire", value: "analytical", score: 2 },
      { text: "Avancé", value: "analytical", score: 3 },
      { text: "Expert", value: "analytical", score: 4 },
    ],
  },
  {
    id: 5,
    question: "Votre aptitude au travail en équipe :",
    options: [
      { text: "Débutant", value: "teamwork", score: 1 },
      { text: "Intermédiaire", value: "teamwork", score: 2 },
      { text: "Avancé", value: "teamwork", score: 3 },
      { text: "Expert", value: "teamwork", score: 4 },
    ],
  },
];

// Motivation Test
export const motivationTest: TestQuestion[] = [
  {
    id: 1,
    question: "Ce qui vous motive le plus au travail :",
    options: [
      { text: "La reconnaissance et le statut", value: "recognition", score: 3 },
      { text: "L'autonomie et la liberté", value: "autonomy", score: 3 },
      { text: "L'impact social et l'utilité", value: "purpose", score: 3 },
      { text: "La rémunération et les avantages", value: "compensation", score: 3 },
    ],
  },
  {
    id: 2,
    question: "Votre environnement de travail idéal :",
    options: [
      { text: "Dynamique et en constante évolution", value: "dynamic", score: 2 },
      { text: "Stable et prévisible", value: "stable", score: 2 },
      { text: "Créatif et innovant", value: "creative", score: 2 },
      { text: "Structuré et organisé", value: "structured", score: 2 },
    ],
  },
  {
    id: 3,
    question: "Vous vous épanouissez quand vous :",
    options: [
      { text: "Apprenez de nouvelles compétences", value: "learning", score: 3 },
      { text: "Aidez les autres à réussir", value: "helping", score: 3 },
      { text: "Relevez des défis difficiles", value: "challenge", score: 3 },
      { text: "Créez quelque chose de nouveau", value: "creation", score: 3 },
    ],
  },
  {
    id: 4,
    question: "Dans votre carrière, vous recherchez avant tout :",
    options: [
      { text: "L'équilibre vie pro/perso", value: "balance", score: 2 },
      { text: "L'évolution et la progression", value: "growth", score: 2 },
      { text: "La sécurité de l'emploi", value: "security", score: 2 },
      { text: "La diversité des missions", value: "variety", score: 2 },
    ],
  },
  {
    id: 5,
    question: "Votre définition du succès professionnel :",
    options: [
      { text: "Atteindre un poste de direction", value: "leadership", score: 2 },
      { text: "Devenir expert dans votre domaine", value: "expertise", score: 2 },
      { text: "Avoir un impact positif sur la société", value: "impact", score: 2 },
      { text: "Gagner votre indépendance financière", value: "financial", score: 2 },
    ],
  },
];
