"use client";

import { useState } from "react";
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function HeroSlider() {
  // === Register Form state ===
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsFormOpen(false);
  };

  // === Background slides ===
  const slides = [
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* === Background Slider === */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Dark overlay */}
              <div className="w-full h-full bg-black/60"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* === Overlay Text + Button === */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Founded for Skill. <br /> Built for Industry.
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-medium text-gray-200 drop-shadow-md">
          Automobile Engineering Training Institute (AETI)
        </p>
        <Button
          onClick={() => setIsFormOpen(true)}
          className="mt-8 px-10 py-5 text-lg rounded-2xl bg-red-600 hover:bg-red-500 transition duration-300 shadow-xl"
        >
          Apply Online
        </Button>
      </div>

      {/* === Register Form Popup === */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg rounded-2xl bg-white p-6 text-black">
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
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-500 text-white w-full"
              >
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}