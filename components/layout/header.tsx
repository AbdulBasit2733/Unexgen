'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Technology', href: '#technology' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'h-16 glass-light shadow-2xl' 
            : 'h-20 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                scrolled ? 'text-navy-950' : 'text-navy-950'
              }`}>
                UNEXGEN
              </div>
              <span className="hidden sm:inline text-xs font-600 text-green-500 tracking-widest uppercase">
                Technology
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-600 text-gray-700 hover:text-green-500 transition-colors duration-300 uppercase tracking-wide relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Status Indicator - Desktop */}
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green" />
              <span className="text-gray-600 font-medium">24/7 Support</span>
            </div>

            {/* CTA Button */}
            <Button 
              variant="primary" 
              className="hidden sm:block text-sm px-6 py-2.5 font-bold"
            >
              Get Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-sm lg:hidden">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-600 text-gray-900 hover:text-green-500 transition-colors py-3 border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button 
              variant="primary" 
              className="w-full mt-8 text-lg py-4 font-bold"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
