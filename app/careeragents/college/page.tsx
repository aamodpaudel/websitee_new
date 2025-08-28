import CareerChargePromo from "@/components/screens/careerChargePromo";
import CollegeFeatureSection from "@/components/screens/careeragents/college/collegeFeatures";
import CollegeTools from "@/components/screens/careeragents/college/collegetools";
import HeroSection from "@/components/screens/careeragents/college/herosection";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSection />
      <CollegeFeatureSection />
      <CollegeTools />
      <CareerChargePromo />
    </>
  );
}
