import { Phone, BookOpen, Settings } from "lucide-react";
import { CareerFeatureSection } from "../careerStagefeatures";


const featuresData = [
  {
    id: 1,
    title: "Career Exploration",
    description:
      "Discover career paths that match your interests, strengths, and values through interactive assessments and real-world insights.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Phone className="text-pink-600" />,
    features: [
      "Personalized career recommendations",
      "Industry expert interviews",
      "Day-in-the-life simulations",
    ],
  },
  {
    id: 2,
    title: "College Planning",
    description:
      "Navigate the college application process with confidence using our comprehensive planning tools and resources.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <BookOpen className="text-pink-600" />,
    features: [
      "College match finder",
      "Application timeline builder",
      "Scholarship opportunity alerts",
    ],
  },
  {
    id: 3,
    title: "Skill Development",
    description:
      "Build essential skills for future success through guided learning paths and practical exercises.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Settings className="text-pink-600" />,
    features: [
      "Personalized skill roadmaps",
      "Interactive learning modules",
      "Progress tracking dashboard",
    ],
  },
];
export default function HighSchoolFeatureSection() {
  return (
    <CareerFeatureSection
      featuresData={featuresData}
      career_stage="High School"
      description="CareerGPS helps you navigate the critical high school years with personalized guidance, resources, and tools designed specifically for your journey."
    />
  );
}
