import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { NewsArticle } from "@/types/news";

const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "NAITA Mobile Application",
    content: "Building a Skilled Nation with NAITA...",
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

const NewsDetails: React.FC = () => {
  const [match, params] = useRoute("/news/:id");

  if (!match) return <div>News not found</div>;

  const newsId = parseInt(params.id);
  const news = newsData.find((n) => n.id === newsId);

  if (!news) return <div>News not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/news">
          <Button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200">
            ← Back to News
          </Button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-slate-900">{news.title}</h1>
      <div className="text-sm text-gray-500 mb-6">{news.date} • {news.category}</div>
      {news.image && <img src={news.image} alt={news.title} className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg" />}
      <p className="text-gray-700 text-lg leading-relaxed">{news.content}</p>
    </div>
  );
};

export default NewsDetails;
