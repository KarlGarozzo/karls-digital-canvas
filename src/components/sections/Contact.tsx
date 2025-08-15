import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Copy, ExternalLink, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ContactItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
  copyValue?: string
}

interface ParallaxBlob {
  id: string
  x: number
  y: number
  scale: number
  color: string
  blur: number
}

export function Contact() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [parallaxBlobs, setParallaxBlobs] = useState<ParallaxBlob[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const contactItems: ContactItem[] = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karl.anthony.garozzo@gmail.com',
      href: 'mailto:karl.anthony.garozzo@gmail.com',
      copyValue: 'karl.anthony.garozzo@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+33 6 12 34 56 78',
      href: 'tel:+33612345678',
      copyValue: '+33612345678'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Paris, France',
      copyValue: 'Paris, France'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Karl-Anthony Garozzo',
      href: 'https://www.linkedin.com/in/karl-anthony-garozzo-278728301/',
      copyValue: 'https://www.linkedin.com/in/karl-anthony-garozzo-278728301/'
    }
  ]

  // Initialize parallax blobs
  useEffect(() => {
    const blobs: ParallaxBlob[] = [
      {
        id: 'blob1',
        x: 20,
        y: 30,
        scale: 1.2,
        color: 'hsl(230 65% 35% / 0.1)',
        blur: 60
      },
      {
        id: 'blob2',
        x: 80,
        y: 70,
        scale: 0.8,
        color: 'hsl(235 70% 45% / 0.15)',
        blur: 80
      },
      {
        id: 'blob3',
        x: 50,
        y: 10,
        scale: 1.0,
        color: 'hsl(189 100% 60% / 0.08)',
        blur: 100
      }
    ]
    setParallaxBlobs(blobs)
  }, [])

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // 3D tilt effect
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / centerY * -6
      const rotateY = (x - centerX) / centerX * 6

      setMousePosition({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
      setIsHovered(false)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      card.addEventListener('mouseenter', handleMouseEnter)

      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
        card.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [prefersReducedMotion])

  // Parallax scroll effect
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate if section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight)
        
        setParallaxBlobs(prevBlobs => 
          prevBlobs.map(blob => ({
            ...blob,
            y: blob.y + scrollProgress * 10 * (blob.id === 'blob2' ? -1 : 1)
          }))
        )
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prefersReducedMotion])

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      
      // Confetti effect
      if (!prefersReducedMotion) {
        const confetti = document.createElement('div')
        confetti.className = 'fixed pointer-events-none z-50'
        confetti.style.left = '50%'
        confetti.style.top = '50%'
        confetti.innerHTML = '✨'
        confetti.style.animation = 'ping 0.5s ease-out'
        document.body.appendChild(confetti)
        setTimeout(() => document.body.removeChild(confetti), 500)
      }

      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      })
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy manually",
        variant: "destructive"
      })
    }
  }

  const copyAllContacts = async () => {
    const allContacts = contactItems
      .filter(item => item.copyValue)
      .map(item => `${item.label}: ${item.copyValue}`)
      .join('\n')
    
    await copyToClipboard(allContacts, 'All contacts')
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {parallaxBlobs.map(blob => (
          <div
            key={blob.id}
            className="absolute rounded-full opacity-60 transition-all duration-1000 ease-out"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${200 * blob.scale}px`,
              height: `${200 * blob.scale}px`,
              background: blob.color,
              filter: `blur(${blob.blur}px)`,
              transform: prefersReducedMotion ? 'none' : `scale(${blob.scale})`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-delay-100">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground animate-delay-200">
              Reach me directly — no forms, just fast contact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <div 
              ref={cardRef}
              className={cn(
                "relative group transition-all duration-500 ease-out",
                "backdrop-blur-2xl bg-gradient-to-br from-card/80 to-card/40",
                "border border-border/50 rounded-2xl p-8 shadow-card",
                !prefersReducedMotion && "perspective-1000",
                isHovered && !prefersReducedMotion && "shadow-floating"
              )}
              style={
                !prefersReducedMotion
                  ? {
                      transform: `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
                      transformStyle: 'preserve-3d'
                    }
                  : undefined
              }
            >
              {/* Ambient glow */}
              <div 
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
                  "bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10",
                  isHovered && "opacity-100"
                )}
              />

              {/* Contact Items */}
              <div className="space-y-6 relative z-10">
                {contactItems.map((item, index) => (
                  <div
                    key={item.label}
                    className={cn(
                      "group/item flex items-center space-x-4 p-4 rounded-xl",
                      "transition-all duration-300 hover:bg-background/50",
                      "hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1",
                      "border border-transparent hover:border-border/30",
                      !prefersReducedMotion && `animate-slide-in-right animate-delay-${(index + 1) * 100}`
                    )}
                  >
                    {/* Icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      "bg-gradient-primary shadow-lg transition-all duration-300",
                      "group-hover/item:scale-110 group-hover/item:rotate-12"
                    )}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground truncate">
                        {item.value}
                      </p>
                      
                      {/* Animated underline */}
                      <div className="h-0.5 bg-gradient-primary w-0 group-hover/item:w-full transition-all duration-300 mt-1" />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {item.href && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 hover:bg-primary/10"
                          asChild
                        >
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={`Open ${item.label}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      
                      {item.copyValue && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 hover:bg-accent/10"
                          onClick={() => copyToClipboard(item.copyValue!, item.label)}
                          aria-label={`Copy ${item.label}`}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className={cn(
              "backdrop-blur-2xl bg-gradient-to-br from-card/80 to-card/40",
              "border border-border/50 rounded-2xl p-8 shadow-card",
              "space-y-6 animate-scale-in animate-delay-300"
            )}>
              <div className="text-center">
                <Sparkles className="h-8 w-8 text-accent mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Quick Actions
                </h3>
                <p className="text-muted-foreground">
                  Get in touch with one click
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Me Button */}
                <Button
                  className={cn(
                    "w-full group relative overflow-hidden",
                    "bg-gradient-primary hover:shadow-glow",
                    "transition-all duration-500 hover:scale-[1.02]",
                    !prefersReducedMotion && "magnetic"
                  )}
                  asChild
                >
                  <a href="mailto:karl.anthony.garozzo@gmail.com">
                    <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Email Me
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>

                {/* Call Me Button */}
                <Button
                  variant="outline"
                  className={cn(
                    "w-full group relative overflow-hidden",
                    "border-primary/30 hover:border-primary",
                    "hover:bg-primary/5 transition-all duration-500",
                    "hover:scale-[1.02]",
                    !prefersReducedMotion && "magnetic"
                  )}
                  asChild
                >
                  <a href="tel:+33612345678">
                    <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Call Me
                  </a>
                </Button>

                {/* LinkedIn Button */}
                <Button
                  variant="outline"
                  className={cn(
                    "w-full group relative overflow-hidden",
                    "border-accent/30 hover:border-accent",
                    "hover:bg-accent/5 transition-all duration-500",
                    "hover:scale-[1.02]",
                    !prefersReducedMotion && "magnetic"
                  )}
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/karl-anthony-garozzo-278728301/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>

                {/* Copy All Contacts - Magnetic Button */}
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full group relative overflow-hidden",
                    "border border-dashed border-muted-foreground/30",
                    "hover:border-solid hover:border-accent",
                    "hover:bg-accent/5 transition-all duration-500",
                    "hover:scale-[1.02]",
                    !prefersReducedMotion && "magnetic"
                  )}
                  onClick={copyAllContacts}
                >
                  <Copy className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Copy All Contacts
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}