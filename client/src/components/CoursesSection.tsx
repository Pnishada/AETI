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

interface Course {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  image: string;
  description: string;
  fee: string;
  duration: string;
  method: string;
  type: "Full-Time" | "Part-Time";
}

export default function CoursesSection() {
  const courses: Course[] = [
    // Full-Time Courses
    {
      id: "AM",
      icon: Hammer,
      title: "Automobile Mechanic",
      image: "/assets/Automobile Mechanic.jpg",
      description:
        "Learn practical and theoretical aspects of modern automobile mechanics with hands-on training.",
      fee: "200,000",
      duration: "3 years",
      method: "1 year Institutional; 2 years Industrial",
      type: "Full-Time",
    },
    {
      id: "AE",
      icon: Bolt,
      title: "Automobile Electrician",
      image: "/assets/Automobile Electrician.jpg",
      description:
        "Specialize in automobile electrical systems, diagnostics, and maintenance.",
      fee: "200,000",
      duration: "3 years",
      method: "1 year Institutional; 2 years Industrial",
      type: "Full-Time",
    },
    {
      id: "MC",
      icon: Wrench,
      title: "Machinist",
      image: "/assets/Automobile Machinist.jpg",
      description:
        "Develop machining and repair skills for automobile components and parts.",
      fee: "170,000",
      duration: "3 years",
      method: "1 year Institutional; 2 years Industrial",
      type: "Full-Time",
    },
    {
      id: "A/C",
      icon: Snowflake,
      title: "Automobile A/C Mechanic",
      image: "/assets/Automobile Air Condition Mechanic.jpg",
      description:
        "Master automobile A/C repair, installation, and troubleshooting techniques.",
      fee: "70,000",
      duration: "2 years",
      method: "1 year Institutional; 1 year Industrial",
      type: "Full-Time",
    },
    {
      id: "AP",
      icon: Paintbrush,
      title: "Automobile Painter",
      image: "/assets/Automobile Painter.jpg",
      description: "Learn professional automobile painting and finishing skills.",
      fee: "30,000",
      duration: "1½ years",
      method: "6 months Institutional; 1 year Industrial",
      type: "Full-Time",
    },
    {
      id: "AT",
      icon: Car,
      title: "Automobile Tinker",
      image: "/assets/Automobile Tinker.jpg",
      description: "Comprehensive training covering practical automobile work.",
      fee: "40,000",
      duration: "1½ years",
      method: "6 months Institutional; 1 year Industrial",
      type: "Full-Time",
    },

    // Part-Time Courses
    {
      id: "AMP1",
      icon: Hammer,
      title: "Auto Mechanical Part I (Engine Mechanism)",
      image: "/assets/Auto Mechanical Part I.jpg",
      description:
        "Introduction to engine mechanism and fundamentals of automotive systems.",
      fee: "25,000",
      duration: "6 months",
      method: "Institutional",
      type: "Part-Time",
    },
    {
      id: "AMP2",
      icon: Wrench,
      title: "Auto Mechanical Part II (Chassis Mechanism)",
      image: "/assets/Auto Mechanical Part II.jpg",
      description: "Focus on chassis systems and mechanical assembly techniques.",
      fee: "25,000",
      duration: "6 months",
      method: "Institutional",
      type: "Part-Time",
    },
    {
      id: "AMP3",
      icon: Wrench,
      title: "Auto Mechanical Part III (Advance Course)",
      image: "/assets/Auto Mechanical Part III.jpg",
      description:
        "Advanced mechanical training for automobile repairs and diagnostics.",
      fee: "30,000",
      duration: "1 year",
      method: "Institutional + Industrial",
      type: "Part-Time",
    },
    {
      id: "MTE",
      icon: Bolt,
      title: "Modern Technology Engine Tune-Up",
      image: "/assets/Modern Technology Engine Tune-Up.jpg",
      description:
        "Learn modern engine tuning techniques including fuel injection systems.",
      fee: "35,000",
      duration: "6 months",
      method: "Institutional",
      type: "Part-Time",
    },
    {
      id: "EFI",
      icon: Bolt,
      title: "EFI Systems",
      image: "/assets/EFI Systems.jpg",
      description: "Specialized course on Electronic Fuel Injection systems.",
      fee: "35,000",
      duration: "6 months",
      method: "Institutional",
      type: "Part-Time",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    course: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState<"Full-Time" | "Part-Time">(
    "Full-Time"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndexes((prev) => [...prev.filter((i) => i !== index), index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const children = containerRef.current?.children;
    if (children) Array.from(children).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
    setFormData({ course: "", name: "", email: "", phone: "", message: "" });
    setIsFormOpen(false);
  };

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-800 mb-4">
          Courses & Training Categories
        </h2>
        <p className="text-gray-700">
          Choose from Full-Time or Part-Time courses tailored to your career goals.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setActiveTab("Full-Time")}
          className={`px-6 py-2 rounded-l-lg font-semibold transition ${
            activeTab === "Full-Time"
              ? "bg-red-700 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Full-Time
        </button>
        <button
          onClick={() => setActiveTab("Part-Time")}
          className={`px-6 py-2 rounded-r-lg font-semibold transition ${
            activeTab === "Part-Time"
              ? "bg-red-700 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Part-Time
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" ref={containerRef}>
        {courses
          .filter((c) => c.type === activeTab)
          .map((course, index) => {
            const IconComponent = course.icon;
            const isVisible = visibleIndexes.includes(index);
            return (
              <div
                key={index}
                data-index={index}
                className={`bg-white rounded-3xl p-8 text-center shadow-md border border-gray-200 transition-all transform duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } hover:-translate-y-3 hover:shadow-2xl`}
              >
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 animate-bounce-slow">
                  <IconComponent className="text-red-800 w-10 h-10" />
                </div>
                <h3 className="font-bold text-red-800 mb-4 text-lg hover:text-red-900 transition-colors">
                  {course.title}
                </h3>
                <Button
                  variant="link"
                  className="text-red-800 hover:text-red-900 font-medium transition-colors p-0"
                  onClick={() => {
                    setSelectedCourse(course);
                    setFormData((prev) => ({ ...prev, course: course.title }));
                  }}
                >
                  View Details
                </Button>
              </div>
            );
          })}
      </div>

      {/* Course Details Popup */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden rounded-3xl shadow-xl">
          {selectedCourse && (
            <>
              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-t-3xl" />
                <div className="absolute bottom-6 left-6 flex flex-col gap-2 text-white">
                  <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center shadow-lg">
                    <selectedCourse.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">{selectedCourse.title}</h2>
                  <p className="text-sm sm:text-base text-gray-200 max-w-xs">{selectedCourse.description}</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <th className="py-2 px-4 font-medium">Fee (Rs.)</th>
                      <td className="py-2 px-4">{selectedCourse.fee}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 px-4 font-medium">Duration</th>
                      <td className="py-2 px-4">{selectedCourse.duration}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 px-4 font-medium">Training Method</th>
                      <td className="py-2 px-4">{selectedCourse.method}</td>
                    </tr>
                  </tbody>
                </table>

                <DialogFooter className="pt-4">
                  <Button
                    onClick={() => {
                      setIsFormOpen(true);
                      setSelectedCourse(null);
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

      {/* Enroll Form Popup */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Enroll Now</DialogTitle>
            <DialogDescription>Fill in your details and we’ll contact you soon.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="course">Course</Label>
              <Input
                id="course"
                value={formData.course}
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
              <Button type="submit" className="bg-red-700 hover:bg-red-800 text-white">
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