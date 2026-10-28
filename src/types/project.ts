export interface Project {
  year: string;
  title: string;
  description: string;
  href: string;
}

export interface WorkData {
  title: string;
  subtitle: string;
  projects: Project[];
}
