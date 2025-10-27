import { Button } from '@/components/ui/button'
import { Download, FileText, Home, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionReveal } from '@/components/SectionReveal'
import { MagneticButton } from '@/components/MagneticButton'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const recommendations = [
  {
    id: 1,
    name: "Luc De Smet",
    company: "FDG Group",
    excerpt: "Karl-Anthony demonstrated exceptional motivation and professionalism throughout his time with us. His analytical skills and creativity are remarkable.",
    pdfUrl: "#"
  },
  {
    id: 2,
    name: "Professor Marie Durant",
    company: "Engineering School",
    excerpt: "A standout student with natural leadership abilities and a deep passion for innovation. Karl consistently exceeds expectations.",
    pdfUrl: "#"
  },
  {
    id: 3,
    name: "Thomas Bernier",
    company: "Tech Startup",
    excerpt: "Karl's ability to blend technical expertise with creative problem-solving made him an invaluable asset to our team.",
    pdfUrl: "#"
  }
]

export default function Pro() {
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState<typeof recommendations[0] | null>(null)

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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text text-glow"
            >
              Karl-Anthony Garozzo
            </motion.h1>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <p className="text-lg md:text-xl text-foreground/80 font-medium">
                Engineering Student
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent border border-primary/30 shadow-glow animate-glow-pulse"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400"
                />
                <span className="text-sm font-semibold text-primary-foreground">Available for Work</span>
              </motion.div>
            </div>
          </div>
        </SectionReveal>

        {/* Main card */}
        <SectionReveal animation="scaleIn" delay={200}>
          <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl shadow-glass hover:shadow-glow transition-all duration-500 p-8 md:p-12 mb-8">
            {/* Profile section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
              {/* Profile photo */}
              <motion.div 
                className="relative group flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-2xl opacity-40"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png"
                    alt="Karl-Anthony Garozzo"
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-glow ring-2 ring-accent/20 ring-offset-4 ring-offset-background"
                  />
                </motion.div>
              </motion.div>

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
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-card hover:shadow-glow transition-all duration-500 group"
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
                  <span>Visit Full Portfolio</span>
                  <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
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

        {/* Recommendation Highlights */}
        <SectionReveal animation="fadeInUp" delay={300}>
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 gradient-text">
                Recommendation Highlights
              </h2>
              <p className="text-muted-foreground">What people say about working with me</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow transition-all duration-500 cursor-pointer group"
                  onClick={() => {
                    setSelectedRecommendation(rec)
                    setShowRecommendations(true)
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shadow-card">
                      {rec.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {rec.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{rec.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                    "{rec.excerpt}"
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-accent/20 transition-all"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Read Full Letter
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ))}
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
      <Dialog open={showRecommendations} onOpenChange={(open) => {
        setShowRecommendations(open)
        if (!open) setSelectedRecommendation(null)
      }}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="gradient-text flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {selectedRecommendation ? selectedRecommendation.name : 'Recommendation Letters'}
            </DialogTitle>
            <DialogDescription>
              {selectedRecommendation 
                ? `${selectedRecommendation.company}` 
                : 'Download my professional recommendation letters'}
            </DialogDescription>
          </DialogHeader>
          
          {selectedRecommendation ? (
            <div className="py-4">
              <div className="bg-muted/50 rounded-lg p-6 mb-4">
                <p className="text-foreground/90 leading-relaxed italic mb-4">
                  "{selectedRecommendation.excerpt}"
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a preview. Download the full letter to read more.
                </p>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download Full Letter
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 py-4">
              {recommendations.map((rec) => (
                <Button
                  key={rec.id}
                  variant="outline"
                  className="w-full justify-start hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 group h-auto py-4"
                  onClick={() => setSelectedRecommendation(rec)}
                >
                  <div className="flex items-center gap-3 flex-1 text-left">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-card flex-shrink-0">
                      {rec.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">{rec.name}</p>
                      <p className="text-xs text-muted-foreground">{rec.company}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
