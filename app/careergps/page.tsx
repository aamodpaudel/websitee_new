import CareerChargePromo from "@/components/screens/careerChargePromo";
import CareergpsWork from "@/components/screens/careergps/careergpsWork";
import HeroSection from "@/components/screens/careergps/herosection";
import ProfessionalFields from "@/components/screens/careergps/professional-fields";
import React from "react";

export default function CareerGPSPage() {
  return (
    <>
      <HeroSection />
      <ProfessionalFields />
      <CareergpsWork />
      <CareerChargePromo />
    </>
  );
}
