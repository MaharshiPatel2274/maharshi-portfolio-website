
import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Sparkles, Wrench, Cpu, Package } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["TypeScript", "JavaScript", "Python", "Swift", "C", "C++", "Java", "C#", "HTML", "MATLAB"],
  },
  {
    name: "Frameworks & Libraries",
    icon: <Sparkles className="w-5 h-5" />,
    skills: ["React.js", "Next.js", "Express.js", "SwiftUI", "TailwindCSS", "Framer Motion", "Electron.js", "Streamlit"],
  },
  {
    name: "Runtime Environments & Package Managers",
    icon: <Package className="w-5 h-5" />,
    skills: ["Node.js", "NPM", "Yarn"],
  },
  {
    name: "DevOps & Tooling",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["GitHub Actions", "GitLab", "Jenkins", "Docker", "CI/CD", "Vercel", "Perforce", "Git"],
  },
  {
    name: "Databases & Data",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL", "NoSQL", "Firebase", "SwiftData", "JSON", "REST APIs", "Pandas", "Matplotlib", "Data Visualization"],
  },
  {
    name: "Cloud Computing",
    icon: <Server className="w-5 h-5" />,
    skills: ["AWS", "Azure", "Vercel", "Serverless Architecture", "API Performance Tuning"],
  },
  {
    name: "API & System Integration",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["API Integration", "OpenAI API", "WHOOP API", "EmailJS", "CelesTrak", "ESA DISCOS"],
  },
  {
    name: "Other Skills",
    icon: <Globe className="w-5 h-5" />,
    skills: ["Automation Scripting", "UX/UI Design", "Figma", "System Design", "VR Testing", "Technical Writing", "Agile Collaboration"],
  },
];

export function SkillsSection() {
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
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Skills & Technologies</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I've developed a diverse range of technical skills throughout my education and professional experience,
            organized into key categories.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-background/50 rounded-full text-sm font-medium border border-border/30"
                  >
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
