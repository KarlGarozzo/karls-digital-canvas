import { Button } from '@/components/ui/button'
import { Menu, X, Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { MagneticButton } from '@/components/MagneticButton'

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-card border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* KG Signature */}
            <div className="font-signature text-3xl font-semibold text-primary tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer"
                 onClick={() => scrollToSection('#hero')}>
              KG
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <MagneticButton
                  key={index}
                  variant="ghost"
                  className="text-sm font-medium transition-colors hover:text-accent relative group"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </MagneticButton>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="hidden md:flex items-center space-x-1 bg-secondary/50 rounded-full p-1">
                {languages.map((lang) => (
                  <MagneticButton
                    key={lang.code}
                    variant={language === lang.code ? 'default' : 'ghost'}
                    size="sm"
                    className={`text-xs px-3 py-2 rounded-full transition-all ${
                      language === lang.code 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'hover:bg-primary/10'
                    }`}
                    onClick={() => setLanguage(lang.code)}
                  >
                    {lang.flag}
                  </MagneticButton>
                ))}
              </div>
              
              {/* Download CV */}
              <MagneticButton 
                variant="outline" 
                size="sm" 
                className="group hidden md:inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/20 hover:border-primary hover:shadow-glow relative"
              >
                <Download className="w-4 h-4 mr-2 transition-all duration-300 group-hover:translate-x-0.5" />
                <span className="text-sm font-medium">{t('hero.cv')}</span>
              </MagneticButton>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <MagneticButton
                variant="ghost"
                size="sm"
                className="md:hidden"
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
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
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
          <div className="flex items-center space-x-3 py-4">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={language === lang.code ? 'default' : 'outline'}
                size="sm"
                className="text-sm"
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
              >
                {lang.flag} {lang.name}
              </Button>
            ))}
          </div>
          
          {/* Mobile CV Download */}
          <MagneticButton 
            variant="default" 
            className="group mt-4 inline-flex items-center justify-center px-6 py-3"
          >
            <Download className="w-4 h-4 mr-2 transition-all duration-300 group-hover:translate-x-0.5" />
            <span>{t('hero.cv')}</span>
          </MagneticButton>
        </div>
      </nav>
    </>
  )
}