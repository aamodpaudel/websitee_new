import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Lightbulb,
  Users,
} from "lucide-react";

const personas = [
  {
    id: 1,
    title: "High School Student",
    icon: GraduationCap,
    description:
      "Exploring career paths and building foundational skills for future success",
    features: [
      "Career exploration tools",
      "Skill development resources",
      "Mentorship opportunities",
      "College preparation guidance",
    ],
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    title: "Academia - Researcher/Educator",
    icon: BookOpen,
    description:
      "Advancing knowledge through research and shaping minds through education",
    features: [
      "Research collaboration network",
      "Academic publishing support",
      "Grant opportunity alerts",
      "Educational resource sharing",
    ],
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    title: "Business - Professional",
    icon: Briefcase,
    description:
      "Driving business growth and excellence in corporate environments",
    features: [
      "Professional networking",
      "Industry insights & trends",
      "Career advancement tools",
      "Skills certification programs",
    ],
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 4,
    title: "Entrepreneur",
    icon: Lightbulb,
    description:
      "Building innovative solutions and creating value through entrepreneurship",
    features: [
      "Startup ecosystem access",
      "Investor connection platform",
      "Business development resources",
      "Innovation workshops",
    ],
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-800",
  },
  {
    id: 5,
    title: "Organization Leader",
    icon: Users,
    description:
      "Leading teams and organizations towards strategic goals and sustainable growth",
    features: [
      "Leadership development programs",
      "Strategic planning tools",
      "Executive networking events",
      "Organizational best practices",
    ],
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
    badgeColor: "bg-red-100 text-red-800",
  },
];

export default function PersonaSection() {
  return (
    <section className="w-full py-2 md:py-4 lg:py-6 -mt-48 md:-mt-72 lg:-mt-96">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            Who We Help
          </h2>
          <p className="text-gray-600 md:text-xl py-2 md:mb-16 max-w-2xl mx-auto text-lg">
            Tailored resources & tools for every step of your professional journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3 mb-6 items-stretch">
            {personas.slice(0, 3).map((persona) => {
              const IconComponent = persona.icon;
              return (
                <div
                  key={persona.id}
                  className={`${persona.color} h-full flex flex-col transition-shadow duration-300 rounded-lg border`}
                >
                  <div className="text-center pb-4 p-6 flex-grow flex flex-col">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-white shadow-sm w-fit">
                      <IconComponent
                        className={`h-8 w-8 ${persona.iconColor}`}
                      />
                    </div>
                    <div
                      className={`${persona.badgeColor} mb-2 w-fit mx-auto px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      Persona {persona.id}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      {persona.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {persona.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${persona.iconColor.replace(
                                "text-",
                                "bg-"
                              )} mt-2 mr-2 flex-shrink-0`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto items-stretch">
            {personas.slice(3, 5).map((persona) => {
              const IconComponent = persona.icon;
              return (
                <div
                  key={persona.id}
                  className={`${persona.color} h-full flex flex-col transition-shadow duration-300 rounded-lg border`}
                >
                  <div className="text-center pb-4 p-6 flex-grow flex flex-col">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-white shadow-sm w-fit">
                      <IconComponent
                        className={`h-8 w-8 ${persona.iconColor}`}
                      />
                    </div>
                    <div
                      className={`${persona.badgeColor} mb-2 w-fit mx-auto px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      Persona {persona.id}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{persona.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      {persona.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {persona.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${persona.iconColor.replace(
                                "text-",
                                "bg-"
                              )} mt-2 mr-2 flex-shrink-0`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
