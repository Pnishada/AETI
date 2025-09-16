"use client";

import { useState } from "react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Photos");

  const galleryItems = [
    { type: "Photos", image: "src/components/assets/Students_projects.webp", caption: "Students collaborating on engineering projects" },
    { type: "Photos", image: "src/components/assets/training_workshop.webp", caption: "Advanced technical training workshop" },
    { type: "Photos", image: "src/components/assets/lab_training_session.webp", caption: "Modern computer lab training session" },
    { type: "Photos", image: "src/components/assets/training_program.webp", caption: "Hospitality training program" },
    { type: "Photos", image: "src/components/assets/graduation_ceremony.webp", caption: "Apprenticeship graduation ceremony" },
    { type: "Photos", image: "src/components/assets/training_facility.webp", caption: "Industrial training facility" },
    { type: "Photos", image: "src/components/assets/skills_development_workshop.webp", caption: "Vocational skills development workshop" },
    { type: "Photos", image: "src/components/assets/Healthcare_training.webp", caption: "Healthcare training program" },
    { type: "Photos", image: "src/components/assets/training_center_building.webp", caption: "IETI training center building" },
    { type: "Videos", image: "src/components/assets/video_thumbnail_1.webp", caption: "Introduction to IETI programs" },
    { type: "Videos", image: "src/components/assets/video_thumbnail_2.webp", caption: "Student project showcase" },
    { type: "YouTube", image: "src/components/assets/youtube_thumbnail_1.webp", caption: "Official IETI YouTube video" },
    { type: "Events", image: "src/components/assets/event_1.webp", caption: "Annual training workshop" },
    { type: "Events", image: "src/components/assets/event_2.webp", caption: "Graduation ceremony" },
  ];

  const tabs = ["Photos", "Videos", "YouTube", "Events"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b1e1e] via-[#5a0f0f] to-[#8b1e1e] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-yellow-100 leading-relaxed drop-shadow-sm">
            Explore AETI's programs, events, student achievements, and state-of-the-art facilities through our gallery.
          </p>
        </div>
      </section>

      {/* Tabs Buttons */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-center space-x-4 flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#7b1e1e] text-white shadow-md scale-105"
                  : "bg-white text-[#7b1e1e] border border-[#7b1e1e] hover:bg-[#7b1e1e] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryItems
              .filter((item) => item.type === activeTab)
              .map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 rounded-3xl">
                    <p className="text-white font-semibold text-center w-full">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
