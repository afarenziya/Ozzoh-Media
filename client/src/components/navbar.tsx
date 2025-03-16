import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", path: "/" },
  { name: "Services", href: "#services", path: "/services" },
  { name: "About", href: "#about", path: "/about" },
  { name: "Portfolio", href: "#portfolio", path: "/portfolio" },
  { name: "Blog", href: "#blog", path: "/blog" },
  { name: "Contact", href: "#contact", path: "/contact" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5",
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white font-syne">
              <span className="text-blue-500">Ozzoh</span>Media
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={location === "/" ? link.href : `/${link.path}${link.href}`}
                className="nav-link relative font-medium hover:text-blue-500 transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:bottom-[-2px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">
                Get Started
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F1621]/90 backdrop-blur-md rounded-lg p-4 mt-2 border border-white/5">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={location === "/" ? link.href : `/${link.path}${link.href}`}
                  className="py-2 text-gray-100 hover:text-blue-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="py-2.5 mt-2 w-full" asChild>
                <a href="#contact">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
