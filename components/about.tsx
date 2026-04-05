"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[2rem] border border-white/60 bg-white/75 p-8 text-left shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="mb-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            I specialize in backend engineering with a practical product mindset.
            Over the last few years I&apos;ve worked across healthcare and
            e-commerce, building APIs, admin workflows, payment integrations,
            and multitenant systems that teams can actually operate and scale.
          </p>
          <p className="mb-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            My core stack is <span className="font-semibold text-slate-900 dark:text-white">Python, Django, Node, PostgreSQL, Redis, and REST APIs</span>.
            I also work comfortably with React, Next.js, MongoDB, Docker, AWS,
            Stripe, and emerging AI tooling like LangChain when the problem
            needs it.
          </p>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            I care most about clean architecture, reliable delivery, and making
            complex systems feel simpler for the people using them. Right now
            I&apos;m looking for backend-focused roles where I can keep shipping
            high-impact products with strong engineering fundamentals.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-left text-white shadow-xl shadow-slate-900/15">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Currently ( Remote)
            </p>
            <p className="text-2xl font-bold">Backend Developer</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Building healthcare SaaS systems, internal tooling, and
              performance-focused APIs.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/75 p-6 text-left shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300">
              Based In
            </p>
            <p className="text-2xl font-bold text-slate-950 dark:text-white">
              Lucknow, India
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Open to  opportunities and product teams that value strong
              fullstack ownership.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
