
import { motion } from "framer-motion";
import { Avatar } from "./ui/avatar";

export function AboutSection() {
  return (
    <section className="py-20 bg-background/50">
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
              src="/lovable-uploads/e20f99cf-8f34-4f36-ac44-59e1b164a765.png"
              alt="Maharshi at sunset"
              className="object-cover w-full h-full rounded-xl"
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
              Hi, I'm Maharshi — a VR enthusiast, software engineer, and student at ASU passionate about blending immersive tech with innovative software.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
