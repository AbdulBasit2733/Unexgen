import React from 'react';
import { Button } from '@/components/ui/button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="section-container bg-white">
      <div 
        className="rounded-[3rem] p-16 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/30 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            Power Your Future
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join 500+ facilities operating at net-zero emissions
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              variant="secondary" 
              className="bg-white text-gray-900 border-white hover:bg-gray-100 text-xl px-12 py-6"
            >
              Residential Quote
            </Button>
            <Button 
              variant="secondary" 
              className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 text-xl px-12 py-6"
            >
              Commercial Partners
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-bold">
              ISO 9001 Certified
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-bold">
              Net Zero Operations
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-bold">
              IRA Tax Credit Eligible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
