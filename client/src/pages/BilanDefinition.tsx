import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTA from "@/components/sections/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle2, Users, FileText, TrendingUp } from "lucide-react";

export default function BilanDefinition() {
  const benefits = [
    "Évaluez objectivement vos compétences actuelles et votre potentiel",
    "Clarifiez vos objectifs de carrière et établissez un plan réaliste",
    "Fondez vos décisions de changement de métier, de promotion ou de réorientation sur des bases solides",
    "Comprenez en profondeur vos motivations, vos valeurs et votre personnalité",
    "Découvrez les opportunités du marché du travail et les secteurs qui vous correspondent",
  ];

  const whoIsItFor = [
    {
      icon: Users,
      title: "Salariés",
      description:
        "Professionnels cherchant une nouvelle direction dans leur carrière, visant une promotion ou planifiant une mobilité interne.",
    },
    {
      icon: FileText,
      title: "Demandeurs d'Emploi",
      description:
        "Candidats souhaitant définir le bon objectif lors de leur retour à l'emploi et se démarquer dans la compétition.",
    },
    {
      icon: TrendingUp,
      title: "Entrepreneurs et Indépendants",
      description:
        "Professionnels développant une nouvelle idée d'entreprise ou réévaluant leurs activités actuelles.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Qu'est-ce qu'un Bilan de Compétences ? | Définition et Cadre Légal"
        description="Découvrez la définition complète du bilan de compétences, son cadre légal, ses bénéfices et pour qui il est destiné. Certifié Qualiopi, finançable CPF."
        keywords="bilan de compétences définition, cadre légal, article L6313-10, CPF, Qualiopi, reconversion professionnelle"
        canonical="https://bilancompetence.ai/bilan-de-competences/definition"
      />
      <Breadcrumbs items={[
        { label: "Bilan de Compétences", href: "/bilan-de-competences/definition" },
        { label: "Définition" }
      ]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Qu'est-ce qu'un Bilan de Compétences ?
            </h1>
            <p className="text-lead text-muted-foreground">
              Un service de développement de carrière soutenu par l'État, défini par le droit du travail français. Un processus scientifique pour découvrir vos talents, clarifier vos objectifs de carrière et façonner votre avenir professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Definition */}
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">
                Définition Légale et Cadre
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le bilan de compétences est un droit inscrit dans le Code du Travail français (Article L6313-1) depuis 1991. Ce processus est conçu pour analyser les compétences professionnelles et personnelles, les aptitudes et les motivations d'un individu. Il s'agit d'un service de conseil structuré de <strong>24 heures</strong> au total.
                </p>
                <p>
                  Le bilan n'est pas simplement un test ou une évaluation. Au contraire, c'est un voyage au cours duquel vous travaillez en tête-à-tête avec un consultant certifié pour examiner en profondeur le passé, le présent et l'avenir de votre carrière. À la fin, vous recevez un <strong>document de synthèse</strong> personnalisé et un <strong>plan d'action</strong> concret.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Qu'est-ce qu'un Bilan de Compétences Vous Apporte ?
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who is it for */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">
                Pour Qui est le Bilan de Compétences ?
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {whoIsItFor.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft"
                    >
                      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Confidentiality */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Garantie de Confidentialité et d'Indépendance
              </h3>
              <p className="text-muted-foreground">
                Les résultats du processus de bilan sont entièrement <strong>confidentiels</strong> et vous appartiennent exclusivement. Votre employeur, Pôle Emploi ou toute autre institution ne peut accéder au contenu de votre bilan ou à votre document de synthèse sans votre autorisation. Cela vous offre un environnement de liberté et d'honnêteté totales. Tout ce que vous partagez avec votre consultant est protégé par les règles de confidentialité professionnelle.
              </p>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Prochaines Étapes
              </h3>
              <p className="mb-6 text-muted-foreground">
                Vous avez découvert comment fonctionne le bilan de compétences. Maintenant, découvrez comment notre approche vous différenciera.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/bilan-de-competences/approche-ia">
                    Notre Approche IA
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/bilan-de-competences/methodologie">Notre Méthodologie</Link>
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
