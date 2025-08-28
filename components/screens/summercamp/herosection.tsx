"use client";

import React, { useEffect, useState } from "react";
import { Calendar, Users, Award, DollarSign, Clock } from "lucide-react";
import GenericHeroSection from "@/components/herosection-generic";

const SUMMER_CAMP_CIRCLE_URL =
  "https://gps.careerlink.ai/circle/learn-essential-ai-skills-summer-course-targeted-to-high-school-students-833933b32c";

const heroconfig = {
  title: {
    sections: [
      { text: "Pioneers Academy for " },
      { text: "High School", highlight: true },
      { text: "" },
    ],
  },
  description: (
    <p className="mb-2 text-sm sm:text-base break-words">
      Hands-on AI Summer Bootcamp for Students in High School. Today&apos;s AI
      enthusiasts in school are tomorrow&apos;s AI developers, leaders &
      entrepreneurs in industry. Build meaningful AI applications, master
      deep-learning fundamentals, and become an AI innovator in just 4 weeks.
      Gain mentorship from AI researchers at{" "}
      <span className="font-semibold text-pink-600 break-words">
        top US universities & Fortune 500 companies
      </span>
      .
    </p>
  ),
  avatars: [
    "/images/hero-avatar-2.png",
    "/images/hero-avatar-1.png",
    "/images/hero-avatar-3.png",
    "/images/hero-avatar-4.png",
  ],
  statsText: "Limited Spots Available - Only 10 Students",
  statsHighlight: "",
  ctaText: (
    <div className="flex flex-row flex-wrap items-center w-full justify-center gap-1 md:gap-2 text-center">
      <span className="text-base md:text-lg font-semibold">Apply Now -</span>
      <s className="text-base md:text-lg">$800</s>
      <span className="text-base md:text-lg">$600</span>
      <span className="text-sm md:text-base">- 25% off Early Registration</span>
    </div>
  ),
  ctaUrl: SUMMER_CAMP_CIRCLE_URL,
  ctaIcon: true,
  imageSrc: "/images/summer-camp.png",
  imageAlt: "AI Summer Camp",
  video_url:
    "https://starleaders-dev.s3.amazonaws.com/media/videos/710f6b7d07957f44a366f464b7b890164219cba7-video.mp4",
};

const Features = [
  {
    icon: (
      <Calendar className="w-6 h-6 md:w-8 md:h-8 text-pink-600 mx-auto mb-2 md:mb-3" />
    ),
    title: "Duration",
    description: "4 weeks - 8 sessions",
  },
  {
    icon: (
      <Users className="w-6 h-6 md:w-8 md:h-8 text-pink-600 mx-auto mb-2 md:mb-3" />
    ),
    title: "Class Size",
    description: "Limited to 10 Students",
  },
  {
    icon: (
      <Award className="w-6 h-6 md:w-8 md:h-8 text-pink-600 mx-auto mb-2 md:mb-3" />
    ),
    title: "Certificate",
    description: "Included with Course",
  },
  {
    icon: (
      <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-pink-600 mx-auto mb-2 md:mb-3" />
    ),
    title: "Cost",
    description: "$600 after 25% off",
  },
];
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <GenericHeroSection {...heroconfig} />
      <div
        className={`transition-all duration-1000 transform max-w-5xl mx-auto px-3 sm:px-4 md:px-6 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <div className="bg-pink-100 rounded-2xl p-3 sm:p-4 md:p-6 mb-6 md:mb-8 border border-pink-200">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-pink-600 flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-pink-600">
                Courses are already running for{" "}
                <span className="font-semibold">June</span>
              </span>
            </div>
            <div className="text-center">
              <span className="text-sm sm:text-base md:text-lg text-pink-600">
                Upcoming Courses will start for:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6">
              {["July", "August", "September"].map((month) => (
                <div
                  key={month}
                  className="bg-white min-w-24 text-center text-slate-800 px-3 py-1.5 rounded-sm shadow-sm text-sm sm:text-base md:text-lg font-medium whitespace-nowrap"
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 break-words">
            Taught by world class mentors from universities like{" "}
            <span className="font-semibold text-pink-600 text-base sm:text-lg md:text-xl break-words">
              NYU
            </span>{" "}
            & industries like{" "}
            <span className="font-semibold text-pink-600 text-base sm:text-lg md:text-xl break-words">
              Microsoft
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12 text-center">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {feature.icon}
              <h3 className="font-semibold text-pink-700 mb-1 md:mb-2 text-xs sm:text-sm md:text-base break-words">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm break-words">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HeroSection;
