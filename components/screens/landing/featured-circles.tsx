"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const featuredCircles = [
  {
    id: 1,
    title: "Prompt Engineering: Everyday AI Skills for the Modern Workplace",
    description: "Use case: AI Prompting Essentials - Communicating Effectively with AI",
    buttonText: "Enroll in this circle",
    difficulty: "Beginner",
    difficultyColor: "bg-green-100 border-green-300 text-green-700",
    difficultyDot: "bg-green-500"
  },
  {
    id: 2,
    title: "Deep Learning for Pet Emotional States Prediction",
    description: "Use Case: Animals/Pets Welfare & Sentiment Analysis using AI",
    buttonText: "Enroll in this circle",
    difficulty: "Intermediate",
    difficultyColor: "bg-yellow-100 border-yellow-300 text-yellow-700",
    difficultyDot: "bg-yellow-500"
  },
  {
    id: 3,
    title: "Building Collaborative AI Agents",
    description: "Use Case: Agentic AI automation - Leveraging network of AI Agents to complete complex work",
    buttonText: "Enroll in this circle",
    difficulty: "Advanced",
    difficultyColor: "bg-orange-100 border-orange-300 text-orange-700",
    difficultyDot: "bg-orange-500"
  },
  {
    id: 4,
    title: "Learn essential AI skills for academic research",
    description: "Use Case: Enhancing Research Grant Proposals via AI",
    buttonText: "Enroll in this circle",
    difficulty: "Expert",
    difficultyColor: "bg-red-100 border-red-300 text-red-700",
    difficultyDot: "bg-red-500"
  },
  {
    id: 5,
    title: "Sentiment Detection for Autism and Non-Verbal Disabilities",
    description: "Use Case: AI inspired Accessibility for People with Disabilities",
    buttonText: "Enroll in this circle",
    difficulty: "Intermediate",
    difficultyColor: "bg-yellow-100 border-yellow-300 text-yellow-700",
    difficultyDot: "bg-yellow-500"
  },
];

export default function FeaturedCircles() {
  return (
         <section className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
                     <h2 className="text-4xl font-bold text-pink-600 mb-4">
             Featured Circles
           </h2>
           <p className="text-muted-foreground md:text-xl py-2 max-w-2xl mx-auto text-lg">
             Small tight-knit cohort based on your needs
           </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-hidden relative"
        >
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1200] }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of cards */}
            {featuredCircles.map((circle, index) => (
                            <motion.div
                key={`first-${circle.id}`}
                className="bg-transparent border-2 border-pink-600 rounded-xl p-6 shadow-lg min-w-[300px] h-[280px] flex flex-col"
              >
                <div className="flex justify-center mb-3">
                  <div className={`flex items-center px-3 py-1 rounded-full border text-sm font-medium ${circle.difficultyColor}`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${circle.difficultyDot}`}></div>
                    {circle.difficulty}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {circle.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  {circle.description}
                </p>
                <div className="flex justify-center mt-auto">
                  <Button
                    className="bg-pink-600 text-white hover:bg-pink-700 border-2 border-pink-600 px-6 py-2"
                  >
                    {circle.buttonText}
                  </Button>
                </div>
              </motion.div>
          ))}
          
          {/* Duplicate set of cards for seamless loop */}
          {featuredCircles.map((circle, index) => (
            <motion.div
              key={`second-${circle.id}`}
              className="bg-transparent border-2 border-pink-600 rounded-xl p-6 shadow-lg min-w-[300px] h-[280px] flex flex-col"
            >
              <div className="flex justify-center mb-3">
                <div className={`flex items-center px-3 py-1 rounded-full border text-sm font-medium ${circle.difficultyColor}`}>
                  <div className={`w-2 h-2 rounded-full mr-2 ${circle.difficultyDot}`}></div>
                  {circle.difficulty}
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {circle.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm">
                {circle.description}
              </p>
              <div className="flex justify-center mt-auto">
                <Button
                  className="bg-pink-600 text-white hover:bg-pink-700 border-2 border-pink-600 px-6 py-2"
                >
                  {circle.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
