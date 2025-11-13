export const personalInfo = {
  name: "Himanshu Lade",
  title: "Full-Stack Engineer & AI/ML Specialist",
  email: "himanshu.lade@hotmail.com",
  location: "Sydney, Australia",
  bio: "I don't just build, I architect solutions that scale, perform, and leverage cutting-edge AI. From rescuing mission-critical databases to boosting app performance by 88%, I deliver production-ready applications with a focus on CI/CD, AI/ML integration, and robust full-stack deployment.",
  avatar: "/avatar.jpg", // Add your photo to public/
};

export const socialLinks = {
  github: "https://github.com/Sharv619",
  linkedin: "https://linkedin.com/in/himanshu-lade",
  twitter: "https://twitter.com/himanshu_lade",
  email: "mailto:himanshu.lade@example.com",
};

export const experience = [
  {
    company: "Ask Jay Services",
    position: "Software Engineer (Contract)",
    duration: "May 2025 - Oct 2025",
    description: "• Flutter Marketplace Application: Architected and built a Flutter application from scratch with three user portals (Client, Subcontractor, Admin), implementing authentication and state management.\n\n• AWS Hands-on Experience: Gained 6 months of hands-on experience with AWS (EC2, S3, RDS) while working on the Ask Jay contract, provisioning infrastructure and managing deployments.\n\n• Mission-Critical Disaster Recovery: Led recovery following database failure, restoring 100% of application services by provisioning secure AWS EC2 infrastructure and MongoDB Atlas with zero data loss.\n\n• Performance Improvement: Achieved 88% performance improvement (25s → 3s load times) through optimization of Next.js application including server-side rendering and caching.\n\n• CI/CD Pipeline: Engineered a complete CI/CD pipeline using Docker and GitHub Actions for reliable one-command deployments.",
    link: "https://askjay.com.au",
  },
  {
    company: "Innovation Lab Lead & Applied Research",
    position: "Professional Development",
    duration: "Feb 2024 - May 2025",
    description: "• Pioneered AI/ML engineering & RAG architecture implementations, transforming theoretical concepts into deployable solutions.\n\n• Led the development of a portfolio of 6+ production-grade applications, demonstrating advanced proficiency in React, Next.js, Flutter, Gemini API, AWS, and Docker.\n\n• Mastered advanced state management patterns, CI/CD pipelines, and offline-first PWA architectures through hands-on development and experimentation.",
    link: "#",
  },
  {
    company: "ACS Australian Computer Society",
    position: "Cloud Engineering Intern",
    duration: "Sep 2023 - Feb 2024",
    description: "• Frontend Development: Contributed to a MERN + TypeScript platform for 10,000+ users, improving page load performance by 30% through React component optimization.\n\n• Security Remediation: Executed security testing based on OWASP Top 10 guidelines, implementing fixes that strengthened application security.\n\n• Agile Collaboration: Collaborated in an Agile team with senior engineers, QA, and stakeholders to deliver features on sprint schedules.",
    link: "https://www.acs.org.au",
  },
];

export const projects = [
  {
    title: "AI Career Co-Pilot (RAG Architecture)",
    description: "Built a Retrieval-Augmented Generation system embedding a 47-page knowledge base to provide contextually accurate career advice, with a real-time chat interface and Markdown export.",
    technologies: ["React", "TypeScript", "Gemini API", "RAG Architecture", "localStorage"],
    liveUrl: "https://ai-career-copilot.vercel.app",
    githubUrl: "https://github.com/Sharv619/ai-career-copilot",
  },
  {
    title: "Codeflow Hook (npm package)",
    description: "AI-Powered Code Analysis and Git Hook Management. A lightweight CLI tool that provides AI-driven code analysis, automated git hook installation, and intelligent code review capabilities using Gemini, OpenAI GPT, or Claude AI models.",
    technologies: ["Node.js", "TypeScript", "AI APIs", "Git Hooks", "CLI Tool"],
    liveUrl: "https://www.npmjs.com/package/codeflow-hook",
    githubUrl: "https://github.com/Sharv619/codeflow-hook",
  },
  {
    title: "Knowledge Management Pipeline & DevPath",
    description: "Created an automated pipeline transforming unstructured notes (PDF, Markdown) into interactive D3.js knowledge graphs, packaged as an offline-first PWA with XSS protection.",
    technologies: ["React", "TypeScript", "D3.js", "Gemini API", "PWA", "DOMPurify"],
    liveUrl: "https://devpath.vercel.app",
    githubUrl: "https://github.com/Sharv619/knowledge-management",
  },
];

export const skills = {
  languages: ["JS/TS", "Dart", "HTML/CSS"],
  frameworks: ["React / Next.js", "Flutter", "Node.js / Express.js", "Tailwind CSS", "Material-UI"],
  databases: ["MongoDB / Atlas", "RESTful APIs", "Authentication (JWT)", "SSR & Perf. Optimization"],
  cloud: ["AWS (EC2, S3)", "Docker", "CI/CD (GitHub Actions)", "Nginx & Security"],
  tools: ["Git / GitHub", "Agile/Scrum", "Technical Documentation", "Testing & Code Review"],
};

export const about = {
  title: "About Me",
  content: `Hello! I'm Himanshu, a software engineer with a background in cloud and frontend development. 
  My focus is on building practical, end-to-end applications, from architecture to deployment.
I love technology and have been deeply involved in self-directed learning in AI/ML engineering, RAG architectures, and modern DevOps practices. 
I've built a portfolio of production-ready applications, developing expertise in state management, CI/CD pipelines, and offline-first PWA architectures. 
I enjoy solving my own problems through automation - I run n8n workflows for personal automation and have Ollama running locally on my laptop for AI experimentation. I am seeking a role where I can apply this comprehensive skill set.`,
};
