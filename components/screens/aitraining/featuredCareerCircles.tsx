"use client";

import type React from "react";
import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Users,
  Target,
  LineChart,
  Award,
  Heart,
  Zap,
  Rocket,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import FeaturedGroups from "../featuredGroup";
import TopicCard from "@/components/topic-card";
import { Button } from "@/components/ui/button";
import { COMMUNITY_URL } from "@/consts";

const topics = [
  {
    icon: <Target className="h-5 w-5 text-amber-600" />,
    title: "Career Exploration & Navigation",
    description:
      "Discover your strengths, explore industries, and find the career path that fits you best.",
    expertise: "High School / College Students",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-amber-600" />,
    title: "College Applications & Admissions",
    description:
      "Get step-by-step guidance on crafting standout applications, essays, and securing admissions.",
    expertise: "High School Students",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <Users className="h-5 w-5 text-amber-600" />,
    title: "Research Collaboration",
    description:
      "Connect with like-minded peers, professors, or professionals to work on meaningful research projects.",
    expertise: "College Students / Early Professionals",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-amber-600" />,
    title: "Job Readiness & Workplace Skills",
    description:
      "Learn essential job-seeking strategies — from resumes to interviews — and workplace skills that set you apart.",
    expertise: "College Students / Early Professionals",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <Award className="h-5 w-5 text-amber-600" />,
    title: "Leadership Development Pathways",
    description:
      "Build the mindset, communication, and management skills to step into leadership roles.",
    expertise: "Mid-Career Professionals / Emerging Leaders",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <Zap className="h-5 w-5 text-amber-600" />,
    title: "Executive Leadership Mastery",
    description:
      "Sharpen strategic thinking, decision-making, and influence to lead organizations at the top level.",
    expertise: "Senior Professionals / Executives",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <Heart className="h-5 w-5 text-amber-600" />,
    title: "Community Impact & Giving Back",
    description:
      "Leverage your skills and knowledge to mentor, create opportunities, and uplift your community.",
    expertise: "All Career Stages",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <Zap className="h-5 w-5 text-amber-600" />,
    title: "AI Skills for the Future",
    description:
      "Learn how to apply AI tools and technologies to stay ahead in any industry.",
    expertise: "All Career Stages",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <Rocket className="h-5 w-5 text-amber-600" />,
    title: "Innovation & Entrepreneurship Journeys",
    description:
      "Turn your ideas into reality — build, launch, and grow your own venture with an AI edge.",
    expertise: "Early Professionals / Entrepreneurs",
    topic_link: COMMUNITY_URL + "/circles",
  },
  {
    icon: <LineChart className="h-5 w-5 text-amber-600" />,
    title: "Career Growth & Transitions",
    description:
      "Level up your skills, navigate promotions, or pivot into a new field with confidence.",
    expertise: "Early to Mid-Career Professionals",
    topic_link: COMMUNITY_URL + "/circles",
  },
];

export default function FeaturedCareerCircles() {
  const [showAll, setShowAll] = useState(false);
  const visibleTopics = showAll ? topics : topics.slice(0, 6);

  return (
    <>
      <FeaturedGroups domain_type="community" group_type="circle" />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Browse by <span className="text-pink-600">Topic</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Explore circles organized by area of interest and find your
              perfect community
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {visibleTopics.map((topic) => (
              <TopicCard key={topic.title} {...topic} />
            ))}
          </div>

          {topics.length > 6 && (
            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 text-white bg-emerald-600  hover:bg-emerald-700 transition rounded-md"
              >
                {showAll ? "Show Less" : "Show More"}
                {showAll ? (
                  <ChevronUp className="h-4 w-4 ml-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-2" />
                )}
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
