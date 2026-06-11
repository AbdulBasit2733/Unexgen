import React from 'react';
import { StarIcon } from '@/components/icons/Icons';
import { testimonials } from '@/lib/utils';

export const Testimonials: React.FC = () => {
  return (
    <section className="section-container bg-white">
      <div className="mb-12">
        <h2 className="text-5xl font-black mb-4 text-gray-900">
          Client <span className="text-electric-emerald">Results</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Real feedback from facility managers and property owners
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card-glass">
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <StarIcon key={idx} className="w-5 h-5 text-electric-emerald" filled />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg mb-6 leading-relaxed text-gray-900">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="pt-6 border-t border-gray-200">
              <div className="font-bold text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
              <div className="text-sm text-electric-emerald">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
