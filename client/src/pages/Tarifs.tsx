import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTA from "@/components/sections/CTA";
import { Check, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Tarifs() {

  const pricingPlans = [
    {
      name: "Bilan Essentiel",
      productKey: "BILAN_ESSENTIEL" as const,
      price: "1 490€",
      description: "Pour découvrir vos compétences et clarifier votre projet",
      features: [
        "24 heures de bilan (cadre légal)",
        "7 entretiens individuels (14h)",
        "Tests de personnalité et motivation",
        "Analyse des compétences",
        "Projet professionnel structuré",
        "Synthèse écrite personnalisée",
        "Entretien de suivi à 6 mois",
      ],
      cta: "Choisir Essentiel",
      popular: false,
    },
    {
      name: "Bilan Avancé (IA)",
      productKey: "BILAN_AVANCE" as const,
      price: "1 790€",
      description: "Avec l'intelligence artificielle pour aller plus loin",
      features: [
        "Tout du Bilan Essentiel",
        "🧠 Analyse IA de votre CV",
        "🧠 Détection de compétences cachées",
        "🧠 Suggestions de métiers émergents",
        "🧠 Cartographie avancée des compétences",
        "Rapport d'analyse IA détaillé",
        "Accès prioritaire au conseiller",
      ],
      cta: "Choisir Avancé IA",
      popular: true,
    },
    {
      name: "Bilan Premium (Exécutif)",
      productKey: "BILAN_PREMIUM" as const,
      price: "2 290€",
      description: "Pour les cadres et dirigeants exigeants",
      features: [
        "Tout du Bilan Avancé (IA)",
        "👥 Évaluation leadership 360°",
        "👥 Analyse du style de management",
        "2 séances de coaching supplémentaires",
        "Stratégie de personal branding",
        "Optimisation profil LinkedIn",
        "Support prioritaire 7j/7",
      ],
      cta: "Choisir Premium",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Tarifs : Prix du Bilan de Compétences | 3 Formules"
        description="Découvrez nos 3 formules de bilan de compétences : Essentiel (1790€), Avancé IA (2190€), Premium (2890€). 100% finançable CPF. Tarifs transparents, sans frais."
        keywords="tarifs bilan de compétences, prix bilan compétences, coût bilan, financement CPF, formules"
        canonical="https://bilancompetence.ai/financement/tarifs"
      />
      <Breadcrumbs items={[{ label: "Financement", href: "/financement/cpf" }, { label: "Tarifs" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Tarifs Transparents, Investissement Durable
            </h1>
            <p className="mb-8 text-lead text-muted-foreground">
              Des formules adaptées à vos besoins, toutes finançables à 100% par
              le CPF. Aucun frais caché, aucune surprise.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              <Check className="h-4 w-4" />
              <span>Certifié Qualiopi • Éligible CPF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border p-8 shadow-soft transition-all hover:shadow-medium ${
                  plan.popular
                    ? "border-primary bg-primary/5 ring-2 ring-primary"
                    : "bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Le Plus Populaire</span>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 font-serif text-2xl font-bold">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="font-serif text-4xl font-bold">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Finançable CPF
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={`/contact?tarif=${plan.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold">
              Qu'est-ce qui est Inclus dans Tous les Tarifs ?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Tous les entretiens et séances de travail",
                "Tous les tests et outils d'évaluation",
                "Analyse IA (formules concernées)",
                "Synthèse écrite personnalisée",
                "Plan d'action détaillé",
                "Entretien de suivi à 6 mois",
                "Accès aux ressources en ligne",
                "TVA (nos services sont exonérés de TVA)",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold">
              Options de Paiement Flexibles
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  Financement CPF
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Utilisez votre Compte Personnel de Formation pour financer
                  100% du bilan. Aucun paiement de votre part si votre solde est
                  suffisant.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/financement/cpf">En savoir plus sur le CPF →</Link>
                </Button>
              </div>

              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  Autres Aides
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  OPCO, Pôle Emploi, plan de formation entreprise ou paiement
                  personnel en plusieurs fois sans frais.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/financement/autres-aides">
                    Découvrir les options →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
