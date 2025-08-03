import { GlassCard } from '@/components/GlassCard'
import { Code, Wrench, Heart, Globe } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.programming'),
      icon: <Code className="h-6 w-6" />,
      skills: ['Python', 'C', 'Java', 'HTML/CSS', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('skills.tools'),
      icon: <Wrench className="h-6 w-6" />,
      skills: ['GitHub', 'GitLab', 'Arduino', 'Raspberry Pi', 'VS Code', 'Docker'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: t('skills.soft'),
      icon: <Heart className="h-6 w-6" />,
      skills: [t('skills.problem-solving'), t('skills.leadership'), t('skills.adaptability'), 'Creativity', 'Teamwork', 'Communication'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: t('skills.languages'),
      icon: <Globe className="h-6 w-6" />,
      skills: ['🇫🇷 FR (C2)', '🇵🇱 PL (C2)', '🇬🇧 EN (B2)', '🇪🇸 ES (A2)'],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <GlassCard
                key={index}
                className="p-6 group"
                hover={true}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-secondary/50 rounded-lg text-sm text-center text-foreground hover:bg-accent/20 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}