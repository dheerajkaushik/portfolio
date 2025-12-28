import GlowCard from "@/components/ui/GlowCard";
import { experience, skills } from "@/lib/data";
import { Briefcase, GraduationCap, Cpu } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-16">

      {/* Bio Section */}
      <section>
        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <div className="prose prose-invert text-slate-400 max-w-none">
          <p className="text-lg leading-relaxed">
           Enthusiastic <strong>Java Full Stack Developer</strong> skilled in building scalable web applications using <strong>Spring Boot</strong>,
           React, Hibernate, and REST APIs. Experienced in end-to-end development — from backend
           architecture and database design to responsive frontends.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="text-emerald-400" />
          <h3 className="text-2xl font-semibold text-white">Technical Arsenal</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg text-center hover:border-emerald-500/50 transition-colors">
              <span className="text-slate-300 font-mono text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-8">Journey</h3>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <GlowCard key={index}>
              <div className="flex gap-4">
                <div className="mt-1">
                  {exp.role.includes("Student") ? (
                     <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400"><Briefcase size={20}/></div>
                  ) : (
                     <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400"><GraduationCap size={20}/></div>
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-emerald-400 font-mono text-sm mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-slate-400">{exp.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>
    </div>
  );
}