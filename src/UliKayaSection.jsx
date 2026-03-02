import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Cpu, Terminal, ChevronRight, Trophy } from 'lucide-react';

const UliKayaSection = () => {
  const specs = [
    { label: "Architecture", value: "3-Wheel Omnidirectional" },
    { label: "Compute", value: "NVIDIA Jetson (Orin/Nano)" },
    { label: "Middleware", value: "ulisdk (MCP-Compliant)" },
    { label: "LLM Onboard", value: "Gemma 3" },
  ];

  return (
    <section id="uli-kaya" className="py-24 bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: The Robot & Specs */}
          <div className="flex-1 w-full space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-full opacity-50" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-2xl">
                <img
                  src="/uli-kaya.png"
                  alt="Uli Kaya 3-Wheel Robot"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Sidebar-style Specs */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 shadow-xl">
              <h3 className="text-[10px] font-mono text-blue-400 mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                <Cpu size={14} /> Asset_Introspection
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-500 font-mono text-[10px]">{spec.label}</span>
                    <span className="text-slate-200 font-mono text-[10px] font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content & Funny Note */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6"
            >
              <Terminal size={14} /> HARDWARE VALIDATION
            </motion.div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Uli Kaya: <br />
              <span className="text-blue-400">The Agentic AI Ready Robot</span>
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Uli Kaya is our in-house 3-wheel development platform used to validate the
              <strong> ulisdk </strong> architecture. It serves as a living blueprint for
              how legacy hardware transitions into the Agentic AI ecosystem.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-3">
                <div className="mt-1 flex-shrink-0"><ShieldCheck size={20} className="text-blue-400" /></div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Secure Control</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Certificate-based Auth & Authorization.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 flex-shrink-0"><Activity size={20} className="text-blue-400" /></div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Health Monitoring</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Real-time service health & reporting.</p>
                </div>
              </div>
            </div>

            {/* The Funny Comment Box */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-white/5 mb-8 flex items-start gap-4">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                <Trophy size={20} />
              </div>
              <p className="text-sm text-slate-400 italic leading-snug">
                "When it's not validating our stack, <strong className="text-slate-200">Uli Kaya is a formidable foosball opponent.</strong>"
              </p>
            </div>

            {/* External Link Button */}
            <a
              href="https://www.ulisdk.com/ulikaya/ulikaya1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105"
            >
              Explore Uli Kaya <ChevronRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UliKayaSection;