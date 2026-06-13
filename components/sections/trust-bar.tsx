'use client';

import React, { useState } from 'react';
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

  return (
    <section className="py-16 border-y border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Trusted Technologies
          </h3>
          <p className="text-xl md:text-2xl font-bold text-foreground">
            Enterprise-Grade Solutions Across Industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
            return (
              <div
                key={tech.id}
                className="relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:bg-card hover:shadow-lg group cursor-pointer"
                onMouseEnter={() => setHoveredId(tech.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <IconComponent 
                  className={`w-16 h-16 mb-4 transition-colors duration-300 ${
                    hoveredId === tech.id ? 'text-primary' : 'text-muted-foreground'
                  }`} 
                />
                <h3 className="text-foreground font-bold text-center mb-2 text-sm md:text-base">{tech.name}</h3>
                
                {/* Tooltip */}
                {hoveredId === tech.id && (
                  <div className="absolute top-full mt-2 glass-light px-4 py-2 rounded-lg text-sm text-foreground whitespace-nowrap z-20 font-semibold backdrop-blur-lg border border-border">
                    {tech.rating}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
