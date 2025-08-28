import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREERLINK_CIRCLE_VIDEO_URL, COMMUNITY_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Learn and Grow with " },
      { text: "AI", highlight: true },
      { text: " Circles" },
    ],
  },
  description:
    "Join a community of AI enthusiasts and professionals to learn, share, and grow together. Gain valuable insights into essential AI tools, explore industry-specific use cases, and future-proof your career.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "AI enthusiasts have joined our circles.",
  statsHighlight: "1000+",
  ctaText: "Find Your AI Circle",
  ctaUrl: COMMUNITY_URL + "/circles",
  ctaIcon: true,
  imageSrc: "/images/cricle-video.png",
  imageAlt: "AI Circle Interface Preview",
  video_url: CAREERLINK_CIRCLE_VIDEO_URL,
  ctaText2: "Request for AI Training",
  ctaUrl2: "/apply-aitraining",
  ctaIcon2: true,
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
