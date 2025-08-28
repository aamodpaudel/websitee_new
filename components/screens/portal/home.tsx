"use client";

import React from "react";
import Link from "next/link";
import {
  Check,
  Users,
  Briefcase,
  Brain,
  Calendar,
  Building2,
  BookOpen,
  Search,
  Compass,
  RefreshCw,
  Bot,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CAREER_GPS_URL, COMMUNITY_URL } from "@/consts";
import type { UserPreferences } from "./career-questionare";

type CommunityFeature = string;

interface Community {
  id: string;
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  features: CommunityFeature[];
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
  priority?: number;
}

interface QuickAction {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  href: string;
}

const iconMap = {
  Briefcase: Briefcase,
  Brain: Brain,
  Calendar: Calendar,
  Building2: Building2,
  BookOpen: BookOpen,
  Search: Search,
  Users: Users,
  Check: Check,
  Compass: Compass,
  RefreshCw: RefreshCw,
  Bot: Bot,
  FileText: FileText,
};

const communitiesData: Community[] = [
  {
    id: "aiGPS",
    icon: "Compass",
    title: "CareerGPS",
    description:
      "Specialized career guidance for AI professionals and enthusiasts.",
    features: [
      "Personalized AI-driven career guidance",
      "Roadmap to essential AI skills",
      "Actionable steps to future-proof your career",
    ],
    buttonText: "Join AI CareerGPS",
    buttonLink: CAREER_GPS_URL,
    priority: 0,
  },
  {
    id: "aiCircle",
    icon: "Brain",
    title: "AI Circle",
    description:
      "The ultimate hub for AI enthusiasts to unite, learn, and lead the AI revolution.",
    features: [
      "Find like-minded AI learners",
      "Learn from peers with complementary skills",
      "Collaborate on real-world AI projects",
    ],
    buttonText: "Join AI Circle",
    buttonLink: COMMUNITY_URL+"/circles",
    priority: 0,
  },
  {
    id: "aiEvents",
    icon: "Calendar",
    title: "AI Events",
    description:
      "Discover and participate in AI-focused events, workshops, and conferences.",
    features: [
      "Connect with AI industry leaders",
      "Hands-on workshops and hackathons",
      "Stay updated with the latest AI trends",
    ],
    buttonText: "Explore AI Events",
    buttonLink: "/events",
    priority: 2,
  },
  {
    id: "aiResources",
    icon: "BookOpen",
    title: "AI Resources",
    description:
      "Access curated learning materials, tutorials, and tools for AI development.",
    features: [
      "Curated learning paths for all skill levels",
      "Practical tutorials and code examples",
      "Tools and frameworks recommendations",
    ],
    buttonText: "Browse AI Resources",
    buttonLink: "/resources",
    priority: 3,
  },
  {
    id: "aiJobs",
    icon: "Briefcase",
    title: "AI Jobs",
    description:
      "Discover career opportunities in AI and related fields tailored to your skills and interests.",
    features: [
      "Browse AI-focused job listings",
      "Connect with AI employers and recruiters",
      "Get personalized job recommendations",
    ],
    buttonText: "Explore AI Jobs",
    buttonLink: "/jobs",
    priority: 1,
  },
];

const quickActionsData: QuickAction[] = [
  {
    icon: "Bot",
    title: "Career Agents",
    description: "Get personalized career guidance from AI agents",
    href: "/careeragents",
  },
  {
    icon: "Building2",
    title: "Sign in as Organization",
    description: "Access your organization dashboard",
    href: "/portal/organization",
  },
];

interface HomeProps {
  userPreferences: UserPreferences | null;
  onResetPreferences: () => void;
}

