import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { staffMembers } from "../data/staffData";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const StaffPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[320px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Staff</h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto text-gray-200">
            Meet the passionate educators and professionals driving excellence
            at AETI.
          </p>
        </motion.div>
      </section>

      {/* Staff Members */}
      <section className="flex-1 max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Meet Our Team
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay social icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <FaFacebookF className="text-white text-lg hover:text-red-500 cursor-pointer" />
                  <FaTwitter className="text-white text-lg hover:text-red-500 cursor-pointer" />
                  <FaLinkedinIn className="text-white text-lg hover:text-red-500 cursor-pointer" />
                </div>
              </div>

              {/* Text */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {staff.name}
                </h3>
                <p className="text-red-700 font-medium mt-1">{staff.role}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {staff.department}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StaffPage;