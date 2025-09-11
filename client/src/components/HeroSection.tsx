"use client";

import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import studentl from "@/components/assets/studentl.jpg"; // Local image import
import uni1 from "@/components/assets/uni1.jpg";
import uni2 from "@/components/assets/uni2.jpg";

export default function HeroSection() {
  const images: { src: string; alt: string }[] = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Professional team collaborating in modern office",
    },
    {
      src: studentl,
      alt: "Students learning programming",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Hands-on technical training session",
    },
    {
      src: uni1,
      alt: "university students in a lecture hall",
    },
    {
      src: uni2,
      alt: "academic discussion",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Building a Skilled Nation with IETI
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Industrial Engineering Training Institute (IETI)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
                Explore Programs
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors">
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
    </section>
  );
}
