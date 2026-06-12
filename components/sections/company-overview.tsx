'use client';

import React from 'react';
import { Target, Eye, Zap, Shield, TrendingUp, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering sustainable solutions through cutting-edge technology'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Dependable systems designed for continuous, optimal performance'
  },
  {
    icon: Zap,
    title: 'Quality',
    description: 'Exceptional engineering standards and meticulous execution'
  },
  {
    icon: TrendingUp,
    title: 'Customer Success',
    description: 'Dedicated support from design through commissioning and beyond'
  }
];

export const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="section-container py-32 bg-white">
      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Mission */}
        <div className="rounded-2xl border border-gray-200 p-12 hover:border-green-500 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-navy-950">Mission</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            To deliver innovative and energy-efficient engineering solutions that improve profitability while reducing environmental impact, through renewable technologies and sustainable infrastructure integration.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-2xl border border-gray-200 p-12 hover:border-blue-500 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-navy-950">Vision</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            To become India&apos;s most trusted green cooling and renewable energy technology company, pioneering sustainable solutions for agriculture, food processing, industrial, and commercial sectors.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-navy-950 mb-4">Core Values</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-colors">
                  <IconComponent className="w-6 h-6 text-green-600 group-hover:text-white" />
                </div>
                <h4 className="text-lg font-bold text-navy-950 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="bg-gradient-to-r from-navy-50 to-blue-50 rounded-2xl p-12 border border-gray-200">
        <h3 className="text-3xl font-bold text-navy-950 mb-8 text-center">Core Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            'Renewable Cooling',
            'Solar Systems',
            'HVAC Engineering',
            'Thermal Storage',
            'Industrial Refrigeration',
            'Smart Automation'
          ].map((expertise, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-green-500 transition-colors"
            >
              <p className="font-700 text-navy-950 text-sm">{expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
