
import { motion } from "framer-motion";
import { Avatar } from "./ui/avatar";

export function AboutSection() {
  return (
    <section id="about-me" className="py-20 bg-background/50">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative aspect-square rounded-xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/lovable-uploads/85b72fe2-b699-4d47-a712-11755bc4f45a.png"
              alt="Maharshi Niraj Patel, VR QA Tester and Unity Developer, Computer Science student at Arizona State University specializing in immersive technology"
              className="object-cover w-full h-full rounded-xl"
              loading="lazy"
            />
          </motion.div>
          
          <div className="space-y-6">
            <motion.h2 
              className="text-3xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I'm Maharshi Niraj Patel. I'm a computer science student driven by immersive technology, intelligent automation, and user-focused software design. I work at the intersection of engineering and experience, building systems that blend functionality with usability. I've led QA efforts for advanced VR applications, engineered automation tools to streamline digital workflows, and developed scalable solutions that solve real-world problems. This portfolio is a reflection of the tools I've built, the platforms I've optimized, and the technologies I continue to explore.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
