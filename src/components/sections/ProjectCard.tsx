"use client";

import React, { forwardRef } from "react";
import { Project } from "@/types/portfolio";
import {
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, index }, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between group"
      >
      <div>
        {/* Visual Mock Header Frame */}
        <div className="relative h-48 sm:h-52 bg-gradient-to-br from-zinc-100 via-zinc-200/50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-5 flex flex-col justify-between overflow-hidden">
          {/* Subtle grid pattern in mockup */}
          <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

          {/* Browser mockup bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
              {project.category}
            </span>
          </div>

          {/* Architectural Preview badge */}
          <div className="relative z-10 space-y-1">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white line-clamp-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              {project.title.split("—")[0]}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Corner accent glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500" />
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Problem Solved Callout */}
          <div className="p-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs">
            <span className="font-semibold font-mono text-zinc-900 dark:text-zinc-200 block mb-0.5">
              Problem Solved:
            </span>
            <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.problemSolved}
            </span>
          </div>

          {/* Key Features */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
              Key Features:
            </span>
            <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
              {project.keyFeatures.slice(0, 3).map((feat, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics where available */}
          {project.metrics && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 pt-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Link Actions */}
      <div className="px-6 py-4 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;

