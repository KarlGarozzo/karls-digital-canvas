import { useState, useEffect } from 'react'
import { Download, MessageCircle, ArrowUp } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'
import { useLanguage } from '@/components/LanguageProvider'

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Download CV Button */}
      <div className="glass-card-floating group">
        <MagneticButton
          variant="outline"
          size="lg"
          className="w-14 h-14 rounded-full border-glass-border hover:border-accent hover:shadow-glow bg-glass-bg/80 backdrop-blur-xl"
        >
          <Download className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
        </MagneticButton>
      </div>

      {/* Contact Me Button */}
      <div className="glass-card-floating group">
        <MagneticButton
          variant="default"
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow"
          onClick={scrollToContact}
        >
          <MessageCircle className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
        </MagneticButton>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="glass-card-floating group animate-slide-up">
          <MagneticButton
            variant="outline"
            size="lg"
            className="w-14 h-14 rounded-full border-glass-border hover:border-primary hover:shadow-glow bg-glass-bg/80 backdrop-blur-xl"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
          </MagneticButton>
        </div>
      )}
    </div>
  )
}