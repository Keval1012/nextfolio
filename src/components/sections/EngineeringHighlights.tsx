"use client";

import { SectionHeading } from "@/components/common/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import {
  Boxes,
  Network,
  Zap,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Code2,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Boxes,
  Network,
  Zap,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Code2,
};

export function EngineeringHighlights() {
  return (
    <section id="architecture" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Focus"
          title="Architectural Core Competencies"
          gradientWord="Core Competencies"
          description="Beyond writing syntax: the foundational principles and engineering practices I apply to build maintainable, resilient software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.engineeringHighlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon] || Boxes;

            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-card rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/20 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center text-[10px] font-mono uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
                  <span>Principle #0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
