import { GlassCard } from '@/components/GlassCard'
import { ScrollAnimation } from '@/components/ScrollAnimations'
import { Code, Database, Heart, MessageCircle, BrainCircuit, Users, Trophy, Lightbulb } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.programming'),
      skills: [
        { name: 'Python', icon: <Code className="h-5 w-5" />, color: 'from-blue-600 to-indigo-600' },
        { name: 'C', icon: <Code className="h-5 w-5" />, color: 'from-gray-600 to-slate-700' },
        { name: 'Java', icon: <Code className="h-5 w-5" />, color: 'from-orange-600 to-red-600' },
        { name: 'HTML/CSS', icon: <Code className="h-5 w-5" />, color: 'from-orange-500 to-pink-500' },
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', icon: <Database className="h-5 w-5" />, color: 'from-orange-600 to-red-600' },
        { name: 'GitHub', icon: <Database className="h-5 w-5" />, color: 'from-gray-700 to-gray-900' },
        { name: 'GitLab', icon: <Database className="h-5 w-5" />, color: 'from-orange-500 to-orange-700' },
        { name: 'Excel', icon: <Database className="h-5 w-5" />, color: 'from-green-600 to-emerald-600' },
      ]
    },
    {
      title: t('skills.soft'),
      skills: [
        { name: t('skills.problem-solving'), icon: <BrainCircuit className="h-5 w-5" />, color: 'from-purple-600 to-indigo-600' },
        { name: t('skills.leadership'), icon: <Trophy className="h-5 w-5" />, color: 'from-yellow-500 to-orange-500' },
        { name: t('skills.adaptability'), icon: <Lightbulb className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500' },
        { name: 'Communication', icon: <MessageCircle className="h-5 w-5" />, color: 'from-green-500 to-teal-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent relative">
              {t('skills.title')}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded-full opacity-80" />
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </ScrollAnimation>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollAnimation 
                key={categoryIndex}
                animation="fadeInUp" 
                delay={categoryIndex * 200}
                className="space-y-6"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary mr-3 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{categoryIndex + 1}</span>
                  </div>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <GlassCard
                      key={skillIndex}
                      className="group cursor-pointer hover:scale-105 transition-all duration-300 p-4 bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 hover:shadow-glow"
                      hover={true}
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      
                      {/* Hover tooltip */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {skill.name}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Spoken Languages Section */}
          <ScrollAnimation animation="fadeInUp" delay={600} className="mt-16">
            <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary mr-3 flex items-center justify-center">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              {t('skills.languages')}
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { flag: '🇫🇷', lang: 'Français', level: 'Native' },
                { flag: '🇵🇱', lang: 'Polski', level: 'Native' },
                { flag: '🇬🇧', lang: 'English', level: 'Fluent' },
                { flag: '🇪🇸', lang: 'Español', level: 'Basic' },
              ].map((language, index) => (
                <GlassCard
                  key={index}
                  className="group cursor-pointer hover:scale-105 transition-all duration-300 p-4 bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 hover:shadow-glow"
                  hover={true}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {language.flag}
                    </span>
                    <div>
                      <h4 className="font-medium text-sm text-foreground">{language.lang}</h4>
                      <p className="text-xs text-muted-foreground">{language.level}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}