import { X, ExternalLink, Github, Check, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="project-modal"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card border-b border-border">
          <h2 className="text-xl font-bold text-foreground">
            {project.title}
          </h2>
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            data-testid="modal-close"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative h-48 bg-gradient-to-br from-muted/20 via-muted/10 to-transparent flex items-center justify-center">
          <span className="text-6xl font-bold text-primary/20">
            {project.title.charAt(0)}
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/50">
              {project.role}
            </Badge>
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/50">
              {project.category}
            </Badge>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">About</h3>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-sm bg-muted border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            {project.liveUrl && (
              <Button
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.liveUrl) {
                    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                data-testid="modal-live-link"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </Button>
            )}
            {project.id === "student-dbms" && (
              <Button
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("/projects/student_database_management_system.c", "_blank", "noopener,noreferrer");
                }}
                data-testid="modal-source-link"
              >
                <Code className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="flex-1 border-border text-foreground hover:bg-accent"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.githubUrl) {
                    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                  }
                }}
                data-testid="modal-github-link"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
