import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREER_GPS_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Lead and Inspire in Your " },
      { text: "Advanced Career", highlight: true },
    ],
  },
  description:
    "Step into executive leadership, drive meaningful impact, and give back to society. Master AI and innovation to shape the future and leave a lasting legacy.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "executives and industry leaders are using CareerGPS",
  statsHighlight: "10,000+",
  ctaText: "Try CareerGPS for Free",
  ctaUrl: CAREER_GPS_URL,
  ctaIcon: true,
  imageSrc: "/images/advanced-career.png",
  imageAlt: "CareerGPS Interface Preview",
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
