'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HVACIcon, SolarIcon, HydrogenIcon, HeatPumpIcon } from '@/components/icons/Icons';
import { technologies } from '@/lib/utils';

const iconMap = {
  hvac: HVACIcon,
  solar: SolarIcon,
  hydrogen: HydrogenIcon,
  heatpump: HeatPumpIcon
};

export const TrustBar: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 lg:py-20 border-y border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Enterprise-Grade Technology
          </h2>
          <p className="text-text-secondary">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="relative flex flex-col items-center justify-center p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredId(tech.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  animate={hoveredId === tech.id ? { y: -5 } : { y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent
                    className={`w-16 h-16 mb-4 transition-colors duration-300 ${
                      hoveredId === tech.id ? 'text-secondary' : 'text-text-tertiary'
                    }`}
                  />
                </motion.div>

                <h3 className="text-text-primary font-bold text-center mb-1 relative z-10">
                  {tech.name}
                </h3>
                <p className="text-xs text-text-tertiary text-center relative z-10">
                  {tech.description}
                </p>

                {/* Animated Tooltip */}
                <motion.div
                  className="absolute -top-2 -right-2 glass rounded-lg px-3 py-1.5 text-xs text-secondary font-bold whitespace-nowrap z-20 border border-secondary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hoveredId === tech.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.rating}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
