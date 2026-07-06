import { useState, type KeyboardEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Play } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { ProjectExtendedDescription } from "./ProjectExtendedDescription";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectItem } from "@/types/project";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  itemVariants: Variants;
}

export function ProjectCard({ project, itemVariants }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(project.extendedDescription);

  const openDialog = () => hasDetails && setOpen(true);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!hasDetails) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <motion.div variants={itemVariants} className="h-full">
      <div
        role={hasDetails ? "button" : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        aria-haspopup={hasDetails ? "dialog" : undefined}
        aria-label={hasDetails ? `View details for ${project.title}` : undefined}
        onClick={openDialog}
        onKeyDown={onKeyDown}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-card-hover data-[clickable=true]:cursor-pointer"
        data-clickable={hasDetails}
      >
        {/* Media */}
        <div className="relative aspect-video overflow-hidden bg-secondary/40">
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-card/10 to-transparent" />

          {project.videoUrl && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-background/70 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              <Play className="h-3 w-3 fill-current text-primary" />
              Demo
            </span>
          )}
          {project.year && (
            <span className="absolute right-3 top-3 rounded-md bg-background/70 px-2 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
              {project.year}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
            {hasDetails ? (
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                View details
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            ) : (
              <span />
            )}

            <div className="flex items-center gap-1">
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stop}
                  aria-label={`${project.title} source code`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stop}
                  aria-label={`${project.title} live demo`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Case-study modal */}
      {hasDetails && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto p-0">
            <div className="p-6">
              <ProjectMedia project={project} />
            </div>

            <div className="px-6 pb-6 -mt-2">
              <DialogHeader className="text-left">
                <DialogTitle className="text-xl font-semibold tracking-tight">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                {project.extendedDescription && (
                  <ProjectExtendedDescription
                    extendedDescription={project.extendedDescription}
                  />
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {(project.repoLink || project.liveLink) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.repoLink && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        View source
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button size="sm" asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </motion.div>
  );
}
