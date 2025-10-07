
export interface Skill {
  name: string;
  percentage: number;
  icon: JSX.Element;
  animation?: 'spin' | 'pulse' | 'shake';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  status: 'Current' | 'Previous';
}

export interface EducationItem {
    degree: string;
    university: string;
    year: string;
}