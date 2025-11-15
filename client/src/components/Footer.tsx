import { Link } from "wouter";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  SOCIAL_LINKS,
  RELATED_SITES,
} from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Bilan de Compétences */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Bilan de Compétences
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/bilan-de-competences/definition"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Qu'est-ce qu'un bilan ?
                </Link>
              </li>
              <li>
                <Link
                  href="/bilan-de-competences/approche-ia"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Notre Approche IA
                </Link>
              </li>
              <li>
                <Link
                  href="/methodologie"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Méthodologie
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise-alsace"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Expertise Locale (Alsace)
                </Link>
              </li>
              <li>
                <Link
                  href="/bilan-de-competences/recherche"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Fondements Académiques
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Financement */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Financement
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/financement/cpf"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Financer avec le CPF
                </Link>
              </li>
              <li>
                <Link
                  href="/financement/autres-aides"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Autres Aides (OPCO, Pôle Emploi)
                </Link>
              </li>
              <li>
                <Link
                  href="/financement/tarifs"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Nos Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Demander un Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ressources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Ressources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/temoignages"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Légal & Qualité */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Légal & Qualité
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <span className="text-xs font-semibold text-primary">✓</span>
                  Certifié Qualiopi
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Écosystème */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contact & Écosystème
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{COMPANY_ADDRESS}</li>
              <li>
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {COMPANY_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="transition-colors hover:text-foreground"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-4 flex space-x-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Related Sites */}
            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold text-foreground">
                Écosystème Netz:
              </p>
              <ul className="space-y-1 text-xs">
                <li>
                  <a
                    href={RELATED_SITES.netzInformatique}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Netz Informatique
                  </a>
                </li>
                <li>
                  <a
                    href={RELATED_SITES.formationHaguenau}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Formation Haguenau
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {COMPANY_NAME}. Tous droits réservés. | Certifié Qualiopi pour les Bilans de Compétences.
          </p>
        </div>
      </div>
    </footer>
  );
}
