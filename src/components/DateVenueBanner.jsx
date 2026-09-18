import React from 'react';

export default function DateVenueBanner() {
  return (
    <section className="w-full bg-[#1B0312] py-4 sm:py-8 md:py-10 px-3 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-[#59143D]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HD 2800px Sharp Royal Banner Frame */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_12px_45px_rgba(0,0,0,0.85)] bg-[#14020E] group">
          <img
            src="/assets/images/date_venue_banner_user.png"
            alt="AHMEDABAD - GUJARAT UNIVERSITY CONVENTION & EXHIBITION CENTRE"
            loading="eager"
            decoding="sync"
            style={{ imageRendering: 'high-quality' }}
            className="w-full h-auto block select-none object-contain transform transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
}
