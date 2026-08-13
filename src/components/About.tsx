import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Sparkles, Video, TrendingUp, Award, ArrowDown, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  const timelineSteps = [
    { title: 'Digital Marketing', desc: 'Strategy, Social Media & Audience Growth', icon: TrendingUp },
    { title: 'Content Creation', desc: 'Visual Storytelling & Brand Identity', icon: UserCheck },
    { title: 'AI Video Creation', desc: 'Veo 3, Google Flow & Prompt Engineering', icon: Sparkles },
    { title: 'Commercial Advertising', desc: 'High-Impact Product & Brand Campaigns', icon: Video },
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block">The Visionary</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            Creative Mind.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
              Digital Strategy. AI-Powered.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-8"
            >
              Based in <strong className="text-white font-medium">Okara, Pakistan</strong>, I am <strong className="text-white font-semibold">Husnain Raza</strong>, specializing in creating cinematic AI videos and digital marketing strategies that help brands communicate powerful visual stories and drive measurable growth.
            </motion.p>

            {/* Experience Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-white/30 transition-all">
                <div className="text-2xl sm:text-3xl font-light text-white font-display mb-1">2+ Years</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Digital Marketing</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-white/30 transition-all">
                <div className="text-2xl sm:text-3xl font-light text-white font-display mb-1">6+ Months</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">AI Video Specialist</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-white/30 transition-all">
                <div className="text-2xl sm:text-3xl font-light text-white font-display mb-1">Multiple</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Global Campaigns</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-white/30 transition-all">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-1 uppercase tracking-widest">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Location</span>
                </div>
                <div className="text-xs text-white/80 font-light">Okara, Pakistan</div>
              </div>
            </div>

            {/* Quick Highlights list */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col gap-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Primary Approach</div>
              <p className="text-xs sm:text-sm text-white/80 italic font-light leading-relaxed">
                "Combining analytical marketing strategy with next-generation AI visuals to give every brand a distinct, high-status voice."
              </p>
            </div>
          </div>

          {/* Right Column: Creative Profile Card + Animated Journey Timeline */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Creative Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl relative overflow-hidden glow-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-sm tracking-tighter italic">
                  HR
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">HUSNAIN RAZA</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">AI Video Creator & Marketer</p>
                  <p className="text-[10px] text-white/30 font-mono">Okara, Pakistan</p>
                </div>
              </div>

              {/* Journey Timeline */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Creative Journey</div>
                
                {timelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <React.Fragment key={step.title}>
                      <div className="flex items-start gap-3 group">
                        <div className="p-2 rounded-lg bg-white/10 border border-white/15 text-white group-hover:bg-white group-hover:text-black transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-white">{step.title}</div>
                          <div className="text-[11px] text-white/50">{step.desc}</div>
                        </div>
                      </div>

                      {idx < timelineSteps.length - 1 && (
                        <div className="ml-4 border-l border-white/20 h-3 my-1" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
