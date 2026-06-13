'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2000,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Extract numeric value and suffix
  const getNumericValue = (val: number | string): { num: number; suffix: string } => {
    const str = String(val);
    const match = str.match(/^([\d.]+)(.*)$/);
    if (match) {
      return { num: parseFloat(match[1]), suffix: match[2] };
    }
    return { num: 0, suffix: '' };
  };

  const { num: targetNum, suffix } = getNumericValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const increment = targetNum / (duration / 50);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, targetNum, duration]);

  const formatDisplay = (num: number): string => {
    if (num >= 1000000) {
      return (num / 10000000).toFixed(1) + 'Cr';
    }
    if (num >= 100000) {
      return (num / 100000).toFixed(1) + 'L';
    }
    return num.toLocaleString('en-IN');
  };

  return (
    <div ref={ref} className={className}>
      {formatDisplay(count)}{suffix}
    </div>
  );
};
