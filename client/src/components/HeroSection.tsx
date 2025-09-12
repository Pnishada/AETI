"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import studentl from "@/components/assets/studentl.jpg"; // Local image import
import uni1 from "@/components/assets/uni1.jpg";
import uni2 from "@/components/assets/uni2.jpg";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const images: { src: string; alt: string }[] = [
    {
      src: "src/components/assets/car-tools.jpg",
      alt: "Professional team collaborating in modern office",
    },
    {
      src: studentl,
      alt: "Students learning programming",
    },
    {
      src:  "src/components/assets/Automotive_Eng_img.jpg",
      alt: "Hands-on technical training session",
    },
    {
      src:  "src/components/assets/news2.jpg",
      alt: "university students in a lecture hall",
    },
    {
      src: "src/components/assets/Automobile Mechanic.jpg",
      alt: "academic discussion",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsFormOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Founded for skill. Built for industry.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Automobile Engineering Training Institute (AETI)
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#8B1E1E] hover:bg-[#6F1616] text-white px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={() => setIsFormOpen(true)}
              >
                Apply Online
              </Button>
            </div>
          </div>

          {/* Right Content - Slider */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] sm:aspect-[4/3]">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="w-full h-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* === Register Form Popup === */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg rounded-2xl bg-white p-6">
          <DialogHeader>
            <DialogTitle>Apply Online</DialogTitle>
            <DialogDescription>
              Fill in your details and we’ll contact you soon.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
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
              <Button type="submit" className="bg-[#8B1E1E] hover:bg-[#6F1616] text-white w-full">
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}