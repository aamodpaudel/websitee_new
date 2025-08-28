// components/Footer.tsx
import { FC } from "react";
import Link from "next/link";
import {  Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { LINKEDIN_URL, YOUTUBE_URL } from "@/consts";

export const getFooterData = {
  logo: {
    text: "careerlink",
    href: "/images/careerlinkBW.png",
  },
  navSections: [
    {
      title: "Solutions",
      items: [
        { label: "CareerGPS", href: "/careergps" },
        { label: "AI Circle", href: "/aicircle" },
        { label: "For Organizations", href: "/organizations" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/about#contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      href: LINKEDIN_URL,
      icon: Linkedin,
    },
    {
      name: "YouTube",
      href: YOUTUBE_URL,
      icon: Youtube,
    },
  ],
  copyright: "© 2025 Careerlink. All rights reserved",
};

const Footer: FC = () => {
  const { logo, navSections, socialLinks, copyright } = getFooterData;
  return (
    <footer className="bg-black text-white py-12 mt-12 rounded-t-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Image src={logo.href} alt={logo.text} width={140} height={32} />

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="hover:text-gray-300 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {navSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-md font-medium mb-2 text-slate-400">
                {section.title}
              </h3>
              <nav className="flex flex-col space-y-2 ">
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-gray-300 transition-colors text-sm text-slate-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
