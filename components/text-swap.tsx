"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TextSwap({
  taglines,
}: {
  taglines: {
    heading: string;
    subtext: string;
    highlightWords?: string[];
    duration?: number;
  }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentDuration = taglines[currentIndex].duration || 8000;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, currentDuration);

    return () => clearInterval(interval);
  }, [taglines.length, currentIndex, taglines]);

  const renderHighlightedHeading = () => {
    const { heading, highlightWords = [] } = taglines[currentIndex];
    if (!highlightWords.length) {
      return heading;
    }

    const escapedWords = highlightWords.map((word) =>
      word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );

    const pattern = new RegExp(`(${escapedWords.join("|")})`, "gi");
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = pattern.exec(heading)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          text: heading.substring(lastIndex, match.index),
          highlight: false,
        });
      }
      parts.push({
        text: match[0],
        highlight: true,
      });
      lastIndex = pattern.lastIndex;
    }

    if (lastIndex < heading.length) {
      parts.push({
        text: heading.substring(lastIndex),
        highlight: false,
      });
    }

    return parts.map((part, index) =>
      part.highlight ? (
        <span key={index} className="text-pink-600 px-1 rounded">
          {part.text}
        </span>
      ) : (
        <span key={index}>{part.text}</span>
      )
    );
  };

  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none pr-4">
        {renderHighlightedHeading()}
      </h1>
      <p className="text-muted-foreground md:text-xl mt-4">
        {taglines[currentIndex].subtext}
      </p>
    </motion.div>
  );
}

export default TextSwap;
