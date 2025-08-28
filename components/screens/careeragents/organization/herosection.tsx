import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CAREER_GPS_URL } from "@/consts";

const Avatar_URLS = [
  "/images/hero-avatar-2.png",
  "/images/hero-avatar-1.png",
  "/images/hero-avatar-3.png",
  "/images/hero-avatar-4.png",
];

export default function HeroSection() {
  return (
    <section className="relative px-6 py-16 md:py-28 flex flex-col-reverse md:flex-row items-center justify-center gap-16">
      <div className="flex-1 space-y-6 text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-lg">
          Empower Your <span className="text-pink-600">Workforce</span> with
          CareerGPS
        </h1>
        <p className="text-muted-foreground md:text-lg max-w-2xl">
          Provide your employees with the tools, insights, and support they need
          to grow and succeed within your organization.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {Avatar_URLS.map((src, index) => (
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
          <p className="text-sm text-gray-600">
            <span className="font-semibold">50,000+</span> professionals and
            organizations trust CareerGPS
          </p>
        </div>
        <Link href={CAREER_GPS_URL}>
          <Button
            size="lg"
            className="mt-6 bg-pink-600 hover:bg-pink-700 text-lg hover:cursor-pointer h-14 w-full md:w-auto"
          >
            Get CareerGPS for Your Team <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl blur-[100px] opacity-30"></div>
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-2 backdrop-blur-lg">
          <Image
            src="/images/careergps-org.png"
            alt="CareerGPS Organizational Interface Preview"
            width={610}
            height={400}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
