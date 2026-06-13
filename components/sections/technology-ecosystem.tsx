'use client';

import React from 'react';
import { Database, Network, Brain, Zap, Shield, BarChart3, Cloud, Cpu } from 'lucide-react';

interface TechComponent {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  position: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

const techStack: TechComponent[] = [
  {
    id: 'ai-core',
    name: 'AI Energy Core',
    description: 'Machine learning algorithms for predictive maintenance and optimization',
    icon: <Brain className="w-8 h-8" />,
    position: 'center'
  },
  {
    id: 'iot-sensors',
    name: 'IoT Sensors',
    description: 'Real-time monitoring across all installed systems',
    icon: <Cpu className="w-8 h-8" />,
    position: 'top'
  },
  {
    id: 'cloud-platform',
    name: 'Cloud Platform',
    description: 'Secure data processing and analytics infrastructure',
    icon: <Cloud className="w-8 h-8" />,
    position: 'left'
  },
  {
    id: 'grid-management',
    name: 'Microgrid Manager',
    description: 'Intelligent load balancing and power distribution',
    icon: <Network className="w-8 h-8" />,
    position: 'right'
  },
  {
    id: 'security',
    name: 'Cyber Security',
    description: 'Enterprise-grade encryption and threat protection',
    icon: <Shield className="w-8 h-8" />,
    position: 'bottom'
  },
  {
    id: 'analytics',
    name: 'Analytics Dashboard',
    description: 'Real-time performance metrics and ROI tracking',
    icon: <BarChart3 className="w-8 h-8" />,
    position: 'left'
  },
  {
    id: 'renewable',
    name: 'Renewable Sources',
    description: 'Solar, Wind, Hydrogen integration and management',
    icon: <Zap className="w-8 h-8" />,
    position: 'right'
  },
  {
    id: 'database',
    name: 'Data Lake',
    description: 'Historical data and AI model training',
    icon: <Database className="w-8 h-8" />,
    position: 'bottom'
  }
];

interface ComponentCardProps {
  component: TechComponent;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => (
  <div className="relative">
    <div className="card-elevated p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-center mb-4 text-primary">
        {component.icon}
      </div>
      <h4 className="text-lg font-bold text-foreground mb-2">{component.name}</h4>
      <p className="text-sm text-muted-foreground">{component.description}</p>
    </div>
  </div>
);

export const TechnologyEcosystem: React.FC = () => {
  const centerComponent = techStack.find(t => t.position === 'center')!;
  const topComponent = techStack.find(t => t.position === 'top')!;
  const bottomComponents = techStack.filter(t => t.position === 'bottom');
  const leftComponents = techStack.filter(t => t.position === 'left');
  const rightComponents = techStack.filter(t => t.position === 'right');

  return (
    <section className="section-container bg-secondary">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 text-balance text-foreground">
          Unexgen Technology <span className="text-gradient-emerald">Ecosystem</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          An integrated platform combining AI, IoT, cloud computing, and renewable energy management into one intelligent system
        </p>
      </div>

      {/* Main Ecosystem Diagram */}
      <div className="relative max-w-6xl mx-auto">
        {/* Center Component */}
        <div className="flex justify-center mb-12">
          <div className="w-full md:w-1/3">
            <ComponentCard component={centerComponent} />
          </div>
        </div>

        {/* Top Component */}
        <div className="flex justify-center mb-12">
          <div className="w-full md:w-1/3">
            <ComponentCard component={topComponent} />
          </div>
        </div>

        {/* Left and Right Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Components */}
          <div className="space-y-6">
            {leftComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>

          {/* Right Components */}
          <div className="space-y-6">
            {rightComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        </div>

        {/* Bottom Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bottomComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      </div>

      {/* Integration Features */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Real-Time Intelligence',
            description: 'Continuous monitoring with AI-powered insights for proactive system optimization'
          },
          {
            title: 'Seamless Integration',
            description: 'Works with existing infrastructure while providing future-ready scalability'
          },
          {
            title: 'Enterprise Security',
            description: 'Bank-grade encryption and compliance with all global data protection standards'
          }
        ].map((feature, idx) => (
          <div key={idx} className="card-elevated p-8 text-center">
            <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
