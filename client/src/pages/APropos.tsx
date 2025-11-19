import SEOHead from "@/components/SEOHead";
import { Users, Award, Target, Heart, CheckCircle2, Shield } from "lucide-react";
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE } from "@/const";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function APropos() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="À Propos - Notre Équipe et Notre Mission"
        description="Découvrez notre équipe d'experts certifiés Qualiopi, notre approche innovante du bilan de compétences enrichie par l'IA, nos valeurs et notre engagement."
        keywords="équipe, mission, valeurs, Qualiopi, certification, bilan compétences"
        canonical="https://bilancompetence.ai/a-propos"
      />
      <Breadcrumbs items={[{ label: "À Propos" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              <Award className="h-4 w-4" />
              Certifié Qualiopi
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              À Propos de {COMPANY_NAME}
            </h1>
            <p className="text-lead text-muted-foreground">
              Pionniers du bilan de compétences enrichi par l'intelligence
              artificielle en Alsace, nous accompagnons votre évolution
              professionnelle avec expertise et innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  <Target className="h-4 w-4" />
                  Notre Mission
                </div>
                <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                  Transformer Votre Avenir Professionnel
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Depuis notre création, nous avons pour mission d'accompagner
                  les professionnels dans leur évolution de carrière en
                  combinant l'expertise humaine et la puissance de
                  l'intelligence artificielle.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Notre approche unique permet une analyse approfondie de vos
                  compétences, aspirations et opportunités, tout en respectant
                  les standards les plus élevés de qualité certifiés par
                  Qualiopi.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm">
                      <strong>670+ bilans</strong> réalisés avec succès
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm">
                      <strong>95% de satisfaction</strong> client
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm">
                      <strong>20+ ans d'expérience</strong> en accompagnement
                      professionnel
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Notre équipe"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 rounded-lg bg-primary p-6 text-primary-foreground shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                <Heart className="h-4 w-4" />
                Nos Valeurs
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
                Ce Qui Nous Anime
              </h2>
              <p className="text-muted-foreground">
                Des principes forts qui guident chacune de nos actions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Valeur 1 */}
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Accompagnement Personnalisé
                </h3>
                <p className="text-sm text-muted-foreground">
                  Chaque parcours est unique. Nous adaptons notre méthodologie à
                  votre situation, vos objectifs et votre rythme.
                </p>
              </div>

              {/* Valeur 2 */}
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Excellence & Qualité</h3>
                <p className="text-sm text-muted-foreground">
                  Certifiés Qualiopi, nous respectons les standards les plus
                  élevés de qualité dans l'accompagnement professionnel.
                </p>
              </div>

              {/* Valeur 3 */}
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Innovation Continue</h3>
                <p className="text-sm text-muted-foreground">
                  Nous intégrons les dernières avancées en IA pour enrichir
                  votre bilan et vous offrir des perspectives uniques.
                </p>
              </div>

              {/* Valeur 4 */}
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Confidentialité Absolue
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vos données et échanges restent strictement confidentiels,
                  conformément au RGPD et à notre éthique professionnelle.
                </p>
              </div>

              {/* Valeur 5 */}
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Bienveillance</h3>
                <p className="text-sm text-muted-foreground">
                  Nous créons un espace d'écoute et de confiance où vous pouvez
                  explorer librement vos aspirations professionnelles.
                </p>
              </div>

              {/* Valeur 6 */}
              <div className="rounded-lg border bg-card card-hover-subtle p-6 text-card-foreground shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Résultats Concrets</h3>
                <p className="text-sm text-muted-foreground">
                  Notre objectif : vous fournir un plan d'action clair et
                  actionnable pour concrétiser votre projet professionnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Qualiopi */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-lg border bg-card card-hover-subtle p-8 shadow-lg md:p-12">
              <div className="text-center mb-8">
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  Organisme Certifié Qualiopi
                </h2>
                <p className="text-muted-foreground">
                  La certification qualité a été délivrée au titre des catégories d'actions suivantes :
                  <strong> ACTIONS DE FORMATION</strong> et <strong>BILANS DE COMPÉTENCES</strong>. Gage de qualité et de sérieux, cette certification vous garantit un
                  accompagnement professionnel et rigoureux.
                </p>
              </div>

              <div className="mx-auto mb-8 max-w-md">
                <picture>
                  <source srcSet="/qualiopi-logo.webp" type="image/webp" />
                  <img
                    src="/qualiopi-logo.png"
                    alt="Logo Qualiopi - Processus Certifié - République Française"
                    className="mx-auto w-full h-auto"
                    loading="lazy"
                  />
                </picture>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-sm text-muted-foreground">Certificat</h3>
                  <p className="font-bold">N° FP 2022/0076-4</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-sm text-muted-foreground">N° de déclaration d'activité</h3>
                  <p className="font-bold">446706715 67</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-sm text-muted-foreground">N° SIREN</h3>
                  <p className="font-bold">818347346</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-sm text-muted-foreground">Validité</h3>
                  <p className="font-bold">10/02/2025 - 09/02/2028</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-primary/5 p-4 text-center">
                <p className="text-sm">
                  <strong>Catégories d'actions :</strong> Actions de Formation • Bilans de compétences
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Adresse :</strong> 1A, route de Schweighouse - 67500 HAGUENAU
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Prêt à Commencer Votre Bilan ?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Contactez-nous pour discuter de votre projet professionnel et
              découvrir comment nous pouvons vous accompagner.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90"
              >
                Nous Contacter
              </a>
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground px-8 py-3 font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                {COMPANY_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
