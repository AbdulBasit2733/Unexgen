'use client';

import React from 'react';
import { StarIcon } from '@/components/icons/Icons';
import { testimonials } from '@/lib/utils';
import { Carousel } from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <div className="px-2 sm:px-6 h-full">
    <div className="card-elevated p-5 sm:p-8 h-full flex flex-col">
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-primary mb-4 opacity-30" />

      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, idx) => (
          <StarIcon key={idx} className="w-5 h-5 text-primary" filled />
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg mb-8 leading-relaxed text-foreground flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="pt-6 border-t border-border">
        <div className="font-bold text-foreground">{testimonial.author}</div>
        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        <div className="text-sm text-primary font-semibold">{testimonial.company}</div>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-container">
      <div className="mb-12 text-center">
        <h2 className="section-heading mb-4">
          Client <span className="text-gradient-emerald">Success Stories</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real feedback from facility managers, property owners, and industrial partners
        </p>
      </div>

      <Carousel autoplay autoplayDelay={5000} showDots>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Carousel>
    </section>
  );
};
