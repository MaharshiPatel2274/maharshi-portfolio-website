import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { TypeWriter } from "./TypeWriter";
import { BlobBackground } from "./BlobBackground";

export function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 bg-background z-50"
      />
      
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
              <motion.div 
                className="text-2xl md:text-3xl font-semibold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TypeWriter text="Computer Science Student & Software Engineer" speed={50} />
              </motion.div>
              
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
              <BlobBackground />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
