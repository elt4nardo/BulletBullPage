import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useMousePosition } from '../hooks/useMousePosition';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount, toggleCart } = useCart();
  const { x, y } = useMousePosition();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate spotlight position relative to navbar
  const spotlightX = (x / window.innerWidth) * 100;
  const spotlightY = Math.min((y / 100) * 100, 100); // Limit to navbar height

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-black py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          background: `radial-gradient(
            circle 400px at ${spotlightX}% ${spotlightY}%, 
            rgba(255, 255, 255, 0.15), 
            transparent 80%
          )`,
        }}
      ></div>

      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/MkWpZM1v/Sin-t-tulo-14.webp" 
            alt="Bullet Bull Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70">
            Home
          </a>
          <a href="#products" className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70">
            Shop
          </a>
          <a href="#about" className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70">
            About
          </a>
          <a href="#contact" className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70">
            Contact
          </a>
        </div>

        {/* Cart button and mobile menu toggle */}
        <div className="flex items-center">
          <button 
            onClick={toggleCart}
            className="relative p-2 text-white transition-opacity hover:opacity-70"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {getItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                {getItemCount()}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4 px-4 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#products" 
              className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#about" 
              className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-white text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};