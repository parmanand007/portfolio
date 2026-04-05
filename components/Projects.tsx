"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 w-full max-w-6xl scroll-mt-28">
        <SectionHeading>My Projects</SectionHeading>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-8 text-slate-600 dark:text-slate-300">
          A few selected builds that reflect how I approach backend systems:
          performance, product usability, and infrastructure that can support
          real users instead of just demo traffic.
        </p>
        <div className="grid gap-6">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
  );
};


export default Projects;
