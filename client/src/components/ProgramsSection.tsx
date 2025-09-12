import { useEffect, useRef, useState } from "react";
import {
  Hammer,
  Bolt,
  Wrench,
  Snowflake,
  Paintbrush,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProgramsSection() {
  const programs = [
    {
      id: "automobile-mechanic",
      icon: Hammer,
      title: "Automobile Mechanic",
      image: "https://source.unsplash.com/1000x600/?mechanic,car",
      description:
        "Learn practical and theoretical aspects of modern automobile mechanics with hands-on training.",
    },
    {
      id: "automobile-electrician",
      icon: Bolt,
      title: "Automobile Electrician",
      image: "https://source.unsplash.com/1000x600/?car,electric",
      description:
        "Specialize in automobile electrical systems, diagnostics, and maintenance.",
    },
    {
      id: "automobile-machinist",
      icon: Wrench,
      title: "Automobile Machinist",
      image: "https://source.unsplash.com/1000x600/?machine,garage",
      description:
        "Develop machining and repair skills for automobile components and parts.",
    },
    {
      id: "automobile-ac-mechanic",
      icon: Snowflake,
      title: "Automobile A/C Mechanic",
      image: "https://source.unsplash.com/1000x600/?car,aircondition",
      description:
        "Master automobile A/C repair, installation, and troubleshooting techniques.",
    },
    {
      id: "automobile-painter",
      icon: Paintbrush,
      title: "Automobile Painter",
      image: "https://source.unsplash.com/1000x600/?car,paint",
      description:
        "Learn professional automobile painting and finishing skills.",
    },
    {
      id: "automobile-technician",
      icon: Car,
      title: "Automobile Technician",
      image: "https://source.unsplash.com/1000x600/?car,engine",
      description:
        "Comprehensive training covering diagnosis, service, and modern automotive technologies.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // === Form State ===
  const [formData, setFormData] = useState({
    program: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndexes((prev) => [
              ...prev.filter((i) => i !== index),
              index,
            ]);
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

  // === Handle Input Change ===
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // === Handle Form Submit ===
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Submitted ✅", formData);

    // Example: Send to backend API (uncomment & modify if needed)
    /*
    fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(data => console.log("Server Response:", data))
    .catch(err => console.error("Error:", err));
    */

    // Reset & Close form
    setFormData({
      program: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsFormOpen(false);
  };

  return (
    <section className="bg-white py-16 lg:py-24" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-red-900 mb-4">
            Programs & Training Categories
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our professional and hands-on programs, designed to develop
            the next generation of skilled automobile technicians and engineers.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          ref={containerRef}
        >
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const isVisible = visibleIndexes.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`bg-white rounded-3xl p-8 text-center shadow-md border border-gray-200 transition-all transform duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } hover:-translate-y-3 hover:shadow-2xl`}
              >
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 animate-bounce-slow">
                  <IconComponent className="text-red-800 w-10 h-10" />
                </div>
                <h3 className="font-bold text-red-800 mb-4 text-lg hover:text-red-900 transition-colors">
                  {program.title}
                </h3>
                <Button
                  variant="link"
                  className="text-red-800 hover:text-red-900 font-medium transition-colors p-0"
                  onClick={() => {
                    setSelectedProgram(program);
                    setFormData((prev) => ({ ...prev, program: program.title }));
                  }}
                >
                  View Details
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* === Program Details Popup === */}
      <Dialog
        open={!!selectedProgram}
        onOpenChange={() => setSelectedProgram(null)}
      >
        <DialogContent className="sm:max-w-2xl p-0 overflow-hidden rounded-2xl shadow-xl">
          {selectedProgram && (
            <>
              {/* Image Banner */}
              <div className="relative h-56 sm:h-72 md:h-80 w-full">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h2 className="text-2xl sm:text-3xl font-extrabold">
                    {selectedProgram.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-200 mt-1">
                    {selectedProgram.description}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <DialogFooter>
                  <Button
                    onClick={() => {
                      setIsFormOpen(true);
                      setSelectedProgram(null);
                    }}
                    className="bg-red-700 hover:bg-red-800 text-white rounded-lg px-6 py-2 shadow-md hover:shadow-lg transition"
                  >
                    Enroll Now
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* === Enroll Form Popup === */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Enroll Now</DialogTitle>
            <DialogDescription>
              Fill in your details and we’ll contact you soon.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="program">Program</Label>
              <Input
                id="program"
                value={formData.program}
                readOnly
                className="bg-gray-100 font-semibold"
              />
            </div>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific requests?"
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white"
              >
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

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