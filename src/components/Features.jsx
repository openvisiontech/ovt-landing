import React from 'react';
import { ShieldCheck, Network, Activity, Lock, Search, Cpu } from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      title: "Next-Gen C2 & R2I Compliance",
      desc: "Purpose-built for software-defined defense architectures. Fulfills the Army’s Right to Integrate (R2I) mandate by ensuring government ownership of interfaces and eliminating vendor lock-in through MOSA standards.",
      icon: <ShieldCheck className="text-cyan-400 w-8 h-8" />
    },
    {
      title: "Contextual Knowledge Graph",
      desc: "Synthesizes asset identity, functional capability skills, and telemetry streams into a live semantic Knowledge Graph for real-time AI reasoning and situational awareness.",
      icon: <Network className="text-purple-400 w-8 h-8" />
    },
    {
      title: "Tactical Edge State Estimation",
      desc: "Enables local LLMs and autonomous agents to reason over live telemetry semantics, maintaining precise state estimation and world modeling without cloud connectivity.",
      icon: <Activity className="text-green-400 w-8 h-8" />
    },
    {
      title: "Zero-Trust Multi-Domain Security",
      desc: "Certificate-based authentication with granular, tiered access governance—separating Classified, Controlled, and Unclassified telemetry streams at the middleware layer.",
      icon: <Lock className="text-red-400 w-8 h-8" />
    },
    {
      title: "Dynamic Asset Interoperability",
      desc: "Assets and their functional capability modules self-announce to the network. Dynamically discover assets and capabilities as missions change without requiring manual reconfiguration.",
      icon: <Search className="text-secondary w-8 h-8" />
    },
    {
      title: "A2UI (Agent-to-UI) Framework",
      desc: "Native integration for multi-domain command interfaces. AI Agents dynamically drive real-time dashboards, giving human operators immediate situational awareness and command control.",
      icon: <Cpu className="text-accent w-8 h-8" />
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Defense-Grade Autonomous Architecture
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Modular, scalable, and zero-trust middleware engineering enabling seamless interoperability across heterogeneous physical assets and cognitive AI systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl border border-gray-100 hover:border-secondary/30 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 p-3 rounded-xl bg-slate-900 inline-block shadow-md">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
