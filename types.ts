
export type ToolCategory = 'student' | 'finance' | 'work';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolMetadata {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: ToolCategory;
  icon: string;
  path: string;
  faqs: FAQItem[];
  // Status and SEO can be overridden via Admin
  status?: 'ON' | 'OFF';
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  canonicalUrl?: string;
}

export interface SEOData {
  title: string;
  metaDescription: string;
  h1: string;
  content: string;
}

export interface AdminStats {
  totalTools: number;
  activeTools: number;
  totalViews: number;
  topPages: { name: string; views: number }[];
}
