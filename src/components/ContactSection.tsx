
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Contact Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Feel free to reach out for collaboration opportunities, questions about my projects,
            or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@example.com" 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-foreground/70">mpate125@asu.edu</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-foreground/70">+1 (714) 872-7865</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-foreground/70">https://www.linkedin.com/in/maharshi-patel1/</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-foreground/70">github.com/MaharshiPatel2274</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 rounded-md border border-border bg-background/50"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 rounded-md border border-border bg-background/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 rounded-md border border-border bg-background/50"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
