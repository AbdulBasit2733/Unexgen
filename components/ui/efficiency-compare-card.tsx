import React from 'react';

export const EfficiencyCompareCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-[360px] sm:h-[550px] rounded-2xl overflow-hidden border border-border">
      <div className="absolute inset-0 grid grid-cols-2 gap-1">
        {/* Before - Heat Loss */}
        <div className="relative bg-muted flex items-center justify-center">
          <div className="text-center">
            <div className="text-foreground text-xl font-bold mb-2">Before</div>
            <div className="text-muted-foreground text-sm">Heat Loss</div>
          </div>
        </div>
        
        {/* After - Optimized */}
        <div className="relative bg-primary/15 flex items-center justify-center">
          <div className="text-center">
            <div className="text-foreground text-xl font-bold mb-2">After</div>
            <div className="text-muted-foreground text-sm">Optimized</div>
          </div>
        </div>
      </div>
      
      {/* Floating Badge */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      glass-light px-6 sm:px-8 py-4 rounded-2xl z-10">
        <div className="text-primary text-xl sm:text-2xl font-bold text-center">
          Efficiency +40%
        </div>
      </div>
    </div>
  );
};
