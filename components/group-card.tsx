"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users, Clock } from "lucide-react";

import { COMMUNITY_URL } from "@/consts";
import { cn, titleCase } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { groupCardProps } from "./screens/featuredGroup";
import { AI_REMOTE_URL } from "@/services/api";
function stripHtmlTags(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}

export default function GroupCard({
  circle,
  group_type,
  domain = "community",
}: {
  circle: groupCardProps;
  group_type: string;
  domain?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [animateCapacity, setAnimateCapacity] = useState(false);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getCountryNames = (countryCodes?: string[]) => {
    if (!countryCodes || countryCodes.length === 0) return "Global";
    if (countryCodes.length > 3) return "Multiple Countries";
    return countryCodes.join(", ");
  };

  const totalMembers = Number.parseInt(
    circle.total_members?.toString() || "0",
    10
  );
  const maxSize = circle.maximum_size || 10;
  const capacityPercentage = Math.min(
    Math.round((totalMembers / maxSize) * 100),
    100
  );
  const spotsLeft = Math.max(maxSize - totalMembers, 0);
  const isNearlyFull = capacityPercentage >= 70;
  const isFull = capacityPercentage >= 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCapacity(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      href={
        (domain === "ai" ? AI_REMOTE_URL : COMMUNITY_URL) +
        `/${group_type}/${circle.name_slug}`
      }
    >
      <div
        className={cn(
          "group relative overflow-hidden bg-white rounded-2xl transition-all duration-300",
          isHovered
            ? "shadow-lg shadow-pink-500/5 border border-pink-100 -translate-y-1"
            : "shadow-md shadow-black/5 border border-black/5 translate-y-0"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-52 w-full overflow-hidden">
          {circle.cover_image ? (
            <>
              <Image
                src={circle.cover_image}
                alt={circle.name || circle.title || ""}
                fill
                className={cn(
                  "object-cover transition-transform duration-700 ease-out",
                  isHovered ? "scale-105" : "scale-100"
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300",
                  isHovered ? "opacity-60" : "opacity-0"
                )}
              ></div>
            </>
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-pink-400 to-pink-600"></div>
          )}

          {(circle.badge || circle.is_featured) && (
            <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
              <span className="text-xs font-medium text-pink-700">
                {circle.badge || "Featured"}
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
            <div
              className={cn(
                "h-full transition-all duration-1000 ease-out",
                isFull
                  ? "bg-gradient-to-r from-pink-600 to-pink-700"
                  : isNearlyFull
                  ? "bg-gradient-to-r from-pink-400 to-pink-500"
                  : "bg-gradient-to-r from-pink-300 to-pink-400"
              )}
              style={{
                width: animateCapacity ? `${capacityPercentage}%` : "0%",
              }}
            ></div>
          </div>
        </div>

        <div className="p-6">
          <h3
            className={cn(
              "mb-2 text-lg font-semibold line-clamp-1 transition-colors duration-300 text-slate-800"
            )}
          >
            {circle.name || circle.title}
          </h3>

          {circle.topics_detailed && circle.topics_detailed.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {circle.topics_detailed?.slice(0, 2).map((topic) => (
                <Badge
                  key={topic.id}
                  variant="outline"
                  className="rounded-full border-slate-200 bg-slate-50/50 px-2.5 py-0.5 text-xs font-medium text-slate-500"
                >
                  {topic.name}
                </Badge>
              ))}
            </div>
          )}

          <p className="mb-5 text-sm text-gray-600 line-clamp-2">
            {stripHtmlTags(circle.description)}
          </p>

          <div className="mb-5 grid grid-cols-2 gap-4">
            {circle.start_date && (
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
                  <Calendar className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Date</p>
                  <p className="text-sm font-medium text-gray-700">
                    {formatDate(circle.start_date)}{" "}
                    {circle.end_date ? `- ${formatDate(circle.end_date)}` : ""}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
                <MapPin className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-medium text-gray-700">
                  {getCountryNames(circle.countries)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
                <Users className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Members</p>
                <p className="text-sm font-medium text-gray-700">
                  {totalMembers} / {maxSize}
                </p>
              </div>
            </div>
            {isNearlyFull && !isFull && (
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
                  <Clock className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Availability</p>
                  <p className="text-sm font-medium text-amber-600">
                    {spotsLeft} {spotsLeft > 1 ? "spots" : "spot"} left
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            {circle.leader ? (
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-100">
                  <Image
                    src={
                      circle.leader.avatar ||
                      "/placeholder.svg?height=40&width=40"
                    }
                    alt={circle.leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {circle.leader.name}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {circle.leader.title}
                  </p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div
              className={cn(
                "relative flex items-center justify-center gap-1.5 rounded-sm px-5 py-2.5 text-sm font-medium transition-all duration-300 overflow-hidden w-full md:w-auto",
                isFull
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : cn(
                      "bg-emerald-600 text-white hover:bg-emerald-700",
                      isHovered && !isFull
                        ? "shadow-md shadow-amber-600/20"
                        : ""
                    )
              )}
            >
              {isHovered && !isFull && (
                <div className="absolute inset-0 overflow-hidden animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"></div>
              )}

              <span>
                {isFull
                  ? titleCase(group_type) + " Is Full"
                  : "Join " + group_type}
              </span>
              {!isFull && (
                <ArrowRight className="h-4 w-4 transition-transform duration-300" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
