import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, X } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'

interface Project {
  title: string
  description: string
  longDescription?: string
  tags: string[]
  image: string
  github?: string
  demo?: string
  features?: string[]
  stack?: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card-enhanced max-w-4xl max-h-[90vh] overflow-hidden p-0 border-glass-border bg-glass-bg/95 backdrop-blur-3xl">
        {/* Header */}
        <DialogHeader className="relative p-6 pb-0">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full hover:bg-glass-bg/50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <DialogTitle className="text-2xl font-display font-bold gradient-text pr-12">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] no-scrollbar">
          {/* Project Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          <div className="p-6 space-y-6">
            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {project.stack && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="glass-effect">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-accent/30 text-accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              {project.github && (
                <MagneticButton 
                  variant="outline" 
                  className="group flex-1"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  View Code
                </MagneticButton>
              )}
              {project.demo && (
                <MagneticButton 
                  variant="default" 
                  className="group flex-1 bg-gradient-primary"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  Live Demo
                </MagneticButton>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}