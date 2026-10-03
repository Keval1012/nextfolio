"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ChevronDown,
  TrendingUp,
  CheckCircle,
  Code,
} from "lucide-react";

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work Experience"
          title="Professional Career Journey"
          gradientWord="Career Journey"
          description="A timeline of software engineering roles, technical responsibilities, and quantified business impact."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline spine */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-zinc-300 dark:to-zinc-800" />

          <div className="space-y-8">
            {portfolioData.experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isCurrent = exp.endDate.toLowerCase().includes("present");

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute left-2.5 sm:left-6.5 top-5 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      isCurrent
                        ? "bg-cyan-500 border-cyan-300 ring-4 ring-cyan-500/20"
                        : "bg-zinc-900 dark:bg-zinc-100 border-zinc-500"
                    }`}
                  />

                  {/* Card Container */}
                  <div className="glass-panel rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:border-cyan-500/40 transition-colors">
                    {/* Header bar */}
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className="p-6 cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/40 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/70 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              Current Role
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                            {exp.company}
                          </span>
                          <span className="text-zinc-400 dark:text-zinc-600">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                            {exp.location}
                          </span>
                          <span className="text-zinc-400 dark:text-zinc-600">•</span>
                          <span className="flex items-center gap-1 font-mono text-xs">
                            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                            {exp.startDate} — {exp.endDate}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                          {isExpanded ? "Collapse" : "Expand Details"}
                        </span>
                        <div
                          className={`p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-cyan-500" : "text-zinc-400"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Summary text */}
                    <div className="px-6 pt-4 pb-2">
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-2 space-y-6"
                        >
                          {/* Measurable Achievements */}
                          {exp.measurableAchievements.length > 0 && (
                            <div className="p-4 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 space-y-2">
                              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                                <TrendingUp className="w-4 h-4" />
                                <span>Measurable Engineering Impact</span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                                {exp.measurableAchievements.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-cyan-500 font-bold shrink-0 mt-0.5">✦</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Key Responsibilities */}
                          <div>
                            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                              Key Technical Responsibilities
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                              {exp.keyResponsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-600 shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech badges */}
                          <div>
                            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-2.5 flex items-center gap-1.5">
                              <Code className="w-3.5 h-3.5" />
                              <span>Technologies Applied</span>
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
