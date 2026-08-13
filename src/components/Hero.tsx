import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Play, Video, Clapperboard, CheckCircle2, Film } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center overflow-hidden bg-[#050505] bg-grain">
      {/* Background Cinematic Glow Orbs matching design HTML */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-orange-500/15 blur-[110px] rounded-full pointer-events-none opacity-60 animate-pulse-glow" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability & Specialty Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm"
              >
                <Sparkles className="w-3 h-3 text-white/90" />
                <span>AI Video Creator • Digital Marketer</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] uppercase tracking-[0.2em]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Freelance</span>
              </motion.div>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.95] mb-6 font-display"
            >
              TURNING IDEAS<br />
              INTO CINEMATIC<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">
                EXPERIENCES.
              </span>
            </motion.h1>

            {/* Supporting Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm sm:text-base text-white/60 font-light max-w-xl leading-relaxed mb-8"
            >
              Based in Okara, Pakistan, I specialize in creating cinematic AI videos, commercial advertisements, product reveals, and digital growth strategies for modern global brands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo('portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-all shadow-xl"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>View My Work</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/10 transition-colors backdrop-blur-md"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-10 w-full"
            >
              <div>
                <div className="text-2xl font-light text-white font-display">2+ Years</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Digital Marketing</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white font-display">6+ Months</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">AI Video Specialist</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white font-display">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Cinematic Quality</div>
              </div>
            </motion.div>

          </div>

          {/* Right Visual Stage: Floating Cinematic Showcase Cards */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-xl p-[1px] bg-white/10 shadow-2xl glow-card"
            >
              <div className="w-full h-full bg-[#080808] rounded-[11px] overflow-hidden relative flex flex-col justify-between p-6 bg-grain border border-white/10">
                
                {/* Visual Ambient Player Frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-80" />

                {/* Top Bar inside frame */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] uppercase tracking-widest text-white/80 font-mono">
                    <Film className="w-3 h-3 text-white" />
                    <span>AI CINEMATIC STUDIO</span>
                  </div>
                </div>

                {/* Central Visual Art Component */}
                <div className="relative z-10 my-auto py-8 text-center flex flex-col items-center justify-center">
                  <div
                    className="relative w-20 h-20 rounded-full bg-white/10 border border-white/20 p-1 shadow-2xl flex items-center justify-center mb-6 group cursor-pointer hover:bg-white/20 transition-all duration-300"
                    onClick={() => handleScrollTo('portfolio')}
                  >
                    <div className="w-full h-full bg-white text-black rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Play className="w-6 h-6 fill-black ml-0.5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-light italic text-white font-display mb-1">Husnain Raza Studio</h3>
                  <p className="text-[11px] uppercase tracking-widest text-white/50 max-w-xs">
                    AI Commercials &bull; Product Ads &bull; Brand Films
                  </p>
                </div>

                {/* Floating Glass Badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-16 -left-4 sm:-left-6 glass-panel px-4 py-3 rounded-xl border border-white/15 shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="p-2 rounded-lg bg-white/10 text-white">
                    <Clapperboard className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-tight text-white">Veo 3 & Flow</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40">Cinematic Generation</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-12 -right-4 sm:-right-6 glass-panel px-4 py-3 rounded-xl border border-white/15 shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-tight text-white">8 Selected Works</div>
                    <div className="text-[9px] uppercase tracking-widest text-emerald-400 font-mono">Streamable 4K</div>
                  </div>
                </motion.div>

                {/* Bottom Bar inside frame */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 font-mono">
                  <span>OKARA, PAKISTAN</span>
                  <span className="text-white/80">AI VIDEO ENGINE</span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20" onClick={() => handleScrollTo('about')}>
        <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-1.5 rounded-full border border-white/20 bg-white/5 text-white"
        >
          <ArrowDown className="w-3 h-3" />
        </motion.div>
      </div>
    </section>
  );
};
