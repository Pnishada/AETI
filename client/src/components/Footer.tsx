"use client";

import { Link } from "wouter";
import { GraduationCap, Phone, Mail, MapPin, Printer, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const linkHover = {
    whileHover: { scale: 1.05, color: "#ffffff" },
    whileTap: { scale: 0.95 },
  };

  return (
    <footer className="bg-gradient-to-r from-[#7b1e1e] via-[#5a0f0f] to-[#8b1e1e] text-white w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="text-[#8b1e1e] w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">AETI</span>
            </div>
            <p className="text-slate-100 text-sm leading-relaxed">
              To be an institution of excellence in providing training in automobile and related trades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <motion.li {...linkHover}><Link href="/">Home</Link></motion.li>
              <motion.li {...linkHover}><Link href="/about">Discover AETI</Link></motion.li>

              {/* Collapsible Courses */}
              <li>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <span>Courses</span>
                  <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-2 space-y-2 text-slate-300 text-xs overflow-hidden"
                    >
                      <li><Link href="/courses?type=Full-Time">Full-Time</Link></li>
                      <li><Link href="/courses?type=Part-Time">Part-Time</Link></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <motion.li {...linkHover}><Link href="/download">Downloads</Link></motion.li>
              <motion.li {...linkHover}><Link href="/gallery">Gallery</Link></motion.li>
              <motion.li {...linkHover}><Link href="/lms">LMS</Link></motion.li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <motion.li {...linkHover}><Link href="/courses">Training Programs</Link></motion.li>
              <motion.li {...linkHover}><Link href="/download">Student Resources</Link></motion.li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-200">
              <motion.li {...linkHover} className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>
                  <a
                    href="https://maps.app.goo.gl/jK8RepHHaRVSaRJGA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    Automobile Engineering Training Institute <br />
                    69/A, Baseline Road, Orugodawatta
                  </a>
                </span>
              </motion.li>
              <motion.li {...linkHover} className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1" />
                <a href="tel:+94112244333">+94 11 224 4333</a>
              </motion.li>
              <motion.li {...linkHover} className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1" />
                <a href="mailto:info@aeti.lk">info@aeti.lk</a>
              </motion.li>
              <motion.li {...linkHover} className="flex items-start">
                <Printer className="w-4 h-4 mr-2 mt-1" />
                <a href="fax:+94112244333">+94 11 224 4333</a>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 text-sm text-slate-300">
          &copy; {new Date().getFullYear()} AETI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
