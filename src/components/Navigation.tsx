import { useState, useEffect } from 'react'
import { Moon, Sun, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/ThemeProvider'
import { useLanguage } from '@/components/LanguageProvider'
import { GlassCard } from '@/components/GlassCard'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { key: 'about', label: t('nav.about'), id: 'about' },
    { key: 'projects', label: t('nav.projects'), id: 'projects' },
    { key: 'experience', label: t('nav.experience'), id: 'experience' },
    { key: 'skills', label: t('nav.skills'), id: 'skills' },
    { key: 'contact', label: t('nav.contact'), id: 'contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500',
        'w-[95%] max-w-4xl'
      )}
    >
      <GlassCard
        className={cn(
          'px-6 py-3 transition-all duration-500',
          scrolled ? 'backdrop-blur-xl shadow-xl' : 'backdrop-blur-md'
        )}
        hover={false}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            KA
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="hover:bg-accent/20 transition-colors"
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">
                {language === 'fr' ? '🇫🇷' : '🇬🇧'}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-accent/20 transition-colors"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </GlassCard>
    </nav>
  )
}