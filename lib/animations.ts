/**
 * GSAP Animation Utilities
 * Handles scroll triggers, parallax, and entrance animations
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade-in and slide-up animation on scroll
 */
export function createFadeInUpAnimation(
  element: HTMLElement | null,
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
  }
) {
  if (!element) return;

  const defaults = {
    duration: 0.8,
    delay: 0,
    stagger: 0.1,
    ...options,
  };

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 30,
    duration: defaults.duration,
    delay: defaults.delay,
    stagger: defaults.stagger,
    ease: 'power2.out',
  });
}

/**
 * Parallax scroll effect
 */
export function createParallaxEffect(
  element: HTMLElement | null,
  speed = 0.5
) {
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      markers: false,
    },
    y: window.innerHeight * speed,
    ease: 'none',
  });
}

/**
 * Carousel auto-advance animation
 */
export function createCarouselAutoAdvance(
  nextButton: HTMLElement | null,
  interval = 5000
) {
  if (!nextButton) return;

  const timer = setInterval(() => {
    nextButton.click();
  }, interval);

  return () => clearInterval(timer);
}

/**
 * Staggered list animation
 */
export function createStaggeredListAnimation(
  listElement: HTMLElement | null,
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
  }
) {
  if (!listElement) return;

  const defaults = {
    duration: 0.6,
    delay: 0,
    stagger: 0.1,
    ...options,
  };

  const items = listElement.querySelectorAll('[data-animate]');

  gsap.from(items, {
    scrollTrigger: {
      trigger: listElement,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 20,
    duration: defaults.duration,
    delay: defaults.delay,
    stagger: defaults.stagger,
    ease: 'power2.out',
  });
}

/**
 * Counter animation for numbers
 */
export function animateCounter(
  element: HTMLElement | null,
  targetValue: number,
  duration = 2,
  prefix = '',
  suffix = ''
) {
  if (!element) return;

  const startValue = 0;

  gsap.to(
    { value: startValue },
    {
      value: targetValue,
      duration,
      ease: 'power2.out',
      onUpdate: function () {
        const currentValue = Math.round(this.targets()[0].value);
        element.textContent = `${prefix}${currentValue.toLocaleString('en-IN')}${suffix}`;
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Cleanup all animations for an element
 */
export function killAnimations(element: HTMLElement | null) {
  if (!element) return;
  gsap.killTweensOf(element);
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.trigger === element) {
      trigger.kill();
    }
  });
}

/**
 * Refresh all ScrollTrigger instances
 * Call after DOM changes
 */
export function refreshScrollTriggers() {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
}
