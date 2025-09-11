import React from "react";
import Header from "../components/Header"; // Header component
import Footer from "../components/Footer"; // Footer component
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Building2, Award, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About <span className="text-blue-700">IETI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The Industrial Engineering Training Institute (IETI) is committed to developing skilled 
            professionals by offering specialized industrial training programs, practical learning 
            opportunities, and career-focused education under the guidance of the National Apprentice 
            & Industrial Training Authority (NAITA).
          </p>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            className="rounded-2xl shadow-lg"
          >
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
                alt="Training"
                className="rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="Students"
                className="rounded-2xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80"
                alt="Industry"
                className="rounded-2xl"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
           The Industrial Engineering Training Institute (IETI) is a leading national 
           institute under NAITA, dedicated to producing highly skilled professionals 
           in the field of industrial engineering. Through industry-focused training 
           and hands-on learning, IETI empowers individuals to build successful careers 
           that meet both local and global workforce demands.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Over the years, IETI has trained thousands of students in industrial engineering,
            combining practical expertise with modern technology. As a trusted institute under 
            NAITA, we continue to shape skilled professionals who are ready to meet the challenges 
            of today’s industries and contribute to Sri Lanka’s growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                To equip individuals with practical industrial engineering skills and foster a 
                competent workforce that drives innovation, productivity, and national development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-gray-600">
                To be the premier institute in industrial engineering training, 
                recognized for excellence in skill development and shaping professionals 
                who excel in both local and global industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose IETI */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose IETI</h2>
          <p className="mt-4 text-gray-600">
            We provide government-recognized industrial training, hands-on learning 
            with modern technology, and strong industry partnerships to ensure career-ready professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Building2, title: "Govt. Certified Training" },
              { icon: Award, title: "Industry Partnerships" },
              { icon: Users, title: "Global Career Pathways" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col items-center"
              >
                <item.icon className="w-12 h-12 text-green-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
