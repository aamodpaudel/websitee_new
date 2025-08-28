import React from "react";
import {
  Brain,
  Eye,
  ChevronRight,
  ArrowDown,
  Mic,
  Terminal,
  Pen,
  Cloud,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FlagshipProjects = () => {
  const pinkTheme = {
    primary: "bg-pink-600",
    light: "bg-pink-50",
    border: "border-pink-500",
    text: "text-pink-500",
    darkText: "text-pink-700",
    hoverBg: "hover:bg-pink-600",
    hoverText: "hover:text-white",
  };
  type ProjectType = {
    level: string;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    focus: string;
    goal: string;
    row: number;
    position: number;
    url: string;
    isDefault?: boolean;
  };
  const projects = [
    {
      level: "Prerequisite",
      icon: Terminal,
      title: "Python for AI",
      subtitle: "Rock-solid programming foundation before diving into AI",
      focus: "Core Python concepts, data structures, control flow, NumPy",
      goal: "Write clean, functional Python code for any AI programming challenge",
      row: 0,
      position: 0,
      url: "https://gps.careerlink.ai/circle/python-for-ai-learn-the-language-of-ai-from-scratch-287cf15b13",
    },
    {
      level: "Beginner",
      icon: Pen,
      title: "AI Co-Writer",
      subtitle: "Interactive storytelling game with creative AI partnership",
      focus: "Generative Text AI API (Hugging Face or LLM API)",
      goal: "Make successful API calls to real AI models and use generated output",
      row: 0,
      position: 1,
      url: "https://gps.careerlink.ai/circle/ai-co-writer-interactive-storytelling-game-with-creative-ai-implementation-b29c2e027c",
    },
    {
      level: "Beginner",
      icon: Mic,
      title: "Public Speaking Assistant",
      subtitle: "AI-powered feedback system for speech improvement",
      focus: "Speech-to-Text API, Speech Emotion Recognition, NLP analysis",
      goal: "Chain multiple AI APIs to build simple functional applications",
      row: 0,
      position: 2,
      url: "https://gps.careerlink.ai/circle/public-speaking-assistant-ai-powered-feedback-system-for-speech-improvement-38710b6b82",
    },
    {
      level: "Intermediate",
      icon: Camera,
      title: "Live Gesture AI Game",
      subtitle: "Real-time Rock Paper Scissors using Computer Vision",
      focus: "OpenCV, MediaPipe, Real-time Video Processing",
      goal: "Build real-time computer vision applications with advanced AI models",
      row: 1,
      position: 0,
      url: "https://gps.careerlink.ai/circle/live-gesture-ai-game-real-time-rock-paper-scissors-using-computer-vision-a3eba097c7",
    },
    {
      level: "Intermediate",
      icon: Cloud,
      title: "Landslide Detection",
      subtitle: "Analyzing satellite images for environmental monitoring",
      focus: "Transfer Learning, Satellite Image Analysis, Basic CV Model",
      goal: "Apply pre-trained models to classify satellite images for environmental impact",
      row: 1,
      position: 1,
      url: "https://gps.careerlink.ai/circle/landslide-detection-analyzing-satellite-images-for-environmental-monitoring-4f9ffd6c58",
    },
    {
      level: "Advanced",
      icon: Brain,
      title: "Parkinson's Prediction",
      subtitle: "Analyzing handwritten spirals for early diagnosis",
      focus: "Transfer Learning, Medical Image Analysis, Pre-trained Model",
      goal: "Apply AI to solve real medical challenges with transfer learning",
      row: 2,
      position: 0,
      url: "https://gps.careerlink.ai/circle/parkinsons-detection-analyzing-handwritten-spirals-for-early-diagnosis-9679c144b6",
    },
    {
      level: "Advanced",
      icon: Eye,
      title: "Pet Sentiment Predictor",
      subtitle: "Using CNN & ResNet18 to predict pet emotional states",
      focus: "Custom CNN Architecture, ResNet18, Image Classification",
      goal: "Design and train custom neural networks for specialized tasks",
      row: 2,
      position: 1,
      url: "https://gps.careerlink.ai/circle/pet-sentiment-predictor-using-cnn-resnet18-to-predict-pet-emotional-states-08a087a1f9",
    },
  ];
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.row]) acc[project.row] = [];
    acc[project.row][project.position] = project;
    return acc;
  }, {} as Record<number, ProjectType[]>);
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-left md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 max-w-3xl mx-auto">
            AI Learning Progression:{" "}
            <span className="text-pink-600">From Beginner to Advanced</span>
          </h2>
          <p className="max-w-3xl text-left md:text-center text-muted-foreground text-lg md:text-xl mb-8 mx-auto">
            Structured progression from Python foundations to advanced AI
            applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div
              className={`bg-slate-100 text-slate-700 px-6 py-2 rounded-md text-sm font-semibold`}
            >
              Beginner: API Integration & NLP
            </div>
            <div
              className={`bg-slate-100 text-slate-700  px-6 py-2 rounded-md text-sm font-semibold`}
            >
              Intermediate: Computer Vision & Transfer Learning
            </div>
            <div
              className={`bg-slate-100 text-slate-700 px-6 py-2 rounded-md text-sm font-semibold`}
            >
              Advanced: Medical AI & CNNs
            </div>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 text-xl">
            Our 4-week intensive program focuses on one project. Not sure about
            where to begin? Contact us directly or choose any level!
          </p>
        </div>

        {/* Flowchart Layout */}
        <div className="space-y-8">
          {Object.entries(groupedProjects).map(([rowIndex, rowProjects]) => (
            <div key={rowIndex} className="space-y-6">
              {/* Row of Cards */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                {rowProjects.map((project, index) => (
                  <React.Fragment key={project.level}>
                    <div
                      className={`relative group animate-fade-in ${
                        project.isDefault ? " z-10" : ""
                      } flex-1 max-w-sm`}
                      style={{
                        animationDelay: `${
                          Number.parseInt(rowIndex) * 0.3 + index * 0.2
                        }s`,
                      }}
                    >
                      <div
                        className={`w-full h-96 bg-white rounded-md ${
                          project.isDefault
                            ? `border-l-4 ${pinkTheme.border}`
                            : "border border-gray-200"
                        } p-6  transition-all duration-300  cursor-pointer flex flex-col`}
                      >
                        <div
                          className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${pinkTheme.primary} text-white px-4 py-1 rounded-md text-sm font-semibold`}
                        >
                          {project.level}
                        </div>

                        <div
                          className={`w-16 h-16 ${pinkTheme.light} rounded-md flex items-center justify-center mb-4`}
                        >
                          <project.icon
                            className={`w-6 h-6 ${pinkTheme.text}`}
                          />
                        </div>

                        <div
                          className={`text-sm font-semibold ${pinkTheme.text} mb-2`}
                        >
                          {project.level}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                          {project.subtitle}
                        </p>

                        <div className="space-y-2 text-xs flex-grow">
                          <div>
                            <span
                              className={`font-semibold ${pinkTheme.darkText}`}
                            >
                              Focus:
                            </span>
                            <p className="text-gray-600">{project.focus}</p>
                          </div>
                          <div>
                            <span
                              className={`font-semibold ${pinkTheme.darkText}`}
                            >
                              Goal:
                            </span>
                            <p className="text-gray-600">{project.goal}</p>
                          </div>
                        </div>

                        <div className="mt-auto pt-3">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              className={`w-full border ${pinkTheme.border} bg-white ${pinkTheme.text} ${pinkTheme.hoverBg} ${pinkTheme.hoverText} rounded-md text-sm font-semibold py-1 h-8 transition-colors duration-300`}
                            >
                              Learn More
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Horizontal Arrow between cards in the same row */}
                    {index < rowProjects.length - 1 && (
                      <div className="hidden lg:block">
                        <ChevronRight className={`w-8 h-8 ${pinkTheme.text}`} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Vertical Arrow to next row */}
              {Number.parseInt(rowIndex) <
                Object.keys(groupedProjects).length - 1 && (
                <div className="flex justify-center">
                  <ArrowDown className={`w-8 h-8 ${pinkTheme.text}`} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center bg-pink-50 p-8 rounded-2xl`}>
          <h3 className="text-2xl font-bold mb-4 text-pink-600">
            Complete AI Learning Pathway
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-700">
            Our structured beginner-to-advanced progression takes you from
            Python foundations to advanced AI applications. The 4-week intensive
            focuses on intermediate projects by default, where you&apos;ll build
            real-time AI oriented games and landslide detection tools using
            technologies like OpenCV, MediaPipe, & other CV models.
          </p>
        </div>
      </div>
    </section>
  );
};
export default FlagshipProjects;
