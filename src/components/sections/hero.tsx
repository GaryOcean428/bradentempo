import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 z-0" />
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-tight text-[#2c3e50]">
            People. Employment. Progress.
          </h1>
          <p className="text-lg md:text-xl text-[#95a5a6] mb-12 leading-relaxed">
            Supporting apprentices and trainees while providing innovative
            solutions for employers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-[#ab233a] hover:bg-[#811a2c] text-white px-8"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#cbb26a] text-[#cbb26a] hover:bg-[#cbb26a] hover:text-white px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
