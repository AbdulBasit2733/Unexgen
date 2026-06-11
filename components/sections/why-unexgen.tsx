'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, SolarIcon, HydrogenIcon, HeatPumpIcon } from '@/components/icons/Icons';

const reasons = [
  {
    icon: SolarIcon,
    title: 'Enterprise-Grade Reliability',
    description: 'Industrial systems tested in extreme conditions. 99.7% uptime SLA with 24/7 monitoring and support.',
    benefits: ['IoT Sensors', '24/7 Monitoring', 'Predictive Maintenance', 'Mobile Alerts'],
  },
  {
    icon: HydrogenIcon,
    title: 'Proven ROI & Savings',
    description: 'Average payback period of 3-5 years with government incentives. Up to $2.4M in lifetime savings.',
    benefits: ['Federal Tax Credits', 'State Rebates', 'Energy Cost Reduction', 'Property Value Increase'],
  },
  {
    icon: HeatPumpIcon,
    title: 'Expert Installation & Support',
    description: 'Licensed technicians with 15+ years experience. Dedicated account managers for enterprise clients.',
    benefits: ['Licensed Professionals', 'Certified Training', 'Lifetime Support', 'Warranty Coverage'],
  },
  {
    icon: CheckIcon,
    title: 'Carbon Reduction Verified',
    description: 'Third-party verified carbon offsets. ESG reporting integration for corporate sustainability goals.',
    benefits: ['Carbon Audits', 'ESG Compliance', 'Green Certifications', 'Sustainability Reports'],
  },
];

export const WhyUnexgen: React.FC = () => {
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
    <section id="why" className="section-padding bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
            Why <span className="text-gradient-brand">Unexgen</span> Stands Out
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            We&apos;ve earned the trust of 500+ enterprise clients with uncompromising quality and results.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-elevated group hover:border-secondary/50 cursor-pointer transition-all"
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent className="w-8 h-8 text-secondary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 pt-6 border-t border-border">
                  {reason.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CheckIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Accent */}
                <motion.div
                  className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  layoutId="glow"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { stat: '500+', label: 'Enterprise Clients' },
            { stat: '99.7%', label: 'System Uptime' },
            { stat: '20+', label: 'Years Experience' },
            { stat: '$2.4M', label: 'Avg Lifetime Savings' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="card p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div
                className="text-3xl lg:text-4xl font-black text-secondary mb-2"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                {item.stat}
              </motion.div>
              <div className="text-text-secondary font-medium">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
