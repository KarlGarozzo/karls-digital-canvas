import { useState, useEffect } from 'react'
import { Download, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/LanguageProvider'
import { cn } from '@/lib/utils'

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={cn(
      'fixed bottom-8 right-8 z-50 flex flex-col space-y-3 transition-all duration-500',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
    )}>
      {/* Contact Me Button */}
      <Button
        onClick={scrollToContact}
        className="group relative overflow-hidden bg-primary hover:bg-primary/90 shadow-floating hover:shadow-intense transition-all duration-500 animate-bounce-gentle"
        size="lg"
      >
        <Mail className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
        <span className="hidden sm:inline">{t('hero.cta')}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>

      {/* Download CV Button */}
      <Button
        variant="outline"
        className="group bg-background/80 backdrop-ultra-blur border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-500"
        size="lg"
      >
        <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5 flex-shrink-0" />
        <span className="hidden sm:inline whitespace-nowrap font-medium">{t('hero.cv')}</span>
      </Button>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="ghost"
        size="icon"
        className="bg-background/60 backdrop-ultra-blur hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary shadow-card hover:shadow-glow transition-all duration-500"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}