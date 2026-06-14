'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
  slideWidth?: string | number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = true,
  autoplayDelay = 5000,
  showControls = true,
  showDots = true,
  className = '',
  slideWidth = '100%',
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: 'start',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onDotClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    queueMicrotask(() => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [emblaApi, autoplay, autoplayDelay]);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child) => (
            <div
              className="flex-[0_0_auto] min-w-0"
              style={{ minWidth: typeof slideWidth === 'number' ? `${slideWidth}px` : slideWidth, maxWidth: typeof slideWidth === 'number' ? `${slideWidth}px` : slideWidth }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
