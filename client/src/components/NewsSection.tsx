import { GraduationCap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NewsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" data-testid="text-news-title">
            Latest News & Announcements
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* News Article 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow" data-testid="card-news-testimonial">
            <div className="flex items-start space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                alt="Professional headshot" 
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                data-testid="img-testimonial-avatar"
              />
              <div className="flex-1">
                <div className="text-sm text-slate-500 mb-2" data-testid="text-testimonial-date">1 alarm left - 4d</div>
                <h3 className="font-bold text-slate-900 mb-2 leading-tight" data-testid="text-testimonial-title">
                  IETI has played a crucial role in my career development
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed" data-testid="text-testimonial-content">
                  Through IETI's comprehensive training programs, I gained the skills and knowledge needed 
                  to advance in my career. The practical experience and industry connections have been invaluable.
                </p>
                <div className="mt-4 text-sm font-medium text-slate-800" data-testid="text-testimonial-name">Adveir Ojente</div>
                <div className="text-sm text-slate-500" data-testid="text-testimonial-year">Graduate 1994</div>
              </div>
            </div>
          </div>

          {/* News Article 2 - Mobile App Mockup */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow" data-testid="card-news-mobile">
            <div className="space-y-4">
              <div className="text-sm text-slate-500" data-testid="text-mobile-date">Most recent</div>
              <h3 className="font-bold text-slate-900 text-xl leading-tight" data-testid="text-mobile-title">
                IETI Mobile Application
              </h3>
              
              {/* Mobile app mockup */}
              <div className="relative" data-testid="mockup-mobile-app">
                <div className="bg-slate-900 rounded-2xl p-4 max-w-xs">
                  <div className="bg-white rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <GraduationCap className="text-white w-3 h-3" />
                      </div>
                      <span className="text-sm font-bold">IETI</span>
                      <Menu className="w-4 h-4 text-slate-400 ml-auto" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm">Building a Skilled Nation with IETI</h4>
                      <p className="text-xs text-slate-600">Industrial Engineering Training Institute (IETI)</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="bg-primary text-white text-xs px-3 py-1 rounded h-6"
                        data-testid="button-mockup-explore"
                      >
                        Explore Programs
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-accent text-white text-xs px-3 py-1 rounded h-6"
                        data-testid="button-mockup-apply"
                      >
                        Apply Online
                      </Button>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=120" 
                      alt="Building in mobile view" 
                      className="w-full h-16 object-cover rounded"
                      data-testid="img-mockup-building"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Button */}
        <div className="text-center mt-12">
           <Link href="/news">
          <Button 
            variant="outline" 
           className="bg-white border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
          data-testid="button-more-news"
          >
            More News & Announcements
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
