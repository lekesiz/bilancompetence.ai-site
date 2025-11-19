import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import CTA from "@/components/sections/CTA";
import { BookOpen, Award, TrendingUp, Users } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Recherche() {
  const researches = [
    {
      icon: BookOpen,
      title: "Théorie de l'Autodétermination (Deci & Ryan, 2000)",
      institution: "University of Rochester, USA",
      citations: "Citée par plus de 80 000 études",
      description:
        "Cette théorie fondamentale en psychologie de la motivation explique comment trois besoins psychologiques innés — autonomie, compétence et relation sociale (relatedness) — sont essentiels au développement optimal, à l'intégration sociale et au bien-être personnel. La recherche guidée par la SDT a eu un impact considérable sur la compréhension de la motivation intrinsèque et de l'autorrégulation dans les contextes professionnels. Les environnements qui facilitent ces besoins favorisent la croissance personnelle et la performance durable.",
      application:
        "Nos entretiens explorent systématiquement vos besoins d'autonomie (autodirection dans les choix de carrière), de compétence (sentiment d'efficacité et de maîtrise) et de connexion sociale (appartenance et soutien professionnel) pour identifier les environnements de travail où vous vous épanouirez naturellement.",
      keyFindings: "La satisfaction de ces trois besoins prédit la motivation intrinsèque, l'engagement au travail et la satisfaction professionnelle à long terme.",
    },
    {
      icon: Award,
      title: "Modèle RIASEC de Holland (1959)",
      institution: "Johns Hopkins University, USA",
      citations: "Théorie la plus utilisée en orientation professionnelle mondiale",
      description:
        "Le modèle RIASEC (Réaliste, Investigateur, Artistique, Social, Entreprenant, Conventionnel) est l'un des cadres théoriques les plus validés empiriquement en psychologie vocationnelle. Holland postule que les individus recherchent des environnements professionnels congéniaux à leur type de personnalité. La congruence entre le type de personnalité et l'environnement de travail prédit la satisfaction professionnelle, la stabilité de carrière et la performance. Des recherches interculturelles ont confirmé la validité de cette structure hexagonale dans plus de 50 pays.",
      application:
        "Nous utilisons des instruments RIASEC validés (Vocational Preference Inventory, Self-Directed Search) pour identifier votre profil de personnalité vocationnelle et les environnements professionnels où vous serez le plus satisfait et performant. L'analyse de congruence guide nos recommandations de métiers.",
      keyFindings: "La congruence personne-environnement prédit jusqu'à 40% de la variance de la satisfaction professionnelle.",
    },
    {
      icon: TrendingUp,
      title: "Théorie du Capital Psychologique (Luthans, Youssef & Avolio, 2007)",
      institution: "University of Nebraska-Lincoln, USA",
      citations: "Citée par plus de 9 000 études, 2 270+ citations (2017)",
      description:
        "Le Capital Psychologique (PsyCap) représente l'état de développement psychologique positif d'un individu, caractérisé par quatre dimensions mesurables et développables : (1) l'Espoir (Hope) — persévérance vers les objectifs et recherche de chemins alternatifs ; (2) l'Efficacité personnelle (Self-Efficacy) — confiance en sa capacité à réussir ; (3) la Résilience (Resilience) — capacité à rebondir face aux difficultés ; (4) l'Optimisme (Optimism) — attributions positives pour le présent et le futur. Contrairement aux traits de personnalité stables, le PsyCap est malleable et peut être développé par des interventions ciblées.",
      application:
        "Nous évaluons votre capital psychologique actuel et concevons des micro-interventions pour renforcer chaque dimension. Par exemple : développement de plans d'action alternatifs (espoir), expériences de maîtrise progressives (efficacité), identification des ressources d'adaptation (résilience), et recadrage cognitif positif (optimisme).",
      keyFindings: "Le PsyCap prédit significativement la performance au travail, la satisfaction professionnelle, l'engagement organisationnel et le bien-être psychologique. Les interventions de développement du PsyCap montrent des effets durables.",
    },
    {
      icon: Users,
      title: "Théorie Sociale Cognitive de Carrière (Lent, Brown & Hackett, 1994)",
      institution: "University of Maryland, USA",
      citations: "Cadre théorique dominant en psychologie vocationnelle contemporaine",
      description:
        "La Social Cognitive Career Theory (SCCT) intègre la théorie sociale cognitive de Bandura au domaine du développement de carrière. Elle explique comment les croyances d'auto-efficacité (self-efficacy beliefs), les attentes de résultats (outcome expectations) et les objectifs personnels (personal goals) interagissent pour influencer les intérêts professionnels, les choix de carrière et la performance. La SCCT souligne le rôle crucial des expériences de maîtrise (mastery experiences), de la modélisation sociale (vicarious learning), de la persuasion verbale et des états physiologiques dans la formation de l'auto-efficacité. Les barrières perçues et le soutien social modèrent ces relations.",
      application:
        "Nous identifions vos croyances d'auto-efficacité dans différents domaines professionnels et analysons leur origine (expériences passées, modèles, feedback reçu). Nous construisons des expériences de maîtrise progressives et mobilisons des modèles inspirants pour renforcer votre confiance. Nous clarifions vos attentes de résultats réalistes et alignons vos objectifs avec vos capacités.",
      keyFindings: "L'auto-efficacité est le prédicteur le plus puissant des intérêts et des choix de carrière. Les interventions ciblant l'auto-efficacité améliorent significativement l'exploration de carrière et la prise de décision.",
    },
  ];

  const additionalTheories = [
    {
      title: "Théorie du Développement de Carrière (Super, 1980)",
      description: "La Life-Span, Life-Space Theory de Donald Super (citée par 11 591+ études) conceptualise le développement de carrière comme un processus continu tout au long de la vie, non comme une décision unique. Le concept de soi vocationnel (vocational self-concept) évolue à travers les expériences et les rôles multiples (travail, famille, loisirs). Le Life-Career Rainbow visualise l'investissement temporel et émotionnel dans différents rôles à travers les étapes de vie (croissance, exploration, établissement, maintien, désengagement).",
    },
    {
      title: "Théorie de l'Apprentissage Fortuit (Krumboltz, 2009)",
      description: "La Happenstance Learning Theory (citée par 1 212+ études) reconnaît que les parcours de carrière sont influencés par des événements imprévus et des rencontres fortuites. Plutôt que de planifier une carrière linéaire, Krumboltz encourage le développement de cinq compétences : curiosité, persistance, flexibilité, optimisme et prise de risque. L'objectif du conseil en carrière est d'aider les clients à créer et reconnaître des opportunités, pas seulement à prendre une décision unique.",
    },
    {
      title: "Théorie de la Construction de Carrière (Savickas, 2005)",
      description: "La Career Construction Theory (citée par 36+ études récentes) intègre le constructivisme personnel et le constructionnisme social. Elle se concentre sur trois dimensions : la personnalité vocationnelle (quelles carrières construire), l'adaptabilité de carrière (comment construire sa carrière), et le thème de vie (pourquoi ces choix). Le Career Construction Interview et le workbook 'My Career Story' permettent aux individus de donner du sens à leurs expériences passées, présentes et futures pour construire une narration cohérente de leur carrière.",
    },
  ];

  const frenchContext = [
    {
      title: "CEREQ - Centre d'Études et de Recherches sur les Qualifications",
      description:
        "Organisme public français de recherche sur les relations formation-emploi, créé en 1970. Le CEREQ produit des analyses statistiques et qualitatives sur les transitions professionnelles, l'insertion des jeunes, la formation continue et l'évolution des compétences. Leurs enquêtes Génération (suivi de cohortes de jeunes sortants du système éducatif) et leurs études sur les trajectoires professionnelles éclairent nos pratiques d'accompagnement.",
    },
    {
      title: "CNAM - Conservatoire National des Arts et Métiers",
      description:
        "Institution française de référence en formation professionnelle et recherche sur le travail, fondée en 1794. Le laboratoire CRTD (Centre de Recherche sur le Travail et le Développement) mène des recherches sur l'analyse de l'activité, l'ergonomie, la didactique professionnelle et le développement des compétences. Leurs travaux sur les compétences transférables, la reconnaissance des acquis et la validation des expériences enrichissent notre approche du bilan.",
    },
    {
      title: "AFPA - Agence Nationale pour la Formation Professionnelle des Adultes",
      description:
        "Établi en 1949, l'AFPA est un acteur majeur de la formation professionnelle en France avec plus de 70 ans d'expérience. Leurs observatoires des métiers, leurs référentiels de compétences sectoriels et leurs données sur les métiers en tension et les besoins de compétences émergentes orientent nos recommandations. L'AFPA développe également des méthodes innovantes d'évaluation des compétences professionnelles.",
    },
    {
      title: "Recherche Française sur le Bilan de Compétences",
      description:
        "Les travaux de Claude Lemoine (2023, Dunod) sur les approches théoriques du bilan, de Ruffin-Beck et Lemoine (2011) sur les effets du bilan en termes de connaissance de soi et de proactivité, et les recherches de François et Botteman (2002) sur l'application de la théorie sociale cognitive de Bandura au bilan de compétences constituent des références essentielles. Ces études soulignent la distinction entre le bilan (centré sur la personne, l'expérience professionnelle) et l'orientation scolaire traditionnelle.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Fondements Académiques : Recherche Scientifique en Bilan de Compétences"
        description="Découvrez les théories scientifiques qui fondent notre approche : Deci & Ryan, Holland, Luthans, Lent. Une méthodologie basée sur la recherche internationale."
        keywords="recherche académique, théorie autodetermination, Holland RIASEC, capital psychologique, Lent SCCT, psychologie du travail"
        canonical="https://bilancompetence.ai/bilan-de-competences/recherche"
      />
      <Breadcrumbs items={[{ label: "Bilan de Compétences", href: "/bilan-de-competences/definition" }, { label: "Fondements Académiques" }]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              <BookOpen className="h-4 w-4" />
              <span>Recherche Scientifique</span>
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Fondements Académiques
            </h1>
            <p className="text-lead text-muted-foreground">
              Notre approche du bilan de compétences s'appuie sur plus de 65 ans de recherche internationale en psychologie du travail, orientation professionnelle et développement de carrière. Nous intégrons sept théories majeures validées par plus de 100 000 citations scientifiques cumulées.
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
                Une Approche Fondée sur la Science
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le bilan de compétences n'est pas une simple conversation ou un test de personnalité. C'est un processus scientifique rigoureux qui s'appuie sur des décennies de recherche en psychologie du travail, en orientation professionnelle et en sciences de l'éducation. Contrairement à l'orientation scolaire traditionnelle, le bilan se distingue par son approche centrée sur la personne, l'importance accordée à l'expérience professionnelle et une démarche clinique personnalisée.
                </p>
                <p>
                  Chez <strong>bilancompetence.ai</strong>, nous intégrons les théories et méthodologies les plus validées scientifiquement pour vous offrir un accompagnement de qualité. Nos consultants sont formés aux dernières avancées de la recherche internationale, combinant les approches classiques (Holland, Super, Bandura) avec les développements contemporains (Savickas, Krumboltz, Luthans) et les spécificités du contexte français (CEREQ, CNAM, recherches de Lemoine).
                </p>
                <p>
                  Cette base scientifique solide garantit que votre bilan ne repose pas sur des intuitions ou des méthodes non éprouvées, mais sur des modèles théoriques dont l'efficacité a été démontrée par des milliers d'études empiriques à travers le monde.
                </p>
              </div>
            </div>

            {/* Research Areas */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Les Théories qui Guident Notre Pratique
              </h2>
              <div className="space-y-8">
                {researches.map((research, index) => {
                  const Icon = research.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-lg border bg-card card-hover-subtle p-8 text-card-foreground shadow-soft"
                    >
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 font-serif text-xl font-semibold">
                            {research.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {research.institution}
                          </p>
                        </div>
                      </div>
                      <p className="mb-1 text-xs font-medium text-primary">
                        {research.citations}
                      </p>
                      <p className="mb-4 text-muted-foreground">
                        {research.description}
                      </p>
                      <div className="rounded-lg bg-muted/30 p-4 space-y-3">
                        <p className="text-sm font-medium text-foreground">
                          <strong>Application Pratique :</strong>{" "}
                          {research.application}
                        </p>
                        <p className="text-xs text-muted-foreground italic">
                          <strong>Résultats Clés :</strong> {research.keyFindings}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Theories */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Théories Complémentaires
              </h2>
              <div className="space-y-6">
                {additionalTheories.map((theory, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft"
                  >
                    <h3 className="mb-3 font-serif text-lg font-semibold">
                      {theory.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {theory.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* French Context */}
            <div>
              <h2 className="mb-8 text-center font-serif text-3xl font-bold">
                Le Contexte Français
              </h2>
              <div className="space-y-6">
                {frenchContext.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft"
                  >
                    <h3 className="mb-2 font-serif text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Integration */}
            <div className="rounded-lg border bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                L'Intelligence Artificielle au Service de la Science
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'intégration de l'intelligence artificielle dans notre processus n'est pas une mode technologique, mais une évolution naturelle de la recherche en orientation professionnelle. Les modèles de langage comme DeepSeek permettent d'analyser des volumes de données (CV, résultats de tests, notes d'entretiens) impossibles à traiter manuellement.
                </p>
                <p>
                  Cette approche s'inscrit dans la lignée des travaux récents sur l'utilisation de l'IA en psychologie du travail (Campion et al., 2016; Landers & Behrend, 2022), qui démontrent que les algorithmes peuvent détecter des patterns et des correspondances compétences-métiers que l'analyse humaine seule ne peut identifier.
                </p>
                <p>
                  <strong>Important :</strong> L'IA est un outil d'aide à la décision, pas un remplaçant du consultant. La relation humaine, l'écoute active et l'accompagnement personnalisé restent au cœur de notre pratique.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <h3 className="mb-4 font-serif text-2xl font-semibold">
                Certifications et Qualité
              </h3>
              <p className="mb-6 text-muted-foreground">
                Notre organisme est certifié Qualiopi, garantissant la qualité de nos processus et le respect des standards professionnels français.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/bilan-de-competences/methodologie">Notre Méthodologie</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/bilan-de-competences/approche-ia">
                    Approche IA
                  </Link>
                </Button>
              </div>
            </div>

            {/* References */}
            <div className="rounded-lg border bg-muted/30 p-8">
              <h3 className="mb-4 font-serif text-xl font-semibold">
                Références Bibliographiques Clés
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <em>American Psychologist</em>, 55(1), 68-78. [Cité par 80 407+]
                </li>
                <li>
                  • Holland, J. L. (1959). A theory of vocational choice. <em>Journal of Counseling Psychology</em>, 6(1), 35-45.
                </li>
                <li>
                  • Luthans, F., Youssef, C. M., & Avolio, B. J. (2007). <em>Psychological Capital: Developing the Human Competitive Edge</em>. Oxford University Press. [Cité par 9 134+]
                </li>
                <li>
                  • Lent, R. W., Brown, S. D., & Hackett, G. (1994). Toward a unifying social cognitive theory of career and academic interest, choice, and performance. <em>Journal of Vocational Behavior</em>, 45(1), 79-122.
                </li>
                <li>
                  • Super, D. E. (1980). A life-span, life-space approach to career development. <em>Journal of Vocational Behavior</em>, 16(3), 282-298. [Cité par 11 591+]
                </li>
                <li>
                  • Krumboltz, J. D. (2009). The happenstance learning theory. <em>Journal of Career Assessment</em>, 17(2), 135-154. [Cité par 1 212+]
                </li>
                <li>
                  • Savickas, M. L. (2005). The theory and practice of career construction. In S. D. Brown & R. W. Lent (Eds.), <em>Career Development and Counseling: Putting Theory and Research to Work</em> (pp. 42-70). Wiley.
                </li>
                <li>
                  • Wang, D., & Li, Y. (2024). Career construction theory: tools, interventions, and future trends. <em>Frontiers in Psychology</em>, 15, 1381233. [Cité par 36+]
                </li>
                <li>
                  • Lemoine, C. (2023). Les approches théoriques du bilan. In <em>Se former au bilan de compétences</em> (pp. 75-86). Dunod.
                </li>
                <li>
                  • Ruffin-Beck, C., & Lemoine, C. (2011). Bilan de compétences, construction personnelle pour une dynamique professionnelle. <em>L'orientation scolaire et professionnelle</em>, 40(3).
                </li>
                <li>
                  • François, P. H., & Botteman, A. E. (2002). Théorie sociale cognitive de Bandura et bilan de compétences. <em>Carriérologie</em>, 8(3-4). [Cité par 83+]
                </li>
                <li>
                  • Landers, R. N., & Behrend, T. S. (2022). Artificial intelligence and employment: New cross-disciplinary approaches. <em>Personnel Assessment and Decisions</em>, 8(3).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="secondary" />
    </div>
  );
}
