import { useAuth } from "@/_core/hooks/useAuth";
import SEOHead from "@/components/SEOHead";
import { LocalBusinessSchema } from "@/components/StructuredData";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WhyUs from "@/components/sections/WhyUs";
import MethodologyOverview from "@/components/sections/MethodologyOverview";
import CTA from "@/components/sections/CTA";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import TargetAudience from "@/components/sections/TargetAudience";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <SEOHead
        title="Bilan de Compétences Nouvelle Génération en Alsace"
        description="Bilan de compétences avec IA à Strasbourg, Mulhouse, Colmar. Certifié Qualiopi, 100% finançable CPF. Expertise locale Alsace depuis 20 ans. Résultats garantis."
        keywords="bilan de compétences, Alsace, Strasbourg, Mulhouse, CPF, Qualiopi, intelligence artificielle, reconversion professionnelle, Grand-Est"
        canonical="https://bilancompetence.ai/"
      />
      <Hero />
      <SocialProof />
      <WhyUs />
      <MethodologyOverview />
      <TargetAudience />
      <TestimonialsCarousel />
      <BlogPreview />
      
      {/* Qualiopi Certification Badge */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Organisme Certifié Qualiopi
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            La certification qualité a été délivrée au titre des catégories d'actions suivantes :
            <strong> ACTIONS DE FORMATION</strong> et <strong>BILANS DE COMPÉTENCES</strong>. Gage de qualité et de sérieux, cette certification
            vous garantit un accompagnement professionnel et rigoureux.
          </p>
          <picture>
            <source srcSet="/qualiopi-logo.webp" type="image/webp" />
            <img
              src="/qualiopi-logo.png"
              alt="Logo officiel de la certification Qualiopi délivrée à NETZ Informatique pour les actions de formation et bilans de compétences - Validité 2025-2028"
              className="mx-auto max-w-md w-full h-auto"
              width="600"
              height="400"
              loading="lazy"
            />
          </picture>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}
