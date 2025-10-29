import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  onComplete?: () => void
}

export function TypewriterText({ 
  text, 
  className, 
  delay = 0, 
  speed = 80,
  onComplete 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, started, speed, onComplete])

  return (
    <span className={cn(className)}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-[1em] bg-primary animate-pulse ml-1" />
      )}
    </span>
  )
}
