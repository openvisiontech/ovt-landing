import React from 'react';
import { Radio, Server, Database, Cpu, ArrowRight, ShieldCheck } from 'lucide-react';

const C2Section = () => {
  const layers = [
    {
      layer: "Layer 1: Transport Layer",
      subtitle: "Tactical Data Movement",
      icon: <Radio className="w-8 h-8 text-blue-400" />,
      role: "Transport Agnostic",
      desc: "Operates seamlessly over low-bandwidth, DDIL (Denied, Degraded, Intermittent, and Limited) networks, mesh radios, and pLEO SATCOM without imposing heavy protocol overhead.",
      uliFit: "Lightweight socket and telemetry routing designed for tactical edge networking."
    },
    {
      layer: "Layer 2: Infrastructure Layer",
      subtitle: "Edge & Hardware Compute",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      role: "Zero-Trust Edge Middleware",
      desc: "Provides runtime-adaptive orchestration and lifecycle safety control directly on x86_64 and embedded ARM hardware (e.g., NVIDIA Jetson) across ground, air, and maritime platforms.",
      uliFit: "Self-configuring asset discovery with certificate-based authentication and lifecycle state management."
    },
    {
      layer: "Layer 3: Data Layer (Data Fabric)",
      subtitle: "Semantic Context Synthesis",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      role: "Knowledge Graph Synthesis Engine",
      desc: "Automatically ingests discovered Asset Context, Capability Context (Agent Skills), and Telemetry Context into a live, searchable Knowledge Graph.",
      uliFit: "Fulfills the Army's 'Right to Integrate' (R2I) by transforming raw telemetry streams into a structured semantic layer for universal access."
    },
    {
      layer: "Layer 4: Application Layer",
      subtitle: "Agentic AI & Operator UI",
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      role: "Agentic Reasoning & A2UI",
      desc: "Powers LLMs and autonomous agents to perform semantic retrieval, live state estimation, and command execution, while driving real-time Flutter dashboards via native Dart-FFI.",
      uliFit: "Enables AI agents to 'learn' assets on the fly and drive user interfaces without custom API code."
    }
  ];

  return (
    <section id="c2" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" /> Next-Gen C2 (NGC2) & R2I Alignment
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Built for the Army's 4-Layer Command & Control Stack
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            The Uli SDK delivers the software-defined "connective tissue" that bridges tactical hardware infrastructure to the common data layer and agentic applications.
          </p>
        </div>

        {/* 4-Layer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div>
                <div className="p-3 bg-slate-800/80 rounded-lg w-fit mb-4 border border-slate-700">
                  {item.icon}
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                  {item.role}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.layer}
                </h3>
                <p className="text-xs text-slate-400 mb-4 font-medium">
                  {item.subtitle}
                </p>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 mt-auto">
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  Uli SDK Contribution:
                </span>
                <p className="text-xs text-slate-300 italic">
                  "{item.uliFit}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white">
              Supporting the "Right to Integrate" (R2I) Mandate
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              By abstracting hardware skills into a open Knowledge Graph data layer, Uli SDK eliminates vendor lock-in and gives the warfighter software-defined adaptability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default C2Section;
