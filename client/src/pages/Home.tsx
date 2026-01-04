import { Link } from "wouter";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen" data-testid="page-home">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
          <Code className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Full-Stack Developer & Cloud Enthusiast
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
          data-testid="hero-title"
        >
          Himanshu Prakash
        </h1>

        <p
          className="max-w-2xl text-base md:text-lg text-muted-foreground mb-12 leading-relaxed"
          data-testid="hero-subtitle"
        >
          Passionate developer specializing in web development, cloud technologies, and creating efficient digital solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-6 text-base"
              data-testid="cta-projects"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-accent px-8 py-6 text-base"
              data-testid="cta-contact"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
