import { Cpu, Briefcase, Users } from "lucide-react";
import { CareerFeatureSection } from "../careerStagefeatures";

const featuresData = [
  {
    id: 1,
    title: "Professional Networking",
    description:
      "Expand your professional network, connect with industry experts, and build meaningful relationships to advance your career.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Users className="text-pink-600" />,
    features: [
      "Join exclusive networking groups",
      "Access mentorship programs",
      "Attend industry conferences and events",
    ],
  },
  {
    id: 2,
    title: "Career Advancement",
    description:
      "Enhance your career prospects with skill-building programs, expert coaching, and real-world experience.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Briefcase className="text-pink-600" />,
    features: [
      "Resume & interview preparation",
      "Career transition support",
      "Leadership & management training",
    ],
  },
  {
    id: 3,
    title: "AI & Entrepreneurship",
    description:
      "Master essential AI skills, explore startup opportunities, and drive innovation through cutting-edge projects.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Cpu className="text-pink-600" />,
    features: [
      "Advanced AI & automation workshops",
      "Startup incubation support",
      "Innovation challenges & hackathons",
    ],
  },
];

export default function EarlyCareerFeatureSection() {
  return (
    <CareerFeatureSection
      featuresData={featuresData}
      career_stage="Early Career"
      description="CareerGPS empowers early career professionals with the skills, connections, and opportunities needed to excel in networking, career advancement, and AI-driven innovation."
    />
  );
}
