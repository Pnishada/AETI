import { useState } from "react";
import { GraduationCap, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        window.scrollTo({ top: elementPosition + window.pageYOffset - headerOffset, behavior: "smooth" });
      }
    } else {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          window.scrollTo({ top: elementPosition + window.pageYOffset - headerOffset, behavior: "smooth" });
        }
      }, 500);
    }
  };

  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About", route: null },
    { name: "Programs", route: null },
    { name: "Departments", route: "/departments" },
    { name: "Gallery", route: "/gallery" },
    { name: "News", route: null },
    { name: "Contact", route: null },
    
  ];

  return (
    <header className="bg-gradient-to-r from-[#7b1e1e] via-[#5a0f0f] to-[#8b1e1e] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_6px_20px_rgba(255,215,0,0.4)] transition-shadow">
              <GraduationCap className="text-[#8b1e1e] w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-wide">AETI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium">
            {navLinks.map((link) =>
              link.route ? (
                <Link key={link.name} href={link.route} className="hover:text-yellow-400 transition-colors">
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleSectionClick(link.name.toLowerCase())}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </button>
              )
            )}
          </nav>

          {/* Search & Download */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-800"
              />
            </form>

            {/* Updated Download Button */}
            <Link href="/download">
              <Button className="bg-white hover:bg-yellow-100 text-red-900 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow">
                Download
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#5a0f0f] border-t border-[#4b0c0c]">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map((link) =>
              link.route ? (
                <Link key={link.name} href={link.route} className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors">
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleSectionClick(link.name.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </button>
              )
            )}
            {/* Mobile Download Button */}
            <Link href="/download">
              <Button className="w-full bg-white hover:bg-yellow-100 text-red-900 px-3 py-2 rounded-lg mt-2 font-semibold">
                Download
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
