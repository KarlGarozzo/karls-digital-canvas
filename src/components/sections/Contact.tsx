import { useState } from 'react'
import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Linkedin, Send } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:karl.anthony.garozzo@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      karl.anthony.garozzo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">{t('contact.location')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/karl-anthony-garozzo-278728301/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      Karl-Anthony Garozzo
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Contact Form */}
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-glass-bg border-glass-border"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-glass-bg border-glass-border"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.message')}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-glass-bg border-glass-border min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-500"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {t('contact.send')}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}