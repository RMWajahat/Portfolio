import { LucideIcon, Globe, Database, Code, Palette } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

export interface Company {
  name: string;
  logo: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Skills {
  [key: string]: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
    image: "/ecommerce.png",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Sales Analytics Dashboard",
    description:
      "Data visualization dashboard using Python, Pandas, and Matplotlib to analyze sales trends and customer behavior patterns.",
    image: "/sales.png",
    category: "datascience",
    technologies: ["Python", "Pandas", "Matplotlib"],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality built with Next.js.",
    image: "/task.png",
    category: "frontend",
    technologies: ["Next.js", "React", "TypeScript"],
  },
  {
    id: 4,
    title: "ML Prediction Model",
    description:
      "Machine learning model using scikit-learn and PyTorch for predictive analytics with 95% accuracy rate.",
    image: "/mlmodel.png",
    category: "datascience",
    technologies: ["Python", "PyTorch", "scikit-learn"],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description: "Custom WordPress theme development with responsive design and advanced customization options.",
    image: "/dashboard.png",
    category: "wordpress",
    technologies: ["WordPress", "PHP", "CSS"],
  },
  {
    id: 6,
    title: "Django REST API",
    description:
      "Scalable REST API built with Django and PostgreSQL for a social media application with authentication.",
    image: "/ai.png",
    category: "backend",
    technologies: ["Django", "PostgreSQL", "Python"],
  },
];

export const companies: Company[] = [
  { name: "Fiverr", logo: "/fiverr.png" },
  { name: "Upwork", logo: "/upwork.png" },
  { name: "LinkedIn", logo: "/linkedin.png" }
];

export const skills: Skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  backend: ["Node.js", "Django", "GitHub", "WordPress"],
  datascience: ["Python", "Spark", "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "PyTorch"],
};

export const categories: ProjectCategory[] = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "fullstack", label: "Full Stack", icon: Code },
  { id: "frontend", label: "Frontend", icon: Palette },
  { id: "backend", label: "Backend", icon: Database },
  { id: "datascience", label: "Data Science", icon: Database },
  { id: "wordpress", label: "WordPress", icon: Globe },
];
