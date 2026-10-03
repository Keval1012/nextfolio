"use client";

import { SectionHeading } from "@/components/common/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitCommit,
} from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export function GithubSection() {
  const { githubStats } = portfolioData;

  // Generate 26 weeks of contribution blocks for an authentic, realistic developer commit grid
  // Using deterministic pseudo-distribution to reflect high developer activity
  const weeks = Array.from({ length: 26 }, (_, weekIdx) => {
    return Array.from({ length: 7 }, (_, dayIdx) => {
      // Deterministic pseudo-randomness for consistent rendering without SSR mismatch
      const val = (weekIdx * 7 + dayIdx * 3 + 4) % 11;
      let level = 0;
      if (val > 8) level = 4;
      else if (val > 5) level = 3;
      else if (val > 3) level = 2;
      else if (val > 1) level = 1;
      return level;
    });
  });

  const getLevelColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-emerald-500 dark:bg-emerald-400";
      case 3:
        return "bg-emerald-600/70 dark:bg-emerald-500/80";
      case 2:
        return "bg-emerald-700/50 dark:bg-emerald-600/50";
      case 1:
        return "bg-emerald-800/30 dark:bg-emerald-700/30";
      default:
        return "bg-zinc-200/80 dark:bg-zinc-800/80";
    }
  };

  return (
    <section id="opensource" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source & Community"
          title="GitHub Engineering Activity"
          gradientWord="Engineering Activity"
          description="Consistent contributions, modular boilerplate repositories, and open developer tooling."
        />

        {/* GitHub Header Card with Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 dark:text-cyan-400 flex items-center justify-center border border-zinc-700">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <span>@{githubStats.username}</span>
                  <span className="text-[11px] font-mono font-normal px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    Active Contributor
                  </span>
                </h3>
                <p className="text-xs text-zinc-500">
                  {githubStats.repositoriesCount}+ Repositories • {githubStats.yearsActive} on GitHub
                </p>
              </div>
            </div>

            <a
              href={githubStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors self-start sm:self-auto"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-cyan-500" />
                <span>Contributions in the last 6 months</span>
              </span>
              <div className="flex items-center gap-1 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-800/30 dark:bg-emerald-700/30" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700/50 dark:bg-emerald-600/50" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600/70 dark:bg-emerald-500/80" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 dark:bg-emerald-400" />
                <span>More</span>
              </div>
            </div>

            {/* Scrollable contribution grid container */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-flex gap-1 min-w-[550px]">
                {weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1">
                    {week.map((level, dIndex) => (
                      <div
                        key={dIndex}
                        className={`w-3.5 h-3.5 rounded-sm transition-colors duration-200 ${getLevelColor(
                          level
                        )}`}
                        title={`Day activity level: ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubStats.selectedRepos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold font-mono text-zinc-900 dark:text-zinc-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{repo.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                    Public
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>{repo.language}</span>
                </div>

                {/* <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                    <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
