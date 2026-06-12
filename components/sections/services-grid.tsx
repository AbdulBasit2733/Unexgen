'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, Snowflake, ThermometerSun, Sun, TrendingUp } from 'lucide-react';
import { CheckIcon } from '@/components/icons/Icons';

const solutions = [
  {
    id: 'green-cold-storage',
    title: 'Green Cold Storage',
    description: 'Multi-commodity cold rooms, blast freezers, and solar-powered cooling infrastructure',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    icon: Snowflake,
    benefits: [
      'Multi-commodity cold rooms',
      'Renewable energy integration',
      'Remote monitoring & control',
      '24/7 continuous cooling'
    ],
    stats: '80-90% Energy Reduction'
  },
  {
    id: 'hvac-solutions',
    title: 'HVAC Solutions',
    description: 'Industrial and commercial air conditioning systems with energy-efficient VFD compressors',
    image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=600&q=80',
    icon: Zap,
    benefits: [
      'Industrial HVAC systems',
      'Commercial air conditioning',
      'VFD compressor technology',
      'Ducting design & installation'
    ],
    stats: '40-60% Efficiency Gain'
  },
  {
    id: 'thermal-storage',
    title: 'Thermal Energy Storage',
    description: 'Advanced TES systems for peak load management and energy optimization',
    image: 'https://images.unsplash.com/photo-1581092918254-8c1d0a6f57a0?w=600&q=80',
    icon: ThermometerSun,
    benefits: [
      'Peak load shifting',
      'Industrial chillers',
      'Hot water systems',
      'Thermal energy storage'
    ],
    stats: '24/7 Continuous Supply'
  },
  {
    id: 'solar-epc',
    title: 'Solar EPC Projects',
    description: 'Complete end-to-end solar installation with advanced monitoring and grid integration',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    icon: Sun,
    benefits: [
      'Rooftop solar plants',
      'Ground-mounted systems',
      'Hybrid solar systems',
      'Energy monitoring'
    ],
    stats: '100% Renewable Power'
  }
];

export const ServicesGrid: React.FC = () => {
  return (
    <section id="solutions" className="section-container py-32">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="section-title">
          Complete <span className="text-gradient-green-blue">Solutions</span>
        </h2>
        <p className="section-subtitle">
          End-to-end engineering solutions covering design, procurement, installation, and commissioning
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {solutions.map((solution, idx) => {
          const IconComponent = solution.icon;
          return (
            <div 
              key={solution.id}
              className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-green-500 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-navy-950 mb-2">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6 font-500">
                  {solution.description}
                </p>

                {/* Stats Badge */}
                <div className="mb-6 inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-700 text-green-700">{solution.stats}</span>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {solution.benefits.map((benefit, benefitIdx) => (
                    <div key={benefitIdx} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-500">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full px-6 py-3 bg-navy-800 text-white font-700 rounded-lg hover:bg-navy-900 transition-all duration-300 uppercase text-sm tracking-wide">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Integration Section */}
      <div className="mt-20 bg-gradient-to-br from-navy-50 to-white rounded-2xl border border-gray-200 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-navy-950 mb-4">
              Smart Energy Ecosystem
            </h3>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our integrated approach combines solar power generation, intelligent energy management, VFD compressor technology, and thermal energy storage for continuous 24/7 cooling with maximum efficiency.
            </p>
            <ul className="space-y-4">
              {[
                'Design to commissioning support',
                'Government subsidy assistance',
                'Long-term AMC & support',
                'Advanced monitoring dashboard'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700 font-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581092918254-8c1d0a6f57a0?w=600&q=80"
              alt="Thermal energy storage system"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
