import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WhyUs from "@/components/sections/WhyUs";
import MethodologyOverview from "@/components/sections/MethodologyOverview";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bilan de Compétences Nouvelle Génération en Alsace"
        description="Bilan de compétences avec IA à Strasbourg, Mulhouse, Colmar. Certifié Qualiopi, 100% finançable CPF. Expertise locale Alsace depuis 20 ans."
        keywords="bilan de compétences, Alsace, Strasbourg, Mulhouse, CPF, Qualiopi, intelligence artificielle, reconversion professionnelle, Grand-Est"
        canonical="https://bilancompetence.ai/"
      />
      <Hero />
      <SocialProof />
      <WhyUs />
      <MethodologyOverview />
      <Testimonials />
      
      {/* Qualiopi Certification Badge */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Organisme Certifié Qualiopi
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            La certification qualité a été délivrée au titre de la catégorie d'action suivante :
            <strong> ACTIONS DE FORMATION</strong>. Gage de qualité et de sérieux, cette certification
            vous garantit un accompagnement professionnel et rigoureux.
          </p>
          <img
            src="/qualiopi-logo.png"
            alt="Certification Qualiopi - NETZ Informatique"
            className="mx-auto max-w-md w-full h-auto"
          />
        </div>
      </section>
      
      <CTA />
    </div>
  );
}
