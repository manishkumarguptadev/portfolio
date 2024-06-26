"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { Project as ProjectType } from "@prisma/client";

export default function Projects({ projects }: { projects: ProjectType[] }) {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
