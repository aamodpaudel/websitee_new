import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { COMMUNITY_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Grow Together in " },
      { text: "Career", highlight: true },
      { text: " Circles" },
    ],
  },
  description:
    "Join expert-led learning groups where digital innovation meets human connection. Advance your career with personalized mentorship and peer support.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "professionals have joined our circles.",
  statsHighlight: "1000+",
  ctaText: "Find Your Career Circle",
  ctaUrl: COMMUNITY_URL + "/circles",
  ctaIcon: true,
  imageSrc: "/images/hero-career-circle.jpg",
  imageAlt: "CareerGPS Interface Preview",
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
