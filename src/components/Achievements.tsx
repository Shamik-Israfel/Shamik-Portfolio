"use client";

import { portfolioData } from "@/data/portfolio";
import {
  Award,
  ShieldCheck,
  Languages,
  CheckCircle,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";

export default function Achievements() {
  const { achievements, certifications, languages } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Award className="w-3.5 h-3.5" />
            <span>LEADERSHIP & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Key Achievements & Professional Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Recognized leadership in IEEE student activities, competitive robotics, and industry credentials.
          </p>
        </div>

        {/* 2 Column Split: Achievements & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Achievements / Community Leadership */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 mb-2">
              <Users className="w-4 h-4" />
              <span>LEADERSHIP & COMMUNITY IMPACT</span>
            </div>

            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 rounded-2xl border border-white/10 p-6 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.organization}
                </h3>
                <div className="text-xs font-semibold text-cyan-400 mb-2 font-mono">
                  {item.role}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Courses */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono text-emerald-400 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>COURSES & PROFESSIONAL CERTIFICATIONS</span>
            </div>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 rounded-2xl border border-white/10 p-6 backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-mono flex items-center gap-1 text-slate-400">
                    {cert.status === "In Progress" ? (
                      <>
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-amber-300 font-medium">In Progress</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300 font-medium">{cert.status}</span>
                      </>
                    )}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-medium text-slate-400">
                  Issued by {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Strip */}
        <div className="bg-slate-900/40 rounded-xl border border-white/10 p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300 text-sm font-mono">
            <Languages className="w-4 h-4 text-violet-400" />
            <span>LINGUISTIC PROFICIENCY:</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="font-semibold text-sm text-white">{lang.name}</span>
                <span className="text-xs font-mono text-slate-400">({lang.proficiency})</span>
                {idx < languages.length - 1 && <span className="text-slate-600 hidden sm:inline">•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
