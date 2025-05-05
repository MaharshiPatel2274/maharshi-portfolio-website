
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectItem } from "@/types/project";

interface ProjectListProps {
  projects: ProjectItem[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          project={project} 
          index={index} 
          itemVariants={itemVariants} 
        />
      ))}
    </motion.div>
  );
}
