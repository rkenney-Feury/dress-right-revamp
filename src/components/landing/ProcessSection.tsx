import { Card } from "@/components/ui/card";
import { Ear, Lightbulb, Rocket, CheckCircle } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: Ear,
      title: "We Listen",
      description: "We listen to you and your team about what works and what doesn't work in your current setup."
    },
    {
      icon: Lightbulb,
      title: "We Plan", 
      description: "We propose and develop solutions for pain points, and create your custom program from this framework."
    },
    {
      icon: Rocket,
      title: "We Implement",
      description: "Our team executes the plan with precision, ensuring smooth deployment and integration."
    },
    {
      icon: CheckCircle,
      title: "We Optimize",
      description: "Continuous monitoring and optimization to ensure your program delivers maximum value."
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Your Branded Apparel Program
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our proven process ensures that your business needs are met and your employees get exactly what they need to stay safe and represent your brand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};