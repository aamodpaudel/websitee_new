import { Check } from "lucide-react";

const philosophyData = [
  {
    title: "Define Your Goals",
    description: "Because knowing where you're headed is step one.",
  },
  {
    title: "Understand Your Position",
    description: "Because every journey starts from where you are.",
  },
  {
    title: "Navigate The Steps",
    description:
      "Whether it's picking the right courses, preparing for college applications, finding mentors, or unlocking career opportunities.",
  },
];

export default function Philosophy() {
  return (
    <section className="px-6 py-16 md:py-24 bg-pink-50 rounded-2xl max-w-6xl mx-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-pink-600">CareerGPS</span> Philosophy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Building a career is like traveling to a destination with a purpose.
            You wouldn&apos;t set off on a journey without a map or GPS—so why
            should your career be any different?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyData.map((item, index) => (
            <PhilosophyCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const PhilosophyCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col items-center text-center">
      <div className="bg-pink-500 rounded-full p-3 mb-4">
        <Check className="h-6 w-6 text-white" />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
