import ImgGallery from "@/components/imgGallery";
import React from "react";
export const orgImages = [
  {
    src: "/images/cosmic.png",
    alt: "sdg",
  },
  {
    src: "/images/star.png",
    alt: "star",
  },
  {
    src: "/images/ioe.png",
    alt: "ioe",
  },
];
export default function OrganizationSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto md:px-6">
        <h2 className="md:text-center text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl mx-auto md:p-4">
          Trusted by <span className="text-pink-600">Organizations </span>{" "}
          Making Social Impact Globally
        </h2>
        <p className="md:text-center text-muted-foreground md:text-xl mt-4 md:mb-12 max-w-5xl mx-auto text-lg">
          Empowering visionary companies to pioneer the future of their
          industries
        </p>
        <div className="flex items-center justify-center">
          <ImgGallery images={orgImages} />
        </div>
      </div>
    </section>
  );
}
