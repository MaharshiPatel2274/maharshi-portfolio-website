
import { motion } from "framer-motion";

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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
              {/* Placeholder for photo */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Photo coming soon
              </div>
            </div>
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
