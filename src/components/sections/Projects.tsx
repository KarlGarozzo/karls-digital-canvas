import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { SectionReveal } from '@/components/SectionReveal'
import { MagneticButton } from '@/components/MagneticButton'
import { ProjectModal } from '@/components/ProjectModal'

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('projects.bmp.title'),
      description: t('projects.bmp.desc'),
      fullDescription: "A comprehensive bitmap image processing application built in C, featuring advanced filtering algorithms and an intuitive user interface. This project demonstrates low-level programming skills and digital image processing concepts.",
      tags: ['C', 'Image Processing', 'UI Design'],
      stack: ['C Programming', 'GTK+', 'LibPNG', 'OpenCV'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Real-time image filtering and effects',
        'Multiple file format support (BMP, PNG, JPEG)',
        'Custom filter creation tools',
        'Batch processing capabilities'
      ],
      challenges: [
        'Optimizing memory usage for large image files',
        'Implementing efficient filtering algorithms',
        'Creating a responsive user interface in C'
      ]
    },
    {
      title: t('projects.logistics.title'),
      description: t('projects.logistics.desc'),
      fullDescription: "An automated logistics management system built with Python, designed to streamline warehouse operations and inventory tracking. Features Excel integration for seamless data management.",
      tags: ['Python', 'Excel', 'Automation'],
      stack: ['Python', 'Pandas', 'Openpyxl', 'Tkinter', 'SQLite'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Automated inventory tracking',
        'Excel report generation',
        'Real-time dashboard updates',
        'Multi-warehouse support'
      ],
      challenges: [
        'Handling large datasets efficiently',
        'Creating seamless Excel integration',
        'Building a user-friendly interface for non-technical users'
      ]
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.desc'),
      fullDescription: "A modern, responsive portfolio website showcasing web development skills. Built with semantic HTML, modern CSS techniques, and vanilla JavaScript for optimal performance.",
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      stack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'SASS', 'Webpack'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Fully responsive design',
        'Dark/light theme toggle',
        'Smooth animations and transitions',
        'SEO optimized'
      ],
      challenges: [
        'Achieving pixel-perfect responsive design',
        'Optimizing performance without frameworks',
        'Implementing smooth scroll animations'
      ]
    },
    {
      title: t('projects.ai.title'),
      description: t('projects.ai.desc'),
      fullDescription: "An intelligent automation platform leveraging OpenAI's API to streamline repetitive tasks. Features natural language processing and machine learning capabilities.",
      tags: ['OpenAI', 'Python', 'Automation', 'AI'],
      stack: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Docker'],
      image: '/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png',
      github: '#',
      demo: '#',
      features: [
        'Natural language task processing',
        'Automated workflow generation',
        'Machine learning model integration',
        'Real-time API monitoring'
      ],
      challenges: [
        'Optimizing API call efficiency',
        'Handling large-scale data processing',
        'Implementing robust error handling for AI responses'
      ]
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 hero-title">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise through diverse projects
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <SectionReveal 
                key={index} 
                animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                delay={index * 150}
              >
                <GlassCard
                  className="group overflow-hidden card-3d backdrop-noise relative perspective"
                  hover={true}
                >
                  {/* Enhanced image with 3D effects */}
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                    
                    {/* Floating tech badges with enhanced styling */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-ultra-blur text-primary rounded-full border border-primary/30 shadow-glow"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project status indicator */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center space-x-2 bg-background/90 backdrop-ultra-blur px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-primary">Featured</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-2xl" />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MagneticButton variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </MagneticButton>
                          <MagneticButton variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </MagneticButton>
                        </div>
                        
                        <ProjectModal project={project}>
                          <MagneticButton 
                            variant="default" 
                            size="sm"
                            className="group bg-primary hover:bg-primary/90 shadow-card hover:shadow-glow transition-all duration-500"
                          >
                            <Eye className="h-4 w-4 mr-1 transition-transform duration-300 group-hover:scale-110" />
                            Details
                          </MagneticButton>
                        </ProjectModal>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}