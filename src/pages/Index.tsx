import { useEffect } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/components/LanguageProvider'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

const Index = () => {
  useEffect(() => {
    // Set default dark theme on load
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
          {/* Background Elements */}
          <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-midnight/20 pointer-events-none" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--cyan-glow)_0%,_transparent_50%)] opacity-[0.03] pointer-events-none" />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-10">
            <Hero />
            <About />
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
