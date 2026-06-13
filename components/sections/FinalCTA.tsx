import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="section-container">
      <div 
        className="rounded-3xl p-16 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-primary/60"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <Zap className="w-16 h-16 text-primary-foreground" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 text-balance">
            Transform Your Energy Future
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join over 500 facilities across India achieving net-zero emissions and ₹2-3 Crore in annual savings with Unexgen.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-12 py-4 font-bold"
            >
              Get Free Energy Audit
            </Button>
            <Button 
              className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground/10 text-lg px-12 py-4 font-bold"
            >
              Explore Partnerships
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {[
              'ISO 9001:2015 Certified',
              '₹10+ Cr Incentives Unlocked',
              'Net Zero Operations'
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full text-primary-foreground font-semibold border border-white/20">
                <CheckCircle className="w-5 h-5" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
