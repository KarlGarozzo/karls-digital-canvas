import { GlassCard } from '@/components/GlassCard'
import { GraduationCap, MapPin, Calendar, Monitor, Globe, School } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { ScrollAnimation } from '@/components/ScrollAnimations'

export function Education() {
  const { t } = useLanguage()

  const education = [
    {
      title: t('education.efrei.title'),
      degree: t('education.efrei.degree'),
      period: t('education.efrei.period'),
      location: t('education.efrei.location'),
      description: t('education.efrei.desc'),
      icon: Monitor,
      gradient: 'from-blue-500/20 to-purple-500/20',
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-500',
    },
    {
      title: t('education.lfigp.title'),
      degree: t('education.lfigp.degree'),
      period: t('education.lfigp.period'),
      location: t('education.lfigp.location'),
      description: t('education.lfigp.desc'),
      icon: Globe,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    },
    {
      title: t('education.lfv.title'),
      degree: t('education.lfv.degree'),
      period: t('education.lfv.period'),
      location: t('education.lfv.location'),
      description: t('education.lfv.desc'),
      icon: School,
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
    },
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text text-glow">
                {t('education.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full opacity-60" />
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {education.map((item, index) => (
              <ScrollAnimation 
                key={index} 
                animation="fadeInUp"
                delay={index * 150}
              >
                <GlassCard className="group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 border-2 border-transparent hover:border-primary/20">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-lg md:text-xl font-semibold text-primary mb-4 line-clamp-2">
                          {item.degree}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            <Calendar className="h-4 w-4 text-primary/80" />
                            <span className="font-medium">{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-background/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            <MapPin className="h-4 w-4 text-primary/80" />
                            <span className="font-medium">{item.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}