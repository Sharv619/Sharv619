// Fix: Import `ReactElement` to make the React types available in this file.
import type { ReactElement } from 'react';

export interface Skill {
  name: string;
  // Fix: Use `ReactElement` instead of `JSX.Element` to resolve the namespace error.
  icon: ReactElement;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  points: { title: string; description: string }[];
  logo?: ReactElement;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  featured: boolean;
}

// FIX: Added the missing 'CaseStudy' interface.
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactElement;
  situation: string;
  task: string;
  action: string[];
  result: string;
}
