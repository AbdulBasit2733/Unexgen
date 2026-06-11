'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckIcon } from '@/components/icons/Icons';

const processSteps = [
  {
    id: 1,
    title: 'Free Energy Audit',
    description: 'Our certified technicians assess your property and identify energy waste opportunities.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    features: ['Thermal imaging scan', 'Load calculation', 'ROI projection']
  },
  {
    id: 2,
    title: 'Custom System Design',
    description: 'AI-powered design creates the optimal solar, HVAC, or hydrogen solution for your needs.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    features: ['3D modeling', 'Tax credit analysis', 'Financing options']
  },
  {
    id: 3,
    title: 'Professional Installation',
    description: 'Licensed technicians install your system with minimal disruption and maximum precision.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
    features: ['Clean install', 'Quality materials', 'Safety certified']
  },
  {
    id: 4,
    title: '24/7 Monitoring & Support',
    description: 'Real-time system monitoring with instant alerts and predictive maintenance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    features: ['IoT sensors', 'Mobile app', 'Emergency service']
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="section-container section-padding bg-bg-secondary">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
          How <span className="text-gradient-brand">It Works</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto">
          From consultation to installation, we handle everything to ensure your transition to clean energy is seamless
        </p>
      </motion.div>

      <div className="space-y-20">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <motion.div
              className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-border">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                {/* Step Number Badge */}
                <motion.div
                  className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <span className="text-3xl font-black text-white">{step.id}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <h3 className="text-4xl font-bold mb-4 text-text-primary">{step.title}</h3>
              <p className="text-xl text-text-secondary mb-6 leading-relaxed">
                {step.description}
              </p>

              <ul className="space-y-3">
                {step.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckIcon className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-lg text-text-primary font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
