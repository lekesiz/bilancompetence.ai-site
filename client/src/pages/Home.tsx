import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WhyUs from "@/components/sections/WhyUs";
import MethodologyOverview from "@/components/sections/MethodologyOverview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <WhyUs />
      <MethodologyOverview />
      <CTA />
    </div>
  );
}
