'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled ? 'glass-light shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo - Black text on white pill */}
        <div className="bg-transparent">
          <div className="text-gray-900 text-2xl font-bold tracking-tight">
            UNEXGEN
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Solutions', 'Portfolio', 'Technology', 'Support'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-gray-900 hover:text-electric-emerald transition-colors duration-300 font-semibold"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Utility Section */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-electric-emerald rounded-full animate-pulse-emerald" />
            <span className="text-gray-600 font-medium">24/7 Support</span>
          </div>
          <Button variant="primary" className="text-base px-6 py-3">
            Get Energy Audit
          </Button>
        </div>
      </div>
    </header>
  );
};
