import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTA from "@/components/sections/CTA";
import { Search, Lightbulb, Rocket, Clock, Users, FileText } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseSchema from "@/components/CourseSchema";

export default function Methodologie() {
  const courseUrl = 'https://bilancompetence.ai/bilan-de-competences/methodologie';
  const phases = [
    {
      number: 1,
      icon: Search,
      title: "Phase Préliminaire",
      duration: "2-3 heures",
      description:
        "La phase de découverte où nous établissons les bases de notre collaboration. Nous analysons vos besoins, définissons vos objectifs et expliquons le déroulement du bilan.",
      activities: [
        "Entretien initial pour comprendre votre situation actuelle",
        "Analyse de vos attentes et définition des objectifs du bilan",
        "Présentation détaillée de la méthodologie et du calendrier",
        "Signature du contrat et des documents de confidentialité",
        "Collecte des premiers documents (CV, diplômes, certifications)",
      ],
    },
    {
      number: 2,
      icon: Lightbulb,
      title: "Phase d'Investigation",
      duration: "16-18 heures",
      description:
        "Le cœur du bilan où nous explorons en profondeur vos compétences, vos motivations et vos aspirations. Cette phase combine entretiens, tests et analyse IA.",
      activities: [
        "Tests de personnalité et d'aptitudes professionnelles",
        "Analyse approfondie de votre parcours professionnel",
        "Identification de vos compétences transférables",
        "Exploration de vos valeurs, motivations et centres d'intérêt",
        "Analyse IA de votre CV et de vos résultats de tests",
        "Recherche de pistes professionnelles et secteurs d'activité",
        "Étude du marché du travail en Alsace et Grand-Est",
      ],
    },
    {
      number: 3,
      icon: Rocket,
      title: "Phase de Conclusion",
      duration: "4-6 heures",
      description:
        "La phase de synthèse où nous construisons ensemble votre plan d'action concret. Vous repartez avec une feuille de route claire pour votre avenir professionnel.",
      activities: [
        "Synthèse de tous les résultats et analyses",
        "Validation de votre projet professionnel",
        "Élaboration d'un plan d'action détaillé et réaliste",
        "Identification des formations nécessaires",
        "Stratégie de recherche d'emploi ou de reconversion",
        "Remise du document de synthèse personnalisé",
        "Entretien de suivi à 6 mois (optionnel)",
      ],
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "24 Heures au Total",
      description:
        "Conformément au cadre légal français, notre bilan comprend 24 heures d'accompagnement réparties sur 8 à 12 semaines.",
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description:
        "Un consultant certifié dédié vous accompagne tout au long du processus, avec des séances en présentiel ou en visioconférence.",
    },
    {
      icon: FileText,
      title: "Document de Synthèse",
      description:
        "À la fin du bilan, vous recevez un document de synthèse complet et confidentiel qui vous appartient exclusivement.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Méthodologie : Les 3 Phases du Bilan de Compétences"
        description="Découvrez notre méthodologie en 3 phases : Préliminaire (2-3h), Investigation (16-18h) et Conclusion (4-6h). Processus structuré, personnalisé Qualiopi."
        keywords="méthodologie bilan de compétences, 3 phases, 24 heures, phase préliminaire, phase investigation, phase conclusion"
        canonical="https://bilancompetence.ai/methodologie"
      />
      <CourseSchema
        name="Bilan de Compétences Nouvelle Génération"
        description="Bilan de compétences en 3 phases (24h) avec intelligence artificielle. Méthodologie scientifique, accompagnement personnalisé, certification Qualiopi."
        provider="bilancompetence.ai - NETZ Informatique"
        url={courseUrl}
        price={1800}
        currency="EUR"
      />
      <Breadcrumbs items={[{ label: "Bilan de Compétences", href: "/bilan-de-competences/definition" }, { label: "Méthodologie" }]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Notre Méthodologie
            </h1>
            <p className="text-lead text-muted-foreground">
              Un processus structuré en 3 phases, conforme au cadre légal français et enrichi par l'intelligence artificielle. Une approche scientifique pour des résultats concrets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-16">
            {/* Introduction */}
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Les 3 Phases du Bilan de Compétences
              </h2>
              <p className="text-muted-foreground">
                Le Code du Travail français définit un cadre précis pour le déroulement d'un bilan de compétences. Chez <strong>bilancompetence.ai</strong>, nous respectons scrupuleusement ce cadre tout en y intégrant les dernières innovations technologiques.
              </p>
            </div>

            {/* Phases */}
            <div className="space-y-12">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg border bg-card card-hover-subtle p-8 text-card-foreground shadow-soft"
                  >
                    <div className="mb-6 flex items-start gap-6">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {phase.number}
                          </span>
                          <h3 className="font-serif text-2xl font-semibold">
                            {phase.title}
                          </h3>
                          <span className="ml-auto rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="mb-4 text-muted-foreground">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-22">
                      <h4 className="mb-3 font-semibold">Activités Clés :</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Features */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Les Points Clés de Notre Accompagnement
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card card-hover-subtle p-6 text-center text-card-foreground shadow-soft"
                    >
                      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Flexibility */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Flexibilité et Adaptation
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bien que le processus soit structuré, nous adaptons le rythme et le contenu à votre situation personnelle. Les séances peuvent être organisées en présentiel dans nos bureaux à Haguenau, ou en visioconférence pour plus de flexibilité.
                </p>
                <p>
                  Le calendrier est défini ensemble lors de la phase préliminaire, en tenant compte de vos contraintes professionnelles et personnelles. La durée totale du bilan varie généralement entre 8 et 12 semaines.
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Découvrez Nos Fondements Scientifiques
              </h3>
              <p className="mb-6 text-muted-foreground">
                Notre méthodologie s'appuie sur des recherches internationales en psychologie du travail et développement de carrière.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/bilan-de-competences/fondements-academiques">
                    Fondements Académiques
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/financement/cpf">
                    Financement CPF
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="secondary" />
    </div>
  );
}
