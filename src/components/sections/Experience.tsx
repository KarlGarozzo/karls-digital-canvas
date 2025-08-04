import { GlassCard } from '@/components/GlassCard'
import { ScrollAnimation } from '@/components/ScrollAnimations'
import { Calendar, MapPin, Users, Code, Wand2, Building } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import tutorImage from '@/assets/tutor-image.jpg'
import magicImage from '@/assets/magic-image.jpg'
import exportImage from '@/assets/export-image.jpg'
import hotelImage from '@/assets/hotel-image.jpg'

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t('experience.tutor'),
      company: 'Superprof',
      period: 'Oct. 2024 – Present',
      location: 'Paris (Hybrid)',
      type: 'Tutoring',
      description: [
        t('experience.tutor.desc1'),
        t('experience.tutor.desc2'),
        t('experience.tutor.desc3')
      ],
      image: tutorImage,
      icon: <Users className="h-5 w-5" />,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: t('experience.animator'),
      company: 'Salut Hola Language Camp',
      period: 'Jul. – Aug. 2023',
      location: 'Warsaw',
      type: 'Volunteering',
      description: [
        t('experience.animator.desc1'),
        t('experience.animator.desc2'),
        t('experience.animator.desc3')
      ],
      image: magicImage,
      icon: <Wand2 className="h-5 w-5" />,
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: t('experience.export'),
      company: 'FDG',
      period: 'Summer 2025',
      location: 'Paris',
      type: 'Export',
      description: [
        t('experience.export.desc1'),
        t('experience.export.desc2'),
        t('experience.export.desc3')
      ],
      image: exportImage,
      icon: <Code className="h-5 w-5" />,
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: t('experience.hotel'),
      company: 'SLS Hotel Dubai',
      period: 'May 2022',
      location: 'Dubai',
      type: 'Hospitality',
      description: [
        t('experience.hotel.desc1'),
        t('experience.hotel.desc2'),
        t('experience.hotel.desc3')
      ],
      image: hotelImage,
      icon: <Building className="h-5 w-5" />,
      color: 'from-orange-600 to-red-600',
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent relative">
              {t('experience.title')}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded-full opacity-80" />
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </ScrollAnimation>

          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 transform -translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollAnimation 
                  key={index}
                  animation="fadeInUp" 
                  delay={index * 200}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 shadow-glow" />

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <GlassCard className="group overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 hover:shadow-glow">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        
                        {/* Type badge */}
                        <div className="absolute top-4 right-4">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${exp.color} shadow-lg`}>
                            {exp.type}
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {exp.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {exp.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}