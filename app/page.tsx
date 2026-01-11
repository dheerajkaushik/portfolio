import Link from "next/link";
import { ArrowRight, Github, FileText, Terminal } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Typewriter from "@/components/ui/Typewriter";
import { Meteors } from "@/components/ui/Meteors";

export default function Home() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 h-full w-full pointer-events-none">
               <Meteors number={20} />
            </div>
      <div className="max-w-3xl w-full space-y-8 relative z-10">

        {/* Terminal Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-950/50 text-xs font-mono text-emerald-400 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Online
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          <span className="text-slate-500 text-2xl md:text-2xl block mb-4 font-mono font-normal">
            &gt; Hello, I'm
          </span>
          <Typewriter text="Dheeraj Kaushik" delay={100} />
        </h1>

        <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
          {personalInfo.role} specializing in <span className="text-sky-400 font-mono">Spring Boot</span> and <span className="text-sky-400 font-mono">React</span>.
          <br/>
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-slate-200 transition-all"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={personalInfo.github}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg font-medium text-slate-300 hover:border-slate-500 hover:bg-slate-800/50 transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          {/* Resume Download Mockup */}
          <a href="/Fullstack Resume.pdf" download="My_Resume.pdf">
          <button className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg font-medium text-slate-300 hover:border-slate-500 hover:bg-slate-800/50 transition-all">
            <FileText className="w-4 h-4" />
            Download CV
          </button>
          </a>
        </div>

        {/* Tech Stack Ticker */}
        <div className="pt-5 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 font-mono mb-3">CORE STACK_</p>
          <div className="flex gap-6 text-slate-400 overflow-x-auto pb-2">
             <Terminal size={20} /> <span className="font-mono">Java</span>
             <span className="text-slate-600">|</span>
             <span className="font-mono">Spring Boot</span>
             <span className="text-slate-700">|</span>
             <span className="font-mono">React</span>
             <span className="text-slate-700">|</span>
             <span className="font-mono">Docker</span>
             <span className="text-slate-700">|</span>
             <span className="font-mono">PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}