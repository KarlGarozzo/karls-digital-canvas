import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { ScrollAnimation } from '@/components/ScrollAnimations'
import { MagneticButton } from '@/components/MagneticButton'

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('projects.bmp.title'),
      description: t('projects.bmp.desc'),
      tags: ['C', 'Image Processing', 'UI Design'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.logistics.title'),
      description: t('projects.logistics.desc'),
      tags: ['Python', 'Excel', 'Automation'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.desc'),
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
    },
    {
      title: t('projects.ai.title'),
      description: t('projects.ai.desc'),
      tags: ['OpenAI', 'Python', 'Automation', 'AI'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 gradient-text text-glow">
              {t('projects.title')}
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation 
                key={index} 
                animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                delay={index * 200}
              >
                <GlassCard
                  className="group overflow-hidden hover-lift backdrop-noise relative"
                  hover={true}
                >
                  {/* Enhanced image with parallax effect */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    
                    {/* Floating tech badges */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs font-medium bg-glass-bg backdrop-blur-sm text-accent rounded-full border border-glass-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full hover:bg-accent/30 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-3">
                        <MagneticButton variant="ghost" size="sm" className="hover:bg-accent/20">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </MagneticButton>
                        <MagneticButton variant="ghost" size="sm" className="hover:bg-accent/20">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('projects.view')}
                        </MagneticButton>
                      </div>
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