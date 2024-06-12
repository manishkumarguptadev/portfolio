import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import prisma from "@/prisma/client";
import { Skills as SkillsType } from "@prisma/client";

async function Home() {
  const skills = (await prisma.skills.findFirst()) as SkillsType;
  const projects = await prisma.project.findMany();
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills.devSkills} />
      <Contact />
    </main>
  );
}

export default Home;
