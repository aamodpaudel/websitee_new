import React from 'react';
import { GraduationCap, Zap, Heart } from 'lucide-react';
const WhyAISection = () => {
  const reasons = [{
    icon: GraduationCap,
    title: "College Advantage",
    description: "AI projects in your portfolio make you stand out in competitive college applications. Show admissions officers you're ahead of the curve."
  }, {
    icon: Zap,
    title: "Future-Proof Skills",
    description: "Every industry is being transformed by AI. From healthcare to entertainment, AI skills open doors to unlimited career opportunities."
  }, {
    icon: Heart,
    title: "Make Real Impact",
    description: "Build AI solutions that solve real-world problems and help people. Create technology that makes a meaningful difference in society."
  }];
  return (
    <section className="py-20 px-4 bg-pink-50 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-left md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 max-w-3xl mx-auto">
            Why AI Skills Are Essential for{" "}
            <span className="text-pink-600 dark:text-pink-400 relative">
              High Schoolers
            </span>
          </h2>
          <p className="max-w-3xl text-left md:text-center text-muted-foreground text-lg md:text-xl mb-16 mx-auto">
            AI is not the future, it&apos;s the present. High School Students
            with AI literacy have a massive advantage in college admissions,
            scholarships, and future careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-pink-700">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyAISection;