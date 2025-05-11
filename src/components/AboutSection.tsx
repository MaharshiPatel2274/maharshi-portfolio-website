
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
              alt="Maharshi at night with holiday lights"
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
              Hi, I'm Maharshi Niraj Patel — a computer science student, immersive tech enthusiast, and problem-solver with a passion for building human-centered experiences. Whether I'm leading QA for cutting-edge VR simulations, engineering tools that enhance user interaction, or developing intelligent systems with real-world impact, I bring curiosity, creativity, and a drive to learn into every project. From designing accessible platforms to automating workflows with AI, I'm always exploring ways to bridge technology and thoughtful design. Welcome to my portfolio — a collection of what I've built, learned, and loved working on.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
