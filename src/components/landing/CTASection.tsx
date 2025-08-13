import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 to-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto p-12 text-center bg-card/80 backdrop-blur-sm shadow-[var(--shadow-professional)] border-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who have transformed their operations with our professional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 font-semibold px-8 py-4 text-lg"
            >
              Schedule a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold px-8 py-4 text-lg"
            >
              Contact Sales
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};