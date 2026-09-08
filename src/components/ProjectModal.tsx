"use client";

import { useEffect } from "react";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, Cpu, Layers, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0c101a] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            {project.categoryLabel}
          </span>
          {project.metrics && (
            <span className="px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300">
              {project.metrics}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl font-bold text-white mb-1.5">{project.title}</h3>
        <p className="text-sm font-medium text-slate-400 mb-6">{project.subtitle}</p>

        {/* Core Synopsis */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              System Architecture & Functionality
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.extendedDetails}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Technical Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
