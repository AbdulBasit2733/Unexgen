'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const steps: TimelineStep[] = [
  {
    id: 1,
    title: 'Solar Generation',
    description: 'Harness clean energy from solar panels to power the entire cooling system sustainably',
    icon: '☀️',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    title: 'Energy Management',
    description: 'Intelligent AI-driven system monitors and optimizes energy distribution in real-time',
    icon: '⚡',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    title: 'VFD Compressors',
    description: 'Variable Frequency Drive compressors adapt cooling capacity to actual demand',
    icon: '⚙️',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    title: 'Thermal Energy Storage',
    description: 'Store excess cool energy for use during peak demand or off-peak hours',
    icon: '❄️',
    color: 'from-teal-400 to-green-500',
  },
  {
    id: 5,
    title: '24/7 Cooling',
    description: 'Uninterrupted, efficient cooling regardless of solar availability or grid conditions',
    icon: '🌡️',
    color: 'from-emerald-400 to-teal-500',
  },
];

export function TechnologyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  // Calculate progress for each step
  const getStepProgress = (stepIndex: number) => {
    const totalSteps = steps.length;
    const stepStart = stepIndex / totalSteps;
    const stepEnd = (stepIndex + 1) / totalSteps;
    
    return useTransform(scrollYProgress, [stepStart, stepEnd], [0, 1]);
  };

  return (
    <section ref={containerRef} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Technology Advantage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            A seamless integration of solar power, intelligent energy management, and thermal storage creating the world&apos;s most efficient cooling solution
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Background Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-accent to-primary/20 hidden md:block" />

          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const stepProgress = getStepProgress(index);
              const lineHeight = useTransform(stepProgress, [0, 1], ['0%', '100%']);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {/* Desktop Layout */}
                  <div className={`hidden md:grid grid-cols-2 gap-8 items-center`}>
                    {/* Left Content */}
                    <div className={`${isEven ? 'order-1' : 'order-2'}`}>
                      <motion.div
                        className="text-right pr-12"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: '-100px' }}
                      >
                        <h3 className="text-2xl font-bold text-foreground mb-2 font-sans">Step {step.id}</h3>
                        <h4 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 font-sans">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Circle and Line */}
                    <div className={`${isEven ? 'order-2' : 'order-1'} flex justify-center relative h-32`}>
                      {/* Animated Progress Line */}
                      <motion.div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b ${step.color}`}
                        style={{
                          height: lineHeight,
                          top: 0,
                        }}
                      />

                      {/* Circle with Icon */}
                      <motion.div
                        className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-4xl">{step.icon}</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: '-100px' }}
                  >
                    <div className="flex gap-4">
                      {/* Timeline Icon */}
                      <div className="relative flex flex-col items-center">
                        <motion.div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center flex-shrink-0`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-3xl">{step.icon}</span>
                        </motion.div>
                        {index < steps.length - 1 && (
                          <div className="w-1 h-12 bg-gradient-to-b from-accent/50 to-accent/20 mt-2" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pt-2 pb-8">
                        <h3 className="text-lg font-bold text-foreground mb-1 font-sans">
                          Step {step.id}: {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block">
            <p className="text-lg font-semibold text-foreground mb-4 font-sans">
              Experience the Future of Cooling Technology
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-xl transition-shadow font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
              <span className="text-xl">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
