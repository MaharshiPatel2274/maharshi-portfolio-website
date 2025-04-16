
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ChessSection } from "@/components/ChessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        
        {/* Achievements Section - Now after Skills */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="glass-card p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-lg border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-medium text-xl mb-2">Dean's List</h3>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-lg border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-medium text-xl mb-2">Chess Championships</h3>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-lg border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-medium text-xl mb-2">Pan American Intercollegiate Tournament</h3>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        <ChessSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
