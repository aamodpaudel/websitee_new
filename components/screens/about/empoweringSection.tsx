import Image from "next/image";

interface SectionProps {
  title: string;
  highlightedTitle: string;
  text: string[];
  imageSrc: string;
  altText: string;
  reverseOrder?: boolean;
}

const Section = ({
  title,
  highlightedTitle,
  text,
  imageSrc,
  altText,
  reverseOrder = false,
}: SectionProps) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>

      <div className={reverseOrder ? "order-1 lg:order-2" : "order-1"}>
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className={reverseOrder ? "order-2 lg:order-1" : "order-2"}>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {title} <span className="text-pink-600">{highlightedTitle}</span>
          </h2>

          <div className="space-y-4">
            {text.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EmpoweringSection() {
  return (
    <section className="py-12 md:py-16 container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <Section
          title="Empowering"
          highlightedTitle="Action-Takers"
          text={[
            "At CareerLink, we believe that success doesn't come from luck - it comes from taking action. Even the smallest step, taken consistently, can change the trajectory of your career.",
            "We want to inspire, motivate, and enable driven individuals by showing them possibilities – and, most importantly, providing the tools to turn them into reality.",
          ]}
          imageSrc="/images/empowering.jpg"
          altText="Empowering Action-Takers"
        />

        <Section
          title="Bringing the Best to"
          highlightedTitle="Everyone"
          text={[
            "Why do students at the best universities like Harvard, MIT, Stanford, and Yale thrive? It's not just about the curriculum – it's about connections, resources, and support. These schools offer advantages that should be available to everyone.",
            "We at CareerLink are committed to democratizing these advantages. With recent advancement in technology, it's possible to scale the best resources, build smart matching algorithms, and create a career-building marketplace – just like Amazon revolutionized shopping.",
            "We connect you to the community, tools and support that you need to create your career path.",
          ]}
          imageSrc="/images/bringing-best.jpg"
          altText="Bringing the Best"
          reverseOrder={true}
        />
      </div>
    </section>
  );
}
