"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useState } from "react";
interface StatProps {
  value: number;
  suffix: string;
  description: string;
  subtext?: string;
}

export default function ImpactCounter({ stats }: { stats: StatProps[] }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-12 max-w-7xl mx-auto md:text-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
}

function CountAnimation({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const duration = 2000;
      const interval = 20;
      const increment = value / (duration / interval);
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= value) {
          clearInterval(timer);
          setDisplayValue(value);
        } else {
          setDisplayValue(Math.floor(startValue));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div ref={ref} className="text-4xl font-bold text-slate-600 mb-6">
      {displayValue.toLocaleString()}
      {suffix}
    </motion.div>
  );
}

function StatCard({
  value,
  suffix,
  description,
  subtext,
  index,
  isInView,
}: StatProps & { index: number; isInView: boolean }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: 25,
      perspective: 1000,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 + index * 0.15,
        ease: [0.215, 0.61, 0.355, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="px-6 py-8 rounded-lg bg-amber-500/15 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-500/30 -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
      />

      <motion.div
        className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 -z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{
          delay: 0.4 + index * 0.15,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        style={{
          borderBottomLeftRadius: "100%",
          transformOrigin: "top right",
        }}
      />

      <CountAnimation value={value} suffix={suffix} />

      <motion.div
        className="text-gray-700 font-medium"
        custom={0}
        variants={itemVariants}
      >
        {description}
      </motion.div>

      {subtext && (
        <motion.div
          className="text-sm text-muted-foreground mt-2"
          custom={1}
          variants={itemVariants}
        >
          {subtext}
        </motion.div>
      )}
    </motion.div>
  );
}
