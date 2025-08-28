import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREER_GPS_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Elevate Your " },
      { text: "Mid-Career", highlight: true },
    ],
  },
  description:
    "Develop leadership skills, master essential AI technologies, and drive innovation. Position yourself for growth in a rapidly changing professional landscape.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "professionals are using CareerGPS",
  statsHighlight: "10,000+",
  ctaText: "Try CareerGPS for Free",
  ctaUrl: CAREER_GPS_URL,
  ctaIcon: true,
  imageSrc: "/images/mid-career.png",
  imageAlt: "CareerGPS Interface Preview",
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
