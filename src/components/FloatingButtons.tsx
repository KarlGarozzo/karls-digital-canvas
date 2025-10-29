import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FloatingButtons() {
  return (
    <>
      {/* Theme toggle - top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Back to portfolio - bottom right */}
      <Link to="/" className="fixed bottom-6 right-6 z-50 group">
        <Button
          size="lg"
          className="rounded-full shadow-glow hover:shadow-intense transition-all duration-500 animate-bounce-gentle bg-primary hover:bg-primary/90"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Portfolio</span>
          <span className="sm:hidden">Back</span>
        </Button>
      </Link>
    </>
  )
}