import { Cpu, Briefcase, Users } from "lucide-react";
import { CareerFeatureSection } from "../careerStagefeatures";

const featuresData = [
  {
    id: 1,
    title: "Leadership Development",
    description:
      "Enhance your leadership skills, mentor others, and take on strategic roles to drive business success.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Users className="text-pink-600" />,
    features: [
      "Executive coaching & mentorship",
      "Leadership & management training",
      "Strategic decision-making workshops",
    ],
  },
  {
    id: 2,
    title: "Career Growth & Transition",
    description:
      "Take your career to the next level with executive training, networking, and career transition resources.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Briefcase className="text-pink-600" />,
    features: [
      "Personalized career coaching",
      "Advanced skill-building programs",
      "Opportunities for lateral or upward moves",
    ],
  },
  {
    id: 3,
    title: "AI & Innovation",
    description:
      "Leverage AI to drive innovation, optimize business processes, and create groundbreaking solutions.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Cpu className="text-pink-600" />,
    features: [
      "AI-driven business strategy workshops",
      "Corporate innovation programs",
      "Entrepreneurship & startup incubation",
    ],
  },
];

export default function MidCareerFeatureSection() {
  return (
    <CareerFeatureSection
      featuresData={featuresData}
      career_stage="Mid-Career"
      description="CareerGPS empowers mid-career professionals with leadership training, career growth resources, and AI-driven innovation strategies to excel in their fields."
    />
  );
}
