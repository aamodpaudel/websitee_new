"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { DomainType, getFeaturedGroups } from "@/services/api/getService";
import GroupCard from "../group-card";
import { titleCase } from "@/lib/utils";

type CircleLeader = {
  name: string;
  title: string;
  avatar: string;
};
export type groupCardProps = {
  id: string | number;
  name: string;
  description: string;
  badge?: string;
  title?: string;
  leader?: CircleLeader;
  href?: string;
  cover_image?: string | null;
  start_date?: string;
  end_date?: string;
  countries?: string[];
  maximum_size?: number;
  total_members?: string | number;
  name_slug?: string;
  is_featured?: boolean;
  skills_detailed?: Array<{ id: number; name: string }>;
  topics_detailed?: Array<{ id: number; name: string }>;
};

export default function FeaturedGroups({
  domain_type = "community",
  group_type = "circle",
  search = "",
  show_title = true,
}: {
  domain_type: DomainType;
  group_type: string;
  search?: string;
  show_title?: boolean;
}) {
  const [FeaturedGroups, setFeaturedGroups] = useState<groupCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getFeaturedGroups({ group_type, domain_type, search })
      .then((response) => {
        if (response.data && Array.isArray(response.data.data || [])) {
          setFeaturedGroups(response.data.data || []);
        } else if (response.data && response.data.data || []) {
          setFeaturedGroups([response.data.data || []]);
        } else {
          console.error("Unexpected response format:", response.data);
          setFeaturedGroups([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching featured circles:", error);
        setFeaturedGroups([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [domain_type, group_type, search]);

  return (
    <div className="min-h-screen pt-12">
      <section className="py-16">
        <div className="container mx-auto px-4">
          {show_title && (
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Featured{" "}
                <span className="text-pink-600">{titleCase(group_type)}s</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Join our curated selection of {group_type}s led by industry
                experts and connect with like-minded professionals
              </p>
            </div>
          )}

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-12 w-12 text-pink-600 animate-spin" />
              <p className="mt-4 text-gray-600">
                Loading featured {group_type}s...
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {FeaturedGroups.length > 0 ? (
                FeaturedGroups.map((circle) => (
                  <GroupCard
                    key={circle.id}
                    circle={circle}
                    group_type={group_type}
                    domain={domain_type}
                  />
                ))
              ) : (
                <div className="col-span-3 py-12 text-center text-gray-500">
                  No featured {group_type}s available at the moment.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
