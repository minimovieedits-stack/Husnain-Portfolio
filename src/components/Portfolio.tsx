import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { VideoModal } from './VideoModal';
import { GalleryLightbox } from './GalleryLightbox';
import { Play, Sparkles, Film, Image as ImageIcon, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideoProject, setSelectedVideoProject] = useState<Project | null>(null);
  const [selectedGalleryProject, setSelectedGalleryProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'AI Video',
    'Commercial Ads',
    'Product Ads',
    'Cinematic',
    'Graphic Design',
    'Social Media'
  ];

  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.filterTags.includes(activeCategory);
  });

  const handleProjectClick = (project: Project) => {
    if (project.type === 'video') {
      setSelectedVideoProject(project);
    } else {
      setSelectedGalleryProject(project);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-1 block">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-white font-display max-w-3xl leading-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Projects</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-xl text-xs sm:text-sm font-light">
            Explore commercial AI advertisements, cinematic brand films, product showcases, and digital growth campaigns.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12 text-[10px] uppercase tracking-widest font-medium">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleProjectClick(project)}
                className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-white/30 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative w-full aspect-[4/3] bg-[#0a0a0a] overflow-hidden">
                  
                  {/* Background Artwork */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  
                  {/* Category Badge Top */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest text-white/70 font-mono">
                      {project.category}
                    </span>
                  </div>

                  {/* Play / View Hover Circular Glass Button */}
                  <div className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center bg-white/10 rounded-full border border-white/20 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    {project.type === 'video' ? (
                      <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                    ) : (
                      <Eye className="w-3 h-3 text-white" />
                    )}
                  </div>

                  {/* Center Visual Art Display */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                      {project.type === 'video' ? (
                        <Film className="w-4 h-4 text-white" />
                      ) : (
                        <ImageIcon className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                      {project.type === 'video' ? 'AI STREAMABLE' : 'GALLERY'}
                    </span>
                  </div>

                  {/* Bottom Text Info */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <div className="text-[9px] uppercase tracking-widest text-white/50 mb-0.5">
                      {project.type === 'video' ? 'AI Commercial' : 'Campaign Showcase'}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-tight text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-4 py-3 bg-[#080808] border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  <span>{project.type === 'video' ? 'Play Stream' : 'View Assets'}</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Video Modal */}
      <VideoModal
        project={selectedVideoProject}
        onClose={() => setSelectedVideoProject(null)}
      />

      {/* Gallery Lightbox */}
      <GalleryLightbox
        project={selectedGalleryProject}
        onClose={() => setSelectedGalleryProject(null)}
      />
    </section>
  );
};
