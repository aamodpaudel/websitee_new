import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Brain,
  BarChart2,
  Briefcase,
  Lightbulb,
  Compass,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
const features = [
  {
    icon: Brain,
    title: "AI-Powered Productivity",
    description:
      "Automate repetitive tasks, summarize reports, and streamline communication.",
    
  },
  {
    icon: BarChart2,
    title: "Smart Decision-Making",
    description:
      "Use AI-driven insights to analyze data, forecast trends, and optimize strategies.",
  },
  {
    icon: Briefcase,
    title: "AI Tools for Your Industry",
    description:
      "Discover real-world AI applications in business, healthcare, education, marketing, and more.",
  },
  {
    icon: Lightbulb,
    title: "Enhance Creativity & Problem-Solving",
    description:
      "Leverage AI for brainstorming, content creation, and innovative solutions.",
  },
  {
    icon: Compass,
    title: "Stay AI-Ready",
    description:
      "Learn the must-know AI skills to adapt and thrive in an AI-driven world.",
  },
  {
    icon: CheckCircle2,
    title: "Work Smarter, Not Harder",
    description:
      "Let CareerGPS be your AI guide, helping you work smarter—not harder!",
  },
];
export default function AiSection() {
  return (
    <section className="container py-12 md:py-24 max-w-7xl mx-auto bg bg-pink-50 rounded-2xl" id="ai-section">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
          Must-Learn{" "}
          <span className="text-pink-600 dark:text-pink-400">AI Skills</span>{" "}
          for Every Career
        </h2>
        <p className="md:text-center text-muted-foreground md:text-xl mb-16  mx-auto">
          CareerGPS helps you learn and apply AI-powered tools and techniques to
          boost productivity, make smarter decisions, and stay ahead in your
          career.
        </p>
        <div className="mb-1">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <CardContent className="px-6 flex flex-col items-start space-y-4">
                  <div className="p-2 rounded-full bg-pink-100">
                    <feature.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-4 mt-16">
            <Link href="https://ai.careerlink.ai/careergps">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-medium bg-pink-600 hover:bg-pink-700 hover:cursor-pointer"
              >
                Try Careerlink AI Tutor for Free <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
