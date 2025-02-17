import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MapPin, Calendar, DollarSign, Briefcase } from "lucide-react";

interface JobCardProps {
  title?: string;
  company?: string;
  location?: string;
  salary?: string;
  type?: string;
  duration?: string;
  description?: string;
  onApply?: () => void;
}

const JobCard = ({
  title = "Electrical Apprentice",
  company = "ABC Electrical",
  location = "Sydney, NSW",
  salary = "$45,000 - $55,000",
  type = "Full-time",
  duration = "4 years",
  description = "Great opportunity for an electrical apprentice to join a leading electrical contractor. Learn from experienced professionals and gain hands-on experience in residential and commercial projects.",
  onApply = () => console.log("Apply clicked"),
}: JobCardProps) => {
  return (
    <Card className="w-[380px] h-[320px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-gray-900">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              {company}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">{salary}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onApply}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
