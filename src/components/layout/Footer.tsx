import Link from "next/link";
import { Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#07080A]/60 backdrop-blur-md pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-200 dark:border-zinc-800/60">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-800 text-cyan-400 border border-zinc-700/60 flex items-center justify-center font-bold text-xs">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                {portfolioData.personal.name}
              </span>
              <span className="text-cyan-500 dark:text-cyan-400 font-mono text-xs px-2 py-0.5 rounded border border-cyan-500/20 bg-cyan-500/10">
                {portfolioData.personal.yearsOfExperience} Exp
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Software Engineer building reliable backend architectures, performant MERN stack applications, and intuitive digital interfaces.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.social.email}
                aria-label="Email Keval"
                className="w-9 h-9 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Architecture Principles
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech & Contact */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Location & Availability
            </h3>
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <p>📍 {portfolioData.personal.location}</p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for hire
              </div>
              <p className="text-xs text-zinc-500 pt-2 font-mono">
                Code crafted with Next.js, TypeScript & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 gap-4">
          <p>© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with simplicity & performance in mind
          </p>
        </div>
      </div>
    </footer>
  );
}
