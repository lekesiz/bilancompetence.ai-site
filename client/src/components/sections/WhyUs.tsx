import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Award, TrendingUp } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Sparkles,
      title: "Boosté par l'Intelligence Artificielle",
      description:
        "Grâce à la technologie DeepSeek AI, votre CV, vos résultats de tests et vos notes sont analysés en profondeur. Découvrez des parcours professionnels inattendus et des recommandations de niches sectorielles.",
      link: "/bilan-de-competences/approche-ia",
    },
    {
      icon: MapPin,
      title: "Expertise du Marché Alsacien",
      description:
        "Nous connaissons de première main les opportunités d'emploi, les entreprises et les tendances sectorielles à Strasbourg, Mulhouse, Colmar et dans toute la région Grand-Est. Votre projet s'appuie sur des réalités locales.",
      link: "/expertise-alsace",
    },
    {
      icon: Award,
      title: "Méthodologie Fondée sur la Recherche",
      description:
        "Nous travaillons avec des méthodes scientifiquement prouvées, basées sur la recherche internationale en développement de carrière. Pas seulement de l'intuition, mais des données et de la science.",
      link: "/bilan-de-competences/recherche",
    },
    {
      icon: TrendingUp,
      title: "Approche Axée sur les Résultats",
      description:
        "Notre objectif n'est pas seulement de vous remettre un rapport, mais de vous équiper d'un plan d'action concret. Avec un entretien de suivi à 6 mois, nous vous aidons à atteindre vos objectifs.",
      link: "/methodologie",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Pourquoi{" "}
            <span className="gradient-text">bilancompetence.ai</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            À l'intersection de la technologie, de l'expertise locale et de la
            méthodologie scientifique, nous vous proposons des solutions de
            carrière sur mesure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-lg border bg-card card-hover-subtle p-8 text-card-foreground shadow-soft transition-all hover:shadow-medium"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {feature.description}
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href={feature.link}>En savoir plus →</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
