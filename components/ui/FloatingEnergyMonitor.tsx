import React from 'react';

interface FloatingEnergyMonitorProps {
  status?: 'OPTIMIZED' | 'ONLINE' | 'ACTIVE';
}

export const FloatingEnergyMonitor: React.FC<FloatingEnergyMonitorProps> = ({ 
  status = 'OPTIMIZED' 
}) => {
  return (
    <div className="flex items-center gap-3 glass-light px-4 py-2 rounded-full">
      <div className="w-2 h-2 bg-electric-emerald rounded-full animate-pulse-emerald" />
      <span className="text-sm font-medium text-gray-900">
        {status === 'OPTIMIZED' && 'Grid Status: OPTIMIZED'}
        {status === 'ONLINE' && 'System: ONLINE'}
        {status === 'ACTIVE' && 'System: ACTIVE'}
      </span>
    </div>
  );
};
