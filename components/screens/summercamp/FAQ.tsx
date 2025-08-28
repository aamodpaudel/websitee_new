import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer:
        "No prior coding experience is required! Our program is designed to take you from zero to functional Python programming. We start with the absolute basics and build up your skills progressively. Our experienced instructors will guide you through each step, ensuring no one gets left behind.",
    },
    {
      question: "How will this help with college applications?",
      answer:
        "AI projects in your portfolio demonstrate advanced technical skills that set you apart from other applicants. College admissions officers are looking for students who show initiative and passion for emerging technologies. Our program provides you with real, documented projects that showcase your ability to work with cutting-edge technology and solve real-world problems.",
    },
    {
      question: "Will I get support after the camp ends?",
      answer:
        "Yes! All graduates get access to our alumni network, ongoing mentorship opportunities, and continued learning resources. We also provide guidance on next steps in your AI journey, including recommendations for advanced courses and internship opportunities.",
    },
    {
      question: "Can I work on a custom project idea?",
      answer:
        "While the curriculum focuses on one flagship project by default to ensure comprehensive learning, we encourage creativity and can help you adapt the concepts to your interests. Advanced students may have opportunities to explore additional project ideas during the program.",
    },
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
            Frequently{" "}
            <span className="text-pink-600 dark:text-pink-400">Asked</span>{" "}
            Questions
          </h2>
          <p className="md:text-center text-muted-foreground md:text-xl mb-16 max-w-3xl mx-auto">
            Have questions about our Summer Camp? Here are some common queries
            we receive from students and parents.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-pink-100 px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-pink-600 hover:text-pink-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
