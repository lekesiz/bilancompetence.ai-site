import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { FileText, BookOpen, Euro, MapPin, HelpCircle, MessageSquare, Users, FileCheck } from "lucide-react";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEOHead
        title="Plan du Site | bilancompetence.ai"
        description="Accédez rapidement à toutes les pages de bilancompetence.ai : bilan de compétences, méthodologie, financement CPF, expertise Alsace, blog et ressources."
        keywords="plan du site, sitemap, navigation, bilancompetence.ai"
        canonical="https://bilancompetence.ai/sitemap"
      />

      <div className="container py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Plan du Site
            </h1>
            <p className="text-xl text-gray-600">
              Accédez rapidement à toutes nos pages et ressources
            </p>
          </div>

          {/* Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bilan de Compétences */}
            <div className="bg-white rounded-xl shadow-soft p-6 transition-smooth hover:shadow-medium">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Bilan de Compétences</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/bilan-de-competences/definition" className="text-primary hover:underline">
                    Qu'est-ce qu'un Bilan de Compétences ?
                  </Link>
                </li>
                <li>
                  <Link href="/bilan-de-competences/approche-ia" className="text-primary hover:underline">
                    Notre Approche avec l'IA
                  </Link>
                </li>
                <li>
                  <Link href="/bilan-de-competences/fondements-academiques" className="text-primary hover:underline">
                    Fondements Académiques
                  </Link>
                </li>
                <li>
                  <Link href="/bilan-de-competences/methodologie" className="text-primary hover:underline">
                    Méthodologie en 3 Phases
                  </Link>
                </li>
              </ul>
            </div>

            {/* Financement */}
            <div className="bg-white rounded-xl shadow-soft p-6 transition-smooth hover:shadow-medium">
              <div className="flex items-center gap-3 mb-4">
                <Euro className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Financement</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/financement/cpf" className="text-primary hover:underline">
                    Financement CPF 100%
                  </Link>
                </li>
                <li>
                  <Link href="/financement/tarifs" className="text-primary hover:underline">
                    Nos Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/financement/autres-aides" className="text-primary hover:underline">
                    Autres Aides Disponibles
                  </Link>
                </li>
              </ul>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-xl shadow-soft p-6 transition-smooth hover:shadow-medium">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Expertise Locale</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/bilan-de-competences/expertise-alsace" className="text-primary hover:underline">
                    Notre Expertise en Alsace
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos" className="text-primary hover:underline">
                    À Propos de Nous
                  </Link>
                </li>
                <li>
                  <Link href="/temoignages" className="text-primary hover:underline">
                    Témoignages Clients
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ressources */}
            <div className="bg-white rounded-xl shadow-soft p-6 transition-smooth hover:shadow-medium">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Ressources</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-primary hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-primary hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Articles Blog */}
            <div className="bg-white rounded-xl shadow-soft p-6 transition-smooth hover:shadow-medium md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Articles de Blog</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog/guide-cpf-2025" className="text-primary hover:underline">
                      Guide Complet CPF 2025
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/top-10-metiers-alsace-2025" className="text-primary hover:underline">
                      Top 10 Métiers Alsace 2025
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ia-menace-opportunite" className="text-primary hover:underline">
                      IA : Menace ou Opportunité ?
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog/reconversion-apres-40-ans" className="text-primary hover:underline">
                      Reconversion après 40 ans
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/bilan-vs-coaching" className="text-primary hover:underline">
                      Bilan vs Coaching
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/soft-skills-2025" className="text-primary hover:underline">
                      10 Soft Skills 2025
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pages Légales */}
            <div className="bg-white rounded-xl shadow-soft p-6 transition-smooth hover:shadow-medium md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900">Informations Légales</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  <li>
                    <Link href="/mentions-legales" className="text-primary hover:underline">
                      Mentions Légales
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link href="/confidentialite" className="text-primary hover:underline">
                      Politique de Confidentialité
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link href="/cgv" className="text-primary hover:underline">
                      Conditions Générales de Vente
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Notre équipe est là pour vous aider. Contactez-nous pour toute question.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth">
                <Users className="h-5 w-5" />
                Nous Contacter
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
