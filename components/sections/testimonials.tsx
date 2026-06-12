'use client';

import React from 'react';
import { StarIcon } from '@/components/icons/Icons';
import { Quote } from 'lucide-react';

const clientTestimonials = [
  {
    id: '1',
    quote: 'The green cold storage system reduced our energy costs by 80% while maintaining perfect temperature control. Government subsidy covered a significant portion of the investment.',
    author: 'Rajesh Kumar',
    role: 'CEO',
    company: 'FreshFarm Exports',
    sector: 'Agriculture',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    id: '2',
    quote: 'Unexgen&apos;s complete engineering solution from design to commissioning was seamless. The ROI payback period was achieved in just 4 years with government incentives.',
    author: 'Priya Patel',
    role: 'Operations Director',
    company: 'FrostPack Foods',
    sector: 'Food Processing',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    id: '3',
    quote: 'Their integrated solar + HVAC solution is revolutionary. We now operate with 90% less grid dependency and the 24/7 AMC support is excellent.',
    author: 'Amit Singh',
    role: 'Plant Manager',
    company: 'CoolTech Industrial',
    sector: 'Manufacturing',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    id: '4',
    quote: 'The thermal energy storage system optimizes our peak loads perfectly. Combined with solar EPC, we achieved complete energy independence within 3 years.',
    author: 'Neha Gupta',
    role: 'Sustainability Manager',
    company: 'GreenLogistics',
    sector: 'Warehousing',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  },
  {
    id: '5',
    quote: 'Unexgen understood our requirements for hospital cooling systems perfectly. The system maintains 100% uptime with intelligent monitoring and predictive maintenance.',
    author: 'Dr. Vikram Nair',
    role: 'Facilities Chief',
    company: 'Medcare Hospital',
    sector: 'Healthcare',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
  },
  {
    id: '6',
    quote: 'Best investment in energy infrastructure we made. The combination of their expertise, government incentives, and post-installation AMC made all the difference.',
    author: 'Sudhir Reddy',
    role: 'Chief Engineer',
    company: 'TechPack Solutions',
    sector: 'Food & Beverage',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="section-container py-32 bg-white">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="section-title">Client <span className="text-gradient-green-blue">Success Stories</span></h2>
        <p className="section-subtitle">
          Real feedback from industry leaders across agriculture, food processing, industrial, and commercial sectors
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientTestimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="group rounded-2xl border border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 p-8 bg-white"
          >
            {/* Quote Icon */}
            <div className="mb-4 flex items-center gap-2">
              <Quote className="w-6 h-6 text-green-500" />
              <span className="text-xs font-700 uppercase tracking-wider text-gray-600">{testimonial.sector}</span>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <StarIcon key={idx} className="w-4 h-4 text-green-500" filled />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 mb-6 leading-relaxed font-500 min-h-24">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author Info */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy-950 text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-600 font-500">{testimonial.role}</div>
                  <div className="text-xs font-600 text-green-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-navy-950 to-navy-900 rounded-2xl p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Cooling Infrastructure?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Join 500+ successful implementations across India. Get expert guidance on government subsidies, complete engineering, and long-term support.
        </p>
        <button className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 uppercase text-sm tracking-wide">
          Start Your Consultation
        </button>
      </div>
    </section>
  );
};
