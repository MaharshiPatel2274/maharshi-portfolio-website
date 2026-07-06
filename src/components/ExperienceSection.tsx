import { motion } from "framer-motion";
import { Calendar, Building2, Building, Laptop, Cpu, BarChart3, Gamepad2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";

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
    title: "Software Engineering Intern",
    company: "NextPlayGames / Sportlingo",
    location: "Remote",
    period: "Jun 2026 - Present",
    description: [
      "Building cross-platform UI components in React Native and TypeScript for football and baseball themed mobile and web titles, wiring them to backend services on AWS EC2/RDS through RESTful API integrations",
      "Partnering with senior engineers and beta testers across sprint cycles to debug, document, and QA new application features using Git-based version control and iterative testing passes"
    ],
    technologies: ["React Native", "TypeScript", "AWS EC2", "AWS RDS", "REST APIs", "Git"],
    icon: <Gamepad2 className="w-5 h-5" />,
  },
  {
    title: "Software Developer",
    company: "EdPlus at ASU",
    location: "Tempe, AZ",
    period: "May 2025 - May 2026",
    description: [
      "Engineered Unity-based VR automation tools in Python and C# that cut 3D asset preparation time by 95%, eliminating a multi-hour manual bottleneck for a team building real-time educational simulations",
      "Architected end-to-end CI/CD pipelines with GitHub Actions, automating build generation, test execution, and cross-platform deployment, reducing release cycles from days to hours",
      "Refactored Unity build processes to slash compile times and enable parallel iteration across 3+ teams, directly accelerating time-to-production for VR content updates"
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
      "Built Python and JavaScript test automation frameworks with Jenkins/GitLab CI pipelines, eliminating 40% of manual QA effort and expanding regression coverage by 55% across VR simulation builds",
      "Identified and resolved VR interaction bugs with developers, achieving a 20% boost in headset responsiveness and 25% fewer tracking errors across headset, sensor, and tracking modules"
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
      "Analyzed employee performance metrics and generated comprehensive reports",
    ],
    technologies: ["SQL", "REST API", "Data Visualization", "Workflow Automation"],
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60 text-primary">
            {experience.icon}
          </span>
          <h3 className="text-lg font-semibold text-foreground leading-tight">
            {experience.title}
          </h3>
        </div>
      </div>

      <div className="space-y-1.5 mb-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 shrink-0" />
          <span>
            {experience.company} · {experience.location}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="font-mono text-xs">{experience.period}</span>
        </div>
      </div>

      <ul className="space-y-2.5 mb-6 flex-grow">
        {experience.description.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-auto">
        {experience.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="From full-stack development to VR automation and quality engineering — building software and tooling that ships to real users and teams."
        />

        {/* Desktop carousel */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="py-4">
              {experienceData.map((experience, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full px-2"
                  >
                    <ExperienceCard experience={experience} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-6">
            <div className="absolute left-1.5 top-1 bottom-1 w-px bg-border" />
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-6 last:mb-0"
              >
                <span className="absolute -left-[1.35rem] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
