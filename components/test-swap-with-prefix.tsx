"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TaglineWithPrefix {
  staticPrefix: string;
  dynamicText: string;
  subtext: string;
  highlightWords: string[];
  duration: number;
}

interface TextSwapWithPrefixProps {
  taglines: TaglineWithPrefix[];
}

export default function TextSwapWithPrefix({
  taglines,
}: TextSwapWithPrefixProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, taglines[currentIndex].duration);

    return () => clearInterval(interval);
  }, [currentIndex, taglines, isClient]);

  const currentTagline = taglines[currentIndex];

  const highlightText = (text: string, highlightWords: string[]) => {
    if (!highlightWords.length) return text;

    const regex = new RegExp(`\\b(${highlightWords.join("|")})\\b`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isHighlighted = highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      );
      
      if (isHighlighted) {
        // Different colors for different words
        if (part.toLowerCase() === 'future-proof') {
          return (
            <span key={index} className="text-black font-bold">
              {part}
            </span>
          );
        } else if (part.toLowerCase() === 'career' || part.toLowerCase() === 'ai') {
          return (
            <span key={index} className="text-pink-600 font-bold">
              {part}
            </span>
          );
        }
      }
      
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1]">
          <span className="block text-slate-800 font-medium text-[0.6em]">
            {highlightText(currentTagline.staticPrefix, [])}
          </span>
          {isClient ? (
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block mt-2 text-[0.8em]"
              >
                {highlightText(
                  currentTagline.dynamicText,
                  currentTagline.highlightWords
                )}
              </motion.span>
            </AnimatePresence>
          ) : (
            <span className="block mt-2 text-[0.8em]">
              {highlightText(
                currentTagline.dynamicText,
                currentTagline.highlightWords
              )}
            </span>
          )}
        </h1>

        {isClient ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`subtext-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mx-auto">
                {currentTagline.subtext}
              </p>
              <div className="flex justify-center mt-4">
                <div className="w-16 h-0.5 bg-pink-600 rounded-full"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="text-center">
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mx-auto">
              {currentTagline.subtext}
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-0.5 bg-pink-600 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
