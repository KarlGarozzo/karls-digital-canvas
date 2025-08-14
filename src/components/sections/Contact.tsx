import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, ArrowUpRight, Heart } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { ScrollAnimation } from '@/components/ScrollAnimations'

export function Contact() {
  const { t } = useLanguage()

  const contactLinks = [
    {
      label: 'Email Me',
      href: 'mailto:karl.anthony.garozzo@gmail.com',
      icon: Mail,
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'from-blue-600 to-cyan-600',
      description: 'karl.anthony.garozzo@gmail.com'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/karl-anthony-garozzo-278728301/',
      icon: Linkedin,
      gradient: 'from-blue-600 to-blue-700',
      hoverGradient: 'from-blue-700 to-blue-800',
      description: 'Connect with me professionally'
    },
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: Github,
      gradient: 'from-gray-700 to-gray-900',
      hoverGradient: 'from-gray-800 to-black',
      description: 'Check out my code'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeInUp">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text text-glow">
                {t('contact.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full opacity-60 mb-8" />
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                {t('contact.connect')}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={200}>
            <GlassCard className="p-8 md:p-12 mb-12 relative overflow-hidden group">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Heart className="h-6 w-6 text-red-500 animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Let's create something amazing together!
                  </h3>
                  <Heart className="h-6 w-6 text-red-500 animate-pulse" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {contactLinks.map((link, index) => (
                    <ScrollAnimation 
                      key={index} 
                      animation="scaleIn" 
                      delay={300 + index * 100}
                    >
                      <Button
                        asChild
                        size="lg"
                        className={`group relative h-auto p-6 bg-gradient-to-br ${link.gradient} hover:${link.hoverGradient} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden`}
                      >
                        <a
                          href={link.href}
                          target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                          rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                          className="flex flex-col items-center space-y-3 text-center min-h-[120px] justify-center"
                        >
                          {/* Background shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          
                          <div className="relative z-10 flex flex-col items-center space-y-3">
                            <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                              <link.icon className="h-8 w-8" />
                            </div>
                            <div>
                              <div className="font-bold text-lg mb-1 flex items-center gap-2">
                                {link.label}
                                <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                              </div>
                              <div className="text-sm opacity-90 line-clamp-1">
                                {link.description}
                              </div>
                            </div>
                          </div>
                        </a>
                      </Button>
                    </ScrollAnimation>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-muted-foreground text-sm font-medium">
                    📍 {t('contact.location')} • Available for internships & opportunities
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollAnimation>

          {/* Quick Stats */}
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects Completed', value: '15+' },
                { label: 'Languages', value: '3' },
                { label: 'Response Time', value: '< 24h' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}