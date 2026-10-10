"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="my-20 hidden h-20 w-[2px] origin-top rounded-full bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent sm:block"
    />
  );
};

export default SectionDivider;