export default function Home({
  userPreferences,
  onResetPreferences,
}: HomeProps) {
  const sortedCommunities = [...communitiesData].sort((a, b) => {
    if (!userPreferences) return 0;
    const priorities = userPreferences.priorities;
    const priorityMapping: Record<string, string[]> = {
      "Understand how AI will change my career and prepare": [
        "aiCircle",
        "aiGPS",
      ],
      "Learn essential AI skills immediately": ["aiCircle", "aiResources"],
      "Stay up to date with recent AI developments": [
        "aiEvents",
        "aiResources",
      ],
      "Interact with career assistants for career guidance on various topics": [
        "aiGPS",
      ],
      "Explore job opportunities that require AI skills": ["aiJobs"],
    };
    const getScore = (communityId: string) => {
      let score = 0;
      priorities.forEach((priority, index) => {
        const priorityScore = priorities.length - index;
        for (const [key, communities] of Object.entries(priorityMapping)) {
          if (priority.includes(key) && communities.includes(communityId)) {
            score += priorityScore * 100;
            if (index === 0) score += 500;
            if (index === 1) score += 300;
            if (index === 2) score += 100;

            if (
              communityId === "aiJobs" &&
              priority.includes("job") &&
              index > 2
            ) {
              score += 1000;
            }
          }
        }
      });

      return score;
    };

    return getScore(b.id) - getScore(a.id);
  });

  const getLowestPriorityQuickAction = (): QuickAction | null => {
    if (sortedCommunities.length < 5) return null;

    const lowestPriorityCommunity = sortedCommunities[4];
    return {
      icon: lowestPriorityCommunity.icon,
      title: lowestPriorityCommunity.title,
      description: lowestPriorityCommunity.description,
      href: lowestPriorityCommunity.buttonLink,
    };
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 md:px-6">
        <section className="pt-12 md:pt-16 " id="communities">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Take a big <span className="text-pink-600">Step</span> in your{" "}
              <span className="text-pink-600">Career </span>
              with Careerlink
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Which of the following are you interested in?
            </p>

            {userPreferences && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onResetPreferences}
                  className="text-xs"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Update Preferences
                </Button>
              </div>
            )}
            {userPreferences && (
              <section className="md:container md:px-4 mx-auto hidden md:block">
                <div className="max-w-3xl mx-auto bg-slate-50 rounded-lg p-3 border border-slate-100 md:text-center">
                  <p className="text-slate-600 text-sm mb-1 ">
                    Based on your profile as a{" "}
                    <span className="font-medium text-slate-700 ">
                      {userPreferences.careerStage === "high_school" &&
                        "High School Student"}
                      {userPreferences.careerStage === "college" &&
                        "College Student"}
                      {userPreferences.careerStage === "early_career" &&
                        "Early Career Professional"}
                      {userPreferences.careerStage === "mid_career" &&
                        "Mid Career Professional"}
                      {userPreferences.careerStage ===
                        "advanced_professional" && "Advanced Professional"}
                    </span>{" "}
                    and the career goals and priorities you shared,
                  </p>
                  <div className="text-sm text-slate-600 ">
                    <p>
                      We recommend you start with{" "}
                      <span className="font-medium text-pink-600">
                        {sortedCommunities[0]?.title || "AI Circle"}
                      </span>{" "}
                      and{" "}
                      <span className="font-medium text-pink-600">
                        {sortedCommunities[1]?.title || "CareerGPS"}
                      </span>{" "}
                      to help you achieve your goals and priorites.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>

        <section className="px-4 mx-auto my-12 pb-12">
          <div className="max-w-8xl mx-auto">
            {sortedCommunities.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                {sortedCommunities.slice(0, 4).map((community, index) => {
                  const IconComponent = iconMap[community.icon];
                  const isRecommended =
                    userPreferences && (index === 0 || index === 1);

                  return (
                    <div
                      key={community.id}
                      className={`bg-white rounded-xl border ${
                        isRecommended ? "border-pink-200" : "border-slate-100"
                      } shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
                        isRecommended
                          ? "ring-2 ring-pink-100"
                          : "hover:border-pink-100"
                      } flex flex-col h-full ${
                        community.isPopular || isRecommended ? "relative" : ""
                      }`}
                    >
                      {community.isPopular && (
                        <Badge className="absolute top-3 right-3 bg-pink-100 text-pink-600 hover:bg-pink-100">
                          Popular
                        </Badge>
                      )}

                      {isRecommended && !community.isPopular && (
                        <Badge className="absolute top-3 right-3 bg-amber-100 text-amber-600 hover:bg-amber-100">
                          Recommended
                        </Badge>
                      )}

                      <div className="border-b border-slate-100 p-4 md:p-6">
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                          <div
                            className={`${
                              isRecommended ? "bg-pink-50" : "bg-slate-50"
                            } p-2 rounded-full`}
                          >
                            <IconComponent
                              className={`h-5 w-5 ${
                                isRecommended
                                  ? "text-pink-500"
                                  : "text-slate-500"
                              }`}
                            />
                          </div>
                          <h3 className="text-lg md:text-xl font-medium text-slate-900">
                            {community.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 text-xs md:text-sm">
                          {community.description}
                        </p>
                      </div>

                      <div className="p-4 md:p-6 flex-grow">
                        <h4 className="font-medium mb-3 md:mb-4 text-slate-800">
                          What You&apos;ll Get
                        </h4>
                        <ul className="space-y-2 md:space-y-3 mb-6">
                          {community.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2.5"
                            >
                              <div
                                className={`rounded-full ${
                                  isRecommended ? "bg-pink-100" : "bg-slate-100"
                                } h-5 w-5 mt-0.5 flex items-center justify-center flex-shrink-0`}
                              >
                                <Check
                                  className={`h-3 w-3 ${
                                    isRecommended
                                      ? "text-pink-500"
                                      : "text-slate-500"
                                  }`}
                                />
                              </div>
                              <span className="text-xs md:text-sm text-slate-600">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="px-4 md:px-6 pb-4 md:pb-6 mt-auto">
                        <Button
                          className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                          asChild
                        >
                          <Link
                            href={community.buttonLink}
                            className="flex items-center justify-center"
                          >
                            <Users className="mr-2 h-4 w-4" />
                            {community.buttonText}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-3">
                Quick <span className="text-pink-600">Actions</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                Get started with these quick actions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {quickActionsData.map((action, index) => {
                const IconComponent = iconMap[action.icon];
                return (
                  <QuickActionCard
                    key={index}
                    icon={<IconComponent className="h-5 w-5 text-pink-500" />}
                    title={action.title}
                    description={action.description}
                    href={action.href}
                  />
                );
              })}
              {getLowestPriorityQuickAction() && (
                <QuickActionCard
                  key="lowest-priority"
                  icon={React.createElement(
                    iconMap[getLowestPriorityQuickAction()!.icon],
                    {
                      className: "h-5 w-5 text-pink-500",
                    }
                  )}
                  title={getLowestPriorityQuickAction()!.title}
                  description={getLowestPriorityQuickAction()!.description}
                  href={getLowestPriorityQuickAction()!.href}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function QuickActionCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 h-full transition-all duration-300 hover:shadow-md hover:border-pink-100 group-hover:translate-y-[-2px]">
        <div className="bg-pink-50 p-2.5 rounded-full w-fit mb-4">{icon}</div>
        <h3 className="font-medium text-slate-900 mb-1 group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-xs">{description}</p>
      </div>
    </Link>
  );
}
