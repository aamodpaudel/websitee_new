"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImpactCounter from "../impactCounter";
const stats = [
  {
    value: 200,
    suffix: "+",
    description: "AI Engineers",
    subtext: "Experts in ML, data science, and generative AI.",
  },
  {
    value: 10,
    suffix: "+",
    description: "Senior Executives",
    subtext: "Leaders in AI-driven transformations.",
  },
  {
    value: 100,
    suffix: "+",
    description: "Skilled Professionals",
    subtext: "Experts in engineering, business, and operations.",
  },
  {
    value: 20,
    suffix: "+",
    description: "AI Tech Partnerships",
    subtext: "Access to cutting-edge AI platforms & tools.",
  },
];

export default function CredentailsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  return (
    <section
      ref={sectionRef}
      className="py-12 max-w-7xl mx-auto md:text-center"
    >
      <motion.h2
        className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none md:p-2 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Our <span className="text-pink-600">Credentials</span> — Expertise You
        Can Trust
      </motion.h2>
      <motion.p
        className="text-muted-foreground md:text-xl md:mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Backed by a powerful network of industry leaders, certified AI experts,
        and top technology partners, Careerlink.ai brings
      </motion.p>
      <ImpactCounter stats={stats} />
    </section>
  );
}
