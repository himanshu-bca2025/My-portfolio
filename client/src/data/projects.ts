export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "web" | "3d" | "experimental" | "all";
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  features: string[];
  role: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  file?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects, skills, and achievements.",
    longDescription: "A professional portfolio website built with React and TypeScript, featuring a clean design, responsive layout, and smooth user experience. Includes sections for projects, skills, education, experience, and certificates.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
    category: "web",
    liveUrl: "https://himanshu-portfolio.vercel.app",
    githubUrl: "https://github.com/himanshu-bca2025/My-portfolio",
    imageUrl: "/placeholder-project.jpg",
    features: ["Responsive design", "Modern UI", "Fast performance", "SEO optimized"],
    role: "Full-Stack Developer"
  },
  {
    id: "web-app",
    title: "Web Application Project",
    description: "Full-stack web application with user authentication and data management.",
    longDescription: "A comprehensive web application built with React and Node.js, featuring user authentication, CRUD operations, and responsive design. Demonstrates proficiency in modern web development practices.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "web",
    liveUrl: "https://example.com/web-app",
    githubUrl: "https://github.com/himanshu-bca2025/web-app",
    imageUrl: "/placeholder-project.jpg",
    features: ["User authentication", "CRUD operations", "RESTful API", "Database integration"],
    role: "Full-Stack Developer"
  },
  {
    id: "student-dbms",
    title: "Student Database Management System",
    description: "Complete C program for managing student records with CRUD operations and file persistence.",
    longDescription: "A comprehensive Student Database Management System built in C programming. Features include adding new student records, editing existing records, deleting records, updating student information, and saving data to file. The system uses file handling for data persistence and includes input validation and error handling.",
    techStack: ["C Programming", "File Handling", "Data Structures", "CRUD Operations"],
    category: "experimental",
    liveUrl: "",
    githubUrl: "https://github.com/himanshu-bca2025/C---Programs",
    imageUrl: "/placeholder-project.jpg",
    features: ["Add Student Records", "Edit Student Information", "Delete Records", "Update Student Data", "Save to File", "Load from File", "Search Functionality", "Input Validation"],
    role: "Software Developer"
  }
];

export const skills = [
  "HTML", "CSS", "JavaScript", "C Programming", "React", "Node.js", 
  "Express", "MongoDB", "Git & GitHub", "LibreOffice", "Web Development",
  "Cloud Computing", "Responsive Design", "UI/UX Design"
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University/College",
    year: "2022 - 2025",
    description: "Pursuing Bachelor's degree in Computer Applications with focus on programming, web development, and software engineering fundamentals."
  }
];

export const experience = [
  {
    title: "Web Developer",
    company: "Freelance",
    year: "2023 - Present",
    description: "Developing responsive web applications and portfolios using modern technologies like React, Node.js, and cloud platforms. Creating efficient and user-friendly digital solutions."
  },
  {
    title: "Student Developer",
    company: "Academic Projects",
    year: "2022 - Present",
    description: "Working on various academic and personal projects to enhance programming skills and gain practical experience in full-stack development."
  }
];

export const certificates = [
  {
    id: "ethical-hacking",
    name: "Ethical Hacking Certificate",
    issuer: "Certification Authority",
    file: "/certificates/himanshu-ethical-certificate.jpg"
  },
  {
    id: "c-programming",
    name: "C Programming Certificate",
    issuer: "Certification Authority",
    file: "/certificates/HIMANSHU-Certificate-C.pdf"
  },
  {
    id: "html",
    name: "HTML Certificate",
    issuer: "Certification Authority",
    file: "/certificates/HIMANSHU-Certificate-HTML.pdf"
  },
  {
    id: "javascript",
    name: "JavaScript Certificate",
    issuer: "Certification Authority",
    file: "/certificates/HIMANSHU-Certificate-JS.pdf"
  },
  {
    id: "libreoffice",
    name: "LibreOffice Certificate",
    issuer: "Certification Authority",
    file: "/certificates/HIMANSHU-Certificate-Libra-Office.pdf"
  }
];

export const socialLinks = {
  email: "himanshuking671@gmail.com",
  phone: "+91-9508729728",
  github: "https://github.com/himanshu-bca2025/My-portfolio",
  linkedin: "https://www.linkedin.com/in/himanshu-bca2025"
};
