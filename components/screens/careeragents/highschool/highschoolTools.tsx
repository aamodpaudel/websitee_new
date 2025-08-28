"use client";

import type React from "react";

import { BookOpen, Compass, Lightbulb, Rocket } from "lucide-react";
import CareerTools from "../careerStagetools";
import { COMMUNITY_URL } from "@/consts";

const HighSchoolools = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Interest Explorer",
    description:
      "Helps students discover their interests and potential career paths",
    link: "https://gps.careerlink.ai/careergps/interest-explorer-3139cddc3a",
    color: "bg-pink-600",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Summer Program Explorer",
    description:
      "Helps students find pre-college, research or internships opportunities for college preparation.",
    link: "https://gps.careerlink.ai/careergps/summer-program-explorer-658089e2fe",
    color: "bg-emerald-600",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "College Application Preparation",
    description:
      "Guide students on college applications, careers, and admissions",
    link: "https://gps.careerlink.ai/careergps/college-counselor-d09ea5df76",
    color: "bg-amber-600",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "University and Program Finder",
    description:
      "Find the right university and program for your higher education",
    link: "https://gps.careerlink.ai/careergps/university-finder-bee33b1af1",
    color: "bg-indigo-600",
  },
];

export default function HighSchoolTools() {
  return (
    <CareerTools
      tools={HighSchoolools}
      explore_tool_link={COMMUNITY_URL + "/careergps?career_stage=1"}
      career_stage="High School"
      description="Tools designed specifically to help high school students navigate academics, college planning, and skill development."
    />
  );
}
