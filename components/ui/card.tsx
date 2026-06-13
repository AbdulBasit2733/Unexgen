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
        'card-elevated',
        featured && 'bg-primary/10 border-primary text-foreground',
        className
      )}
    >
      {children}
    </div>
  );
};
