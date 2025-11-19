import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTA from "@/components/sections/CTA";
import { MapPin, Building2, TrendingUp, Users, Award, Globe } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ExpertiseAlsace() {
  const regionalAdvantages = [
    {
      icon: MapPin,
      title: "Implantation Locale à Haguenau",
      description:
        "Nos bureaux sont situés au cœur de Haguenau, facilitant les rencontres en présentiel. Nous connaissons intimement le tissu économique local et les opportunités de la région.",
    },
    {
      icon: Building2,
      title: "Réseau d'Entreprises Régionales",
      description:
        "Nous entretenons des relations privilégiées avec les entreprises du Bas-Rhin et du Grand-Est, facilitant votre mise en relation et votre recherche d'opportunités.",
    },
    {
      icon: TrendingUp,
      title: "Connaissance du Marché Local",
      description:
        "Nous suivons en temps réel les tendances du marché du travail alsacien : secteurs en croissance, métiers en tension, salaires pratiqués et opportunités émergentes.",
    },
  ];

  const keySectors = [
    {
      title: "Industrie et Manufacturing",
      description:
        "L'Alsace est un pôle industriel majeur : automobile (PSA à Mulhouse), aéronautique, chimie, plasturgie. Des opportunités pour ingénieurs, techniciens et managers.",
      growth: "+12% d'emplois prévus d'ici 2025",
    },
    {
      title: "Santé et Biotechnologies",
      description:
        "Strasbourg et Colmar concentrent des centres hospitaliers, laboratoires pharmaceutiques et entreprises de biotechnologie. Forte demande en professionnels de santé.",
      growth: "+8% d'emplois prévus d'ici 2025",
    },
    {
      title: "Tourisme et Hôtellerie",
      description:
        "L'Alsace attire 20 millions de visiteurs par an. Hôtellerie, restauration, œnotourisme et patrimoine offrent de nombreuses opportunités saisonnières et permanentes.",
      growth: "+15% d'emplois prévus d'ici 2025",
    },
    {
      title: "Numérique et Tech",
      description:
        "Strasbourg développe son écosystème tech avec des startups, scale-ups et grands groupes. Développeurs, data analysts et chefs de projet sont très recherchés.",
      growth: "+20% d'emplois prévus d'ici 2025",
    },
    {
      title: "Logistique et Transport",
      description:
        "Positionnement stratégique au cœur de l'Europe : ports rhénans, autoroutes, rail. Forte demande en logisticiens, transporteurs et supply chain managers.",
      growth: "+10% d'emplois prévus d'ici 2025",
    },
    {
      title: "Agroalimentaire et Viticulture",
      description:
        "L'Alsace est réputée pour ses vins, sa bière et sa gastronomie. Opportunités dans la production, la transformation et la commercialisation.",
      growth: "+6% d'emplois prévus d'ici 2025",
    },
  ];

  const localPartners = [
    {
      name: "Pôle Emploi Grand-Est",
      description: "Partenariat pour l'accompagnement des demandeurs d'emploi",
    },
    {
      name: "CCI Alsace Eurométropole",
      description: "Collaboration pour l'orientation des entrepreneurs",
    },
    {
      name: "Région Grand-Est",
      description: "Soutien aux projets de formation et de reconversion",
    },
    {
      name: "OPCO et Organismes de Formation",
      description: "Réseau pour faciliter l'accès aux formations certifiantes",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Expertise Locale Alsace : Bilan de Compétences à Haguenau"
        description="Expert en bilan de compétences en Alsace depuis 20 ans. Connaissance du marché du travail local, transfrontalier Suisse-Allemagne et Grand-Est. 500+ clients."
        keywords="bilan compétences Alsace, Haguenau, Strasbourg, Mulhouse, Colmar, Grand-Est, transfrontalier"
        canonical="https://bilancompetence.ai/expertise-alsace"
      />
      <Breadcrumbs items={[{ label: "Bilan de Compétences", href: "/bilan-de-competences/definition" }, { label: "Expertise Alsace" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              <MapPin className="h-4 w-4" />
              <span>Alsace · Grand-Est</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Expertise Locale en Alsace
            </h1>
            <p className="text-lead text-muted-foreground">
              Implantés à Haguenau depuis plus de 20 ans, nous connaissons intimement le marché du travail alsacien. Notre expertise régionale fait la différence dans la réussite de votre projet professionnel.
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
                Pourquoi Choisir un Organisme Alsacien ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le marché du travail alsacien a ses spécificités : proximité avec l'Allemagne et la Suisse, bilinguisme valorisé, secteurs industriels forts, et un tissu de PME dynamiques. Un bilan de compétences efficace doit tenir compte de ces réalités locales.
                </p>
                <p>
                  Chez <strong>bilancompetence.ai</strong>, nous ne nous contentons pas d'appliquer une méthodologie générique. Nous intégrons notre connaissance approfondie du Grand-Est pour vous proposer des pistes professionnelles réalistes et ancrées dans votre territoire.
                </p>
              </div>
            </div>

            {/* Regional Advantages */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Nos Avantages Régionaux
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {regionalAdvantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft"
                    >
                      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-serif text-lg font-semibold">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Sectors */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Les Secteurs Clés en Alsace
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {keySectors.map((sector, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft"
                  >
                    <h3 className="mb-2 font-serif text-lg font-semibold">
                      {sector.title}
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {sector.description}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      <TrendingUp className="h-3 w-3" />
                      {sector.growth}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Border Opportunities */}
            <div className="rounded-lg border bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 font-serif text-2xl font-semibold">
                    Opportunités Transfrontalières
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      L'Alsace bénéficie d'une position géographique unique au cœur de l'Europe. Travailler en Allemagne ou en Suisse tout en résidant en France est une réalité pour des milliers d'Alsaciens.
                    </p>
                    <p>
                      Nous vous accompagnons dans l'exploration de ces opportunités transfrontalières : reconnaissance des diplômes, équivalences de compétences, fiscalité, et recherche d'emploi dans les bassins de Bâle, Fribourg ou Karlsruhe.
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg bg-background/50 p-4 text-center">
                        <div className="mb-1 text-2xl font-bold text-primary">
                          50 000+
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Frontaliers Alsaciens
                        </div>
                      </div>
                      <div className="rounded-lg bg-background/50 p-4 text-center">
                        <div className="mb-1 text-2xl font-bold text-primary">
                          30%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Salaires Plus Élevés
                        </div>
                      </div>
                      <div className="rounded-lg bg-background/50 p-4 text-center">
                        <div className="mb-1 text-2xl font-bold text-primary">
                          3 Pays
                        </div>
                        <div className="text-xs text-muted-foreground">
                          À Moins de 50 km
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Partners */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Nos Partenaires Locaux
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {localPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif text-base font-semibold">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <p className="mb-4 italic text-muted-foreground">
                    "J'ai choisi bilancompetence.ai pour leur connaissance du marché alsacien. Grâce à leur réseau local, j'ai pu identifier des opportunités dans le secteur de la logistique que je n'aurais jamais découvertes seul. Aujourd'hui, je travaille pour une PME de Haguenau et je suis épanoui."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10" />
                    <div>
                      <div className="font-semibold">Marc S.</div>
                      <div className="text-sm text-muted-foreground">
                        Responsable Logistique, Haguenau
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Prêt à Découvrir Vos Opportunités en Alsace ?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Rencontrons-nous à Haguenau pour discuter de votre projet professionnel et explorer ensemble les opportunités du Grand-Est.
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
