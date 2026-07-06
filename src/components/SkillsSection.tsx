import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Sparkles, Wrench, Cpu, Package } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["TypeScript", "JavaScript", "Python", "Swift", "C", "C++", "Java", "C#", "SQL", "HTML/CSS", "Bash", "MATLAB"],
  },
  {
    name: "Frameworks & Libraries",
    icon: <Sparkles className="w-5 h-5" />,
    skills: ["React.js", "React Native", "Next.js", "Express.js", "Redux", "SwiftUI", "TailwindCSS", "Framer Motion", "Electron.js", "Streamlit", "shadcn/ui", "lucide-react"],
  },
  {
    name: "Runtime Environments & Package Managers",
    icon: <Package className="w-5 h-5" />,
    skills: ["Node.js", "NPM", "Yarn"],
  },
  {
    name: "DevOps & Tooling",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["GitHub Actions", "GitLab", "Jenkins", "Docker", "Kubernetes", "Terraform", "CI/CD", "Vercel", "Sourcetree", "Perforce", "Jira", "Git"],
  },
  {
    name: "Databases & Data",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL", "PostgreSQL", "MongoDB", "NoSQL", "Firebase", "Supabase", "SwiftData", "JSON", "REST APIs", "Pandas", "NumPy", "Matplotlib", "Data Visualization"],
  },
  {
    name: "Cloud Computing",
    icon: <Server className="w-5 h-5" />,
    skills: ["AWS (EC2, S3, IAM, RDS)", "AWS Lambda", "Azure", "Vercel", "Serverless Architecture", "API Performance Tuning"],
  },
  {
    name: "AI / ML & Integration",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["OpenAI API", "Hugging Face", "LangChain", "Prompt Engineering", "API Integration", "WHOOP API", "EmailJS", "CelesTrak", "ESA DISCOS", "Zoo API", "SimScale API", "Wokwi"],
  },
  {
    name: "Testing & Other Skills",
    icon: <Globe className="w-5 h-5" />,
    skills: ["Selenium", "Regression Testing", "Black/White Box Testing", "Automation Scripting", "UX/UI Design", "Figma", "System Design", "VR Testing", "Technical Writing", "Agile & SDLC", "CAD Modeling", "Hardware Simulation", "PCB Design"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A toolkit built across coursework, professional work, and personal projects — spanning languages, frameworks, cloud, and quality engineering."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60 text-primary transition-colors group-hover:bg-primary/10">
                  {category.icon}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
