import React from "react";
import { BarChart2, Lightbulb, User } from "lucide-react";
import CardWithIcon from "@/components/card-with-icon";

const features = [
  {
    icon: User,
    title: "Workforce Upskilling",
    description:
      "Equip your teams with essential AI skills to meet future demands and drive innovation.",
  },
  {
    icon: Lightbulb,
    title: "AI Solution Development & Deployment",
    description:
      "Design and implement scalable AI solutions. Deploy them in production, measure adoption and ROI, and stay ahead with architecture built for the Agentic AI era.",
  },
  {
    icon: BarChart2,
    title: "AI Strategy & Investment",
    description:
      "Identify capability gaps, uncover high-impact opportunities, and prioritize investments that deliver results.",
  },
];
export default function BusinessGPSHelp() {
  return (
    <section
      className="container py-12 md:py-24 max-w-8xl mx-auto bg bg-pink-50 rounded-2xl"
      id="ai-section"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 max-w-5xl mx-auto">
          How <span className="text-pink-600 dark:text-pink-400">We</span> Help
          Organizations Stay Ahead with{" "}
          <span className="text-pink-600 dark:text-pink-400">AI</span>
        </h2>
        <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-4xl mx-auto">
          We support organizations in three strategic areas—so they don&apos;t
          just survive AI disruption, but lead through it
        </p>
        <div className="mb-1">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto">
            <CardWithIcon items={features} />
          </div>
        </div>
      </div>
    </section>
  );
}
