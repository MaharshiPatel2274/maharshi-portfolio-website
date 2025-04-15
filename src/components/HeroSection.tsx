
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen relative flex items-center pt-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <motion.span 
              className="inline-block text-primary font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Maharshi Niraj Patel
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold tech-gradient-text mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science Student & Software Engineer
            </motion.h2>
            <motion.p 
              className="text-foreground/80 text-lg mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I specialize in VR testing, automation, and software development. Currently pursuing my B.S. in Computer Science at Arizona State University (expected May 2026), with a passion for creating innovative solutions through technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button asChild>
                <a href="#experience">View Experience</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">Explore Projects</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="mailto:contact@example.com" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+1234567890" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Animated background shapes */}
              <div className="absolute top-0 left-0 w-full h-full">
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-full h-full rounded-full bg-primary/10"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full rounded-full bg-secondary/10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0] 
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute top-1/3 left-1/3 w-2/3 h-2/3 rounded-full bg-accent/10"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, 0] 
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              
              {/* Placeholder for profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">MNP</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="font-semibold text-xl mb-4">Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-card px-4 py-3 rounded-lg">
              <p className="font-medium">Dean's List</p>
            </div>
            <div className="glass-card px-4 py-3 rounded-lg">
              <p className="font-medium">Chess Championships</p>
            </div>
            <div className="glass-card px-4 py-3 rounded-lg">
              <p className="font-medium">Pan American Intercollegiate Tournament</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1.2, 
          duration: 1.5,
          repeat: Infinity
        }}
      >
        <a href="#experience" className="text-foreground/50 hover:text-foreground transition-colors">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-foreground/50 flex justify-center">
              <motion.div 
                className="w-1 h-1 bg-foreground/50 rounded-full mt-1"
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
