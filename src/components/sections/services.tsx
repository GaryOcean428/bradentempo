import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MonitorSmartphone, Code2, LineChart, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Apprenticeships",
    description: "Comprehensive apprenticeship programs for career development",
    icon: MonitorSmartphone,
  },
  {
    title: "Traineeships",
    description: "Structured training programs for skill advancement",
    icon: Code2,
  },
  {
    title: "Employer Solutions",
    description: "Innovative workforce solutions for businesses",
    icon: LineChart,
  },
  {
    title: "Career Support",
    description: "Guidance and resources for professional growth",
    icon: Lightbulb,
  },
];

const _services = [
  {
    title: "Digital Solutions",
    description: "Custom digital solutions tailored to your business needs",
    icon: MonitorSmartphone,
  },
  {
    title: "Software Development",
    description: "End-to-end software development services",
    icon: Code2,
  },
  {
    title: "Business Analytics",
    description: "Data-driven insights for better decision making",
    icon: LineChart,
  },
  {
    title: "Innovation Consulting",
    description: "Strategic innovation and digital transformation",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a comprehensive range of services to help your business
            thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
