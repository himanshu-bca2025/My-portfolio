import { cn } from "@/lib/utils";

interface SkillChipProps {
  skill: string;
  index: number;
}

export default function SkillChip({ skill, index }: SkillChipProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-md border border-border bg-card text-sm transition-colors cursor-default hover:border-primary hover:bg-accent"
      )}
      data-testid={`skill-chip-${skill.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span className="text-muted-foreground hover:text-foreground transition-colors">
        {skill}
      </span>
    </div>
  );
}
