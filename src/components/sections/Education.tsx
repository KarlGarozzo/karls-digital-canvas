import { GlassCard } from '@/components/GlassCard'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
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
      icon: GraduationCap,
    },
    {
      title: t('education.lfigp.title'),
      degree: t('education.lfigp.degree'),
      period: t('education.lfigp.period'),
      location: t('education.lfigp.location'),
      description: t('education.lfigp.desc'),
      icon: GraduationCap,
    },
    {
      title: t('education.lfv.title'),
      degree: t('education.lfv.degree'),
      period: t('education.lfv.period'),
      location: t('education.lfv.location'),
      description: t('education.lfv.desc'),
      icon: GraduationCap,
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 gradient-text text-glow">
              {t('education.title')}
            </h2>
          </ScrollAnimation>

          <div className="space-y-8">
            {education.map((item, index) => (
              <ScrollAnimation 
                key={index} 
                animation="fadeInUp"
                delay={index * 200}
              >
                <GlassCard className="p-8 hover-lift group">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg font-medium text-primary mb-3">
                        {item.degree}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}