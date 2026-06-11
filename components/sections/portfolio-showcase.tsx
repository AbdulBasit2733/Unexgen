import React from 'react';
import { caseStudies } from '@/lib/utils';
import Image from 'next/image';

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

export const PortfolioShowcase: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl font-black mb-4 text-gray-900">
          Proven <span className="text-electric-emerald">Transformations</span>
        </h2>
        <p className="text-gray-600 text-xl">
          Real installations. Measurable impact. Verified carbon reduction.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 pb-6">
        {caseStudies.map((study) => (
          <div 
            key={study.id}
            className="flex-shrink-0 w-[550px] bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Before/After Split Images */}
            <div className="relative h-80 grid grid-cols-2 gap-1">
              {/* Before */}
              <div className="relative overflow-hidden">
                <Image
                  src={portfolioImages[study.id]?.before || 'https://via.placeholder.com/300x400/6b7280/ffffff?text=Before'}
                  alt={`${study.title} - Before`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-gray-900/80 px-3 py-1 rounded text-xs text-white font-bold">
                  BEFORE
                </div>
              </div>
              
              {/* After */}
              <div className="relative overflow-hidden">
                <Image
                  src={portfolioImages[study.id]?.after || 'https://via.placeholder.com/300x400/10b981/ffffff?text=After'}
                  alt={`${study.title} - After`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-electric-emerald px-3 py-1 rounded text-xs text-white font-bold">
                  AFTER
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Carbon Offset Badge */}
              <div className="glass-emerald px-4 py-2 rounded-xl inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-electric-emerald rounded-full" />
                <span className="text-sm font-bold text-gray-900">Carbon Offset: {study.carbonOffset}</span>
              </div>

              <h3 className="text-2xl font-black mb-2 text-gray-900">{study.title}</h3>
              <p className="text-gray-600 mb-6">{study.location}</p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Annual Savings</div>
                  <div className="text-2xl font-black text-electric-emerald">{study.annualKwhSaved}</div>
                </div>
                <button className="px-6 py-3 bg-gray-100 hover:bg-electric-emerald hover:text-white rounded-xl font-bold transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
