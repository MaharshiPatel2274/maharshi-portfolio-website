
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

const projectsData: ProjectItem[] = [
  {
    title: "VR Test Automation Framework",
    description: "Developed a comprehensive framework for automating tests in VR applications, integrated with CI/CD pipelines to ensure continuous quality assessment during development.",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    technologies: ["Python", "JavaScript", "CI/CD", "GitLab", "VR Testing"],
    repoLink: "#",
  },
  {
    title: "Dreamscape SDK Implementation",
    description: "Enhanced VR experiences by implementing custom features using the Dreamscape SDK and Unity, creating immersive educational environments.",
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    technologies: ["Unity", "C#", "Dreamscape SDK", "VR Development"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "HR Workflow Automation",
    description: "Streamlined HR processes with a custom solution featuring REST APIs and SQL-powered dashboards for improved efficiency and data-driven decision making.",
    image: "bg-gradient-to-br from-green-500/20 to-blue-500/20",
    technologies: ["SQL", "REST API", "Data Visualization", "Workflow Automation"],
    repoLink: "#",
  },
  {
    title: "Chess Training Algorithm",
    description: "Built an algorithm using machine learning and chess analysis to offer personalized improvement recommendations based on player performance and style.",
    image: "bg-gradient-to-br from-amber-500/20 to-red-500/20",
    technologies: ["Python", "Machine Learning", "Chess Analysis", "Algorithms"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Maya Playblast Tool",
    description: "Created a tool integrated within Autodesk Maya that streamlines playblast generation with customizable camera settings and rapid previews for animation workflow.",
    image: "bg-gradient-to-br from-teal-500/20 to-blue-500/20",
    technologies: ["Python", "Autodesk Maya", "UI Design", "Animation Workflow"],
    repoLink: "#",
  },
  {
    title: "Space Debris Collector",
    description: "Developed an innovative asset management tool designed to automatically collect and organize simulation debris data from visual effects pipelines, improving post-production efficiency.",
    image: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    technologies: ["Python", "Asset Management", "Visual Effects", "Automation"],
    liveLink: "#",
    repoLink: "#",
  }
];

export function ProjectsSection() {
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
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Technical Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in VR development, automation, 
            data analysis, and software engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="tech-card group h-full flex flex-col"
            >
              {/* Project Image/Banner */}
              <div 
                className={`rounded-t-lg h-48 ${project.image} flex items-center justify-center overflow-hidden`}
              >
                <div className="text-3xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-colors">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-5 flex-grow">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.repoLink && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
