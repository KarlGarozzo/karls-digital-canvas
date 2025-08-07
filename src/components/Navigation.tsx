import { Button } from '@/components/ui/button'
import { Menu, X, Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { MagneticButton } from '@/components/MagneticButton'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const languages = [
    { code: 'en' as const, flag: '🇬🇧', name: 'English' },
    { code: 'fr' as const, flag: '🇫🇷', name: 'Français' },
    { code: 'pl' as const, flag: '🇵🇱', name: 'Polski' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'glass-effect border-b border-glass-border shadow-elevated backdrop-blur-3xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* KG Signature */}
            <div 
              className="font-signature text-3xl font-semibold gradient-text tracking-wide hover:scale-105 transition-all duration-500 cursor-pointer hover:text-shadow-glow"
              onClick={() => scrollToSection('#hero')}
            >
              KG
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <MagneticButton
                  key={index}
                  variant="ghost"
                  className="text-sm font-medium transition-all duration-300 hover:text-accent relative group hover:bg-glass-bg/30 rounded-lg"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-3/4 group-hover:left-1/8 transition-all duration-500" />
                </MagneticButton>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="hidden md:block">
                <LanguageSwitcher variant="compact" />
              </div>
              
              {/* Download CV */}
              <MagneticButton 
                variant="outline" 
                size="sm" 
                className="group hidden md:inline-flex items-center justify-center glass-effect border-glass-border hover:border-accent hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-500 hover:shadow-glow relative"
              >
                <Download className="w-4 h-4 mr-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
                <span className="text-sm font-medium">{t('hero.cv')}</span>
              </MagneticButton>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <MagneticButton
                variant="ghost"
                size="sm"
                className="md:hidden glass-effect border-glass-border hover:border-accent transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </MagneticButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 glass-effect backdrop-blur-3xl" />
        <div className="relative h-full flex flex-col justify-center items-center space-y-8">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="block text-lg font-medium text-center w-full"
                onClick={() => {
                  scrollToSection(item.href)
                  setIsOpen(false)
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          {/* Mobile Language Switcher */}
          <div className="flex justify-center py-4">
            <LanguageSwitcher variant="full" className="scale-110" />
          </div>
          
          {/* Mobile CV Download */}
          <MagneticButton 
            variant="default" 
            className="group mt-4 inline-flex items-center justify-center px-6 py-3 bg-gradient-primary hover:shadow-glow"
          >
            <Download className="w-4 h-4 mr-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
            <span>{t('hero.cv')}</span>
          </MagneticButton>
        </div>
      </nav>
    </>
  )
}