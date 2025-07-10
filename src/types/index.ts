export interface Project {
  image: string;
  title: string;
  description: string;
  year: string;
  detailedDescription: string;
  tags: string[];
  alt: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Experience {
  role: string;
  company: string;
  years: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  years: string;
  description: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Contact {
  label: string;
  value: string;
  link: string;
}

export interface ProfileData {
  name: string;
  pronouns: string;
  jobTitle: string;
  location: string;
  email: string;
  linkedIn: string;
  resume: string;
  about: string[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  awards: Award[];
  contacts: Contact[];
}