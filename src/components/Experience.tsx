import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_STATS } from '../data/portfolioData';
import { Briefcase, Calendar, Sparkles, TrendingUp, Video } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-light italic text-white font-display max-w-2xl leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Journey</span>
          </h2>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EXPERIENCE_STATS.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-[10px] font-mono uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                  {exp.role}
                </h3>

                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50 font-bold">
                {idx === 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <Video className="w-3.5 h-3.5" />}
                <span>Active Specialty</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
