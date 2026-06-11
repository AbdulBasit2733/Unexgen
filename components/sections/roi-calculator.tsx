'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const roiData = [
  { year: 'Year 1', savings: 15000, investment: 50000 },
  { year: 'Year 5', savings: 75000, investment: 50000 },
  { year: 'Year 10', savings: 150000, investment: 50000 },
  { year: 'Year 20', savings: 300000, investment: 50000 },
];

const paybackData = [
  { month: '0', savings: 0 },
  { month: '6', savings: 7500 },
  { month: '12', savings: 15000 },
  { month: '24', savings: 30000 },
  { month: '36', savings: 45000 },
  { month: '48', savings: 60000 },
];

export const ROICalculator: React.FC = () => {
  const [systemSize, setSystemSize] = useState(10);
  const [type, setType] = useState<'solar' | 'hydrogen' | 'hvac'>('solar');

  const costPerKw = { solar: 2500, hydrogen: 3500, hvac: 1800 };
  const savingsPerKw = { solar: 1500, hydrogen: 2000, hvac: 800 };

  const systemCost = systemSize * costPerKw[type];
  const annualSavings = systemSize * savingsPerKw[type];
  const paybackPeriod = Math.round(systemCost / (annualSavings / 12));
  const roi20Year = annualSavings * 20 - systemCost;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="calculator" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-text-primary">
            Calculate Your <span className="text-gradient-brand">ROI</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto">
            See exactly how much you can save with your custom energy solution
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Calculator Controls */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">
                System Configuration
              </h3>

              {/* System Type */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-text-primary mb-3">
                  System Type
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {(['solar', 'hydrogen', 'hvac'] as const).map((option) => (
                    <motion.button
                      key={option}
                      onClick={() => setType(option)}
                      className={`p-3 rounded-lg font-semibold transition-all capitalize ${
                        type === option
                          ? 'bg-secondary text-white'
                          : 'bg-bg-secondary text-text-primary hover:bg-bg-tertiary'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option === 'hvac' ? 'Smart HVAC' : option.charAt(0).toUpperCase() + option.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* System Size */}
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-3">
                  System Size: <span className="text-secondary text-lg">{systemSize} kW</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={systemSize}
                  onChange={(e) => setSystemSize(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-xs text-text-secondary mt-2">
                  <span>5 kW</span>
                  <span>100 kW</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              {[
                {
                  label: 'System Cost',
                  value: `$${systemCost.toLocaleString()}`,
                  color: 'text-accent',
                },
                {
                  label: 'Annual Savings',
                  value: `$${annualSavings.toLocaleString()}`,
                  color: 'text-secondary',
                },
                {
                  label: 'Payback Period',
                  value: `${paybackPeriod} months`,
                  color: 'text-secondary',
                },
                {
                  label: '20-Year ROI',
                  value: `$${roi20Year.toLocaleString()}`,
                  color: 'text-secondary',
                },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  className="card p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-sm text-text-secondary">{metric.label}</div>
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Charts */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            {/* Savings Over Time */}
            <motion.div
              className="card p-8 hover:shadow-lg transition-shadow"
              whileHover={{ y: -4 }}
            >
              <h4 className="text-lg font-bold text-text-primary mb-4">
                Cumulative Savings
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={paybackData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-text-secondary)" />
                  <YAxis stroke="var(--color-text-secondary)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="var(--color-secondary)"
                    dot={{ fill: 'var(--color-secondary)' }}
                    strokeWidth={3}
                    name="Monthly Savings ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* ROI Breakdown */}
            <motion.div
              className="card p-8 hover:shadow-lg transition-shadow"
              whileHover={{ y: -4 }}
            >
              <h4 className="text-lg font-bold text-text-primary mb-4">
                20-Year Financial Projection
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="year" stroke="var(--color-text-secondary)" />
                  <YAxis stroke="var(--color-text-secondary)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="investment" fill="var(--color-accent)" name="Initial Investment" />
                  <Bar dataKey="savings" fill="var(--color-secondary)" name="Total Savings" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary text-lg mb-6">
            Ready to start saving? Get a personalized energy audit today.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Audit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
