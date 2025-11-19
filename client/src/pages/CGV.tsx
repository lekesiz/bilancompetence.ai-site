import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_SIREN } from "@/const";

import SEOHead from "@/components/SEOHead";
import { FileText, Euro, Calendar, RefreshCw, Shield, AlertCircle } from "lucide-react";

export default function CGV() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Conditions Générales de Vente - bilancompetence.ai"
        description="Conditions générales de vente des prestations de bilan de compétences de bilancompetence.ai. Tarifs, modalités de paiement, annulation et garanties."
        keywords="conditions générales de vente, CGV, tarifs, modalités, bilan de compétences"
        canonical="https://bilancompetence.ai/cgv"
      />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex rounded-full bg-primary/10 p-3">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Conditions Générales de Vente
            </h1>
            <p className="text-lg text-muted-foreground">
              Les présentes Conditions Générales de Vente (CGV) régissent la relation contractuelle entre <strong>{COMPANY_NAME}</strong> et toute personne souhaitant bénéficier d'un bilan de compétences.
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
            {/* Champ d'Application */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">Article 1 - Champ d'Application</h2>
              <p className="mb-4 text-muted-foreground">
                Les présentes CGV s'appliquent à toutes les prestations de bilan de compétences proposées par {COMPANY_NAME}, que le financement soit assuré par :
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg bg-muted/50 p-3 text-sm">
                  ✓ Le CPF (Compte Personnel de Formation)
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-sm">
                  ✓ Un OPCO (Opérateur de Compétences)
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-sm">
                  ✓ Pôle Emploi (AIF, PDC)
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-sm">
                  ✓ L'employeur ou le Client lui-même
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Toute commande de prestation implique l'acceptation sans réserve des présentes CGV.
              </p>
            </div>

            {/* Présentation des Services */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Article 2 - Présentation des Services</h2>
              </div>
              <p className="mb-6 text-muted-foreground">
                {COMPANY_NAME} propose des prestations de bilan de compétences conformes aux dispositions du Code du Travail (Articles L6313-1 et suivants). Toutes nos prestations sont certifiées <strong className="text-foreground">Qualiopi</strong>.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Bilan Essentiel</h3>
                  <p className="text-sm text-muted-foreground">24 heures de bilan (cadre légal), entretiens individuels, tests psychométriques, synthèse écrite détaillée</p>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Bilan Avancé (IA)</h3>
                  <p className="text-sm text-muted-foreground">Bilan Essentiel + analyse IA du CV et compétences, recommandations personnalisées</p>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Bilan Premium (Exécutif)</h3>
                  <p className="text-sm text-muted-foreground">Bilan Avancé + évaluation leadership, coaching supplémentaire, suivi post-bilan 6 mois</p>
                </div>
              </div>
            </div>

            {/* Tarifs */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <Euro className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Article 3 - Tarifs</h2>
              </div>
              <p className="mb-6 text-muted-foreground">
                Les tarifs de nos prestations sont indiqués en euros TTC (TVA non applicable - Article 261-4-4° du CGI) :
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-background p-6 text-center">
                  <div className="mb-2 text-sm font-semibold text-muted-foreground">Essentiel</div>
                  <div className="mb-1 text-3xl font-bold text-foreground">1 790 €</div>
                  <div className="text-xs text-muted-foreground">TTC</div>
                </div>
                <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 text-center">
                  <div className="mb-2 text-sm font-semibold text-primary">Avancé (IA)</div>
                  <div className="mb-1 text-3xl font-bold text-foreground">2 190 €</div>
                  <div className="text-xs text-muted-foreground">TTC</div>
                </div>
                <div className="rounded-lg border bg-background p-6 text-center">
                  <div className="mb-2 text-sm font-semibold text-muted-foreground">Premium</div>
                  <div className="mb-1 text-3xl font-bold text-foreground">2 890 €</div>
                  <div className="text-xs text-muted-foreground">TTC</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Ces tarifs sont susceptibles d'être modifiés à tout moment, mais les prestations seront facturées sur la base des tarifs en vigueur au moment de la commande.
              </p>
            </div>

            {/* Modalités de Paiement */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">Article 4 - Modalités de Paiement</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Financement CPF</h3>
                  <p className="text-sm text-muted-foreground">
                    Le paiement est effectué directement par la Caisse des Dépôts et Consignations. Aucun versement n'est demandé au bénéficiaire si le solde CPF est suffisant.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Financement OPCO / Pôle Emploi</h3>
                  <p className="text-sm text-muted-foreground">
                    Facturation directe à l'organisme financeur après validation du dossier. Le Client peut être amené à verser un acompte si le financement est partiel.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Financement Personnel</h3>
                  <p className="text-sm text-muted-foreground">
                    Paiement par virement bancaire, chèque ou carte bancaire. Un acompte de 30% est demandé à la signature du contrat, le solde étant exigible avant la phase de conclusion.
                  </p>
                </div>
              </div>
            </div>

            {/* Déroulement de la Prestation */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Article 5 - Déroulement de la Prestation</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                Le bilan de compétences se déroule en 3 phases obligatoires :
              </p>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Phase Préliminaire</h3>
                    <p className="text-sm text-muted-foreground">Analyse de la demande, définition des objectifs, information sur les conditions de déroulement</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Phase d'Investigation</h3>
                    <p className="text-sm text-muted-foreground">Analyse du parcours, identification des compétences, évaluation des aptitudes, exploration des pistes professionnelles</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Phase de Conclusion</h3>
                    <p className="text-sm text-muted-foreground">Synthèse du bilan, élaboration du projet professionnel, plan d'action détaillé</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                <strong>Durée :</strong> Le bilan se déroule sur une période de 2 à 4 mois, avec une répartition flexible des séances selon vos disponibilités.
              </p>
            </div>

            {/* Annulation et Rétractation */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Article 6 - Annulation et Droit de Rétractation</h2>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-foreground">Droit de Rétractation (14 jours)</h3>
                  <p className="text-sm text-muted-foreground">
                    Conformément à l'article L221-18 du Code de la Consommation, vous disposez d'un délai de 14 jours à compter de la signature du contrat pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Annulation après le délai de rétractation</h3>
                  <p className="text-sm text-muted-foreground">
                    En cas d'annulation après le délai de rétractation, les sommes versées restent acquises à {COMPANY_NAME} au prorata des heures de prestation effectuées.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Report de séance</h3>
                  <p className="text-sm text-muted-foreground">
                    Toute séance non annulée au moins 48 heures à l'avance sera considérée comme effectuée et facturée.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentialité */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">Article 7 - Confidentialité</h2>
              <p className="mb-4 text-muted-foreground">
                {COMPANY_NAME} s'engage à respecter la confidentialité des informations communiquées par le bénéficiaire dans le cadre du bilan de compétences.
              </p>
              <p className="text-muted-foreground">
                Les résultats du bilan sont la propriété exclusive du bénéficiaire. Ils ne peuvent être communiqués à un tiers (employeur, organisme financeur) qu'avec l'accord écrit et exprès du bénéficiaire.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">Article 8 - Responsabilité</h2>
              <p className="mb-4 text-muted-foreground">
                {COMPANY_NAME} met en œuvre tous les moyens nécessaires pour assurer la qualité de ses prestations. Toutefois, notre responsabilité ne saurait être engagée :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground"></span>
                  <span className="text-sm text-muted-foreground">En cas de force majeure empêchant l'exécution de la prestation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground"></span>
                  <span className="text-sm text-muted-foreground">En cas de non-respect par le bénéficiaire de ses engagements (assiduité, implication)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground"></span>
                  <span className="text-sm text-muted-foreground">Pour les décisions prises par le bénéficiaire suite au bilan</span>
                </li>
              </ul>
            </div>

            {/* Réclamations */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <div className="mb-6 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold">Article 9 - Réclamations et Litiges</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                En cas de réclamation, le Client est invité à contacter {COMPANY_NAME} par email à{" "}
                <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-primary hover:underline">
                  {COMPANY_EMAIL}
                </a>{" "}
                ou par courrier à l'adresse : {COMPANY_ADDRESS}.
              </p>
              <p className="mb-4 text-muted-foreground">
                Nous nous engageons à répondre dans un délai de 15 jours ouvrés.
              </p>
              <p className="text-sm text-muted-foreground">
                En cas de litige, et après échec d'une solution amiable, le Client peut saisir le médiateur de la consommation compétent ou les tribunaux français, seuls compétents.
              </p>
            </div>

            {/* Modifications */}
            <div className="rounded-lg border bg-card card-hover-subtle p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold">Article 10 - Modifications des CGV</h2>
              <p className="text-muted-foreground">
                {COMPANY_NAME} se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
              <h2 className="mb-4 font-serif text-2xl font-bold">Des Questions sur nos CGV ?</h2>
              <p className="mb-6 text-muted-foreground">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos conditions générales de vente.
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
