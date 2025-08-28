"use client";

import type React from "react";

import { BookOpen, Compass, Lightbulb, Rocket } from "lucide-react";
import CareerTools from "../careerStagetools";
import { COMMUNITY_URL } from "@/consts";

const EarlyCareerToolsData = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Career Navigator",
    description:
      "A personalized career exploration tool that helps early career professionals discover career advancement opportunities.",
    link: "https://gps.careerlink.ai/careergps/career-navigator-6d727c198e",
    color: "bg-pink-600",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Above and Beyond Career",
    description:
      "A strategic career planning tool designed for early career professionals seeking leadership roles and career transitions.",
    link: "https://gps.careerlink.ai/careergps/above-and-beyond-career-262452e3a8",
    color: "bg-emerald-600",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Startup Team Builder",
    description:
      "Find the right co-founders, advisors, and board members to launch and grow startup",
    link: "https://gps.careerlink.ai/careergps/startup-team-builder-7ac6927200",
    color: "bg-amber-600",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Job Assistant",
    description:
      "Help users find organizations, resources and support to learn new skills and find job opportunities",
    link: "https://gps.careerlink.ai/careergps/job-skills-and-training-354e7fbd24",
    color: "bg-indigo-600",
  },
];

export default function EarlyCareerTools() {
  return (
    <CareerTools
      tools={EarlyCareerToolsData}
      explore_tool_link={COMMUNITY_URL + "/careergps?career_stage=3"}
      career_stage="Early Career"
      description="Tools designed specifically to help early career professionals navigate job searches, skill development, and entrepreneurship."
    />
  );
}
