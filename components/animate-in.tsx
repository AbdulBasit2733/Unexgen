'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'

interface AnimateInProps {
  children: ReactNode
  animation?: AnimationType
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  className?: string
  as?: keyof JSX.IntrinsicElements
  threshold?: number
  style?: CSSProperties
}

/**
 * Wraps children in a scroll-triggered animation.
 * Animation fires once when the element enters the viewport.
 * Respects `prefers-reduced-motion` via CSS.
 */
export function AnimateIn({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  as: Tag = 'div',
  threshold = 0.15,
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    // @ts-expect-error dynamic tag
    <Tag
      ref={ref}
      className={cn(
        'animate-on-scroll',
        `anim-${animation}`,
        `delay-${delay}`,
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  )
}
