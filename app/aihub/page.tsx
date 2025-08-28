import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Bot,
  MessageSquare,
  Network,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import HeroSection from "@/components/screens/aihub/herosection";
import { CAREER_GPS_URL, COMMUNITY_URL } from "@/consts";
import CareerChargePromo from "@/components/screens/careerChargePromo";

const pageData = {
  careerSection: {
    id: "careergps",
    title: "AI-Powered Career Navigation",
    highlightWord: "Career",
    cta: {
      text: "Explore Career GPS Agents",
      href: CAREER_GPS_URL,
      className:
        "inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2",
    },
    description:
      "Discover your AI career path with intelligent agents that provide personalized guidance, skill assessments, and career roadmaps tailored to your goals.",
    cards: [
      {
        icon: Bot,
        title: "Skill Gap Analysis",
        description:
          "Identify your current skills and gaps with AI-driven assessments to create a personalized learning plan.",
        gradient: "bg-pink-600",
        bgGradient: "from-white to-pink-25",
        borderColor: "border-pink-100 hover:border-pink-200",
        titleColor: "text-pink-700",
        dotColor: "bg-pink-400",
        features: [
          "Compares your skills to industry standards",
          "Uses AI to assess your skill levels",
          "Provides detailed skill reports",
        ],
      },
      {
        icon: Star,
        title: "Learning Recommendations",
        description:
          "Get personalized course and resource suggestions based on your skill gaps and career goals.",
        gradient: "bg-pink-600",
        bgGradient: "from-white to-fuchsia-25",
        borderColor: "border-fuchsia-100 hover:border-fuchsia-200",
        titleColor: "text-pink-700",
        dotColor: "bg-pink-400",
        features: [
          "Smart course suggestions",
          "Expert-curated resources",
          "Connects you to training programs",
        ],
      },
      {
        icon: Star,
        title: "Future Skills Development",
        description:
          "Stay ahead with AI-driven insights into emerging skills and technologies that will shape the future of work.",
        gradient: "bg-pink-600",
        bgGradient: "from-white to-fuchsia-25",
        borderColor: "border-fuchsia-100 hover:border-fuchsia-200",
        titleColor: "text-pink-700",
        dotColor: "bg-pink-400",
        features: [
          "Focuses on emerging skills",
          "Hands-on practice opportunities",
          "Focuses on AI and digital tools",
        ],
      },
    ],
  },
  communitySection: {
    id: "community",
    title: "Connect with AI Enthusiasts",
    highlightedWord: "Enthusiasts",
    titleGradient: "bg-pink-600",
    cta: {
      text: "Join the AI Community",
      href: COMMUNITY_URL,
      className:
        "inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2",
    },
    description:
      "Join a vibrant community of AI learners, practitioners, and organizations. Network, collaborate, and grow together in the AI ecosystem.",
    features: [
      {
        icon: Users,
        title: "AI Practitioners",
        description:
          "Connect with experienced AI professionals and learn from their expertise.",
        gradient: "bg-pink-600",
        iconColor: "text-white",
      },
      {
        icon: Network,
        title: "Leading Organizations",
        description:
          "Discover companies and institutions at the forefront of AI innovation.",
        gradient: "bg-pink-600",
        iconColor: "text-white",
      },
      {
        icon: MessageSquare,
        title: "AI Circles",
        description:
          "Engage in discussions, share insights, and collaborate on AI projects.",
        gradient: "bg-pink-600",
        iconColor: "text-white",
      },
    ],
    stats: [
      {
        value: "5K+",
        label: "Active Members",
        gradient: "bg-pink-600",
        bgGradient: "from-pink-50 to-rose-50",
        borderColor: "border-pink-100",
      },
      {
        value: "20+",
        label: "Career Agents",
        gradient: "bg-pink-600",
        bgGradient: "from-rose-50 to-fuchsia-50",
        borderColor: "border-rose-100",
      },
      {
        value: "10+",
        label: "AI Circles",
        gradient: "bg-pink-600",
        bgGradient: "from-fuchsia-50 to-pink-50",
        borderColor: "border-fuchsia-100",
      },
      {
        value: "10+",
        label: "Weekly Events",
        gradient: "bg-pink-600",
        bgGradient: "from-pink-50 to-rose-50",
        borderColor: "border-pink-100",
      },
    ],
  },
  resourcesSection: {
    id: "resources",
    title: "Comprehensive Resource Hub",
    highlightedWord: "Resource",
    titleGradient: "bg-pink-600",
    cta: {
      text: "Explore AI Resources",
      href: "/resources",
      className:
        "inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2",
    },
    description:
      "Access a curated collection of AI tools, learning materials, and resources to accelerate your AI journey from beginner to expert.",
    cards: [
      {
        icon: Wrench,
        title: "AI Tools Directory",
        description:
          "Discover and compare the latest AI tools for every use case and skill level.",
        gradient: "bg-pink-600",
        bgGradient: "from-white to-pink-25",
        borderColor: "border-pink-100 hover:border-pink-200",
        titleColor: "text-pink-700",
      },
      {
        icon: BookOpen,
        title: "Learning Materials",
        description:
          "Access courses, tutorials, and documentation from beginner to advanced levels.",
        gradient: "bg-pink-600",
        bgGradient: "from-white to-rose-25",
        borderColor: "border-rose-100 hover:border-rose-200",
        titleColor: "text-pink-700",
      },
      {
        icon: Star,
        title: "Curated Collections",
        description:
          "Expertly curated resource collections for specific AI domains and applications.",
        gradient: "bg-pink-600",
        bgGradient: "from-white to-fuchsia-25",
        borderColor: "border-fuchsia-100 hover:border-fuchsia-200",
        titleColor: "text-pink-700",
      },
    ],
  },
};

