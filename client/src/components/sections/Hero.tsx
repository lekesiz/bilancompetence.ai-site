import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Brain, Users, Euro } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="gradient-text">Bilan de Compétences</span> Nouvelle
            Génération avec Intelligence Artificielle en Alsace
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lead text-muted-foreground">
            Révélez vos talents cachés, exploitez votre plein potentiel et
            tracez votre parcours professionnel idéal grâce à une méthodologie
            scientifique et une expertise locale reconnue.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact?source=hero">
                Demander un Entretien Gratuit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/financement/cpf">Vérifier mon Éligibilité CPF</Link>
            </Button>
          </div>

          {/* Value Propositions */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft transition-shadow hover:shadow-medium">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                Analyse Assistée par IA
              </h3>
              <p className="text-sm text-muted-foreground">
                Une évaluation approfondie et objective de vos compétences qui
                révèle votre potentiel caché.
              </p>
            </div>

            <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft transition-shadow hover:shadow-medium">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-secondary/10 p-3">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                Consultants Certifiés
              </h3>
              <p className="text-sm text-muted-foreground">
                Des experts en carrière expérimentés qui connaissent le marché
                alsacien et vous offrent un accompagnement personnalisé.
              </p>
            </div>

            <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft transition-shadow hover:shadow-medium">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <Euro className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                Financement CPF à 100%
              </h3>
              <p className="text-sm text-muted-foreground">
                Investissez dans votre carrière avec le soutien de l'État, sans
                débourser un centime de votre poche.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}
