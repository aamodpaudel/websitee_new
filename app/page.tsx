import CareerChargePromo from "@/components/screens/careerChargePromo";
import Herosection from "@/components/screens/landing/herosection";
import ImpactSection from "@/components/screens/landing/ImpactSection";
import NewSolutionSection from "@/components/screens/landing/new-solution-section";
import PersonaSection from "@/components/screens/landing/persona-section";
import FeaturedCircles from "@/components/screens/landing/featured-circles";
import UniqueValues from "@/components/screens/landing/uniqueSection";

export default function Home() {
  return (
    <>
      <Herosection />
      <PersonaSection />
      <FeaturedCircles />
      <ImpactSection />
      <NewSolutionSection />
      <UniqueValues />
      <CareerChargePromo />
    </>
  );
}
