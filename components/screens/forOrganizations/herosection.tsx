import React from "react";
import GenericHeroSection from "@/components/herosection-generic";

const heroconfig = {
  title: {
    sections: [
      { text: "Supercharge Your " },
      { text: "Organization", highlight: true },
    ],
  },
  description:
    "Empower your organization, enhance recruitment, and develop strategic AI capabilities with careerlink.ai",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "professionals are using careerlink",
  statsHighlight: "20000+",
  ctaText: "Try Careerlink for Free",
  ctaUrl: "/portal/organization",
  ctaIcon: true,
  imageSrc: "/images/hero-businessgps.jpg",
  imageAlt: "CareerGPS Interface Preview",
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
