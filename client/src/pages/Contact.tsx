import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/forms/ContactForm";
import { socialLinks } from "@/data/projects";

export default function Contact() {
  return (
    <div className="relative min-h-screen pt-20" data-testid="page-contact">
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Get In Touch"
            subtitle="Have a project in mind? Let's work together"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-8">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    data-testid="contact-email"
                  >
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{socialLinks.email}</span>
                  </a>

                  <a
                    href={`tel:${socialLinks.phone?.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    data-testid="contact-phone"
                  >
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{socialLinks.phone}</span>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Available Worldwide</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Social Links
                </h3>
                
                <div className="flex gap-4">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-md border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    data-testid="social-github"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-md border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    data-testid="social-linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, 
                  or opportunities to be part of your visions. Feel free to reach 
                  out and let's create something amazing together!
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-lg mb-6 text-foreground">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
