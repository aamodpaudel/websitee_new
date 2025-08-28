"use client";

import { useState } from "react";
import type React from "react";
import {
  Send,
  ArrowLeft,
  Home,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
  Users,
  Clock,
  Target,
  Mail,
  Contact,
  User,
  Zap,
  Calendar,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { requestCircle } from "@/services/api/postService";
import { CAREER_ASSESSMENT_URL } from "@/consts";
import Link from "next/link";

const trainingStartOptions = [
  { value: "september-2025", label: "September 2025" },
  { value: "october-2025", label: "October 2025" },
  { value: "november-2025", label: "November 2025" },
  { value: "december-2025", label: "December 2025" },
  { value: "january-2026", label: "January 2026" },
  { value: "february-2026", label: "February 2026" },
  { value: "march-2026", label: "March 2026" },
  { value: "april-2026", label: "April 2026" },
];

const aiUsageOptions = [
  { value: "build-new", label: "Build new AI tools or applications" },
  { value: "use-existing", label: "Use existing AI tools and applications" },
];

const aiHoursOptions = [
  { value: "less-than-1", label: "Less than 1 hr" },
  { value: "1-3", label: "1–3 hrs" },
  { value: "3-5", label: "3–5 hrs" },
  { value: "5-plus", label: "5+ hrs" },
];

const trainingPreferenceOptions = [
  { value: "online", label: "Remote (Online)" },
  { value: "in_person", label: "On-site (In-person)" },
  { value: "no_preference", label: "No preference" },
];

const roleOptions = [
  { value: "highschool", label: "High School Student", icon: "🎓" },
  { value: "academia", label: "Academia - Researcher/Educator", icon: "🔬" },
  { value: "business", label: "Business - Professional", icon: "💼" },
  { value: "entrepreneur", label: "Entrepreneur", icon: "🚀" },
  { value: "Organization-leader", label: "Organization Leader", icon: "👥" },
  { value: "other", label: "Other", icon: "✨" },
];

export default function RequestCirclePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    whoAreYou: "",
    whatIsNeeded: "",
    aiUsage: "",
    aiHours: "",
    trainingStart: "",
    trainingPreference: "",
    purpose: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    requestCircle({
      email: formData.email,
      name: formData.name,
      role: formData.whoAreYou,
      real_world_problems_to_solve: formData.whatIsNeeded,
      ai_usage: formData.aiUsage,
      ai_hours: formData.aiHours,
      urgency: formData.trainingStart,
      learning_modality: formData.trainingPreference,
      goal: formData.purpose,
    })
      .then(() => {
        toast.success(
          "Your request has been submitted successfully! We'll review it and get back to you soon."
        );
        setIsSubmitted(true);
      })
      .catch(() => {
        toast.error("Failed to submit your request. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });

    setFormData({
      email: "",
      name: "",
      whoAreYou: "",
      whatIsNeeded: "",
      aiUsage: "",
      aiHours: "",
      trainingStart: "",
      trainingPreference: "",
      purpose: "",
    });
  };

  const isFormValid =
    !!formData.email &&
    !!formData.whoAreYou &&
    !!formData.whatIsNeeded &&
    !!formData.aiUsage &&
    !!formData.aiHours &&
    !!formData.trainingStart &&
    !!formData.trainingPreference &&
    !!formData.purpose;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="mb-6 -ml-2 hover:bg-white/60 backdrop-blur-sm transition-all duration-200 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back
            </Button>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 min-w-16 min-h-16 bg-pink-600 rounded-full mb-4 shadow-lg flex-shrink-0">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {isSubmitted ? "Thank You!" : "Request for AI Training"}
              </h1>
              {!isSubmitted && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Help us understand your needs better so we can create the
                  perfect AI training circle for you. Please fill out the form
                  below with as much detail as possible.
                </p>
              )}
            </div>
          </div>

          {isSubmitted ? (
            <SuccessCard
              email={formData.email}
              onGoHome={() => router.push("/")}
            />
          ) : (
            <RequestForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isFormValid={isFormValid}
              isSubmitting={isSubmitting}
              trainingStartOptions={trainingStartOptions}
              roleOptions={roleOptions}
              aiUsageOptions={aiUsageOptions}
              aiHoursOptions={aiHoursOptions}
              trainingPreferenceOptions={trainingPreferenceOptions}
            />
          )}

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2">
              <span>Questions about the process?</span>
              <a
                href="mailto:contact@careerlink.ai"
                className="text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type RequestFormProps = {
  formData: {
    email: string;
    name: string;
    whoAreYou: string;
    whatIsNeeded: string;
    aiUsage: string;
    aiHours: string;
    trainingStart: string;
    trainingPreference: string;
    purpose: string;
  };
  handleInputChange: (field: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
  isSubmitting: boolean;
  trainingStartOptions: { value: string; label: string }[];
  roleOptions: { value: string; label: string; icon: string }[];
  aiUsageOptions: { value: string; label: string }[];
  aiHoursOptions: { value: string; label: string }[];
  trainingPreferenceOptions: { value: string; label: string }[];
};

function RequestForm({
  formData,
  handleInputChange,
  handleSubmit,
  isFormValid,
  isSubmitting,
  trainingStartOptions,
  roleOptions,
  aiUsageOptions,
  aiHoursOptions,
  trainingPreferenceOptions,
}: RequestFormProps) {
  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-white" />
              </div>
              <Label
                htmlFor="name"
                className="text-base font-semibold text-gray-900"
              >
                Your Name
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-200"
            />
          </div>

          {/* Email Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <Label
                htmlFor="email"
                className="text-base font-semibold text-gray-900"
              >
                Your Email Address
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-200"
            />
          </div>

          {/* Role Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Contact className="h-4 w-4 text-white" />
              </div>
              <Label className="text-base font-semibold text-gray-900">
                Your Current Role
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Select
              value={formData.whoAreYou}
              onValueChange={(value) => handleInputChange("whoAreYou", value)}
            >
              <SelectTrigger className="h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 w-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="py-3"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Purpose Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="h-4 w-4 text-white" />
              </div>
              <Label
                htmlFor="purpose"
                className="text-base font-semibold text-gray-900"
              >
                What do you hope to achieve with this training?
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Textarea
              id="purpose"
              placeholder="What are your learning objectives and how will this circle help you reach your goals?"
              value={formData.purpose}
              onChange={(e) => handleInputChange("purpose", e.target.value)}
              rows={4}
              required
              className="border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-200 resize-none"
            />
          </div>

          {/* Circle Type Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-4 w-4 text-white" />
              </div>
              <Label
                htmlFor="whatIsNeeded"
                className="text-base font-semibold text-gray-900"
              >
                What kind of real world problems do you want to solve?
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Textarea
              id="whatIsNeeded"
              placeholder="Describe the specific use case or problem you want to address with this circle. What topics, tools, or skills are you interested in exploring?"
              value={formData.whatIsNeeded}
              onChange={(e) =>
                handleInputChange("whatIsNeeded", e.target.value)
              }
              rows={4}
              required
              className="border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 transition-all duration-200 resize-none"
            />
          </div>

          {/* AI Usage Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Wrench className="h-4 w-4 text-white" />
              </div>
              <Label className="text-base font-semibold text-gray-900">
                How would you like to use AI in your work?
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Select
              value={formData.aiUsage}
              onValueChange={(value) => handleInputChange("aiUsage", value)}
            >
              <SelectTrigger className="h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 w-full">
                <SelectValue placeholder="Select how you'd like to use AI" />
              </SelectTrigger>
              <SelectContent>
                {aiUsageOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="py-3"
                  >
                    <span>{option.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* AI Hours Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <Label className="text-base font-semibold text-gray-900">
                On average, how many hours per week do you use AI tools (e.g.,
                ChatGPT, Copilot, Midjourney)?
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Select
              value={formData.aiHours}
              onValueChange={(value) => handleInputChange("aiHours", value)}
            >
              <SelectTrigger className="h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 w-full">
                <SelectValue placeholder="Select your weekly AI tool usage" />
              </SelectTrigger>
              <SelectContent>
                {aiHoursOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="py-3"
                  >
                    <span>{option.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Training Start Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <Label className="text-base font-semibold text-gray-900">
                When would you like to begin your training?
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              We typically expect a commitment of 2 hrs/week for 4 weeks.
            </p>
            <Select
              value={formData.trainingStart}
              onValueChange={(value) =>
                handleInputChange("trainingStart", value)
              }
            >
              <SelectTrigger className="h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 w-full">
                <SelectValue placeholder="Select your preferred start month" />
              </SelectTrigger>
              <SelectContent>
                {trainingStartOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="py-3"
                  >
                    <span>{option.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Training Preference Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 min-w-8 min-h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-4 w-4 text-white" />
              </div>
              <Label className="text-base font-semibold text-gray-900">
                Do you prefer remote or on-site training?
              </Label>
              <span className="text-pink-500">*</span>
            </div>
            <Select
              value={formData.trainingPreference}
              onValueChange={(value) =>
                handleInputChange("trainingPreference", value)
              }
            >
              <SelectTrigger className="h-12 border-gray-200 focus:border-pink-500 focus:ring-pink-500/20 w-full">
                <SelectValue placeholder="Select your training preference" />
              </SelectTrigger>
              <SelectContent>
                {trainingPreferenceOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="py-3"
                  >
                    <span>{option.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className={cn(
                "w-full h-14 text-base font-semibold rounded-xl transition-all duration-300 transform",
                isFormValid
                  ? "bg-pink-600 hover:bg-pink-700 text-white shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Request...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>Submit Request</span>
                </div>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

type SuccessCardProps = {
  email: string;
  onGoHome: () => void;
};

function SuccessCard({ email, onGoHome }: SuccessCardProps) {
  console.log(email);
  return (
    <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50" />
      <CardHeader className="relative text-center pb-4">
        <div className="mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4 w-20 h-20 min-w-20 min-h-20 flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
          <CheckCircle2 className="h-10 w-10 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
          Request Submitted Successfully!
        </CardTitle>
        <CardDescription className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          We&apos;ve received your request and will review it shortly.
        </CardDescription>
      </CardHeader>
      <CardContent className="relative pt-2 pb-6">
        <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-8 mb-8 border border-blue-100">
          <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
            <Zap className="h-5 w-5 mr-2 text-yellow-500" />
            Here&apos;s what happens next:
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 min-w-6 min-h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <span className="font-medium">Quick Review</span>
                <p className="text-sm text-gray-600">
                  Our team will review your request within 1-2 business days
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 min-w-6 min-h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <span className="font-medium">Get Matched</span>
                <p className="text-sm text-gray-600">
                  We&apos;ll match you with a training cohort that aligns with
                  your goals and needs
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 min-w-6 min-h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <span className="font-medium">Welcome Aboard!</span>
                <p className="text-sm text-gray-600">
                  You&apos;ll receive an invitation to join your training cohort
                  and start learning
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center bg-yellow-50/80 rounded-xl p-6 border border-yellow-200">
          <p className="text-gray-700 font-medium mb-2">
            💡 Pro tip: While you wait, why not take our AI assessment?
          </p>
          <p className="text-sm text-gray-600">
            It&apos;ll help us understand your current level and personalize
            your experience even better!
          </p>
        </div>
        <CardFooter className="pt-4">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <Button
              onClick={onGoHome}
              variant="outline"
              className="flex-1 h-12 border-gray-200 hover:bg-gray-50 transition-all duration-200 bg-transparent"
            >
              <Home className="h-4 w-4 mr-2" />
              Go to Home
            </Button>
            <Button
              asChild
              className="flex-1 h-12 bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href={CAREER_ASSESSMENT_URL} target="_blank">
                <BrainCircuit className="h-4 w-4 mr-2" />
                Take AI Assessment
              </Link>
            </Button>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
