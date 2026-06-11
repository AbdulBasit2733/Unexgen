'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: React.ReactNode;
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  children,
  className,
  isLoading,
  disabled,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'tertiary':
        return 'btn-tertiary';
      default:
        return 'btn-primary';
    }
  };

  return (
    <motion.button
      className={cn(
        getVariantClasses(),
        'flex items-center justify-center gap-2',
        isLoading || disabled ? 'opacity-60 cursor-not-allowed' : '',
        className
      )}
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : undefined}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : undefined}
      disabled={disabled || isLoading}
      {...(props as any)}
    >
      {isLoading ? (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
        />
      ) : icon ? (
        <span className="w-5 h-5">{icon}</span>
      ) : null}
      {children}
    </motion.button>
  );
};
