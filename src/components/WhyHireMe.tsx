import React from 'react';
import { motion } from 'motion/react';
import { REASONS_LIST } from '../data/portfolioData';
import { Award, Sparkles, CheckCircle, ArrowUpRight } from 'lucide-react';

export const WhyHireMe: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-hire-me" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Value Proposition</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            Strategic Creativity Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Next-Gen Execution</span>
          </h2>
        </div>

        {/* 5 Reasons Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {REASONS_LIST.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`bg-white/5 border border-white/10 p-7 rounded-xl hover:border-white/30 transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-light text-white font-display font-mono">
                    {item.number}
                  </span>
                  <div className="p-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Impact Statement Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 rounded-xl p-8 sm:p-12 border border-white/15 text-center glow-card overflow-hidden"
        >
          {/* Subtle glowing backdrop flare */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-white/80 mb-6" />
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light italic text-white font-display leading-tight mb-4">
              "Your brand deserves more than ordinary content."
            </h3>

            <p className="text-sm sm:text-base text-white/60 font-light mb-8">
              Let's create something visually iconic that drives meaningful business growth.
            </p>

            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-xl"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
