'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portfolio" className="section-padding overflow-hidden bg-bg-secondary">
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
          Proven <span className="text-gradient-brand">Transformations</span>
        </h2>
        <p className="text-text-secondary text-xl">
          Real installations. Measurable impact. Verified carbon reduction.
        </p>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <motion.div
        className="flex gap-8 overflow-x-auto no-scrollbar px-6 pb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            variants={itemVariants}
            className="flex-shrink-0 w-[550px] bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-500 border border-border"
          >
            {/* Before/After Split Images */}
            <div className="relative h-80 grid grid-cols-2 gap-0.5">
              {/* Before */}
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={
                    portfolioImages[study.id]?.before ||
                    'https://via.placeholder.com/300x400/6b7280/ffffff?text=Before'
                  }
                  alt={`${study.title} - Before`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/80 px-3 py-1 rounded text-xs text-white font-bold">
                  BEFORE
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={
                    portfolioImages[study.id]?.after ||
                    'https://via.placeholder.com/300x400/22C55E/ffffff?text=After'
                  }
                  alt={`${study.title} - After`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded text-xs text-white font-bold">
                  AFTER
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Carbon Offset Badge */}
              <motion.div
                className="glass rounded-xl px-4 py-2 inline-flex items-center gap-2 mb-4 border border-secondary/20"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.div
                  className="w-2 h-2 bg-secondary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-bold text-text-primary">
                  Carbon Offset: {study.carbonOffset}
                </span>
              </motion.div>

              <h3 className="text-2xl font-bold mb-2 text-text-primary">
                {study.title}
              </h3>
              <p className="text-text-secondary mb-6">{study.location}</p>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Annual Savings</div>
                  <div className="text-2xl font-bold text-secondary">
                    {study.annualKwhSaved}
                  </div>
                </div>
                <motion.button
                  className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
