import JobCard, { Project } from "./jobcard";


interface JobCardListProps {
  jobs: Project[];
  className?: string;
}

export default function JobCardList({ jobs, className = "" }: JobCardListProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}
