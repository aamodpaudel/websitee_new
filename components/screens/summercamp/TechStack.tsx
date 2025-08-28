import React from 'react';
import { Terminal, Cpu, Database, Cloud } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      title: "Programming",
      technologies: ["Python 3.9+", "Jupyter Notebooks", "Google Colab Pro", "GitHub"],
      color: "from-pink-500 to-purple-600",
      icon: Terminal
    },
    {
      title: "AI/ML Libraries",
      technologies: ["PyTorch 2.x", "torchvision", "Scikit-learn", "OpenCV"],
      color: "from-purple-500 to-pink-600",
      icon: Cpu
    },
    {
      title: "Data Science",
      technologies: ["NumPy", "Matplotlib", "Seaborn", "PIL/Pillow"],
      color: "from-pink-600 to-purple-500",
      icon: Database
    },
    {
      title: "Deployment",
      technologies: ["Streamlit", "Gradio", "Flask", "Docker"],
      color: "from-purple-600 to-pink-500",
      icon: Cloud
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
            Professional Tech Stack
          </h2>
          <p className="text-xl text-gray-600">
            Industry-standard tools and technologies you&apos;ll master
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-gray-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
