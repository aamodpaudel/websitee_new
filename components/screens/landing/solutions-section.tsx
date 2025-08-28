"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Users2,
  Check,
  ArrowRight,
  Star,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const solutions = [
  {
    id: "careergps",
    title: "CareerGPS",
    subtitle: "Your Personal Digital Coach",
    description:
      "Your all-in-one tool to explore interest, map career journey, and provide recommendations to achieve your goals.",
    icon: Compass,
    stats: "Over 45,000 careerGPS consultations completed!",
    features: [
      "Discover your true career passions and goals",
      "Skill gap analysis and development paths for growth",
      "Industry specific insights and recommendations",
      "Choice between human professionals and digital agents",
      "Achieve success with immediate, actionable steps",
    ],
    videoDescription:
      "Watch how CareerGPS provides personalized guidance for your career journey",
    ctaText: "Learn More",
    href: "/careergps",
    popular: true,
  },
  {
    id: "aicircles",
    title: "Career Circle",
    subtitle: "AI Enthusiasts and Professionals",
    description:
      "Join a community of AI enthusiasts and professionals to learn, share, and grow together.",
    icon: Users2,
    stats: "Over 15 AI Circles Completed!",
    features: [
      "Learn essential AI tools ",
      "Explore industry specific AI use cases",
      "Boost your work efficiency",
      "Personalized recommendation on AI trending topics",
      "Future-proof your career path",
    ],
    videoDescription:
      "See how Career Circles foster professional growth through community",
    ctaText: "Learn More",
    href: "/careercircle",
    popular: false,
  },
  {
    id: "careeragents",
    title: "Career Agents",
    subtitle: "Your Personal Career Assistant",
    description:
      "AI-powered career assistant that provides personalized recommendations and insights.",
    icon: Bot,
    stats: "Over 50,000 career agents consultations completed!",
    features: [
      "AI-powered personalized recommendations",
      "Real-time insights and updates",
      "Career path analysis and suggestions",
      "Skill gap analysis and development paths for growth",
      "Industry specific insights and recommendations",
    ],
    videoDescription:
      "Discover how Career Agents provide personalized insights and recommendations",
    ctaText: "Learn More",
    href: "/careeragents",
    popular: false,
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #f472b6 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-left md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 max-w-3xl mx-auto">
            All-in-One Platform for{" "}
            <span className="text-pink-600 dark:text-pink-400 relative">
              Learning AI Skills
            </span>
          </h2>
          <p className="max-w-3xl text-left md:text-center text-muted-foreground text-lg md:text-xl mb-16 mx-auto">
            Professional network for AI experts and enthusiasts to learn from
            each other
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden group"
              style={{ boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)" }}
            >
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ padding: "1px" }}
              >
                <div className="absolute inset-0 bg-white rounded-2xl" />
              </div>

              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors duration-300">
                    <solution.icon className="h-7 w-7 text-pink-500" />
                  </div>
                  {solution.popular && (
                    <div className="flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-pink-50 text-pink-600 border border-pink-100">
                      <Star className="h-3.5 w-3.5 mr-1 fill-pink-500 text-pink-500" />
                      Popular
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-pink-600 text-sm font-medium mb-3">
                    {solution.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-base text-slate-900 mb-4">
                    What You&apos;ll Get
                  </h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className="h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-pink-600" />
                        </div>
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 mt-auto">
                  <span className="inline-block px-3 py-1.5 bg-pink-50 text-pink-600 rounded-full text-xs font-medium border border-pink-100">
                    {solution.stats}
                  </span>
                </div>

                <Link href={solution.href} className="block">
                  <Button
                    size="lg"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white hover:cursor-pointer"
                  >
                    {solution.ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
