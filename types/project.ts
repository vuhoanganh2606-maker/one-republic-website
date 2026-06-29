export interface Project {
  title: string;
  slug: string;
  client: string;
  year: string;

  category: string[];
  services: string[];

  cover: string;
  archiveCover?: string;

  imagePosition?: string;

  featured?: boolean;
  priority?: boolean;

  description: string;
  overview: string;

  behance?: string;
}