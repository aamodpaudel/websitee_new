"use client";
import {
  BUSINESS_GPS_CONSULTATIONS,
  CAREER_CIRCLES_COMPLETED,
  CAREER_GPS_CONSULTATIONS,
  NO_OF_PROFESSIONALS,
} from "@/consts";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImpactCounter from "../impactCounter";
const stats = [
  {
    value: NO_OF_PROFESSIONALS,
    suffix: "+",
    description: "Registered Community Members",
    subtext: "From 25+ countries",
  },
  {
    value: CAREER_CIRCLES_COMPLETED,
    suffix: "+",
    description: "AI Career Circles Completed",
    subtext: "Collaboration on Trending topics",
  },
  {
    value: CAREER_GPS_CONSULTATIONS,
    suffix: "+",
    description: "Agent Interactions",
    subtext: "AI Career Guidance and Support",
  },
  {
    value: BUSINESS_GPS_CONSULTATIONS,
    suffix: "+",
    description: "Organizations Success",
    subtext: "Organizations using Careerlink",
  },
];
export default function ImpactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  return (
    <section ref={sectionRef} className="pt-12 pb-2 max-w-7xl mx-auto md:text-center">
      <motion.h2
        className="text-4xl font-bold text-pink-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Our Impact
      </motion.h2>
      <motion.p
        className="text-muted-foreground md:text-xl py-2 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join thousands of professionals who have already transformed their
        careers with Careerlink
      </motion.p>
      <ImpactCounter stats={stats} />
    </section>
  );
}
