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
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location === "/") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 800);
    }
  };

  return (
    <header className="bg-red-800 text-white shadow-md border-b border-red-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            data-testid="logo"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <GraduationCap className="text-red-800 w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-wide">IETI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-6"
            data-testid="desktop-nav"
          >
            <Link
              href="/"
              className="hover:text-yellow-200 transition-colors"
              data-testid="nav-home"
            >
              Home
            </Link>
            <button
              onClick={() => handleSectionClick("about")}
              className="hover:text-yellow-200 transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("programs")}
              className="hover:text-yellow-200 transition-colors"
              data-testid="nav-programs"
            >
              Programs
            </button>
            <Link
              href="/training-centers"
              className="hover:text-yellow-200 transition-colors"
              data-testid="nav-training"
            >
              Training Centers
            </Link>
            <Link
              href="/gallery"
              className="hover:text-yellow-200 transition-colors"
              data-testid="nav-gallery"
            >
              Gallery
            </Link>
            <button
              onClick={() => handleSectionClick("news")}
              className="hover:text-yellow-200 transition-colors"
              data-testid="nav-news"
            >
              News
            </button>
            <button
              onClick={() => handleSectionClick("contact")}
              className="hover:text-yellow-200 transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* Search Bar and Download Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative" data-testid="search-form">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-slate-800"
                  data-testid="input-search"
                />
              </div>
            </form>
            <Button
              className="bg-white hover:bg-yellow-100 text-red-900 px-6 py-2 rounded-lg font-semibold transition-colors"
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
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" data-testid="mobile-menu">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-red-700 border-t border-red-900">
            {/* Mobile Search Bar */}
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative" data-testid="mobile-search-form">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-slate-800"
                    data-testid="input-mobile-search"
                  />
                </div>
              </form>
            </div>
            <Link href="/" className="block px-3 py-2 text-white" data-testid="mobile-nav-home">Home</Link>
            <button onClick={() => handleSectionClick("about")} className="block px-3 py-2 text-white text-left w-full" data-testid="mobile-nav-about">About</button>
            <button onClick={() => handleSectionClick("programs")} className="block px-3 py-2 text-white text-left w-full" data-testid="mobile-nav-programs">Programs</button>
            <Link href="/training-centers" className="block px-3 py-2 text-white" data-testid="mobile-nav-training">Training Centers</Link>
            <Link href="/gallery" className="block px-3 py-2 text-white" data-testid="mobile-nav-gallery">Gallery</Link>
            <button onClick={() => handleSectionClick("news")} className="block px-3 py-2 text-white text-left w-full" data-testid="mobile-nav-news">News</button>
            <button onClick={() => handleSectionClick("contact")} className="block px-3 py-2 text-white text-left w-full" data-testid="mobile-nav-contact">Contact</button>
            <Button
              className="w-full text-left bg-white hover:bg-yellow-100 text-red-900 px-3 py-2 rounded-lg mt-2 font-semibold transition-colors"
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