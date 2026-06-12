'use client';

import React from 'react';
import { Cloud, Droplets, Leaf, Zap } from 'lucide-react';

const impactMetrics = [
  {
    icon: Cloud,
    value: '25',
    unit: 'Tons CO₂',
    label: 'Avoided Annually',
    color: 'blue',
    description: 'Per 20MT cold storage project'
  },
  {
    icon: Droplets,
    value: '3,000-4,000',
    unit: 'Liters',
    label: 'Diesel Fuel Saved',
    color: 'cyan',
    description: 'Per year per project'
  },
  {
    icon: Leaf,
    value: 'Up to 75%',
    unit: 'Reduction',
    label: 'Post-Harvest Loss',
    color: 'green',
    description: 'Through improved storage'
  },
  {
    icon: Zap,
    value: '80-90%',
    unit: 'Lower Energy',
    label: 'Grid Consumption',
    color: 'orange',
    description: 'Vs traditional systems'
  }
];

export const EnvironmentalImpact: React.FC = () => {
  return (
    <section className="section-container py-32 bg-white">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="section-title">Environmental <span className="text-gradient-green-blue">Impact</span></h2>
        <p className="section-subtitle">
          Real measurable impact on sustainability and profitability
        </p>
      </div>

      {/* Impact Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {impactMetrics.map((metric, idx) => {
          const IconComponent = metric.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600 border-blue-200',
            cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200',
            green: 'bg-green-100 text-green-600 border-green-200',
            orange: 'bg-orange-100 text-orange-600 border-orange-200'
          };

          return (
            <div
              key={idx}
              className={`rounded-2xl border ${colorClasses[metric.color as keyof typeof colorClasses]} p-8 hover:shadow-xl transition-all duration-300 text-center`}
            >
              <div className={`w-14 h-14 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4`}>
                <IconComponent className="w-7 h-7" />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-navy-950 mb-1">{metric.value}</div>
                <div className="text-sm font-700 text-gray-600 uppercase tracking-wide">{metric.unit}</div>
              </div>

              <h4 className="font-bold text-navy-950 mb-2">{metric.label}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
            </div>
          );
        })}
      </div>

      {/* Reduction Sources */}
      <div className="bg-gradient-to-r from-navy-50 to-green-50 rounded-2xl p-12 border border-gray-200 mb-20">
        <h3 className="text-2xl font-bold text-navy-950 mb-8">Sources of Reduction</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: 'Lower Carbon Footprint',
              icon: '🌍',
              percentage: '25-30%'
            },
            {
              label: 'Reduced Diesel Usage',
              icon: '⛽',
              percentage: '3,000L/year'
            },
            {
              label: 'Higher Agricultural Yield',
              icon: '🌾',
              percentage: '50-75%'
            },
            {
              label: 'Sustainable Infrastructure',
              icon: '♻️',
              percentage: '100% Green'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-sm font-600 text-gray-700 mb-2">{item.label}</p>
              <div className="text-2xl font-bold text-green-600">{item.percentage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Timeline */}
      <div>
        <h3 className="text-2xl font-bold text-navy-950 mb-8">Project Impact Over Time</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              period: 'Year 1',
              impact: 'Initial deployment and baseline establishment',
              metrics: [
                '25T CO₂ avoided',
                '3,000L fuel saved',
                '100% uptime achieved'
              ]
            },
            {
              period: 'Year 5',
              impact: 'Optimized operations and proven ROI',
              metrics: [
                '125T CO₂ avoided',
                '15,000L fuel saved',
                'Cost recovery reached'
              ]
            },
            {
              period: 'Year 10+',
              impact: 'Maximum long-term sustainability benefits',
              metrics: [
                '250T CO₂ avoided',
                '30,000L fuel saved',
                'Extended operational life'
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl border-2 border-green-500 p-8 bg-gradient-to-br from-green-50 to-white">
              <h4 className="text-2xl font-bold text-green-600 mb-3">{item.period}</h4>
              <p className="text-gray-700 font-500 mb-6">{item.impact}</p>
              <ul className="space-y-2">
                {item.metrics.map((metric, metricIdx) => (
                  <li key={metricIdx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm font-600 text-gray-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
