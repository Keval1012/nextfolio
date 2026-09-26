"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Check,
  Copy,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 md:pt-32 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Experience Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SOFTWARE ENGINEER · {portfolioData.personal.yearsOfExperience} YEARS EXPERIENCE</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]"
            >
              Building <span className="text-gradient">scalable software</span> and thoughtful digital experiences.
            </motion.h1>

            {/* Subtext introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed"
            >
              {portfolioData.personal.shortIntro}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
              >
                <span>Let&apos;s Connect</span>
              </Link>
            </motion.div>

            {/* Social Links & Direct Copy Email */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-600 dark:text-zinc-400"
            >
              <span className="font-semibold text-zinc-500 uppercase tracking-wider text-[11px]">Connect:</span>

              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-zinc-400 dark:text-zinc-700">/</span>

              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-zinc-400 dark:text-zinc-700">/</span>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Copy Email</span>
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Developer Visual Terminal Card (Right 5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/80 p-5 sm:p-6 shadow-2xl backdrop-blur-xl"
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800/80 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                  <span>keval@workstation:~</span>
                </div>
                <div className="text-[10px] text-zinc-400">node v22</div>
              </div>

              {/* Terminal body */}
              <div className="mt-4 font-mono text-xs sm:text-[13px] space-y-3 leading-relaxed">
                <div>
                  <span className="text-cyan-600 dark:text-cyan-400">$ </span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-semibold">whoami</span>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400 pl-4 border-l-2 border-cyan-500/30">
                    &quot;{portfolioData.personal.name}&quot; &mdash; {portfolioData.personal.role}
                  </p>
                </div>

                <div>
                  <span className="text-cyan-600 dark:text-cyan-400">$ </span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-semibold">cat tech-stack.json</span>
                  <div className="mt-1 text-zinc-600 dark:text-zinc-400 pl-4 border-l-2 border-indigo-500/30">
                    <pre className="text-[11px] sm:text-xs text-zinc-700 dark:text-zinc-300">
{`{
  "stack": "MERN / Next.js",
  "focus": ["Scalable APIs", "High-Perf UI"],
  "location": "${portfolioData.personal.location}",
  "experience": "${portfolioData.personal.yearsOfExperience} Years",
  "status": "Available"
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <span className="text-cyan-600 dark:text-cyan-400">$ </span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-semibold">git status</span>
                  <p className="mt-1 text-emerald-600 dark:text-emerald-400 pl-4 border-l-2 border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Clean working tree. Ready for deployment.
                  </p>
                </div>
              </div>

              {/* Quick Spec Pills */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-base font-bold text-cyan-600 dark:text-cyan-400">
                    {portfolioData.personal.stats.yearsExperience}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Experience</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                    {portfolioData.personal.stats.projectsBuilt}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Projects</div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                    {portfolioData.personal.stats.uptimeCommitment}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Reliability</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-16 flex justify-center">
          <Link
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-zinc-400 dark:text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <span>EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
