import TopicCard from "@/components/topic-card";
import { COMMUNITY_URL } from "@/consts";
import { Book, Briefcase, Lightbulb, Star, TrendingUp } from "lucide-react";

export default function Home() {
  const aiCircles = [
    {
      icon: <Book className="h-5 w-5 text-amber-600" />,
      title: "High School Student",
      description:
        "Get started with AI in a fun and accessible way. Learn how AI is used in daily life, explore cool projects, and build future-ready skills — no experience needed.",
      expertise: "Curious Learners / Beginners",
      topic_link: COMMUNITY_URL + "/circles/?roles=1",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-amber-600" />,
      title: "Academia – Researcher / Educator",
      description:
        "Explore AI’s impact on research and pedagogy. Learn how to use AI in the classroom or lab, design intelligent systems, and contribute to cutting-edge developments.",
      expertise: "Intermediate / Expert",
      topic_link: COMMUNITY_URL + "/circles/?roles=2",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-amber-600" />,
      title: "Business Professional",
      description:
        "Leverage AI to solve real business problems. Discover tools that automate workflows, enhance decision-making, and improve productivity in your role or department.",
      expertise: "Beginner / Intermediate",
      topic_link: COMMUNITY_URL + "/circles/?roles=3",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-amber-600" />,
      title: "Entrepreneur",
      description:
        "Turn AI ideas into scalable startups. Learn how to validate AI-powered business models, build MVPs, attract investors, and grow with cutting-edge tools.",
      expertise: "Intermediate / Advanced",
      topic_link: COMMUNITY_URL + "/circles/?roles=4",
    },
    {
      icon: <Star className="h-5 w-5 text-amber-600" />,
      title: "Organization Leader",
      description:
        "Shape your organization's AI strategy. Gain insight into AI trends, governance, responsible innovation, and how to lead adoption across teams and industries.",
      expertise: "Advanced / Expert",
      topic_link: COMMUNITY_URL + "/circles/?roles=5",
    },
  ];
  

  return (
    <main className="container mx-auto max-w-7xl px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Find <span className="text-pink-600"> AI Circles</span> by Persona
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore AI Circles tailored for different personas. Whether
            you&apos;re a student, professional, or leader, find the right
            circle to enhance your AI journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCircles.map((circle, index) => (
            <TopicCard key={index} {...circle} />
          ))}
        </div>
      </section>
    </main>
  );
}
