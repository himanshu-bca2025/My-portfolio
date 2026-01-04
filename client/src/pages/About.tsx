import { Briefcase, GraduationCap, Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillChip from "@/components/ui/SkillChip";
import TimelineItem from "@/components/ui/TimelineItem";
import { skills, education, experience, certificates } from "@/data/projects";

export default function About() {
  return (
    <div className="min-h-screen pt-20" data-testid="page-about">
      <div className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-border bg-card flex items-center justify-center overflow-hidden">
              <img 
                src="/profile-photo.jpg" 
                alt="Himanshu Prakash" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Himanshu Prakash
          </h1>
          
          <div className="text-base md:text-lg text-muted-foreground mb-6">
            Cloud Enthusiast / Full-Stack Developer
          </div>

          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
            A passionate developer specializing in web development and cloud technologies. 
            I focus on building efficient, scalable, and user-friendly digital solutions 
            with clean code and modern best practices.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Skills"
            subtitle="Technologies I work with"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillChip key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey"
          />

          <div className="space-y-8">
            <div className="flex items-center gap-3 text-primary mb-8">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Work History</span>
            </div>
            
            {experience.map((exp, index) => (
              <TimelineItem
                key={exp.title}
                title={exp.title}
                subtitle={exp.company}
                year={exp.year}
                description={exp.description}
                isLeft={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Education"
            subtitle="Academic background"
          />

          <div className="space-y-8">
            <div className="flex items-center gap-3 text-primary mb-8">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Academic</span>
            </div>
            
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.degree}
                title={edu.degree}
                subtitle={edu.institution}
                year={edu.year}
                description={edu.description}
                isLeft={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Certificates"
            subtitle="Professional certifications and achievements"
          />

          <div className="space-y-8">
            <div className="flex items-center gap-3 text-primary mb-8">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Certifications</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
