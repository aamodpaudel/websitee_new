"use client";

import { Check, Users, Heart, Smile, Sprout, Quote, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function UniqueValues() {
  const [activeValue, setActiveValue] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Your career is our focus",
      description:
        "AI is reshaping every job - our platform helps you future-proof your career with the skills you need to thrive.",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      visual: {
        image: "/images/hero-avatar-1.png",
        quote: "The platform that truly understands my career goals.",
        quote_by: "Ritesh",
        hereIsHow:
          "Careerlink helps me evaluate my growth every time I switch jobs or take on new responsibilities. It empowers me to make decisions that align with my career aspirations.",
      },
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Career Building Never Stops",
      description:
        "We understand that careers are a lifelong journey, starting early and evolving constantly.",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      visual: {
        image: "/images/hero-avatar-2.png",
        quote: "I've found opportunities I never knew existed.",
        quote_by: "James",
        hereIsHow:
          "I just got into my dream college, but I began my career journey early — and more importantly, I now understand my potential. Careerlink helps me confidently steer my path forward.",
      },
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Focus on Experience",
      description:
        "We believe in personalized experience where people learn from respected professionals in small, close-knit groups called Circles.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      visual: {
        image: "/images/hero-avatar-3.png",
        quote: "My Circle has become my professional family.",
        quote_by: "Sarah",
        hereIsHow:
          "I collaborated with a diverse team of six people I met through Careerlink. Despite being from different countries, they understood my career story, social background, and ambitions. Plus, I got to work alongside someone I've admired for years.",
      },
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empowering Hidden Talents",
      description:
        "We empower underserved communities by providing hope, opportunities, and support to unlock their potential.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      visual: {
        image: "/images/hero-avatar-5.png",
        quote:
          "This platform gave me the opportunity I never thought was possible",
        quote_by: "María",
        hereIsHow:
          "I always knew I had the talent to achieve something extraordinary, but I didn't know where to start. Careerlink connected me with people and organizations that saw my potential and pushed me to exceed my limits. Thanks to this platform, I've found opportunities I never imagined, and my family and I are truly grateful for the new path it's opened for us.",
      },
    },
  ];

  return (
    <section
      className="py-12 md:py-20 px-4 md:px-6"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-6xl ">
        <motion.div
          className="text-center mb-12 md:pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            We are{" "}
            <span className="text-pink-600 dark:text-pink-400 relative">
              Unique!
            </span>
          </h2>
          <p className="text-muted-foreground md:text-xl py-2 max-w-2xl mx-auto text-lg">
            Unlike other social networking tools, we focus on core values
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start lg:items-center">
          <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
            {values.map((value, index) => (
              <div
                key={index}
                className={cn(
                  "p-5 md:p-6 rounded-xl cursor-pointer transition-all duration-300 border relative",
                  activeValue === index
                    ? `${value.bgColor} border-transparent shadow-lg`
                    : "hover:shadow-md border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
                )}
                onClick={() => setActiveValue(index)}
              >
                {activeValue === index && (
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-white to-transparent" />
                    <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tr from-white to-transparent" />
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "rounded-xl p-3 text-white flex-shrink-0 shadow-lg relative",
                      `bg-gradient-to-br ${value.color}`
                    )}
                  >
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2 transition-colors">
                      {value.title}
                      {activeValue === index && (
                        <Check className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      )}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {activeValue === index && (
                  <div
                    className={`h-1 w-full absolute bottom-0 left-0 bg-gradient-to-r ${value.color}`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 relative rounded-2xl shadow-xl">
            <div
              className={`absolute inset-0 opacity-90 bg-gradient-to-br ${values[activeValue].color} rounded-2xl`}
            />

            <div className="relative p-5 md:p-6 text-white">
              <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl w-full mb-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <Quote className="w-6 h-6 mr-3 fill-white" />
                  <h4 className="text-base md:text-lg font-semibold">
                    Success Story
                  </h4>
                </div>
                <blockquote className="text-sm md:text-lg italic font-light leading-relaxed">
                  &quot;{values[activeValue].visual.quote}&quot;
                </blockquote>
                <div className="mt-3 text-right text-white/80 font-medium">
                  — {values[activeValue].visual.quote_by}
                </div>
              </div>

              <div className="flex justify-center my-6">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-white/10" />
                  <div className="absolute -inset-1.5 rounded-full bg-white/20" />
                  <Image
                    src={values[activeValue].visual.image || "/placeholder.svg"}
                    alt={values[activeValue].title}
                    className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-2 border-white shadow-lg"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl w-full mt-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <MessageCircle className="w-6 h-6 mr-3 fill-white" />
                  <h4 className="text-base md:text-lg font-semibold">
                    Here is how
                  </h4>
                </div>
                <p className="text-white text-sm md:text-lg leading-relaxed">
                  {values[activeValue].visual.hereIsHow}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
