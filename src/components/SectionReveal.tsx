import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideUp'
  delay?: number
  threshold?: number
}

export function SectionReveal({ 
  children, 
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.2
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
      { threshold, rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getAnimationClasses = () => {
    const base = 'transition-all duration-1000 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${base} opacity-0 translate-y-16`
        case 'fadeInLeft':
          return `${base} opacity-0 -translate-x-16`
        case 'fadeInRight':
          return `${base} opacity-0 translate-x-16`
        case 'scaleIn':
          return `${base} opacity-0 scale-90`
        case 'slideUp':
          return `${base} opacity-0 translate-y-24`
        default:
          return `${base} opacity-0 translate-y-16`
      }
    }
    
    return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div 
      ref={ref} 
      className={cn(getAnimationClasses(), className)}
    >
      {children}
    </div>
  )
}