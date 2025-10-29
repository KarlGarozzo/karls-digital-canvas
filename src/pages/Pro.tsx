import { Button } from '@/components/ui/button'
import { Download, FileText, Linkedin, Mail, ExternalLink, Sparkles, TrendingUp, Users, Lightbulb, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MagneticButton } from '@/components/MagneticButton'
import { useState, useEffect, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ParticleSystem } from '@/components/ParticleSystem'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

const recommendations = [
  {
    name: "Luc De Smet",
    role: "FDG Group",
    text: "Karl-Anthony demonstrated exceptional motivation and professionalism throughout his internship. His ability to quickly adapt and learn new technologies is remarkable.",
    flag: "🇫🇷"
  },
  {
    name: "Isabelle",
    role: "FDG Group",
    text: "He's proactive, curious, and always looking for ways to improve processes using technology. A valuable team member with great potential.",
    flag: "🇫🇷"
  },
  {
    name: "Academic Reference",
    role: "EFREI Paris",
    text: "A creative student with strong technical understanding and exceptional team spirit. Karl-Anthony consistently delivers high-quality work.",
    flag: "🇬🇧"
  }
]

const personalityTags = [
  { icon: TrendingUp, label: "Analytical", color: "from-blue-500 to-cyan-500" },
  { icon: Sparkles, label: "Innovator", color: "from-purple-500 to-pink-500" },
  { icon: Lightbulb, label: "Problem Solver", color: "from-orange-500 to-red-500" },
  { icon: Users, label: "Team Player", color: "from-green-500 to-teal-500" }
]

export default function Pro() {
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // 3D card tilt effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleCardMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/10 -z-10" />
      
      {/* Animated wave overlay */}
      <div 
        className="fixed inset-0 opacity-30 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />

      {/* Particle system */}
      <div className="fixed inset-0 -z-10">
        <ParticleSystem />
      </div>

      {/* Floating buttons */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <Link to="/" className="fixed bottom-6 right-6 z-50 group">
        <Button size="lg" className="rounded-full shadow-glow hover:shadow-intense transition-all duration-500 animate-bounce-gentle bg-primary hover:bg-primary/90">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Portfolio</span>
        </Button>
      </Link>

      <div className="container max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 gradient-text text-glow animate-fade-in">
              Karl-Anthony Garozzo
            </h1>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Engineering Student – Innovator in AI & Technology
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 animate-glow-pulse">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Available for Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main 3D Card */}
        <div 
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          className="glass-card p-8 md:p-12 mb-12 transition-all duration-300 animate-scale-in"
          style={{ animationDelay: '0.3s', transformStyle: 'preserve-3d' }}
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            {/* Profile Photo with Glowing Aura */}
            <div className="relative group flex-shrink-0">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow" style={{
                background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                padding: '4px',
                filter: 'blur(8px)',
                opacity: 0.6
              }} />
              
              {/* Pulsating glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 group-hover:opacity-70 animate-glow-pulse" />
              
              {/* Profile image */}
              <div className="relative">
                <img
                  src="/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png"
                  alt="Karl-Anthony Garozzo"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-intense group-hover:scale-105 transition-all duration-700 animate-float"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
                Passionate about creating intelligent digital systems that merge design, AI, and engineering. 
                Combining technical depth with creativity to build modern, human-centered solutions.
              </p>
              
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Lightbulb className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Passionate about AI & automation</span>
              </div>
            </div>
          </div>

          {/* Magnetic Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" style={{ animationDelay: '1s' }}>
            <MagneticButton
              variant="default"
              size="lg"
              magnetism={0.4}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-500 group"
            >
              <Download className="w-5 h-5 transition-all duration-300 group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </MagneticButton>

            <MagneticButton
              variant="outline"
              size="lg"
              magnetism={0.4}
              onClick={() => setShowRecommendations(true)}
              className="w-full sm:w-auto backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-500 group"
            >
              <FileText className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" />
              <span>View Recommendations</span>
            </MagneticButton>

            <Link to="/" className="w-full sm:w-auto">
              <MagneticButton
                variant="outline"
                size="lg"
                magnetism={0.4}
                className="w-full backdrop-blur-sm border-accent/30 hover:bg-accent/10 hover:border-accent/50 shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <ExternalLink className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span>Visit Full Portfolio</span>
              </MagneticButton>
            </Link>
          </div>

          {/* Personality Tags */}
          <div className="border-t border-glass-border pt-8 mb-8">
            <h3 className="text-center text-sm font-medium text-muted-foreground mb-4">Key Strengths</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {personalityTags.map((tag, index) => {
                const Icon = tag.icon
                return (
                  <div
                    key={tag.label}
                    className={cn(
                      "group relative px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm",
                      "hover:scale-110 transition-all duration-300 cursor-default",
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <div className={cn(
                      "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md",
                      `bg-gradient-to-r ${tag.color}`
                    )} />
                    <div className="relative flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">#{tag.label}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="border-t border-glass-border pt-8">
            <p className="text-center text-sm text-muted-foreground mb-4 animate-pulse">
              💬 Let's connect
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/karl-anthony-garozzo-278728301/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Connect on LinkedIn
                </div>
              </a>

              <a
                href="mailto:karl.anthony.garozzo@gmail.com"
                className="group relative flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-4 group-hover:underline">Email</span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Send an email
                </div>
              </a>

              <a
                href="https://karl-anthony-garozzo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-4 group-hover:underline">Website</span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover border border-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Visit my website
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Recommendations Preview Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-display font-bold text-center mb-8 gradient-text">
            Recommendations & Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:scale-105 hover:shadow-glow transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                onClick={() => setShowRecommendations(true)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{rec.name}</h3>
                    <p className="text-sm text-muted-foreground">{rec.role}</p>
                  </div>
                  <span className="text-2xl">{rec.flag}</span>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  "{rec.text}"
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>View Full Letter</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-sm text-muted-foreground">
            © 2025 Karl-Anthony Garozzo — Crafted with passion and precision.
          </p>
        </div>
      </div>

      {/* Enhanced Recommendations Modal */}
      <Dialog open={showRecommendations} onOpenChange={setShowRecommendations}>
        <DialogContent className="sm:max-w-2xl glass-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">Recommendation Letters</DialogTitle>
            <DialogDescription className="text-base">
              Professional recommendations from internships and academic supervisors
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-6">
            {recommendations.map((rec, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group p-6 h-auto"
              >
                <div className="flex items-start gap-4 w-full">
                  <FileText className="w-5 h-5 mt-1 group-hover:rotate-12 transition-transform flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{rec.name}</span>
                      <span className="text-sm text-muted-foreground">— {rec.role}</span>
                      <span className="ml-auto">{rec.flag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {rec.text.substring(0, 80)}...
                    </p>
                  </div>
                  <Download className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform flex-shrink-0" />
                </div>
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
