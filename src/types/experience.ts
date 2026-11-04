export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  order: number;
  active?: boolean;
  activeLabel?: string;
  description?: string;
  highlights?: string[];
  draft?: boolean;
  contentHtml?: string;
}

export interface ExperienceSectionMeta {
  title: string;
  subtitle: string;
}
