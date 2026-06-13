'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun, X } from 'lucide-react';

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = window.localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const navItems = [
    { label: 'Solutions', target: 'solutions' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'Technology', target: 'technology' },
    { label: 'Why Unexgen', target: 'why-unexgen' },
  ];

  const handleNavClick = (target: string) => {
    setActiveSection(target);
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.classList.toggle('light', nextTheme === 'light');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled || mobileOpen ? 'glass-light shadow-lg' : 'bg-background/80 backdrop-blur-sm'
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
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-300 pb-1 border-b-2 ${
                activeSection === item.target
                  ? 'text-primary border-b-primary'
                  : 'text-muted-foreground border-b-transparent hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Utility Section */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-emerald" />
            <span className="text-muted-foreground font-medium">24/7 Support</span>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-lg border border-border bg-card text-foreground flex items-center justify-center transition-colors hover:text-primary"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button variant="primary" className="hidden sm:flex text-sm md:text-base px-5 py-2 md:py-3">
            Get Audit
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="h-10 w-10 rounded-lg border border-border bg-card text-foreground flex items-center justify-center md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-lg px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
            <Button variant="primary" className="mt-2 justify-center text-sm">
              Get Audit
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
