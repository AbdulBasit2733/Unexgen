'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckIcon } from '@/components/icons/Icons';
import { services, comparisonData } from '@/lib/utils';
import Image from 'next/image';

// Image mapping for services
const serviceImages: { [key: string]: string } = {
  'industrial-hydrogen': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  'residential-solar': 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  'commercial-hvac': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'heat-pump': 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&q=80'
};

export const ServicesGrid: React.FC = () => {
  return (
    <section id="solutions" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-6 text-gray-900">
          Next-Gen <span className="text-electric-emerald">Energy Solutions</span>
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          Enterprise-grade energy solutions backed by AI monitoring and federal tax incentives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl mb-8">
            <Image
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
              alt="Energy infrastructure comparison"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-3xl font-black mb-4 text-gray-900">
            Why Choose <span className="text-electric-emerald">Unexgen</span>
          </h3>

          {/* Comparison Table */}
          <details className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <summary className="px-6 py-4 cursor-pointer font-bold text-lg text-gray-900 hover:text-electric-emerald transition-colors">
              Traditional vs Unexgen Microgrid
            </summary>
            <div className="px-6 pb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-gray-600">Feature</th>
                    <th className="text-left py-2 text-gray-600">Traditional</th>
                    <th className="text-left py-2 text-electric-emerald">Unexgen</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 text-gray-900">{row.feature}</td>
                      <td className="py-3 text-gray-600">{row.traditional}</td>
                      <td className="py-3 text-electric-emerald font-bold">{row.unexgen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </div>

        {/* Right Column - Service Cards with Images */}
        <div className="space-y-6">
          {services.map((service) => (
            <Card key={service.id} featured={service.isFeatured} className="overflow-hidden p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Column */}
                <div className="relative h-64 md:h-auto md:col-span-2">
                  <Image
                    src={serviceImages[service.id] || 'https://via.placeholder.com/600x400/10b981/ffffff?text=Energy+Solution'}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Column */}
                <div className="md:col-span-3 p-8">
                  <h3 className="text-3xl font-black mb-3">{service.title}</h3>
                  <p className={`text-lg mb-4 ${service.isFeatured ? 'text-white/90' : 'text-gray-600'}`}>
                    {service.description}
                  </p>

                  <div className={`text-2xl font-bold mb-6 ${service.isFeatured ? 'text-white' : 'text-electric-emerald'}`}>
                    {service.lifetimeSavings}
                  </div>

                  <details className={service.isFeatured ? 'bg-white/10 rounded-xl' : 'bg-gray-50 rounded-xl'}>
                    <summary className="px-4 py-3 cursor-pointer font-bold hover:text-electric-emerald transition-colors">
                      View Features
                    </summary>
                    <ul className="px-4 pb-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.isFeatured ? 'text-white' : 'text-electric-emerald'}`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
