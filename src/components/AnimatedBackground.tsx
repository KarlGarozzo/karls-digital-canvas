import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating geometric shapes
    const createShape = () => {
      const shape = document.createElement('div')
      const shapes = ['circle', 'triangle', 'square']
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)]
      
      shape.className = `absolute opacity-10 pointer-events-none animate-float`
      
      const size = Math.random() * 100 + 50
      const left = Math.random() * 100
      const animationDuration = Math.random() * 10 + 15
      
      shape.style.left = `${left}%`
      shape.style.top = `${Math.random() * 100}%`
      shape.style.width = `${size}px`
      shape.style.height = `${size}px`
      shape.style.animationDuration = `${animationDuration}s`
      shape.style.animationDelay = `${Math.random() * 5}s`
      
      if (shapeType === 'circle') {
        shape.style.borderRadius = '50%'
        shape.style.background = 'linear-gradient(45deg, hsl(var(--accent)), hsl(var(--primary)))'
      } else if (shapeType === 'triangle') {
        shape.style.width = '0'
        shape.style.height = '0'
        shape.style.borderLeft = `${size/2}px solid transparent`
        shape.style.borderRight = `${size/2}px solid transparent`
        shape.style.borderBottom = `${size}px solid hsl(var(--accent) / 0.1)`
      } else {
        shape.style.background = 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)))'
        shape.style.transform = 'rotate(45deg)'
      }
      
      container.appendChild(shape)
      
      // Remove shape after animation
      setTimeout(() => {
        if (container.contains(shape)) {
          container.removeChild(shape)
        }
      }, (animationDuration + 5) * 1000)
    }

    // Create initial shapes
    for (let i = 0; i < 8; i++) {
      setTimeout(createShape, i * 2000)
    }

    // Continue creating shapes
    const interval = setInterval(createShape, 8000)
    
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      
      {/* Flowing light streaks */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{
              top: `${20 + i * 30}%`,
              animation: `flow ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}