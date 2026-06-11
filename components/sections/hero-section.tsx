'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LightningIcon } from '@/components/icons/Icons';
import { FloatingEnergyMonitor } from '@/components/ui/FloatingEnergyMonitor';
import Image from 'next/image';
import { fadeInUp, fadeInDown, staggerContainer, staggerItem, float } from '@/lib/animations';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create dynamic background glow effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroBgRef.current) return;
      const rect = heroBgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      heroBgRef.current.style.background = `
        radial-gradient(
          circle 800px at ${x}px ${y}px,
          rgba(34, 197, 94, 0.08),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(135deg, #ffffff 0%, #F8FAFC 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div
        ref={heroBgRef}
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #F8FAFC 100%)',
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, .1) 25%, rgba(34, 197, 94, .1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .1) 75%, rgba(34, 197, 94, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, .1) 25%, rgba(34, 197, 94, .1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .1) 75%, rgba(34, 197, 94, .1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-accent/15 to-secondary/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={staggerItem}>
            {/* Urgency Badge */}
            <motion.div
              className="flex items-center gap-3 glass rounded-full inline-flex mb-8 px-6 py-3 border border-border"
              variants={fadeInDown}
              animate="visible"
            >
              <motion.div
                className="w-2 h-2 bg-secondary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-text-primary">
                Federal Incentives Ending Soon
              </span>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-text-primary"
              variants={fadeInUp}
            >
              Power Your Future with{' '}
              <span className="text-gradient-brand">Sustainable</span>
              {' '}Energy
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-8"
              variants={fadeInUp}
            >
              <span className="text-secondary">Green Hydrogen</span> • Solar •{' '}
              <span className="text-secondary">Smart HVAC</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-text-secondary mb-12 leading-relaxed max-w-md"
              variants={fadeInUp}
            >
              Industrial-grade decarbonization infrastructure powered by AI-driven microgrids, 
              net-zero operations, and next-generation green hydrogen technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 mb-12"
              variants={fadeInUp}
            >
              <Button
                variant="primary"
                icon={<LightningIcon />}
                className="text-lg px-10 py-4"
              >
                Start Energy Audit
              </Button>
              <Button
                variant="secondary"
                className="text-lg px-10 py-4"
              >
                View Case Studies
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-6 pt-8 border-t border-border"
              variants={fadeInUp}
            >
              <div>
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-text-tertiary">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">99.7%</div>
                <div className="text-sm text-text-tertiary">System Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">$2.4M</div>
                <div className="text-sm text-text-tertiary">Avg Annual Savings</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Visualization */}
          <motion.div
            className="relative h-full min-h-[500px] lg:min-h-[600px]"
            variants={fadeInUp}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-border/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                alt="Modern sustainable energy installation"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

              {/* Stats Overlay Card */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6 border border-white/20 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-3xl font-bold text-secondary">500+</div>
                    <div className="text-xs text-text-secondary">Installations</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="text-3xl font-bold text-secondary">99.7%</div>
                    <div className="text-xs text-text-secondary">Uptime</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="text-3xl font-bold text-secondary">$2.4M</div>
                    <div className="text-xs text-text-secondary">Avg Savings</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Energy Monitor */}
              <motion.div
                className="absolute -top-8 -right-8 z-20"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                <FloatingEnergyMonitor status="OPTIMIZED" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-center justify-center">
            <motion.div
              className="w-1 h-2 bg-secondary rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
