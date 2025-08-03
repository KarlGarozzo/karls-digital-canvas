import { GlassCard } from '@/components/GlassCard'
import { useLanguage } from '@/components/LanguageProvider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>

          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.bio')}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🇫🇷</span>
                    <span className="text-sm text-muted-foreground">Français</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🇵🇱</span>
                    <span className="text-sm text-muted-foreground">Polski</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🇬🇧</span>
                    <span className="text-sm text-muted-foreground">English</span>
                  </div>
                </div>

                <blockquote className="text-xl font-display font-semibold text-accent italic">
                  "{t('about.tagline')}"
                </blockquote>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-glow-pulse" />
                <img
                  src="/lovable-uploads/41ba9abd-e8fa-4aa0-8817-8693645e512b.png"
                  alt="Karl-Anthony Garozzo"
                  className="relative w-full max-w-sm mx-auto rounded-2xl shadow-card hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}