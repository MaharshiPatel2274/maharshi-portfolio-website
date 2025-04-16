
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Calendar,
  Laptop,
  Briefcase,
  Cpu,
  BarChart,
  Building,
} from "lucide-react";

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
    title: "VR QA Tester",
    company: "Arizona State University",
    location: "Tempe, AZ",
    period: "Aug 2023 - Present",
    description: [
      "Designed automated test scripts using Python and JavaScript to validate VR application functionality",
      "Integrated tests with CI/CD pipelines for continuous quality assessment",
      "Performed comprehensive testing of educational VR applications, identifying and documenting defects",
      "Collaborated with developers to resolve technical issues and improve application stability"
    ],
    technologies: ["Python", "JavaScript", "VR Testing", "CI/CD", "GitLab"],
    icon: <Laptop className="w-5 h-5" />,
  },
  {
    title: "Pod Operator",
    company: "Arizona State University",
    location: "Tempe, AZ",
    period: "Aug 2023 - Present",
    description: [
      "Troubleshooted and resolved VR hardware and software issues in real-time",
      "Utilized Dreamscape SDK to enhance and maintain VR experiences",
      "Implemented improvements to Unity-based VR environments",
      "Assisted users with VR equipment and provided technical guidance"
    ],
    technologies: ["VR Hardware", "Dreamscape SDK", "Unity", "Troubleshooting"],
    icon: <Cpu className="w-5 h-5" />,
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline connector line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:ml-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
  className={`absolute top-7 w-5 h-5 rounded-full bg-primary transform z-10 ${
    index % 2 === 0
      ? 'left-0 md:left-1 md:-translate-x-1/2'
      : 'left-0 md:left-[calc(100%-1.25rem)] md:translate-x-1/2'
  }`}
/>


                
                {/* Experience card */}
                <div className="glass-card ml-8 md:ml-0 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
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

                  <ul className="mb-5 space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-foreground/80 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/80 mt-2 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
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
        </motion.div>
      </div>
    </section>
  );
}
