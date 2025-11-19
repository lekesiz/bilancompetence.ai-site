import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function MethodologyOverview() {
  const phases = [
    {
      number: "01",
      title: "Phase Préliminaire",
      duration: "2-3 heures",
      description:
        "Définissez vos objectifs, clarifiez vos attentes et traçons ensemble la feuille de route du processus de bilan.",
    },
    {
      number: "02",
      title: "Phase d'Investigation",
      duration: "12-15 heures",
      description:
        "Explorez en profondeur vos talents, motivations et valeurs. Avec des tests assistés par IA et des entretiens individuels.",
    },
    {
      number: "03",
      title: "Phase de Conclusion",
      duration: "6-8 heures",
      description:
        "Concrétisez votre projet professionnel, élaborez votre plan d'action et recevez votre document de synthèse. Votre feuille de route est prête !",
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Cadre Légal, Méthodologie Scientifique
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Le bilan de compétences est un processus structuré de 24 heures,
            défini par le droit du travail français. Voici les étapes que nous
            franchirons ensemble :
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft transition-all hover:shadow-medium md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-serif text-2xl font-bold text-primary-foreground">
                    {phase.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="font-serif text-xl font-semibold">
                      {phase.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-card card-hover-subtle p-8 text-center text-card-foreground shadow-soft">
          <div className="mb-4 flex justify-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-semibold">
            24 Heures au Total, Impact à Vie
          </h3>
          <p className="mb-6 text-muted-foreground">
            Ce processus légalement défini est conçu pour créer un changement
            durable dans votre carrière. Découvrez notre méthodologie détaillée.
          </p>
          <Button asChild>
            <Link href="/bilan-de-competences/methodologie">Découvrir Notre Méthodologie</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
