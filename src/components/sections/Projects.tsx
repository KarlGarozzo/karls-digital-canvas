import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <GlassCard
                key={index}
                className="group overflow-hidden"
                hover={true}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t('projects.view')}
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}