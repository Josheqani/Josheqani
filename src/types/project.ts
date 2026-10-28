export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  order: number;
  summary: string;
  role?: string;
  tech?: string[];
  links?: ProjectLink[];
  draft?: boolean;
  contentHtml: string;
}

export interface WorkSectionMeta {
  title: string;
  subtitle: string;
}
