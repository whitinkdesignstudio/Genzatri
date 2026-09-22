import React from 'react';

export default function HeroSection({ onBookClick }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-14 sm:pt-16 bg-[#2D0A22] overflow-hidden flex flex-col justify-between"
    >
      {/* 1. First Top Banner: RJ MIT Spotlight Banner (100% Edge-to-Edge Full Width, Compact Height) */}
      <div className="relative w-full flex items-center justify-center bg-[#2D0A22] overflow-hidden z-10">
        <img
          src="/assets/images/rj_mit_hero_banner.jpg"
          alt="PROUD TO HAVE RJ MIT - GUJARAT'S #1 RADIO JOCKEY - GENZATRI 2026"
          loading="eager"
          className="w-full h-[240px] xs:h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] object-cover object-top block select-none"
        />
      </div>

      {/* 2. Second Banner: Original GENZATRI AC Dome Garba Main Banner (100% Edge-to-Edge Full Width, Compact Height) */}
      <div className="relative w-full flex items-center justify-center bg-[#2D0A22] overflow-hidden z-10 border-t border-[#D4AF37]/30">
        <img
          src="/assets/images/main_banner_hero.png"
          alt="GENZATRI AC DOME GARBA - From Sunset To Sunrise In AC Dome"
          loading="eager"
          className="w-full h-[240px] xs:h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] object-cover object-center block select-none"
        />

        {/* Bottom Soft Blend Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#2D0A22] via-[#2D0A22]/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
