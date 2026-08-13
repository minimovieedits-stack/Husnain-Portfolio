import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Workflow, CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Workflow</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            How Ideas Become <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Cinematic Reality</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-xl text-xs sm:text-sm font-light">
            A structured, 4-step creative workflow designed for maximum quality, speed, and strategic impact.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 bg-white/5 p-6 sm:p-7 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white font-mono text-sm font-bold flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    {step.number}
                  </div>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Micro Details List */}
                {step.details && (
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-[11px] text-white/50 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
