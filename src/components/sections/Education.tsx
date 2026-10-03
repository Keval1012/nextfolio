"use client";

import { SectionHeading } from "@/components/common/SectionHeading";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials"
          title="Education & Certifications"
          gradientWord="Certifications"
          description="Academic foundations and professional accreditations acquired along the engineering journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </div>

            <div className="space-y-4">
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      {edu.year}
                    </span>
                    {edu.score && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px]">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {edu.degree} in {edu.field}
                  </h3>

                  <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {edu.institution}
                  </div>

                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  )}

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                    Specialized coursework in Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Design.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Award className="w-4 h-4" />
              <span>Professional Certifications</span>
            </div>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        {cert.year}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-700">•</span>
                      <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
                        {cert.issuer}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h3>
                  </div>

                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shrink-0"
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
