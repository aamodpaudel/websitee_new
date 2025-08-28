import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function WhySection() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-32 flex flex-col items-center justify-center gap-12 rounded-2xl">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Heart className="text-pink-600 h-10 w-10 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter max-w-2xl">
          Why We Started <span className="text-pink-600">Careerlink</span>?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          A Journey We All Share
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 text-left max-w-6xl">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Growing up, we all face the same challenge—standing at the
            crossroads of our future, uncertain about which path to take. High
            school, college, and beyond bring overwhelming decisions with
            endless possibilities.
          </p>

          <p>
            After graduation, the questions only grow bigger:{" "}
            <strong className="text-foreground">
              &quot;What&apos;s next?&quot;
            </strong>{" "}
            and{" "}
            <strong className="text-foreground">
              &quot;How do I make the most of my potential?&quot;
            </strong>{" "}
            The struggle to find the right opportunities never truly fades.
          </p>

          <p>
            For many, especially those from underserved communities, this lack
            of direction is amplified. Without access to proper guidance,
            insights, or resources, their potential remains untapped.
          </p>

          <div className="relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-pink-600 rounded-full"></div>
            <p className="pl-4 font-medium text-foreground">
              I experienced this challenge at every stage of my journey—and I
              wasn&apos;`t alone. That&apos;s why I created{" "}
              <span className="text-pink-600 font-semibold">Careerlink</span>: a
              platform where everyone, regardless of background, can access
              mentorship, clear guidance, and the right opportunities to
              succeed.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/why-we-started.jpg"
              alt="Career Journey"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
