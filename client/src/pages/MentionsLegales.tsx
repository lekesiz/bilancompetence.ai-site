import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/const";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
        <div className="container">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="prose prose-slate mx-auto max-w-4xl dark:prose-invert">
            <h2>1. Éditeur du Site</h2>
            <p>
              Le site <strong>bilancompetence.ai</strong> est édité par :
            </p>
            <ul>
              <li><strong>Raison sociale :</strong> {COMPANY_NAME}</li>
              <li><strong>Forme juridique :</strong> SARL</li>
              <li><strong>Capital social :</strong> 10 000 €</li>
              <li><strong>Siège social :</strong> {COMPANY_ADDRESS}</li>
              <li><strong>SIRET :</strong> 123 456 789 00012</li>
              <li><strong>APE :</strong> 6201Z (Programmation informatique)</li>
              <li><strong>N° TVA intracommunautaire :</strong> FR 12 123456789</li>
              <li><strong>Téléphone :</strong> {COMPANY_PHONE}</li>
              <li><strong>Email :</strong> {COMPANY_EMAIL}</li>
            </ul>

            <h2>2. Directeur de la Publication</h2>
            <p>
              Le directeur de la publication est <strong>M. John Doe</strong>, Gérant de {COMPANY_NAME}.
            </p>

            <h2>3. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <ul>
              <li><strong>Nom :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></li>
            </ul>

            <h2>4. Propriété Intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive de {COMPANY_NAME}, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation, même partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>

            <h2>5. Certification Qualiopi</h2>
            <p>
              {COMPANY_NAME} est certifié <strong>Qualiopi</strong> pour la catégorie "Bilans de compétences" (référence : QUALIOPI-2024-XXXXX). Cette certification atteste de la qualité du processus mis en œuvre par les prestataires d'actions concourant au développement des compétences.
            </p>

            <h2>6. Données Personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ces droits, veuillez nous contacter à l'adresse : {COMPANY_EMAIL}.
            </p>
            <p>
              Pour plus d'informations, consultez notre <a href="/confidentialite">Politique de Confidentialité</a>.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
            </p>

            <h2>8. Responsabilité</h2>
            <p>
              {COMPANY_NAME} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, {COMPANY_NAME} ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, {COMPANY_NAME} décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>

            <h2>9. Liens Hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers d'autres sites internet. {COMPANY_NAME} n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>

            <h2>10. Droit Applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut d'accord amiable, le tribunal compétent sera celui du ressort du siège social de {COMPANY_NAME}.
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
