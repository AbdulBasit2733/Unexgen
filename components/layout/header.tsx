'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Solutions', 'Portfolio', 'Technology', 'Why Unexgen'];

  const handleNavClick = (item: string) => {
    setActiveSection(item.toLowerCase());
    const element = document.getElementById(item.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled ? 'glass-light shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">U</span>
          </div>
          <div className="text-foreground text-xl font-bold tracking-tight">
            UNEXGEN
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 pb-1 border-b-2 ${
                activeSection === item.toLowerCase()
                  ? 'text-primary border-b-primary'
                  : 'text-muted-foreground border-b-transparent hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Utility Section */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-emerald" />
            <span className="text-muted-foreground font-medium">24/7 Support</span>
          </div>
          <Button variant="primary" className="text-sm md:text-base px-6 py-2 md:py-3">
            Get Audit
          </Button>
        </div>
      </div>
    </header>
  );
};
