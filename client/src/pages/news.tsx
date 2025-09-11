import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import { NewsArticle } from "@/types/news";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "IETI Computer Graphic Designer",
    content: "Building a Skilled Nation with IETI...",
    date: "2025-09-10",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Graduation Ceremony 2025",
    content: "Celebrating the achievements of our graduates...",
    date: "2025-08-20",
    category: "Events",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "New Training Program Launch",
    content: "Introducing advanced training programs...",
    date: "2025-09-05",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

const categories = ["All", "Technology", "Events", "Programs"];

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [, setLocation] = useLocation();

  const filteredNews = newsData.filter((news) => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter((n) => n.featured);
  const regularNews = filteredNews.filter((n) => !n.featured);

  const loadMore = () => setVisibleCount(visibleCount + 4);

  return (
    <>
      {/* Full width header */}
      <Header />

      {/* Page content constrained to max width */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">
          More News & Announcements
        </h1>

        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-full px-12 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setLocation(`/news/${news.id}`)}
                className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer h-64"
              >
                {news.image && (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h2 className="text-white text-2xl font-bold">{news.title}</h2>
                  <p className="text-gray-200 mt-2 line-clamp-2">{news.content}</p>
                  <div className="mt-2 text-sm text-gray-300">{news.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regular News */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.slice(0, visibleCount).map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < regularNews.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMore} className="bg-primary text-white px-8 py-3 rounded-lg">
              Load More
            </Button>
          </div>
        )}
      </div>

      {/* Full width footer */}
      <Footer />
    </>
  );
};

export default NewsPage;
