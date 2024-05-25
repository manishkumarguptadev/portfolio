import issuetracker from "@/public/issuetracker.png";
import propertyrental from "@/public/propertyrental.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "Property Rental",
    description:
      "A public web app for registering properties and finding the perfect rental property.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: propertyrental,
    href: "https://property-rental.manishkumargupta.dev/",
  },
  {
    title: "Issue Tracker",
    description:
      "An issue tracking system for submitting and assigning issues and tracking their status.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "PostgreSQL"],
    imageUrl: issuetracker,
    href: "https://issue-tracker.manishkumargupta.dev/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Shadcn/ui",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Redux Toolkit",
  "React Query",
  "React Hook Form",
  "Framer Motion",
];
