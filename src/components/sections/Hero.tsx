import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { MagneticButton } from '@/components/MagneticButton'
import { ScrollAnimation } from '@/components/ScrollAnimations'
import heroBg from '@/assets/hero-bg.jpg'

export function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Available to Work Badge */}
          <ScrollAnimation animation="fadeIn" className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-pulse">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-ping" />
              {t('hero.available')}
            </div>
          </ScrollAnimation>

          {/* Profile Image with enhanced effects */}
          <ScrollAnimation animation="scaleIn" className="mb-8 relative inline-block group">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-glow-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl opacity-30 animate-spin-slow" />
            <img
              src="/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png"
              alt="Karl-Anthony Garozzo"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-card group-hover:scale-105 transition-all duration-700 backdrop-noise"
            />
            {/* Orbital rings */}
            <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-spin-slow opacity-60" style={{ padding: '20px' }} />
            <div className="absolute inset-0 border border-accent/10 rounded-full animate-spin-slow opacity-40" style={{ padding: '30px', animationDirection: 'reverse' }} />
          </ScrollAnimation>

          {/* Name and Title */}
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              <span className="gradient-text text-glow">
                {t('hero.greeting')}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
              {t('hero.tagline')}
            </h2>
          </ScrollAnimation>

          {/* Subtitle */}
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation animation="scaleIn" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <MagneticButton
                onClick={scrollToContact}
                variant="default"
                size="lg"
                magnetism={0.4}
                className="px-8 py-6 text-lg font-semibold relative overflow-hidden group bg-primary hover:bg-primary/90 shadow-card hover:shadow-glow transition-all duration-500"
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  {t('hero.cta')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </MagneticButton>
              
              <MagneticButton 
                variant="outline" 
                size="lg" 
                className="group bg-background/80 backdrop-ultra-blur border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-500 px-8 py-6 text-lg font-semibold"
              >
                <Download className="w-5 h-5 transition-all duration-300 group-hover:translate-y-0.5 flex-shrink-0" />
                <span className="whitespace-nowrap">{t('hero.cv')}</span>
              </MagneticButton>
            </div>
          </ScrollAnimation>

          {/* Location & Links */}
          <ScrollAnimation animation="fadeIn" delay={800}>
            <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{t('contact.location')}</span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Enhanced scroll indicator */}
          <ScrollAnimation animation="fadeIn" delay={1000}>
            <div className="animate-bounce pulse-slow">
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer" 
                       onClick={() => scrollToContact()} />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}