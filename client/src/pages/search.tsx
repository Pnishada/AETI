import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SearchResult {
  type: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

export default function Search() {
  const [location] = useLocation();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Sample data to search through
  const searchableContent: SearchResult[] = [
    // Training Centers
    {
      type: "Training Center",
      title: "Colombo Training Center",
      description: "Provides industry-standard training in IT, Engineering, and Vocational skills located at 123 Main Street, Colombo 07",
      link: "/training-centers",
      category: "Training Centers"
    },
    {
      type: "Training Center", 
      title: "Galle Training Center",
      description: "Focused on hospitality, tourism, and technical training programs at 45 Galle Road, Galle",
      link: "/training-centers",
      category: "Training Centers"
    },
    {
      type: "Training Center",
      title: "Kandy Training Center", 
      description: "Specialized in NVQ programs and advanced apprenticeships at 67 Peradeniya Road, Kandy",
      link: "/training-centers",
      category: "Training Centers"
    },
    {
      type: "Training Center",
      title: "Jaffna Training Center",
      description: "Offers career development and vocational training across multiple sectors at 21 Stanley Road, Jaffna",
      link: "/training-centers",
      category: "Training Centers"
    },
    // Programs
    {
      type: "Program",
      title: "Apprenticeship Programs",
      description: "Comprehensive apprenticeship programs connecting students with industry employers for hands-on training",
      link: "/#programs",
      category: "Programs"
    },
    {
      type: "Program",
      title: "NVQ Certification",
      description: "National Vocational Qualification programs providing industry-recognized certifications",
      link: "/#programs", 
      category: "Programs"
    },
    {
      type: "Program",
      title: "Special Training Programs",
      description: "Specialized training programs designed for specific industries and career paths",
      link: "/#programs",
      category: "Programs"
    },
    {
      type: "Program",
      title: "Career Development",
      description: "Professional development programs to advance your career in various industries",
      link: "/#programs",
      category: "Programs"
    },
    // Partners
    {
      type: "Partner",
      title: "AETI – Orugodawatta",
      description: "Advanced training and technical education partner at Orugodawatta location",
      link: "/training-centers",
      category: "Partners"
    },
    {
      type: "Partner",
      title: "Sri Lanka Nursing Council",
      description: "Supports hospital and nursing school programs in healthcare training",
      link: "/training-centers",
      category: "Partners"
    },
    {
      type: "Partner",
      title: "Institute of Engineering Technology (IET)",
      description: "Provides professional engineering and technical education programs",
      link: "/training-centers",
      category: "Partners"
    },
    // General Content
    {
      type: "Service",
      title: "Government Certified Training",
      description: "All NAITA programs are government certified and meet national standards",
      link: "/#about",
      category: "Services"
    },
    {
      type: "Service",
      title: "Industry Partnerships",
      description: "Strong partnerships with leading companies for job placement and internships",
      link: "/#about",
      category: "Services"
    },
    {
      type: "Service",
      title: "Nationwide Training Centers",
      description: "Training facilities located across Sri Lanka for convenient access",
      link: "/training-centers",
      category: "Services"
    }
  ];

  useEffect(() => {
    // Extract search query from URL
    const urlParams = new URLSearchParams(location.split('?')[1] || '');
    const query = urlParams.get('q') || '';
    setSearchQuery(query);

    if (query.trim()) {
      performSearch(query);
    }
  }, [location]);

  const performSearch = (query: string) => {
    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = searchableContent.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-search-title">
              Search Results
            </h1>
            {searchQuery && (
              <p className="text-lg text-slate-600" data-testid="text-search-query">
                Results for: <span className="font-semibold text-slate-900">"{searchQuery}"</span>
              </p>
            )}
          </div>

          {isLoading ? (
            <div className="text-center py-12" data-testid="search-loading">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-slate-600">Searching...</p>
            </div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <>
                  <div className="mb-6">
                    <p className="text-slate-600" data-testid="text-results-count">
                      Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {searchResults.map((result, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`search-result-${index}`}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mr-3" data-testid={`result-type-${index}`}>
                                  {result.type}
                                </span>
                                <span className="text-sm text-slate-500" data-testid={`result-category-${index}`}>
                                  {result.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-slate-900 mb-2" data-testid={`result-title-${index}`}>
                                {result.title}
                              </h3>
                              <p className="text-slate-600 mb-4 leading-relaxed" data-testid={`result-description-${index}`}>
                                {result.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <a href={result.link}>
                              <Button 
                                variant="outline" 
                                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                data-testid={`result-link-${index}`}
                              >
                                View Details
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              ) : searchQuery ? (
                <div className="text-center py-12" data-testid="no-results">
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No results found</h3>
                  <p className="text-slate-600 mb-6">
                    We couldn't find anything matching "{searchQuery}". Try searching for:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm">Training Centers</span>
                    <span className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm">Programs</span>
                    <span className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm">Apprenticeships</span>
                    <span className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm">NVQ</span>
                    <span className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm">Career Development</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12" data-testid="empty-search">
                  <p className="text-slate-600">Enter a search term to find training programs, centers, and more.</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}