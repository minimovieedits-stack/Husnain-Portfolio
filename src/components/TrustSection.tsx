import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Video, Target, Share2, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustIndicators = [
    {
      title: 'Creative Strategy',
      subtitle: 'Data & Brand-Driven Concepts',
      desc: 'Developing video concepts tailored to specific marketing goals, consumer psychology, and audience personas.',
      icon: Target
    },
    {
      title: 'AI Video Production',
      subtitle: 'Veo 3 & Google Flow Mastery',
      desc: 'Generating photorealistic video scenes, cinematic camera angles, and dramatic lighting environments.',
      icon: Video
    },
    {
      title: 'Commercial Advertising',
      subtitle: 'High-Conversion Product Ads',
      desc: 'Crafting product reveals, promotional commercials, and brand films engineered for commercial impact.',
      icon: Sparkles
    },
    {
      title: 'Social Media Content',
      subtitle: 'Multi-Platform Growth',
      desc: 'Designing engaging visual posts and short-form video content optimized for Facebook, YouTube, and Pinterest.',
      icon: Share2
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Foundational Quality</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Pillars</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-xl text-xs sm:text-sm font-light">
            Grounded in creative direction, marketing methodology, and cutting-edge visual tech.
          </p>
        </div>

        {/* 4 Trust Indicator Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustIndicators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white/5 p-7 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mb-6">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/30 font-mono">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
