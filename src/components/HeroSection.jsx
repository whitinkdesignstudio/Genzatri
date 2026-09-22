import React from 'react';

export default function HeroSection({ onBookClick }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-16 sm:pt-20 bg-[#2D0A22] overflow-hidden flex flex-col justify-between"
    >
      {/* Side Mandala Ornaments */}
      <img
        src="/assets/images/ChatGPT%20Image%20Sep%2016,%202026,%2012_35_35%20PM.png"
        alt="Side Mandala Flourish"
        className="absolute top-12 right-0 h-44 sm:h-64 md:h-80 w-auto object-contain pointer-events-none opacity-40 select-none z-0 filter brightness-125"
      />
      <img
        src="/assets/images/ChatGPT%20Image%20Sep%2016,%202026,%2012_35_35%20PM.png"
        alt="Side Mandala Flourish"
        className="absolute top-12 left-0 h-44 sm:h-64 md:h-80 w-auto object-contain scale-x-[-1] pointer-events-none opacity-40 select-none z-0 filter brightness-125"
      />

      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-radial from-[#59143D]/40 via-transparent to-transparent pointer-events-none" />

      {/* 1. First Top Banner: RJ MIT Spotlight Banner */}
      <div className="relative w-full flex items-center justify-center bg-[#2D0A22] overflow-hidden z-10">
        <img
          src="/assets/images/rj_mit_hero_banner.jpg"
          alt="PROUD TO HAVE RJ MIT - GUJARAT'S #1 RADIO JOCKEY - GENZATRI 2026"
          loading="eager"
          className="w-full h-auto max-h-[85vh] object-contain block select-none"
        />
      </div>

      {/* 2. Second Banner: Original GENZATRI AC Dome Garba Main Banner */}
      <div className="relative w-full flex items-center justify-center bg-[#2D0A22] overflow-hidden z-10 pt-3 sm:pt-6 border-t border-[#D4AF37]/30">
        <img
          src="/assets/images/main_banner_hero.png"
          alt="GENZATRI AC DOME GARBA - From Sunset To Sunrise In AC Dome"
          loading="eager"
          className="w-full h-auto max-h-[85vh] object-contain block select-none"
        />

        {/* Bottom Soft Blend Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#2D0A22] via-[#2D0A22]/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
