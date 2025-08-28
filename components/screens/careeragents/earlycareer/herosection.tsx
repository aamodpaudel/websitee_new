import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREER_GPS_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Accelerate Your " },
      { text: "Early Career", highlight: true },
    ],
  },
  description:
    "Develop essential AI skills, drive innovation, and explore entrepreneurship. Gain the expertise and experience needed to excel in a rapidly evolving world.",
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
  imageSrc: "/images/early-career.png",
  imageAlt: "CareerGPS Interface Preview",
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
