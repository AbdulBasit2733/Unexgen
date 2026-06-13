'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, DollarSign, Zap } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState(10000);
  const [systemType, setSystemType] = useState('solar');
  const [location, setLocation] = useState('metros');

  // System efficiency rates
  const systemFactors: { [key: string]: { efficiency: number; label: string } } = {
    solar: { efficiency: 0.35, label: 'Solar (35% savings)' },
    hybrid: { efficiency: 0.50, label: 'Solar + Battery (50% savings)' },
    hydrogen: { efficiency: 0.60, label: 'Hydrogen (60% savings)' },
    combined: { efficiency: 0.70, label: 'Combined (70% savings)' }
  };

  const locationMultiplier: { [key: string]: number } = {
    metros: 1.0,
    tier2: 1.15,
    rural: 1.3
  };

  const systemInfo = systemFactors[systemType] || systemFactors['solar'];
  const multiplier = locationMultiplier[location] || 1.0;

  const calculations = useMemo(() => {
    const annualBill = monthlyBill * 12;
    const annualSavings = annualBill * systemInfo.efficiency;
    const adjustedSavings = annualSavings * multiplier;
    const subsidyPercentage = systemType === 'hydrogen' ? 0.40 : 0.35;
    const systemCost = (adjustedSavings * 5) / (1 - subsidyPercentage); // Rough estimate
    const subsidyAmount = systemCost * subsidyPercentage;
    const netInvestment = systemCost - subsidyAmount;
    const paybackPeriod = netInvestment / adjustedSavings;
    const tenYearSavings = adjustedSavings * 10;

    return {
      annualBill,
      annualSavings,
      adjustedSavings,
      subsidyAmount,
      systemCost,
      netInvestment,
      paybackPeriod,
      tenYearSavings,
      emiAmount: netInvestment / 60 // 5-year EMI
    };
  }, [monthlyBill, systemType, systemInfo, multiplier]);

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-heading mb-4">
          Estimate Your <span className="text-gradient-emerald">Energy Savings</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover how much you can save with Unexgen solutions
        </p>
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        {/* Input Controls */}
        <div className="space-y-6">
          {/* Monthly Bill Input */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Current Monthly Energy Bill
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold min-w-fit">
                ₹{monthlyBill.toLocaleString()}
              </div>
            </div>
          </div>

          {/* System Type */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Solution Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(systemFactors).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSystemType(key)}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-sm ${
                    systemType === key
                      ? 'border-primary bg-primary/10 text-foreground font-bold'
                      : 'border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {value.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Location Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'metros', label: 'Metro Cities' },
                { id: 'tier2', label: 'Tier-2 Cities' },
                { id: 'rural', label: 'Rural Areas' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setLocation(id)}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-sm ${
                    location === id
                      ? 'border-primary bg-primary/10 text-foreground font-bold'
                      : 'border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results - Simplified */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              label: 'Annual Savings',
              value: `₹${calculations.adjustedSavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              label: 'Payback Period',
              value: `${calculations.paybackPeriod.toFixed(1)} years`
            }
          ].map((metric, idx) => (
            <div key={idx} className="card-elevated p-6 text-center">
              <div className="text-primary mb-3 flex justify-center">{metric.icon}</div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">{metric.label}</p>
              <p className="text-2xl sm:text-3xl font-black text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
          Get Free Energy Consultation
        </button>
      </div>
    </section>
  );
};
