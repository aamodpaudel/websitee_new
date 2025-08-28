"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { COMMUNITY_URL } from "@/consts";
import { getFeaturedResources } from "@/services/api/getService";
import {
  BookOpen,
  Briefcase,
  Clock,
  ExternalLink,
  Calendar,
  Tag,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Topic = {
  id: number;
  name: string;
  description: string | null;
  topic_type: string;
};

type Resource = {
  id: string;
  title: string;
  description: string;
  careerStage?: string;
  categories?: string[];
  topics_detailed?: Topic[];
  title_slug: string;
  thumbnail_image?: {
    file: string;
  };
  link: string;
  created_at: string;
  data?: {
    blocks: {
      type: string;
      value: string;
    }[];
  };
};

const HtmlContent = ({ html }: { html: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const ContentPreview = ({
  blocks,
}: {
  blocks: { type: string; value: string }[];
}) => {
  const previewBlocks = blocks.slice(0, 2);
  return (
    <div className="space-y-2 text-sm text-muted-foreground overflow-hidden">
      {previewBlocks.map((block, index) => (
        <div key={index} className="line-clamp-2">
          <HtmlContent html={block.value} />
        </div>
      ))}
      {blocks.length > 2 && (
        <div className="flex items-center text-xs text-primary mt-1 font-medium">
          <Clock className="w-3 h-3 mr-1" />
          {blocks.length - 2} more sections
        </div>
      )}
    </div>
  );
};

interface ResourceCardProps {
  resource: Resource;
  highlightText?: string;
  index: number;
}

const ResourceCard = ({
  resource,
  highlightText,
  index,
}: ResourceCardProps) => {
  const highlightMatch = (text: string) => {
    if (!highlightText || highlightText.trim() === "") return text;

    const regex = new RegExp(
      `(${highlightText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    return text.replace(
      regex,
      '<mark class="bg-primary/10 text-primary px-1 rounded">$1</mark>'
    );
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(date);
    } catch {
      return "Recent";
    }
  };

  const animationDelay = `${index * 100}ms`;

  return (
    <Card
      className="group h-full flex flex-col overflow-hidden bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn rounded-xl"
      style={{ animationDelay }}
    >
      <div className="relative">
        <div className="absolute top-3 right-3 z-20">
          <Badge className="bg-pink-600 hover:bg-primary text-white border-0 shadow-md backdrop-blur-sm px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>

        <div className="relative h-56 overflow-hidden">
          <Image
            src={
              resource?.thumbnail_image?.file ||
              "/placeholder.svg?height=400&width=600" ||
              "/placeholder.svg" ||
              "/placeholder.svg"
            }
            alt={resource.title}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-85 transition-opacity duration-300" />

          <div className="absolute top-12 left-3 z-10">
            {resource.careerStage && (
              <Badge
                variant="secondary"
                className="shadow-md backdrop-blur-sm bg-white/90 text-gray-800 px-3 py-1 rounded-full"
              >
                <Briefcase className="w-3 h-3 mr-1" />
                {resource.careerStage}
              </Badge>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-white transition-colors drop-shadow-sm">
              {highlightText ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightMatch(resource.title),
                  }}
                />
              ) : (
                resource.title
              )}
            </h3>
          </div>
        </div>
      </div>

      <CardContent className="flex-grow p-5">
        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Calendar className="w-3 h-3 mr-1" />
          {resource.created_at ? formatDate(resource.created_at) : "Recent"}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {resource.topics_detailed && resource.topics_detailed.length > 0
            ? resource.topics_detailed.map((topic, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors px-2.5 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {topic.name}
                </Badge>
              ))
            : resource.categories?.map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`text-xs transition-colors px-2.5 py-1 rounded-full ${
                    highlightText &&
                    category.toLowerCase().includes(highlightText.toLowerCase())
                      ? "bg-primary/10 border-primary/30"
                      : "bg-gray-100 border-gray-200 text-gray-700"
                  }`}
                >
                  {highlightText &&
                  category
                    .toLowerCase()
                    .includes(highlightText.toLowerCase()) ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightMatch(category),
                      }}
                    />
                  ) : (
                    category
                  )}
                </Badge>
              ))}
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {highlightText ? (
            <span
              dangerouslySetInnerHTML={{
                __html: highlightMatch(resource.description),
              }}
            />
          ) : (
            resource.description
          )}
        </p>

        {resource.data && (
          <div className="border-t border-gray-100 pt-4 mt-2">
            <h4 className="text-sm font-medium mb-3 flex items-center text-primary">
              <BookOpen className="w-4 h-4 mr-1.5" />
              Content Preview
            </h4>
            <ContentPreview blocks={resource.data.blocks} />
          </div>
        )}
      </CardContent>

      <CardFooter className="p-0 mt-auto">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-between rounded-none border-t border-pink-100 h-14 px-5 text-pink-600 hover:text-pink-600 hover:bg-pink-600/5 transition-colors"
        >
          <Link href={COMMUNITY_URL + "/resource/" + resource.title_slug}>
            <span className="flex items-center font-medium">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Resource
            </span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function FeaturedResources({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await getFeaturedResources({ search: searchQuery });
        setResources(response.data.data);
      } catch {
          console.error("Failed to fetch resources");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, [searchQuery]);

  return (
    <section className="">
      <div className="container px-4 md:px-6">
        {isLoading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Card
                key={i}
                className="h-[500px] animate-pulse rounded-xl overflow-hidden"
              >
                <div className="h-56 bg-gray-200" />
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded-full w-1/2" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded-full" />
                    <div className="h-3 bg-gray-200 rounded-full w-5/6" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {resources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
