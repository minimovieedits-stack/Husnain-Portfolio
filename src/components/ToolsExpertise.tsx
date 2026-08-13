import React from 'react';
import { motion } from 'motion/react';
import { TOOLS_LIST } from '../data/portfolioData';
import { Bot, Brain, Wand2, Workflow, Scissors, Sparkles, Cpu } from 'lucide-react';

export const ToolsExpertise: React.FC = () => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return Bot;
      case 'Brain': return Brain;
      case 'Wand2': return Wand2;
      case 'Workflow': return Workflow;
      case 'Scissors': return Scissors;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Stack & Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            Powered By Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Creative Technology</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-xl text-xs sm:text-sm font-light">
            Mastery over industry-leading AI generation platforms, prompt architecture, and professional video post-production suites.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TOOLS_LIST.map((tool, idx) => {
            const Icon = getToolIcon(tool.icon);
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-white/5 border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    {tool.tag && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/70 bg-black/40 px-2.5 py-1 rounded border border-white/10">
                        {tool.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold uppercase tracking-tight text-white font-display mb-1 group-hover:text-amber-300 transition-colors">
                    {tool.name}
                  </h3>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-3">{tool.category}</div>
                  
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/30 font-mono">
                  <span>TOOL {idx + 1} OF 5</span>
                  <span className="text-emerald-400">EXPERT</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
