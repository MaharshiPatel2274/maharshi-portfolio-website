import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { TypeWriter } from "./TypeWriter";

// Place the file at public/MaharshiPatel_Resume.pdf
const RESUME_URL = "/MaharshiPatel_Resume.pdf";

const roles = [
  "Full-Stack Developer",
  "VR Automation & QA Engineer",
  "AI / Mobile Developer",
  "India National Chess Champion, 2017",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Open to new-grad Software Engineer roles
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-sm font-medium text-primary"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance"
          >
            Maharshi Niraj Patel
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-muted-foreground text-balance"
          >
            I build software that blends
            <br className="hidden sm:block" /> engineering with experience.
          </motion.h2>

          <motion.div
            variants={item}
            className="mt-5 font-mono text-sm sm:text-base text-muted-foreground"
          >
            <span className="text-primary/80">&gt;</span>{" "}
            <TypeWriter texts={roles} speed={55} delayAfterPhrase={2200} />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            I&apos;m a software engineer and recent Computer Science graduate who
            works at the intersection of immersive technology, automation, and
            full-stack development. I&apos;ve led QA for advanced VR applications,
            built tooling that streamlines real workflows, and shipped web and
            mobile apps end to end.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#projects">View my work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                Résumé
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/MaharshiPatel2274"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maharshi-patel1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about-me"
        aria-label="Scroll to about section"
        className="absolute left-1/2 bottom-8 -translate-x-1/2 text-muted-foreground/60 hover:text-foreground transition-colors hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <ArrowDown className="w-5 h-5 animate-bounce [animation-duration:2.5s]" />
      </motion.a>
    </section>
  );
}
