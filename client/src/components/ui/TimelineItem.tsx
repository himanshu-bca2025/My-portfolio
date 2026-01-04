interface TimelineItemProps {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  isLeft?: boolean;
}

export default function TimelineItem({
  title,
  subtitle,
  year,
  description,
  isLeft = false,
}: TimelineItemProps) {
  return (
    <div
      className={`flex items-center gap-8 ${isLeft ? "flex-row-reverse" : ""}`}
      data-testid={`timeline-item-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : ""}`}>
        <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30 mb-3">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-primary mb-2">{subtitle}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-primary border-2 border-background" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-24 bg-border" />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}
