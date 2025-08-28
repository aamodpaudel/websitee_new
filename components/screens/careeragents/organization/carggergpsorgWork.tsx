"use client";
import StepsTimeline from "@/components/process-timeline";
import { Users, Brain, BarChart3, BookOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Understanding Workforce Needs",
    description:
      "CareerGPS agent assesses your team's skills and identifies growth opportunities",
  },
  {
    number: "02",
    icon: Brain,
    title: "Tailored Recommendations",
    description:
      "AI-driven insights leverage organizational goals and employee data to suggest career pathways",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Employee & Management Review",
    description:
      "Employees and managers review recommendations and refine career plans",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Save and Implement",
    description:
      "Organizations integrate insights into workforce planning and share with leadership for strategic alignment",
  },
];

export default function CareergpsOrgWork() {
  return (
    <section className="container py-12 md:py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
          How{" "}
          <span className="text-pink-600 dark:text-pink-400">CareerGPS</span>{" "}
          Supports Your Organization
        </h2>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Empowering businesses with AI-driven career development solutions to
          enhance workforce growth and retention.
        </p>
      </div>
      <StepsTimeline steps={steps} />
    </section>
  );
}
