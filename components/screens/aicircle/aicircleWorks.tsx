import React from "react";
import { Users, BookOpen, UserCheck } from "lucide-react";
const steps = [
  {
    icon: Users,
    title: "Find and Join an AI Circle",
    description: "Pick a Circle based on your interest, topic or industry",
  },
  {
    icon: BookOpen,
    title: "Learn Together ",
    description:
      "Meet weekly, explore practical AI use cases, and build skills together",
  },
  {
    icon: UserCheck,
    title: "Become AI Circle Leader",
    description:
      "Once you’ve mastered the basics, lead your own AI Circle to help others",
  },
];
export default function AICircleWork() {
  return (
    <section className="container py-12 md:py-24 max-w-6xl mx-auto">
      <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
        How <span className="text-pink-600 dark:text-pink-400">AI Circle</span>{" "}
        Works
      </h2>
      <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-3xl mx-auto">
        Blending digital intelligence with human expertise to guide your career
        growth journey
      </p>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="flex flex-col text-center justify-center items-center"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center shadow-sm">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="space-y-2 w-full max-w-xl">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
