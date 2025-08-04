import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'fr' | 'en' | 'pl'

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
    'hero.greeting': 'Karl-Anthony Garozzo',
    'hero.tagline': 'Futur Ingénieur | Technologue Créatif',
    'hero.subtitle': 'Étudiant à EFREI Paris - École d\'ingénieurs en technologies numériques. Passionné par l\'innovation et la création de solutions technologiques.',
    'hero.cta': 'Me Contacter',
    'hero.available': 'Disponible pour stages & opportunités',
    'hero.cv': 'Télécharger CV',
    
    // About
    'about.title': 'À propos',
    'about.bio': 'Étudiant en ingénierie informatique à EFREI Paris, une des meilleures écoles post-bac en France. Avec une expérience internationale à Dubaï et Varsovie, je combine expertise technique et vision créative pour développer des solutions innovantes.',
    'about.tagline': 'Connectons-nous et construisons quelque chose de significatif.',
    
    // Education
    'education.title': 'Formation',
    'education.efrei.title': 'EFREI Paris – École d\'Ingénieurs Numérique',
    'education.efrei.degree': 'Ingénierie Informatique & Technologies Numériques',
    'education.efrei.period': 'Sept. 2024 – Juil. 2029',
    'education.efrei.location': 'Paris, France',
    'education.efrei.desc': 'Top 3 des écoles d\'ingénieurs post-bac en France (2024)',
    'education.lfigp.title': 'Lycée Français International Georges Pompidou',
    'education.lfigp.degree': 'Baccalauréat Français – Spécialités: Maths & NSI',
    'education.lfigp.period': 'Sept. 2021 – Juil. 2024',
    'education.lfigp.location': 'Dubaï, UAE',
    'education.lfigp.desc': 'Diplômé avec mention dans un environnement multiculturel',
    'education.lfv.title': 'Lycée Français de Varsovie',
    'education.lfv.degree': 'Enseignement Secondaire',
    'education.lfv.period': 'Jusqu\'à Juil. 2021',
    'education.lfv.location': 'Varsovie, Pologne',
    'education.lfv.desc': 'Formation française en cadre académique international',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.view': 'Voir',
    'projects.bmp.title': 'Filtre d\'Image BMP',
    'projects.bmp.desc': 'Application de traitement d\'images en C avec interface utilisateur intuitive',
    'projects.logistics.title': 'Outil Logistique FDG',
    'projects.logistics.desc': 'Interface Python + Excel pour la gestion de bases de données et automatisation',
    'projects.portfolio.title': 'Portfolio Moderne',
    'projects.portfolio.desc': 'Site web responsive avec glassmorphisme et animations avancées',
    'projects.ai.title': 'Projets IA & Automatisation',
    'projects.ai.desc': 'Assistants intelligents utilisant OpenAI et technologies d\'automatisation',
    
    // Experience
    'experience.title': 'Expérience',
    'experience.tutor.title': 'Professeur Particulier en Informatique',
    'experience.tutor.company': 'Superprof',
    'experience.tutor.period': 'Oct. 2024 – Présent',
    'experience.tutor.location': 'Paris (Hybride)',
    'experience.tutor.desc': 'Cours personnalisés de NSI pour lycéens, +10 étudiants accompagnés, excellents résultats aux examens',
    'experience.fdg.title': 'Stagiaire Export',
    'experience.fdg.company': 'FDG',
    'experience.fdg.period': 'Été 2025',
    'experience.fdg.location': 'Paris',
    'experience.fdg.desc': 'Gestion de bases de données, documentation export & processus automatisés (Excel/Python)',
    'experience.animator.title': 'Animateur Bénévole',
    'experience.animator.company': 'Salut Hola Language Camp',
    'experience.animator.period': 'Juil. – Août 2023',
    'experience.animator.location': 'Varsovie',
    'experience.animator.desc': 'Création et représentation de spectacles de magie, animation d\'activités multilingues pour 20+ participants',
    'experience.hotel.title': 'Stagiaire d\'Observation',
    'experience.hotel.company': 'SLS Hotel Dubai',
    'experience.hotel.period': 'Mai 2022',
    'experience.hotel.location': 'Dubaï',
    'experience.hotel.desc': 'Service clientèle en hôtellerie de luxe 5 étoiles, aide à la planification d\'événements et logistique',
    
    // Skills
    'skills.title': 'Mes Compétences',
    'skills.programming': 'Programmation',
    'skills.tools': 'Outils',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Langues',
    'skills.problem-solving': 'Résolution de problèmes',
    'skills.leadership': 'Leadership',
    'skills.adaptability': 'Adaptabilité',
    'skills.teamwork': 'Travail d\'équipe',
    
    // Contact
    'contact.title': 'Contact',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.location': 'Paris, France',
    'contact.connect': 'Connectons-nous et construisons quelque chose de significatif.',
    
    // Footer
    'footer.designed': 'Conçu et codé par Karl-Anthony',
    'footer.version': 'v1.0.0 – 2025',
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
    'hero.greeting': 'Karl-Anthony Garozzo',
    'hero.tagline': 'Future Engineer | Creative Technologist',
    'hero.subtitle': 'Computer Science Engineering student at EFREI Paris. With international experience in Dubai and Warsaw, I combine technical expertise and creative vision to build innovative solutions.',
    'hero.cta': 'Contact Me',
    'hero.available': 'Available for internships & opportunities',
    'hero.cv': 'Download CV',
    
    // About
    'about.title': 'About',
    'about.bio': 'Computer Science Engineering student at EFREI Paris, one of France\'s top post-bac engineering schools. With international experience in Dubai and Warsaw, I combine technical expertise and creative vision to develop innovative solutions.',
    'about.tagline': 'Let\'s connect and build something meaningful.',
    
    // Education
    'education.title': 'Education',
    'education.efrei.title': 'EFREI Paris – Digital Engineering School',
    'education.efrei.degree': 'Computer Science & Digital Technologies',
    'education.efrei.period': 'Sept. 2024 – Jul. 2029',
    'education.efrei.location': 'Paris, France',
    'education.efrei.desc': 'Ranked top 3 post-bac engineering school in France (2024)',
    'education.lfigp.title': 'Lycée Français International Georges Pompidou',
    'education.lfigp.degree': 'French Baccalauréat – Specialties: Math & CS (NSI)',
    'education.lfigp.period': 'Sept. 2021 – Jul. 2024',
    'education.lfigp.location': 'Dubai, UAE',
    'education.lfigp.desc': 'Graduated with honors in a multicultural, high-level school',
    'education.lfv.title': 'Lycée Français de Varsovie',
    'education.lfv.degree': 'Secondary School Education',
    'education.lfv.period': 'Until Jul. 2021',
    'education.lfv.location': 'Warsaw, Poland',
    'education.lfv.desc': 'French education in an international academic setting',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.view': 'View',
    'projects.bmp.title': 'BMP Image Filter App',
    'projects.bmp.desc': 'C-based image processing application with intuitive UI design',
    'projects.logistics.title': 'FDG Logistics Tool',
    'projects.logistics.desc': 'Python + Excel interface for database handling and automation',
    'projects.portfolio.title': 'Modern Portfolio',
    'projects.portfolio.desc': 'Responsive website with glassmorphism and advanced animations',
    'projects.ai.title': 'AI & Automation Projects',
    'projects.ai.desc': 'Intelligent assistants using OpenAI and automation technologies',
    
    // Experience
    'experience.title': 'Experience',
    'experience.tutor.title': 'Private Computer Science Tutor',
    'experience.tutor.company': 'Superprof',
    'experience.tutor.period': 'Oct. 2024 – Present',
    'experience.tutor.location': 'Paris (Hybrid)',
    'experience.tutor.desc': 'Tailored NSI lessons for high school students, +10 students supported, excellent exam results',
    'experience.fdg.title': 'Export Intern',
    'experience.fdg.company': 'FDG',
    'experience.fdg.period': 'Summer 2025',
    'experience.fdg.location': 'Paris',
    'experience.fdg.desc': 'Database handling, export documentation & automated processes (Excel/Python)',
    'experience.animator.title': 'Volunteer Animator',
    'experience.animator.company': 'Salut Hola Language Camp',
    'experience.animator.period': 'Jul. – Aug. 2023',
    'experience.animator.location': 'Warsaw',
    'experience.animator.desc': 'Created and performed magic shows, led multilingual activities for 20+ participants',
    'experience.hotel.title': 'Observation Intern',
    'experience.hotel.company': 'SLS Hotel Dubai',
    'experience.hotel.period': 'May 2022',
    'experience.hotel.location': 'Dubai',
    'experience.hotel.desc': 'Guest services in a luxury 5-star hotel, helped with event planning and logistics',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.programming': 'Programming',
    'skills.tools': 'Tools',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    'skills.problem-solving': 'Problem-solving',
    'skills.leadership': 'Leadership',
    'skills.adaptability': 'Adaptability',
    'skills.teamwork': 'Teamwork',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.location': 'Paris, France',
    'contact.connect': 'Let\'s connect and build something meaningful.',
    
    // Footer
    'footer.designed': 'Designed & coded by Karl-Anthony',
    'footer.version': 'v1.0.0 – 2025',
    'footer.cv': 'Download CV',
  },
  pl: {
    // Navigation
    'nav.about': 'O mnie',
    'nav.projects': 'Projekty',
    'nav.experience': 'Doświadczenie',
    'nav.skills': 'Umiejętności',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.greeting': 'Karl-Anthony Garozzo',
    'hero.tagline': 'Przyszły Inżynier | Kreatywny Technolog',
    'hero.subtitle': 'Student informatyki w EFREI Paris. Z międzynarodowym doświadczeniem w Dubaju i Warszawie, łączę wiedzę techniczną z kreatywną wizją, tworząc innowacyjne rozwiązania.',
    'hero.cta': 'Skontaktuj się',
    'hero.available': 'Dostępny do stażów i możliwości',
    'hero.cv': 'Pobierz CV',
    
    // About
    'about.title': 'O mnie',
    'about.bio': 'Student informatyki w EFREI Paris, jednej z najlepszych szkół inżynierskich we Francji. Z międzynarodowym doświadczeniem w Dubaju i Warszawie, łączę wiedzę techniczną z kreatywną wizją.',
    'about.tagline': 'Nawiążmy kontakt i stwórzmy coś znaczącego.',
    
    // Education
    'education.title': 'Wykształcenie',
    'education.efrei.title': 'EFREI Paris – Szkoła Inżynierii Cyfrowej',
    'education.efrei.degree': 'Informatyka i Technologie Cyfrowe',
    'education.efrei.period': 'Wrz. 2024 – Lip. 2029',
    'education.efrei.location': 'Paryż, Francja',
    'education.efrei.desc': 'Top 3 szkół inżynierskich post-bac we Francji (2024)',
    'education.lfigp.title': 'Lycée Français International Georges Pompidou',
    'education.lfigp.degree': 'Francuski Bakałaureat – Specjalizacje: Matematyka i Informatyka',
    'education.lfigp.period': 'Wrz. 2021 – Lip. 2024',
    'education.lfigp.location': 'Dubaj, ZEA',
    'education.lfigp.desc': 'Ukończone z wyróżnieniem w wielokulturowej, wysokiej klasy szkole',
    'education.lfv.title': 'Lycée Français de Varsovie',
    'education.lfv.degree': 'Edukacja Średnia',
    'education.lfv.period': 'Do Lip. 2021',
    'education.lfv.location': 'Warszawa, Polska',
    'education.lfv.desc': 'Francuska edukacja w międzynarodowym środowisku akademickim',
    
    // Projects
    'projects.title': 'Moje Projekty',
    'projects.view': 'Zobacz',
    'projects.bmp.title': 'Aplikacja Filtrów BMP',
    'projects.bmp.desc': 'Aplikacja przetwarzania obrazów w C z intuicyjnym interfejsem użytkownika',
    'projects.logistics.title': 'Narzędzie Logistyczne FDG',
    'projects.logistics.desc': 'Interfejs Python + Excel do obsługi baz danych i automatyzacji',
    'projects.portfolio.title': 'Nowoczesne Portfolio',
    'projects.portfolio.desc': 'Responsywna strona z glassmorfizmem i zaawansowanymi animacjami',
    'projects.ai.title': 'Projekty AI i Automatyzacji',
    'projects.ai.desc': 'Inteligentni asystenci wykorzystujący OpenAI i technologie automatyzacji',
    
    // Experience
    'experience.title': 'Doświadczenie',
    'experience.tutor.title': 'Prywatny Korepetytor Informatyki',
    'experience.tutor.company': 'Superprof',
    'experience.tutor.period': 'Paź. 2024 – Obecnie',
    'experience.tutor.location': 'Paryż (Hybrydowo)',
    'experience.tutor.desc': 'Dostosowane lekcje informatyki dla uczniów szkół średnich, wspiera +10 uczniów, doskonałe wyniki egzaminów',
    'experience.fdg.title': 'Stażysta ds. Eksportu',
    'experience.fdg.company': 'FDG',
    'experience.fdg.period': 'Lato 2025',
    'experience.fdg.location': 'Paryż',
    'experience.fdg.desc': 'Obsługa baz danych, dokumentacja eksportowa i procesy automatyczne (Excel/Python)',
    'experience.animator.title': 'Animator Wolontariusz',
    'experience.animator.company': 'Salut Hola Language Camp',
    'experience.animator.period': 'Lip. – Sie. 2023',
    'experience.animator.location': 'Warszawa',
    'experience.animator.desc': 'Tworzenie i prowadzenie pokazów magicznych, wielojęzyczne aktywności dla 20+ uczestników',
    'experience.hotel.title': 'Stażysta Obserwacyjny',
    'experience.hotel.company': 'SLS Hotel Dubai',
    'experience.hotel.period': 'Maj 2022',
    'experience.hotel.location': 'Dubaj',
    'experience.hotel.desc': 'Obsługa gości w luksusowym hotelu 5-gwiazdkowym, pomoc w planowaniu wydarzeń i logistyce',
    
    // Skills
    'skills.title': 'Moje Umiejętności',
    'skills.programming': 'Programowanie',
    'skills.tools': 'Narzędzia',
    'skills.soft': 'Umiejętności Miękkie',
    'skills.languages': 'Języki',
    'skills.problem-solving': 'Rozwiązywanie problemów',
    'skills.leadership': 'Przywództwo',
    'skills.adaptability': 'Adaptacyjność',
    'skills.teamwork': 'Praca zespołowa',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.name': 'Imię',
    'contact.email': 'Email',
    'contact.message': 'Wiadomość',
    'contact.send': 'Wyślij',
    'contact.location': 'Paryż, Francja',
    'contact.connect': 'Nawiążmy kontakt i stwórzmy coś znaczącego.',
    
    // Footer
    'footer.designed': 'Zaprojektowane i zakodowane przez Karl-Anthony',
    'footer.version': 'v1.0.0 – 2025',
    'footer.cv': 'Pobierz CV',
  },
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('portfolio-language')
    if (stored) return stored as Language
    
    // Auto-detect user language
    const userLang = navigator.language.split('-')[0]
    if (userLang === 'fr') return 'fr'
    if (userLang === 'pl') return 'pl'
    return 'en'
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