export interface Project {
  id: string;
  title: string;
  category: 'AI Commercial Ad' | 'AI Cinematic Video' | 'AI Product Ad' | 'AI Commercial / Brand Video' | 'Graphic Designing & Social Media' | 'Product Advertising';
  filterTags: string[];
  description: string;
  videoUrl?: string; // e.g. https://streamable.com/3hzgke
  embedUrl?: string; // e.g. https://streamable.com/e/3hzgke
  thumbnailUrl?: string;
  images?: string[]; // For gallery projects
  featured?: boolean;
  type: 'video' | 'gallery';
  subtitle?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface ReasonItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  duration: string;
  description: string;
}
