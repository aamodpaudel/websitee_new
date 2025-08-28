import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREER_GPS_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Your Compass in the AI Career " },
      { text: "Revolution", highlight: true },
    ],
  },
  description: "Turn AI Disruption Into Opportunity with a Coach by Your Side",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "people are already using CareerGPS to navigate their careers.",
  statsHighlight: "10000+",
  ctaText: "Try CareerGPS for Free",
  ctaUrl: CAREER_GPS_URL,
  ctaIcon: true,
  imageSrc: "/images/career-gps-hero.png",
  imageAlt: "CareerGPS Interface Preview",
};


export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
