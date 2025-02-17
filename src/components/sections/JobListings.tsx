import React, { useState } from "react";
import JobCard from "./JobCard";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, Filter } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  duration: string;
  description: string;
}

interface JobListingsProps {
  jobs?: Job[];
  onApply?: (jobId: string) => void;
}

const JobListings = ({
  jobs = [
    {
      id: "1",
      title: "Electrical Apprentice",
      company: "ABC Electrical",
      location: "Sydney, NSW",
      salary: "$45,000 - $55,000",
      type: "Full-time",
      duration: "4 years",
      description:
        "Great opportunity for an electrical apprentice to join a leading electrical contractor.",
    },
    {
      id: "2",
      title: "Plumbing Apprentice",
      company: "XYZ Plumbing",
      location: "Melbourne, VIC",
      salary: "$42,000 - $52,000",
      type: "Full-time",
      duration: "3 years",
      description:
        "Join a growing plumbing company and learn from industry experts.",
    },
    {
      id: "3",
      title: "Carpentry Apprentice",
      company: "Build Right Construction",
      location: "Brisbane, QLD",
      salary: "$40,000 - $50,000",
      type: "Full-time",
      duration: "4 years",
      description:
        "Excellent opportunity to start your career in carpentry with a reputable builder.",
    },
  ],
  onApply = (jobId: string) => console.log(`Applied to job ${jobId}`),
}: JobListingsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      locationFilter === "all" || job.location.includes(locationFilter);
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Available Apprenticeships
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by title or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="w-full sm:w-[200px]">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Sydney">Sydney</SelectItem>
                  <SelectItem value="Melbourne">Melbourne</SelectItem>
                  <SelectItem value="Brisbane">Brisbane</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              type={job.type}
              duration={job.duration}
              description={job.description}
              onApply={() => onApply(job.id)}
            />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No apprenticeships found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListings;
