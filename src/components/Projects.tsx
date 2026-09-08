"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";
import {
  FolderGit2,
  ArrowUpRight,
  Info,
  Sparkles,
  Bot,
  Radio,
  Globe,
  SlidersHorizontal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "iot", label: "IoT & Robotics" },
    { key: "ai", label: "AI & Computer Vision" },
    { key: "web", label: "Web Platforms" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getAccentGlow = (accent: Project["accentColor"]) => {
    switch (accent) {
      case "cyan":
        return "group-hover:border-cyan-500/40 group-hover:shadow-[0_8px_30px_-10px_rgba(6,182,212,0.2)]";
      case "emerald":
        return "group-hover:border-emerald-500/40 group-hover:shadow-[0_8px_30px_-10px_rgba(16,185,129,0.2)]";
      case "violet":
        return "group-hover:border-violet-500/40 group-hover:shadow-[0_8px_30px_-10px_rgba(139,92,246,0.2)]";
      case "amber":
        return "group-hover:border-amber-500/40 group-hover:shadow-[0_8px_30px_-10px_rgba(245,158,11,0.2)]";
      default:
        return "group-hover:border-cyan-500/40";
    }
  };

  const getBadgeStyle = (accent: Project["accentColor"]) => {
    switch (accent) {
      case "cyan":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20";
      case "emerald":
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
      case "violet":
        return "bg-violet-500/10 text-violet-300 border-violet-500/20";
      case "amber":
        return "bg-amber-500/10 text-amber-300 border-amber-500/20";
      default:
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20";
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineered Systems & Research Prototypes
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Autonomous robotics, privacy-preserving AI frameworks, assistive devices, and high-load web applications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-b from-slate-900/70 to-[#0a0e17] rounded-2xl border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 ${getAccentGlow(
                project.accentColor
              )} hover:-translate-y-1`}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${getBadgeStyle(
                      project.accentColor
                    )}`}
                  >
                    {project.categoryLabel}
                  </span>
                  {project.metrics && (
                    <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.02] text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
