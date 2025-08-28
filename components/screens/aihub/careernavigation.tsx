import React, { useState } from "react";
import {
  Bot,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const DynamicCareerSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [completedFeatures, setCompletedFeatures] = useState<Record<string, boolean>>({});

  const cards = [
    {
      id: "advisor",
      icon: Bot,
      title: "AI Career Advisor",
      description:
        "Get personalized career recommendations based on your skills, interests, and market trends.",
      features: [
        "Skill gap analysis",
        "Career path mapping",
        "Industry insights",
        "Salary predictions",
      ],
    },
    {
      id: "tracking",
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with AI-powered analytics and milestone tracking.",
      features: [
        "Learning analytics",
        "Skill progression",
        "Goal setting",
        "Achievement badges",
      ],
    },
    {
      id: "recommendations",
      icon: Star,
      title: "Smart Recommendations",
      description:
        "Receive intelligent suggestions for courses, projects, and opportunities.",
      features: [
        "Personalized courses",
        "Project ideas",
        "Job opportunities",
        "Networking events",
      ],
    },
  ];

  const handleCardHover = (cardId: string): void => {
    setActiveCard(cardId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  const toggleFeature = (cardId: string, featureIndex: number) => {
    const key = `${cardId}-${featureIndex}`;
    setCompletedFeatures((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Solutions
          </div>

          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 text-gray-900">
            AI-Powered{" "}
            <span className="text-pink-600 relative">
              Career
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
            </span>{" "}
            Navigation
          </h2>

          <p className="text-gray-600 md:text-xl mb-16 max-w-3xl mx-auto">
            Discover your AI career path with intelligent agents that provide
            personalized guidance, skill assessments, and career roadmaps
            tailored to your goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                className={`
                  bg-white rounded-2xl p-6 h-full border-2 transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "border-pink-300 shadow-2xl shadow-pink-100 transform scale-105 -translate-y-2"
                      : "border-gray-200 hover:border-pink-200 shadow-lg hover:shadow-xl hover:scale-102"
                  }
                `}
                onMouseEnter={() => handleCardHover(card.id)}
                onMouseLeave={handleCardLeave}
              >
                {/* Icon */}
                <div
                  className={`
                  relative p-4 rounded-xl w-fit mb-4 transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-br from-pink-500 to-rose-500 scale-110"
                      : "bg-pink-600 hover:bg-pink-700"
                  }
                `}
                >
                  <Icon
                    className={`h-8 w-8 text-white transition-transform duration-300 ${
                      isActive ? "rotate-12" : ""
                    }`}
                  />
                </div>

                {/* Card Content */}
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isActive ? "text-pink-600" : "text-gray-900"
                  }`}
                >
                  {card.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Interactive Feature List */}
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, featureIndex) => {
                    const itemKey = `${card.id}-${featureIndex}`;
                    const isCompleted = completedFeatures[itemKey];

                    return (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-between group cursor-pointer"
                        onClick={() => toggleFeature(card.id, featureIndex)}
                      >
                        <div className="flex items-center">
                          <div
                            className={`
                            w-2 h-2 rounded-full mr-3 transition-all duration-300
                            ${
                              isCompleted
                                ? "bg-green-500 scale-125"
                                : "bg-pink-600 group-hover:bg-pink-700 group-hover:scale-110"
                            }
                          `}
                          ></div>
                          <span
                            className={`text-sm transition-colors duration-300 ${
                              isCompleted
                                ? "text-green-600 line-through"
                                : "text-gray-600 group-hover:text-gray-900"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>

                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                        )}
                      </li>
                    );
                  })}
                </ul>


                <div
                  className={`
                  transition-all duration-300 overflow-hidden
                  ${isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
                `}
                >
                  <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-gray-600">Career Paths Mapped</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicCareerSection;
