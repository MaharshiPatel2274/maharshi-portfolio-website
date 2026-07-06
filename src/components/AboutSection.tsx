import { motion } from "framer-motion";
import { MapPin, GraduationCap, Compass } from "lucide-react";

const facts = [
  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Tempe, Arizona" },
  { icon: <GraduationCap className="w-3.5 h-3.5" />, label: "B.S. Computer Science · ASU" },
  { icon: <Compass className="w-3.5 h-3.5" />, label: "VR · Full-Stack · AI" },
];

export function AboutSection() {
  return (
    <section id="about-me" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src="/lovable-uploads/85b72fe2-b699-4d47-a712-11755bc4f45a.png"
                alt="Maharshi Niraj Patel"
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">
              <span className="h-px w-6 bg-primary/50" aria-hidden />
              About
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              A bit about me
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>
                I&apos;m Maharshi Niraj Patel, a software engineer and recent
                Computer Science graduate driven by immersive technology,
                intelligent automation, and user-focused software design. I work
                at the intersection of engineering and experience &mdash; building
                systems that blend functionality with usability.
              </p>
              <p>
                I&apos;ve led QA efforts for advanced VR applications, engineered
                automation tools to streamline digital workflows, and developed
                scalable solutions that solve real-world problems. This portfolio
                reflects the tools I&apos;ve built, the platforms I&apos;ve
                optimized, and the technologies I continue to explore.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {facts.map((fact) => (
                <span
                  key={fact.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  <span className="text-primary">{fact.icon}</span>
                  {fact.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
