export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: "Web" | "Mobile" | "Design" | "Other";
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: "Frontend" | "Backend" | "Design" | "Tools";
}
