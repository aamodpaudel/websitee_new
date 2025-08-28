import { Cpu, Briefcase, Users } from "lucide-react";
import { CareerFeatureSection } from "../careerStagefeatures";

const featuresData = [
  {
    id: 1,
    title: "Research Collaboration",
    description:
      "Engage in collaborative research projects, connect with peers and mentors, and contribute to groundbreaking discoveries.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Users className="text-pink-600" />,
    features: [
      "Join research communities",
      "Access mentorship opportunities",
      "Publish and showcase your work",
    ],
  },
  {
    id: 2,
    title: "Job Readiness",
    description:
      "Prepare for the workforce with career-focused training, hands-on experience, and expert guidance.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Briefcase className="text-pink-600" />,
    features: [
      "Resume & interview coaching",
      "Internship & job matching",
      "Professional networking events",
    ],
  },
  {
    id: 3,
    title: "AI & Innovation",
    description:
      "Master essential AI skills, explore entrepreneurship, and drive innovation through cutting-edge projects.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Cpu className="text-pink-600" />,
    features: [
      "Hands-on AI workshops",
      "Startup incubation support",
      "Innovation challenges & hackathons",
    ],
  },
];

export default function CollegeFeatureSection() {
  return (
    <CareerFeatureSection
      featuresData={featuresData}
      career_stage="College"
      description="CareerGPS empowers college students with the skills, resources, and opportunities needed to excel in research, job readiness, and AI-driven innovation."
    />
  );
}
