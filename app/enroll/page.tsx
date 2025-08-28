"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, GraduationCap, UserCheck, Zap, Award, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";

export default function EnrollPage() {
  const useCases = [
    {
      id: 1,
      title: "Accelerating Software Programming/Coding with Generative AI",
      description: "For software developers, Generative AI is a powerful co-pilot that accelerates the entire development lifecycle.",
      likes: 54,
      dislikes: 0
    },
    {
      id: 2,
      title: "Animals/Pets Welfare & Sentiment Analysis using AI",
      description: "Build a translator for animal emotions using AI technology.",
      likes: 4,
      dislikes: 0
    },
    {
      id: 3,
      title: "AI-driven Research Assistants in Academia",
      description: "AI assistant that automates tedious tasks and accelerates discovery in academic research.",
      likes: 3,
      dislikes: 0
    },
    {
      id: 4,
      title: "AI Prompting Essentials - Communicating Effectively with AI",
      description: "Learn to communicate effectively with AI for writing, brainstorming, and coding tasks.",
      likes: 49,
      dislikes: 0
    },
    {
      id: 5,
      title: "AI inspired Accessibility for People with Disabilities",
      description: "Transformative AI technology for assistive technology and accessibility solutions.",
      likes: 29,
      dislikes: 0
    },
    {
      id: 6,
      title: "AI powered Environment, Soil & Agriculture Sustainability",
      description: "Use AI to analyze data from satellites, drones, and sensors for environmental protection.",
      likes: 2,
      dislikes: 0
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hands-on Outcomes",
      description: "Ship real artifacts like drafts, analyses, or automations."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community & Mentorship",
      description: "Grow with peers and an expert leader."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Career Mobility",
      description: "Turn skills into credibility—become a leader."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-600 hover:text-pink-600 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
                     <div className="flex gap-4">
             <Button 
               variant="outline" 
               className="border-pink-600 text-pink-600 hover:bg-pink-50"
               onClick={() => window.open('https://www.careerlink.ai/apply-aitraining', '_blank')}
             >
               Request for AI Training
             </Button>
             <Button className="bg-pink-600 text-white hover:bg-pink-700">
               Become a Circle Leader
             </Button>
           </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Circles: Learn AI Together
            </h1>
                         <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
               A Circle is a tight-knit cohort where you solve real use cases with peers, guided by a Circle Leader. 
               Every Circle starts with a use case—so you learn by doing.
             </p>
                           <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-3"
                  onClick={() => window.open('https://gps.careerlink.ai/circles', '_blank')}
                >
                  Enroll in a circle
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3"
                  onClick={() => window.open('https://www.careerlink.ai/apply-aitraining', '_blank')}
                >
                  Request for AI Training
                </Button>
              </div>
          </motion.div>
        </div>
      </section>

      {/* What makes Circles different */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What makes Circles different?
            </h2>
          </motion.div>

                     <div className="grid md:grid-cols-3 gap-8">
                                                       <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.2, delay: 0.02 }}
                 viewport={{ once: true, amount: 0.5 }}
                 className="bg-white p-8 rounded-xl shadow-lg"
               >
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Built on Use Cases
              </h3>
              <p className="text-gray-600">
                Every cohort centers on solving a real-world problem.
              </p>
            </motion.div>

                                                                                                       <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.2, delay: 0.05 }}
                 viewport={{ once: true, amount: 0.5 }}
                 className="bg-white p-8 rounded-xl shadow-lg"
               >
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mentored Learning
              </h3>
              <p className="text-gray-600">
                Guided by a certified Circle Leader and supported by peers.
              </p>
            </motion.div>

                                                                                                       <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.2, delay: 0.08 }}
                 viewport={{ once: true, amount: 0.5 }}
                 className="bg-white p-8 rounded-xl shadow-lg"
               >
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Learner → Leader Path
              </h3>
              <p className="text-gray-600">
                Graduates can get certified and lead their own Circles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* How Circles Work */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Circles Work
            </h2>
          </motion.div>

                     <div className="grid md:grid-cols-4 gap-8">
             {[
               {
                 step: "1",
                 title: "Start with a Use Case",
                 description: "Pick a real problem you care about."
               },
               {
                 step: "2",
                 title: "Lookup related Circles",
                 description: "Filter & pick according to your flexibility"
               },
               {
                 step: "3",
                 title: "Learn & Build",
                 description: "Uplift your AI skills & solve the issue"
               },
               {
                 step: "4",
                 title: "Become a Leader",
                 description: "Get certified and lead future cohorts."
               }
             ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                                 <p className="text-gray-600 text-sm">
                   {item.description}
                 </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             {/* Use Cases Section */}
       <section className="py-16 px-4">
         <div className="container mx-auto max-w-6xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3 }}
             viewport={{ once: true, amount: 0.3 }}
             className="text-center mb-12"
           >
             <h2 className="text-4xl font-bold text-gray-900 mb-4">
               Each Circle Starts with a Real Use Case
             </h2>
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
                                 {useCases.map((useCase) => (
                    <motion.div
                      key={`first-${useCase.id}`}
                      className="bg-white border-2 border-pink-600 rounded-xl p-6 shadow-lg min-w-[350px] h-[220px] flex flex-col"
                    >
                   <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                     {useCase.title}
                   </h3>
                   <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-4">
                     {useCase.description}
                   </p>
                   <div className="flex justify-between items-center mt-auto">
                     <div className="flex gap-4">
                       <div className="flex items-center gap-1">
                         <ThumbsUp className="h-4 w-4 text-gray-500" />
                         <span className="text-sm text-gray-600">{useCase.likes}</span>
                       </div>
                       <div className="flex items-center gap-1">
                         <ThumbsDown className="h-4 w-4 text-gray-500" />
                         <span className="text-sm text-gray-600">{useCase.dislikes}</span>
                       </div>
                     </div>
                     <div className="flex gap-2">
                       <Button variant="outline" size="sm" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                         Show Detail
                       </Button>
                       <Button size="sm" className="bg-pink-600 text-white hover:bg-pink-700">
                         View Circles
                       </Button>
                     </div>
                   </div>
                 </motion.div>
               ))}
               
               {/* Duplicate set of cards for seamless loop */}
                                 {useCases.map((useCase) => (
                    <motion.div
                      key={`second-${useCase.id}`}
                      className="bg-white border-2 border-pink-600 rounded-xl p-6 shadow-lg min-w-[350px] h-[220px] flex flex-col"
                    >
                   <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                     {useCase.title}
                   </h3>
                   <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-4">
                     {useCase.description}
                   </p>
                   <div className="flex justify-between items-center mt-auto">
                     <div className="flex gap-4">
                       <div className="flex items-center gap-1">
                         <ThumbsUp className="h-4 w-4 text-gray-500" />
                         <span className="text-sm text-gray-600">{useCase.likes}</span>
                       </div>
                       <div className="flex items-center gap-1">
                         <ThumbsDown className="h-4 w-4 text-gray-500" />
                         <span className="text-sm text-gray-600">{useCase.dislikes}</span>
                       </div>
                     </div>
                     <div className="flex gap-2">
                       <Button variant="outline" size="sm" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                         Show Detail
                       </Button>
                       <Button size="sm" className="bg-pink-600 text-white hover:bg-pink-700">
                         View Circles
                       </Button>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </motion.div>
           </motion.div>
         </div>
       </section>

      {/* Why Join a Circle */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join a Circle?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
