import React from "react";
import { Target, Brain, Code, Search } from "lucide-react";
import CardWithIcon from "@/components/card-with-icon";

const features = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Explore careers in artificial intelligence, machine learning, and data science as these technologies reshape industries worldwide.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Discover how AI is changing software development practices and creating new opportunities for developers.",
  },
  {
    icon: Target,
    title: "Engineering Innovation",
    description:
      "Learn how traditional engineering roles are evolving with AI integration and automation.",
  },
  {
    icon: Search,
    title: "Research & Development",
    description:
      "Find opportunities in cutting-edge research that combines scientific expertise with AI capabilities.",
  },
];
export default function Impact() {
  return (
    <section
      className="container py-12 md:py-24 max-w-6xl mx-auto bg bg-pink-50 rounded-2xl"
      id="ai-section"
    >
      <div className="container px-4 ">
        <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 max-w-5xl mx-auto">
          Impact of AI on{" "}
          <span className="text-pink-600">Science and Technology Careers</span>
        </h2>
        <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-4xl mx-auto">
          The rise of AI is transforming the landscape of science and technology
          careers. As AI technologies advance, they are reshaping job roles,
          creating new opportunities, and requiring professionals to adapt their
          skills.
        </p>
        <div className="mb-1">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            <CardWithIcon items={features} />
          </div>
        </div>
      </div>
    </section>
  );
}
