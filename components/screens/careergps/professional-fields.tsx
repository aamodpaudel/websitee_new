"use client";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  FlaskRoundIcon as Flask,
  Stethoscope,
  PaintbrushIcon as PaintBrush,
  GraduationCap,
  Gavel,
  Leaf,
  Users,
  Truck,
  Rocket,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fields = [
  {
    id: "science-technology",
    title: "Science, Technology & Engineering",
    description:
      "Navigate the rapidly evolving tech landscape with AI-powered career guidance.",
    icon: Flask,
    color: "bg-blue-100 text-blue-600",
    href: "/careergps/science-technology",
  },
  {
    id: "business-finance",
    title: "Business, Finance & Management",
    description:
      "Stay ahead in the financial sector as AI transforms business operations.",
    icon: Briefcase,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "health-medicine",
    title: "Health & Life Sciences",
    description:
      "Discover how AI is reshaping healthcare and medical career paths.",
    icon: Stethoscope,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "arts-media-communication",
    title: "Arts, Media & Communication",
    description:
      "Explore new creative possibilities in the age of AI-generated content.",
    icon: PaintBrush,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "social-sciences",
    title: "Social Sciences & Humanities",
    description:
      "Study human behavior and society through AI-assisted research.",
    icon: Users,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "education-training",
    title: "Education & Training",
    description:
      "Enhance learning experiences with AI-driven educational tools.",
    icon: GraduationCap,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "Law-government-public-service",
    title: "Law, Government & Public Service",
    description:
      "Understand the implications of AI in legal and public sectors.",
    icon: Gavel,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "skilled-trades-services",
    title: "Skilled Trades & Services",
    description:
      "Discover how AI is enhancing traditional trades and services.",
    icon: Truck,
    color: "bg-rose-100 text-rose-600",
  },
  {
    id: "environment-agriculture-sustainability",
    title: "Environment, Agriculture & Sustainability",
    description:
      "Explore AI's role in promoting sustainable practices and environmental conservation.",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "undecided-multidisciplinary",
    title: "Undecided / Multidisciplinary",
    description:
      "Explore diverse career paths and find your passion with AI assistance.",
    icon: Rocket,
    color: "bg-gray-100 text-gray-600",
  },
];

export default function ProfessionalFields() {
  const [showAll, setShowAll] = useState(false);
  const visibleFields = showAll ? fields : fields.slice(0, 6);

  return (
    <>
      <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
        For Every{" "}
        <span className="text-pink-600 dark:text-pink-400">
          Professional Fields
        </span>
      </h2>
      <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-3xl mx-auto">
        Explore the diverse fields of work where AI is making a significant
        impact.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleFields.map((field) => (
          <Link key={field.id} href={field.href || "#"}>
            <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-pink-300 cursor-pointer">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-full ${field.color} flex items-center justify-center mb-4`}
                >
                  <field.icon className="h-6 w-6" />
                </div>
                <CardTitle>{field.title}</CardTitle>
                <CardDescription>{field.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="text-pink-600 font-medium flex items-center">
                  Explore career paths
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      {fields.length > 6 && (
        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-white bg-emerald-600  hover:bg-emerald-700 transition rounded-md"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? (
              <ChevronUp className="h-4 w-4 ml-2" />
            ) : (
              <ChevronDown className="h-4 w-4 ml-2" />
            )}
          </Button>
        </div>
      )}
    </>
  );
}
