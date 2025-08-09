import { useRef, useState } from 'react'
import * as React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends ButtonProps {
  magnetism?: number
  children: React.ReactNode
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(({ 
  magnetism = 0.3, 
  children, 
  className,
  ...props 
}, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * magnetism
    const deltaY = (e.clientY - centerY) * magnetism
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <Button
      ref={ref || buttonRef}
      className={cn(
        'relative overflow-hidden transition-all duration-300 ease-out',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/20 before:to-primary/20',
        'before:opacity-0 before:transition-opacity before:duration-300',
        'hover:before:opacity-100 hover:shadow-xl hover:shadow-accent/25',
        isHovering && 'scale-105',
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${isHovering ? 'scale(1.05)' : 'scale(1)'}`,
        transition: 'transform 0.2s ease-out, box-shadow 0.3s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Ripple effect on hover */}
      {isHovering && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 animate-pulse" />
      )}
    </Button>
  )
})

MagneticButton.displayName = "MagneticButton"