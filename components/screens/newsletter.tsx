"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Dot,
  Mail,
  Youtube,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter } from "@/services/api/postService";
import { toast } from "sonner";
import { LINKEDIN_URL, YOUTUBE_URL } from "@/consts";

type PlatformType = "email" | "youtube" | "linkedin" | null;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedPlatform, setExpandedPlatform] =
    useState<PlatformType>("email");

  interface SubscribeFormProps {
    email: string;
  }

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    await subscribeToNewsletter({ email } as SubscribeFormProps);
    toast.success("You've successfully subscribed to our newsletter!");
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  const handleYouTubeSubscribe = () => {
    window.open(YOUTUBE_URL + "?sub_confirmation=1", "_blank");
    toast.success("Opening YouTube channel to subscribe!");
  };

  const handleLinkedInSubscribe = () => {
    window.open(LINKEDIN_URL, "_blank");
    toast.success("Opening LinkedIn page to follow!");
  };

  const togglePlatform = (platform: PlatformType) => {
    setExpandedPlatform(expandedPlatform === platform ? null : platform);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:w-1/2 w-full max-w-md lg:max-w-none"
    >
      <div className="rounded-xl overflow-hidden relative border border-pink-200 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="relative p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Not ready yet?
                  </h3>

                  <div className="h-1 w-12 mb-3 bg-pink-500 rounded-full" />

                  <p className="text-gray-600 mb-6">
                    Stay connected with us through our various channels for
                    weekly career advice, industry trends, and job
                    opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base font-medium text-gray-700 flex items-center">
                    Connect with us on:
                  </h4>

                  <div className="flex space-x-3 mb-2">
                    <button
                      onClick={() => togglePlatform("email")}
                      className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                        expandedPlatform === "email"
                          ? "bg-pink-100 text-pink-600 shadow-sm"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Mail className="h-6 w-6 mb-1" />
                      <span className="text-xs font-medium">Newsletter</span>
                    </button>

                    <button
                      onClick={() => togglePlatform("youtube")}
                      className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                        expandedPlatform === "youtube"
                          ? "bg-red-100 text-red-600 shadow-sm"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Youtube className="h-6 w-6 mb-1" />
                      <span className="text-xs font-medium">YouTube</span>
                    </button>

                    <button
                      onClick={() => togglePlatform("linkedin")}
                      className={`flex-1 flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                        expandedPlatform === "linkedin"
                          ? "bg-blue-100 text-blue-600 shadow-sm"
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Linkedin className="h-6 w-6 mb-1" />
                      <span className="text-xs font-medium">LinkedIn</span>
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {expandedPlatform === "email" && (
                      <motion.div
                        key="email-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                          <form
                            onSubmit={handleSubscribe}
                            className="space-y-4"
                          >
                            <div className="relative">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Email address
                              </label>
                              <div className="relative">
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="you@example.com"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="pl-4 pr-10 py-2 border-pink-100 focus:border-pink-500 focus:ring-pink-200 rounded-lg text-base w-full bg-white"
                                  required
                                />
                                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400 h-4 w-4" />
                              </div>
                            </div>

                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md shadow-pink-500/10 hover:shadow-pink-500/20"
                            >
                              {isSubmitting ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                  }}
                                  className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                                />
                              ) : (
                                <span className="flex items-center justify-center">
                                  Subscribe to Newsletter
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                              )}
                            </Button>
                          </form>
                          <p className="text-xs text-gray-600 flex items-center mt-3">
                            <Dot className="h-2 w-2 mr-1" />
                            We respect your privacy. Unsubscribe anytime.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {expandedPlatform === "youtube" && (
                      <motion.div
                        key="youtube-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                          <div className="mb-4">
                            <h5 className="font-medium text-gray-800 mb-2">
                              Subscribe to our YouTube Channel
                            </h5>
                            <p className="text-sm text-gray-600">
                              Get video tutorials, industry insights, and career
                              tips delivered directly to your YouTube feed.
                            </p>
                          </div>

                          <Button
                            type="button"
                            onClick={handleYouTubeSubscribe}
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md"
                          >
                            <span className="flex items-center justify-center">
                              <Youtube className="mr-2 h-4 w-4" />
                              Subscribe on YouTube
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </Button>

                          <p className="text-xs text-gray-600 flex items-center mt-3">
                            <Dot className="h-2 w-2 mr-1" />
                            You&apos;ll be redirected to YouTube to complete
                            your subscription.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {expandedPlatform === "linkedin" && (
                      <motion.div
                        key="linkedin-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <div className="mb-4">
                            <h5 className="font-medium text-gray-800 mb-2">
                              Follow us on LinkedIn
                            </h5>
                            <p className="text-sm text-gray-600">
                              Connect with our professional network for job
                              opportunities, industry news, and career
                              development resources.
                            </p>
                          </div>

                          <Button
                            type="button"
                            onClick={handleLinkedInSubscribe}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md"
                          >
                            <span className="flex items-center justify-center">
                              <Linkedin className="mr-2 h-4 w-4" />
                              Follow on LinkedIn
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </Button>

                          <p className="text-xs text-gray-600 flex items-center mt-3">
                            <Dot className="h-2 w-2 mr-1" />
                            You&apos;ll be redirected to LinkedIn to complete
                            following.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="bg-white rounded-lg p-6 flex flex-col items-center justify-center border border-pink-100"
              >
                <div className="bg-pink-100 p-3 rounded-full mb-4">
                  <CheckCircle className="text-pink-600 h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  You&apos;re in!
                </h4>
                <p className="text-gray-600 text-center mb-5">
                  Thanks for subscribing to our newsletter!
                </p>

                <p className="text-sm font-medium text-gray-700 mb-3">
                  Connect with us on other platforms:
                </p>

                <div className="flex space-x-3 w-full">
                  <Button
                    type="button"
                    onClick={handleYouTubeSubscribe}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
                  >
                    <Youtube className="h-5 w-5" />
                  </Button>

                  <Button
                    type="button"
                    onClick={handleLinkedInSubscribe}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full mt-4 border-pink-200 text-pink-600 hover:bg-pink-50"
                >
                  Back to options
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
