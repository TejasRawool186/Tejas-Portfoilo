import {
  Binary,
  Blocks,
  BookOpenText,
  Bot,
  BrainCircuit,
  FolderGit2,
  Github,
  Globe,
  Layers3,
  LucideIcon,
  PenTool,
  Rocket,
  ServerCog,
  Sparkles,
  Wrench,
} from "lucide-react";

export type Stat = {
  label: string;
  value: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  demo?: string;
  actor?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type Article = {
  title: string;
  href: string;
  publication: string;
};

export const navItems = [
  "About",
  "Skills",
  "Projects",
  "Journey",
  "Open Source",
  "Writing",
  "Contact",
];

export const trustStats: Stat[] = [
  { label: "Projects Built", value: "18+" },
  { label: "Hackathons", value: "7" },
  { label: "Technologies", value: "20+" },
  { label: "GitHub Contributions", value: "450+" },
];

export const focusAreas = [
  { label: "AI Applications", icon: Bot },
  { label: "Machine Learning Systems", icon: BrainCircuit },
  { label: "Developer Tools", icon: Wrench },
  { label: "Full Stack Web Apps", icon: Globe },
];

export const skillCategories: SkillCategory[] = [
  { title: "Frontend", icon: Layers3, skills: ["React", "Next.js", "HTML", "CSS", "Tailwind"] },
  { title: "Backend", icon: ServerCog, skills: ["Node.js", "Flask", "Express"] },
  { title: "Programming", icon: Binary, skills: ["Python", "JavaScript", "TypeScript"] },
  { title: "AI / ML", icon: BrainCircuit, skills: ["Scikit-learn", "Pandas", "NumPy", "Machine Learning"] },
  { title: "Tools", icon: Blocks, skills: ["Git", "Docker", "MongoDB", "SQLite"] },
];

export const projects: Project[] = [
  {
    title: "AI-Based Resume Screening and Candidate Ranking System",
    description:
      "AI-powered resume screening and ranking system built with Streamlit, NLP, and cosine similarity. It extracts, preprocesses, and ranks PDF resumes against job descriptions, then presents the results in a structured and visualized ranking workflow.",
    stack: ["Streamlit", "Python", "NLP"],
    github:
      "https://github.com/TejasRawool186/AI-Based-Resume-Screening-and-Candidate-Ranking-System",
    live: "https://ai-based-resume-screening.streamlit.app/",
  },
  {
    title: "Data Insight Viewer",
    description:
      "Data Insight Viewer is an interactive and AI-augmented Streamlit application that lets users upload CSV or Excel files and explore datasets through automatic summarization, visualizations, and lightweight NLP-assisted analysis.",
    stack: ["Python", "Streamlit", "Data Visualization"],
    github: "https://github.com/TejasRawool186/data-insight-viewer",
    live: "https://insightviewer.streamlit.app/",
  },
  {
    title: "YTDownloadX",
    description:
      "YTDownloadX is a modern, high-performance YouTube video and audio downloader with a polished UI, particle animations, and glass-style effects. Built with Flask and yt-dlp, it focuses on a fast and seamless media download experience.",
    stack: ["Python", "Media Processing", "Desktop UI"],
    github: "https://github.com/TejasRawool186/Youtube_video_downloader",
    live: "https://ytdownloadx.curiositybytejas.cloud/",
    demo: "https://youtu.be/oyjuRt3NIJU",
  },
  {
    title: "NutraLingo",
    description:
      "NutraLingo is a progressive web app that scans foreign-language food labels and translates ingredient risks into clear health insights based on a user's personal profile. It combines image processing, localization, and AI-assisted analysis into one usable flow.",
    stack: ["Next.js", "AI", "OCR"],
    github: "https://github.com/TejasRawool186/Nutra-Lingo",
    live: "https://nutra-lingo.vercel.app/",
    demo: "https://youtu.be/UrWymYM3UTY",
  },
  {
    title: "FlowTalk",
    description:
      "FlowTalk is a real-time multilingual chat platform that removes language barriers through AI translation. People communicate naturally in their preferred language while messages are translated instantly for everyone else in the conversation.",
    stack: ["Next.js", "Realtime", "Translation AI"],
    github: "https://github.com/TejasRawool186/FlowTalk",
    live: "https://flowtalk-alpha.vercel.app/",
  },
  {
    title: "GitHub README Globalizer",
    description:
      "This Apify Actor fetches markdown documentation from any GitHub repository, translates it into chosen languages using Lingo.dev AI, and returns commit-ready files while preserving formatting for developer workflows.",
    stack: ["Developer Tooling", "AI", "Localization"],
    github: "https://github.com/TejasRawool186/GitHub-README-Globalizer",
    actor: "https://apify.com/lenient_grove/github-repository-health-analyzer",
  },
];

export const journey: TimelineItem[] = [
  { year: "2023", title: "Started Programming", description: "Built programming foundations and began solving practical problems with code." },
  { year: "2024", title: "Built ML Projects", description: "Shifted from experimentation to end-to-end machine learning systems." },
  { year: "2025", title: "Built AI tools and developer platforms", description: "Started shipping products with clearer UX, automation, and real-world use cases." },
  { year: "2026", title: "Open source and product development", description: "Focused on public work, stronger engineering quality, and recruiter-ready execution." },
];

export const articles: Article[] = [
  {
    title:
      "Breaking Language Barriers: Building a Real-Time Multilingual Chat App with Next.js & Lingo.Dev",
    href: "https://dev.to/tejasrawool186/breaking-language-barriers-building-a-real-time-multilingual-chat-app-with-nextjs-lingodev-4n9l",
    publication: "Dev.to",
  },
  {
    title:
      "How I Built NutraLingo - An AI-Powered Food Label Scanner That Translates & Analyzes Ingredients in Real-Time",
    href: "https://hashnode.com/edit/cmlyrgenj007t27lvawgngnwy",
    publication: "Hashnode",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "tejasrawool.dev@gmail.com", href: "mailto:tejasrawool.dev@gmail.com" },
  { label: "GitHub", value: "github.com/TejasRawool186", href: "https://github.com/TejasRawool186/" },
  { label: "LinkedIn", value: "linkedin.com/in/tejasrawool186", href: "https://www.linkedin.com/in/tejasrawool186/" },
  { label: "Twitter / X", value: "x.com/TejasRawool186", href: "https://x.com/TejasRawool186" },
  { label: "Reddit", value: "reddit.com/user/Competitive-Fun-6252", href: "https://www.reddit.com/user/Competitive-Fun-6252/" },
];

export const heroBadge = "Available for internships, open source, and AI product builds";
export const identityStatement =
  "I build practical AI products and developer tools that turn complex ideas into usable systems.";

export const openSourceSummary = {
  title: "Open-source activity as a signal of shipping discipline.",
  description:
    "Public repositories, collaboration, and steady commits show how ideas move from prototype to maintained product work.",
  profile: "https://github.com/TejasRawool186/",
};

export const writingIntro = {
  title: "Writing as a way to explain systems, not just announce them.",
  description:
    "The strongest portfolio pieces are backed by technical clarity. These articles show how Tejas turns implementation decisions into readable engineering stories.",
  icon: BookOpenText,
};

export const footerSummary = {
  title: "Ready to build sharp, useful software.",
  description:
    "Open to internships, collaborations, and product ideas that need thoughtful engineering and a strong interface point of view.",
};

export const aboutIcon = PenTool;
