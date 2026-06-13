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
    <section id="solutions" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-6 text-balance text-foreground">
          Next-Gen <span className="text-gradient-emerald">Energy Solutions</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Enterprise-grade energy solutions backed by AI monitoring and government incentives across India.
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

          <h3 className="text-3xl font-black mb-4 text-foreground">
            Why Choose <span className="text-primary">Unexgen</span>
          </h3>

          {/* Comparison Table */}
          <details className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <summary className="px-6 py-4 cursor-pointer font-bold text-lg text-foreground hover:text-primary transition-colors">
              Traditional vs Unexgen Systems
            </summary>
            <div className="px-6 pb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground">Feature</th>
                    <th className="text-left py-2 text-muted-foreground">Traditional</th>
                    <th className="text-left py-2 text-primary">Unexgen</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-3 text-foreground">{row.feature}</td>
                      <td className="py-3 text-muted-foreground">{row.traditional}</td>
                      <td className="py-3 text-primary font-bold">{row.unexgen}</td>
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
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-3xl font-black mb-3 ${service.isFeatured ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-lg mb-6 ${service.isFeatured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className={`text-2xl font-bold ${service.isFeatured ? 'text-primary-foreground' : 'text-primary'}`}>
                    {service.lifetimeSavings}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
