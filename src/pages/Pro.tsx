import { Button } from '@/components/ui/button'
import { Download, FileText, Home, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionReveal } from '@/components/SectionReveal'
import { MagneticButton } from '@/components/MagneticButton'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Pro() {
  const [showRecommendations, setShowRecommendations] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Back to portfolio floating button */}
      <Link to="/" className="fixed top-6 left-6 z-50 group">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-md border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-500 animate-pulse-slow"
        >
          <Home className="h-5 w-5" />
        </Button>
      </Link>

      <div className="container max-w-4xl mx-auto px-6 py-12 relative z-10">
        <SectionReveal animation="fadeInUp" className="text-center mb-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 gradient-text text-glow">
              Karl-Anthony Garozzo
            </h1>
            <p className="text-lg md:text-xl text-primary font-medium">
              Engineering Student – Available for internships & opportunities
            </p>
          </div>
        </SectionReveal>

        {/* Main card */}
        <SectionReveal animation="scaleIn" delay={200}>
          <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl shadow-glass hover:shadow-glow transition-all duration-500 p-8 md:p-12 mb-8">
            {/* Profile section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
              {/* Profile photo */}
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <img
                  src="/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png"
                  alt="Karl-Anthony Garozzo"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-card group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  Motivated and creative engineering student with strong programming and analytical skills. 
                  Passionate about innovation, automation, and building digital experiences that connect design, 
                  AI, and technology.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <MagneticButton
                variant="default"
                size="lg"
                magnetism={0.3}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <Download className="w-5 h-5 transition-all duration-300 group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </MagneticButton>

              <MagneticButton
                variant="outline"
                size="lg"
                magnetism={0.3}
                onClick={() => setShowRecommendations(true)}
                className="w-full sm:w-auto bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-accent/20 hover:border-accent/30 shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <FileText className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" />
                <span>View Recommendations</span>
              </MagneticButton>

              <Link to="/" className="w-full sm:w-auto">
                <MagneticButton
                  variant="glass"
                  size="lg"
                  magnetism={0.3}
                  className="w-full shadow-card hover:shadow-glow transition-all duration-500 group"
                >
                  <ExternalLink className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span>Visit Full Portfolio</span>
                </MagneticButton>
              </Link>
            </div>

            {/* Contact & Social Links */}
            <div className="border-t border-glass-border pt-8">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/karl-anthony-garozzo-278728301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
                </a>

                <a
                  href="mailto:karl.anthony.garozzo@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-4 group-hover:underline">Email</span>
                </a>

                <a
                  href="https://karl-anthony-garozzo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-4 group-hover:underline">Website</span>
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Footer */}
        <SectionReveal animation="fadeInUp" delay={400}>
          <p className="text-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            © 2025 Karl-Anthony Garozzo — All rights reserved.
          </p>
        </SectionReveal>
      </div>

      {/* Recommendations Modal */}
      <Dialog open={showRecommendations} onOpenChange={setShowRecommendations}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="gradient-text">Recommendation Letters</DialogTitle>
            <DialogDescription>
              Download my professional recommendation letters
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <Button
              variant="outline"
              className="w-full justify-start hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 group"
            >
              <FileText className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              <span className="flex-1 text-left">Recommendation Letter 1</span>
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 group"
            >
              <FileText className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              <span className="flex-1 text-left">Recommendation Letter 2</span>
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
