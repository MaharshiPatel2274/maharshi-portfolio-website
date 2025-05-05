
import { motion } from "framer-motion";

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export function ProjectHeader({ title, subtitle, description }: ProjectHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="text-primary font-medium">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{title}</h2>
      <p className="text-foreground/70 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
