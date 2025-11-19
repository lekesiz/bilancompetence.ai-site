import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTA from "@/components/sections/CTA";
import { Building2, Users, Briefcase, FileText, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AutresAides() {
  const financingOptions = [
    {
      icon: Building2,
      title: "Plan de Développement des Compétences (PDC)",
      description:
        "Votre employeur peut financer votre bilan de compétences dans le cadre du plan de développement des compétences de l'entreprise.",
      eligibility: "Tous les salariés, à l'initiative de l'employeur ou du salarié (avec accord)",
      steps: [
        "Discutez de votre projet avec votre employeur ou le service RH",
        "Formalisez la demande par écrit",
        "L'employeur prend en charge les coûts et le temps de formation",
      ],
    },
    {
      icon: Users,
      title: "Pôle Emploi (AIF - Aide Individuelle à la Formation)",
      description:
        "Si vous êtes demandeur d'emploi, Pôle Emploi peut financer tout ou partie de votre bilan de compétences via l'Aide Individuelle à la Formation.",
      eligibility: "Demandeurs d'emploi inscrits à Pôle Emploi",
      steps: [
        "Contactez votre conseiller Pôle Emploi",
        "Présentez votre projet professionnel et l'intérêt du bilan",
        "Déposez une demande d'AIF sur votre espace personnel",
        "Pôle Emploi étudie votre dossier et valide le financement",
      ],
    },
    {
      icon: Briefcase,
      title: "Transition Pro (ex-Fongecif)",
      description:
        "Les associations Transition Pro accompagnent les projets de reconversion professionnelle et peuvent financer un bilan de compétences dans ce cadre.",
      eligibility: "Salariés du secteur privé justifiant d'une ancienneté minimale",
      steps: [
        "Vérifiez votre éligibilité sur le site de Transition Pro de votre région",
        "Constituez un dossier de demande de financement",
        "Présentez votre projet lors d'un entretien",
        "Transition Pro valide le financement et la prise en charge",
      ],
    },
    {
      icon: FileText,
      title: "OPCO (Opérateurs de Compétences)",
      description:
        "Les OPCO peuvent financer le bilan de compétences des salariés des entreprises de moins de 50 salariés, selon les priorités sectorielles.",
      eligibility: "Salariés de TPE/PME (moins de 50 salariés)",
      steps: [
        "Identifiez l'OPCO de votre branche professionnelle",
        "Contactez l'OPCO pour connaître les modalités de financement",
        "Votre employeur dépose la demande de prise en charge",
        "L'OPCO valide et finance tout ou partie du bilan",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Autres Aides au Financement : PDC, Pôle Emploi, Transition Pro"
        description="Découvrez toutes les options de financement : Plan de Développement des Compétences, Pôle Emploi AIF, Transition Pro, OPCO. Comparatif 2025 avec éligibilité."
        keywords="financement bilan compétences, PDC, Pôle Emploi AIF, Transition Pro, OPCO, aides financières"
        canonical="https://bilancompetence.ai/financement/autres-aides"
      />
      <Breadcrumbs items={[{ label: "Financement", href: "/financement/cpf" }, { label: "Autres Aides" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              <Building2 className="h-4 w-4" />
              <span>Financement</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Autres Aides au Financement
            </h1>
            <p className="text-lead text-muted-foreground">
              Au-delà du CPF, plusieurs dispositifs permettent de financer votre bilan de compétences. Découvrez les options adaptées à votre situation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-16">
            {/* Introduction */}
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Plusieurs Solutions de Financement
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le CPF n'est pas la seule option pour financer votre bilan de compétences. Selon votre statut (salarié, demandeur d'emploi, indépendant) et votre situation, d'autres dispositifs peuvent prendre en charge tout ou partie des coûts.
                </p>
                <p>
                  Chez <strong>bilancompetence.ai</strong>, nous vous accompagnons dans l'identification du dispositif le plus adapté et vous aidons à constituer votre dossier de financement.
                </p>
              </div>
            </div>

            {/* Financing Options */}
            <div className="space-y-12">
              {financingOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg border bg-card card-hover-subtle p-8 text-card-foreground shadow-soft"
                  >
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-serif text-2xl font-semibold">
                          {option.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 rounded-lg bg-muted/30 p-4">
                      <p className="text-sm">
                        <strong className="text-foreground">Éligibilité :</strong>{" "}
                        <span className="text-muted-foreground">
                          {option.eligibility}
                        </span>
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 font-semibold">Démarches à suivre :</h4>
                      <ol className="space-y-2">
                        {option.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Comparison Table */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Tableau Comparatif
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border bg-card card-hover-subtle text-card-foreground">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="p-4 text-left font-semibold">Dispositif</th>
                      <th className="p-4 text-left font-semibold">Public</th>
                      <th className="p-4 text-left font-semibold">Prise en Charge</th>
                      <th className="p-4 text-left font-semibold">Délai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">CPF</td>
                      <td className="p-4 text-sm text-muted-foreground">Tous actifs</td>
                      <td className="p-4 text-sm text-muted-foreground">100% (selon solde)</td>
                      <td className="p-4 text-sm text-muted-foreground">Immédiat</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">PDC</td>
                      <td className="p-4 text-sm text-muted-foreground">Salariés</td>
                      <td className="p-4 text-sm text-muted-foreground">100%</td>
                      <td className="p-4 text-sm text-muted-foreground">1-2 mois</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Pôle Emploi (AIF)</td>
                      <td className="p-4 text-sm text-muted-foreground">Demandeurs d'emploi</td>
                      <td className="p-4 text-sm text-muted-foreground">Variable</td>
                      <td className="p-4 text-sm text-muted-foreground">2-4 semaines</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Transition Pro</td>
                      <td className="p-4 text-sm text-muted-foreground">Salariés (reconversion)</td>
                      <td className="p-4 text-sm text-muted-foreground">100%</td>
                      <td className="p-4 text-sm text-muted-foreground">2-3 mois</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">OPCO</td>
                      <td className="p-4 text-sm text-muted-foreground">Salariés TPE/PME</td>
                      <td className="p-4 text-sm text-muted-foreground">Partielle ou totale</td>
                      <td className="p-4 text-sm text-muted-foreground">1-2 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Help Section */}
            <div className="rounded-lg border bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-4 font-serif text-2xl font-semibold">
                    Nous Vous Accompagnons
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Identifier le bon dispositif de financement peut être complexe. Chez <strong>bilancompetence.ai</strong>, nous vous aidons à :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Analyser votre situation et identifier les dispositifs adaptés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Constituer votre dossier de demande de financement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Vous orienter vers les bons interlocuteurs (OPCO, Pôle Emploi, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Suivre l'avancement de votre demande</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Besoin d'Aide pour Votre Financement ?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Contactez-nous pour un entretien gratuit. Nous étudierons ensemble la meilleure solution de financement pour votre projet.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Prendre Rendez-vous</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/financement/cpf">Financement CPF</Link>
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
