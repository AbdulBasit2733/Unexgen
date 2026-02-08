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
    <section className="py-12 border-y border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
            return (
              <div
                key={tech.id}
                className="relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:glass-light group"
                onMouseEnter={() => setHoveredId(tech.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <IconComponent 
                  className={`w-16 h-16 mb-4 transition-colors duration-300 ${
                    hoveredId === tech.id ? 'text-electric-emerald' : 'text-gray-400'
                  }`} 
                />
                <h3 className="text-gray-900 font-bold text-center mb-2">{tech.name}</h3>
                
                {/* Tooltip */}
                {hoveredId === tech.id && (
                  <div className="absolute top-full mt-2 glass-emerald px-4 py-2 rounded-lg text-sm text-gray-900 whitespace-nowrap z-20 font-semibold">
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
