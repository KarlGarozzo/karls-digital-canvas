import { useState } from 'react'
import { ScrollAnimation } from '@/components/ScrollAnimations'
import { GlassCard } from '@/components/GlassCard'
import { useLanguage } from '@/components/LanguageProvider'
import { Github, ExternalLink, Eye } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MagneticButton } from '@/components/MagneticButton'
import { ProjectModal } from '@/components/ProjectModal'
import { SectionReveal } from '@/components/SectionReveal'

export function Projects() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const projects = [
    {
      title: t('projects.bmp.title'),
      description: t('projects.bmp.desc'),
      longDescription: "A comprehensive BMP image processing application built in C, featuring advanced image manipulation algorithms and an intuitive user interface for seamless image editing.",
      tags: ['C', 'Image Processing', 'UI Design'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Advanced image processing algorithms',
        'Real-time image preview',
        'Multiple filter options',
        'Optimized performance',
        'Cross-platform compatibility'
      ],
      stack: ['C', 'SDL2', 'OpenCV', 'CMake']
    },
    {
      title: t('projects.logistics.title'),
      description: t('projects.logistics.desc'),
      longDescription: "An automated logistics management system built with Python, streamlining operations through Excel integration and intelligent automation workflows.",
      tags: ['Python', 'Excel', 'Automation'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Automated report generation',
        'Excel data processing',
        'Real-time analytics',
        'Error handling and validation',
        'User-friendly interface'
      ],
      stack: ['Python', 'Pandas', 'Openpyxl', 'Tkinter']
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.desc'),
      longDescription: "A modern, responsive portfolio website showcasing projects and skills with clean design, smooth animations, and optimized performance across all devices.",
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Fully responsive design',
        'Modern CSS animations',
        'Interactive JavaScript features',
        'SEO optimized',
        'Fast loading performance'
      ],
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Sass']
    },
    {
      title: t('projects.ai.title'),
      description: t('projects.ai.desc'),
      longDescription: "An intelligent AI assistant powered by OpenAI's GPT, featuring automated workflows, natural language processing, and seamless Python integration for enhanced productivity.",
      tags: ['OpenAI', 'Python', 'Automation', 'AI'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Natural language processing',
        'Automated task execution',
        'API integration',
        'Machine learning capabilities',
        'Scalable architecture'
      ],
      stack: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL']
    },
  ]

  return (
    <>
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 gradient-text">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez mes projets les plus récents et innovants
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <SectionReveal
                key={index}
                delay={index * 150}
                className="group"
              >
                <GlassCard className="h-full hover-lift hover-tilt transition-all duration-700 group cursor-pointer overflow-hidden" onClick={() => openProjectModal(project)}>
                  <div className="p-6 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-gradient-mesh">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                        <MagneticButton
                          variant="default"
                          size="lg"
                          className="bg-gradient-primary shadow-glow animate-zoom-in"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          View Details
                        </MagneticButton>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-3 gradient-text-secondary transition-all duration-300 group-hover:text-shadow-glow">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs glass-effect border-glass-border hover:border-accent transition-colors duration-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <MagneticButton
                          variant="outline"
                          size="sm"
                          className="flex-1 group/btn glass-effect border-glass-border hover:border-accent"
                          onClick={(e) => {
                            e.stopPropagation()
                            if (project.github) window.open(project.github, '_blank')
                          }}
                        >
                          <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110 group-hover/btn:rotate-12" />
                          Code
                        </MagneticButton>
                        <MagneticButton
                          variant="default"
                          size="sm"
                          className="flex-1 group/btn bg-gradient-primary hover:shadow-glow"
                          onClick={(e) => {
                            e.stopPropagation()
                            if (project.demo) window.open(project.demo, '_blank')
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110 group-hover/btn:translate-x-1" />
                          {t('projects.view')}
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}