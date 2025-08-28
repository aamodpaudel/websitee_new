"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { COMMUNITY_URL } from "@/consts";

export default function Navbar() {
  const pathname = usePathname();
  const [careerGpsOpen, setCareerGpsOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  //  {   For  CareerGPS submenu
  //     href: "/careergps",
  //     label: "CareerGPS",
  //     hasSubmenu: true,
  //     submenu: [
  //       { href: "/careergps/individual", label: "Individual" },
  //       { href: "/careergps/organization", label: "Organization" },
  //     ],
  //   },
  const navLinks = [
    // {
    //   href: "/aihub",
    //   label: "AI Hub",
    //   hasSubmenu: false,
    // },
    { href: "/aitraining", label: "AI Training", hasSubmenu: false },
    { href: "/organizations", label: "For Organizations", hasSubmenu: false },
    { href: "/about", label: "About Us", hasSubmenu: false },
  ];

  const isCareerGpsActive =
    pathname === "/careergps" ||
    pathname === "/careergps/individual" ||
    pathname === "/careergps/organization";

  const handleNavigationClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="w-full bg-white">
      <div className="flex h-24 items-center justify-between px-4 md:px-6 text-gray-700">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/careerlink.svg"
            alt="CareerLink Logo"
            width={130}
            height={32}
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex items-center">
          <nav className="hidden items-center space-x-5 text-lg md:flex">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger
                    className={`flex items-center transition-colors duration-200 hover:text-pink-600${
                      isCareerGpsActive ? " text-pink-600 font-medium" : ""
                    }`}
                  >
                    {link.label} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {/* {link.submenu?.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          className={`w-full px-4 py-2 transition-colors duration-200 hover:text-pink-600${
                            pathname === subItem.href
                              ? " text-pink-600 font-medium"
                              : ""
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))} */}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-pink-600${
                    pathname === link.href ? " text-pink-600 font-medium" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:block ml-5">
            <Button
              asChild
              className="bg-white text-pink-600 border border-pink-600 hover:bg-pink-50 hover:text-pink-700 transition-all duration-200 px-6"
              variant="outline"
            >
              <Link
                href={COMMUNITY_URL + "/login"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </Button>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden hover:cursor-pointer">
              <Menu className="h-5 w-5 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="border-b p-4">
                <Image
                  src="/svg/careerlink.svg"
                  alt="CareerLink Logo"
                  width={130}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <nav className="flex flex-col p-4">
                {navLinks.map((link) =>
                  link.hasSubmenu ? (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() => setCareerGpsOpen(!careerGpsOpen)}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-lg transition-all duration-200
                        ${
                          isCareerGpsActive
                            ? "bg-pink-50 text-pink-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            careerGpsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {careerGpsOpen && (
                        <div className="ml-4 mt-1 flex flex-col space-y-1">
                          {/* {link.submenu?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`rounded-lg px-4 py-2 text-lg transition-all duration-200
                              ${
                                pathname === subItem.href
                                  ? "bg-pink-50 text-pink-600 font-medium"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
                              }`}
                            >
                              {subItem.label}
                              {pathname === subItem.href && (
                                <div className="ml-auto">
                                  <div className="h-2 w-2 rounded-full bg-pink-600" />
                                </div>
                              )}
                            </Link>
                          ))} */}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleNavigationClick}
                      className={`flex items-center rounded-lg px-4 py-3 text-lg transition-all duration-200
                      ${
                        pathname === link.href
                          ? "bg-pink-50 text-pink-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
                      }`}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <div className="ml-auto">
                          <div className="h-2 w-2 rounded-full bg-pink-600" />
                        </div>
                      )}
                    </Link>
                  )
                )}

                <Link
                  href={COMMUNITY_URL + "/login"}
                  target="_blank"
                  onClick={handleNavigationClick}
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-pink-600 px-4 py-3 text-lg font-medium text-white transition-all duration-200 hover:bg-pink-700"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              </nav>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">
                    Need help? Contact our support team
                  </p>
                  <Button
                    className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white"
                    variant="default"
                    onClick={handleNavigationClick}
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
