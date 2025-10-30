
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Calendar,
  Building,
  Laptop,
  Cpu,
  BarChart
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Junior Developer",
    company: "EdPlus at ASU",
    location: "Tempe, AZ",
    period: "May 2025 - Present",
    description: [
      "Designed and implemented Unity-based VR automation tools using Python and C#, optimizing asset processing workflows and reducing 3D model preparation time by 95%",
      "Integrated CI/CD pipelines with GitHub Actions to automate build generation, testing, and deployment",
      "Refactored Unity build processes to reduce compile times and improve version control workflows"
    ],
    technologies: ["Unity", "Python", "C#", "GitHub Actions", "CI/CD", "VR Development"],
    icon: <Laptop className="w-5 h-5" />,
  },
  {
    title: "VR QA Engineer",
    company: "EdPlus at ASU",
    location: "Tempe, AZ",
    period: "Aug 2024 - May 2025",
    description: [
      "Developed automated test frameworks in Python and JavaScript for VR apps, improving regression test coverage",
      "Configured Jenkins and GitLab CI for automated VR build validation",
      "Collaborated with devs to debug VR interaction logic and optimize performance"
    ],
    technologies: ["Python", "JavaScript", "Jenkins", "GitLab CI", "VR Testing", "Test Automation"],
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "VR Operation Specialist",
    company: "EdPlus at ASU",
    location: "Tempe, AZ",
    period: "Mar 2023 - Aug 2024",
    description: [
      "Diagnosed real-time VR system issues using Unity debug logs, telemetry data, and SDK traces",
      "Deployed Unity updates and performed headset tracking calibration",
      "Documented runtime defects and created technical reports for engineering teams"
    ],
    technologies: ["Unity", "VR Hardware", "System Diagnostics", "Technical Documentation", "Troubleshooting"],
    icon: <Building className="w-5 h-5" />,
  },
  {
    title: "Data Analyst Intern",
    company: "Keni Impex",
    location: "Remote",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Automated HR workflows, reducing processing time by 40%",
      "Designed and implemented REST APIs for data integration",
      "Created data visualization dashboards using SQL for business intelligence",
      "Analyzed employee performance metrics and generated comprehensive reports"
    ],
    technologies: ["SQL", "REST API", "Data Visualization", "Workflow Automation"],
    icon: <BarChart className="w-5 h-5" />,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Professional Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Work Experience</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My career experience spans VR quality assurance, technical operations, and data analysis,
            where I've developed a diverse skill set in software development and problem-solving.
          </p>
        </motion.div>

        {/* Desktop Carousel (Hidden on mobile) */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {experienceData.map((experience, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="glass-card group h-full p-6 mx-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold tech-gradient-text">{experience.title}</h3>
                        <div className="flex items-center text-foreground/70 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mb-4">
                        <Building className="w-4 h-4 text-foreground/70" />
                        <p className="text-foreground/70">
                          {experience.company} • {experience.location}
                        </p>
                      </div>

                      <div className="space-y-2 mb-4 flex-grow overflow-hidden transition-all duration-300">
                        <ul className="space-y-2">
                          {experience.description.map((item, idx) => (
                            <li key={idx} className="text-foreground/80 flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="skill-badge">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Mobile Vertical Timeline (Visible only on mobile) */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/60"></div>

            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-8 pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[14px] top-2 w-3 h-3 rounded-full bg-primary/80 -translate-x-1/2 z-10"></div>
                
                <div className="glass-card group p-5 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="flex flex-col mb-3">
                    <h3 className="text-xl font-semibold tech-gradient-text mb-2">{experience.title}</h3>
                    <div className="flex items-center text-foreground/70 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4 text-foreground/70" />
                      <p className="text-foreground/70">
                        {experience.company} • {experience.location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-foreground/80 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {experience.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="skill-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
