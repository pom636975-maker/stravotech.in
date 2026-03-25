// Predefined Holi templates metadata. In a real app these could be stored in Firestore or generated dynamically.
export interface HoliTemplate {
  id: string;
  title: string;
  category: 'post' | 'story' | 'card' | 'offer';
  thumbnailUrl: string; // could point to a Cloudinary hosted image or Data URI
  defaultText?: string;
}

// for brevity only a few entries are shown; expand to 100 real templates.
export const HOLI_TEMPLATES: HoliTemplate[] = [
  {
    id: 'template-1',
    title: 'Rainbow Splash Post',
    category: 'post',
    thumbnailUrl: '/templates/holi/template-1.jpg',
    defaultText: 'Happy Holi!',
  },
  {
    id: 'template-2',
    title: 'Color Burst Story',
    category: 'story',
    thumbnailUrl: '/templates/holi/template-2.jpg',
  },
  {
    id: 'template-3',
    title: 'Traditional Card',
    category: 'card',
    thumbnailUrl: '/templates/holi/template-3.jpg',
  },
  {
    id: 'template-4',
    title: 'Business Offer',
    category: 'offer',
    thumbnailUrl: '/templates/holi/template-4.jpg',
  },
  // ... repeat or programmatically generate until 100 templates.
];
