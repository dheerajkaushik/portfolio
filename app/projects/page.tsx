import GlowCard from "@/components/ui/GlowCard";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Layers } from "lucide-react";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
      <p className="text-slate-400 mb-12">Architected and deployed systems.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <GlowCard key={index} className={index === 0 ? "md:col-span-2" : ""}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg text-sky-400">
                    <Layers size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono text-sky-300 bg-sky-950/30 rounded-full border border-sky-900/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}