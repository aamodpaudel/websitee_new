"use client";

import type React from "react";

import { BookOpen, Compass, Lightbulb, Rocket } from "lucide-react";
import CareerTools from "../careerStagetools";
import { COMMUNITY_URL } from "@/consts";

const CollegeToolsData = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Career Navigator",
    description:
      "A personalized career exploration tool that helps students discover their potential career paths.",
    link: "https://gps.careerlink.ai/careergps/career-navigator-6d727c198e",
    color: "bg-pink-600",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "College Application Preparation",
    description:
      "Guide students on college applications, careers, and admissions",
    link: "https://gps.careerlink.ai/careergps/college-counselor-d09ea5df76",
    color: "bg-emerald-600",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Project Ideas",
    description: "Helps college students find the major project",
    link: "https://gps.careerlink.ai/careergps/final-year-project-research-agent-f46368551a",
    color: "bg-amber-600",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Research Cluster",
    description: "Help users find the best research collaborators",
    link: "https://gps.careerlink.ai/careergps/research-cluster-agent-d09b2e3a2c",
    color: "bg-indigo-600",
  },
];

export default function CollegeTools() {
  return (
    <CareerTools
      tools={CollegeToolsData}
      explore_tool_link={COMMUNITY_URL + "/careergps?career_stage=2"}
      career_stage="College"
      description="Tools designed specifically to help college students navigate academics, college planning, and skill development."
    />
  );
}
