import { useEffect, useRef, useState } from 'react'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function SectionReveal({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1 
}: SectionRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div
      ref={ref}
      className={`section-reveal ${isVisible ? 'in-view' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export function StaggeredReveal({ 
  children, 
  className = '', 
  staggerDelay = 100 
}: { 
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <SectionReveal
          key={index}
          delay={index * staggerDelay}
          className={`stagger-${Math.min(index + 1, 5)}`}
        >
          {child}
        </SectionReveal>
      ))}
    </div>
  )
}