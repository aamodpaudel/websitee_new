import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { COMMUNITY_URL } from "@/consts";

type Skill = {
  id: number;
  name: string;
};

type Group = {
  id: number;
  name: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  requirements: string;
  created_at: string;
  modified_at: string;
  is_active: boolean;
  job_type: string;
  job_location: string;
  address: string;
  application_open_date: string | null;
  application_close_date: string | null;
  last_indexed_at: string;
  index_id: string;
  slug: string;
  skills_detailed: Skill[];
  group: Group;
  career_stages: number[];
  countries: string[];
};

export default function JobCard({
  title,
  description,
  job_type,
  job_location,
  application_open_date,
  application_close_date,
  countries = [],
  skills_detailed = [],
  group,
  slug,
}: Project) {
  const formattedOpenDate = application_open_date
    ? format(new Date(application_open_date), "MMM d, yyyy")
    : null;
  const formattedCloseDate = application_close_date
    ? format(new Date(application_close_date), "MMM d, yyyy")
    : "Open";
  function formatunderScoreTextToTitle(remoteWork: string) {
    return remoteWork
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  const cleanText = description.replace(/<[^>]*>/g, "").replace(/\\/g, "");

  const truncatedDescription =
    cleanText.length > 120 ? `${cleanText.substring(0, 120)}...` : cleanText;

  const href = COMMUNITY_URL + `/job/${slug}`;

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return (
    <Link href={href} className="block group">
      <div
        className="relative bg-white backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 
        border border-slate-100 group-hover:border-transparent
        shadow-sm group-hover:shadow-md
        transform group-hover:-translate-y-1
        h-full flex flex-col"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 text-pink-600
              flex items-center justify-center shadow-md transform transition-transform duration-300 
              group-hover:rotate-3 group-hover:scale-110`}
            >
              <Briefcase className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-pink-50 backdrop-blur-sm shadow-sm 
                border-pink-100 text-pink-700 font-medium py-0.5 px-3"
              >
                {formatunderScoreTextToTitle(job_type)}
              </Badge>
            </div>
          </div>

          <div className="mb-3">
            <h3
              className="text-xl font-bold text-slate-800 line-clamp-2 mb-1
              group-hover:text-pink-600 transition-colors duration-300"
            >
              {title}
            </h3>

            {group && (
              <div className="text-sm font-medium text-slate-500">
                {group.name}
              </div>
            )}
          </div>

          <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-grow">
            {truncatedDescription}
          </p>

          <div className="grid grid-cols-1 gap-3 text-xs text-slate-500 mb-4">
            {job_location && (
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-slate-100 shadow-sm">
                  <MapPin className="h-3 w-3 text-slate-500" />
                </div>
                <span className="font-medium">
                  {formatunderScoreTextToTitle(job_location)}
                </span>
              </div>
            )}

            {countries.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-slate-100 shadow-sm">
                  <MapPin className="h-3 w-3 text-slate-500" />
                </div>
                <span className="font-medium">
                  {" "}
                  {countries.map((code) => regionNames.of(code)).join(", ")}
                </span>
              </div>
            )}

            {(formattedOpenDate || formattedCloseDate) && (
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-slate-100 shadow-sm">
                  <Calendar className="h-3 w-3 text-slate-500" />
                </div>
                <span className="font-medium">
                  {formattedOpenDate
                    ? `${formattedOpenDate} - ${formattedCloseDate}`
                    : `Closes: ${formattedCloseDate}`}
                </span>
              </div>
            )}
          </div>

          {skills_detailed.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {skills_detailed.slice(0, 4).map((skill) => (
                <span
                  key={skill.id}
                  className="px-3 py-1.5 text-xs font-medium rounded-full 
                    bg-gradient-to-r from-slate-50 to-slate-100 
                    text-slate-700 border border-slate-200 shadow-sm 
                    whitespace-nowrap transform transition-transform duration-300
                   "
                >
                  {skill.name}
                </span>
              ))}
              {skills_detailed.length > 4 && (
                <span
                  className="px-3 py-1.5 text-xs font-medium rounded-full 
                  bg-gradient-to-r from-slate-50 to-slate-100 
                  text-slate-600 border border-slate-200 shadow-sm 
                  whitespace-nowrap transform transition-transform duration-300
                  "
                >
                  +{skills_detailed.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
