'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const impactData = [
  { name: 'CO2 Avoided (tons/year)', solar: 25, hydrogen: 45, hvac: 12 },
  { name: 'Energy Produced (MWh)', solar: 40, hydrogen: 65, hvac: 0 },
  { name: 'Equivalent Trees', solar: 200, hydrogen: 400, hvac: 100 },
  { name: 'Households Powered', solar: 15, hydrogen: 25, hvac: 8 },
];

const systemBenefits = [
  {
    title: 'Carbon Neutral Operations',
    description: 'Achieve net-zero emissions with renewable energy generation and storage.',
    impact: 'Up to 400 tons CO2/year avoided',
  },
  {
    title: 'Clean Energy Independence',
    description: 'Generate your own power and reduce grid dependence with distributed energy.',
    impact: '80%+ energy self-sufficiency',
  },
  {
    title: 'Waste Reduction',
    description: 'Green hydrogen production with zero harmful emissions.',
    impact: '100% clean hydrogen production',
  },
  {
    title: 'Water Conservation',
    description: 'Solar and hydrogen systems require minimal water for operation.',
    impact: '0% water consumption',
  },
];

export const EnvironmentalImpact: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<'solar' | 'hydrogen' | 'hvac'>('solar');

  const systemData = {
    solar: {
      co2: 25,
      water: 0,
      trees: 200,
      description: 'Solar photovoltaic systems convert sunlight directly to electricity with zero emissions.',
    },
    hydrogen: {
      co2: 45,
      water: 50,
      trees: 400,
      description: 'Green hydrogen production using renewable energy for industrial and heating applications.',
    },
    hvac: {
      co2: 12,
      water: 5,
      trees: 100,
      description: 'Smart HVAC systems optimize heating and cooling to reduce energy consumption.',
    },
  };

  const current = systemData[selectedSystem];

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
    <section id="impact" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
            Environmental <span className="text-gradient-brand">Impact</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            Make a measurable difference. Every kW of clean energy reduces emissions and protects our planet.
          </p>
        </motion.div>

        {/* System Selector */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {(['solar', 'hydrogen', 'hvac'] as const).map((system) => (
            <motion.button
              key={system}
              onClick={() => setSelectedSystem(system)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                selectedSystem === system
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-card border border-border text-text-primary hover:border-secondary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {system === 'hvac' ? 'Smart HVAC' : system.charAt(0).toUpperCase() + system.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              label: 'CO2 Avoided per Year',
              value: `${current.co2}`,
              unit: 'tons',
              icon: '🌍',
            },
            {
              label: 'Water Preserved',
              value: `${current.water}`,
              unit: 'gallons',
              icon: '💧',
            },
            {
              label: 'Equivalent Trees',
              value: `${current.trees}`,
              unit: 'planted',
              icon: '🌳',
            },
            {
              label: 'Grid Energy Reduced',
              value: '80',
              unit: '%',
              icon: '⚡',
            },
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <motion.div
                className="text-3xl font-bold text-secondary mb-1"
                key={selectedSystem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {metric.value}
              </motion.div>
              <div className="text-sm text-text-secondary mb-2">{metric.unit}</div>
              <div className="text-xs text-text-tertiary">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* System Description & Chart */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Description */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {selectedSystem === 'hvac'
                ? 'Smart HVAC Efficiency'
                : selectedSystem.charAt(0).toUpperCase() + selectedSystem.slice(1)}{' '}
              Benefits
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-3">
              {[
                '✓ Zero-emission operation',
                '✓ Renewable energy source',
                '✓ Long-term sustainability',
                '✓ Government backed incentives',
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 text-text-secondary"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-secondary font-bold">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Chart */}
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              System Comparison
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis
                  dataKey="name"
                  stroke="var(--color-text-secondary)"
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="var(--color-text-secondary)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="solar" fill="var(--color-accent)" name="Solar" />
                <Bar dataKey="hydrogen" fill="var(--color-secondary)" name="Hydrogen" />
                <Bar dataKey="hvac" fill="var(--color-accent)" opacity={0.6} name="HVAC" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Key Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {systemBenefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card p-8 border-l-4 border-secondary"
            >
              <h4 className="text-xl font-bold text-text-primary mb-2">
                {benefit.title}
              </h4>
              <p className="text-text-secondary mb-4">{benefit.description}</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span className="font-semibold text-secondary text-sm">
                  {benefit.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
