import React from "react";
import GenericHeroSection from "@/components/herosection-generic";
import { CAREER_GPS_URL, CAREERLINK_AGENT_VIDEO_URL } from "@/consts";

const heroconfig = {
  title: {
    sections: [
      { text: "Your Digital " },
      { text: "Career", highlight: true },
      { text: " Coach" },
    ],
  },
  description:
    "Your all-in-one tool and support you need for a better way to build your career.",
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "professionals trust our Career Agents",
  statsHighlight: "50,000+",
  ctaText: "Try Career Agents for Free",
  ctaUrl: CAREER_GPS_URL,
  ctaIcon: true,
  imageSrc: "/images/career-agent-video-thumbnail.png",
  imageAlt: "Career Agent Interface Preview",
  video_url: CAREERLINK_AGENT_VIDEO_URL,
};


export default function HeroSection() {
  return <GenericHeroSection {...heroconfig} />;
}
