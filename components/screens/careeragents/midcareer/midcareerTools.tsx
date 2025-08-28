"use client";

import type React from "react";

import { Briefcase, Rocket } from "lucide-react";
import CareerTools from "../careerStagetools";
import { COMMUNITY_URL } from "@/consts";

const MidCareerToolsData = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Startup Team Builder",
    description:
      "Find the right co-founders, advisors, and board members to launch and grow startup ventures.",
    link: "https://gps.careerlink.ai/careergps/startup-team-builder-7ac6927200",
    color: "bg-pink-600",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Book Recommendation",
    description:
      "Get personalized book recommendations based on your interests and career goals.",
    link: "https://gps.careerlink.ai/careergps/book-recommendation-cdeec03d7a",
    color: "bg-emerald-600",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Leadership Coach",
    description:
      "Help professionals to develop leadership skills and strategies.",
    link: "https://gps.careerlink.ai/careergps/leadership-coach-bf17999827",
    color: "bg-amber-600",
  },
];

export default function MidCareerTools() {
  return (
    <CareerTools
      tools={MidCareerToolsData}
      explore_tool_link={COMMUNITY_URL + "/careergps?career_stage=4"}
      career_stage="Mid-Career"
      description="Tools designed specifically to help mid-career professionals navigate leadership growth, AI skills development, and entrepreneurship."
    />
  );
}
