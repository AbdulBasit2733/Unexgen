'use client';

import React from 'react';
import { caseStudies } from '@/lib/utils';
import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import { TrendingUp, Zap } from 'lucide-react';

// Before/After images
const portfolioImages: { [key: string]: { before: string; after: string } } = {
  'manufacturing-plant': {
    before: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80'
  },
  'residential-complex': {
    before: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80'
  },
  'warehouse-facility': {
    before: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80'
  }
};

const PortfolioCard: React.FC<{ study: typeof caseStudies[0] }> = ({ study }) => (
  <div className="px-6 h-full">
    <div className="card-elevated h-full overflow-hidden flex flex-col">
      {/* Before/After Split Images */}
      <div className="relative h-96 grid grid-cols-2 gap-1 flex-shrink-0">
        {/* Before */}
        <div className="relative overflow-hidden">
          <Image
            src={portfolioImages[study.id as keyof typeof portfolioImages]?.before || 'https://via.placeholder.com/300x400/6b7280/ffffff?text=Before'}
            alt={`${study.title} - Before`}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute top-4 left-4 bg-foreground/80 px-3 py-1 rounded-lg text-xs text-card font-bold backdrop-blur-sm">
            BEFORE
          </div>
        </div>
        
        {/* After */}
        <div className="relative overflow-hidden">
          <Image
            src={portfolioImages[study.id as keyof typeof portfolioImages]?.after || 'https://via.placeholder.com/300x400/10b981/ffffff?text=After'}
            alt={`${study.title} - After`}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-lg text-xs text-primary-foreground font-bold backdrop-blur-sm">
            AFTER
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        {/* Carbon Offset Badge */}
        <div className="glass-light px-4 py-2 rounded-xl inline-flex items-center gap-2 mb-4 w-fit">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-foreground">Carbon: {study.carbonOffset}</span>
        </div>

        <h3 className="text-2xl font-black mb-2 text-foreground">{study.title}</h3>
        <p className="text-muted-foreground mb-6 flex-1">{study.location}</p>

        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Annual Savings</div>
            <div className="text-2xl font-black text-primary flex items-center gap-1">
              <TrendingUp className="w-6 h-6" />
              {study.annualKwhSaved}
            </div>
          </div>
          <button className="px-6 py-3 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-xl font-bold transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const PortfolioShowcase: React.FC = () => {
  return (
    <section id="portfolio" className="section-container">
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-black mb-4 text-balance">
          Proven <span className="text-gradient-emerald">Transformations</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real installations. Measurable impact. Verified carbon reduction across India.
        </p>
      </div>

      <Carousel autoplay autoplayDelay={6000} showDots>
        {caseStudies.map((study) => (
          <PortfolioCard key={study.id} study={study} />
        ))}
      </Carousel>
    </section>
  );
};
