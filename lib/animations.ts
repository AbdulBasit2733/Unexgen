import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Framer Motion Animation Variants

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
};

export const bounce = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

export const float = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut',
    },
  },
};

export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

export const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

// GSAP Scroll Animations

export const createScrollReveal = (element: HTMLElement | null, options = {}) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        markers: false,
        ...options,
      },
    }
  );
};

export const createScrollParallax = (element: HTMLElement | null, speed = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      scrub: 0.5,
      markers: false,
    },
  });
};

export const createScrollScale = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        markers: false,
      },
    }
  );
};

export const createCountUp = (element: HTMLElement | null, target: number, duration = 2) => {
  if (!element) return;

  let current = 0;
  const increment = target / (duration * 60);

  const updateCount = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current).toString();
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target.toString();
    }
  };

  ScrollTrigger.create({
    trigger: element,
    onEnter: updateCount,
  });
};

// Parallax Background Motion

export const parallaxBackground = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.to(element, {
    backgroundPosition: '100% 100%',
    scrollTrigger: {
      trigger: element,
      scrub: 1,
      markers: false,
    },
  });
};

// Hero Spotlight Effect

export const createSpotlightEffect = (
  container: HTMLElement | null,
  options = { intensity: 0.3 }
) => {
  if (!container) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const gradient = `
      radial-gradient(
        circle 600px at ${x}px ${y}px,
        rgba(34, 197, 94, ${options.intensity}),
        transparent 80%
      )
    `;

    (container as any).style.backgroundImage = gradient;
  });
};

// Scroll Progress Bar

export const createScrollProgress = (progressBar: HTMLElement | null) => {
  if (!progressBar) return;

  gsap.to(progressBar, {
    width: () => `${window.scrollY}%`,
    scrollTrigger: {
      trigger: 'body',
      scrub: 0,
    },
  });
};

// Float Animation for Elements

export const createFloatingElement = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.to(element, {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

// Counter Animation for Stats

export const animateCounter = (element: HTMLElement | null, target: number) => {
  if (!element) return;

  const counter = { value: 0 };
  gsap.to(counter, {
    value: target,
    duration: 2,
    onUpdate: () => {
      element.textContent = Math.floor(counter.value).toLocaleString();
    },
  });
};

// Kill all GSAP animations for cleanup

export const killAnimations = (target?: any) => {
  gsap.killTweensOf(target || '*');
};

// Batch scroll animations for performance

export const createBatchScrollAnimations = (
  selector: string,
  animationConfig = {}
) => {
  const elements = gsap.utils.toArray(selector);

  elements.forEach((element: any) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          markers: false,
        },
        ...animationConfig,
      }
    );
  });
};
