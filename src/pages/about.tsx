import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-8 text-[#2c3e50]">
            About Braden
          </h1>
          <p className="text-lg text-[#95a5a6] mb-6">
            At Braden, we're dedicated to connecting people with opportunities
            and fostering progress through innovative employment solutions.
          </p>
          <p className="text-lg text-[#95a5a6] mb-8">
            Our comprehensive approach to apprenticeships and traineeships helps
            both individuals and businesses thrive in today's dynamic workforce
            environment.
          </p>
          <Button className="bg-[#ab233a] hover:bg-[#811a2c] text-white px-8">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
