import React from 'react';
import { ARTISTS } from '../data/eventData';

export default function ArtistsSection() {
  return (
    <section id="lineup" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#091F26] text-[#F3EAD9] border-b border-[#00E5FF]/20 relative overflow-hidden">

      {/* Top Corner Mandala Blossom Ornaments (Replaced with User Image) */}
      <img
        src="/assets/images/ChatGPT%20Image%20Sep%2016,%202026,%2012_35_35%20PM.png"
        alt="Corner Mandala Ornament"
        className="absolute -top-6 -right-6 sm:top-0 sm:right-0 h-44 sm:h-64 md:h-80 lg:h-96 w-auto object-contain object-right pointer-events-none opacity-60 select-none z-0 filter brightness-125 drop-shadow-[0_0_12px_rgba(0,229,255,0.35)]"
      />
      <img
        src="/assets/images/ChatGPT%20Image%20Sep%2016,%202026,%2012_35_35%20PM.png"
        alt="Corner Mandala Ornament"
        className="absolute -top-6 -left-6 sm:top-0 sm:left-0 h-44 sm:h-64 md:h-80 lg:h-96 w-auto object-contain object-right scale-x-[-1] pointer-events-none opacity-60 select-none z-0 filter brightness-125 drop-shadow-[0_0_12px_rgba(0,229,255,0.35)]"
      />

      {/* Subtle Cyan Glow Accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 text-center relative z-10">

        {/* Section Header */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-4">
            <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <h2 className="font-serif-display text-3xl sm:text-5xl font-black text-[#F3EAD9] tracking-tight">
              OUR ARTISTS
            </h2>
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-xs sm:text-sm font-extrabold text-[#D4AF37] uppercase tracking-[0.2em]">
            SOULFUL VOICES. ELECTRIFYING NIGHTS.
          </p>
        </div>

        {/* 6 Premium Arch Jharokha Artist Frames */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 items-stretch">
          {ARTISTS.map((artist) => (
            <div
              key={artist.id}
              className="flex flex-col items-center justify-between group transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Jharokha Arch Frame Container (Gold Glow) */}
              <div className="w-full relative rounded-t-[90px] rounded-b-2xl overflow-hidden border-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] shadow-2xl bg-gradient-to-b from-[#27071B] via-[#1D0514] to-[#12030D] transition-all duration-300 p-2">

                {/* Arch Photo Area */}
                <div className="relative w-full aspect-[4/5] rounded-t-[80px] rounded-b-xl overflow-hidden bg-[#0C1B22] flex items-center justify-center">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>

              {/* Date & Artist Name Details Below Image Layout */}
              <div className="pt-3 text-center space-y-1 w-full px-1 flex flex-col justify-start min-h-[75px]">
                <span className="block font-serif-display font-black text-xs sm:text-sm text-[#D4AF37] tracking-wider">
                  {artist.date}
                </span>
                <h3 className="font-serif-display font-black text-xs sm:text-sm text-[#F3EAD9] leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {artist.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
