import { useState, useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const categoryColors: Record<string, string> = {
    web: "bg-primary/10 text-primary border-primary/30",
    "3d": "bg-secondary/10 text-secondary border-secondary/30",
    experimental: "bg-accent/10 text-accent border-accent/30",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative group rounded-md border border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300",
        isHovered && "border-primary/40 shadow-lg"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="View"
      data-testid={`project-card-${project.id}`}
    >
      <div className="relative h-48 overflow-hidden rounded-t-md bg-gradient-to-br from-muted/20 via-muted/10 to-transparent">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-serif font-bold text-primary/20">
            {project.title.charAt(0)}
          </span>
        </div>
        
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
        
        <div
          className={cn(
            "absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {project.liveUrl && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
              onClick={(e) => {
                e.stopPropagation();
                if (project.liveUrl) {
                  window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                }
              }}
              data-testid={`project-live-${project.id}`}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Live
            </Button>
          )}
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
              onClick={(e) => {
                e.stopPropagation();
                if (project.githubUrl) {
                  window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                }
              }}
              data-testid={`project-github-${project.id}`}
            >
              <Github className="w-3 h-3 mr-1" />
              Code
            </Button>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Badge
            variant="outline"
            className={cn("text-xs", categoryColors[project.category])}
          >
            {project.category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-between text-muted-foreground hover:text-primary"
          onClick={() => onViewDetails(project)}
          data-testid={`project-details-${project.id}`}
        >
          View Details
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
