import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import oppluxLogo from "../assets/258df82474b849b69ecba8069ce145ec98c5d6b4.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we are on the home page
  const isHome = location.pathname === "/";

  // If not on home page, always show solid background (or handle differently as needed)
  // For now, let's keep the scroll behavior but maybe default to dark text if not on home?
  // Actually, let's keep the existing logic but ensure it works well on white pages.
  // Since other pages are white background with padding-top, the transparent header might overlap content.
  // Let's force solid background on non-home pages for better visibility?
  // Or just rely on the scroll logic. The user asked for simple router implementation.
  // Let's stick to the existing style logic for now, but ensure links work.

  const textColorClass = isScrolled ? "text-gray-600 hover:text-black" : "text-white/80 hover:text-white";
  const logoFilterClass = isScrolled ? "" : "brightness-200 contrast-100";

  // Navigation items with paths
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Productos", path: "/productos" },
    { name: "Soporte", path: "#" } // Keep as anchor for now or create placeholder
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md py-4 border-b border-gray-200"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={oppluxLogo}
            alt="Opplux"
            className={`h-10 w-auto object-contain transition-all duration-300 ${logoFilterClass}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${textColorClass}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`p-2 rounded-full transition-colors ${isScrolled ? "hover:bg-gray-100 text-black" : "hover:bg-white/10 text-white"}`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-colors ${isScrolled
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-bold text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
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
