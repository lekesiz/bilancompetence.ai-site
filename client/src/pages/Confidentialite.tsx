import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_ADDRESS } from "@/const";

import SEOHead from "@/components/SEOHead";
import { Shield, Lock, Eye, FileText, Clock, UserCheck } from "lucide-react";

export default function Confidentialite() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Politique de Confidentialité - bilancompetence.ai"
        description="Politique de confidentialité et protection des données personnelles de bilancompetence.ai. Conformité RGPD et respect de votre vie privée."
        keywords="politique de confidentialité, RGPD, protection des données, vie privée"
        canonical="https://bilancompetence.ai/confidentialite"
      />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex rounded-full bg-primary/10 p-3">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-muted-foreground">
              Chez <strong>{COMPANY_NAME}</strong>, la protection de vos données personnelles est une priorité absolue. Cette politique vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Dernière mise à jour :</strong> 17 novembre 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Responsable du Traitement */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">1. Responsable du Traitement des Données</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                Le responsable du traitement des données personnelles collectées sur ce site est :
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Raison sociale :</span>
                  <span className="text-muted-foreground">{COMPANY_NAME}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Adresse :</span>
                  <span className="text-muted-foreground">{COMPANY_ADDRESS}</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[180px] font-semibold text-foreground">Email :</span>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Données Collectées */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">2. Données Collectées</h2>
              </div>
              <p className="mb-6 text-muted-foreground">
                Nous collectons uniquement les données personnelles que vous nous fournissez volontairement :
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Données d'identité</h3>
                  <p className="text-sm text-muted-foreground">Nom, prénom</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Données de contact</h3>
                  <p className="text-sm text-muted-foreground">Email, téléphone</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Données de connexion</h3>
                  <p className="text-sm text-muted-foreground">Adresse IP, logs de navigation</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Données du bilan</h3>
                  <p className="text-sm text-muted-foreground">CV, résultats de tests (clients uniquement)</p>
                </div>
              </div>
            </div>

            {/* Finalités du Traitement */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">3. Finalités du Traitement</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Répondre à vos demandes de contact ou de rendez-vous</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Gérer votre inscription et votre parcours de bilan de compétences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Vous envoyer des informations sur nos services (avec votre consentement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Améliorer notre site web et nos services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">Respecter nos obligations légales et réglementaires</span>
                </li>
              </ul>
            </div>

            {/* Base Légale */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">4. Base Légale du Traitement</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                Conformément au RGPD, le traitement de vos données repose sur :
              </p>
              <div className="space-y-3">
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <h3 className="mb-1 font-semibold text-foreground">Consentement</h3>
                  <p className="text-sm text-muted-foreground">Pour l'envoi de newsletters et communications marketing</p>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <h3 className="mb-1 font-semibold text-foreground">Exécution d'un contrat</h3>
                  <p className="text-sm text-muted-foreground">Pour la réalisation de votre bilan de compétences</p>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <h3 className="mb-1 font-semibold text-foreground">Obligation légale</h3>
                  <p className="text-sm text-muted-foreground">Pour la conservation des documents comptables et fiscaux</p>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <h3 className="mb-1 font-semibold text-foreground">Intérêt légitime</h3>
                  <p className="text-sm text-muted-foreground">Pour l'amélioration de nos services</p>
                </div>
              </div>
            </div>

            {/* Durée de Conservation */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">5. Durée de Conservation</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[220px] font-semibold text-foreground">Données de contact :</span>
                  <span className="text-muted-foreground">3 ans après le dernier contact</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[220px] font-semibold text-foreground">Données du bilan :</span>
                  <span className="text-muted-foreground">5 ans après la fin du bilan</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[220px] font-semibold text-foreground">Données comptables :</span>
                  <span className="text-muted-foreground">10 ans (obligation légale)</span>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="min-w-[220px] font-semibold text-foreground">Cookies :</span>
                  <span className="text-muted-foreground">13 mois maximum</span>
                </div>
              </div>
            </div>

            {/* Vos Droits */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">6. Vos Droits</h2>
              <p className="mb-6 text-muted-foreground">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Droit d'accès</h3>
                  <p className="text-sm text-muted-foreground">Obtenir une copie de vos données</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Droit de rectification</h3>
                  <p className="text-sm text-muted-foreground">Corriger vos données inexactes</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Droit à l'effacement</h3>
                  <p className="text-sm text-muted-foreground">Supprimer vos données personnelles</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Droit d'opposition</h3>
                  <p className="text-sm text-muted-foreground">Refuser le traitement de vos données</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Droit à la portabilité</h3>
                  <p className="text-sm text-muted-foreground">Récupérer vos données dans un format structuré</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Droit à la limitation</h3>
                  <p className="text-sm text-muted-foreground">Limiter le traitement de vos données</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  Pour exercer ces droits, contactez-nous à :{" "}
                  <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-primary hover:underline">
                    {COMPANY_EMAIL}
                  </a>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous pouvez également déposer une réclamation auprès de la CNIL :{" "}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">7. Sécurité des Données</h2>
              <p className="mb-4 text-muted-foreground">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">La destruction accidentelle ou illicite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">La perte, l'altération ou la divulgation non autorisée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">L'accès non autorisé à vos données</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Nos mesures incluent : chiffrement SSL/TLS, accès restreint aux données, sauvegardes régulières, et formation de notre personnel.
              </p>
            </div>

            {/* Cookies */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">8. Cookies et Technologies Similaires</h2>
              <p className="mb-4 text-muted-foreground">
                Nous utilisons des cookies pour améliorer votre expérience et réaliser des statistiques de visite via Google Analytics.
              </p>
              <p className="text-muted-foreground">
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Notez que cela peut affecter certaines fonctionnalités du site.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
              <h2 className="mb-4 font-serif text-2xl font-bold">Des Questions sur Vos Données ?</h2>
              <p className="mb-6 text-muted-foreground">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la protection de vos données personnelles.
              </p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
