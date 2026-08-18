export interface Metric {
  id: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  workMode: 'Remote' | 'On-site' | 'Hybrid';
  summary?: string;
  bullets: string[];
  accomplishments?: string[];
  tags: string[];
  logoInitial: string;
  logoColor: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  school: string;
  period: string;
  score: string;
  scoreLabel: string;
  description: string;
  coursework: string[];
  highlights: string[];
}

export interface FeaturedProject {
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  tools: string[];
  outcome: string;
  skills: string[];
  impactMetrics: { label: string; value: string }[];
}

export interface VolunteeringItem {
  role: string;
  organization: string;
  period: string;
  domain: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  category: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  titles: string[];
  headline: string;
  location: string;
  openToWorkCities: string[];
  workModes: string[];
  status: string;
  connections: string;
  email: string;
  linkedinUrl: string;
  phone?: string;
  about: string;
  metrics: Metric[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  featuredProject: FeaturedProject;
  volunteering: VolunteeringItem;
  skillsByCategory: SkillCategory[];
}
