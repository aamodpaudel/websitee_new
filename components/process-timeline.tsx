"use client";
import React from "react";
import { cn } from "@/lib/utils";

type Step = {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

type StepsTimelineProps = {
  steps: Step[];
};

export default function StepsTimeline({ steps }: StepsTimelineProps) {
  return (
    <section className="container py-12 md:py-16 max-w-6xl mx-auto">
      <div className="md:hidden">
        <div className="relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative pl-12 pb-12">
                {!isLast && (
                  <div
                    className="absolute left-6 top-10 w-0.5 h-full bg-amber-400"
                    style={{ transform: "translateX(-50%)" }}
                  />
                )}

                <div className="absolute left-0 top-0 w-12 h-12 bg-amber-400 text-white rounded-full flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="bg-background rounded-lg p-5 shadow-sm border border-muted">
                  <span className="text-sm font-semibold text-amber-500 block mb-1">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative">
          <div
            className="absolute left-1/2 top-10 h-0.5 w-[calc(100%-8rem)] bg-amber-400"
            style={{ transform: "translateX(-50%)" }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={cn("relative", isEven ? "pt-24" : "pb-24")}
                >
                  <div
                    className={cn(
                      "absolute left-1/2 w-0.5 h-14 bg-amber-400",
                      isEven ? "top-10" : "bottom-10"
                    )}
                    style={{ transform: "translateX(-50%)" }}
                  />

                  <div
                    className={cn(
                      "absolute left-1/2 w-16 h-16 bg-amber-400 text-white rounded-full flex items-center justify-center shadow-lg z-10",
                      isEven ? "top-0" : "bottom-0"
                    )}
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="bg-background rounded-lg p-6 shadow-sm border border-muted h-full">
                    <span className="text-sm font-semibold text-amber-500 block mb-1">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
