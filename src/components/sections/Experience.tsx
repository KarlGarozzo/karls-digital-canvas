import { GlassCard } from '@/components/GlassCard'
import { Calendar, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t('experience.efrei'),
      description: t('experience.efrei.desc'),
      period: '2024–2029',
      location: 'Paris, France',
      icon: '🎓',
    },
    {
      title: t('experience.tutor'),
      description: t('experience.tutor.desc'),
      period: '2022–2024',
      location: 'Paris, France',
      icon: '👨‍🏫',
    },
    {
      title: t('experience.animator'),
      description: t('experience.animator.desc'),
      period: '2023',
      location: 'Paris, France',
      icon: '🎭',
    },
    {
      title: t('experience.hotel'),
      description: t('experience.hotel.desc'),
      period: '2022',
      location: 'Dubai, UAE',
      icon: '🏨',
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 md:transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10 shadow-glow" />

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <GlassCard className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{exp.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}