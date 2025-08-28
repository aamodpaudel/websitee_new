import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { COMMUNITY_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Advance in " },
      { text: "Science, Technology", highlight: true },
      { text: " & " },
      { text: "Engineering", highlight: true },
    ],
  },
  description:
    "Connect with leading experts and peers in STEM. Gain personalized mentorship, stay ahead with the latest innovations, and grow your career with confidence.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "advanced professionals have build their career with us.",
  statsHighlight: "10000+",
  ctaText: "Try CareerGPS for Free",
  ctaUrl: COMMUNITY_URL + "/careergps",
  ctaIcon: true,
  imageSrc: "/images/hero-science.png",
  imageAlt: "CareerGPS Interface Preview",
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
