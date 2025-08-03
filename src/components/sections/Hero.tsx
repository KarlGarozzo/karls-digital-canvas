import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { MagneticButton } from '@/components/MagneticButton'
import { ScrollAnimation } from '@/components/ScrollAnimations'
import heroBg from '@/assets/hero-bg.jpg'

export function Hero() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/10" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
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
          {/* Profile Image with enhanced effects */}
          <ScrollAnimation animation="scaleIn" className="mb-8 relative inline-block group">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-2xl opacity-50 animate-spin-slow" />
            <img
              src="/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png"
              alt="Karl-Anthony Garozzo"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-glass-border shadow-glow group-hover:scale-105 transition-all duration-700 backdrop-noise"
            />
            {/* Orbital rings */}
            <div className="absolute inset-0 border-2 border-accent/20 rounded-full animate-spin-slow opacity-60" style={{ padding: '20px' }} />
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow opacity-40" style={{ padding: '30px', animationDirection: 'reverse' }} />
          </ScrollAnimation>

          {/* Greeting with enhanced animation */}
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="gradient-text text-glow">
                {t('hero.greeting')}
              </span>
            </h1>
          </ScrollAnimation>

          {/* Subtitle with typewriter effect */}
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </ScrollAnimation>

          {/* Enhanced CTA Button */}
          <ScrollAnimation animation="scaleIn" delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <MagneticButton
                onClick={scrollToProjects}
                variant="gradient"
                size="lg"
                magnetism={0.4}
                className="px-8 py-6 text-lg font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </MagneticButton>
              
              <div className="flex items-center space-x-4">
                <MagneticButton variant="ghost" size="sm" className="hover:bg-accent/20 transition-colors">
                  <Github className="h-5 w-5" />
                </MagneticButton>
                <MagneticButton 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-accent/20 transition-colors"
                  onClick={() => window.open('https://www.linkedin.com/in/karl-anthony-garozzo-278728301/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </MagneticButton>
                <MagneticButton 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-accent/20 transition-colors"
                  onClick={() => window.open('mailto:karl.anthony.garozzo@gmail.com')}
                >
                  <Mail className="h-5 w-5" />
                </MagneticButton>
              </div>
            </div>
          </ScrollAnimation>

          {/* Enhanced scroll indicator */}
          <ScrollAnimation animation="fadeIn" delay={800}>
            <div className="animate-bounce pulse-slow">
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground hover:text-accent transition-colors duration-300" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}