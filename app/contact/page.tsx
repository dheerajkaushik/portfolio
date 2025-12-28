"use client";
import GlowCard from "@/components/ui/GlowCard";
import { personalInfo } from "@/lib/data";
import { Mail, MapPin, Linkedin, Send, Terminal, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate network request
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

        {/* Left Column: Connection Info */}
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900 bg-blue-950/30 text-xs font-mono text-blue-400 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Communication Channel Open
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Establish Connection</h2>
            <p className="text-slate-400 leading-relaxed">
              Have a project idea or a job opportunity? Initialize a handshake protocol below.
              Open to full-stack collaborations.
            </p>
          </div>

          <div className="space-y-4">
            <GlowCard className="bg-slate-900/40">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">EMAIL_PROTOCOL</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-emerald-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="bg-slate-900/40">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-blue-400">
                              <Linkedin size={20} />
                            </div>
                            <div>
                              <p className="text-xs text-slate-500 font-mono">LINKEDIN_NETWORK</p>
                              <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 transition-colors font-medium"
                              >
                                {/* Displays "Connect on LinkedIn" instead of the messy long URL */}
                                Connect on LinkedIn <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </GlowCard>

            <GlowCard className="bg-slate-900/40">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">CURRENT_LOCATION</p>
                  <p className="text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>

        {/* Right Column: The "Terminal" Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-10" />
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
              <Terminal size={18} className="text-slate-500" />
              <span className="text-sm text-slate-500 font-mono">message_transmission.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1">INPUT: NAME</label>
                <input
                  type="text"
                  placeholder="Enter identifier..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1">INPUT: EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter return address..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1">INPUT: MESSAGE</label>
                <textarea
                  rows={4}
                  placeholder="Enter payload data..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full bg-white text-slate-950 font-bold py-3 rounded-lg hover:bg-slate-200 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'idle' && (
                  <>Execute Transmission <ArrowRight size={18} /></>
                )}
                {status === 'sending' && (
                  <>Transmitting... <span className="animate-spin">⟳</span></>
                )}
                {status === 'sent' && (
                  <>Transmission Complete <span className="text-emerald-600">✓</span></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}