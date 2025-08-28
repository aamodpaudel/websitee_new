import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type GenericHeroSectionProps = {
  title: {
    sections?: { text: string; highlight?: boolean }[];
  };
  highlightedWord?: string;
  description: string | React.ReactNode;
  avatars?: string[];
  statsText?: string;
  statsHighlight?: string;
  ctaText?: string | React.ReactNode;
  ctaUrl?: string;
  ctaIcon?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  colorScheme?: "pink" | "blue" | "green" | "amber";
  video_url?: string;
  ctaText2?: string;
  ctaUrl2?: string;
  ctaIcon2?: boolean;
};
const colorMappings = {
  pink: {
    highlight: "text-pink-600",
    button: "bg-pink-600 hover:bg-pink-700",
    gradient: "from-pink-500 to-purple-600",
  },
  blue: {
    highlight: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
    gradient: "from-blue-500 to-indigo-600",
  },
  green: {
    highlight: "text-green-600",
    button: "bg-green-600 hover:bg-green-700",
    gradient: "from-green-500 to-teal-600",
  },
  amber: {
    highlight: "text-amber-600",
    button: "bg-amber-600 hover:bg-amber-700",
    gradient: "from-amber-500 to-orange-600",
  },
};
export default function GenericHeroSection({
  title,
  description,
  avatars = [],
  statsText,
  statsHighlight,
  ctaText,
  ctaUrl,
  ctaIcon = true,
  imageSrc,
  imageAlt,
  colorScheme = "pink",
  video_url = "",
  ctaText2 = "",
  ctaUrl2 = "",
  ctaIcon2 = false,
}: GenericHeroSectionProps) {
  console.log(video_url);
  const colors = colorMappings[colorScheme] || colorMappings.pink;
  const renderTitle = () => {
    if (!title || !title.sections) return null;

    return title.sections.map((section, index) => (
      <React.Fragment key={index}>
        {section.highlight ? (
          <span className={colors.highlight}>{section.text}</span>
        ) : (
          section.text
        )}
      </React.Fragment>
    ));
  };

  return (
    <section className="relative px-6 py-16 md:py-28 flex flex-col-reverse md:flex-row items-center justify-center gap-16">
      <div className="flex-1 space-y-6 text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-lg">
          {renderTitle() as React.ReactNode}
        </h1>
        <div className="text-muted-foreground md:text-lg max-w-2xl">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>

        {avatars.length > 0 && (
          <div className="flex md:items-center gap-4 flex-col md:flex-row">
            <div className="flex -space-x-3">
              {avatars.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  width={40}
                  height={40}
                  alt={`user${index + 1}`}
                  className="rounded-full w-auto h-10 border-2 border-white shadow-md"
                />
              ))}
            </div>
            {statsText && (
              <p className="text-sm text-gray-600">
                {statsHighlight && (
                  <span className="font-semibold">{statsHighlight}</span>
                )}{" "}
                {statsText}
              </p>
            )}
          </div>
        )}

        {ctaText && ctaUrl && (
          <Link
            href={ctaUrl}
            target={ctaUrl.startsWith("http") ? "_blank" : "_self"}
          >
            <Button
              size="lg"
              className={`mt-6 ${colors.button} text-lg hover:cursor-pointer h-14 w-full md:w-auto`}
            >
              {ctaText} {ctaIcon && <ArrowRight className="ml-2" />}
            </Button>
          </Link>
        )}
        {ctaText2 && ctaUrl2 && (
          <Link
            href={ctaUrl2}
            target={ctaUrl2.startsWith("http") ? "_blank" : "_self"}
          >
            <Button
              size="lg"
              variant="outline"
              className={`mt-4 ml-2 text-lg hover:cursor-pointer h-14 w-full md:w-auto border border-pink-500 text-pink-600 hover:bg-pink-50 hover:text-pink-700`}
            >
              {ctaText2} {ctaIcon2 && <ArrowRight className="ml-2" />}
            </Button>
          </Link>
        )}
      </div>

      {imageSrc && (
        <div className="flex-1 flex justify-center relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-xl blur-[100px] opacity-30`}
          ></div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-2 backdrop-blur-lg">
            {video_url ? (
              <video
                className="rounded-2xl"
                loop
                muted
                playsInline
                controls
                src={video_url}
                poster={imageSrc}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt || "Hero Image"}
                width={600}
                height={400}
                className="w-full rounded-xl object-cover"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
