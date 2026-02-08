import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, featured }) => {
  return (
    <div 
      className={cn(
        'card-glass',
        featured && 'bg-electric-emerald text-white border-electric-emerald',
        className
      )}
    >
      {children}
    </div>
  );
};
