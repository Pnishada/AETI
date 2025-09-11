import { Building, GraduationCap, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramsSection() {
  const programs = [
    {
      id: "apprenticeship",
      icon: Building,
      title: "Apprenticeship Programs",
      testId: "card-apprenticeship"
    },
    {
      id: "nvq" ,
      icon: GraduationCap,
      title: "NVQ",
      testId: "card-nvq"
    },
    {
      id: "special-training" ,
      icon: Settings,
      title: "Special Training Programs",
      testId: "card-special-training"
    },
    {
      id: "career-development",
      icon: TrendingUp,
      title: "Career Development",
      testId: "card-career-development"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-programs-title">
            Programs & Training Categories
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                data-testid={program.testId}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-4" data-testid={`text-${program.testId}-title`}>
                  {program.title}
                </h3>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 font-medium transition-colors p-0"
                  data-testid={`button-${program.testId}-details`}
                  onClick={() => window.location.href = `/programs/${program.id}`}
                    >
                    View Details
                  </Button>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
