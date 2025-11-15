import { COMPANY_NAME, COMPANY_EMAIL } from "@/const";

export default function Confidentialite() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
        <div className="container">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="prose prose-slate mx-auto max-w-4xl dark:prose-invert">
            <p className="lead">
              Chez <strong>{COMPANY_NAME}</strong>, la protection de vos données
              personnelles est une priorité absolue. Cette politique de
              confidentialité vous informe sur la manière dont nous collectons,
              utilisons et protégeons vos informations personnelles.
            </p>

            <h2>1. Responsable du Traitement des Données</h2>
            <p>
              Le responsable du traitement des données personnelles collectées
              sur ce site est :
            </p>
            <ul>
              <li><strong>Raison sociale :</strong> {COMPANY_NAME}</li>
              <li><strong>Email :</strong> {COMPANY_EMAIL}</li>
            </ul>

            <h2>2. Données Collectées</h2>
            <p>
              Nous collectons uniquement les données personnelles que vous nous
              fournissez volontairement, notamment :
            </p>
            <ul>
              <li><strong>Données d'identité :</strong> Nom, prénom</li>
              <li><strong>Données de contact :</strong> Adresse email, numéro de téléphone</li>
              <li><strong>Données de connexion :</strong> Adresse IP, logs de navigation (via cookies)</li>
              <li><strong>Données relatives au bilan :</strong> CV, résultats de tests, notes de séances (uniquement si vous êtes client)</li>
            </ul>

            <h2>3. Finalités du Traitement</h2>
            <p>
              Vos données personnelles sont collectées et traitées pour les
              finalités suivantes :
            </p>
            <ul>
              <li>Répondre à vos demandes de contact ou de rendez-vous</li>
              <li>Gérer votre inscription et votre parcours de bilan de compétences</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>

            <h2>4. Base Légale du Traitement</h2>
            <p>
              Conformément au RGPD, le traitement de vos données repose sur les
              bases légales suivantes :
            </p>
            <ul>
              <li><strong>Consentement :</strong> Pour l'envoi de newsletters et communications marketing</li>
              <li><strong>Exécution d'un contrat :</strong> Pour la réalisation de votre bilan de compétences</li>
              <li><strong>Obligation légale :</strong> Pour la conservation des documents comptables et fiscaux</li>
              <li><strong>Intérêt légitime :</strong> Pour l'amélioration de nos services</li>
            </ul>

            <h2>5. Destinataires des Données</h2>
            <p>
              Vos données personnelles sont strictement confidentielles et ne
              sont partagées qu'avec :
            </p>
            <ul>
              <li>Les consultants certifiés de {COMPANY_NAME} en charge de votre bilan</li>
              <li>Nos prestataires techniques (hébergement, emailing) sous contrat de confidentialité</li>
              <li>Les autorités compétentes, uniquement sur réquisition légale</li>
            </ul>
            <p>
              <strong>Nous ne vendons jamais vos données à des tiers.</strong>
            </p>

            <h2>6. Durée de Conservation</h2>
            <p>
              Vos données sont conservées pendant les durées suivantes :
            </p>
            <ul>
              <li><strong>Données de contact (prospects) :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données clients :</strong> Durée du bilan + 5 ans (obligations légales)</li>
              <li><strong>Documents comptables :</strong> 10 ans (obligation fiscale)</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>

            <h2>7. Vos Droits</h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous
              disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données (sous conditions)</li>
              <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données (marketing, etc.)</li>
              <li><strong>Droit de retirer votre consentement :</strong> À tout moment, pour les traitements basés sur le consentement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à l'adresse :{" "}
              <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
            </p>

            <h2>8. Sécurité des Données</h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et
              organisationnelles appropriées pour protéger vos données contre :
            </p>
            <ul>
              <li>L'accès non autorisé</li>
              <li>La perte, l'altération ou la divulgation accidentelle</li>
              <li>Les cyberattaques et violations de données</li>
            </ul>
            <p>
              Nos mesures incluent : chiffrement SSL/TLS, hébergement sécurisé
              (Vercel), accès restreint aux données, sauvegardes régulières.
            </p>

            <h2>9. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer votre expérience de
              navigation et réaliser des statistiques de visite. Vous pouvez à
              tout moment désactiver les cookies dans les paramètres de votre
              navigateur.
            </p>
            <p>
              Types de cookies utilisés :
            </p>
            <ul>
              <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> Pour mesurer l'audience (anonymisés)</li>
            </ul>

            <h2>10. Transferts de Données Hors UE</h2>
            <p>
              Nos prestataires techniques (Vercel, etc.) peuvent être situés en
              dehors de l'Union Européenne. Dans ce cas, nous nous assurons que
              des garanties appropriées sont en place (clauses contractuelles
              types, Privacy Shield, etc.).
            </p>

            <h2>11. Réclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de la CNIL (Commission Nationale
              de l'Informatique et des Libertés) :
            </p>
            <ul>
              <li><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></li>
              <li><strong>Adresse :</strong> 3 Place de Fontenoy, 75007 Paris</li>
            </ul>

            <h2>12. Modifications de cette Politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera publiée sur
              cette page avec une nouvelle date de mise à jour.
            </p>

            <p className="text-sm text-muted-foreground">
              <em>Dernière mise à jour : 15 novembre 2025</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
