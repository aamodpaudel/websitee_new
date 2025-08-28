import CareerChargePromo from "@/components/screens/careerChargePromo";
import FAQ from "@/components/screens/summercamp/FAQ";
import FlagshipProjects from "@/components/screens/summercamp/FlagshipProjects";
import HeroSection from "@/components/screens/summercamp/herosection";
import WeeklyJourney from "@/components/screens/summercamp/WeeklyJourney";
import WhyAISection from "@/components/screens/summercamp/WhyAISection";
import React from "react";

export default function AISummerCamp() {
  return (
    <>
      <HeroSection />
      <WhyAISection />
      <FlagshipProjects />
      <WeeklyJourney />
      <FAQ />
      <CareerChargePromo />
    </>
  );
}
