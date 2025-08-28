import AdvancedCareerFeatureSection from "@/components/screens/careeragents/advancedcareer/advancedcareerFeatures";
import AdvancedCareerTools from "@/components/screens/careeragents/advancedcareer/advancedcareerTools";
import HeroSection from "@/components/screens/careeragents/advancedcareer/herosection";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AdvancedCareerFeatureSection />
      <AdvancedCareerTools />
    </>
  );
}
