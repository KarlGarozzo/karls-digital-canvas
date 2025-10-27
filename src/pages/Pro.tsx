import { Button } from '@/components/ui/button'
import { Download, FileText, Home, Linkedin, Mail, Globe, ArrowRight, Sparkles, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AnimatedText } from '@/components/AnimatedText'
import { FloatingParticles } from '@/components/FloatingParticles'
import { useTheme } from '@/components/ThemeProvider'
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
    excerpt: "Karl-Anthony showed outstanding motivation, adaptability, and professionalism throughout his internship.",
    fullText: "Karl-Anthony demonstrated exceptional technical skills and a remarkable ability to learn quickly. His proactive approach and creative problem-solving made him an invaluable team member.",
    pdfUrl: "#"
  },
  {
    id: 2,
    name: "Isabelle",
    company: "FDG Group",
    excerpt: "He's proactive, curious, and always looking for ways to improve processes using technology.",
    fullText: "Working with Karl-Anthony was a pleasure. His enthusiasm for innovation and his ability to bridge the gap between technical and business needs is impressive.",
    pdfUrl: "#"
  },
  {
    id: 3,
    name: "Academic Reference",
    company: "EFREI Paris",
    excerpt: "A creative student with strong technical understanding and exceptional team spirit.",
    fullText: "Karl-Anthony consistently demonstrates academic excellence combined with practical application. His leadership in group projects and mentoring of peers sets him apart.",
    pdfUrl: "#"
  }
]

export default function Pro() {
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [selectedRecommendation, setSelectedRecommendation] = useState<typeof recommendations[0] | null>(null)
  const { theme, setTheme } = useTheme()
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / 25)
    mouseY.set((e.clientY - centerY) / 25)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, hsl(var(--primary) / 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Theme toggle */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 right-6 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full bg-glass-bg backdrop-blur-md border-glass-border hover:bg-accent/20 shadow-card hover:shadow-glow transition-all duration-500"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </motion.div>

      {/* Back to portfolio floating button */}
      <Link to="/" className="fixed top-6 left-6 z-50 group">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-glass-bg backdrop-blur-md border-glass-border hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-glow transition-all duration-500"
          >
            <Home className="h-5 w-5" />
          </Button>
        </motion.div>
      </Link>

      <div className="container max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Karl-Anthony Garozzo"
            className="text-5xl md:text-7xl font-display font-bold mb-4 gradient-text"
            delay={0.2}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/80 font-medium mb-6"
          >
            Engineering Student – Innovator in AI & Technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 shadow-glow backdrop-blur-sm"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
            />
            <span className="text-sm font-semibold text-foreground">Available for Work</span>
          </motion.div>
        </div>

        {/* Central Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x, y }}
          className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-3xl shadow-glass hover:shadow-glow transition-all duration-700 p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Profile photo with rotating gradient ring */}
            <div className="flex justify-center mb-8">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Rotating gradient ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-75 blur-md"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    rotate: 360
                  }}
                  transition={{
                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                />
                
                {/* Photo */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img
                    src="/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png"
                    alt="Karl-Anthony Garozzo"
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-background shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="text-center text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Passionate about creating intelligent digital systems that merge design, AI, and engineering. 
              Combining technical depth with creativity to build modern, human-centered solutions.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-card hover:shadow-glow transition-all duration-500 group px-8"
                >
                  <Download className="w-5 h-5 transition-all duration-300 group-hover:translate-y-0.5" />
                  <span>Download CV</span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowRecommendations(true)}
                  className="w-full sm:w-auto bg-glass-bg backdrop-blur-sm border-primary/30 hover:bg-accent/20 hover:border-accent/30 shadow-card hover:shadow-glow transition-all duration-500 group px-8"
                >
                  <FileText className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" />
                  <span>View Recommendations</span>
                </Button>
              </motion.div>

              <Link to="/" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="glass"
                    size="lg"
                    className="w-full shadow-card hover:shadow-glow transition-all duration-500 group px-8"
                  >
                    <span>Visit Full Portfolio</span>
                    <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Recommendations Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 gradient-text flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8" />
              Recommendations & Testimonials
            </h2>
            <p className="text-muted-foreground text-lg">What people say about working with me</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.8 + index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  y: -12,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass hover:shadow-glow transition-all duration-500 cursor-pointer group relative overflow-hidden"
                onClick={() => {
                  setSelectedRecommendation(rec)
                  setShowRecommendations(true)
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-card">
                      {rec.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {rec.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{rec.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                    "{rec.excerpt}"
                  </p>
                  
                  <div className="flex items-center text-sm text-primary font-medium group-hover:text-accent transition-colors">
                    <span>View Full Letter</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/karl-anthony-garozzo-278728301/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-300 text-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="mailto:karl.anthony.garozzo@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-300 text-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://karl-anthony-garozzo.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-300 text-foreground hover:text-primary"
            >
              <Globe className="w-5 h-5" />
            </motion.a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Karl-Anthony Garozzo — Crafted with passion and precision.
          </p>
        </motion.div>
      </div>

      {/* Recommendations Modal */}
      <Dialog open={showRecommendations} onOpenChange={(open) => {
        setShowRecommendations(open)
        if (!open) setSelectedRecommendation(null)
      }}>
        <DialogContent className="sm:max-w-2xl bg-glass-bg backdrop-blur-xl border-glass-border">
          <DialogHeader>
            <DialogTitle className="gradient-text flex items-center gap-2 text-2xl">
              <Sparkles className="w-6 h-6" />
              {selectedRecommendation ? selectedRecommendation.name : 'Recommendation Letters'}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedRecommendation 
                ? `${selectedRecommendation.company}` 
                : 'Professional recommendations and testimonials'}
            </DialogDescription>
          </DialogHeader>
          
          {selectedRecommendation ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-4"
            >
              <div className="bg-muted/30 rounded-xl p-6 mb-6 border border-glass-border">
                <p className="text-foreground/90 leading-relaxed mb-4 text-lg italic">
                  "{selectedRecommendation.fullText}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {selectedRecommendation.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{selectedRecommendation.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedRecommendation.company}</p>
                  </div>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download Full Letter
              </Button>
            </motion.div>
          ) : (
            <div className="grid gap-3 py-4">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 group h-auto py-4 bg-glass-bg/50"
                    onClick={() => setSelectedRecommendation(rec)}
                  >
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-card flex-shrink-0">
                        {rec.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-base">{rec.name}</p>
                        <p className="text-sm text-muted-foreground">{rec.company}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
