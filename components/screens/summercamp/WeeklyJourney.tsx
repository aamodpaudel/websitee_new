import React from "react";
import { Code, Brain, Award } from "lucide-react";

const WeeklyJourney = () => {
  const weeks = [
    {
      week: "Week 1",
      title: "AI Foundations & Python Mastery",
      description:
        "Build solid conceptual and coding foundation - from zero to functional Python",
      sessions: [
        {
          title: "Session 1: The AI Universe (2 hours)",
          topics: [
            "What is Intelligence? Artificial vs. Human - defining intelligence beyond technicalities",
            "The AI Family: Machine Learning & Deep Learning with real-world analogies",
            "Three Flavors of Learning: Supervised, Unsupervised, Reinforcement",
            "AI Ethics & Responsible Innovation - bias prevention and fairness principles",
          ],
          activities: [
            "Interactive poll: 'Where have you seen AI today?' with pattern recognition discussion",
            "Visual mapping: Drag-and-drop real examples into AI/ML/DL categories",
            "'Be the AI' game: Experience different learning types hands-on",
          ],
        },
        {
          title: "Session 2: Python Power-Up (2 hours)",
          topics: [
            "First Steps: Setting up your AI development environment",
            "Intro to Google Colab: Cloud-based Python notebooks",
            "Python fundamentals: Variables, loops, functions, and data structures",
            "Data manipulation with NumPy and Pandas",
          ],
          activities: [
            "'Mad Libs' in Python: Creative variable and print() practice",
            "Number guessing game: Interactive conditionals and loops",
            "First data visualization: NumPy arrays plotted with Matplotlib",
          ],
        },
      ],
      homework:
        "Complete curated Python challenges on HackerRank • Set up GitHub account",
      icon: Code,
    },
    {
      week: "Week 2",
      title: "Project-Specific Foundations",
      description:
        "Master the core concepts and tools needed for your chosen project",
      sessions: [
        {
          title: "Session 3: Project-Specific Tools (2 hours)",
          topics: [
            "Introduction to project-specific libraries and frameworks",
            "Setting up development environment for your project",
            "Understanding project requirements and success metrics",
            "Data collection and preprocessing techniques",
          ],
          activities: [
            "Set up project environment and required dependencies",
            "Explore and understand project dataset",
            "Create initial project structure and documentation",
          ],
        },
        {
          title: "Session 4: Project Implementation - Part 1 (2 hours)",
          topics: [
            "Core algorithm implementation",
            "Data processing pipeline development",
            "Initial model training and testing",
            "Performance metrics and evaluation",
          ],
          activities: [
            "Implement core project functionality",
            "Build basic data processing pipeline",
            "Train and test initial model version",
          ],
        },
      ],
      homework:
        "Polish initial implementation • Document progress and challenges",
      icon: Brain,
    },
    {
      week: "Week 3",
      title: "Advanced Implementation",
      description:
        "Enhance your project with advanced features and optimizations",
      sessions: [
        {
          title: "Session 5: Advanced Features (2 hours)",
          topics: [
            "Implementing advanced project features",
            "Performance optimization techniques",
            "Error handling and edge cases",
            "User interface development",
          ],
          activities: [
            "Add advanced features to your project",
            "Optimize performance and resource usage",
            "Implement robust error handling",
          ],
        },
        {
          title: "Session 6: Project Implementation - Part 2 (2 hours)",
          topics: [
            "Final model training and tuning",
            "User interface refinement",
            "Integration testing",
            "Documentation and code review",
          ],
          activities: [
            "Complete project implementation",
            "Refine user interface and experience",
            "Conduct thorough testing and debugging",
          ],
        },
      ],
      homework:
        "Finalize project implementation • Prepare comprehensive documentation",
      icon: Brain,
    },
    {
      week: "Week 4",
      title: "Project Polish & Professional Showcase",
      description: "Perfect your project and present to industry professionals",
      sessions: [
        {
          title: "Session 7: Professional Development (2 hours)",
          topics: [
            "Code quality and documentation",
            "Project presentation skills",
            "GitHub portfolio preparation",
            "AI career pathways and next steps",
          ],
          activities: [
            "Create comprehensive project documentation",
            "Build project showcase website",
            "Practice technical presentation",
          ],
        },
        {
          title: "Session 8: Innovator's Showcase & Graduation (2 hours)",
          topics: [
            "Live project demonstration",
            "Technical Q&A session",
            "Peer review and feedback",
            "Certification and next steps",
          ],
          activities: [
            "15-minute project presentation",
            "Industry professional panel discussion",
            "Certificate ceremony and portfolio finalization",
          ],
        },
      ],
      homework:
        "Final portfolio preparation • Update LinkedIn and GitHub profiles",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-left md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 max-w-3xl mx-auto">
            Your{" "}
            <span className="text-pink-600 dark:text-pink-400 relative">
              4-Week{" "}
            </span>
            Journey
          </h2>
          <p className="max-w-3xl text-left md:text-center text-muted-foreground text-lg md:text-xl mb-16 mx-auto">
            Our 4-week intensive program focuses on one project. Not sure about
            where to begin? Contact us directly or choose any level!
          </p>
        </div>

        <div className="grid gap-8">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden"
            >
              <div
                className={`
                  bg-pink-600
            p-6 text-white`}
              >
                <div className="flex items-center gap-4">
                  <week.icon className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">{week.week}</h3>
                    <h4 className="text-xl font-semibold">{week.title}</h4>
                    <p className="text-white/90">{week.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  {week.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="border-t border-pink-100 pt-6"
                    >
                      <h5 className="text-lg font-semibold text-slate-800 mb-4">
                        {session.title}
                      </h5>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-semibold text-pink-600 mb-2">
                            Core Topics:
                          </h6>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {session.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-pink-600 mb-2">
                            Hands-on Activities:
                          </h6>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {session.activities.map(
                              (activity, activityIndex) => (
                                <li key={activityIndex}>{activity}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-pink-100">
                  <h6 className="font-semibold text-pink-600 mb-2">
                    📚 Homework & Practice:
                  </h6>
                  <p className="text-gray-600">{week.homework}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyJourney;
