import type React from "react";
import { Users, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full mt-6 shadow-muted">
      <CardContent className="flex-grow flex flex-col px-6 space-y-6">
        <div className="h-12 w-12 rounded-full bg-amber-100 p-3 text-amber-600">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExpertiseSection() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Strategy & Implementation",
      description:
        "Expert guidance on AI adoption, from strategy development to successful implementation",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "AI-Powered Market Insights",
      description:
        "Expert guidance on AI adoption, from strategy development to successful implementation",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Workforce Upskilling",
      description:
        "Expert guidance on AI adoption, from strategy development to successful implementation",
    },
  ];

  return (
    <section className="container py-12 md:py-24 max-w-6xl mx-auto">
      <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
        Our{" "}
        <span className="text-pink-600 dark:text-pink-400">AI Expertise</span>
      </h2>
      <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-2xl mx-auto">
        We have deep experience in creating AI strategy and implementation to
        transform business.
      </p>
      <div className="grid gap-9 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
