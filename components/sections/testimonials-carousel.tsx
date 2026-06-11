'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from '@/components/carousel/carousel';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/utils';

interface ClientTestimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
  savings?: string;
  industry: string;
}

const extendedTestimonials: ClientTestimonial[] = [
  {
    id: 'testimonial-1',
    author: 'Rajesh Kumar',
    role: 'Plant Manager',
    company: 'Bangalore Automotive Solutions',
    quote:
      'Unexgen transformed our energy costs. The solar system has been performing beyond expectations, and the ROI projections were spot-on. Their team was professional and installation was seamless.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    savings: '₹75 Lakhs/year',
    industry: 'Manufacturing',
  },
  {
    id: 'testimonial-2',
    author: 'Priya Sharma',
    role: 'Facilities Director',
    company: 'Tiruppur Textile Group',
    quote:
      'The hydrogen system has revolutionized our backup power strategy. We now have zero dependence on grid during peak hours, and the subsidy support from Unexgen made it affordable.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    savings: '₹50 Lakhs/year',
    industry: 'Textiles',
  },
  {
    id: 'testimonial-3',
    author: 'Vikram Patel',
    role: 'Operations Head',
    company: 'Mumbai Logistics Network',
    quote:
      'Their smart HVAC system reduced our cooling costs by 40%. The AI-driven optimization is incredible, and maintenance costs dropped significantly. Best investment we made.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    savings: '₹35 Lakhs/year',
    industry: 'Logistics',
  },
  {
    id: 'testimonial-4',
    author: 'Dr. Anita Kapoor',
    role: 'Operations Manager',
    company: 'Hyderabad Pharma Manufacturing',
    quote:
      'The microgrid solution has given us energy independence and resilience. Production uptime improved significantly, and we hit carbon neutrality targets ahead of schedule.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    savings: '₹100 Lakhs/year',
    industry: 'Pharmaceuticals',
  },
  {
    id: 'testimonial-5',
    author: 'Deepak Reddy',
    role: 'Farm Manager',
    company: 'Punjab Agricultural Cooperative',
    quote:
      'Solar for irrigation has changed everything. Water pumping costs dropped to almost zero, crop yields improved with consistent power, and the government subsidy made it very affordable.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f70674e90?w=400&h=400&fit=crop',
    savings: '₹25 Lakhs/year',
    industry: 'Agriculture',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-emerald-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            What Our <span className="text-emerald-600 dark:text-emerald-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from facility managers, plant directors, and business owners across
            India who have transformed their operations with Unexgen.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          autoPlay={true}
          autoPlayInterval={8000}
          showIndicators={true}
          showControls={true}
          loop={true}
          className="w-full"
        >
          {extendedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-h-full flex items-center justify-center px-4 py-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Client Image */}
                  <div className="relative h-[300px] md:h-[450px] lg:col-span-1">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

                    {/* Industry Badge */}
                    <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      {testimonial.industry}
                    </div>

                    {/* Savings Badge */}
                    {testimonial.savings && (
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur px-4 py-3 rounded-xl">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          Annual Savings
                        </p>
                        <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                          {testimonial.savings}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Testimonial Content */}
                  <div className="p-8 md:p-12 lg:col-span-2 flex flex-col justify-between">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-5 h-5 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-8">
                      <Quote className="w-8 h-8 text-emerald-200 dark:text-emerald-900 mb-4" />
                      <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-relaxed mb-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Client Info */}
                    <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-lg font-black text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Trust Seal */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                        VERIFIED RESULTS
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Installation Date
                          </p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            2022-2023
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            Performance
                          </p>
                          <p className="font-bold text-emerald-600 dark:text-emerald-400">
                            Exceeds Target
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Trust Metrics Footer */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              4.9/5
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Average Rating
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              500+
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Happy Clients
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              100%
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Would Recommend
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              12.5Cr
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Client Savings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
