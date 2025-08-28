import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREERLINK_AGENT_VIDEO_URL, COMMUNITY_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Your Gateway to " },
      { text: "AI", highlight: true },
      { text: " Skills & Resources" },
    ],
  },
  description:
    "A single place to access tools, community and resources to learn AI skills.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "learners and professionals already exploring AI with us",
  statsHighlight: "100,000+",
  ctaText: "Learn More",
  ctaUrl: COMMUNITY_URL,
  ctaIcon: true,
  imageSrc: "/images/career-agent-video-thumbnail.png",
  imageAlt: "AI Hub Interface Preview",
  video_url: CAREERLINK_AGENT_VIDEO_URL,
};

export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
