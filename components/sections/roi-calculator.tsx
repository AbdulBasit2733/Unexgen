'use client';

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { formatINR, calculateROI } from '@/lib/currency';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { Zap, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';

interface ROIInput {
  roofAreaSqft: number;
  electricityRate: number;
  systemType: 'solar' | 'hybrid' | 'hydrogen';
  averageBillAmount: number;
  annualEscalation: number;
}

interface ROIResult {
  systemCost: number;
  federalSubsidy: number;
  outOfPocketCost: number;
  annualSavings: number;
  monthlyAvgSavings: number;
  paybackPeriod: number;
  roi5Year: number;
  roi10Year: number;
  roi25Year: number;
  co2Offset: number;
  yearWiseProjection: Array<{
    year: number;
    cumulative: number;
    annual: number;
  }>;
}

const systemPricingINR = {
  solar: {
    perKW: 150000, // ₹1.5 lakh per kW
    subsidyPercent: 40,
    efficiencyFactor: 0.95,
  },
  hybrid: {
    perKW: 250000, // ₹2.5 lakh per kW
    subsidyPercent: 50,
    efficiencyFactor: 0.88,
  },
  hydrogen: {
    perKW: 400000, // ₹4 lakh per kW
    subsidyPercent: 60,
    efficiencyFactor: 0.92,
  },
};

const kwPerThousandSqft = 5; // Typical for solar
const maintenanceCostPercent = 0.005; // 0.5% of system cost annually

export const ROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<ROIInput>({
    roofAreaSqft: 2000,
    electricityRate: 8,
    systemType: 'solar',
    averageBillAmount: 25000,
    annualEscalation: 5,
  });

  const [results, setResults] = useState<ROIResult | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const calculateROIMetrics = useCallback(() => {
    const systemTypeData = systemPricingINR[inputs.systemType];

    // Calculate system capacity based on roof area
    const systemCapacityKW =
      (inputs.roofAreaSqft / 1000) * kwPerThousandSqft;
    const systemCost = systemCapacityKW * systemTypeData.perKW;
    const subsidyAmount = systemCost * (systemTypeData.subsidyPercent / 100);
    const outOfPocketCost = systemCost - subsidyAmount;

    // Calculate annual savings
    // Average daily production (kWh) for the system
    const annualProduction =
      systemCapacityKW * 1200 * systemTypeData.efficiencyFactor; // 1200 hours peak sun equivalent
    const annualSavings = annualProduction * inputs.electricityRate;

    // Maintenance costs
    const annualMaintenance = systemCost * maintenanceCostPercent;
    const netAnnualSavings = annualSavings - annualMaintenance;

    // Payback period calculation
    const paybackPeriod = outOfPocketCost / netAnnualSavings;

    // CO2 offset (kg CO2 per kWh is ~0.8 for India grid)
    const co2Offset = annualProduction * 0.8;

    // Year-wise projection
    const yearWiseProjection: ROIResult['yearWiseProjection'] = [];
    let cumulativeSavings = 0;

    for (let year = 1; year <= 25; year++) {
      const escalatedRate =
        netAnnualSavings *
        Math.pow(1 + inputs.annualEscalation / 100, year - 1);
      cumulativeSavings += escalatedRate;
      yearWiseProjection.push({
        year,
        cumulative: Math.round(cumulativeSavings),
        annual: Math.round(escalatedRate),
      });
    }

    // ROI calculations
    const roi5Year = ((yearWiseProjection[4].cumulative - outOfPocketCost) / outOfPocketCost) * 100;
    const roi10Year = ((yearWiseProjection[9].cumulative - outOfPocketCost) / outOfPocketCost) * 100;
    const roi25Year = ((yearWiseProjection[24].cumulative - outOfPocketCost) / outOfPocketCost) * 100;

    const result: ROIResult = {
      systemCost,
      federalSubsidy: subsidyAmount,
      outOfPocketCost,
      annualSavings: netAnnualSavings,
      monthlyAvgSavings: netAnnualSavings / 12,
      paybackPeriod,
      roi5Year,
      roi10Year,
      roi25Year,
      co2Offset: Math.round(co2Offset / 1000), // Convert to tons
      yearWiseProjection,
    };

    setResults(result);
  }, [inputs]);

  React.useEffect(() => {
    calculateROIMetrics();
  }, [calculateROIMetrics]);

  const handleInputChange = (field: keyof ROIInput, value: number | string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) || 0 : value,
    }));
  };

  if (!results) return null;

  return (
    <section className="py-24 bg-gradient-to-br from-white via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            Calculate Your{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              Energy Savings
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See exactly how much you can save with a customized renewable energy system,
            including federal subsidies and long-term ROI projections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Input Section */}
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-black mb-8 text-gray-900 dark:text-white">
              Your Details
            </h3>

            <div className="space-y-6">
              {/* System Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Energy System Type
                </label>
                <div className="space-y-2">
                  {(['solar', 'hybrid', 'hydrogen'] as const).map((type) => (
                    <label
                      key={type}
                      className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <input
                        type="radio"
                        name="systemType"
                        value={type}
                        checked={inputs.systemType === type}
                        onChange={(e) =>
                          handleInputChange('systemType', e.target.value)
                        }
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="ml-3 text-gray-900 dark:text-white font-semibold capitalize">
                        {type === 'hybrid'
                          ? 'Solar + Battery'
                          : type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Roof Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Available Roof Area (sq ft)
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={inputs.roofAreaSqft}
                  onChange={(e) =>
                    handleInputChange('roofAreaSqft', e.target.value)
                  }
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-2">
                  {inputs.roofAreaSqft.toLocaleString()} sq ft
                </p>
              </div>

              {/* Electricity Rate */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Electricity Rate (₹/kWh)
                </label>
                <input
                  type="number"
                  value={inputs.electricityRate}
                  onChange={(e) =>
                    handleInputChange('electricityRate', e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Annual Bill */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Average Monthly Bill (₹)
                </label>
                <input
                  type="number"
                  value={inputs.averageBillAmount}
                  onChange={(e) =>
                    handleInputChange('averageBillAmount', e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Escalation Rate */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Annual Electricity Rate Increase (%)
                </label>
                <input
                  type="number"
                  value={inputs.annualEscalation}
                  onChange={(e) =>
                    handleInputChange('annualEscalation', e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                className="w-full py-3 text-lg"
                onClick={() => setShowConsultationForm(true)}
              >
                Get Detailed Consultation
              </Button>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Annual Savings */}
              <div className="bg-gradient-to-br from-emerald-50 dark:from-emerald-900/20 to-emerald-100 dark:to-emerald-800/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    Annual Savings
                  </p>
                </div>
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {formatINR(results.annualSavings)}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Per month: {formatINR(results.monthlyAvgSavings)}
                </p>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-br from-cyan-50 dark:from-cyan-900/20 to-cyan-100 dark:to-cyan-800/20 rounded-2xl p-6 border border-cyan-200 dark:border-cyan-800">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    Payback Period
                  </p>
                </div>
                <p className="text-3xl font-black text-cyan-600 dark:text-cyan-400">
                  {results.paybackPeriod.toFixed(1)} years
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Break-even point
                </p>
              </div>

              {/* System Cost */}
              <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-blue-100 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    System Cost
                  </p>
                </div>
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  {formatINR(results.systemCost)}
                </p>
              </div>

              {/* After Subsidy */}
              <div className="bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-purple-100 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">
                  After Federal Subsidy
                </p>
                <p className="text-2xl font-black text-purple-600 dark:text-purple-400">
                  {formatINR(results.outOfPocketCost)}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  You save: {formatINR(results.federalSubsidy)}
                </p>
              </div>

              {/* CO2 Offset */}
              <div className="bg-gradient-to-br from-green-50 dark:from-green-900/20 to-green-100 dark:to-green-800/20 rounded-2xl p-6 border border-green-200 dark:border-green-800 col-span-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">
                  Annual Carbon Offset
                </p>
                <p className="text-3xl font-black text-green-600 dark:text-green-400">
                  {results.co2Offset.toLocaleString()} tons CO₂/year
                </p>
              </div>
            </div>

            {/* ROI Timeline */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h4 className="text-xl font-black mb-6 text-gray-900 dark:text-white">
                Return on Investment Timeline
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    5 Years
                  </p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {results.roi5Year.toFixed(0)}%
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    10 Years
                  </p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {results.roi10Year.toFixed(0)}%
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    25 Years
                  </p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {results.roi25Year.toFixed(0)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cumulative Savings Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-black mb-6 text-gray-900 dark:text-white">
              25-Year Cumulative Savings
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={results.yearWiseProjection}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(200,200,200,0.2)"
                />
                <XAxis
                  dataKey="year"
                  tick={{ fill: '#666', fontSize: 12 }}
                />
                <YAxis
                  tick={{ fill: '#666', fontSize: 12 }}
                  tickFormatter={(value) => `₹${(value / 10000000).toFixed(0)}Cr`}
                />
                <Tooltip
                  formatter={(value) => formatINR(value as number)}
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #10b981',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="cumulative"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Annual Savings Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-black mb-6 text-gray-900 dark:text-white">
              Annual Savings Over Time
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={results.yearWiseProjection.filter((_, i) => i % 2 === 0)}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(200,200,200,0.2)"
                />
                <XAxis
                  dataKey="year"
                  tick={{ fill: '#666', fontSize: 12 }}
                />
                <YAxis
                  tick={{ fill: '#666', fontSize: 12 }}
                  tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                />
                <Tooltip
                  formatter={(value) => formatINR(value as number)}
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #06b6d4',
                    borderRadius: '8px',
                  }}
                />
                <Bar
                  dataKey="annual"
                  fill="#06b6d4"
                  radius={[8, 8, 0, 0]}
                  animationDuration={800}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              These projections are estimates based on industry averages
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-400">
              Actual savings depend on roof orientation, weather patterns, system
              degradation, and changes in electricity rates. Contact our team for a
              customized analysis based on your exact location and usage patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
