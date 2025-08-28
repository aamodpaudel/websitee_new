"use client";

import type React from "react";

import { Briefcase, Award, Brain, Rocket } from "lucide-react";
import CareerTools from "../careerStagetools";
import { COMMUNITY_URL } from "@/consts";

const AdvancedCareerToolsData = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Startup Team Builder",
    description:
      "Find the right co-founders, advisors, and board members to launch and grow startup ventures.",
    link: "https://gps.careerlink.ai/careergps/startup-team-builder-7ac6927200",
    color: "bg-pink-600",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Research Cluster",
    description:
      "Connect with researchers and industry professionals to collaborate on cutting-edge projects.",
    link: "https://gps.careerlink.ai/careergps/research-cluster-agent-d09b2e3a2c",
    color: "bg-emerald-600",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Above and Beyond Career",
    description:
      "Help ambitious professionals break limits, adopt elite success habits, and accelerate career",
    link: "https://gps.careerlink.ai/careergps/above-and-beyond-career-262452e3a8",
    color: "bg-amber-600",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Book Recommendation",
    description:
      "Get personalized book recommendations based on your interests and career goals.",
    link: "https://gps.careerlink.ai/careergps/book-recommendation-cdeec03d7a",
    color: "bg-indigo-600",
  },
];

export default function AdvancedCareerTools() {
  return (
    <CareerTools
      tools={AdvancedCareerToolsData}
      explore_tool_link={COMMUNITY_URL + "/careergps?career_stage=5"}
      career_stage="Advanced Career"
      description="Tools tailored for senior professionals and executives to refine leadership, drive AI innovation, and leave a lasting impact through mentorship and social initiatives."
    />
  );
}
