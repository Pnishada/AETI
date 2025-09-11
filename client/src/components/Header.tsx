import { useState } from "react";
import { GraduationCap, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear search after submission
      setIsMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    
    // If we're already on the homepage, just scroll to the section
    if (location === '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Scroll with offset to account for fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Navigate to homepage first, then scroll to section
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Scroll with offset to account for fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 800); // Give more time for page to fully load
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="logo">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-800">IETI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" data-testid="desktop-nav">
            <Link href="/" className="text-slate-700 hover:text-primary transition-colors" data-testid="nav-home">Home</Link>
            <button 
              onClick={() => handleSectionClick('about')} 
              className="text-slate-700 hover:text-primary transition-colors" 
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick('programs')} 
              className="text-slate-700 hover:text-primary transition-colors" 
              data-testid="nav-programs"
            >
              Programs
            </button>
            <Link href="/departments" className="text-slate-700 hover:text-primary transition-colors" data-testid="nav-training">Deparments</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-primary transition-colors" data-testid="nav-gallery">Gallery</Link>
            <button 
              onClick={() => handleSectionClick('news')} 
              className="text-slate-700 hover:text-primary transition-colors" 
              data-testid="nav-news"
            >
              News
            </button>
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="text-slate-700 hover:text-primary transition-colors" 
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* Search Bar and Download Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative" data-testid="search-form">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  data-testid="input-search"
                />
              </div>
            </form>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors"
              data-testid="button-apply-desktop"
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" data-testid="mobile-menu">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-border">
            {/* Mobile Search Bar */}
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative" data-testid="mobile-search-form">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    data-testid="input-mobile-search"
                  />
                </div>
              </form>
            </div>
            <Link href="/" className="block px-3 py-2 text-slate-700" data-testid="mobile-nav-home">Home</Link>
            <button 
              onClick={() => handleSectionClick('about')} 
              className="block px-3 py-2 text-slate-700 text-left w-full" 
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick('programs')} 
              className="block px-3 py-2 text-slate-700 text-left w-full" 
              data-testid="mobile-nav-programs"
            >
              Programs
            </button>
            <Link href="/training-centers" className="block px-3 py-2 text-slate-700" data-testid="mobile-nav-training">Training Centers</Link>
            <Link href="/gallery" className="block px-3 py-2 text-slate-700" data-testid="mobile-nav-gallery">Gallery</Link>
            <button 
              onClick={() => handleSectionClick('news')} 
              className="block px-3 py-2 text-slate-700 text-left w-full" 
              data-testid="mobile-nav-news"
            >
              News
            </button>
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="block px-3 py-2 text-slate-700 text-left w-full" 
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
            <Button 
              className="w-full text-left bg-primary text-primary-foreground px-3 py-2 rounded-lg mt-2"
              data-testid="button-apply-mobile"
            >
              Download
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
