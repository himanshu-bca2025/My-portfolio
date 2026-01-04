import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={cn("mb-12", alignmentClasses[align], className)}
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
        data-testid={`section-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center gap-4 justify-center">
        <div className="h-px w-12 bg-border" />
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="h-px w-12 bg-border" />
      </div>
    </div>
  );
}
