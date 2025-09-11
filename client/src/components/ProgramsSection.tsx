"use client";

import { useState } from "react";
import { Building, GraduationCap, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramsSection() {
  const programs = [
    {
      id: "apprenticeship",
      icon: Building,
      title: "Apprenticeship Programs",
      description:
        "Hands-on learning experience designed to train students for industrial jobs.",
    },
    {
      id: "nvq",
      icon: GraduationCap,
      title: "NVQ",
      description:
        "National Vocational Qualification courses to certify your skills officially.",
    },
    {
      id: "special-training",
      icon: Settings,
      title: "Special Training Programs",
      description:
        "Advanced training programs to upskill professionals in specialized fields.",
    },
    {
      id: "career-development",
      icon: TrendingUp,
      title: "Career Development",
      description:
        "Guidance and courses to enhance your career growth and opportunities.",
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState<null | typeof programs[0]>(null);

  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Programs & Training Categories
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our diverse training categories designed to empower students
            and professionals with skills for the future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 hover:shadow-xl hover:border-[#8B1E1E]/30 transition-all"
              >
                <div className="w-16 h-16 bg-[#8B1E1E]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-[#8B1E1E] w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-4">{program.title}</h3>
                <Button
                  variant="link"
                  className="text-[#8B1E1E] hover:text-[#6F1616] font-medium transition-colors p-0"
                  onClick={() => setSelectedProgram(program)}
                >
                  View Details →
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#8B1E1E] rounded-3xl p-8 max-w-lg mx-4 text-white relative shadow-2xl animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">{selectedProgram.title}</h2>
            <p className="mb-6">{selectedProgram.description}</p>
            <Button
              className="bg-white text-[#8B1E1E] px-6 py-2 rounded-lg font-medium hover:bg-gray-100"
              onClick={() => setSelectedProgram(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
