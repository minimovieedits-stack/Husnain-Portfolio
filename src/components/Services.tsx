import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_LIST } from '../data/portfolioData';
import { 
  Clapperboard, 
  Video, 
  Sparkles, 
  Film, 
  Share2, 
  LayoutGrid, 
  PlayCircle, 
  Grid,
  ArrowUpRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard': return Clapperboard;
      case 'Video': return Video;
      case 'Sparkles': return Sparkles;
      case 'Film': return Film;
      case 'Share2': return Share2;
      case 'LayoutGrid': return LayoutGrid;
      case 'PlayCircle': return PlayCircle;
      case 'Grid': return Grid;
      default: return Video;
    }
  };

  const handleConsult = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background glow elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            Creative Services Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Modern Brands</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-xl text-xs sm:text-sm font-light">
            From concept generation to cinematic AI rendering and organic social media growth strategy.
          </p>
        </div>

        {/* 8 Premium Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white/5 border border-white/10 p-6 sm:p-7 rounded-xl hover:border-white/30 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    {service.highlight && (
                      <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-black/40 border border-white/10 text-white/70">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Action Link */}
                <button
                  onClick={handleConsult}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/50 group-hover:text-white transition-colors pt-4 border-t border-white/10"
                >
                  <span>Request Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
