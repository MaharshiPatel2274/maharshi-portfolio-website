import { ProjectItem } from "@/types/project";

function toEmbedUrl(url: string): string | null {
  // YouTube: watch?v=, youtu.be/, or /embed/
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;

  // Vimeo: vimeo.com/{id}
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  return null;
}

interface ProjectMediaProps {
  project: ProjectItem;
  className?: string;
}

/**
 * Renders the project's demo media inside the case-study modal.
 * Prefers `videoUrl` (embed or file), falling back to the still image.
 */
export function ProjectMedia({ project, className }: ProjectMediaProps) {
  const base =
    "relative w-full aspect-video overflow-hidden rounded-xl border border-border bg-secondary/40";

  if (project.videoUrl) {
    const embed = toEmbedUrl(project.videoUrl);
    if (embed) {
      return (
        <div className={`${base} ${className ?? ""}`}>
          <iframe
            src={embed}
            title={`${project.title} demo video`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <div className={`${base} ${className ?? ""}`}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={project.videoUrl}
          poster={project.imageUrl}
          controls
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <div className={`${base} ${className ?? ""}`}>
      <img
        src={project.imageUrl}
        alt={`${project.title} preview`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
