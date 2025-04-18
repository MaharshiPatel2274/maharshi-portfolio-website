import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface ProjectItem {
  title: string;
  description: string;
  gradient: string;
  technologies: string[];
  repoLink?: string;
  liveLink?: string;
  imageUrl: string;
}

const projectsData: ProjectItem[] = [
  {
    title: "Space Debris Collector",
    description: "Developed an innovative asset management tool designed to automatically collect and organize simulation debris data from visual effects pipelines, improving post-production efficiency.",
    gradient: "bg-gradient-to-br from-rose-500/20 to-pink-500/20",
    technologies: ["Python", "Asset Management", "Visual Effects", "Automation"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Maya Playblast Tool",
    description: "Created a tool integrated within Autodesk Maya that streamlines playblast generation with customizable camera settings and rapid previews for animation workflow.",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    technologies: ["Python", "Autodesk Maya", "UI Design", "Animation Workflow"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "My Book List App",
    description: "A SwiftUI-based app following MVVM architecture that allows users to add, delete, search, and edit books with title, author, and genre. Includes toolbar integration and record navigation.",
    gradient: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    technologies: ["Swift", "SwiftUI", "MVVM", "Core Data", "iOS"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Personal Finance Tracker",
    description: "An expense tracking app built using Swift and SwiftData. Tracks income, expenses by category, and savings across 7 days. Includes financial health insights based on daily averages, with optional chart visualization.",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    technologies: ["Swift", "SwiftData", "Charts", "MVVM", "iOS"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Favorite Parks Directory",
    description: "A table view and map-based app to list favorite parks using List, NavigationLink, and Map. Supports grouping, dynamic addition/deletion, and displays map annotations of nearby places using keyword search.",
    gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
    technologies: ["Swift", "MapKit", "Core Location", "SwiftUI", "iOS"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "City Info Explorer",
    description: "A SwiftUI app that fetches and displays city data using JSON and the GeoNames API. Selecting a city shows it on a map. Demonstrates web service integration and async JSON handling.",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    technologies: ["Swift", "SwiftUI", "REST API", "MapKit", "Async/Await"],
    repoLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
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
            A showcase of my recent iOS development work, along with selected tools and automation projects.
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
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className={`${project.gradient} rounded-t-lg p-6 relative overflow-hidden h-48`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                  <div className="text-4xl font-bold text-foreground/20 transition-colors relative z-10">
                    {project.title.charAt(0)}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
