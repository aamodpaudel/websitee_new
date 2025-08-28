import type React from "react";
import { GraduationCap, Users, Network, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CAREER_GPS_URL } from "@/consts";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  features,
  href,
}: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full mt-6 shadow-muted">
      <CardContent className="flex-grow flex flex-col px-6 space-y-4">
        <div className="h-12 w-12 rounded-full bg-amber-100 p-3 text-amber-600">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ul className="space-y-2 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              • {feature}
            </li>
          ))}
        </ul>
        <Link href={href || CAREER_GPS_URL}>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-md hover:cursor-pointer w-full md:w-auto"
          >
            Learn More
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function CareerStageSection() {
  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "High School Students",
      description:
        "Explore passions, navigate college planning, and build skills",
      features: [
        "Interest exploration / career navigation ",
        "College application process",
        "Learn essential AI skills",
        "Innovation & entrepreneurship ",
      ],
      href: "/careeragents/highschool",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "College Students",
      description: "Develop deeper expertise and collaborate for success",
      features: [
        "Research collaboration",
        "Job readiness",
        "Learn essential AI skills",
        "Innovation & entrepreneurship",
      ],
      href: "/careeragents/college",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Early Career Professionals (<5 yrs of work experience)",
      description: "Advance your career, drive innovation, and grow",
      features: [
        "Career growth or change",
        "Learn essential AI skills",
        "Innovation & entrepreneurship ",
      ],
      href: "/careeragents/earlycareer",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Mid Career Professionals (5-15 yrs)",
      description: "Lead teams, enhance expertise, and elevate impact",
      features: [
        "Career growth or change",
        "Learn essential AI skills",
        "Innovation & entrepreneurship ",
      ],
      href: "/careeragents/midcareer",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Advanced Professionals (15+ yrs)",
      description: "Drive executive leadership, mentor others, and give back",
      features: [
        "Executive leadership",
        "Giving back to society",
        "Learn essential AI skills",
        "Innovation & entrepreneurship",
      ],
      href: "/careeragents/advancedcareer",
    },
  ];

  return (
    <section className="container py-12 md:py-24 max-w-6xl mx-auto">
      <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
        For Every{" "}
        <span className="text-pink-600 dark:text-pink-400">Career Stage</span>
      </h2>
      <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-3xl mx-auto">
        Tailored guidance for wherever you are in your career journey
      </p>

      {/* Triangle layout container */}
      <div className="flex flex-col items-center">
        {/* Top row - 3 cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 w-full">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="w-full md:w-80">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        {/* Bottom row - 2 cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index} className="w-full md:w-80">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
