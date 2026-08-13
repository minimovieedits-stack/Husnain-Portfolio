import { Project, Service, ToolItem, ReasonItem, ProcessStep, ExperienceItem } from '../types';

export const AI_VIDEO_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Luxury Product Campaign',
    subtitle: 'LUXURY PRODUCT CAMPAIGN',
    category: 'AI Commercial Ad',
    filterTags: ['All', 'AI Video', 'Commercial Ads'],
    description: 'Cinematic AI-generated commercial concept focused on premium product presentation.',
    videoUrl: 'https://streamable.com/3hzgke',
    embedUrl: 'https://streamable.com/e/3hzgke',
    type: 'video',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'AI Cinematic Brand Film',
    subtitle: 'AI CINEMATIC BRAND FILM',
    category: 'AI Cinematic Video',
    filterTags: ['All', 'AI Video', 'Cinematic'],
    description: 'A cinematic AI video concept combining atmosphere, storytelling and dramatic visual direction.',
    videoUrl: 'https://streamable.com/015n4t',
    embedUrl: 'https://streamable.com/e/015n4t',
    type: 'video',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Premium Product Showcase',
    subtitle: 'PREMIUM PRODUCT SHOWCASE',
    category: 'AI Product Ad',
    filterTags: ['All', 'AI Video', 'Product Ads'],
    description: 'A visually focused product advertisement designed to create premium brand perception.',
    videoUrl: 'https://streamable.com/tn1gqr',
    embedUrl: 'https://streamable.com/e/tn1gqr',
    type: 'video',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Modern Commercial Concept',
    subtitle: 'MODERN COMMERCIAL CONCEPT',
    category: 'AI Commercial Ad',
    filterTags: ['All', 'AI Video', 'Commercial Ads'],
    description: 'A modern AI-powered commercial concept created with cinematic visuals and dynamic presentation.',
    videoUrl: 'https://streamable.com/qdjd76',
    embedUrl: 'https://streamable.com/e/qdjd76',
    type: 'video'
  },
  {
    id: 'proj-5',
    title: 'AI Visual Story',
    subtitle: 'AI VISUAL STORY',
    category: 'AI Cinematic Video',
    filterTags: ['All', 'AI Video', 'Cinematic'],
    description: 'A cinematic visual story built around atmosphere, movement and AI-generated visuals.',
    videoUrl: 'https://streamable.com/0vn2wk',
    embedUrl: 'https://streamable.com/e/0vn2wk',
    type: 'video'
  },
  {
    id: 'proj-6',
    title: 'Facewash Product Campaign',
    subtitle: 'FACEWASH PRODUCT CAMPAIGN',
    category: 'AI Product Ad',
    filterTags: ['All', 'AI Video', 'Product Ads'],
    description: 'AI-powered beauty product advertisement designed for modern social media marketing.',
    videoUrl: 'https://streamable.com/02lfzt',
    embedUrl: 'https://streamable.com/e/02lfzt',
    type: 'video',
    featured: true
  },
  {
    id: 'proj-7',
    title: 'University Brand Film',
    subtitle: 'UNIVERSITY BRAND FILM',
    category: 'AI Commercial / Brand Video',
    filterTags: ['All', 'AI Video', 'Commercial Ads', 'Cinematic'],
    description: 'A cinematic promotional concept designed to present an educational brand in a modern visual style.',
    videoUrl: 'https://streamable.com/eyoxsm',
    embedUrl: 'https://streamable.com/e/eyoxsm',
    type: 'video'
  },
  {
    id: 'proj-8',
    title: 'University Promotional Video',
    subtitle: 'UNIVERSITY PROMOTIONAL VIDEO',
    category: 'AI Commercial / Brand Video',
    filterTags: ['All', 'AI Video', 'Commercial Ads'],
    description: 'A modern AI-generated promotional video focused on storytelling and institutional branding.',
    videoUrl: 'https://streamable.com/asur4b',
    embedUrl: 'https://streamable.com/e/asur4b',
    type: 'video'
  }
];

export const GALLERY_PROJECTS: Project[] = [
  {
    id: 'proj-gallery-1',
    title: 'Graphic Designing & Social Media Management',
    subtitle: 'SOCIAL MEDIA CREATIVES',
    category: 'Graphic Designing & Social Media',
    filterTags: ['All', 'Graphic Design', 'Social Media'],
    description: 'A collection of social media creatives and graphic design work created for brand communication, marketing campaigns and digital engagement.',
    type: 'gallery',
    images: [
      'https://ibb.co/MYr6t8N',
      'https://ibb.co/DPcpntz2',
      'https://ibb.co/d4WYpThj',
      'https://ibb.co/nNLcsqmB',
      'https://ibb.co/q3gRc55Q',
      'https://ibb.co/NgYMCQ6J',
      'https://ibb.co/VpS19qtf'
    ],
    featured: true
  },
  {
    id: 'proj-gallery-2',
    title: 'Product Advertising Campaign',
    subtitle: 'PRODUCT ADVERTISING',
    category: 'Product Advertising',
    filterTags: ['All', 'Product Ads', 'Graphic Design'],
    description: 'A premium product advertising concept focused on product presentation, visual storytelling and commercial appeal.',
    type: 'gallery',
    images: [
      'https://ibb.co/93nhS352',
      'https://ibb.co/G4gkxvNd',
      'https://ibb.co/gBh0chd'
    ],
    featured: true
  }
];

