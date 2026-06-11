'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  variant?: 'glass' | 'elevated' | 'default';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  featured,
  variant = 'glass',
  ...motionProps
}) => {
  const getVariantClasses = () => {
    if (featured) {
      return 'bg-gradient-to-br from-primary to-primary/80 text-white border border-primary/50 shadow-xl';
    }

    switch (variant) {
      case 'glass':
        return 'card-glass';
      case 'elevated':
        return 'card-elevated';
      case 'default':
        return 'card';
      default:
        return 'card-glass';
    }
  };

  return (
    <motion.div
      className={cn(getVariantClasses(), className)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
