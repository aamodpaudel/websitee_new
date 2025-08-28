import { Check } from "lucide-react";

export function CareerFeatureSection({
  featuresData,
  career_stage,
  description,
}: {
  career_stage: string;
  description: string;
  featuresData: {
    id: number;
    title: string;
    description: string;
    iconBgColor: string;
    iconColor: string;
    icon: React.ReactNode;
    features: string[];
  }[];
}) {
  return (
    <section className="px-6 py-16 md:py-24 bg-pink-50 rounded-2xl max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 max-w-4xl mx-auto">
            Your Complete {career_stage}{" "}
            <span className="text-pink-600 dark:text-pink-400">Success </span>
            Platform
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`h-12 w-12 ${feature.iconBgColor} rounded-lg flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.features.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className={`h-5 w-5 ${feature.iconColor} mr-2`} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
