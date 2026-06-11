/**
 * Performance optimization utilities for Web Vitals
 * Helps track and optimize LCP, FID, and CLS
 */

// Report Web Vitals to analytics (if configured)
export function reportWebVitals(metric: {
  name: string;
  value: number;
  delta?: number;
  id?: string;
  entries?: any[];
  rating?: string;
  navigationType?: string;
}) {
  // In production, you would send this to an analytics service
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric);
  }
}

/**
 * Performance monitoring hook
 * Tracks page performance metrics
 */
export function monitorPagePerformance() {
  if (typeof window === 'undefined') return;

  // Report on page visibility change
  if ('PerformanceObserver' in window) {
    try {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime || 0,
          delta: 0,
          id: 'lcp-' + Date.now(),
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor Cumulative Layout Shift (CLS)
      let cls = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if ((entry as any).hadRecentInput) continue;
          cls += (entry as any).value;
          reportWebVitals({
            name: 'CLS',
            value: cls,
            delta: (entry as any).value,
            id: 'cls-' + Date.now(),
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor First Input Delay (FID) / Interaction to Next Paint (INP)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: 'FID',
            value: (entry as any).processingDuration,
            delta: 0,
            id: 'fid-' + Date.now(),
          });
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    } catch (e) {
      console.warn('Performance monitoring not available', e);
    }
  }
}

/**
 * Optimize image loading with lazy loading strategy
 */
export const imageOptimizationConfig = {
  loading: 'lazy' as const,
  quality: 75,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
};

/**
 * Font optimization helper
 * Preloads critical fonts
 */
export function preloadCriticalFonts() {
  if (typeof document === 'undefined') return;

  const fonts = [
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap',
      rel: 'stylesheet',
    },
  ];

  fonts.forEach((font) => {
    const link = document.createElement('link');
    link.href = font.href;
    link.rel = font.rel;
    document.head.appendChild(link);
  });
}

/**
 * Debounce utility for event handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle utility for scroll/resize handlers
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Intersection Observer helper for scroll animations
 */
export function observeElement(
  element: HTMLElement | null,
  callback: (isVisible: boolean) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
): (() => void) | null {
  if (!element || typeof window === 'undefined') return null;

  const observer = new IntersectionObserver(([entry]) => {
    callback(entry.isIntersecting);
  }, options);

  observer.observe(element);

  return () => observer.disconnect();
}

/**
 * Prefetch routes for faster navigation
 */
export function prefetchRoute(href: string) {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Enable resource hints for performance
 */
export function addResourceHints() {
  if (typeof document === 'undefined') return;

  const hints = [
    {
      rel: 'dns-prefetch',
      href: 'https://images.unsplash.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
  ];

  hints.forEach((hint) => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.rel === 'preconnect') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}
