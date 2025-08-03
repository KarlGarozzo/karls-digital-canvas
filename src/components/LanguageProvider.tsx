import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'fr' | 'en'

interface LanguageProviderProps {
  children: React.ReactNode
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': '👋 Salut, moi c\'est Karl-Anthony Garozzo',
    'hero.subtitle': 'Étudiant ingénieur passionné par le code et la création',
    'hero.cta': 'Découvrir mes projets',
    
    // About
    'about.title': 'À propos de moi',
    'about.bio': 'Étudiant à EFREI Paris en technologies numériques. Passionné par l\'innovation, le développement logiciel, et l\'entrepreneuriat.',
    'about.tagline': 'Create once, impact forever.',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.view': 'Voir le projet',
    'projects.bmp.title': 'Filtre d\'Image BMP',
    'projects.bmp.desc': 'Application de traitement d\'images en C avec interface utilisateur intuitive',
    'projects.logistics.title': 'Outil Logistique',
    'projects.logistics.desc': 'Interface Python + Excel pour la gestion logistique automatisée',
    'projects.portfolio.title': 'Portfolio Responsive',
    'projects.portfolio.desc': 'Site web moderne avec HTML/CSS/JS et animations avancées',
    'projects.ai.title': 'Projets IA',
    'projects.ai.desc': 'Assistants intelligents utilisant OpenAI et automatisation',
    
    // Experience
    'experience.title': 'Mon Parcours',
    'experience.efrei': 'EFREI Paris',
    'experience.efrei.desc': 'École d\'ingénieurs - Technologies numériques',
    'experience.tutor': 'Professeur NSI',
    'experience.tutor.desc': 'Tuteur en Numérique et Sciences Informatiques pour lycéens',
    'experience.animator': 'Animateur-magicien',
    'experience.animator.desc': 'Salut Hola - Animation événements enfants',
    'experience.hotel': 'Stage SLS Hotel Dubai',
    'experience.hotel.desc': 'Expérience internationale en hôtellerie de luxe',
    
    // Skills
    'skills.title': 'Mes Compétences',
    'skills.programming': 'Programmation',
    'skills.tools': 'Outils',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Langues',
    'skills.problem-solving': 'Résolution de problèmes',
    'skills.leadership': 'Leadership',
    'skills.adaptability': 'Adaptabilité',
    
    // Contact
    'contact.title': 'Me Contacter',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.location': 'Paris, France',
    
    // Footer
    'footer.designed': 'Conçu et codé par Karl-Anthony – 2025',
    'footer.cv': 'Télécharger CV',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': '👋 Hi, I\'m Karl-Anthony Garozzo',
    'hero.subtitle': 'Engineering student at EFREI Paris, focused on digital tech and creative software. I love turning ideas into real, useful projects.',
    'hero.cta': 'Explore my work',
    
    // About
    'about.title': 'About Me',
    'about.bio': 'Engineering student at EFREI Paris, focused on digital tech and creative software. I love turning ideas into real, useful projects.',
    'about.tagline': 'Create once, impact forever.',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.view': 'View Project',
    'projects.bmp.title': 'BMP Image Filter App',
    'projects.bmp.desc': 'C-based image processing application with intuitive UI design',
    'projects.logistics.title': 'Logistics Tool',
    'projects.logistics.desc': 'Python + Excel GUI for automated logistics management',
    'projects.portfolio.title': 'Responsive Portfolio',
    'projects.portfolio.desc': 'Modern website built with HTML/CSS/JS and advanced animations',
    'projects.ai.title': 'AI Assistant Projects',
    'projects.ai.desc': 'Intelligent assistants using OpenAI and automation technologies',
    
    // Experience
    'experience.title': 'My Journey',
    'experience.efrei': 'EFREI Paris',
    'experience.efrei.desc': 'Engineering School - Digital Technologies',
    'experience.tutor': 'Computer Science Tutor',
    'experience.tutor.desc': 'NSI tutor for high school students',
    'experience.animator': 'Animator-Magician',
    'experience.animator.desc': 'Salut Hola - Children\'s event entertainment',
    'experience.hotel': 'SLS Hotel Dubai Internship',
    'experience.hotel.desc': 'International experience in luxury hospitality',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.programming': 'Programming',
    'skills.tools': 'Tools',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    'skills.problem-solving': 'Problem-solving',
    'skills.leadership': 'Leadership',
    'skills.adaptability': 'Adaptability',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.location': 'Paris, France',
    
    // Footer
    'footer.designed': 'Designed & coded by Karl-Anthony – 2025',
    'footer.cv': 'Download CV',
  },
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('portfolio-language')
    if (stored) return stored as Language
    
    // Auto-detect user language
    const userLang = navigator.language.split('-')[0]
    return userLang === 'fr' ? 'fr' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  const value = {
    language,
    setLanguage,
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}