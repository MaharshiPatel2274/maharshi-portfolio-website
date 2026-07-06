import { Trophy, Cpu, ListChecks, TrendingUp, Dot } from "lucide-react";
import { ProjectItem } from "@/types/project";

interface ProjectExtendedDescriptionProps {
  extendedDescription: NonNullable<ProjectItem["extendedDescription"]>;
}

export function ProjectExtendedDescription({
  extendedDescription,
}: ProjectExtendedDescriptionProps) {
  const { overview, achievement, techStack, features, impact } =
    extendedDescription;

  return (
    <div className="space-y-6">
      {overview && (
        <div className="flex items-center gap-2 text-primary">
          <Trophy className="w-4 h-4 shrink-0" />
          <p className="text-sm font-medium">{overview}</p>
        </div>
      )}

      {achievement && (
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {achievement}
        </p>
      )}

      {features && features.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3 text-foreground">
            <ListChecks className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-semibold">Core features</h4>
          </div>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <Dot className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {techStack && (
        <div>
          <div className="flex items-center gap-2 mb-2 text-foreground">
            <Cpu className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-semibold">Tech stack</h4>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {techStack}
          </p>
        </div>
      )}

      {impact && (
        <div className="flex items-start gap-2 rounded-lg border border-border bg-secondary/40 p-3">
          <TrendingUp className="w-4 h-4 shrink-0 mt-0.5 text-success" />
          <p className="text-sm font-medium text-foreground">{impact}</p>
        </div>
      )}
    </div>
  );
}
