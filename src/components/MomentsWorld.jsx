import React, { useState } from 'react';
import { Image as ImageIcon, Video, Play, X } from 'lucide-react';
import { REELS, GALLERY_PHOTOS } from '../data/eventData';

export default function MomentsWorld() {
  const [activeTab, setActiveTab] = useState('videos'); // 'videos' | 'images'
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section id="gallery" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#091F26] text-[#F3EAD9] border-b border-[#00E5FF]/20 relative overflow-hidden">
      
      {/* Background Section Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-[#00E5FF]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Header Row with Title & Tab Switcher */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <span className="block text-xs font-black tracking-[0.3em] text-[#D4AF37] uppercase mb-1">
              EXPERIENCE THE ENERGY
            </span>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-black text-[#F3EAD9] tracking-tight">
              MOMENTS FROM OUR WORLD
            </h2>
          </div>

          {/* 2 Options Switcher: Images & Videos */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#06171E] border border-[#D4AF37]/40 shadow-lg">
            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'images'
                  ? 'bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227] text-[#0A060A] shadow-md'
                  : 'text-[#F3EAD9]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Images</span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-[#F5E096] via-[#D4AF37] to-[#C9A227] text-[#0A060A] shadow-md'
                  : 'text-[#F3EAD9]/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Display */}
        {activeTab === 'videos' ? (
          /* VIDEOS / REELS GRID */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {REELS.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setSelectedMedia({ type: 'video', ...reel })}
                className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#06171E] aspect-[9/16] cursor-pointer transform hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition-all duration-300 shadow-xl"
              >
                <img
                  src={reel.image}
                  alt="GenZatri Garba Reel"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06171E] via-transparent to-black/20" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#D4AF37] text-[#0A060A] flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300 pl-0.5 group-hover:bg-[#F5E096]">
                    <Play className="w-5 h-5 text-[#0A060A] fill-[#0A060A]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* IMAGES / PHOTOS GRID */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedMedia({ type: 'image', ...photo })}
                className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 bg-[#06171E] aspect-[4/5] cursor-pointer transform hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition-all duration-300 shadow-xl"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06171E] via-[#06171E]/30 to-transparent" />

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 inset-x-3 text-left">
                  <span className="block text-[9px] font-extrabold tracking-wider text-[#D4AF37] uppercase">
                    GENZATRI MOMENT
                  </span>
                  <span className="block text-xs font-black text-white leading-tight">
                    {photo.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal for Image or Video Preview */}
        {selectedMedia && (
          <div 
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#120A14] border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 text-center space-y-4"
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-black">
                <img 
                  src={selectedMedia.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                {selectedMedia.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-xl pl-1">
                      <Play className="w-8 h-8 text-[#0A060A] fill-[#0A060A]" />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#F5E096]">
                  {selectedMedia.title || "GENZATRI 2026 Celebration Moment"}
                </h4>
                <p className="text-xs text-[#EAD0B3]/80 mt-1">
                  Ahmedabad's Premier AC Dome Garba Festival
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
