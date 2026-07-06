import { SectionHeading } from "./SectionHeading";
import { ProjectList } from "./projects/ProjectList";
import { projectsData } from "@/data/projectsData";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of recent work across AI, automation, web, and iOS. Open any project for a full case study — including demos and walkthroughs."
        />

        <ProjectList projects={projectsData} />
      </div>
    </section>
  );
}
