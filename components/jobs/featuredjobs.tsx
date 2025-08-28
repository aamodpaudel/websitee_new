"use client";
import React from "react";
import JobCardList from "./Jobcardlist";
import { Project } from "./jobcard";
import { getFeaturedJobs } from "@/services/api/getService";
import { Loader2 } from "lucide-react";

export default function FeaturedJobs({ search }: { search?: string }) {
  const [jobs, setJobs] = React.useState<Project[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    getFeaturedJobs({ search })
      .then((response) => {
        if (response.data.data && Array.isArray(response.data.data)) {
          setJobs(response.data.data);
        } else if (response.data.data && response.data.data) {
          setJobs([response.data.data]);
        } else {
          console.error("Unexpected response format:", response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching featured jobs:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 text-pink-600 animate-spin" />
          <p className="mt-4 text-gray-600">Loading featured jobs...</p>
        </div>
      ) : (
        <JobCardList jobs={jobs} className="mt-6 max-w-7xl mx-auto" />
      )}
      {jobs.length === 0 && !isLoading && (
        <div className="flex items-center justify-center">
          <p className="text-gray-500">No jobs found.</p>
        </div>
      )}
    </>
  );
}
