export type ProjectCategory =
  | "Brand Identity"
  | "Packaging Design"
  | "Illustration"
  | "Creative Direction";

export interface Project {
  id: number;

  number: string;

  slug: string;

  title: string;

  subtitle: string;

  year: string;

  category: ProjectCategory[];

  cover: string;

  imagePosition?: string;

  featured?: boolean;

  priority?: boolean;
}