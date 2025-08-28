import React from "react";
import { Users, Target, Clock } from "lucide-react";
import CardWithIcon from "@/components/card-with-icon";

const features = [
  {
    icon: Users,
    title: "Small, Purposeful Cohorts",
    description:
      "Limited to 10 members, each bringing diverse but complementary skills.",
  },
  {
    icon: Target,
    title: "Real-World Focus",
    description:
      "Every circle tackles a specific use case or problem worth solving using both concepts and hands on work",
  },
  {
    icon: Clock,
    title: "Time-Bound & Outcome-Driven ",
    description:
      "Structured but like a flexible sprint (e.g. 4–8 weeks, ~2 hours/week), with clear goals",
  },
];
export default function AICircleHelp() {
  return (
    <section
      className="container py-12 md:py-24 max-w-7xl mx-auto bg bg-pink-50 rounded-2xl"
      id="ai-section"
    >
      <div className="container px-4 ">
        <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 max-w-5xl mx-auto">
          What Makes{" "}
          <span className="text-pink-600 dark:text-pink-400">AI Circles</span>{" "}
          Unique?
        </h2>
        <p className="md:text-center text-muted-foreground md:text-xl mb-16  mx-auto">
          Learn by Solving Real Problems Together
        </p>
        <div className="mb-1">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <CardWithIcon items={features} />
          </div>
        </div>
      </div>
    </section>
  );
}
