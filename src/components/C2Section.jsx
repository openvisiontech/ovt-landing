import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, Brain, ShieldCheck, ArrowRight, CheckCircle2, Zap, Radio } from 'lucide-react';

const C2Section = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Dynamic Asset Discovery",
      shortTitle: "1. Asset Discovery",
      icon: <Radio className="w-6 h-6 text-cyan-400" />,
      copy: "Robotic assets' identities, capabilities, telemetries and their context are discovered via Uli SDK services.",
      detail: "Robotic platforms (UGVs, UAVs, sensors) connect onto a self-configured infrastructure where asset identities, functional capabilities, and live telemetry streams are automatically discovered.",
      metrics: "Integrations: ROS / ROS2 / MAVROS / VLA"
    },
    {
      id: "02",
      title: "Knowledge Graph Ingestion",
      shortTitle: "2. Graph Ingestion",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      copy: "Automatic node/edge synthesis constructs a live world model.",
      detail: "Uli SDK transforms the discovered context of the assets and their capabilities and published data topics into Live Semantic Knowledge Graph.",
      metrics: "Latency: Millisecond Graph Ingestion"
    },
    {
      id: "03",
      title: "Semantic Reasoning & State Estimation",
      shortTitle: "3. Reasoning & State",
      icon: <Brain className="w-6 h-6 text-green-400" />,
      copy: "Autonomous agents perform semantic queries to ground decisions in situational reality.",
      detail: "Edge LLMs and agentic AI query the Knowledge Graph to maintain precise situational awareness and high-fidelity state estimation without dependence on cloud connectivity.",
      metrics: "Deployment: Denied/Disrupted Edge (DDIL)"
    },
    {
      id: "04",
      title: "Validated Command Execution",
      shortTitle: "4. Validated Execution",
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
      copy: "Agents issue parameters through capability contexts with zero-trust safety verification.",
      detail: "Commands issued by autonomous agents pass through safety governance policies and certificate-based verification before execution on bare-metal hardware assets.",
      metrics: "Security: Zero-Trust Tiered Access"
    }
  ];

  return (
    <section id="c2" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-4 uppercase tracking-wider">
            <Zap size={14} /> Kinetic-Cognitive C2 Pipeline
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Defense & Next-Gen C2 Alignment
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            How Uli SDK bridges physical kinetic robotics and cognitive Agentic AI to enable real-time tactical decision superiority across contested multi-domain battlefields.
          </p>
        </div>

        {/* Pipeline Navigation / Step Headers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer ${isActive
                  ? 'bg-slate-900 border-secondary shadow-[0_0_25px_rgba(242,148,98,0.25)] scale-[1.02]'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-gray-500">STEP {step.id}</span>
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-slate-800' : 'bg-slate-950'}`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className={`font-bold text-base mb-1 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{step.copy}</p>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-[2px] left-6 right-6 h-1 bg-secondary rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Visual & Information Focus */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/20 text-secondary font-mono text-xs font-bold uppercase">
                  Phase {steps[activeStep].id} Operational Detail
                </div>

                <h3 className="text-3xl font-extrabold text-white">
                  {steps[activeStep].title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {steps[activeStep].detail}
                </p>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                  <span className="text-sm font-mono text-gray-300">{steps[activeStep].metrics}</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-6 flex flex-col justify-between relative shadow-inner">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="font-mono text-xs text-secondary font-bold">ULI_SYSTEM_NODE</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  </div>

                  <div className="my-auto text-center space-y-3 py-6">
                    <div className="inline-block p-4 rounded-full bg-slate-800/80 border border-slate-700 mb-2">
                      {steps[activeStep].icon}
                    </div>
                    <div className="font-mono text-sm text-cyan-300 font-semibold tracking-wider uppercase">
                      {steps[activeStep].shortTitle}
                    </div>
                    <div className="text-xs text-gray-400 max-w-xs mx-auto">
                      {steps[activeStep].copy}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span>STATUS: ACTIVE</span>
                    <span>R2I: VERIFIED</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default C2Section;
