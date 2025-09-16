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
import Automobile_Electrician from "@/components/assets/Automobile Electrician.jpg"
import Automobile_Machinist from "@/components/assets/Automobile Machinist.jpg"
import Automobile_Mechanic from "@/components/assets/Automobile Mechanic.jpg"
import Automobile_Painter from "@/components/assets/Automobile Painter.jpg"

export default function HeroSlider() {
  // === Register Form state ===
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: "",
    birthday: "",
    certificate: null as File | null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, files } = e.target as HTMLInputElement;
    if (id === "certificate" && files) {
      setFormData((prev) => ({ ...prev, certificate: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
    alert("Application submitted successfully ✅");
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      education: "",
      birthday: "",
      certificate: null,
      message: "",
    });
    setIsFormOpen(false);
  };

  // === Background slides ===
  const slides = [
    Automobile_Electrician,
    Automobile_Machinist,
    Automobile_Mechanic,
    Automobile_Painter

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
              <div className="w-full h-full bg-black/60"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* === Overlay Text + Modern Apply Button === */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Founded for Skill. <br /> Built for Industry.
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-medium text-gray-200 drop-shadow-md max-w-2xl">
          Automobile Engineering Training Institute (AETI)
        </p>
        <Button
          onClick={() => setIsFormOpen(true)}
          className="mt-10 px-12 py-5 text-lg font-semibold rounded-full bg-red-600 hover:bg-red-500 transition-transform duration-300 shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          Apply Online
        </Button>
      </div>

      {/* === Advanced Register Form Popup === */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg rounded-3xl bg-white p-6 text-black overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>Advanced Registration Form</DialogTitle>
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
                placeholder="Enter your full name"
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
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
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
              <Label htmlFor="education">Educational Results (O/L or A/L)</Label>
              <Input
                id="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="e.g., O/L - 6C, 3S | A/L - 2B, 1C"
                required
              />
            </div>

            <div>
              <Label htmlFor="birthday">Birthday</Label>
              <Input
                id="birthday"
                type="date"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="certificate">Certificate Attachment</Label>
              <Input
                id="certificate"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleChange}
                required
              />
              {formData.certificate && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected: {formData.certificate.name}
                </p>
              )}
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
                className="bg-red-600 hover:bg-red-500 text-white w-full rounded-xl font-semibold py-3 transition-transform duration-300 transform hover:-translate-y-1"
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