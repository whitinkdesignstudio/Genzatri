import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'TICKETS', href: '#tickets' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#521C42]/95 backdrop-blur-md border-b border-[#D4AF37]/40 py-2 shadow-xl shadow-[#380E2D]/50'
          : 'bg-[#521C42]/90 backdrop-blur-sm border-b border-[#D4AF37]/30 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Unified Brand Logo */}
        <a href="#hero" className="flex items-center">
          <Logo size="md" />
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-widest text-[#F3EAD9]/90 hover:text-[#D4AF37] transition-colors py-1 relative group uppercase"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Far Right: Clean Gold Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onBookClick}
            className="px-6 py-2.5 text-xs font-black tracking-widest uppercase text-[#0A060A] bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227] rounded-full shadow-lg hover:brightness-110 hover:shadow-[#D4AF37]/40 transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            BOOK TICKETS
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#D4AF37] hover:bg-[#120A14] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2D0A22] border-b border-[#D4AF37]/30 px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold tracking-widest text-[#F3EAD9] hover:text-[#D4AF37] transition-colors py-2 border-b border-[#D4AF37]/10 uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
