"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import NewsletterSection from "./newsletter";

const TextSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:w-1/2 text-center lg:text-left"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900"
      >
        Ready to <span className="mt-1 text-pink-600">Transform</span>
        <br />
        Your Business?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl leading-8 text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
      >
        Try Careerlink to discover how AI can drive growth for your
        organization.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
          <Link href="/portal/organization" className="w-full sm:w-auto">
            <Button
              size="lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full sm:w-auto relative bg-pink-600 hover:bg-pink-700 text-white h-12 px-6 rounded-lg transition-all duration-200 shadow-md shadow-pink-500/10 hover:shadow-pink-500/20"
            >
              <span className="relative z-10 flex items-center">
                Try Careerlink for Free
                <motion.div
                  animate={{ x: isHovered ? 3 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </span>
            </Button>
          </Link>

          <p className="text-sm text-gray-600">
            No credit card • Cancel anytime
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function BusinessGPSPromo() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-pink-100 to-whites mt-8">
      <div className="relative min-h-[55vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <TextSection />
            <NewsletterSection />
          </div>
        </div>
      </div>
    </div>
  );
}
