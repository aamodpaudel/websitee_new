import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/screens/footer";
import { Toaster } from "sonner";

const manRope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Careerlink - Learn essential AI skills to build your career with clarity and confidence",
  description:
    "Connect with the community, tools, and support you need for a better way to build your career. If the traditional path doesn't fit who you are, it's time to meet your people.",
  openGraph: {
    images: [
      {
        url: "https://starleaders-dev.s3.amazonaws.com/media/group_cover_images/careerlink-banner_r4cW46Q.png",
      },
    ],
  },
  icons: {
    icon: "images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics gaId="G-4RMZMYMEQM" />
        <div
          className={
            manRope.className +
            " w-screen h-screen max-w-[1680px] mx-auto px-4 md:px-8 lg:px-16"
          }
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
