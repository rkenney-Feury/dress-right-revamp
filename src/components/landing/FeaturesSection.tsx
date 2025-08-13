import { Card } from "@/components/ui/card";
import { Shield, Zap, TrendingUp } from "lucide-react";
import safetyImage from "@/assets/safety-worker.jpg";
import efficiencyImage from "@/assets/team-efficiency.jpg";
import scalabilityImage from "@/assets/scalable-solutions.jpg";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      image: safetyImage,
      title: "Keep Your People Safe",
      description: "Keep your people safe and comfortable with professional apparel care and training programs."
    },
    {
      icon: Zap,
      image: efficiencyImage,
      title: "Represent Your Brand", 
      description: "Represent your brand properly with in-house customization and professional design services."
    },
    {
      icon: TrendingUp,
      image: scalabilityImage,
      title: "Budget-Friendly Programs",
      description: "Programs that won't break the bank with flexible options for every budget and business size."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            BRANDED APPAREL PROGRAMS CAN BE EASY
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive branded workwear solutions ensure your team looks professional while staying safe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};