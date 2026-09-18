import React from 'react';
import { GALLERY_PHOTOS } from '../data/eventData';
import { Sparkles } from 'lucide-react';

// Elegant Royal Brass Hanging Diyas & Bells for Festive Illuminations (Zero Dancers)
const HangingDiyasOrnament = ({ position = "left" }) => {
  const isLeft = position === "left";
  return (
    <div 
      className={`absolute top-0 ${isLeft ? "left-0 sm:left-3 md:left-6" : "right-0 sm:right-3 md:right-6"} pointer-events-none select-none z-0 ${isLeft ? "" : "scale-x-[-1]"}`}
      aria-hidden="true"
    >
      <svg width="190" height="230" viewBox="0 0 190 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-75 sm:opacity-85">
        {/* Top Swag Garland */}
        <path d="M 0 0 Q 70 30 180 0" stroke="#C9A227" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
        <circle cx="25" cy="8" r="3" fill="#D4AF37" />
        <circle cx="65" cy="17" r="3.5" fill="#D4AF37" />
        <circle cx="110" cy="18" r="3.5" fill="#D4AF37" />
        <circle cx="150" cy="10" r="3" fill="#D4AF37" />

        {/* Chain 1 (Center - Longest) */}
        <line x1="85" y1="0" x2="85" y2="135" stroke="#C9A227" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="85" cy="137" r="3" fill="#D4AF37" />
        {/* Traditional Diya Lamp 1 */}
        <path d="M 72 150 C 72 162 98 162 98 150 Z" fill="#2D0A22" stroke="#D4AF37" strokeWidth="1.6" />
        <path d="M 70 150 Q 85 153 100 150 Q 85 147 70 150" fill="#D4AF37" />
        {/* Golden Glowing Flame */}
        <path d="M 85 140 Q 88.5 145 85 149 Q 81.5 145 85 140" fill="#F5E096" />
        <circle cx="85" cy="145" r="9" fill="#F5E096" fillOpacity="0.35" />

        {/* Chain 2 (Outer - Medium) */}
        <line x1="35" y1="0" x2="35" y2="90" stroke="#C9A227" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="35" cy="92" r="2.5" fill="#D4AF37" />
        {/* Temple Bell */}
        <path d="M 26 103 C 26 96 44 96 44 103 L 47 110 C 47 112 23 112 23 110 Z" fill="#2D0A22" stroke="#D4AF37" strokeWidth="1.4" />
        <circle cx="35" cy="114" r="2.5" fill="#F5E096" />

        {/* Chain 3 (Inner - Shorter) */}
        <line x1="140" y1="0" x2="140" y2="70" stroke="#C9A227" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="140" cy="72" r="2.5" fill="#D4AF37" />
        {/* Diya Lamp 3 */}
        <path d="M 130 83 C 130 92 150 92 150 83 Z" fill="#2D0A22" stroke="#D4AF37" strokeWidth="1.4" />
        <path d="M 128 83 Q 140 85 152 83 Q 140 81 128 83" fill="#D4AF37" />
        <path d="M 140 75 Q 142.5 79 140 82 Q 137.5 79 140 75" fill="#F5E096" />
        <circle cx="140" cy="79" r="7" fill="#F5E096" fillOpacity="0.3" />
      </svg>
    </div>
  );
};

// Crossed Golden Dandiya Sticks Vector Accent
const CrossedDandiyaIcon = ({ className = "w-6 h-6 text-[#C9A227]" }) => (
  <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor">
    {/* Dandiya Stick 1 */}
    <line x1="5" y1="23" x2="23" y2="5" stroke="#C9A227" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M4 24l2.5-2.5" stroke="#2D0A22" strokeWidth="4" strokeLinecap="round" />
    {/* Dandiya Stick 2 */}
    <line x1="5" y1="5" x2="23" y2="23" stroke="#D4AF37" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M4 4l2.5 2.5" stroke="#2D0A22" strokeWidth="4" strokeLinecap="round" />
    {/* Center Golden Ghunghroo Bell */}
    <circle cx="14" cy="14" r="3" fill="#F5E096" stroke="#2D0A22" strokeWidth="1.2" />
  </svg>
);

export default function SneakPeekSection() {
  const polaroidTilts = [
    '-rotate-6 hover:rotate-0',
    'rotate-3 hover:rotate-0',
    '-rotate-2 hover:rotate-0',
    'rotate-5 hover:rotate-0',
    '-rotate-4 hover:rotate-0',
    'rotate-6 hover:rotate-0'
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F1E4] text-[#2D0A22] border-b border-[#D4AF37]/40 relative overflow-hidden">

      {/* 1. Left Corner Hanging Royal Brass Diyas & Temple Bells */}
      <HangingDiyasOrnament position="left" />

      {/* 2. Right Corner Hanging Royal Brass Diyas & Temple Bells */}
      <HangingDiyasOrnament position="right" />

      {/* 3. Subtle Ambient Golden Sparkles */}
      <div className="absolute top-10 left-1/4 text-[#D4AF37]/35 pointer-events-none select-none">
        <Sparkles className="w-5 h-5 animate-pulse" />
      </div>
      <div className="absolute top-16 right-1/4 text-[#D4AF37]/35 pointer-events-none select-none">
        <Sparkles className="w-6 h-6 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Header with Crossed Dandiya Sticks & Gold Filigree */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#2D0A22]/50" />
              <CrossedDandiyaIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A227] hidden sm:block" />
            </div>

            <h2 className="font-serif-display text-2xl sm:text-4xl font-black tracking-[0.18em] sm:tracking-[0.22em] text-[#2D0A22] uppercase">
              A SNEAK PEEK INTO THE MAGIC
            </h2>

            <div className="flex items-center gap-2">
              <CrossedDandiyaIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A227] hidden sm:block" />
              <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#2D0A22]/50" />
            </div>
          </div>

          <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#2D0A22]/75 uppercase">
            PEOPLE · DANCE · LIGHTS · HAPPINESS
          </p>
        </div>

        {/* Tilted Overlapping Polaroid Photo Cards Grid & Script Line */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 pt-4 pb-8">

          {/* Tilted Polaroid Cards Row */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center justify-items-center">
            {GALLERY_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative bg-white p-2 md:p-2.5 pb-6 md:pb-8 shadow-2xl rounded-sm border border-gray-200 cursor-pointer transform transition-transform duration-300 hover:z-20 hover:scale-110 ${polaroidTilts[index % polaroidTilts.length]
                  }`}
              >
                <div className="w-full aspect-[4/5] overflow-hidden bg-gray-900 rounded-2xs">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/ac_dome_garba.jpg';
                    }}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Far Right Script Line Overlay ("Same Energy Next Year?") */}
          <div className="shrink-0 text-center lg:text-right pt-4 lg:pt-0">
            <span className="font-script-accent text-4xl sm:text-5xl md:text-6xl text-[#0B2E2A] drop-shadow-sm block leading-none">
              Same Energy <br /> Next Year?
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
