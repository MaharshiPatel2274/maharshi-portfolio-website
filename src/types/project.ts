
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
  /**
   * Optional demo video for the project's case-study modal.
   * Supports a direct file URL (.mp4/.webm), a YouTube link, or a Vimeo link.
   * When omitted, the modal falls back to `imageUrl`.
   */
  videoUrl?: string;
  /** Optional short year/context label shown on the card, e.g. "2025" or "Hackathon". */
  year?: string;
}
