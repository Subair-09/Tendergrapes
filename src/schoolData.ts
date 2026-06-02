import { SchoolLevel, Facility, Testimonial, GalleryItem, WhyFeature } from './types';

export const whyFeatures: WhyFeature[] = [
  {
    id: 'teachers',
    title: 'Certified & Experienced Teachers',
    description: 'Our educators are subject-matter experts committed to mentoring students through personalized, modern target-driven instruction.',
    iconName: 'Award'
  },
  {
    id: 'programs',
    title: 'Dual Academic Curricula',
    description: 'An enriched blend of the British and Nigerian curricula that prepares students for global opportunities and local relevance.',
    iconName: 'BookOpen'
  },
  {
    id: 'environment',
    title: 'Conducive Learning Spaces',
    description: 'Fully air-conditioned, temperature-controlled, ultra-clean classrooms with modern layout ergonomics designed to spark creativity.',
    iconName: 'Sparkles'
  },
  {
    id: 'aids',
    title: 'Modern Teaching Aids',
    description: 'Smartboards, science laboratories, a fully equipped ICT suite, and robust digitized educational portals for hands-on learning.',
    iconName: 'Cpu'
  },
  {
    id: 'security',
    title: 'Safe & Secure Campus',
    description: '24/7 CCTV surveillance, biometric access, trained on-site security personnel, and strict safety guidelines for your peace of mind.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'morals',
    title: 'Strong Moral Values',
    description: 'Character coaching that instills integrity, respect, empathy, and leadership principles alongside scholastic excellence.',
    iconName: 'HeartHandshake'
  }
];

export const schoolLevels: SchoolLevel[] = [
  {
    id: 'creche',
    name: 'Creche & Toddler Lab',
    ageRange: '3 Months – 2 Years',
    description: 'A cozy, safe haven designed to foster early cognitive milestones and emotional security.',
    iconName: 'Baby',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600',
    details: [
      'Flexible, responsive individual schedules',
      'Sensory play, block-building, and language immersion',
      'Ultra-hygienic, padded play zones with 24/7 nanny attendance',
      'Nurturing social-emotional growth pathways'
    ]
  },
  {
    id: 'nursery',
    name: 'Early Years & Nursery',
    ageRange: '2 – 5 Years',
    description: 'An interactive early-learning stage blending the Montessori philosophy with playful discoveries.',
    iconName: 'Smile',
    image: 'https://imgur.com/tsAHP4s.png',
    details: [
      'Phonics, early numeracy, and basic science concepts',
      'Creative arts, rhythmic movement, and musical play',
      'Fine and gross motor skills coordination exercises',
      'Confidence building and initial conversational mastery'
    ]
  },
  {
    id: 'primary',
    name: 'Basic Education / Primary',
    ageRange: '5 – 11 Years',
    description: 'Strengthening analytical thinking, independent learning, and peer collaboration skills.',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
    details: [
      'Rigorous exploration of Mathematics, Sciences, and Creative Arts',
      'Comprehensive literacy development with creative writing focuses',
      'Coding and robotics introductory models',
      'Active participation in inter-house sports, quiz bowls, and spelling bees'
    ]
  },
  {
    id: 'secondary',
    name: 'College / Secondary School',
    ageRange: '11 – 17 Years',
    description: 'Preparing high-achieving trailblazers for flawless WASSCE, NECO, IGCSE, and Cambridge exams.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
    details: [
      'Advanced STEM, Humanities, Business, and Career tracks',
      'In-depth exam preps for national and international college validations',
      'Mock business initiatives, debate leagues, and leadership councils',
      'One-on-one career mapping and college guidance counseling'
    ]
  }
];

export const facilities: Facility[] = [
  {
    id: 'classrooms',
    title: 'Ergonomic smart classrooms',
    description: 'Spacious, air-conditioned spaces with ergonomic desk configurations, individual lockers, and digital interactive projectors.',
    tag: 'LEARNING',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'library',
    title: 'The Knowledge Vault Library',
    description: 'A modern repository with thousands of curated textbooks, classical literature, encyclopedia sets, and internet-enabled e-readers.',
    tag: 'EXPLORATION',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'labs',
    title: 'STEM & Robotics Laboratories',
    description: 'Fully stocked Chemistry, Physics, Biology, and ICT facilities conforming to British Council and WAEC specifications.',
    tag: 'INNOVATION',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sports',
    title: 'Uncompromised Athletics Ground',
    description: 'A safe astroturf pitch, running tracks, multi-sport courts for basketball, and a safe, expansive children’s playground area.',
    tag: 'FITNESS',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'security_env',
    title: 'Secure & Shielded Campus Layout',
    description: 'Featuring card-controlled access gates, double security checks, and uninterrupted solar/thermal backup generator grids.',
    tag: 'SAFETY',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    parentName: 'Mrs. Oluchi Adeleke',
    childClass: 'Primary 4 & Basic College',
    quote: 'Bringing my children to Tender Grapes was the best decision we made. The academic progress in mathematics and the visible rise in active reading habits is absolutely spectacular. Their teachers genuinely care about the students!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200',
    date: '2 months ago'
  },
  {
    id: 't2',
    parentName: 'Dr. Babatunde Sowande',
    childClass: 'Reception & Primary 1',
    quote: 'Extremely neat environment, and the safety measures are high-class. The biometric gate system and live-alert systems let me do my hospital rounds without worry. My kids come home reciting memory verses and sharing science facts!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    date: '1 month ago'
  },
  {
    id: 't3',
    parentName: 'Barrister Chioma Nduka',
    childClass: 'JSS 2 College',
    quote: 'The blending of Nigerian and British curricula has given my daughter so much poise. Her speech has improved, and her performance in the inter-school debate competition made me shed tears of joy. Standard first-class schooling.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    date: '3 weeks ago'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'STEM Science Fair Exhibition',
    category: 'classroom',
    image: 'https://imgur.com/dIyyTom.png',
    description: 'Students presenting their green-energy models utilizing volcanic kinetic reactions.'
  },
  {
    id: 'g2',
    title: 'Valedictory Service Praise',
    category: 'graduation',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    description: 'Our top academic champions receiving their high-honor medals during graduation.'
  },
  {
    id: 'g3',
    title: 'Annual Inter-House Athletics Day',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
    description: 'Exciting final leg of the 100m relay on our sprawling school green arena.'
  },
  {
    id: 'g4',
    title: 'Cultural Day Celebrations',
    category: 'event',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    description: 'Displaying our rich Nigerian diversity in traditional fabrics, food, and music.'
  },
  {
    id: 'g5',
    title: 'Lagos State Robotics Olympiad Gold',
    category: 'achievement',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    description: 'Tender Grapes team clinching first place for automated waste-sorting designs.'
  }
];
