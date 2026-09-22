import React from 'react';

export default function HeroSection({ onBookClick }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-[72px] sm:pt-[80px] md:pt-[88px] pb-0 bg-[#2D0A22] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Banner 1: Atrangi Band Royal Navratri Garba Festival Banner - Full Width Edge-to-Edge */}
      <div className="relative w-full p-0 m-0 leading-none">
        <img
          src="/assets/images/atrangi_band_hero_banner.png"
          alt="VIMAL PRESENTS ROYAL NAVRATRI GARBA FESTIVAL - ATRANGI BAND"
          loading="eager"
          className="w-full h-auto block select-none p-0 m-0"
        />
      </div>

      {/* Banner 2: RJ MIT Spotlight Hero Banner - Full Width Edge-to-Edge */}
      <div className="relative w-full p-0 m-0 leading-none">
        <img
          src="/assets/images/rj_mit_hero_banner.png"
          alt="PROUD TO HAVE RJ MIT - GUJARAT'S #1 RADIO JOCKEY - GENZATRI 2026"
          loading="eager"
          className="w-full h-auto block select-none p-0 m-0"
        />
      </div>
    </section>
  );
}


