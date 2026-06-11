import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
};

export const useScrollParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      scrollTrigger: {
        trigger: ref.current,
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return ref;
};

export const useCountUp = (target: number, duration = 2) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration,
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.floor(counter.value).toLocaleString();
        }
      },
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        onEnter: () => {
          // Animation starts when element enters viewport
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [target, duration]);

  return ref;
};

export const useFloatingElement = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      gsap.killTweensOf(ref.current);
    };
  }, []);

  return ref;
};

export const useMouseParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      childrenRef.current.forEach((child, index) => {
        if (child) {
          const depth = (index + 1) * 10;
          gsap.to(child, {
            x: (x / rect.width) * depth,
            y: (y / rect.height) * depth,
            duration: 0.3,
            overwrite: 'auto',
          });
        }
      });
    };

    const handleMouseLeave = () => {
      childrenRef.current.forEach((child) => {
        if (child) {
          gsap.to(child, {
            x: 0,
            y: 0,
            duration: 0.3,
          });
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(childrenRef.current);
    };
  }, []);

  return { containerRef, childrenRef };
};

export const useScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    gsap.set(progressRef.current, { width: '0%' });

    gsap.to(progressRef.current, {
      width: () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        return `${(scrollTop / docHeight) * 100}%`;
      },
      scrollTrigger: {
        trigger: 'body',
        scrub: 0,
        onUpdate: (self) => {
          if (progressRef.current) {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            progressRef.current.style.width = `${(scrollTop / docHeight) * 100}%`;
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return progressRef;
};

export const useInViewAnimation = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.current) {
          isVisible.current = true;
          // Trigger animation
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ...options }
          );
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return ref;
};
