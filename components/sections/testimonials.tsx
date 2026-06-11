'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@/components/icons/Icons';
import { testimonials } from '@/lib/utils';

export const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-container section-padding bg-bg-primary">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
          Client <span className="text-gradient-brand">Results</span>
        </h2>
        <p className="text-text-secondary text-lg">
          Real feedback from facility managers and property owners
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="card-glass hover:shadow-lg transition-shadow duration-300"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <StarIcon className="w-5 h-5 text-secondary" filled />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg mb-6 leading-relaxed text-text-primary">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="pt-6 border-t border-border">
              <div className="font-bold text-text-primary">{testimonial.author}</div>
              <div className="text-sm text-text-secondary">{testimonial.role}</div>
              <div className="text-sm text-secondary font-semibold">{testimonial.company}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
