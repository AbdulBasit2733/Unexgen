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
    <section className="section-container bg-secondary">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 text-balance text-foreground">
          Calculate Your <span className="text-gradient-emerald">ROI & Savings</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          See exactly how much you&apos;ll save with Unexgen&apos;s renewable energy solutions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Input Section */}
        <div className="space-y-8">
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
            <div className="text-xs text-muted-foreground mt-2">
              Annual: ₹{(monthlyBill * 12).toLocaleString()}
            </div>
          </div>

          {/* System Type */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Solution Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(systemFactors).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSystemType(key)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
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
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'metros', label: 'Metro Cities', note: 'Standard rate' },
                { id: 'tier2', label: 'Tier-2 Cities', note: '+15% incentive' },
                { id: 'rural', label: 'Rural Areas', note: '+30% incentive' }
              ].map(({ id, label, note }) => (
                <button
                  key={id}
                  onClick={() => setLocation(id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center text-sm ${
                    location === id
                      ? 'border-primary bg-primary/10 text-foreground font-bold'
                      : 'border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs mt-1 opacity-70">{note}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                label: 'Annual Savings',
                value: `₹${calculations.adjustedSavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
                subtext: `${((calculations.adjustedSavings / calculations.annualBill) * 100).toFixed(0)}% of current bill`
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                label: 'Government Subsidy',
                value: `₹${(calculations.subsidyAmount / 100000).toFixed(1)}L+`,
                subtext: 'Instant incentive'
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                label: 'Payback Period',
                value: `${calculations.paybackPeriod.toFixed(1)} years`,
                subtext: 'After subsidy adjustment'
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                label: '10-Year Savings',
                value: `₹${(calculations.tenYearSavings / 100000).toFixed(1)}L+`,
                subtext: 'Total lifetime benefit'
              }
            ].map((metric, idx) => (
              <div key={idx} className="card-elevated p-6">
                <div className="text-primary mb-2">{metric.icon}</div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">{metric.label}</p>
                <p className="text-2xl font-black text-foreground mb-1">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.subtext}</p>
              </div>
            ))}
          </div>

          {/* Detailed Breakdown */}
          <div className="card-elevated p-6">
            <h3 className="font-bold text-foreground mb-4">Investment Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">System Cost</span>
                <span className="font-bold text-foreground">₹{(calculations.systemCost / 100000).toFixed(1)}L</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border text-primary">
                <span>Govt. Subsidy (35-40%)</span>
                <span className="font-bold">-₹{(calculations.subsidyAmount / 100000).toFixed(1)}L</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-primary/10 px-3 rounded-lg">
                <span className="font-bold text-foreground">Net Investment</span>
                <span className="text-2xl font-black text-primary">₹{(calculations.netInvestment / 100000).toFixed(1)}L</span>
              </div>
              <div className="flex justify-between items-center py-2 mt-4 pt-4 border-t border-border">
                <span className="text-muted-foreground text-sm">Monthly EMI (5-year)</span>
                <span className="font-bold text-foreground">₹{(calculations.emiAmount / 1000).toFixed(0)}K/month</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
            Get Personalized Quote
          </button>
        </div>
      </div>
    </section>
  );
};
