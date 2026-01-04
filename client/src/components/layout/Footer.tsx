import { Link } from "wouter";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { socialLinks } from "@/data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-muted/30" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="font-bold text-xl text-foreground">HP</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building efficient and scalable digital solutions with modern web technologies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  data-testid={`footer-link-${link.toLowerCase()}`}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                data-testid="footer-github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Himanshu Prakash. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
