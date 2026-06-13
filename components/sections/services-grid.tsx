'use client';

import React from 'react';
import { services } from '@/lib/utils';
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
          Energy <span className="text-gradient-emerald">Solutions</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Comprehensive renewable energy solutions for homes, businesses, and industries across India.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className={`rounded-2xl overflow-hidden border transition-all ${service.isFeatured ? 'border-primary bg-primary text-primary-foreground md:col-span-2 lg:col-span-1' : 'border-border bg-card hover:shadow-lg'}`}>
            <div className="relative h-48 md:h-56">
              <Image
                src={serviceImages[service.id] || 'https://via.placeholder.com/600x400/10b981/ffffff?text=Energy+Solution'}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black mb-2">
                {service.title}
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${service.isFeatured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
