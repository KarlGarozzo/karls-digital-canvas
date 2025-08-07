import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/MagneticButton'
import { useLanguage } from '@/components/LanguageProvider'
import { Globe, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const languages = [
  { code: 'en' as const, flag: '🇬🇧', name: 'English' },
  { code: 'fr' as const, flag: '🇫🇷', name: 'Français' },
  { code: 'pl' as const, flag: '🇵🇱', name: 'Polski' },
]

interface LanguageSwitcherProps {
  variant?: 'compact' | 'full'
  className?: string
}

export function LanguageSwitcher({ variant = 'full', className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === language)

  if (variant === 'compact') {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <MagneticButton
            variant="ghost"
            size="sm"
            className={`glass-effect border-glass-border hover:border-accent transition-all duration-300 ${className}`}
          >
            <Globe className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">{currentLanguage?.name}</span>
            <span className="sm:hidden">{currentLanguage?.flag}</span>
            <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </MagneticButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="glass-card-enhanced border-glass-border min-w-[160px]"
        >
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`flex items-center gap-3 cursor-pointer transition-colors duration-200 ${
                language === lang.code 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'hover:bg-glass-bg/50'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <div className={`flex items-center gap-1 glass-effect rounded-full p-1 ${className}`}>
      {languages.map((lang) => (
        <MagneticButton
          key={lang.code}
          variant={language === lang.code ? 'default' : 'ghost'}
          size="sm"
          className={`rounded-full transition-all duration-300 ${
            language === lang.code 
              ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
              : 'hover:bg-glass-bg/50'
          }`}
          onClick={() => setLanguage(lang.code)}
        >
          <span className="text-sm">{lang.flag}</span>
        </MagneticButton>
      ))}
    </div>
  )
}