
import { useTheme } from "./ThemeProvider";
import { Code, Heart } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Maharshi Niraj Patel. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-foreground/70 text-sm flex items-center gap-2">
              <Heart className="w-3 h-3 text-red-500" />
              <span className="tech-gradient-text font-medium">Creating digital experiences with passion</span>
              <Code className="w-3 h-3 text-blue-500" />
            </div>
            <span className="text-foreground/30 hidden md:inline">•</span>
            <p className="text-foreground/70 text-sm flex items-center">
              <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                theme === 'dark' ? 'bg-primary' : 'bg-secondary'
              }`}></span>
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
