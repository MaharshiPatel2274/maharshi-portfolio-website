
import { ProjectHeader } from "./projects/ProjectHeader";
import { ProjectList } from "./projects/ProjectList";
import { projectsData } from "@/data/projectsData";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <ProjectHeader 
          title="Featured Projects"
          subtitle="My Technical Portfolio"
          description="A showcase of my recent iOS development work, along with selected tools and automation projects."
        />
        
        <ProjectList projects={projectsData} />
      </div>
    </section>
  );
}
