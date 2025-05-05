
import { Trophy, Cpu, Rocket } from "lucide-react";
import { ProjectItem } from "@/types/project";

interface ProjectExtendedDescriptionProps {
  extendedDescription: NonNullable<ProjectItem["extendedDescription"]>;
}

export function ProjectExtendedDescription({ extendedDescription }: ProjectExtendedDescriptionProps) {
  return (
    <div className="space-y-4">
      {extendedDescription.overview && (
        <div className="flex items-center gap-2 text-blue-500">
          <Trophy className="w-4 h-4" />
          <p className="text-sm font-medium">{extendedDescription.overview}</p>
        </div>
      )}
      
      {extendedDescription.achievement && (
        <p className="text-sm">{extendedDescription.achievement}</p>
      )}
      
      {extendedDescription.techStack && (
        <div className="flex items-start gap-2">
          <Cpu className="w-4 h-4 mt-1 text-purple-500" />
          <p className="text-sm"><span className="font-medium">Tech Stack:</span> {extendedDescription.techStack}</p>
        </div>
      )}
      
      {extendedDescription.features && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Core Features:</p>
          <ul className="text-sm space-y-1">
            {extendedDescription.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Rocket className="w-3 h-3 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {extendedDescription.impact && (
        <p className="text-sm font-medium text-green-500">
          ✨ {extendedDescription.impact}
        </p>
      )}
    </div>
  );
}
