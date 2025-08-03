import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideUp' | 'reveal' | 'fadeIn'
  delay?: number
  threshold?: number
  className?: string
}

export function ScrollAnimation({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
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

  const getAnimationClass = () => {
    const base = 'transition-all duration-1000 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${base} opacity-0 translate-y-12`
        case 'fadeInLeft':
          return `${base} opacity-0 -translate-x-12`
        case 'fadeInRight':
          return `${base} opacity-0 translate-x-12`
        case 'scaleIn':
          return `${base} opacity-0 scale-95`
        case 'slideUp':
          return `${base} opacity-0 translate-y-20`
        case 'reveal':
          return `${base} opacity-0 scale-110`
        case 'fadeIn':
          return `${base} opacity-0`
        default:
          return `${base} opacity-0 translate-y-12`
      }
    }
    
    return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}

export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = '' 
}: { 
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * speed
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      ref={ref}
      className={className}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  )
}