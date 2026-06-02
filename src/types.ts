export interface SchoolLevel {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  iconName: string;
  image: string;
  details: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childClass: string;
  quote: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'sports' | 'graduation' | 'event' | 'achievement';
  image: string;
  description: string;
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormInput {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  desiredLevel: string;
  inquiryMessage: string;
}
