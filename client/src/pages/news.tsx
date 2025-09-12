"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
  description: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "AETI TechFest 2025 – Awards Ceremony",
    date: "Saturday, 06 September 2025",
    image: "/images/news1.jpg",
    link: "/news/1",
    description:
      "Celebrating innovation and excellence at the annual TechFest awards of AETI Colombo.",
  },
  {
    id: 2,
    title: "Industrial Training Highlights 2025",
    date: "Thursday, 04 September 2025",
    image: "/images/news2.jpg",
    link: "/news/2",
    description:
      "Students gained practical exposure and showcased technical skills during industrial training.",
  },
  {
    id: 3,
    title: "Collaboration with University of Queensland",
    date: "Thursday, 04 September 2025",
    image: "/images/news3.jpg",
    link: "/news/3",
    description:
      "AETI strengthens international partnerships with leading universities for advanced learning.",
  },
  {
    id: 4,
    title: "Student Innovation Hackathon 2025",
    date: "Monday, 01 September 2025",
    image: "/images/news4.jpg",
    link: "/news/4",
    description:
      "Creative ideas and engineering solutions from students at AETI’s annual hackathon.",
  },
];

const NewsPage: React.FC = () => {
  const featured = newsData[0];
  const others = newsData.slice(1);

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-white text-black py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Automobile Engineering Training Institute
        </h1>
        <p className="mt-3 text-xl text-gray-600">Orugodawatta</p>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-500">
          Stay updated with the latest happenings, achievements, and events at
          AETI Colombo.
        </p>
      </section>

      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Featured News */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
              <p className="text-sm mb-3">{featured.date}</p>
              <a
                href={featured.link}
                className="inline-block bg-[#B22222] px-5 py-2 rounded-full hover:bg-[#8B0000] transition"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            {others.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-24 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold hover:text-[#B22222]">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All News Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-black">Latest News</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 hover:text-[#B22222]">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-[#B22222] hover:bg-[#8B0000] text-white px-6 py-3 rounded-full shadow transition">
              Load More
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default NewsPage;
