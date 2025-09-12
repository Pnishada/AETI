import { useEffect, useRef, useState } from "react";
import { Building, GraduationCap, Settings, TrendingUp, Bolt, Wrench, Snowflake, Hammer, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramsSection() {
  const programs = [
    { id: "automobile-mechanic", icon: Hammer, title: "Automobile Mechanic", testId: "card-mechanic" },
    { id: "automobile-electrician", icon: Bolt, title: "Automobile Electrician", testId: "card-electrician" },
    { id: "automobile-machinist", icon: Wrench, title: "Automobile Machinist", testId: "card-machinist" },
    { id: "automobile-ac-mechanic", icon: Snowflake, title: "Automobile A/C Mechanic", testId: "card-ac-mechanic" },
    { id: "automobile-tinker", icon: Hammer, title: "Automobile Tinker", testId: "card-tinker" },
    { id: "automobile-painter", icon: Paintbrush, title: "Automobile Painter", testId: "card-painter" },
    { id: "apprenticeship", icon: Building, title: "Apprenticeship Programs", testId: "card-apprenticeship" },
    { id: "nvq", icon: GraduationCap, title: "NVQ", testId: "card-nvq" },
    { id: "special-training", icon: Settings, title: "Special Training Programs", testId: "card-special-training" },
    { id: "career-development", icon: TrendingUp, title: "Career Development", testId: "card-career-development" }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndexes((prev) => [...prev.filter(i => i !== index), index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-red-900 mb-4">
            Programs & Training Categories
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our professional and hands-on programs, designed to develop the next generation of skilled automobile technicians and engineers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" ref={containerRef}>
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const isVisible = visibleIndexes.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`bg-white rounded-3xl p-8 text-center shadow-md border border-gray-200 transition-all transform duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 animate-bounce-slow">
                  <IconComponent className="text-red-800 w-8 h-8" />
                </div>
                <h3 className="font-bold text-red-800 mb-4 text-lg hover:text-red-900 transition-colors">
                  {program.title}
                </h3>
                <Button
                  variant="link"
                  className="text-red-800 hover:text-red-900 font-medium transition-colors p-0"
                  onClick={() => window.location.href = `/programs/${program.id}`}
                >
                  View Details
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
}