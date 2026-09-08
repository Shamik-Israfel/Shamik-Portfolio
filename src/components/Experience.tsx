"use client";

import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from "lucide-react";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Industry & Technical Experience
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Delivering data-driven insights and scalable web engineering for enterprise and fast-paced tech ecosystems.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Node Point */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-slate-950 transition-colors ${
                  exp.isCurrent
                    ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    : "border-slate-500 group-hover:border-emerald-400"
                }`}
              >
                {exp.isCurrent && (
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 m-auto mt-0.5 animate-ping" />
                )}
              </div>

              {/* Time Label on Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28 font-mono text-xs text-slate-400">
                {exp.period}
              </div>

              {/* Card */}
              <div className="bg-slate-900/60 rounded-2xl border border-white/10 p-6 sm:p-7 backdrop-blur-md hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="font-semibold text-cyan-300">{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Period */}
                  <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>

                  {exp.isCurrent && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Present
                    </span>
                  )}
                </div>

                {/* Key Achievements / Bullet points */}
                <ul className="space-y-2.5 my-4">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
