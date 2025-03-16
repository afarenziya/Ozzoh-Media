import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F1621] border-t border-white/5 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white font-syne mb-6 inline-block">
              <span className="text-blue-500">Ozzoh</span>Media
            </Link>
            <p className="text-gray-300 mb-6">
              Transforming ideas into digital reality with innovative web development and digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-blue-500 transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">AI Marketing Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">App Development</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates, trends, and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-lg bg-[#0F1621]/50 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-500 rounded-r-lg hover:bg-blue-700 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ozzoh Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
