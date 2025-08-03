import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleTheme = () => {
    setIsAnimating(true)
    
    // Create ripple effect
    const ripple = document.createElement('div')
    ripple.className = 'theme-ripple'
    document.body.appendChild(ripple)
    
    setTimeout(() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      
      setTimeout(() => {
        document.body.removeChild(ripple)
        setIsAnimating(false)
      }, 600)
    }, 300)
  }

  return (
    <>
      {/* Theme ripple styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .theme-ripple {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: ${resolvedTheme === 'dark' 
            ? 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, #0a0a0a 0%, rgba(10,10,10,0.8) 50%, transparent 100%)'
          };
          transform: translate(-50%, -50%);
          animation: ripple-expand 0.6s ease-out forwards;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        
        @keyframes ripple-expand {
          0% {
            width: 0;
            height: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 200vmax;
            height: 200vmax;
            opacity: 0;
          }
        }
        `
      }} />
      
      <button
        onClick={toggleTheme}
        className={cn(
          'relative p-3 rounded-xl transition-all duration-500 ease-out',
          'bg-gradient-to-br from-glass-bg to-glass-bg/50 backdrop-blur-md',
          'border border-glass-border shadow-glass',
          'hover:shadow-glow hover:scale-110 hover:border-accent/30',
          'group overflow-hidden',
          isAnimating && 'animate-pulse'
        )}
        disabled={isAnimating}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl" />
        
        {/* Icon container */}
        <div className="relative z-10 w-5 h-5 flex items-center justify-center">
          {resolvedTheme === 'dark' ? (
            <Sun className={cn(
              'h-5 w-5 text-accent transition-all duration-500',
              'group-hover:rotate-90 group-hover:scale-110'
            )} />
          ) : (
            <Moon className={cn(
              'h-5 w-5 text-primary transition-all duration-500',
              'group-hover:-rotate-12 group-hover:scale-110'
            )} />
          )}
        </div>
        
        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-xl">
          <div className="absolute inset-2 border border-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
          <div className="absolute inset-4 border border-primary/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
      </button>
    </>
  )
}