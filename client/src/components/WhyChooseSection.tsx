"use client";

import { University, Handshake, MapPin } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: University,
      title: "Govt. Certified Training",
      description:
        "All our programs are government certified, ensuring official recognition of your skills.",
      testId: "benefit-certified",
    },
    {
      icon: Handshake,
      title: "Industry Partnerships",
      description:
        "Strong collaborations with industry leaders provide students with real-world experience.",
      testId: "benefit-partnerships",
    },
    {
      icon: MapPin,
      title: "Nationwide Training Centers",
      description:
        "Our training centers are spread across the country, making learning accessible to everyone.",
      testId: "benefit-centers",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#8B1E1E] mb-4"
            data-testid="text-why-choose-title"
          >
            Why Choose AETI
          </h2>
          <p className="text-[#4B1B1B] max-w-2xl mx-auto">
            Discover why our students trust AETI for professional growth and skill development.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid sm:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#8B1E1E]/20 rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-shadow hover:border-[#8B1E1E] cursor-pointer"
                data-testid={benefit.testId}
              >
                <div className="w-16 h-16 bg-[#8B1E1E]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-[#8B1E1E] w-8 h-8" />
                </div>
                <h3
                  className="font-bold text-[#8B1E1E] text-xl mb-3"
                  data-testid={`text-${benefit.testId}-title`}
                >
                  {benefit.title}
                </h3>
                <p className="text-[#4B1B1B] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
