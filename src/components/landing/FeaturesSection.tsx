import { Card } from "@/components/ui/card";
import { Shield, Zap, TrendingUp } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Keep your business safe and protected with enterprise-grade security and reliability."
    },
    {
      icon: Zap,
      title: "Fast & Efficient", 
      description: "Streamlined processes that save time and increase productivity for your team."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Programs that grow with your business and flexible options for every budget."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            PROFESSIONAL PROGRAMS CAN BE EASY
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach ensures your business needs are met with precision and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};