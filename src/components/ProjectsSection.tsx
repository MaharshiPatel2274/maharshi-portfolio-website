import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Satellite, Trophy, Rocket, Cpu } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger 
} from "./ui/hover-card";

interface ProjectItem {
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

const projectsData: ProjectItem[] = [
  {
    title: "COSMiQ: AI-Powered Orbital Debris Collector",
    description: "Developed an autonomous satellite system that predicts and clears high-risk orbital debris to reduce collision risks and optimize satellite launch paths.",
    extendedDescription: {
      overview: "Built during the DevLabs Hackathon — and won 🏆",
      achievement: "COSMiQ autonomously predicts and clears high-risk orbital debris ahead of satellite launches to reduce collision risk, fuel overhead, and rerouting complexity.",
      techStack: "Python, Streamlit, Plotly, AstroPy, Poliastro, SGP4, Lambert Transfers, GMAT, REST APIs, SolidWorks",
      features: [
        "AI-based debris prioritization using CelesTrak & DISCOSWeb",
        "Real-time 3D orbit visualization with collision detection",
        "Autonomous transfer simulation via Lambert's algorithm",
        "Browser-based control dashboard for debris interception & planning"
      ],
      impact: "Cut manual planning time by 93%, collision avoidance costs by 90%"
    },
    gradient: "bg-gradient-to-br from-blue-900/40 to-purple-900/40",
    technologies: ["Python", "AI/ML", "Orbital Mechanics", "REST APIs"],
    repoLink: "#",
    imageUrl: "/lovable-uploads/98eca19f-14ee-47c5-b444-00a00a9f6dd6.png",
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
              <Card className="group h-full hover:shadow-lg transition-all duration-300 dark:hover:border-blue-500/50">
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
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer group-hover:text-blue-400">
                        {project.title}
                      </h3>
                    </HoverCardTrigger>
                    {project.extendedDescription && (
                      <HoverCardContent className="w-96 p-6">
                        <div className="space-y-4">
                          {project.extendedDescription.overview && (
                            <div className="flex items-center gap-2 text-blue-500">
                              <Trophy className="w-4 h-4" />
                              <p className="text-sm font-medium">{project.extendedDescription.overview}</p>
                            </div>
                          )}
                          
                          {project.extendedDescription.achievement && (
                            <p className="text-sm">{project.extendedDescription.achievement}</p>
                          )}
                          
                          {project.extendedDescription.techStack && (
                            <div className="flex items-start gap-2">
                              <Cpu className="w-4 h-4 mt-1 text-purple-500" />
                              <p className="text-sm"><span className="font-medium">Tech Stack:</span> {project.extendedDescription.techStack}</p>
                            </div>
                          )}
                          
                          {project.extendedDescription.features && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium">Core Features:</p>
                              <ul className="text-sm space-y-1">
                                {project.extendedDescription.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <Rocket className="w-3 h-3 text-green-500" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {project.extendedDescription.impact && (
                            <p className="text-sm font-medium text-green-500">
                              ✨ {project.extendedDescription.impact}
                            </p>
                          )}
                        </div>
                      </HoverCardContent>
                    )}
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
