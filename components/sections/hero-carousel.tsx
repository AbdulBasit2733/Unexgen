'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel } from '@/components/carousel/carousel';
import { LightningIcon } from '@/components/icons/Icons';
import { createFadeInUpAnimation } from '@/lib/animations';
import { formatINRAbbrv } from '@/lib/currency';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  stats: Array<{
    label: string;
    value: string | number;
  }>;
  ctaText: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'solar',
    title: 'Solar Power Systems',
    subtitle: 'Industrial-Grade Solar Solutions',
    description:
      'High-efficiency photovoltaic systems with AI-powered monitoring. 25+ year warranties and federal tax credits available now.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    icon: <LightningIcon />,
    stats: [
      { label: 'Installations', value: '500+' },
      { label: 'Avg Annual Savings', value: formatINRAbbrv(2400000) },
      { label: 'System Uptime', value: '99.7%' },
    ],
    ctaText: 'Get Solar Audit',
  },
  {
    id: 'hydrogen',
    title: 'Green Hydrogen Systems',
    subtitle: 'Next-Gen Energy Storage',
    description:
      'Electrolysis-based hydrogen production with industrial-scale capacity. Zero-emission backup power and process heating solutions.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
    icon: <LightningIcon />,
    stats: [
      { label: 'Production Capacity', value: '500+ kg/day' },
      { label: 'Efficiency Rating', value: '88-92%' },
      { label: 'ROI Timeline', value: '4-6 years' },
    ],
    ctaText: 'Explore Hydrogen',
  },
  {
    id: 'hvac',
    title: 'Smart HVAC Solutions',
    subtitle: 'AI-Driven Climate Control',
    description:
      'Autonomous heating/cooling systems with predictive maintenance. 40% energy reduction on average through machine learning optimization.',
    image: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=1200&q=80',
    icon: <LightningIcon />,
    stats: [
      { label: 'Energy Reduction', value: '40% avg' },
      { label: 'Maintenance Savings', value: formatINRAbbrv(750000) },
      { label: 'System Coverage', value: '5,000+ sqft' },
    ],
    ctaText: 'Calculate Savings',
  },
  {
    id: 'grid',
    title: 'Microgrid Solutions',
    subtitle: 'Distributed Energy Networks',
    description:
      'Intelligent microgrids combining solar, hydrogen, and battery storage. Perfect for industrial parks, campuses, and remote facilities.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&q=80',
    icon: <LightningIcon />,
    stats: [
      { label: 'Grid Independence', value: '90%+' },
      { label: 'Power Resilience', value: '24/7' },
      { label: 'Sites Deployed', value: '45+' },
    ],
    ctaText: 'Design Your Microgrid',
  },
  {
    id: 'storage',
    title: 'Energy Storage Systems',
    subtitle: 'Battery & Hydrogen Storage',
    description:
      'Enterprise-grade battery systems paired with hydrogen reserves. Ensures peak demand handling and emergency power backup.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    icon: <LightningIcon />,
    stats: [
      { label: 'Storage Capacity', value: '5+ MWh' },
      { label: 'Response Time', value: '< 100ms' },
      { label: 'Round-trip Efficiency', value: '90%' },
    ],
    ctaText: 'View Storage Options',
  },
];

export const HeroCarousel: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      createFadeInUpAnimation(contentRef.current);
    }
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-cyan-50">
      {/* Fixed Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Carousel
          autoPlay={true}
          autoPlayInterval={6000}
          showIndicators={true}
          showControls={true}
          loop={true}
          className="w-full"
          onSlideChange={(index) => {
            // Trigger animation when slide changes
            if (contentRef.current) {
              createFadeInUpAnimation(contentRef.current, {
                duration: 0.6,
                delay: 0.1,
              });
            }
          }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="min-h-screen flex items-center justify-center"
            >
              <div
                ref={contentRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20"
              >
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-3 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full w-fit">
                    <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white">
                      {slide.title}
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-200 dark:border-gray-700">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button
                      variant="primary"
                      className="text-lg px-8 py-3"
                      icon={<LightningIcon />}
                    >
                      {slide.ctaText}
                    </Button>
                    <Button
                      variant="secondary"
                      className="text-lg px-8 py-3"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Explore Solutions
          </span>
          <svg
            className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
