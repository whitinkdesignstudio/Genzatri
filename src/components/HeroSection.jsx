import React from 'react';

export default function HeroSection({ onBookClick }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-16 sm:pt-20 bg-[#2D0A22] overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-radial from-[#59143D]/40 via-transparent to-transparent pointer-events-none" />

      {/* Main Banner Container - 100% Full Width Edge-to-Edge with Perfect Top Alignment */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[460px] lg:h-[480px] flex items-center justify-center bg-[#2D0A22] overflow-hidden">
        
        {/* Full-width Banner Image (object-top guarantees the top GENZATRI logo is NEVER cropped) */}
        <img
          src="/assets/images/main_banner_hero.png"
          alt="GENZATRI AC DOME GARBA - From Sunset To Sunrise In AC Dome"
          loading="eager"
          className="w-full h-full object-cover object-top block select-none"
        />

        {/* Bottom Soft Blend Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#2D0A22]/60 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}







