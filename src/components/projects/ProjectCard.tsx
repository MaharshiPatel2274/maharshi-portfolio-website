
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Satellite } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { ProjectExtendedDescription } from "./ProjectExtendedDescription";
import { ProjectItem } from "@/types/project";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  itemVariants: any;
}

export function ProjectCard({ project, index, itemVariants }: ProjectCardProps) {
  return (
    <motion.div
      key={index}
      variants={itemVariants}
      className="h-full"
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card className="group h-full hover:shadow-lg transition-all duration-300 dark:hover:border-blue-500/50 cursor-pointer">
            <CardHeader className={`${project.gradient} rounded-t-lg p-6 relative overflow-hidden h-48`}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              {index === 0 && (
                <motion.div 
                  className="absolute -top-20 -right-20 w-40 h-40 opacity-20 group-hover:opacity-40 transition-opacity"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-full h-full rounded-full border-4 border-blue-500/50"></div>
                </motion.div>
              )}
              <div className="text-4xl font-bold text-foreground/20 transition-colors relative z-10">
                {index === 0 ? <Satellite className="w-8 h-8 text-blue-400" /> : project.title.charAt(0)}
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors group-hover:text-blue-400">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 mb-5">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="skill-badge">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="p-6 pt-0">
              {project.repoLink && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    <span>View Source</span>
                  </a>
                </Button>
              )}
              {project.liveLink && (
                <Button size="sm" className="ml-3" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </HoverCardTrigger>
        {project.extendedDescription && (
          <HoverCardContent className="w-96 p-6">
            <ProjectExtendedDescription extendedDescription={project.extendedDescription} />
          </HoverCardContent>
        )}
      </HoverCard>
    </motion.div>
  );
}
