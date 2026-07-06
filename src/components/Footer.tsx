import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  {
    href: "https://github.com/MaharshiPatel2274",
    label: "GitHub",
    icon: <Github className="w-4 h-4" />,
  },
  {
    href: "https://www.linkedin.com/in/maharshi-patel1/",
    label: "LinkedIn",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    href: "mailto:mpate125@asu.edu",
    label: "Email",
    icon: <Mail className="w-4 h-4" />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Maharshi Niraj Patel.</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground/70">
              Designed &amp; built with React, TypeScript &amp; Tailwind.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {social.icon}
              </a>
            ))}
            <a
              href="#"
              aria-label="Back to top"
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
