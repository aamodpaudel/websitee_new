"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import React from "react";
import FeaturedResources from "./FeaturedResources";

export default function Herosection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  return (
    <>
      <section className="py-12 md:py-20" id="communities">
        <div className="max-w-4xl mx-auto text-center space-y-4 ">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Explore <span className="text-pink-600">Essential </span>Resources
            for Your Growth
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Access guides, tools, and insights to level up your career and
            skills.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-8 flex items-center justify-center max-w-5xl mx-auto w-full "
          >
            <div className="flex w-full max-w-3xl gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  className="pl-12 h-14 bg-white/95 text-gray-800 text-lg w-full"
                  placeholder="Search for resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="h-14 px-8 bg-pink-600 text-white hover:bg-pink-700"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </section>
      <FeaturedResources searchQuery={submittedQuery} />
    </>
  );
}
