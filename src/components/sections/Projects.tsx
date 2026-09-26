"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { portfolioData } from "@/data/portfolioData";
import { AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = ["All", "Full Stack", "Backend / API", "Frontend"];

  const filteredProjects =
    selectedFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Production-Grade Projects"
          gradientWord="Projects"
          description="A selection of end-to-end applications demonstrating clean architecture, real-time sync, and scalable database design."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                  isSelected
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-md"
                    : "border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:border-cyan-500/50 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
            <FolderGit2 className="w-4 h-4 text-cyan-500" />
            <span>More open-source repositories and utility modules available on GitHub.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
