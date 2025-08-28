import BusinessGPSHelp from "@/components/screens/forOrganizations/businessgpsHelps";
import Herosection from "@/components/screens/forOrganizations/herosection";
import ImpactSection from "@/components/screens/forOrganizations/impact";
import BusinessPromo from "@/components/screens/businessPromo";
import React from "react";
import OrganizationSection from "@/components/screens/forOrganizations/organizationsection";
import CredentailsSection from "@/components/screens/forOrganizations/credentials";

export default function BusinessGPS() {
  return (
    <>
      <Herosection />
      <ImpactSection />
      <BusinessGPSHelp />
      <CredentailsSection />
      <OrganizationSection />
      <BusinessPromo />
    </>
  );
}
