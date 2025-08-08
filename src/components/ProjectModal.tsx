import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, X } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassCard } from '@/components/GlassCard'

interface ProjectModalProps {
  project: {
    title: string
    description: string
    fullDescription?: string
    tags: string[]
    image: string
    github: string
    demo: string
    features?: string[]
    challenges?: string[]
    stack?: string[]
  }
  children: React.ReactNode
}

export function ProjectModal({ project, children }: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-background/95 backdrop-ultra-blur border-primary/20">
        <div className="relative">
          {/* Project Image Header */}
          <div className="relative h-64 overflow-hidden rounded-t-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-3xl font-display font-bold text-foreground mb-2 hero-title">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <ScrollArea className="max-h-[60vh] p-6">
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Technology Stack */}
              {project.stack && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.features && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Challenges & Solutions</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                <Button className="flex-1 group bg-primary hover:bg-primary/90">
                  <Github className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  View Code
                </Button>
                <Button variant="outline" className="flex-1 group hover:bg-accent hover:text-accent-foreground">
                  <ExternalLink className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  Live Demo
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}