export const ALL_PROJECTS: Project[] = [...AI_VIDEO_PROJECTS, ...GALLERY_PROJECTS];

export const SERVICES_LIST: Service[] = [
  {
    id: 's1',
    title: 'AI Video Creation',
    description: 'High-quality AI-generated videos designed for brands, social media and digital campaigns.',
    iconName: 'Clapperboard',
    highlight: 'Hyper-realistic AI Generation'
  },
  {
    id: 's2',
    title: 'AI Commercial Ads',
    description: 'Cinematic AI-powered commercial advertisements designed to capture attention and communicate brand value.',
    iconName: 'Video',
    highlight: 'Conversion-Driven Ads'
  },
  {
    id: 's3',
    title: 'AI Product Ads',
    description: 'Premium product-focused advertisements with cinematic camera movements, product reveals and visual effects.',
    iconName: 'Sparkles',
    highlight: 'Luxurious Product Reveals'
  },
  {
    id: 's4',
    title: 'AI Cinematic Video',
    description: 'Story-driven cinematic visuals with dramatic lighting, camera movement and professional visual direction.',
    iconName: 'Film',
    highlight: 'Atmospheric Storytelling'
  },
  {
    id: 's5',
    title: 'Social Media Management',
    description: 'Content planning, creative direction and social media management designed to grow online presence.',
    iconName: 'Share2',
    highlight: 'Organic Growth & Reach'
  },
  {
    id: 's6',
    title: 'Facebook Management',
    description: 'Professional Facebook content management, creative posting and audience-focused content strategy.',
    iconName: 'LayoutGrid',
    highlight: 'Targeted Engagement'
  },
  {
    id: 's7',
    title: 'YouTube Management',
    description: 'YouTube content planning, optimization, creative direction and video-focused growth strategy.',
    iconName: 'PlayCircle',
    highlight: 'Video Optimization'
  },
  {
    id: 's8',
    title: 'Pinterest Management',
    description: 'Visual content management and Pinterest strategy designed to improve reach and brand discovery.',
    iconName: 'Grid',
    highlight: 'Visual Brand Discovery'
  }
];

export const TOOLS_LIST: ToolItem[] = [
  {
    id: 't1',
    name: 'ChatGPT',
    category: 'AI Scripting & Ideation',
    description: 'Creative ideation, scripting, research and AI workflow development.',
    icon: 'Bot',
    tag: 'Scripting & Concepts'
  },
  {
    id: 't2',
    name: 'Claude',
    category: 'AI Content Strategy',
    description: 'Creative planning, writing and content development.',
    icon: 'Brain',
    tag: 'Strategic Direction'
  },
  {
    id: 't3',
    name: 'Veo 3',
    category: 'AI Video Engine',
    description: 'AI video generation, cinematic scenes and commercial visuals.',
    icon: 'Wand2',
    tag: 'Cinematic Video'
  },
  {
    id: 't4',
    name: 'Google Flow',
    category: 'Filmmaking Workflow',
    description: 'AI filmmaking workflows, scene creation and visual storytelling.',
    icon: 'Workflow',
    tag: 'Scene Composition'
  },
  {
    id: 't5',
    name: 'CapCut',
    category: 'Video Editing & Production',
    description: 'Professional editing, transitions, captions, effects and final video production.',
    icon: 'Scissors',
    tag: 'Post-Production'
  }
];

export const REASONS_LIST: ReasonItem[] = [
  {
    number: '01',
    title: 'Creative Thinking',
    description: "I don't just create visuals. I focus on turning ideas into engaging visual experiences."
  },
  {
    number: '02',
    title: 'AI + Marketing',
    description: 'I combine AI video creation with digital marketing knowledge to create content with a purpose.'
  },
  {
    number: '03',
    title: 'Brand-Focused',
    description: 'Every project is designed around the brand, audience and marketing objective.'
  },
  {
    number: '04',
    title: 'Fast Creative Workflow',
    description: 'AI-powered workflows allow me to develop visual concepts efficiently while maintaining quality.'
  },
  {
    number: '05',
    title: 'Detail-Oriented',
    description: 'From camera movement and lighting to transitions and final editing, I pay attention to the details.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the brand, product and objective.',
    details: ['Brand Identity Mapping', 'Target Audience Analysis', 'Goal Setting']
  },
  {
    number: '02',
    title: 'PLAN',
    description: 'Develop the creative concept, script and visual direction.',
    details: ['AI Prompt Strategy', 'Storyboard & Lighting Notes', 'Moodboards']
  },
  {
    number: '03',
    title: 'CREATE',
    description: 'Produce AI visuals, video scenes, editing and motion.',
    details: ['Veo 3 & Flow Generation', 'Color Grading & Lighting', 'Audio Synchronization']
  },
  {
    number: '04',
    title: 'DELIVER',
    description: 'Finalize the project and prepare it for the intended platform.',
    details: ['Format Optimization', 'Platform-Specific Ratios', 'Final Revisions']
  }
];

export const EXPERIENCE_STATS: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Digital Marketing Specialist',
    duration: '2 Years Experience',
    description: 'Specializing in campaign strategy, audience engagement, social growth, and multi-channel marketing.'
  },
  {
    period: '2026 — Present',
    role: 'AI Video Creator',
    duration: '6 Months Experience',
    description: 'Pioneering AI video generation, commercial ad creation, product reveals, and cinematic brand films.'
  }
];
