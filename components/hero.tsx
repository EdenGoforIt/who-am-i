"use client";

import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }
  }
};

export default function Hero(): React.JSX.Element {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-[150px] max-w-[1600px] mx-auto pt-[100px]"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
        <motion.p variants={item} className="font-mono text-base mb-5 text-green">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-semibold leading-tight mb-2 text-[clamp(40px,8vw,80px)] text-slate-lighter"
        >
          Eden Park
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-semibold leading-tight mb-6 text-[clamp(28px,6vw,60px)] text-slate"
        >
          I build thoughtful, production-ready software.
        </motion.h2>

        <motion.p variants={item} className="max-w-xl mb-10 leading-relaxed text-slate text-lg">
          I&apos;m a software engineer specializing in full-stack web development. I design and
          build fast, accessible, and polished digital products — from idea to production.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a href="/projects" className="btn-primary">
            View My Work
          </a>
          <a href="/contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
