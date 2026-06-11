/**
 * Accessibility (A11y) utilities and helpers
 * WCAG 2.1 AA compliance helpers
 */

/**
 * Check if element is visible to screen readers
 */
export function isVisibleToScreenReaders(element: HTMLElement): boolean {
  if (!element) return false;

  const style = window.getComputedStyle(element);

  // Check for display: none
  if (style.display === 'none') return false;

  // Check for visibility: hidden
  if (style.visibility === 'hidden') return false;

  // Check for aria-hidden
  if (element.getAttribute('aria-hidden') === 'true') return false;

  return true;
}

/**
 * Skip to main content link helper
 * Improves keyboard navigation
 */
export const skipToMainContent = () => {
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('tabindex', '-1');
    main.focus();
    main.removeAttribute('tabindex');
  }
};

/**
 * Announce screen reader messages
 */
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
) {
  if (typeof document === 'undefined') return;

  let announce = document.getElementById('sr-announce');

  if (!announce) {
    announce = document.createElement('div');
    announce.id = 'sr-announce';
    announce.className = 'sr-only';
    announce.setAttribute('aria-live', priority);
    announce.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announce);
  }

  announce.setAttribute('aria-live', priority);
  announce.textContent = message;

  // Clear after announcement
  setTimeout(() => {
    announce!.textContent = '';
  }, 1000);
}

/**
 * Focus management for modals and dialogs
 */
export function manageFocus(element: HTMLElement | null, trap = true) {
  if (!element) return () => {};

  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!trap || e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  firstElement?.focus();

  return () => element.removeEventListener('keydown', handleKeyDown);
}

/**
 * Test color contrast ratio
 * WCAG AA requires 4.5:1 for normal text, 3:1 for large text
 */
export function checkContrast(
  foreground: string,
  background: string
): { ratio: number; passAA: boolean; passAAA: boolean } {
  const getLuminance = (color: string): number => {
    const rgb = parseInt(color.replace('#', ''), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance =
      (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance <= 0.03928
      ? luminance / 12.92
      : Math.pow((luminance + 0.055) / 1.055, 2.4);
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  const contrast = (lighter + 0.05) / (darker + 0.05);

  return {
    ratio: Math.round(contrast * 100) / 100,
    passAA: contrast >= 4.5,
    passAAA: contrast >= 7,
  };
}

/**
 * Keyboard event handler
 * Helps with keyboard accessibility
 */
export const keyboardEvents = {
  /**
   * Check if Enter or Space key was pressed
   */
  isActivationKey(e: KeyboardEvent): boolean {
    return e.key === 'Enter' || e.key === ' ';
  },

  /**
   * Check if Escape key was pressed
   */
  isEscapeKey(e: KeyboardEvent): boolean {
    return e.key === 'Escape';
  },

  /**
   * Check if Arrow key was pressed
   */
  isArrowKey(e: KeyboardEvent): boolean {
    return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(
      e.key
    );
  },

  /**
   * Get arrow direction
   */
  getArrowDirection(
    e: KeyboardEvent
  ): 'up' | 'down' | 'left' | 'right' | null {
    switch (e.key) {
      case 'ArrowUp':
        return 'up';
      case 'ArrowDown':
        return 'down';
      case 'ArrowLeft':
        return 'left';
      case 'ArrowRight':
        return 'right';
      default:
        return null;
    }
  },
};

/**
 * Accessible button component helpers
 */
export const a11yButton = {
  /**
   * Make any element keyboard accessible
   */
  makeAccessible(
    element: HTMLElement,
    onActivate: () => void
  ): () => void {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (keyboardEvents.isActivationKey(e)) {
        e.preventDefault();
        onActivate();
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    element.addEventListener('click', onActivate);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
      element.removeEventListener('click', onActivate);
    };
  },
};

/**
 * Detect and respect user's motion preferences
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check for color preference (light/dark mode)
 */
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Accessible skip link component
 * Should be placed at the beginning of page
 */
export const skipLinks = {
  create() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className =
      'sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50';
    return skipLink;
  },
};

/**
 * Announcement messages for screen readers
 */
export const a11yMessages = {
  loading: 'Loading content, please wait',
  success: 'Operation completed successfully',
  error: 'An error occurred. Please try again.',
  formSubmitting: 'Form is being submitted',
  noResults: 'No results found',
  itemAdded: (name: string) => `${name} has been added`,
  itemRemoved: (name: string) => `${name} has been removed`,
};
