import React from 'react';

export default function HeroSection({ onBookClick }) {
  return (
    <section
      id="hero"
      className="relative w-full pt-14 sm:pt-16 bg-[#2D0A22] overflow-hidden"
    >
      {/* RJ MIT Spotlight Hero Banner - 100% Edge-to-Edge Full Width, 0% Cropped */}
      <div className="relative w-full flex items-center justify-center bg-[#2D0A22] overflow-hidden z-10">
        <img
          src="/assets/images/rj_mit_hero_banner.jpg"
          alt="PROUD TO HAVE RJ MIT - GUJARAT'S #1 RADIO JOCKEY - GENZATRI 2026"
          loading="eager"
          className="w-full h-auto block select-none"
        />
      </div>
    </section>
  );
}
