"use client";

import { SectionHeading } from "@/components/common/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Shield,
  Zap,
  Sparkles,
  CheckCircle2,
  Cpu,
  Workflow,
} from "lucide-react";

export function About() {
  const statsList = [
    {
      value: portfolioData.personal.stats.yearsExperience,
      label: "Years of Experience",
      sub: "Professional production engineering",
      icon: Zap,
    },
    {
      value: portfolioData.personal.stats.projectsBuilt,
      label: "Projects",
      sub: "Built from concept to release",
      icon: Layers,
    },
    {
      value: portfolioData.personal.stats.technologiesCount,
      label: "Core Technologies",
      sub: "Frontend, Backend & Cloud",
      icon: Cpu,
    },
    {
      value: portfolioData.personal.stats.productionApps,
      label: "Production Deployments",
      sub: "Serving active real users",
      icon: Workflow,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering with Purpose & Precision"
          gradientWord="Purpose & Precision"
          description="A quick overview of my background, technical focus, and how I approach building high-value software."
        />

        {/* Narrative & Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Professional Background</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Transforming complex engineering requirements into maintainable, high-throughput products.
            </h3>

            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
              {portfolioData.personal.bio}
            </p>

            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
              With 3+ years of experience in software development, I specialize in building maintainable applications, scalable APIs, and intuitive user experiences. I enjoy working across the stack, collaborating with cross-functional teams, and continuously learning new technologies.
            </p>

            {/* What I enjoy working on */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider font-mono mb-3">
                What I Enjoy Working On
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {portfolioData.personal.passions.map((passion, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>{passion}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Philosophy & Approach (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                <Shield className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </div>
              <blockquote className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic border-l-2 border-indigo-500 pl-4 py-1 leading-relaxed">
                &ldquo;{portfolioData.personal.philosophy}&rdquo;
              </blockquote>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Code className="w-4 h-4" />
                <span>Core Standards</span>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Strict type safety with TypeScript end-to-end
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  RESTful principles & predictable error schemas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Optimized DB indexes before scaling hardware
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Containerized and automated CI/CD releases
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Configurable Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsList.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 sm:p-6 text-center border border-zinc-200 dark:border-zinc-800"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-500 hidden sm:block">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
