import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <GlassCard className="p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Left - CV Download */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-glass-bg border-glass-border hover:bg-accent/20 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                {t('footer.cv')}
              </Button>
            </div>

            {/* Center - Copyright */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {t('footer.designed')}
              </p>
            </div>

            {/* Right - Social Links */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-accent/20 transition-colors">
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover:bg-accent/20 transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/karl-anthony-garozzo-278728301/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </GlassCard>

        {/* Floating decoration */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-primary rounded-full opacity-50" />
      </div>
    </footer>
  )
}