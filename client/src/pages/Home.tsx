import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WhyUs from "@/components/sections/WhyUs";
import MethodologyOverview from "@/components/sections/MethodologyOverview";
import CTA from "@/components/sections/CTA";

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
      <CTA />
    </div>
  );
}
