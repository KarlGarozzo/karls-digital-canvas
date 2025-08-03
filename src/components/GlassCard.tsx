import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        // Base glass effect
        'relative overflow-hidden rounded-2xl backdrop-blur-md border',
        'bg-gradient-to-br from-glass-bg to-glass-bg/50',
        'border-glass-border shadow-glass',
        
        // Hover effects
        hover && 'transition-all duration-500 ease-out hover:scale-[1.02]',
        hover && 'hover:shadow-glow hover:border-accent/30',
        
        // Glow effect
        glow && 'shadow-glow animate-glow-pulse',
        
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}