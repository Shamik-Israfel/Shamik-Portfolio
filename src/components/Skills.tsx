"use client";

import { portfolioData } from "@/data/portfolio";
import {
  Code2,
  Layers,
  Database,
  Cpu,
  Radio,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function Skills() {
  const { skillsData } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case "Radio":
        return <Radio className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getCategoryBorder = (idx: number) => {
    switch (idx % 5) {
      case 0:
        return "hover:border-cyan-500/40 hover:shadow-cyan-950/20";
      case 1:
        return "hover:border-emerald-500/40 hover:shadow-emerald-950/20";
      case 2:
        return "hover:border-blue-500/40 hover:shadow-blue-950/20";
      case 3:
        return "hover:border-violet-500/40 hover:shadow-violet-950/20";
      case 4:
        return "hover:border-amber-500/40 hover:shadow-amber-950/20";
      default:
        return "hover:border-cyan-500/40";
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#07090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Specialized Skills & Toolkit
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Disciplines honed through hands-on robotics engineering, research implementations, and full-stack software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className={`bg-slate-900/50 rounded-2xl border border-white/10 p-6 backdrop-blur-md transition-all duration-300 ${getCategoryBorder(
                idx
              )} hover:-translate-y-1 hover:shadow-xl flex flex-col`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10">
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{category.title}</h3>
                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} core technologies
                  </span>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono text-slate-200 bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-150"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
