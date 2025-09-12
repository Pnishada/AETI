"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

export default function Departments() {
  const automobileDepartments = [
    {
      name: "Automobile Mechanic",
      description:
        "Our Automobile Mechanic program provides comprehensive training in modern vehicle mechanics. Students will gain hands-on experience in engine repair, suspension, brakes, steering systems, and preventive maintenance. The program combines theoretical knowledge with practical workshops, preparing students for careers in workshops, service centers, and automobile industries. Graduates are equipped with the skills to diagnose and repair vehicles efficiently while understanding the latest automotive technologies.",
      head: "Eng. Ruwan Perera",
      contact: "011-2345678",
      image: "src/components/assets/Automobile Mechanic.jpg",
    },
    {
      name: "Automobile Electrician",
      description:
        "The Automobile Electrician course focuses on vehicle electrical systems, including wiring, battery systems, alternators, lighting, and diagnostic tools. Students learn how to troubleshoot electrical problems, install electronic accessories, and maintain modern automotive electrical systems. This program blends theory and hands-on practical work to produce skilled technicians capable of working in automotive workshops, car dealerships, and manufacturing plants.",
      head: "Eng. Malini Fernando",
      contact: "011-9876543",
      image: "src/components/assets/Automobile Electrician.jpg",
    },
    {
      name: "Automobile Machinist",
      description:
        "This program trains students in machining and repairing automotive components such as engine parts, gearboxes, and custom mechanical assemblies. Students gain skills in lathe work, milling, welding, and precision measurement. The curriculum integrates classroom instruction with real-world industrial training to ensure graduates are proficient in high-quality fabrication and repair, meeting industry standards.",
      head: "Eng. Nimal Jayasinghe",
      contact: "011-5566778",
      image: "src/components/assets/Automobile Machinist.jpg",
    },
    {
      name: "Automobile Air Condition Mechanic",
      description:
        "The Automobile Air Condition Mechanic program specializes in the installation, maintenance, and repair of vehicle air conditioning systems. Students learn refrigeration principles, system diagnostics, and handling refrigerants safely. Through practical training, they gain experience in servicing various vehicles and ensuring optimal performance of AC systems, making them highly employable in automotive workshops and service centers.",
      head: "Eng. Sandun Perera",
      contact: "011-6677889",
      image: "src/components/assets/Automobile Air Condition Mechanic.jpg",
    },
    {
      name: "Automobile Painter",
      description:
        "The Automobile Painter course teaches professional painting and finishing techniques for vehicles. Students learn surface preparation, color mixing, spraying techniques, and quality finishing. Safety practices, proper handling of paints, and modern painting technologies are emphasized. Graduates can work in vehicle workshops, paint shops, or start their own automotive refinishing business.",
      head: "Eng. Chamara Perera",
      contact: "011-3344556",
      image: "src/components/assets/Automobile Painter.jpg",
    },
    {
      name: "Automobile Tinker",
      description:
        "This course equips students with general automobile maintenance and repair skills, ideal for those interested in hands-on practical work. Students cover basic engine repair, wheel alignment, brake servicing, and minor electrical systems. The program emphasizes problem-solving and independent work, preparing graduates to work in small garages, service stations, or start their own auto repair business.",
      head: "Eng. Tharindu Silva",
      contact: "011-7788990",
      image: "src/components/assets/Automobile Tinker.jpg",
    },
  ];

  const [selectedDept, setSelectedDept] = useState<typeof automobileDepartments[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="py-16 lg:py-24 flex-1">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-slate-900">
            Automobile Engineering Departments
          </h1>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our specialized automobile programs designed to train the next generation of skilled technicians and mechanics. Our courses combine theoretical knowledge with practical, hands-on workshops to ensure students are industry-ready and proficient with modern automotive technologies.
          </p>

          {/* Department Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automobileDepartments.map((dept, index) => (
              <Card
                key={index}
                className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-slate-900">{dept.name}</h2>
                  <p className="text-slate-600 mb-2 leading-relaxed flex-1">
                    {dept.description.length > 140
                      ? dept.description.substring(0, 140) + "..."
                      : dept.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-sm text-slate-500">
                        <span className="font-medium text-slate-700">Head:</span> {dept.head}
                      </p>
                      <p className="text-sm text-slate-500">
                        <span className="font-medium text-slate-700">Contact:</span> {dept.contact}
                      </p>
                    </div>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => setSelectedDept(dept)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Department Popup */}
      <Dialog open={!!selectedDept} onOpenChange={() => setSelectedDept(null)}>
        <DialogContent className="sm:max-w-3xl rounded-2xl p-0 overflow-hidden bg-transparent shadow-none">
          <AnimatePresence>
            {selectedDept && (
              <motion.div
                key="popup"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Image with overlay */}
                <div className="relative h-64">
                  <img
                    src={selectedDept.image}
                    alt={selectedDept.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>

                  {/* Department Name on top-center */}
                  <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold text-center drop-shadow-lg px-4">
                    {selectedDept.name}
                  </h2>
                </div>

                {/* Description */}
                <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 space-y-4">
                  <p className="text-slate-800 leading-relaxed">{selectedDept.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 items-start sm:items-center">
                    <div>
                      <p className="text-sm text-slate-600">
                        <span className="font-medium text-slate-700">Head:</span> {selectedDept.head}
                      </p>
                      <p className="text-sm text-slate-600">
                        <span className="font-medium text-slate-700">Contact:</span> {selectedDept.contact}
                      </p>
                    </div>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
                      onClick={() => setSelectedDept(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      {/* Partner Institutes Logos Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Partner Institutes
          </h2>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <a
              href="https://iet.edu.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src="src/components/assets/IET_Logo.png"
                alt="Institute of Engineering Technology Katunayake"
                className="h-16 w-auto mb-2"
              />
              <span className="text-sm text-slate-700">
                Institute of Engineering Technology Katunayake
              </span>
            </a>

            <a
              href="https://iet.edu.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src="src/components/assets/IETI.png"
                alt="IETI Industrial Engineering Training Institute Katubedda, Moratuwa"
                className="h-16 w-auto mb-2"
              />
              <span className="text-sm text-slate-700 text-center">
                IETI Industrial Engineering Training Institute Katubedda, Moratuwa
              </span>
            </a>

            <a
              href="https://iet.edu.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src="src/components/assets/NTS_Logo.png"
                alt="Nursing Training School"
                className="h-16 w-auto mb-2"
              />
              <span className="text-sm text-slate-700">
                Nursing Training School
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}