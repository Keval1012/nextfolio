export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "Full Stack" | "Backend / API" | "Cloud / DevOps" | "Frontend";
  architectureHighlights?: string[];
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: "Full-time" | "Contract" | "Part-time";
  startDate: string;
  endDate: string; // e.g., "Present" or "2023"
  summary: string;
  keyResponsibilities: string[];
  measurableAchievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  location?: string;
  score?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  twitter?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    initials: string;
    role: string;
    secondaryRole: string;
    yearsOfExperience: string;
    location: string;
    email: string;
    bio: string;
    shortIntro: string;
    philosophy: string;
    passions: string[];
    resumeUrl: string;
    avatarUrl?: string;
    availabilityStatus: string;
    stats: {
      yearsExperience: string;
      projectsBuilt: string;
      technologiesCount: string;
      productionApps: string;
      uptimeCommitment: string;
    };
    social: SocialLinks;
  };
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  engineeringHighlights: EngineeringPrinciple[];
  education: Education[];
  certifications: Certification[];
  githubStats: {
    username: string;
    profileUrl: string;
    repositoriesCount: number;
    yearsActive: string;
    selectedRepos: {
      name: string;
      description: string;
      language: string;
      stars: number;
      forks: number;
      url: string;
    }[];
  };
}
