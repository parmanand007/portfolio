"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref}=useSectionInView("About",0.75);
  return (
    <motion.section
    ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }} 
      id="about"
    >
      <SectionHeading>About me</SectionHeading> 
      <p className="mb-3">
        After post-graduating with a degree in{" "}
        <span className="font-medium">Master of Computer Applications</span>, I decided to pursue my
        passion for web development and mobile app development. I created multiple projects and learned{" "}
        <span className="font-medium"> web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Django, Python, GraphQL, Postgresql
        </span>
        . I am also familiar with tech like Flutter, React, Next.js, JavaScript, and MongoDB,Appwrite and Prisma and used tools like Docker, Jenkins, Graylog & Redash. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies & animes. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Dev Ops role and their tools</span>. I always  work on small projects of different tech in free time.
      </p>
    </motion.section>
  );
}