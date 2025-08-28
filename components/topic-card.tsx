import Link from "next/link";
import type React from "react";
import { Card } from "./ui/card";

type TopicCardProps = {
  title: string;
  description: string;
  expertise: string;
  icon?: React.ReactNode;
  topic_link?: string;
};

export default function TopicCard({
  title,
  description,
  expertise,
  icon,
  topic_link,
}: TopicCardProps) {
  return (
    <Link href={topic_link || "#"} passHref>
      <Card className="group overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
        <div className="px-5 py-2">
          <div className="flex items-center gap-3 mb-3">
            {icon && (
              <span className="p-2 bg-amber-600/10 rounded-full text-amber-600">
                {icon}
              </span>
            )}
            <h3 className="font-medium text-lg">{title}</h3>
          </div>

          <p className="text-gray-500 text-sm mb-4">{description}</p>

          <span className="inline-flex items-center rounded-full bg-amber-600/10 px-2.5 py-0.5 text-xs font-medium text-amber-600">
            {expertise}
          </span>
        </div>
      </Card>
    </Link>
  );
}
