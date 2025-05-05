
export interface ProjectItem {
  title: string;
  description: string;
  extendedDescription?: {
    overview?: string;
    achievement?: string;
    techStack?: string;
    features?: string[];
    impact?: string;
  };
  gradient: string;
  technologies: string[];
  repoLink?: string;
  liveLink?: string;
  imageUrl: string;
}
