import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  Mail,
  Linkedin,
  Github,
  Globe,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Next Play Games",
    date: "June 2026 - Present",
    bullets: [
      "Building cross-platform UI components in React Native and TypeScript for sports-themed mobile and web titles, wiring them to backend services on AWS EC2/RDS through RESTful API integrations.",
      "Reviewing and merging 5-10 GitHub pull requests per sprint with line-level inspection for defects and test coverage, helping deliver builds on schedule.",
    ],
  },
  {
    role: "Software Developer",
    company: "EdPlus at ASU",
    date: "May 2025 - May 2026",
    bullets: [
      "Built Unity-based VR asset-preparation automation in Python and C# that reduced a recurring multi-hour manual process to under 15 minutes, freeing the team to focus on building real-time educational simulations.",
      "Developed a Maya playblast automation tool in Python that renders multi-camera review views of 3D models in one click, cutting artists' per-shot setup and export time from ~15 minutes to under 30 seconds.",
      "Designed and built end-to-end CI/CD pipelines with GitHub Actions, automating build generation, test execution, and cross-platform deployment, cutting release cycles from days to hours.",
      "Refactored Unity build processes to reduce compile times and enable parallel iteration across 3 teams, removing a shared bottleneck that previously serialized their work.",
    ],
  },
  {
    role: "VR QA Engineer",
    company: "EdPlus at ASU",
    date: "August 2024 - May 2025",
    bullets: [
      "Built Python and JavaScript test-automation frameworks integrated with Jenkins/GitLab CI pipelines, replacing manual regression passes and expanding automated test coverage across VR simulation builds.",
      "Diagnosed and resolved VR interaction bugs across headset, sensor, and tracking modules in collaboration with developers, improving headset responsiveness and reducing tracking errors.",
    ],
  },
];

const projects = [
  {
    title: "Asset Metadata Manager",
    summary:
      "Electron desktop app for Unity asset indexing, preview generation, tagging, and Perforce-backed version control.",
  },
  {
    title: "PRiSM: AI-Powered Engineering Design Studio",
    summary:
      "Next.js platform that turns natural language prompts into real-time circuit simulations, CAD models, CFD analysis, and BOMs.",
  },
  {
    title: "COSMiQ: AI-Powered Orbital Debris Collector",
    summary:
      "Python system that ranks high-risk orbital debris using SGP4 propagation, distance, velocity, and time-to-intercept.",
  },
];

const skillGroups = [
  {
    label: "Languages",
    value: "Python, Java, C++, C#, JavaScript/TypeScript, SQL, Swift, Bash",
  },
  {
    label: "Web & Backend",
    value: "React, React Native, Next.js, Node.js, Express, REST APIs, Tailwind CSS",
  },
  {
    label: "Cloud & DevOps",
    value: "AWS, Docker, GitHub Actions, Jenkins, GitLab CI, Terraform",
  },
  {
    label: "Databases",
    value: "PostgreSQL, MongoDB, Firebase, Supabase",
  },
  {
    label: "Testing & Tools",
    value: "Selenium, Unity, Git, Jira, regression testing",
  },
];

const contactLinks = [
  {
    label: "mpate125@asu.edu",
    href: "mailto:mpate125@asu.edu",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    label: "linkedin.com/in/maharshi-patel1",
    href: "https://linkedin.com/in/maharshi-patel1",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "maharshi-patel.com",
    href: "https://maharshi-patel.com",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    label: "github.com/MaharshiPatel2274",
    href: "https://github.com/MaharshiPatel2274",
    icon: <Github className="h-4 w-4" />,
  },
];

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <main className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Button variant="outline" asChild>
            <a href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </a>
          </Button>
          <Button onClick={handlePrint}>
            <Download className="h-4 w-4" />
            Print / Save as PDF
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="surface mx-auto max-w-5xl p-6 md:p-10"
        >
          <SectionHeading
            eyebrow="Resume"
            title="Maharshi Niraj Patel"
            description="Software engineer focused on immersive technology, automation, full-stack development, and applied AI workflows."
            align="left"
            className="mb-8"
          />

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 print:text-sm">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-primary">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <ResumeSection title="Professional Experience">
                <div className="space-y-6">
                  {experiences.map((experience) => (
                    <article
                      key={`${experience.company}-${experience.role}`}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4 className="text-base font-semibold text-foreground">
                            {experience.role}
                          </h4>
                          <p className="text-sm text-primary">{experience.company}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                          <CalendarIcon />
                          {experience.date}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title="Technical Projects">
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.title} className="rounded-xl border border-border bg-card p-5">
                      <h4 className="text-base font-semibold text-foreground">
                        {project.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>
            </div>

            <div className="space-y-8">
              <ResumeSection title="Summary">
                <div className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                  I build systems that combine interactive UI, automation, and
                  AI-assisted workflows. My work spans VR tools, web apps, CI/CD
                  pipelines, and engineering software that removes repetitive manual
                  effort.
                </div>
              </ResumeSection>

              <ResumeSection title="Technical Skills">
                <div className="space-y-3">
                  {skillGroups.map((group) => (
                    <div key={group.label} className="rounded-xl border border-border bg-card p-4">
                      <p className="text-sm font-semibold text-foreground">
                        {group.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {group.value}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title="Education">
                <div className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                  <div className="flex items-start gap-2 text-foreground">
                    <GraduationCap className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold">Arizona State University</p>
                      <p>Bachelor of Science, Computer Science · GPA 4.0/4.0</p>
                      <p className="mt-1">August 2022 - May 2026</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-2 text-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                    <p>Campus involvement: Secretary of ASU Chess Club, Volunteer - SoDa, DevLabs</p>
                  </div>
                </div>
              </ResumeSection>

              <ResumeSection title="Certifications and Honors">
                <ul className="space-y-2 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                  <li>Microsoft Azure Essentials Professional Certificate · Microsoft & LinkedIn (2026)</li>
                  <li>Claude Code in Action · Anthropic (2026)</li>
                  <li>Dean&apos;s List (8 semesters) · Fall 2022 - Spring 2026</li>
                  <li>First Place, FSE 301 Entrepreneurship Course · Fall 2025</li>
                </ul>
              </ResumeSection>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function CalendarIcon() {
  return <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />;
}