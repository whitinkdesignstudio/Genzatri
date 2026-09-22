import React from 'react';

export default function HeroSection({ onBookClick }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-14 sm:pt-16 pb-3 sm:pb-6 bg-[#2D0A22] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Side Mandala Ornaments for Ambient Background */}
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

      {/* RJ MIT Spotlight Hero Banner - Reduced Height, 100% Responsive, 0% Cropped */}
      <div className="relative w-full max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 flex items-center justify-center z-10">
        <img
          src="/assets/images/rj_mit_hero_banner.jpg"
          alt="PROUD TO HAVE RJ MIT - GUJARAT'S #1 RADIO JOCKEY - GENZATRI 2026"
          loading="eager"
          className="w-full h-auto max-h-[48vh] sm:max-h-[55vh] md:max-h-[60vh] lg:max-h-[500px] object-contain rounded-xl sm:rounded-2xl shadow-2xl block select-none"
        />
      </div>
    </section>
  );
}
