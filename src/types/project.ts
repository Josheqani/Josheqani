export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  year: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  tech: string[];
  links: ProjectLink[];
  imagePlaceholderText?: string;
  href?: string;
}

export interface WorkData {
  title: string;
  subtitle: string;
  projects: Project[];
}
