export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
}
