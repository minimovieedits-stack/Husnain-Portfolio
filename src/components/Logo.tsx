import React, { useState } from 'react';
import { Sparkles, Video } from 'lucide-react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true, size = 'md' }) => {
  const [imageError, setImageError] = useState(false);
  
  // Imgbb direct image URL attempts
  const primaryLogoUrl = 'https://i.ibb.co/7J0DqfCw/logo.png';
  const fallbackLogoUrl = 'https://ibb.co/7J0DqfCw';

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {!imageError ? (
        <div className="relative flex items-center justify-center">
          <img
            src={primaryLogoUrl}
            alt="Husnain Raza Logo"
            className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
              size === 'sm' ? 'h-8' : size === 'lg' ? 'h-14' : 'h-10'
            }`}
            onError={(e) => {
              // Try standard URL or trigger custom fallback
              const target = e.target as HTMLImageElement;
              if (target.src === primaryLogoUrl) {
                target.src = fallbackLogoUrl;
              } else {
                setImageError(true);
              }
            }}
          />
        </div>
      ) : null}

      {/* Sleek Custom Branded Logo Badge Fallback or Primary Text Overlay */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          {imageError && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-[1px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#0d0f17] rounded-[7px] flex items-center justify-center text-amber-400">
                <Video className="w-4 h-4" />
              </div>
            </div>
          )}
          <span className="font-display font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors text-lg md:text-xl">
            Husnain Raza
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
            AI Video & Marketing
          </span>
        )}
      </div>
    </div>
  );
};
