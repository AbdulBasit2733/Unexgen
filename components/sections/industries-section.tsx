'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, Factory, Utensils, Building2 } from 'lucide-react';

const industries = [
  {
    id: 'agriculture',
    title: 'Agriculture & Horticulture',
    icon: Leaf,
    color: 'green',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
    sectors: [
      'Fruits & Vegetables',
      'FPOs',
      'Export Houses',
      'Cooperative Storage'
    ],
    description: 'Sustainable cold storage solutions for preserving agricultural produce with minimal energy consumption'
  },
  {
    id: 'food-processing',
    title: 'Food Processing',
    icon: Utensils,
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1585518419759-f2da2288cf75?w=600&q=80',
    sectors: [
      'Dairy Industry',
      'Frozen Foods',
      'Beverage Industry',
      'Packhouse'
    ],
    description: 'Industrial-grade refrigeration systems designed for food safety and quality preservation'
  },
  {
    id: 'industrial',
    title: 'Industrial',
    icon: Factory,
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1581092918269-8c91db6854d4?w=600&q=80',
    sectors: [
      'Manufacturing Plants',
      'Pharma Facilities',
      'Logistics Parks',
      'Warehouses'
    ],
    description: 'Specialized cooling solutions for industrial facilities with high thermal demands'
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: Building2,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1576092160550-2173dba999ef?w=600&q=80',
    sectors: [
      'Hospitals',
      'Hotels & Restaurants',
      'Shopping Centers',
      'Institutions'
    ],
    description: 'Comfort cooling solutions for commercial buildings with energy efficiency'
  }
];

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="section-container py-32 bg-white">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="section-title">Industries We <span className="text-gradient-green-blue">Serve</span></h2>
        <p className="section-subtitle">
          Trusted by diverse sectors for complete cooling and energy solutions
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {industries.map((industry, idx) => {
          const IconComponent = industry.icon;
          const colorClasses = {
            green: 'hover:border-green-500 group-hover:bg-green-500',
            blue: 'hover:border-blue-500 group-hover:bg-blue-500',
            cyan: 'hover:border-cyan-500 group-hover:bg-cyan-500',
            purple: 'hover:border-purple-500 group-hover:bg-purple-500'
          };

          return (
            <div
              key={industry.id}
              className={`group rounded-2xl overflow-hidden border border-gray-200 ${colorClasses[industry.color as keyof typeof colorClasses]} transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent" />

                {/* Icon Badge */}
                <div className={`absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${
                    industry.color === 'green' ? 'text-green-600' :
                    industry.color === 'blue' ? 'text-blue-600' :
                    industry.color === 'cyan' ? 'text-cyan-600' :
                    'text-purple-600'
                  }`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-navy-950 mb-2 group-hover:text-green-600 transition-colors">
                  {industry.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {industry.description}
                </p>

                {/* Sectors */}
                <div className="space-y-2 mb-6">
                  {industry.sectors.map((sector, sectorIdx) => (
                    <div key={sectorIdx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        industry.color === 'green' ? 'bg-green-500' :
                        industry.color === 'blue' ? 'bg-blue-500' :
                        industry.color === 'cyan' ? 'bg-cyan-500' :
                        'bg-purple-500'
                      }`} />
                      <span className="text-sm text-gray-700 font-500">{sector}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full px-6 py-3 rounded-lg font-700 uppercase text-sm tracking-wide transition-all duration-300 text-white ${
                  industry.color === 'green' ? 'bg-green-500 hover:bg-green-600' :
                  industry.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                  industry.color === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-600' :
                  'bg-purple-500 hover:bg-purple-600'
                }`}>
                  Get Solution
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why Choose Unexgen */}
      <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl p-12 lg:p-16 text-white">
        <h3 className="text-3xl font-bold mb-8">Why Choose Unexgen Across Industries?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Complete Engineering Solution',
              description: 'Design to commissioning with full technical support'
            },
            {
              title: 'Government Subsidy Assistance',
              description: 'Help with subsidy applications and compliance'
            },
            {
              title: 'Solar + Cooling Integration',
              description: 'Renewable energy with smart cooling systems'
            },
            {
              title: 'Advanced TES Technology',
              description: 'Thermal energy storage for peak optimization'
            },
            {
              title: 'High ROI Returns',
              description: 'Fast payback periods with long-term savings'
            },
            {
              title: 'Long-term Support',
              description: '24/7 AMC and ongoing technical assistance'
            }
          ].map((feature, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-700 mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
