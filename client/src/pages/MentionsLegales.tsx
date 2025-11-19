import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_SIREN, COMPANY_RCS, COMPANY_TVA, COMPANY_DIRECTOR } from "@/const";

import SEOHead from "@/components/SEOHead";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mentions Légales - bilancompetence.ai"
        description="Mentions légales de bilancompetence.ai - Informations sur l'éditeur, l'hébergement et les conditions d'utilisation du site."
        keywords="mentions légales, informations légales, éditeur, RGPD"
        canonical="https://bilancompetence.ai/mentions-legales"
      />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Mentions Légales
            </h1>
            <p className="text-lg text-muted-foreground">
              Informations légales relatives à l'utilisation du site bilancompetence.ai
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Éditeur du Site */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">1. Éditeur du Site</h2>
              <p className="mb-4 text-muted-foreground">
                Le site <strong className="text-foreground">bilancompetence.ai</strong> est édité par :
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Raison sociale :</span>
                  <span className="text-muted-foreground">{COMPANY_NAME}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Forme juridique :</span>
                  <span className="text-muted-foreground">SASU (Société par Actions Simplifiée Unipersonnelle)</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Siège social :</span>
                  <span className="text-muted-foreground">{COMPANY_ADDRESS}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">SIREN :</span>
                  <span className="text-muted-foreground">{COMPANY_SIREN.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">RCS :</span>
                  <span className="text-muted-foreground">{COMPANY_RCS}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">N° TVA intracommunautaire :</span>
                  <span className="text-muted-foreground">{COMPANY_TVA}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Téléphone :</span>
                  <span className="text-muted-foreground">{COMPANY_PHONE}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Email :</span>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Directeur de la Publication */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">2. Directeur de la Publication</h2>
              <p className="text-muted-foreground">
                Le directeur de la publication est <strong className="text-foreground">{COMPANY_DIRECTOR}</strong>, Président de {COMPANY_NAME}.
              </p>
            </div>

            {/* Hébergement */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">3. Hébergement</h2>
              <p className="mb-4 text-muted-foreground">
                Le site est hébergé par :
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Nom :</span>
                  <span className="text-muted-foreground">Manus Platform</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Site web :</span>
                  <a href="https://manus.im" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://manus.im
                  </a>
                </div>
              </div>
            </div>

            {/* Propriété Intellectuelle */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">4. Propriété Intellectuelle</h2>
              <p className="mb-4 text-muted-foreground">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive de {COMPANY_NAME}, sauf mention contraire.
              </p>
              <p className="text-muted-foreground">
                Toute reproduction, distribution, modification ou utilisation, même partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
              </p>
            </div>

            {/* Protection des Données */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">5. Protection des Données Personnelles</h2>
              <p className="mb-4 text-muted-foreground">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-muted-foreground">
                Pour exercer ces droits, veuillez consulter notre{" "}
                <a href="/confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </a>{" "}
                ou nous contacter à l'adresse : <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">{COMPANY_EMAIL}</a>
              </p>
            </div>

            {/* Certification Qualiopi */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">6. Certification Qualité</h2>
              <p className="mb-4 text-muted-foreground">
                {COMPANY_NAME} est un organisme de formation certifié <strong className="text-foreground">Qualiopi</strong> pour la catégorie d'action suivante : <strong className="text-foreground">Actions de Formation</strong>.
              </p>
              <p className="text-muted-foreground">
                Cette certification atteste de la qualité du processus mis en œuvre par les organismes de formation conformément aux exigences du décret n° 2019-565 du 6 juin 2019 relatif à la qualité des actions de la formation professionnelle.
              </p>
            </div>

            {/* Cookies */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">7. Cookies</h2>
              <p className="mb-4 text-muted-foreground">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite via Google Analytics.
              </p>
              <p className="text-muted-foreground">
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Pour plus d'informations, consultez notre{" "}
                <a href="/confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </div>

            {/* Crédits */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">8. Crédits</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Conception et développement :</strong> {COMPANY_NAME}
                </p>
                <p>
                  <strong className="text-foreground">Technologies utilisées :</strong> React, TypeScript, Tailwind CSS
                </p>
                <p>
                  <strong className="text-foreground">Icônes :</strong> Lucide Icons
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
