import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

// TypeScript type for news articles
export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
}

// Actual news data
const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "AETI Computer Graphic Designer",
    content: "Building a Skilled Nation with AETI...",
    date: "2025-09-10",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Graduation Ceremony 2025",
    content: "Celebrating the achievements of our graduates...",
    date: "2025-08-20",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1588075592446-265f3730b2d6?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "New Training Program Launch",
    content: "Introducing advanced training programs...",
    date: "2025-09-05",
    category: "Programs",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "AI Workshop for Students",
    content: "Hands-on AI sessions for beginners...",
    date: "2025-09-08",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1612831455544-d8f2f3e41c8d?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
];

const categories = ["All", "Technology", "Events", "Programs"];

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [, setLocation] = useLocation();

  // Filter news based on search and category
  const filteredNews = newsData.filter(
    (news) =>
      (selectedCategory === "All" || news.category === selectedCategory) &&
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => setVisibleCount(visibleCount + 6);

  return (
    <>
      <Header />

      {/* Hero Carousel / Featured */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-b-3xl">
        <motion.div
          className="absolute inset-0 flex animate-slide"
          initial={{ x: 0 }}
          animate={{ x: -100 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {newsData.filter((n) => n.featured).map((news) => (
            <div key={news.id} className="w-full flex-shrink-0 relative">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
                  {news.title}
                </h1>
                <p className="mt-2 text-gray-200">{news.content}</p>
                <button
                  onClick={() => setLocation(`/news/${news.id}`)}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex gap-8">
        {/* Floating Sidebar */}
        <aside className="w-64 sticky top-28 flex flex-col gap-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-full pl-12 pr-4 py-2 focus:ring-2 focus:ring-red-600 shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* Masonry Grid Articles */}
        <main className="flex-1">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredNews.slice(0, visibleCount).map((news) => (
                <motion.div
                  key={news.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="break-inside-avoid rounded-xl overflow-hidden shadow-lg relative cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setLocation(`/news/${news.id}`)}
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                      {news.category}
                    </span>
                    <h3 className="mt-2 text-white font-semibold">{news.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleCount < filteredNews.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105"
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default NewsPage;
