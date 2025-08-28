"use client";

import type React from "react";

import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}
// bg-emerald-100 bg-indigo-100 bg-indigo-600  bg-indigo-700
function ToolCard({ icon, title, description, link, color }: ToolCardProps) {
  return (
    <Card className="h-full overflow-hidden border-0 shadow-lg">
      <CardContent className="p-6 pt-8">
        <div className="flex items-start gap-4">
          <div
            className={`h-12 w-12 rounded-full ${color
              .replace("bg-", "bg-")
              .replace("600", "100")} p-3 ${color.replace("bg-", "text-")}`}
          >
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={link} className="w-full">
          <Button
            size="lg"
            className={`hover:cursor-pointer text-white w-full ${color} hover:${color.replace(
              "600",
              "700"
            )}`}
          >
            <span>Try Now</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function CareerTools({
  tools,
  explore_tool_link,
  career_stage,
  description,
}: {
  tools: ToolCardProps[];
  explore_tool_link: string;
  career_stage: string;
  description: string;
}) {
  return (
    <section className="container py-12 md:py-24 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
          Essential{" "}
          <span className="text-pink-600 dark:text-pink-400">Tools</span> for {" "}
          {career_stage} Success
        </h2>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href={explore_tool_link} passHref>
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white hover:cursor-pointer"
          >
            Explore All Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
