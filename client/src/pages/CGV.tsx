import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/const";

export default function CGV() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
        <div className="container">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Conditions Générales de Vente
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="prose prose-slate mx-auto max-w-4xl dark:prose-invert">
            <p className="lead">
              Les présentes Conditions Générales de Vente (CGV) régissent la
              relation contractuelle entre <strong>{COMPANY_NAME}</strong> et
              toute personne (ci-après "le Client") souhaitant bénéficier d'un
              bilan de compétences.
            </p>

            <h2>Article 1 - Champ d'Application</h2>
            <p>
              Les présentes CGV s'appliquent à toutes les prestations de bilan
              de compétences proposées par {COMPANY_NAME}, que le financement
              soit assuré par le CPF, un OPCO, Pôle Emploi, l'employeur ou le
              Client lui-même.
            </p>
            <p>
              Toute commande de prestation implique l'acceptation sans réserve
              des présentes CGV.
            </p>

            <h2>Article 2 - Présentation des Services</h2>
            <p>
              {COMPANY_NAME} propose des prestations de bilan de compétences
              conformes aux dispositions du Code du Travail (Articles L6313-1 et
              suivants). Nos prestations comprennent :
            </p>
            <ul>
              <li><strong>Bilan Essentiel :</strong> 24 heures de bilan (cadre légal), entretiens individuels, tests, synthèse écrite</li>
              <li><strong>Bilan Avancé (IA) :</strong> Bilan Essentiel + analyse IA du CV et compétences</li>
              <li><strong>Bilan Premium (Exécutif) :</strong> Bilan Avancé + évaluation leadership, coaching supplémentaire</li>
            </ul>
            <p>
              Toutes nos prestations sont certifiées <strong>Qualiopi</strong>
              pour la catégorie "Bilans de compétences".
            </p>

            <h2>Article 3 - Tarifs</h2>
            <p>
              Les tarifs de nos prestations sont indiqués en euros TTC (TVA non
              applicable - Article 261-4-4° du CGI) et sont les suivants :
            </p>
            <ul>
              <li>Bilan Essentiel : 1 790 €</li>
              <li>Bilan Avancé (IA) : 2 190 €</li>
              <li>Bilan Premium (Exécutif) : 2 890 €</li>
            </ul>
            <p>
              Ces tarifs sont susceptibles de modification à tout moment, mais
              seront facturés sur la base du tarif en vigueur au moment de la
              commande.
            </p>

            <h2>Article 4 - Modalités d'Inscription</h2>
            <h3>4.1 Financement CPF</h3>
            <p>
              Le Client s'inscrit directement via la plateforme{" "}
              <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer">
                Mon Compte Formation
              </a>. L'inscription est validée sous 48 heures ouvrées.
            </p>

            <h3>4.2 Autres Financements</h3>
            <p>
              Pour tout autre mode de financement (OPCO, Pôle Emploi, paiement
              personnel), le Client contacte {COMPANY_NAME} pour un entretien
              préliminaire gratuit. Un devis personnalisé est ensuite établi.
            </p>

            <h2>Article 5 - Modalités de Paiement</h2>
            <h3>5.1 Paiement CPF</h3>
            <p>
              Le paiement est effectué automatiquement par la plateforme Mon
              Compte Formation. Aucun paiement direct du Client n'est requis si
              le solde CPF est suffisant.
            </p>

            <h3>5.2 Paiement Personnel</h3>
            <p>
              En cas de paiement personnel, le Client peut régler :
            </p>
            <ul>
              <li>En une seule fois par virement bancaire ou carte bancaire</li>
              <li>En 3 fois sans frais (sous conditions)</li>
            </ul>
            <p>
              Un acompte de 30% est requis à la signature du contrat. Le solde
              est payable avant la phase de conclusion du bilan.
            </p>

            <h2>Article 6 - Droit de Rétractation</h2>
            <p>
              Conformément à l'article L221-18 du Code de la consommation, le
              Client dispose d'un délai de <strong>14 jours calendaires</strong>{" "}
              pour exercer son droit de rétractation, sans avoir à justifier de
              motifs ni à payer de pénalités.
            </p>
            <p>
              Le délai court à compter de la signature du contrat (ou de la
              validation de l'inscription CPF).
            </p>
            <p>
              Pour exercer ce droit, le Client doit notifier sa décision par
              email à : <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
            </p>
            <p>
              <strong>Exception :</strong> Si le Client demande expressément que
              la prestation commence avant la fin du délai de rétractation, il
              renonce à ce droit pour les séances déjà réalisées.
            </p>

            <h2>Article 7 - Déroulement du Bilan</h2>
            <h3>7.1 Convention Tripartite</h3>
            <p>
              Une convention tripartite est signée entre le Client, {COMPANY_NAME}
              et l'organisme financeur (si applicable). Cette convention précise
              les objectifs, le calendrier et les modalités du bilan.
            </p>

            <h3>7.2 Confidentialité</h3>
            <p>
              Les résultats du bilan sont <strong>strictement confidentiels</strong>.
              Seul le Client en est destinataire. Aucune information ne sera
              transmise à l'employeur, Pôle Emploi ou tout autre tiers sans
              l'accord écrit du Client.
            </p>

            <h3>7.3 Durée et Rythme</h3>
            <p>
              Le bilan se déroule sur une période de 2 à 4 mois, selon la
              disponibilité du Client. Les séances peuvent avoir lieu en
              présentiel (à notre bureau) ou en visioconférence.
            </p>

            <h2>Article 8 - Obligations du Client</h2>
            <p>
              Le Client s'engage à :
            </p>
            <ul>
              <li>Participer activement à toutes les séances programmées</li>
              <li>Fournir les documents demandés (CV, diplômes, etc.)</li>
              <li>Informer {COMPANY_NAME} de toute absence au moins 48 heures à l'avance</li>
              <li>Respecter la confidentialité des outils et méthodes utilisés</li>
            </ul>

            <h2>Article 9 - Obligations de {COMPANY_NAME}</h2>
            <p>
              {COMPANY_NAME} s'engage à :
            </p>
            <ul>
              <li>Fournir une prestation conforme au cadre légal du bilan de compétences</li>
              <li>Respecter la confidentialité des échanges et des résultats</li>
              <li>Remettre au Client un document de synthèse à l'issue du bilan</li>
              <li>Proposer un entretien de suivi à 6 mois</li>
            </ul>

            <h2>Article 10 - Annulation et Report</h2>
            <h3>10.1 Par le Client</h3>
            <p>
              Toute annulation ou report d'une séance doit être notifié au moins
              48 heures à l'avance. En cas d'absence non justifiée, la séance
              sera considérée comme réalisée et ne pourra être reportée.
            </p>

            <h3>10.2 Par {COMPANY_NAME}</h3>
            <p>
              En cas d'empêchement du consultant, {COMPANY_NAME} s'engage à
              proposer une date de report dans les meilleurs délais.
            </p>

            <h2>Article 11 - Réclamations</h2>
            <p>
              Toute réclamation doit être adressée par écrit à :{" "}
              <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
            </p>
            <p>
              {COMPANY_NAME} s'engage à répondre sous 15 jours ouvrés.
            </p>
            <p>
              En cas de litige non résolu, le Client peut saisir le médiateur de
              la consommation compétent.
            </p>

            <h2>Article 12 - Protection des Données</h2>
            <p>
              Les données personnelles collectées sont traitées conformément à
              notre{" "}
              <a href="/confidentialite">Politique de Confidentialité</a> et au
              RGPD.
            </p>

            <h2>Article 13 - Droit Applicable et Juridiction</h2>
            <p>
              Les présentes CGV sont régies par le droit français. En cas de
              litige, et à défaut d'accord amiable, les tribunaux du ressort du
              siège social de {COMPANY_NAME} seront seuls compétents.
            </p>

            <h2>Article 14 - Contact</h2>
            <p>
              Pour toute question relative aux présentes CGV, vous pouvez nous
              contacter :
            </p>
            <ul>
              <li><strong>Email :</strong> <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a></li>
              <li><strong>Téléphone :</strong> {COMPANY_PHONE}</li>
              <li><strong>Adresse :</strong> {COMPANY_ADDRESS}</li>
            </ul>

            <p className="text-sm text-muted-foreground">
              <em>Dernière mise à jour : 15 novembre 2025</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
