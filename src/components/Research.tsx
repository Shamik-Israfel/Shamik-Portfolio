"use client";

import { useState } from "react";
import { portfolioData, Publication } from "@/data/portfolio";
import {
  FileText,
  Bookmark,
  Copy,
  Check,
  Calendar,
  Sparkles,
  Award,
  ExternalLink,
} from "lucide-react";

export default function Research() {
  const { publications } = portfolioData;
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyBibtex = (pub: Publication) => {
    if (!pub.bibtex) return;
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="research" className="py-24 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400">
            <Bookmark className="w-3.5 h-3.5" />
            <span>PUBLICATIONS & SCHOLARLY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Peer-Reviewed Research & Conference Proceedings
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Original investigations presented at international computing and IEEE conferences in autonomous systems, assistive robotics, and computer vision.
          </p>
        </div>

        {/* Publications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, idx) => (
            <div
              key={pub.id}
              className="bg-slate-900/60 rounded-2xl border border-white/10 p-6 sm:p-7 backdrop-blur-md hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/30">
                      {pub.conference.includes("IEEE") ? "IEEE Conference" : "International Conf"}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {pub.year}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/25">
                    ★ {pub.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors mb-2 leading-snug">
                  {pub.title}
                </h3>

                {/* Conference / Venue */}
                <div className="text-xs font-medium text-cyan-400/90 mb-3 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>Presented on — {pub.conference}</span>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {pub.summary}
                </p>
              </div>

              {/* Card Bottom */}
              <div>
                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 pt-3 mb-4 border-t border-white/5">
                  {pub.topics.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/5 text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* BibTeX copy action */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-slate-400">
                    Format: Peer-Reviewed Paper
                  </span>

                  {pub.bibtex && (
                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                      title="Copy BibTeX Citation"
                    >
                      {copiedId === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">BibTeX Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Cite BibTeX</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
