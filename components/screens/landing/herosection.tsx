"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CAREERLINK_VIDEO_URL } from "@/consts";
import {
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TextSwapWithPrefix from "@/components/test-swap-with-prefix";
import Banner from "@/components/banner";
import InteractiveBackground from "@/components/interactive-background";

export default function HeroSectionUpdated() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if banner was previously dismissed
    const bannerDismissed = localStorage.getItem('banner-dismissed');
    if (!bannerDismissed) {
      setShowBanner(true);
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleBannerClick = () => {
    window.open("https://careerlink.ai/aisummercamp", "_blank");
  };

  // circleVariants removed - not used

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  // avatarVariants removed - not used

  // floatingItemVariants removed - not used

  const videoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  const taglines = [
    {
      staticPrefix: "",
      dynamicText: "Future-Proof Your Career with AI",
      subtext:
        "Learn in Circles. Build practical solutions. Apply AI for everyday tasks.",
      highlightWords: ["Future-Proof", "Career", "AI"],
      duration: 8000,
    },
  ];

  return (
    <>
      <InteractiveBackground />
      
      {/* Banner - will only render on client after hydration */}
      {isClient && showBanner && (
        <Banner
          onClose={() => {
            setShowBanner(false);
            localStorage.setItem('banner-dismissed', 'true');
          }}
          onClick={handleBannerClick}
          title="Circle Running Soon - Prompt Engineering: Everyday AI Skills for the Modern Workplace"
          subtitle="Hands on AI circle to everyone: learn basic fundamentals, apply prompts to real life and lead your tasks with productivity"
        />
      )}

      <section className="relative md:min-h-screen pt-8 md:pt-[14vh] flex md:items-center overflow-hidden mb-16">
        <div className="relative w-full z-10">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            {/* Hero image at the top */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroImageVariants}
              className="mb-8 relative"
            >
              <div 
                className="rounded-lg overflow-hidden shadow-2xl"
                style={{ 
                  border: '3px solid #db2777',
                  boxShadow: '0 25px 50px -12px rgba(219, 39, 119, 0.25)'
                }}
              >
                <Image
                  src="/images/imageeeoo.png"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="block"
                />
              </div>
              
              {/* Glowing effect around the image */}
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'radial-gradient(circle, rgba(219, 39, 119, 0.2) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  zIndex: -1,
                }}
              />
            </motion.div>

            {/* Centered content */}
            <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Badge
                  variant="secondary"
                  className="w-fit bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 hover:from-pink-100 hover:to-purple-100 text-sm backdrop-blur-sm"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  AI-Powered Career Development
                </Badge>
              </motion.div>

              {isClient && <TextSwapWithPrefix taglines={taglines} />}

              <motion.div
                className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.6 }}
              >
                <Link href="/enroll">
                  <Button
                    size="lg"
                    className="bg-pink-600 text-white hover:bg-pink-700 border-2 border-pink-600 text-lg hover:cursor-pointer h-14 w-full md:w-auto shadow-lg font-semibold backdrop-blur-sm"
                  >
                    Enroll in a circle
                  </Button>
                </Link>

                <Link href="/upskill-organization">
                  <Button
                    size="lg"
                    className="bg-transparent text-pink-600 hover:bg-pink-50 border-2 border-pink-600 h-14 w-full md:w-auto text-lg font-semibold backdrop-blur-sm"
                  >
                    Upskill My Organization
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Four action cards section */}
      <section className="pt-8 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-pink-600 mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI proficiency is now a critical necessity for every industry
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Try <span className="text-pink-600">CareerGPS</span>
              </h3>
              <p className="text-gray-600 text-sm">Assessments and tailored reports to guide your ideal career path.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Explore <span className="text-pink-600">Use Cases</span>
              </h3>
              <p className="text-gray-600 text-sm">Explore and solve real-world problems through AI applications.</p>
            </div>

            <Link href="/enroll">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Find a <span className="text-pink-600">Circle</span>
                </h3>
                <p className="text-gray-600 text-sm">Join a small learning cohort guided by experts to solve real use cases.</p>
              </div>
            </Link>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Browse <span className="text-pink-600">Resources/Tools</span>
              </h3>
              <p className="text-gray-600 text-sm">Enhance your tasks progress with curated prompt books & AI tools.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section with extensive spacing */}
      <div className="pt-20 pb-40">
        <section className="lg:min-h-screen">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="aspect-video w-full relative"
              initial="hidden"
              animate="visible"
              variants={videoVariants}
            >
              <video
                ref={videoRef}
                className="object-cover w-full h-full rounded-3xl drop-shadow-3xl border-2 border-gradient-to-r from-pink-200 to-purple-200"
                poster="/images/landing-thumbnail.png"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={CAREERLINK_VIDEO_URL} type="video/mp4" />
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl pointer-events-none">
                  <Button
                    onClick={handlePlayClick}
                    className="lg:w-26 lg:h-26 rounded-full bg-black/50 hover:bg-black/70 hover:scale-105 transition-all duration-300 flex items-center justify-center group hover:cursor-pointer pointer-events-auto shadow-2xl"
                  >
                    <Play
                      size={48}
                      className="text-white fill-white group-hover:text-white md:scale-200"
                    />
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
