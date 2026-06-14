"use client";

import React from "react";
import {
  ArrowRight,
  Bolt,
  Droplet,
  Sparkle,
  ThermometerSnowflake,
} from "lucide-react";

const expertise = [
  "Renewable Cooling Systems",
  "Solar Powered Cold Storage",
  "HVAC Engineering",
  "Thermal Energy Storage",
  "Industrial Refrigeration",
  "Smart Automation",
];

export const CompanyOverview: React.FC = () => (
  <section id="overview" className="section-container">
    <div className="grid gap-12 lg:grid-cols-[0.95fr_0.8fr] items-start">
      <div>
        <div className="inline-flex items-center gap-3 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6 font-semibold text-sm">
          <Bolt className="w-4 h-4" />
          Company Overview
        </div>
        <h2 className="section-heading mb-6">
          Pioneering Sustainable Engineering & Thermal Solutions.
        </h2>
        <p className="text-lg leading-8 text-muted-foreground mb-8 max-w-3xl">
          We help industries, agriculture businesses, food processors, and
          commercial facilities reduce operational costs while achieving energy
          independence through renewable technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {expertise.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-3xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ArrowRight className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card-elevated p-8 border border-border bg-secondary shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <ThermometerSnowflake className="w-10 h-10 text-primary" />
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Core Strength
            </p>
            <h3 className="text-2xl font-black text-foreground">
              Built for reliable cooling and renewable energy integration
            </h3>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Our engineering team delivers end-to-end solutions that combine solar
          generation, thermal storage, and advanced refrigeration controls for
          long-term performance and compliance.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Droplet className="w-5 h-5 text-primary mt-1" />
            <p className="text-sm text-foreground">
              Grid reduction with solar-powered cold storage and intelligent
              controls.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Sparkle className="w-5 h-5 text-primary mt-1" />
            <p className="text-sm text-foreground">
              High COP refrigeration paired with thermal energy storage for
              steady cooling.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-primary mt-1" />
            <p className="text-sm text-foreground">
              Customized engineering for pharmacy, food, agriculture, and cold
              chain applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
