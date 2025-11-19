import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTA from "@/components/sections/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Brain, Zap, Target, Shield } from "lucide-react";

export default function ApprocheIA() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Analyse Approfondie du CV",
      description:
        "DeepSeek AI analyse chaque ligne de votre CV. Non seulement ce que vous avez fait, mais comment vous l'avez fait et quelles compétences transférables vous possédez.",
    },
    {
      icon: Zap,
      title: "Parcours de Carrière Inattendus",
      description:
        "L'IA détecte des secteurs de niche et des métiers émergents que les consultants traditionnels pourraient manquer. Vous pourriez être surpris par les suggestions.",
    },
    {
      icon: Target,
      title: "Correspondance Compétences-Métiers",
      description:
        "Vos résultats de tests et notes sont traités par l'IA pour identifier les métiers et secteurs les plus alignés avec vos talents.",
    },
    {
      icon: Shield,
      title: "Objectif et Impartial",
      description:
        "L'IA offre une analyse dépourvue de préjugés. Uniquement basée sur les données, une évaluation mathématique.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Approche IA : Bilan de Compétences avec Intelligence Artificielle"
        description="Découvrez comment l'IA DeepSeek révolutionne le bilan de compétences : analyse prédictive, correspondance compétences-métiers, personnalisation. Innovation."
        keywords="bilan de compétences IA, intelligence artificielle, DeepSeek, analyse prédictive, matching compétences, innovation"
        canonical="https://bilancompetence.ai/bilan-de-competences/approche-ia"
      />
      <Breadcrumbs items={[
        { label: "Bilan de Compétences", href: "/bilan-de-competences/definition" },
        { label: "Approche IA" }
      ]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              <Zap className="h-4 w-4" />
              <span>Innovation Technologique</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Bilan de Compétences Renforcé par{" "}
              <span className="gradient-text">l'Intelligence Artificielle</span>
            </h1>
            <p className="text-lead text-muted-foreground">
              Nous combinons la touche humaine du conseil traditionnel avec la puissance analytique de l'intelligence artificielle. Une analyse de carrière impartiale et approfondie qui révèle votre potentiel caché.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Humain + Machine : L'Approche Bilan du Futur
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le cœur d'un bilan de compétences est la relation de confiance entre le consultant et le bénéficiaire. Nous ne changeons pas cette réalité. Cependant, nous enrichissons cette relation avec les analyses objectives et axées sur les données que l'intelligence artificielle offre.
                </p>
                <p>
                  Chez <strong>bilancompetence.ai</strong>, nous utilisons les modèles de langage les plus avancés comme DeepSeek pour analyser en profondeur votre CV, vos résultats de tests et vos notes de séances. Le résultat ? Une carte de carrière qui montre non seulement "ce que vous pouvez faire", mais aussi "où vous continuerez à briller".
                </p>
              </div>
            </div>

            {/* AI Features */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Comment Fonctionne Notre Analyse IA ?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {aiFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft"
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

            {/* Real Example */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Un Exemple Concret
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Situation :</strong> Un directeur comptable avec 15 ans d'expérience souhaite changer de carrière mais n'est pas sûr de la direction à prendre.
                </p>
                <p>
                  <strong>Approche Traditionnelle :</strong> Le consultant suggère d'autres rôles liés à la comptabilité (CFO, auditeur).
                </p>
                <p>
                  <strong>Approche Assistée par IA :</strong> DeepSeek détecte dans le CV du bénéficiaire des expressions fréquemment utilisées comme "optimisation des processus", "analyse de données" et "formation d'équipe". L'IA montre que ces compétences sont également précieuses dans des métiers comme "Consultant en Excellence Opérationnelle" ou "Analyste de Données". Le bénéficiaire découvre ces nouveaux parcours de carrière auxquels il n'avait jamais pensé.
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Vos Données Sont en Sécurité
              </h2>
              <p className="text-muted-foreground">
                Notre analyse par intelligence artificielle traite vos données de manière entièrement confidentielle et sécurisée. Aucune information personnelle n'est partagée avec des tiers ou utilisée pour entraîner les modèles d'IA. Une fois l'analyse terminée, toutes vos données sont stockées en toute sécurité et ne sont accessibles qu'à vous.
              </p>
            </div>

            {/* Academic Foundation */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Technologie + Science
              </h3>
              <p className="mb-6 text-muted-foreground">
                Notre approche IA repose sur une méthodologie scientifique fondée sur des recherches internationales en développement de carrière. La technologie n'est qu'un outil ; la vraie puissance réside dans son utilisation appropriée.
              </p>
              <Button asChild size="lg">
                <Link href="/bilan-de-competences/fondements-academiques">
                  Nos Fondements Académiques
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="secondary" />
    </div>
  );
}
