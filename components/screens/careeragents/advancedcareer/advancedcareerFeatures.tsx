import { Cpu, Briefcase, Users } from "lucide-react";
import { CareerFeatureSection } from "../careerStagefeatures";

const featuresData = [
  {
    id: 1,
    title: "Executive Leadership",
    description:
      "Step into leadership roles, shape company strategies, and mentor the next generation of leaders.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Users className="text-pink-600" />,
    features: [
      "C-suite & boardroom leadership programs",
      "Executive decision-making & strategy",
      "Mentorship & legacy-building initiatives",
    ],
  },
  {
    id: 2,
    title: "Giving Back & Impact",
    description:
      "Make a lasting impact by mentoring, investing in future talent, and supporting social initiatives.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Briefcase className="text-pink-600" />,
    features: [
      "Philanthropy & social impact programs",
      "Industry mentorship & advisory roles",
      "Nonprofit leadership & board opportunities",
    ],
  },
  {
    id: 3,
    title: "AI & Innovation Leadership",
    description:
      "Leverage AI to drive business transformation, foster innovation, and pioneer industry advancements.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: <Cpu className="text-pink-600" />,
    features: [
      "AI-powered enterprise solutions",
      "Corporate innovation & startup investment",
      "High-impact technology leadership",
    ],
  },
];

export default function AdvancedCareerFeatureSection() {
  return (
    <CareerFeatureSection
      featuresData={featuresData}
      career_stage="Advanced Career"
      description="CareerGPS empowers senior professionals and executives with leadership mastery, impactful mentorship opportunities, and AI-driven business transformation strategies."
    />
  );
}
