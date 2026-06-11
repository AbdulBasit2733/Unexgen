'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from '@/components/carousel/carousel';
import { formatINR, formatSavings } from '@/lib/currency';
import { caseStudies } from '@/lib/utils';
import { TrendingUp, Zap, Leaf } from 'lucide-react';

interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  image: string;
  systemCapacity: number; // in kW
  annualProduction: number; // in kWh
  annualSavingsINR: number; // in INR
  carbonOffset: string;
  roi: number; // in percentage
  paybackPeriod: number; // in years
  federalSubsidy: number; // in INR
  maintenanceCost: number; // annual in INR
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 'manufacturing-plant',
    title: 'Automotive Manufacturing Complex',
    location: 'Bangalore, Karnataka',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
    systemCapacity: 750,
    annualProduction: 900000,
    annualSavingsINR: 7500000,
    carbonOffset: '1,200 tons CO2/year',
    roi: 22,
    paybackPeriod: 4.5,
    federalSubsidy: 15000000,
    maintenanceCost: 125000,
  },
  {
    id: 'textile-facility',
    title: 'Textile Manufacturing Facility',
    location: 'Tiruppur, Tamil Nadu',
    image:
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80',
    systemCapacity: 500,
    annualProduction: 600000,
    annualSavingsINR: 5000000,
    carbonOffset: '800 tons CO2/year',
    roi: 24,
    paybackPeriod: 4,
    federalSubsidy: 10000000,
    maintenanceCost: 85000,
  },
  {
    id: 'warehouse-facility',
    title: 'Logistics & Warehouse Hub',
    location: 'Mumbai, Maharashtra',
    image:
      'https://images.unsplash.com/photo-1488034494253-92d77c1c3345?w=1200&q=80',
    systemCapacity: 350,
    annualProduction: 420000,
    annualSavingsINR: 3500000,
    carbonOffset: '560 tons CO2/year',
    roi: 20,
    paybackPeriod: 5,
    federalSubsidy: 7000000,
    maintenanceCost: 60000,
  },
  {
    id: 'pharmaceutical-campus',
    title: 'Pharmaceutical Manufacturing Campus',
    location: 'Hyderabad, Telangana',
    image:
      'https://images.unsplash.com/photo-1584622180875-abc5a1b3a64f?w=1200&q=80',
    systemCapacity: 1000,
    annualProduction: 1200000,
    annualSavingsINR: 10000000,
    carbonOffset: '1,600 tons CO2/year',
    roi: 25,
    paybackPeriod: 4,
    federalSubsidy: 20000000,
    maintenanceCost: 150000,
  },
  {
    id: 'agricultural-sector',
    title: 'Agro-Processing & Irrigation',
    location: 'Punjab Region',
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80',
    systemCapacity: 250,
    annualProduction: 300000,
    annualSavingsINR: 2500000,
    carbonOffset: '400 tons CO2/year',
    roi: 28,
    paybackPeriod: 3.5,
    federalSubsidy: 5000000,
    maintenanceCost: 40000,
  },
];

export const PortfolioCarousel: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            Proven <span className="text-emerald-600">Transformations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real installations across India with measurable impact, verified carbon reduction, and documented ROI.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          autoPlay={true}
          autoPlayInterval={7000}
          showIndicators={true}
          showControls={true}
          loop={true}
          className="w-full"
        >
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="min-h-full flex items-center justify-center px-4 py-8"
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-[400px] md:h-[500px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Location Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur px-4 py-2 rounded-full">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        📍 {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
                    {/* Title */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full mt-3">
                        <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">
                          {project.carbonOffset}
                        </span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-6">
                      {/* System Capacity */}
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          System Capacity
                        </p>
                        <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                          {project.systemCapacity}kW
                        </p>
                      </div>

                      {/* Annual Production */}
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Annual Output
                        </p>
                        <p className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
                          {(project.annualProduction / 1000).toFixed(0)}
                          MWh
                        </p>
                      </div>

                      {/* Annual Savings */}
                      <div className="col-span-2">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Annual Savings
                        </p>
                        <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                          {formatINR(project.annualSavingsINR)}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          After maintenance costs
                        </p>
                      </div>
                    </div>

                    {/* ROI & Payback */}
                    <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Return on Investment
                        </p>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                            {project.roi}%
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Payback Period
                        </p>
                        <p className="text-2xl font-black text-gray-900 dark:text-white">
                          {project.paybackPeriod} yrs
                        </p>
                      </div>
                    </div>

                    {/* Financial Summary */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">
                          Federal Subsidy
                        </span>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {formatINR(project.federalSubsidy)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">
                          Annual Maintenance
                        </span>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {formatINR(project.maintenanceCost)}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                      Request Similar Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Trust Metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              500+
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Active Installations
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              12.5Cr
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Annual Savings Generated
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              50K+
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Tons CO2 Offset
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
              99.7%
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              System Uptime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
