export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" data-testid="hero-scene">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
    </div>
  );
}
