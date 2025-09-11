import { University, Handshake, MapPin } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: University,
      title: "Govt. Certified Training",
      testId: "benefit-certified"
    },
    {
      icon: Handshake,
      title: "Industry Partnerships",
      testId: "benefit-partnerships"
    },
    {
      icon: MapPin,
      title: "Nationwide Training Centers",
      testId: "benefit-centers"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-why-choose-title">
            Why Choose IETI
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center" data-testid={benefit.testId}>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-accent w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3" data-testid={`text-${benefit.testId}-title`}>
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
