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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 text-left shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/8 dark:bg-white/4">
          <p className="mb-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            I specialize in backend engineering with a practical product mindset.
            Over 4 years I&apos;ve worked across healthcare, insurance, and
            e-commerce — building APIs, admin workflows, payment integrations,
            and multitenant systems that teams can actually operate and scale.
          </p>
          <p className="mb-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Core stack:{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Python, Django, Node.js, PostgreSQL, Redis, and REST APIs.
            </span>{" "}
            Comfortable with React, Next.js, MongoDB, Docker, AWS, Celery,
            Stripe, and AI tooling like LangChain when the problem needs it.
          </p>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            I care most about clean architecture, reliable delivery, and making
            complex systems feel simpler. Right now I&apos;m focused on
            backend-heavy roles where I can keep shipping high-impact products
            alongside a strong engineering team.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/30 bg-gradient-to-br from-violet-600 to-indigo-700 p-6 text-left text-white shadow-xl shadow-violet-900/20">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
              Currently · Remote
            </p>
            <p className="font-display text-2xl font-bold">Full Stack Developer</p>
            <p className="mt-1 text-sm font-semibold text-violet-200">
              Aura Technologies
            </p>
            <p className="mt-3 text-sm leading-6 text-violet-100/80">
              Building multi-tenant B2B/B2C insurance platform. Backend architecture, React dashboards, team leadership.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 text-left shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/8 dark:bg-white/4">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-400">
              Based In
            </p>
            <p className="font-display text-2xl font-bold text-slate-950 dark:text-white">
              Lucknow, India
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Open to remote opportunities and product teams that value strong
              full-stack ownership.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
