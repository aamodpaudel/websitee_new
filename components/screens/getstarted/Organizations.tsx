"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Check,
  ExternalLink,
  Building,
  Loader,
  Search,
  X,
  GraduationCap,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAppConfigGroup } from "@/services/api/getService";

type Organization = {
  name: string;
  domain: string;
  logo: string;
  group_type: "organization" | "institution";
};

const ORGANIZATION_BENEFITS = [
  {
    title: "Tailored Resources",
    description:
      "Access resources specific to your organization's needs and goals",
    icon: <Building className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Connect with Colleagues",
    description:
      "Find and collaborate with colleagues and mentors in your organization",
    icon: <ExternalLink className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Career Paths",
    description: "Explore organization-specific career paths and opportunities",
    icon: <GraduationCap className="h-8 w-8 text-pink-500" />,
  },
];
export default function Organizations() {
  const [appConfigGroup, setAppConfigGroup] = useState<Organization[] | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOrgs, setFilteredOrgs] = useState<Organization[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchRef = useRef<HTMLDivElement>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);

    if (!appConfigGroup || term.trim() === "") {
      setFilteredOrgs([]);
      setShowResults(false);
      return;
    }

    const filtered = appConfigGroup.filter(
      (org) =>
        org.name.toLowerCase().includes(term.toLowerCase()) ||
        org.domain.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredOrgs(filtered);
    setShowResults(true);
  };

  const accessOrganization = (domain: string) => {
    if (!recentSearches.includes(domain)) {
      const newRecentSearches = [domain, ...recentSearches.slice(0, 2)];
      setRecentSearches(newRecentSearches);
    }
    window.open("https://" + domain, "_blank");
    setShowResults(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredOrgs([]);
    setShowResults(false);
  };

  const getGroupTypeIcon = (type: "organization" | "institution") => {
    return type === "organization" ? (
      <Building className="h-4 w-4 text-pink-500" />
    ) : (
      <GraduationCap className="h-4 w-4 text-blue-500" />
    );
  };

  const getGroupTypeBadge = (type: "organization" | "institution") => {
    return type === "organization" ? (
      <Badge className="bg-pink-50 text-pink-600 hover:bg-pink-50">
        Organization
      </Badge>
    ) : (
      <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-50">
        Institution
      </Badge>
    );
  };

  useEffect(() => {
    setIsLoading(true);
    getAppConfigGroup()
      .then((res) => {
        setAppConfigGroup(res.data.data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen py-8">
      <section className="container px-4 mx-auto" id="organizations">
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="shadow-md border-slate-200">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Search className="h-5 w-5 text-pink-600" />
                </div>
                <CardTitle>Search Organizations</CardTitle>
              </div>
              <CardDescription>
                Find your organization by name or domain
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="relative" ref={searchRef}>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400 group-focus-within:text-pink-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by organization name or domain..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full p-3 pl-10 pr-10 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm text-slate-900 transition-all"
                  />
                  {searchTerm && (
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={clearSearch}
                    >
                      <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                    </button>
                  )}
                </div>

                {recentSearches.length > 0 && !showResults && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs text-slate-500">
                      Recent searches:
                    </span>
                    {recentSearches.map((domain) => {
                      const org = appConfigGroup?.find(
                        (o) => o.domain === domain
                      );
                      if (!org) return null;
                      return (
                        <Badge
                          key={domain}
                          variant="outline"
                          className="cursor-pointer hover:bg-slate-50 text-xs"
                          onClick={() => accessOrganization(domain)}
                        >
                          {org.name}
                        </Badge>
                      );
                    })}
                  </div>
                )}

                {showResults && filteredOrgs.length > 0 && (
                  <div className="absolute z-40 mt-1 w-full bg-white rounded-lg border border-slate-200 shadow-lg max-h-[350px] overflow-auto">
                    <div className="sticky top-0 bg-slate-50 p-2 border-b border-slate-100 text-xs text-slate-500">
                      Found {filteredOrgs.length} results
                    </div>
                    <ul className="divide-y divide-slate-100">
                      {filteredOrgs.map((org) => (
                        <li key={org.domain}>
                          <button
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center justify-between group transition-colors"
                            onClick={() => accessOrganization(org.domain)}
                          >
                            <div className="flex items-center">
                              {org.logo ? (
                                <div className="h-10 w-10 mr-3 rounded overflow-hidden flex-shrink-0 bg-white flex items-center justify-center border border-slate-100">
                                  <Image
                                    src={org.logo}
                                    alt={org.name}
                                    width={40}
                                    height={40}
                                    className="max-h-8 w-auto object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="h-10 w-10 mr-3 rounded-full bg-slate-100 flex items-center justify-center">
                                  {getGroupTypeIcon(org.group_type)}
                                </div>
                              )}
                              <div>
                                <span className="font-medium text-slate-800 block">
                                  {org.name}
                                </span>
                                <span className="text-xs text-slate-500">
                                  {org.domain}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getGroupTypeBadge(org.group_type)}
                              <div className="ml-1 h-7 w-7 rounded-full bg-pink-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="h-4 w-4 text-pink-500" />
                              </div>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {showResults && filteredOrgs.length === 0 && searchTerm && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg border border-slate-200 shadow-lg p-6 text-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-slate-100 p-3 rounded-full mb-3">
                        <Search className="h-6 w-6 text-slate-400" />
                      </div>
                      <p className="text-slate-800 font-medium mb-1">
                        No results found
                      </p>
                      <p className="text-slate-600 text-sm mb-3">
                        No organizations found matching &quot;{searchTerm}&quot;
                      </p>
                      <Button variant="outline" size="sm" onClick={clearSearch}>
                        Clear search
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-slate-200">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-pink-600" />
                </div>
                <CardTitle>Featured Organizations</CardTitle>
              </div>
              <CardDescription>
                Explore our featured organizations
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3">
                {isLoading ? (
                  Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg border border-slate-200 bg-slate-50 animate-pulse h-28"
                      >
                        <div className="flex flex-col items-center">
                          <div className="h-12 w-full mb-3 bg-slate-200 rounded"></div>
                          <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                    ))
                ) : appConfigGroup ? (
                  appConfigGroup.slice(0, 6).map((org) => (
                    <button
                      key={org.domain}
                      className="p-3 text-sm rounded-lg transition-all hover:cursor-pointer bg-white text-slate-700 border border-slate-200 hover:border-pink-200 hover:shadow-md group relative overflow-hidden"
                      onClick={() => accessOrganization(org.domain)}
                    >
                      <div className="flex flex-col items-center">
                        {org.logo ? (
                          <div className="h-16 w-full mb-3 flex items-center justify-center">
                            <Image
                              src={org.logo || "/placeholder.svg"}
                              alt={org.name}
                              width={132}
                              height={64}
                              className="h-10 w-full object-contain relative z-10"
                            />
                          </div>
                        ) : (
                          <div className="mb-3 relative z-10">
                            {org.group_type === "organization" ? (
                              <Building className="h-10 w-10 text-pink-500" />
                            ) : (
                              <GraduationCap className="h-10 w-10 text-blue-500" />
                            )}
                          </div>
                        )}
                        <span className="text-center line-clamp-2 group-hover:text-pink-600 transition-colors relative z-10">
                          {org.name}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="absolute bottom-2 right-2 bg-pink-500 text-white p-1.5 rounded-full shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200">
                    <Loader className="h-4 w-4 text-pink-600 animate-spin mr-2" />
                    <span className="text-slate-600">
                      Loading organizations...
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-slate-200">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-pink-600" />
                </div>
                <CardTitle>Organization Benefits</CardTitle>
              </div>
              <CardDescription>
                Advantages of connecting with your organization
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ORGANIZATION_BENEFITS.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-slate-200 hover:border-purple-200 transition-colors"
                  >
                    <div className="bg-purple-50 p-3 rounded-full w-fit mb-3">
                      {benefit.icon}
                    </div>
                    <h3 className="font-medium text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
