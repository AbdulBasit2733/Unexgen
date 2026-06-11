'use client';

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showControls?: boolean;
  loop?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
}

export function Carousel({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showControls = true,
  loop = true,
  className,
  onSlideChange,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    align: 'start',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    onSlideChange?.(index);
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play setup
  useEffect(() => {
    if (!autoPlay || !emblaApi) return;

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [emblaApi, autoPlay, autoPlayInterval]);

  // Update scroll button states
  useEffect(() => {
    if (!emblaApi) return;

    const updateScrollButtons = () => {
      setCanScrollLeft(emblaApi.canScrollPrev());
      setCanScrollRight(emblaApi.canScrollNext());
    };

    updateScrollButtons();
    emblaApi.on('select', updateScrollButtons);
    emblaApi.on('reInit', updateScrollButtons);

    return () => {
      emblaApi.off('select', updateScrollButtons);
      emblaApi.off('reInit', updateScrollButtons);
    };
  }, [emblaApi]);

  return (
    <div className={cn('w-full', className)}>
      <div className="relative w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div
              key={index}
              className="min-w-0 w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex items-center justify-between mt-6 px-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollLeft && !loop}
            className={cn(
              'p-2 rounded-full transition-all',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'enabled:hover:bg-emerald-50 enabled:dark:hover:bg-emerald-950',
              canScrollLeft || loop
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-gray-400 dark:text-gray-600'
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Indicators */}
          {showIndicators && (
            <div className="flex gap-2">
              {Array.from({ length: children.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    index === selectedIndex
                      ? 'w-8 bg-emerald-600 dark:bg-emerald-400'
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === selectedIndex}
                />
              ))}
            </div>
          )}

          <button
            onClick={scrollNext}
            disabled={!canScrollRight && !loop}
            className={cn(
              'p-2 rounded-full transition-all',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'enabled:hover:bg-emerald-50 enabled:dark:hover:bg-emerald-950',
              canScrollRight || loop
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-gray-400 dark:text-gray-600'
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
