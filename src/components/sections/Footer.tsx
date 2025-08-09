import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Heart, Code, Mail } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { MagneticButton } from '@/components/MagneticButton'

export function Footer() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <GlassCard className="p-8 md:p-12 backdrop-ultra-blur border-primary/20">
          {/* Logo and tagline */}
          <div className="text-center mb-12">
            <div className="font-signature text-4xl font-bold text-primary mb-4 hover:scale-105 transition-transform duration-300">
              KG
            </div>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Creating digital experiences that make a difference
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Quick Actions */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <MagneticButton
                  variant="outline"
                  className="w-full md:w-auto bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-500 gap-2"
                >
                  <Download className="h-4 w-4 transition-all duration-300 group-hover:translate-y-0.5" />
                  <span className="whitespace-nowrap">{t('footer.cv')}</span>
                </MagneticButton>
                <MagneticButton
                  variant="ghost"
                  onClick={scrollToContact}
                  className="w-full md:w-auto hover:bg-primary/10 hover:text-primary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get in touch
                </MagneticButton>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex justify-center space-x-4">
                <MagneticButton 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary border border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-500"
                >
                  <Github className="h-5 w-5" />
                </MagneticButton>
                <MagneticButton 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary border border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-500"
                  onClick={() => window.open('https://www.linkedin.com/in/karl-anthony-garozzo-278728301/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </MagneticButton>
                <MagneticButton 
                  variant="ghost" 
                  size="icon"
                  onClick={scrollToContact}
                  className="hover:bg-primary/10 hover:text-primary border border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-500"
                >
                  <Mail className="h-5 w-5" />
                </MagneticButton>
              </div>
            </div>

            {/* Status */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-foreground mb-4">Status</h3>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Available for work
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Code className="h-4 w-4 text-primary" />
                <span>by Karl-Anthony Garozzo</span>
              </div>
              <div className="text-sm text-muted-foreground">
                © 2024 All rights reserved
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Enhanced floating decoration */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-primary rounded-full opacity-60 blur-sm" />
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-primary rounded-full" />
      </div>
    </footer>
  )
}