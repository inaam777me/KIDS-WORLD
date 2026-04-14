import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Search, Baby, MessageCircle, ChevronRight } from "lucide-react";
import { BRAND_NAME } from "../constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-baby-pink to-baby-rose rounded-full flex items-center justify-center animation-pulse">
            <Baby className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-slate-900">{BRAND_NAME}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#categories" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Categories</a>
          <a href="#featured" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Products</a>
          <a href="#why-us" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Why Us</a>
          <a href="#contact" className="text-slate-600 hover:text-baby-rose transition-colors duration-300">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition-all duration-300 text-slate-600">
            <Search className="w-5 h-5" />
          </button>
          <button className="bg-gradient-to-r from-baby-rose to-pink-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-rose-200/50 transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 space-y-4"
        >
          <a href="#categories" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Categories</a>
          <a href="#featured" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#why-us" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Why Us</a>
          <a href="#contact" className="block text-slate-600 hover:text-baby-rose transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button className="w-full bg-gradient-to-r from-baby-rose to-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Shop Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

