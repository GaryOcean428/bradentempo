import React, { useState } from "react";
import { motion } from "framer-motion";
import JobListings from "../components/sections/JobListings";
import ApplicationForm from "../components/sections/ApplicationForm";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { z } from "zod";

interface FindApprenticeshipProps {
  initialJobId?: string;
}

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  education: z.enum(["high_school", "certificate", "diploma", "degree"]),
  experience: z.string(),
  coverLetter: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const FindApprenticeship = ({ initialJobId }: FindApprenticeshipProps = {}) => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(
    initialJobId || null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(Boolean(initialJobId));

  const handleApply = (jobId: string) => {
    setSelectedJobId(jobId);
    setIsDialogOpen(true);
  };

  const handleApplicationSubmit = (data: FormData) => {
    console.log("Application submitted:", { jobId: selectedJobId, ...data });
    setIsDialogOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Apprenticeship
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our available apprenticeship positions and take the
            first step towards your career
          </p>
        </motion.div>

        <JobListings onApply={handleApply} />

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
            <ApplicationForm
              onSubmit={handleApplicationSubmit}
              jobTitle="Apprenticeship Position"
            />
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

export default FindApprenticeship;
