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
    'experience.title': 'Mon Expérience',
    'experience.subtitle': 'Un parcours à travers divers rôles qui ont façonné mes compétences et ma perspective',
    'experience.tutor': 'Professeur Particulier en Informatique',
    'experience.tutor.desc1': 'Enseignement de NSI aux lycéens préparant le Baccalauréat français',
    'experience.tutor.desc2': 'Soutien personnalisé 1:1, +10 étudiants aidés',
    'experience.tutor.desc3': 'Excellent taux de réussite et retours étudiants',
    'experience.animator': 'Magicien Bénévole',
    'experience.animator.desc1': 'Spectacles de magie et activités interactives pour les jeunes',
    'experience.animator.desc2': 'Supervision de groupes multilingues (FR/EN/ES)',
    'experience.animator.desc3': 'Promotion de la créativité et des échanges interculturels',
    'experience.export': 'Stagiaire Export',
    'experience.export.desc1': 'Gestion de la documentation export et bases de données clients',
    'experience.export.desc2': 'Automatisation de rapports avec Excel & Python',
    'experience.export.desc3': 'Support aux opérations de l\'équipe export',
    'experience.hotel': 'Stagiaire d\'Observation',
    'experience.hotel.desc1': 'Assistance au service client dans un hôtel 5 étoiles',
    'experience.hotel.desc2': 'Aide pendant les périodes d\'événements importants',
    'experience.hotel.desc3': 'Garantie d\'une expérience client fluide dans un cadre premium',
    
    // Skills
    'skills.title': 'Compétences',
    'skills.subtitle': 'Compétences techniques et outils que j\'utilise pour donner vie aux idées',
    'skills.programming': 'Langages & Programmation',
    'skills.tools': 'Outils & Plateformes',
    'skills.soft': 'Compétences Humaines',
    'skills.languages': 'Langues Parlées',
    'skills.problem-solving': 'Résolution de Problèmes',
    'skills.leadership': 'Leadership',
    'skills.adaptability': 'Adaptabilité',
    
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
    'experience.title': 'My Experience',
    'experience.subtitle': 'A journey through diverse roles that shaped my skills and perspective',
    'experience.tutor': 'Private Computer Science Tutor',
    'experience.tutor.desc1': 'Taught NSI to high school students preparing for French Baccalauréat',
    'experience.tutor.desc2': 'Personalized 1:1 support, +10 students helped',
    'experience.tutor.desc3': 'Excellent success rate and student feedback',
    'experience.animator': 'Volunteer Magician',
    'experience.animator.desc1': 'Performed magic shows & led interactive activities for youth',
    'experience.animator.desc2': 'Supervised multilingual groups (FR/EN/ES)',
    'experience.animator.desc3': 'Promoted creativity and intercultural connection',
    'experience.export': 'Export Intern',
    'experience.export.desc1': 'Managed export documentation and client databases',
    'experience.export.desc2': 'Automated reports using Excel & Python',
    'experience.export.desc3': 'Supported the export team\'s operations',
    'experience.hotel': 'Observation Intern',
    'experience.hotel.desc1': 'Assisted in guest service in a 5-star hotel',
    'experience.hotel.desc2': 'Helped during peak event periods',
    'experience.hotel.desc3': 'Ensured smooth customer experience in a premium setting',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technical skills and tools I use to bring ideas to life',
    'skills.programming': 'Languages & Programming',
    'skills.tools': 'Tools & Platforms',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Spoken Languages',
    'skills.problem-solving': 'Problem Solving',
    'skills.leadership': 'Leadership',
    'skills.adaptability': 'Adaptability',
    
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
    'experience.title': 'Moje Doświadczenie',
    'experience.subtitle': 'Podróż przez różne role, które ukształtowały moje umiejętności i perspektywę',
    'experience.tutor': 'Prywatny Korepetytor Informatyki',
    'experience.tutor.desc1': 'Nauczanie NSI uczniów przygotowujących się do francuskiej matury',
    'experience.tutor.desc2': 'Spersonalizowane wsparcie 1:1, +10 uczniów wspomoganych',
    'experience.tutor.desc3': 'Doskonały wskaźnik sukcesu i opinie uczniów',
    'experience.animator': 'Wolontariusz Magik',
    'experience.animator.desc1': 'Występy magiczne i interaktywne zajęcia dla młodzieży',
    'experience.animator.desc2': 'Nadzorowanie wielojęzycznych grup (FR/EN/ES)',
    'experience.animator.desc3': 'Promowanie kreatywności i połączeń międzykulturowych',
    'experience.export': 'Praktykant ds. Eksportu',
    'experience.export.desc1': 'Zarządzanie dokumentacją eksportową i bazami danych klientów',
    'experience.export.desc2': 'Automatyzacja raportów za pomocą Excel i Python',
    'experience.export.desc3': 'Wsparcie operacji zespołu eksportowego',
    'experience.hotel': 'Praktykant Obserwacyjny',
    'experience.hotel.desc1': 'Pomoc w obsłudze gości w hotelu 5-gwiazdkowym',
    'experience.hotel.desc2': 'Pomoc podczas szczytowych okresów eventowych',
    'experience.hotel.desc3': 'Zapewnienie płynnego doświadczenia klienta w premium otoczeniu',
    
    // Skills
    'skills.title': 'Umiejętności',
    'skills.subtitle': 'Umiejętności techniczne i narzędzia, których używam do realizacji pomysłów',
    'skills.programming': 'Języki i Programowanie',
    'skills.tools': 'Narzędzia i Platformy',
    'skills.soft': 'Umiejętności Miękkie',
    'skills.languages': 'Języki Obce',
    'skills.problem-solving': 'Rozwiązywanie Problemów',
    'skills.leadership': 'Przywództwo',
    'skills.adaptability': 'Adaptacyjność',
    
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