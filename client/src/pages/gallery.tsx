"use client";

import { useState, useEffect } from "react";
import { api, GalleryItem } from "@/api/api";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Image");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs = ["Image", "Video"];

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await api.getGallery();
        setGalleryItems(data);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const getImageUrl = (path?: string) => {
    if (!path) return "";
    return path.startsWith("http") ? path : `http://127.0.0.1:8000${path}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-700 text-lg">Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7b1e1e] via-[#5a0f0f] to-[#8b1e1e] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-yellow-100 leading-relaxed drop-shadow-sm">
            Explore AETI's programs, events, student achievements, and state-of-the-art
            facilities through our gallery.
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
              .map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                >
                  <img
                    src={getImageUrl(item.image)}
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
