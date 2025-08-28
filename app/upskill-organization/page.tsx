"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, GraduationCap, Zap, Award, Lightbulb, Rocket } from "lucide-react";
import Link from "next/link";

export default function UpskillOrganizationPage() {
  const services = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Workforce Upskilling",
      description: "Tailored programs that build practical AI capability across roles."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "AI Strategy & Investment",
      description: "Roadmaps, governance, and ROI models to guide adoption."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Solution Development & Deployment",
      description: "From prototypes to production—secure, compliant, and integrated."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Accelerated AI Adoption",
      description: "Fast-track your organization's AI transformation with proven frameworks."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "Work with certified AI professionals and industry experts."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Measurable ROI",
      description: "Track progress and demonstrate clear business value from AI initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-600 hover:text-pink-600 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex gap-4">
            <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
              Learn More
            </Button>
                         <Button className="bg-pink-600 text-white hover:bg-pink-700">
               Schedule an appointment
             </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empower Your Organization with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From workforce upskilling to AI strategy and solution deployment, CareerlinkAI helps organizations thrive in the AI era.
            </p>
            <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-3">
              Schedule an appointment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                             <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.2, delay: index * 0.05 }}
                 viewport={{ once: true, amount: 0.5 }}
                 className="bg-white p-8 rounded-xl shadow-lg"
               >
                <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose CareerlinkAI?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
                             Let&apos;s discuss how AI can drive growth and innovation in your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-3">
                Schedule an appointment
              </Button>
              <Button variant="outline" size="lg" className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
