import React, { useState } from "react";
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
  const [selected, setSelected] = useState<string | null>(null);

  const courses = [
    "Automobile Mechanic",
    "Automobile Electrician",
    "Automobile Machinist",
    "Automobile A/C Mechanic",
    "Automobile Tinker",
    "Automobile Painter",
  ];

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
            Discover <span className="text-red-700">AETI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The Automobile Engineering Training Institute (AETI) a National
            level Training Institute for automobile engineering was established
            by a grant aid from the Government of Japan at a cost of LKR 500
            million. The Institute was ceremonially declared open on 28th
            October 1989 by his Excellency then President of Sri Lanka along
            with his Excellency then Ambassador of Japan. AETI functions under
            purview of National Apprentice and Industrial Training Authority
            (NAITA) of the Ministry of Education, Higher Education and
            Vocational Education.
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
          <h2 className="text-3xl font-bold text-gray-900">
            Key aspects of AETI (Japan Tech):
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Training courses are conducted in 06 streams with approximately 600
            students (morning & evening batches):
          </p>

          {/* Interactive Courses List */}
          <ul className="text-left mt-6 space-y-2 max-w-md mx-auto">
            {courses.map((course, index) => (
              <li
                key={index}
                onClick={() => setSelected(course)}
                className={`cursor-pointer transition ${
                  selected === course
                    ? "font-bold text-blue-700"
                    : "hover:font-bold"
                }`}
              >
                • {course}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            All automotive courses are formulated in consultation with industry in order to ensure that the trainees meet the skilled manpower requirements of the Automobile Industry, which provide, on-the-job training (OJT) facility for trainees completing the Institutional Training component at the institute. The employment rate of those completing training from the Institute is almost 100%. AETI also provides skill upgrading training with career advancement opportunities for those are in employment. 
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed max-w-3xl mx-auto">
             The institute was relocated to its new premises due to New Kelani Bridge project  in 2017 and Japan International Co-operation Agency (JICA) has kindly offered assistance to re-locate AETI at a cost of over LKR 1500 million.



          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600">
                To provide systematic training and develop technology-related
                skills for students to perform at the highest professional
                level. To produce employable graduates with strong technical
                knowledge, practical skills, and a global outlook for the
                sustainable future of the automotive industry. To foster human
                potential for entrepreneurship and create responsible citizens
                with strong ethical and social values. To maintain strong
                industry linkages and facilitate continued learning, research,
                and innovation within the automotive sector.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-2xl font-semibold text-gray-900">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600">
                To be the best Automotive Training Institute in the region. To
                be a center of excellence imparting technical education and
                producing skilled automobile engineers. To become a leading hub
                for innovation and sustainable solutions in the automotive
                sector.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose NAITA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose AETI</h2>
          <p className="mt-4 text-gray-600">
            We provide government-certified training, industry partnerships, and
            nationwide training opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Building2, title: "Govt. Certified Training" },
              { icon: Award, title: "Industry Partnerships" },
              { icon: Users, title: "Nationwide Training Centers" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col items-center"
              >
                <item.icon className="w-12 h-12 text-red-700" />
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
