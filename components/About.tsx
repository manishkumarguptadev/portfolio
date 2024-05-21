"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Applications</span>, I decided to
        pursue my passion for programming. I self-taught myself{" "}
        <span className="font-medium">frontend web development</span>. My core
        competencies are <span className="font-medium">React and Next.js</span>.
        I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. I am always looking to learn new
        technologies. <span className="italic">When I'm not coding</span>, I
        enjoy spending time with my family.
      </p>

      <p>
        I am currently looking to{" "}
        <span className="font-medium">kickstart my career</span> as an intern or
        a junior frontend developer.
      </p>
    </motion.section>
  );
}
