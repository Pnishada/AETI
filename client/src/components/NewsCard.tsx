import { NewsArticle } from "@/types/news";
import { useLocation } from "wouter";

interface Props {
  news: NewsArticle;
}

const NewsCard: React.FC<Props> = ({ news }) => {
  const [, setLocation] = useLocation();

  return (
    <div
      onClick={() => setLocation(`/news/${news.id}`)}
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full bg-white"
    >
      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-40 object-cover flex-shrink-0"
        />
      )}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2 text-slate-900">{news.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{news.content}</p>
        </div>
        <div className="mt-4 text-xs text-gray-500">{news.date}</div>
      </div>
    </div>
  );
};

export default NewsCard;
