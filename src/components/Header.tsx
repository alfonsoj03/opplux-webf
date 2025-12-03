import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import oppluxLogo from "figma:asset/258df82474b849b69ecba8069ce145ec98c5d6b4.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColorClass = isScrolled ? "text-gray-600 hover:text-black" : "text-white/80 hover:text-white";
  // Logo brightness filter for better visibility on dark background
  const logoFilterClass = isScrolled ? "" : "brightness-200 contrast-100"; 

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-4 border-b border-gray-200"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={oppluxLogo} 
            alt="Opplux" 
            className={`h-10 w-auto object-contain transition-all duration-300 ${logoFilterClass}`} 
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Inicio", "Nosotros", "Productos", "Soporte"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${textColorClass}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`p-2 rounded-full transition-colors ${isScrolled ? "hover:bg-gray-100 text-black" : "hover:bg-white/10 text-white"}`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-colors ${
            isScrolled 
              ? "bg-black text-white hover:bg-gray-800" 
              : "bg-white text-black hover:bg-gray-200"
          }`}>
            Cotizar Ahora
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {["Inicio", "Nosotros", "Productos", "Soporte"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-bold text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 w-full bg-black text-white py-3 rounded-full font-bold">
                Cotizar Ahora
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
