import CareerChargePromo from "@/components/screens/careerChargePromo";
import HeroSection from "@/components/screens/careeragents/highschool/herosection";
import HighSchoolFeatureSection from "@/components/screens/careeragents/highschool/highschoolSuccess";
import HighSchoolTools from "@/components/screens/careeragents/highschool/highschoolTools";
import React from "react";

export default function page() {
  return (
    <>
      <HeroSection />
      <HighSchoolFeatureSection />
      <HighSchoolTools />
      <CareerChargePromo />
    </>
  );
}
