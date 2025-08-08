import { useEffect } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'
import { Navigation } from '@/components/Navigation'
import { ParticleSystem } from '@/components/ParticleSystem'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { FloatingButtons } from '@/components/FloatingButtons'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Education } from '@/components/sections/Education'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

const Index = () => {
  useEffect(() => {
    // Set default light theme on load
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden relative">
          {/* Enhanced Background Elements */}
          <AnimatedBackground />
          <ParticleSystem />
          
          {/* Advanced background gradients */}
          <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-midnight/20 pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--cyan-glow)_0%,_transparent_50%)] opacity-[0.03] pointer-events-none" />
          <div className="fixed inset-0 backdrop-noise pointer-events-none" />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Floating Action Buttons */}
          <FloatingButtons />
          
          {/* Main Content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Education />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default Index
