'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="solutions" className="section-container section-padding bg-bg-primary">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
          Next-Gen <span className="text-gradient-brand">Energy Solutions</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto">
          Enterprise-grade energy solutions backed by AI monitoring and federal tax incentives.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Column - Sticky */}
        <motion.div variants={itemVariants} className="lg:sticky lg:top-32 lg:self-start">
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl mb-8 border border-border"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
              alt="Energy infrastructure comparison"
              fill
              className="object-cover"
            />
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 text-text-primary">
            Why Choose <span className="text-secondary">Unexgen</span>
          </h3>

          {/* Comparison Table */}
          <details className="bg-card-glass border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <summary className="px-6 py-4 cursor-pointer font-bold text-lg text-text-primary hover:text-secondary transition-colors">
              Traditional vs Unexgen Microgrid
            </summary>
            <div className="px-6 pb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-text-secondary font-semibold">Feature</th>
                    <th className="text-left py-2 text-text-secondary font-semibold">Traditional</th>
                    <th className="text-left py-2 text-secondary font-semibold">Unexgen</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50 hover:bg-secondary/5 transition-colors">
                      <td className="py-3 text-text-primary font-medium">{row.feature}</td>
                      <td className="py-3 text-text-secondary">{row.traditional}</td>
                      <td className="py-3 text-secondary font-bold">{row.unexgen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </motion.div>

        {/* Right Column - Service Cards with Images */}
        <motion.div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                featured={service.isFeatured}
                className={`overflow-hidden p-0 transition-all ${
                  service.isFeatured
                    ? 'bg-gradient-to-br from-primary to-primary/80 text-white'
                    : 'hover:border-secondary/50'
                }`}
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Column */}
                  <motion.div
                    className="relative h-64 md:h-auto md:col-span-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={
                        serviceImages[service.id] ||
                        'https://via.placeholder.com/600x400/22C55E/ffffff?text=Energy+Solution'
                      }
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Content Column */}
                  <div className="md:col-span-3 p-8">
                    <h3 className={`text-3xl font-bold mb-3 ${service.isFeatured ? 'text-white' : 'text-text-primary'}`}>
                      {service.title}
                    </h3>
                    <p
                      className={`text-lg mb-4 leading-relaxed ${
                        service.isFeatured ? 'text-white/90' : 'text-text-secondary'
                      }`}
                    >
                      {service.description}
                    </p>

                    <div
                      className={`text-2xl font-bold mb-6 ${
                        service.isFeatured ? 'text-white' : 'text-secondary'
                      }`}
                    >
                      {service.lifetimeSavings}
                    </div>

                    <details className={service.isFeatured ? 'bg-white/10 rounded-xl' : 'bg-secondary/5 rounded-xl'}>
                      <summary className={`px-4 py-3 cursor-pointer font-bold transition-colors ${service.isFeatured ? 'hover:text-white' : 'hover:text-secondary'}`}>
                        View Features
                      </summary>
                      <ul className="px-4 pb-4 space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckIcon
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                service.isFeatured
                                  ? 'text-white'
                                  : 'text-secondary'
                              }`}
                            />
                            <span className={`text-sm ${service.isFeatured ? 'text-white/90' : 'text-text-secondary'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
