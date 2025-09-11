import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Building Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="src/components/assets/IETI_office_building.webp" 
              alt="Modern IETI office building" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              data-testid="img-about-building"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" data-testid="text-about-title">
              About AETI
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed" data-testid="text-about-description">
              The Automobile Engineering Training Institute (AETI) is a leading government technical training institute in Sri Lanka, functioning under the National Apprentice and Industrial Training Authority (NAITA).
               Established to meet the growing demand for skilled automobile technicians, AETI provides specialized training programs in automobile engineering and related technologies.
            </p>
            
            <Link href="/about">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
