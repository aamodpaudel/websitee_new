import React from "react";
import { BrainCircuit, Users } from "lucide-react";
import CardWithIcon from "@/components/card-with-icon";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Hub",
    description:
      "A single place to access tools, community and resources to learn AI skills.",
    learnmore: "/aihub",
  },
  {
    icon: Users,
    title: "Career Circle",
    description:
      "Personalized, flexible and hands-on AI learning experience in a small cohort.",
    learnmore: "/careercircle",
  },
];
export default function NewSolutionSection() {
  return (
    <section
      className="container py-12 md:py-24 max-w-7xl mx-auto bg bg-pink-50 rounded-2xl"
      id="ai-section"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-left md:text-center text-4xl font-bold text-pink-600 mb-4 max-w-3xl mx-auto">
          All-in-One Platform for Learning AI Skills
        </h2>
        <p className="max-w-3xl text-left md:text-center text-muted-foreground text-lg md:text-xl mb-16 mx-auto">
          Professional network for AI experts and enthusiasts to learn from each
          other
        </p>
        <div className="mb-1">
          <div className="grid gap-8 md:grid-cols-2  max-w-8xl mx-auto">
            <CardWithIcon items={features} />
          </div>
        </div>
      </div>
    </section>
  );
}
