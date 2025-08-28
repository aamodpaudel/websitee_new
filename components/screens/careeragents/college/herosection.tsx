import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREER_GPS_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Empower Your Journey as a " },
      { text: "College ", highlight: true },
      { text: "Student" },
    ],
  },
  description:
    "Develop essential AI skills, foster research collaboration, and enhance job readiness. Gain the knowledge and experience needed to innovate, explore entrepreneurship, and thrive in an evolving world.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "college students are using CareerGPS",
  statsHighlight: "10,000+",
  ctaText: "Try CareerGPS for Free",
  ctaUrl: CAREER_GPS_URL,
  ctaIcon: true,
  imageSrc: "/images/college.png",
  imageAlt: "CareerGPS Interface Preview",
};


export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
