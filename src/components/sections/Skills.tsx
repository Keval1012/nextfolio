"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Check,
} from "lucide-react";

const categoryIconMap: Record<string, React.ElementType> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  Tools: Wrench,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...portfolioData.skills.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Battle-Tested Tech Stack"
          gradientWord="Tech Stack"
          description="Technologies and tooling I actively leverage in production architectures. Categorized for clarity without arbitrary percentage bars."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                  isSelected
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-md"
                    : "border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:border-cyan-500/50 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((catGroup, groupIndex) => {
              const Icon = categoryIconMap[catGroup.category] || Code2;
              return (
                <motion.div
                  key={catGroup.category}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: groupIndex * 0.05 }}
                  className="glass-card rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                          {catGroup.category}
                        </h3>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                          {catGroup.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {catGroup.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group/item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 group-hover/item:bg-cyan-400" />
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter ml-0.5">
                              • {skill.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>{catGroup.skills.length} skills verified</span>
                    <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Production Ready
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
