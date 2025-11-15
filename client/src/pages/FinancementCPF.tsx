import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/CTA";
import { CheckCircle2, Euro, Clock, Shield } from "lucide-react";
import { CPF_LINK } from "@/const";

export default function FinancementCPF() {
  const steps = [
    {
      number: "01",
      title: "Vérifiez Votre Solde CPF",
      description:
        "Connectez-vous sur Mon Compte Formation pour voir combien d'euros vous avez accumulés. La plupart des salariés ont entre 1500€ et 5000€.",
    },
    {
      number: "02",
      title: "Choisissez Votre Formation",
      description:
        "Contactez-nous pour un entretien préliminaire gratuit. Nous vous enverrons ensuite un lien direct vers notre programme sur la plateforme CPF.",
    },
    {
      number: "03",
      title: "Inscrivez-vous en Ligne",
      description:
        "Cliquez sur le lien, remplissez le formulaire d'inscription et validez. Votre CPF sera automatiquement débité - aucun paiement de votre part.",
    },
    {
      number: "04",
      title: "Commencez Votre Bilan",
      description:
        "Une fois votre inscription validée (sous 48h), nous planifions ensemble votre première séance. C'est parti!",
    },
  ];

  const benefits = [
    {
      icon: Euro,
      title: "100% Gratuit Pour Vous",
      description:
        "Si votre solde CPF couvre le coût du bilan, vous ne payez rien de votre poche. Sinon, seule la différence est à votre charge.",
    },
    {
      icon: Clock,
      title: "Rapide et Simple",
      description:
        "L'inscription prend moins de 10 minutes. Pas de paperasse, tout se fait en ligne sur la plateforme officielle.",
    },
    {
      icon: Shield,
      title: "Sécurisé et Officiel",
      description:
        "Mon Compte Formation est la plateforme gouvernementale officielle. Vos données et votre argent sont protégés.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
              <Euro className="h-4 w-4" />
              <span>Financement Public</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Financez Votre Bilan à 100% avec le{" "}
              <span className="gradient-text">CPF</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Le Compte Personnel de Formation (CPF) est votre droit. Utilisez-le
              pour investir dans votre carrière sans dépenser un centime de votre
              poche.
            </p>
            <Button asChild size="lg">
              <a href={CPF_LINK} target="_blank" rel="noopener noreferrer">
                Vérifier Mon Solde CPF
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* What is CPF */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Qu'est-ce que le CPF ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le <strong>Compte Personnel de Formation (CPF)</strong> est un
                  dispositif créé par l'État français pour permettre à chaque
                  actif de se former tout au long de sa vie professionnelle. Que
                  vous soyez salarié, demandeur d'emploi ou indépendant, vous
                  accumulez des droits à la formation chaque année.
                </p>
                <p>
                  Depuis 2019, le CPF fonctionne en <strong>euros</strong> (et
                  non plus en heures). Un salarié à temps plein accumule{" "}
                  <strong>500€ par an</strong>, jusqu'à un plafond de{" "}
                  <strong>5 000€</strong>. Pour les personnes peu qualifiées, ce
                  montant peut aller jusqu'à <strong>800€ par an</strong> (plafond
                  de 8 000€).
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Pourquoi Utiliser Votre CPF pour un Bilan ?
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
                    >
                      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Steps */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Comment Utiliser Votre CPF en 4 Étapes Simples
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm md:p-8"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-serif text-2xl font-bold text-primary">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-serif text-xl font-semibold">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold">
                Questions Fréquentes
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-semibold">
                    Mon employeur sera-t-il informé ?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Non. Le CPF est un droit personnel. Si vous effectuez votre
                    bilan en dehors de vos heures de travail, votre employeur n'a
                    pas besoin d'être informé et ne le sera pas automatiquement.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">
                    Que se passe-t-il si mon solde est insuffisant ?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Vous pouvez compléter la différence par carte bancaire
                    directement sur la plateforme. Vous pouvez aussi demander un
                    abondement (complément) à Pôle Emploi ou à votre OPCO.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">
                    Puis-je me rétracter après l'inscription ?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Oui. Vous disposez d'un délai légal de rétractation de 14
                    jours calendaires après validation de votre inscription. Aucun
                    frais ne vous sera facturé.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Prêt à Utiliser Votre CPF ?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Contactez-nous pour un entretien préliminaire gratuit. Nous vous
                guiderons à chaque étape du processus CPF.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact?source=cpf_page">
                    Prendre Rendez-vous
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/financement/autres-aides">
                    Autres Options de Financement
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
