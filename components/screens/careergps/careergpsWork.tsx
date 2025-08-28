"use client";
import StepsTimeline from "@/components/process-timeline";
import { Users, Brain, BarChart3, BookOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Understanding Need",
    description:
      "CareerGPS agent reviews your profile and asks additional details",
  },
  {
    number: "02",
    icon: Brain,
    title: "Recommendations",
    description:
      "AI agent uses user's input, careerlink's resources and tools to make recommendations",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "User Review",
    description: "User reviews the recommendations and makes necessary updates",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Save and Share",
    description:
      "User saves the information for future use and shares with others for their input",
  },
];

export default function CareergpsWork() {
  return (
    <section className="container py-12 md:py-20 max-w-6xl mx-auto">
      <div className="md:text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
          How{" "}
          <span className="text-pink-600 dark:text-pink-400">CareerGPS</span>{" "}
          Works
        </h2>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Blending digital intelligence with human expertise to guide your
          career growth journey
        </p>
      </div>
      <StepsTimeline steps={steps} />
    </section>
  );
}