export default function Page() {
  const { careerSection, communitySection, resourcesSection } = pageData;

  return (
    <>
      <HeroSection />
      <section
        id={careerSection.id}
        className="py-20 px-4 bg-gradient-to-br from-pink-25 to-white"
      >
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
              {careerSection.title.split(careerSection.highlightWord)[0]}
              <span className="text-pink-600 dark:text-pink-400">
                {careerSection.highlightWord}{" "}
              </span>
              {careerSection.title.split(careerSection.highlightWord)[1]}
            </h2>
            <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-3xl mx-auto">
              {careerSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careerSection.cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className={`transition-all duration-300 ${card.borderColor} bg-gradient-to-br ${card.bgGradient}`}
                >
                  <CardHeader>
                    <div
                      className={`bg-gradient-to-br ${card.gradient} p-4 rounded-xl w-fit mb-4`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className={card.titleColor}>
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div
                            className={`w-2 h-2 ${card.dotColor} rounded-full mr-3`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {careerSection.cta && (
            <div className="mt-12 text-center">
              <a
                href={careerSection.cta.href}
                className={careerSection.cta.className}
              >
                {careerSection.cta.text}
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      <section id={communitySection.id} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className={`md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4`}
            >
              {
                communitySection.title.split(
                  communitySection.highlightedWord
                )[0]
              }
              <span className="text-pink-600 dark:text-pink-400">
                {communitySection.highlightedWord}{" "}
              </span>
              {
                communitySection.title.split(
                  communitySection.highlightedWord
                )[1]
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {communitySection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                People & Organizations
              </h3>
              <div className="space-y-8">
                {communitySection.features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-6">
                      <div
                        className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-xl`}
                      >
                        <IconComponent
                          className={`h-8 w-8 ${feature.iconColor}`}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {communitySection.stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`text-center p-8 bg-gradient-to-br ${stat.bgGradient} ${stat.borderColor} hover:shadow-lg transition-shadow`}
                >
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
          {communitySection.cta && (
            <div className="mt-12 text-center">
              <a
                href={communitySection.cta.href}
                className={communitySection.cta.className}
              >
                {communitySection.cta.text}
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      <section
        id={resourcesSection.id}
        className="py-20 px-4 bg-gradient-to-br from-rose-25 to-white max-w-7xl mx-auto"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4`}
            >
              {
                resourcesSection.title.split(
                  resourcesSection.highlightedWord
                )[0]
              }
              <span className="text-pink-600">
                {resourcesSection.highlightedWord}{" "}
              </span>
              {
                resourcesSection.title.split(
                  resourcesSection.highlightedWord
                )[1]
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {resourcesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesSection.cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className={`transition-all duration-300 ${card.borderColor} bg-gradient-to-br ${card.bgGradient}`}
                >
                  <CardHeader>
                    <div
                      className={`bg-gradient-to-br ${card.gradient} p-4 rounded-xl w-fit mb-4`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className={card.titleColor}>
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          {resourcesSection.cta && (
            <div className="mt-12 text-center">
              <a
                href={resourcesSection.cta.href}
                className={resourcesSection.cta.className}
              >
                {resourcesSection.cta.text}
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>
      <CareerChargePromo />
    </>
  );
}
