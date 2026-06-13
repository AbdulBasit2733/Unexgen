'use client';

import React from 'react';
import { Building2, Factory, Home, Zap, Leaf, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface IndustryCard {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  color: string;
  image: string;
}

const industries: IndustryCard[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: <Factory className="w-8 h-8" />,
    description: 'Reduce operational costs with our industrial-grade renewable energy systems and process optimization.',
    benefits: ['50-60% cost reduction', 'Zero downtime installation', 'Scheduled preventive maintenance'],
    color: 'brand',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: <Building2 className="w-8 h-8" />,
    description: 'Power your office buildings and retail spaces with our scalable solar and grid solutions.',
    benefits: ['35-45% energy savings', 'Tax credits up to ₹30 Lakhs', 'Real-time monitoring dashboard'],
    color: 'brand',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
  },
  {
    id: 'residential',
    name: 'Residential',
    icon: <Home className="w-8 h-8" />,
    description: 'Transform your home with residential solar, heat pump HVAC, and smart energy management.',
    benefits: ['₹5-10 Lakh annual savings', 'Government subsidies up to 40%', 'Net metering enabled'],
    color: 'brand',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: <Zap className="w-8 h-8" />,
    description: 'Reduce utility costs for hotels, resorts, and restaurants while improving guest experience.',
    benefits: ['40% operating cost cut', 'Enhanced sustainability branding', '24/7 energy management'],
    color: 'brand',
    image: 'https://images.unsplash.com/photo-1631049307038-da31f93f3833?w=600&q=80'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: <Leaf className="w-8 h-8" />,
    description: 'Empower farms with solar water pumping, irrigation automation, and smart resource management.',
    benefits: ['Zero electricity costs', 'Government grants available', 'Crop productivity increase'],
    color: 'brand',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80'
  },
  {
    id: 'education',
    name: 'Education',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Equip schools and universities with renewable energy while teaching sustainability.',
    benefits: ['Educational opportunities', 'CSR benefits realization', 'Long-term cost savings'],
    color: 'brand',
    image: 'https://images.unsplash.com/photo-1427504494785-cdaf3e827c9f?w=600&q=80'
  }
];

export const IndustriesShowcase: React.FC = () => {
  return (
    <section id="industries" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-heading mb-4">
          Solutions for Every <span className="text-gradient-emerald">Industry</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          From manufacturing plants to family homes, we deliver tailored renewable energy and sustainability solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="group card-elevated overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-secondary">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
              
              {/* Icon Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-card/80 backdrop-blur-lg rounded-xl flex items-center justify-center text-primary border border-border">
                {industry.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">{industry.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {industry.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-2 mb-6">
                {industry.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                Explore Solution
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
